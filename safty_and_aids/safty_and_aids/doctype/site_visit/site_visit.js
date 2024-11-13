frappe.ui.form.on("Site Visit", {
    onload(frm) {
        if (frm.is_new()) {
            fill_child_tables(frm);
        }
    },
    refresh(frm) {
        if (frm.is_new()) {
            fill_child_tables

        }
    }
});

function fill_child_tables(frm) {
    // Clear any outdated data in the 'site_visit_item_first' child table
    frm.clear_table('site_visit_item_first');
    frm.clear_table('site_visit_item_second');
    let idx = 0;

    // Check if object has data
    frappe.call({
        method: "safty_and_aids.safty_and_aids.doctype.site_visit.site_visit.fetch_fire_fighting_system_items",
        args: {
            // Optional arguments
        },
        callback: function (r) {
            if (r.message.first) {
                // Iterate through each row in the obj array
                r.message.first.forEach(item => {
                    // Add a new row in the 'site_visit_item_first' child table
                    let newRow = frm.add_child("site_visit_item_first");

                    // Populate the fields in the new row
                    newRow.description_english = item.custom_arabic_name;
                    newRow.description_arabic = item.item_code;
                    newRow.sr_no = item.pb_name;
                });

                // Refresh the child table to display the new rows
                frm.refresh_field("site_visit_item_first");
            } else {
                frappe.msgprint("No Data Found For First Child Table.");
            }
            if (r.message.second) {
                // Iterate through each row in the obj array
                r.message.second.forEach(item => {
                    idx ++;
                    let newRow = frm.add_child("site_visit_item_second");
                    // Populate the fields in the new row
                    newRow.description_english = item.item_code;
                    newRow.description_arabic = item.custom_arabic_name;
                    newRow.sr_no = idx;
                });

                // Refresh the child table to display the new rows
                frm.refresh_field("site_visit_item_second");
            } else {
                frappe.msgprint("No Data Found For First Child Table.");
            }

        }
    });


}



