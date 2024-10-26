frappe.ui.form.on('Customer Group', {
    refresh(frm) {


    },
    custom_company: function (frm) {
        addRowToCreditLimits(frm);
    }
});

function addRowToCreditLimits(frm) {
    // Refresh the 'credit_limits' child table first to clear any outdated data
    frm.clear_table('credit_limits');

    // Get the value from the 'custom_company' field
    const companyValue = frm.doc.custom_company;

    if (companyValue) {
        // Add a new row in the 'credit_limits' child table
        let newRow = frm.add_child("credit_limits");

        // Set the 'company' field in the new row with the value from 'custom_company'
        newRow.company = companyValue;

        // Refresh the child table to display the new row
        frm.refresh_field("credit_limits");
    } else {
        frappe.msgprint("Please fill in the 'custom_company' field.");
    }
}





