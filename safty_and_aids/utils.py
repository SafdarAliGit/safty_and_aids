import frappe


@frappe.whitelist()
def fetch_maintenance_visit_template(**args):
    item_code = args.get('item_code')
    mvt = frappe.qb.DocType("Maintenance Visit Template")
    query = (
        frappe.qb.from_(mvt)
        .select(
            mvt.activities
        ).where(mvt.item == item_code)
    )
    query_result = query.run(as_dict=True)

    return {
        "mvt": query_result,
    }


@frappe.whitelist()
def fetch_product_bundle_count(**args):
    item_code = args.get('item_code')
    pb = frappe.db.get_value("Product Bundle", {"new_item_code": item_code}, "name")
    if pb:
        pb_count = frappe.db.count("Product Bundle Item", {"parent": pb})
        return {
            "pb_count": pb_count,
        }
    else:
        return {
            "pb_count": 1,
        }


@frappe.whitelist()
def get_total_from_quotation(**args):
    id = args.get('id')
    q = frappe.get_doc("Quotation", id)
    if q:
        return {
            "total": q.total,
        }

    else:
        return {
            "total": 0,
        }


# @frappe.whitelist()
# def fetch_item_for_quotation(**args):
#     ids_first = frappe.parse_json(args.get('ids_first'))
#     pbi_name_tuple = tuple(i["pbi_name"] for i in ids_first if i["pbi_name"])
#     item_code_tuple = tuple(d["item_code"] for d in ids_first if not d["pbi_name"])
#
#     if not pbi_name_tuple:
#         return ()
#
#     parent_tuple = frappe.db.sql("""
#         SELECT DISTINCT parent
#         FROM `tabProduct Bundle Item`
#         WHERE `name` IN %s
#     """, (pbi_name_tuple,))
#
#     single_dimension_parent_tuple = tuple(item[0] for item in parent_tuple)
#
#     product_bundle_child_items = frappe.db.sql("""
#             SELECT item_code,custom_arabic_name,uom
#             FROM `tabProduct Bundle Item`
#             WHERE `parent` IN %s
#             ORDER BY name DESC
#         """, (single_dimension_parent_tuple,),as_dict=True)
#
#     items = frappe.db.sql("""
#                 SELECT item_code,custom_item_name_arabic AS custom_arabic_name,stock_uom AS uom
#                 FROM `tabItem`
#                 WHERE `item_code` IN %s
#             """, (item_code_tuple,), as_dict=True)
#
#     combined_items = product_bundle_child_items + items
#
#     return combined_items


