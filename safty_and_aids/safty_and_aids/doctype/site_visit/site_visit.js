frappe.ui.form.on("Site Visit", {
    onload(frm) {
        if (frm.is_new()) {
            fill_child_tables(frm);
        }
    },
    refresh(frm) {
        if (frm.doc.docstatus === 1) {
            make_quotation(frm);
        }


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
                    newRow.description_english = item.item_code;
                    newRow.description_arabic = item.custom_arabic_name;
                    newRow.sr_no = item.pb_name;
                    newRow.product_bundle_item = item.pbi_name;
                });

                // Refresh the child table to display the new rows
                frm.refresh_field("site_visit_item_first");
            } else {
                frappe.msgprint("No Data Found For First Child Table.");
            }
            if (r.message.second) {
                // Iterate through each row in the obj array
                r.message.second.forEach(item => {
                    idx++;
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

function make_quotation(frm) {
    // Add a custom button to run the function
    frm.add_custom_button('Make Quotation', function () {
        // Access the child table first
        // let childTableFirst = frm.doc.site_visit_item_first;
        // let descriptions_first = [];

        // Loop through each row in the child table first
        // childTableFirst.forEach(row => {
        //     // Check if 'is_working' is set to the desired value (e.g., 'Yes')
        //     if (row.is_working === 1) {
        //         // Add the 'description_english' value to the descriptions array
        //         descriptions_first.push({item_code: row.description_english, pbi_name: row.product_bundle_item});
        //     }
        // });

        // Access the child table first
        // let childTableSecond = frm.doc.site_visit_item_second;
        // let descriptions_second = [];

        // Loop through each row in the child table first
        // childTableSecond.forEach(row => {
        //     // Check if 'is_working' is set to the desired value (e.g., 'Yes')
        //     if (row.is_working === 1) {
        //         // Add the 'description_english' value to the descriptions array
        //         descriptions_second.push({item_code: row.description_english});
        //     }
        // });

        // Use the descriptions as needed
        // if (descriptions_first.length > 0 || descriptions_second.length > 0) {
        //
        //     frappe.call({
        //         method: "safty_and_aids.utils.fetch_item_for_quotation",
        //         args: {
        //             ids_first: descriptions_first,
        //             ids_second: descriptions_second
        //         },
        //         callback: function (response) {
        //             if (response.message) {
        //                 console.log(response);
        //             }
        //         },
        //         error: function (error) {
        //             frappe.msgprint({
        //                 title: __('Error'),
        //                 indicator: 'red',
        //                 message: __('Failed to send data to the server.')
        //             });
        //         }
        //     });
        //
        //
        // } else {
        //     frappe.msgprint("No working sites found.");
        // }

        frappe.route_options = {
            party_name: frm.doc.customer,
            custom_site_visit: frm.doc.name,
        };

        frappe.set_route("Form", "Quotation", "new");
    });
}



