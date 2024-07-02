frappe.ui.form.on('Maintenance Visit', {
    refresh(frm) {
        // your code here
    },


})

frappe.ui.form.on('Maintenance Visit Purpose', {

    item_code: function (frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        if (row.item_code) {
            frm.clear_table("custom_maintenance_visit_items");
            frappe.call({
                method: 'safty_and_aids.utils.fetch_maintenance_visit_template',

                args: {
                    item_code: row.item_code
                },
                callback: function (response) {
                    if (response.message) {
                        response.message.mvt.forEach(function (p) {
                            let entry = frm.add_child("custom_maintenance_visit_items");
                            entry.activities = p.activities
                        });
                    } else {
                        frappe.msgprint(__('Record not found for Item: {0}', [row.item_code]));
                    }
                    frm.refresh_field('custom_maintenance_visit_items');
                }
            });
        }


    },

})

