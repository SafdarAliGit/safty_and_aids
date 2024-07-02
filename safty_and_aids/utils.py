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

