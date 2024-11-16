# Copyright (c) 2024, portal and contributors
# For license information, please see license.txt

import frappe
import string
from frappe.model.document import Document


class SiteVisit(Document):
    pass


@frappe.whitelist()
def fetch_fire_fighting_system_items():
    query1 = """
	SELECT 
    CASE 
        WHEN pbi.item_code IS NULL THEN pb.new_item_code 
        ELSE pbi.item_code 
    END AS item_code,
    CASE 
        WHEN pbi.custom_arabic_name IS NULL THEN pb.custom_arabic_name 
        ELSE pbi.custom_arabic_name 
    END AS custom_arabic_name,
    pb.name AS pb_name,
    pbi.name AS pbi_name
	FROM 
		`tabProduct Bundle` pb
	LEFT JOIN 
		`tabProduct Bundle Item` pbi ON pbi.parent = pb.name
	LEFT JOIN
		`tabItem` i ON pb.new_item_code = i.item_code
	WHERE
		i.item_group = 'Fire Fighting System'
	
	UNION ALL
	
	SELECT 
		item_code,
		custom_item_name_arabic AS custom_arabic_name,
		NULL AS pb_name,
		NULL AS pbi_name
	FROM
		`tabItem` item
	WHERE
		item.item_group = 'Fire Fighting System' AND item.is_stock_item = 1
		AND item_code NOT IN (SELECT pbi.item_code FROM `tabProduct Bundle` pb
							   LEFT JOIN `tabProduct Bundle Item` pbi ON pbi.parent = pb.name
							   LEFT JOIN `tabItem` i ON pb.new_item_code = i.item_code
							   WHERE i.item_group = 'Fire Fighting System')
	
	ORDER BY 
    pb_name DESC, pbi_name DESC;
	"""

    query2 = """
	SELECT
		item_code,custom_item_name_arabic AS custom_arabic_name, idx
	FROM `tabItem` item
	WHERE
		item.item_group = 'Fire Alarm System'
	"""

    result1 = frappe.db.sql(query1, as_dict=True)
    result2 = frappe.db.sql(query2, as_dict=True)

    # Initialize serial tracking variables
    serial_number = 1
    alphabet_series = iter(string.ascii_uppercase)  # A, B, C, ...
    current_group = None

    for item in result1:
        pb_name = item["pb_name"]

        # New group or standalone empty item
        if pb_name != current_group:
            current_group = pb_name
            alphabet_series = iter(string.ascii_uppercase)  # Reset alphabetical series

            # For a new group, assign a number and prepare for alphabetical increment
            item["pb_name"] = str(serial_number)
            serial_number += 1
        else:
            # For subsequent items in the same group, assign an alphabetical series
            item["pb_name"] = next(alphabet_series)

        # For standalone (None) items, continue the numbering in the main numeric series
        if pb_name is None:
            item["pb_name"] = str(serial_number)
            serial_number += 1
            # end data manipulation

    data = {}
    if result1:
        data.update({"first": result1})
    else:
        data.update({"first": []})
    if result2:
        data.update({"second": result2})
    else:
        data.update({"second": []})

    return data


@frappe.whitelist()
def make_quotation(source_name):
    source_doctype = frappe.get_doc("Site Visit", source_name)
    doc = frappe.new_doc("Quotation")
    doc.quotation_to: "Customer"
    doc.party_name: source_name.customer
    doc.custom_site_visit: source_doctype.name
    doc.company: source_doctype.company

    return doc
