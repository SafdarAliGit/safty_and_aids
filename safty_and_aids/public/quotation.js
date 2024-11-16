frappe.ui.form.on('Quotation', {
    refresh(frm) {
        // your code here
    }
})

frappe.ui.form.on('Quotation Item', {
    item_code: function (frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        if (row.item_code) {
            frappe.call({
                method: 'safty_and_aids.utils.fetch_product_bundle_count',
                args: {
                    item_code: row.item_code
                },
                callback: function (response) {
                    if (response.message) {
                        frappe.model.set_value(cdt, cdn, "custom_total_qty", flt(response.message.pb_count) * flt(row.qty || 1));
                    } else {
                        frappe.msgprint(__('Record not found for Item: {0}', [row.item_code]));
                    }
                }
            });
        }
    },
    qty: function (frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        if (row.item_code) {
            frappe.call({
                method: 'safty_and_aids.utils.fetch_product_bundle_count',
                args: {
                    item_code: row.item_code
                },
                callback: function (response) {
                    if (response.message) {
                        frappe.model.set_value(cdt, cdn, "custom_total_qty", flt(response.message.pb_count) * flt(row.qty || 1));
                    } else {
                        frappe.msgprint(__('Record not found for Item: {0}', [row.item_code]));
                    }
                }
            });
        }
    }

});

