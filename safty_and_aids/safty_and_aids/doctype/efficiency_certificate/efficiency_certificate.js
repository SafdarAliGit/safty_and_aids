// Copyright (c) 2024, portal and contributors
// For license information, please see license.txt

frappe.ui.form.on("Efficiency Certificate", {
    refresh(frm) {

        frm.set_query("document_type", function () {
            return {
                filters: [
                    ["DocType", "name", "in", ["Contract", "Quotation", "Sales Order", "Sales Invoice"]],
                ]
            };
        });

        frm.set_query("document_no", function () {
            if (frm.doc.document_type === "Contract" || frm.doc.document_type === "Quotation") {
                return {
                    filters: [
                        [frm.doc.document_type, "party_name", "=", frm.doc.customer],
                    ]
                };
            } else {
                return {
                    filters: [
                        [frm.doc.document_type, "customer", "=", frm.doc.customer],
                    ]
                };
            }
        });

    },
});
