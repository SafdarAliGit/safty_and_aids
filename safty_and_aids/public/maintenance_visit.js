frappe.ui.form.on('Maintenance Visit', {
    refresh(frm) {
        if (frm.doc.purposes.length == 0) {
            // Hide fields when purposes are empty
            frm.fields_dict['custom_clean_agent'].df.hidden = true;
            frm.fields_dict['custom_application'].df.hidden = true;
            frm.fields_dict['custom_type_of_detection'].df.hidden = true;
            frm.fields_dict['custom_type_of_operation'].df.hidden = true;
            frm.fields_dict['custom_water_supply_source'].df.hidden = true;
            frm.fields_dict['custom_water_tank'].df.hidden = true;
            frm.fields_dict['custom_type_of_water'].df.hidden = true;
            frm.fields_dict['custom_location_area_unit'].df.hidden = true;
            frm.fields_dict['custom_main_power_supply'].df.hidden = true;
            frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
            frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;
        } else {
            // Show/Hide fields based on the item_code
            if (frm.doc.purposes[0].item_code == 'Fire Suppression System') {
                frm.fields_dict['custom_clean_agent'].df.hidden = false;
                frm.fields_dict['custom_application'].df.hidden = false;
                frm.fields_dict['custom_type_of_detection'].df.hidden = false;
                frm.fields_dict['custom_location_area_unit'].df.hidden = false;
                frm.fields_dict['custom_main_power_supply'].df.hidden = false;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = false;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = false;

                frm.fields_dict['custom_type_of_operation'].df.hidden = true;
                frm.fields_dict['custom_water_supply_source'].df.hidden = true;
                frm.fields_dict['custom_water_tank'].df.hidden = true;
                frm.fields_dict['custom_type_of_water'].df.hidden = true;
            } else {
                frm.fields_dict['custom_clean_agent'].df.hidden = true;
                frm.fields_dict['custom_application'].df.hidden = true;
                frm.fields_dict['custom_type_of_detection'].df.hidden = true;
                frm.fields_dict['custom_location_area_unit'].df.hidden = true;
                frm.fields_dict['custom_main_power_supply'].df.hidden = true;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;

                frm.fields_dict['custom_type_of_operation'].df.hidden = false;
                frm.fields_dict['custom_water_supply_source'].df.hidden = false;
                frm.fields_dict['custom_water_tank'].df.hidden = false;
                frm.fields_dict['custom_type_of_water'].df.hidden = false;
            }
        }

        // Refresh the fields to ensure visibility changes take effect
        frm.refresh_field('custom_clean_agent');
        frm.refresh_field('custom_application');
        frm.refresh_field('custom_type_of_detection');
        frm.refresh_field('custom_type_of_operation');
        frm.refresh_field('custom_water_supply_source');
        frm.refresh_field('custom_water_tank');
        frm.refresh_field('custom_type_of_water');
        frm.refresh_field('custom_location_area_unit');
        frm.refresh_field('custom_main_power_supply');
        frm.refresh_field('custom_back_up_power_supply');
        frm.refresh_field('custom_type_of_circuit_wiring');
    }
});



frappe.ui.form.on('Maintenance Visit Purpose', {
    item_code: function (frm, cdt, cdn) {
        var row = locals[cdt][cdn];

        if (row.item_code) {
            // Clear existing items and fetch new template
            frm.clear_table("custom_maintenance_visit_items");
            frappe.call({
                method: 'safty_and_aids.utils.fetch_maintenance_visit_template',
                args: { item_code: row.item_code },
                callback: function (response) {
                    if (response.message) {
                        response.message.mvt.forEach(function (p) {
                            let entry = frm.add_child("custom_maintenance_visit_items");
                            entry.activities = p.activities;
                        });
                    } else {
                        frappe.msgprint(__('Record not found for Item: {0}', [row.item_code]));
                    }
                    frm.refresh_field('custom_maintenance_visit_items');
                }
            });


            // Hide or show fields based on item_code
            if (row.item_code == 'Fire Suppression System') {
                frm.fields_dict['custom_clean_agent'].df.hidden = false;
                frm.fields_dict['custom_application'].df.hidden = false;
                frm.fields_dict['custom_type_of_detection'].df.hidden = false;
                frm.fields_dict['custom_location_area_unit'].df.hidden = false;
                frm.fields_dict['custom_main_power_supply'].df.hidden = false;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = false;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = false;

                frm.fields_dict['custom_type_of_operation'].df.hidden = true;
                frm.fields_dict['custom_water_supply_source'].df.hidden = true;
                frm.fields_dict['custom_water_tank'].df.hidden = true;
                frm.fields_dict['custom_type_of_water'].df.hidden = true;
            } else {
                frm.fields_dict['custom_clean_agent'].df.hidden = true;
                frm.fields_dict['custom_application'].df.hidden = true;
                frm.fields_dict['custom_type_of_detection'].df.hidden = true;
                frm.fields_dict['custom_location_area_unit'].df.hidden = true;
                frm.fields_dict['custom_main_power_supply'].df.hidden = true;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;

                frm.fields_dict['custom_type_of_operation'].df.hidden = false;
                frm.fields_dict['custom_water_supply_source'].df.hidden = false;
                frm.fields_dict['custom_water_tank'].df.hidden = false;
                frm.fields_dict['custom_type_of_water'].df.hidden = false;
            }

            // Refresh fields to apply visibility changes
            frm.refresh_field('custom_clean_agent');
            frm.refresh_field('custom_application');
            frm.refresh_field('custom_type_of_detection');
            frm.refresh_field('custom_type_of_operation');
            frm.refresh_field('custom_water_supply_source');
            frm.refresh_field('custom_water_tank');
            frm.refresh_field('custom_type_of_water');
            frm.refresh_field('custom_location_area_unit');
            frm.refresh_field('custom_main_power_supply');
            frm.refresh_field('custom_back_up_power_supply');
            frm.refresh_field('custom_type_of_circuit_wiring');
        }
    }
});


