frappe.ui.form.on('Contract', {
    onload: function(frm) {
        if (frm.doc.language === "Arabic") {
            frm.set_value('Contract-Ar PF');
        } else{
            frm.set_value('Contract-Eng PF');
        }
    },
    refresh(frm) {
        // your code here
    },
    document_name:function (frm){
            frappe.call({
                method: 'safty_and_aids.utils.get_total_from_quotation',
                args: {
                    id: frm.doc.document_name
                },
                callback: function (response) {
                    if (response.message) {
                          frm.set_value("custom_total", response.message.total);
                    } else {
                        frappe.msgprint(__('Record not found for Quotation: {0}', [frm.doc.document_name]));
                    }
                }
            });

    }
})

