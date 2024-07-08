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
