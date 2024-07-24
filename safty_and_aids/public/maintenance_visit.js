frappe.ui.form.on('Maintenance Visit', {
    refresh(frm) {
        if (frm.doc.purposes.length == 0) {
            frm.fields_dict['custom_clean_agent'].df.hidden = true;
            frm.fields_dict['custom_application'].df.hidden = true;
            frm.fields_dict['custom_type_of_detection'].df.hidden = true;
            frm.refresh_field('custom_clean_agent');
            frm.refresh_field('custom_application');
            frm.refresh_field('custom_type_of_detection');

            frm.fields_dict['custom_type_of_operation'].df.hidden = true;
            frm.fields_dict['custom_water_supply_source'].df.hidden = true;
            frm.fields_dict['custom_water_tank'].df.hidden = true;
            frm.fields_dict['custom_type_of_water'].df.hidden = true;
            frm.refresh_field('custom_type_of_operation');
            frm.refresh_field('custom_water_supply_source');
            frm.refresh_field('custom_water_tank');
            frm.refresh_field('custom_type_of_water');

            frm.fields_dict['custom_clean_agent'].df.hidden = true;
            frm.fields_dict['custom_application'].df.hidden = true;
            frm.fields_dict['custom_type_of_detection'].df.hidden = true;
            frm.refresh_field('custom_clean_agent');
            frm.refresh_field('custom_application');
            frm.refresh_field('custom_type_of_detection');

            frm.fields_dict['custom_location_area_unit'].df.hidden = true;
            frm.fields_dict['custom_main_power_supply'].df.hidden = true;
            frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
            frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;
            frm.refresh_field('custom_location_area_unit');
            frm.refresh_field('custom_main_power_supply');
            frm.refresh_field('custom_back_up_power_supply');
            frm.refresh_field('custom_type_of_circuit_wiring');



        } else {
            frm.refresh_field('purposes');

            if (frm.doc.purposes[0].item_code != 'Fire Suppression System') {
                frm.fields_dict['custom_clean_agent'].df.hidden = true;
                frm.fields_dict['custom_application'].df.hidden = true;
                frm.fields_dict['custom_type_of_detection'].df.hidden = true;
                frm.refresh_field('custom_clean_agent');
                frm.refresh_field('custom_application');
                frm.refresh_field('custom_type_of_detection');

                frm.fields_dict['custom_location_area_unit'].df.hidden = true;
                frm.fields_dict['custom_main_power_supply'].df.hidden = true;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');
            } else {
                frm.fields_dict['custom_clean_agent'].df.hidden = false;
                frm.fields_dict['custom_application'].df.hidden = false;
                frm.fields_dict['custom_type_of_detection'].df.hidden = false;
                frm.refresh_field('custom_clean_agent');
                frm.refresh_field('custom_application');
                frm.refresh_field('custom_type_of_detection');

                 frm.fields_dict['custom_location_area_unit'].df.hidden = false;
                frm.fields_dict['custom_main_power_supply'].df.hidden = false;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = false;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = false;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');
            }
            if (frm.doc.purposes[0].item_code == 'Fire Suppression System') {
                frm.fields_dict['custom_type_of_operation'].df.hidden = true;
                frm.fields_dict['custom_water_supply_source'].df.hidden = true;
                frm.fields_dict['custom_water_tank'].df.hidden = true;
                frm.fields_dict['custom_type_of_water'].df.hidden = true;
                frm.refresh_field('custom_type_of_operation');
                frm.refresh_field('custom_water_supply_source');
                frm.refresh_field('custom_water_tank');
                frm.refresh_field('custom_type_of_water');

                 frm.fields_dict['custom_location_area_unit'].df.hidden = false;
                frm.fields_dict['custom_main_power_supply'].df.hidden = false;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = false;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = false;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');

            } else {
                frm.fields_dict['custom_type_of_operation'].df.hidden = false;
                frm.fields_dict['custom_water_supply_source'].df.hidden = false;
                frm.fields_dict['custom_water_tank'].df.hidden = false;
                frm.fields_dict['custom_type_of_water'].df.hidden = false;
                frm.refresh_field('custom_type_of_operation');
                frm.refresh_field('custom_water_supply_source');
                frm.refresh_field('custom_water_tank');
                frm.refresh_field('custom_type_of_water');

                 frm.fields_dict['custom_location_area_unit'].df.hidden = true;
                frm.fields_dict['custom_main_power_supply'].df.hidden = true;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');
            }
        }

    },


})
frappe.ui.form.on('Maintenance Visit', {
    refresh: function(frm) {
        // Hide all fields initially
        const hideFields = [
            'custom_clean_agent', 'custom_application', 'custom_type_of_detection',
            'custom_type_of_operation', 'custom_water_supply_source', 'custom_water_tank',
            'custom_type_of_water', 'custom_location_area_unit', 'custom_main_power_supply',
            'custom_back_up_power_supply', 'custom_type_of_circuit_wiring'
        ];

        hideFields.forEach(field => {
            frm.fields_dict[field].df.hidden = true;
        });

        frm.refresh_fields(hideFields);

        if (frm.doc.purposes && frm.doc.purposes.length > 0) {
            const itemCode = frm.doc.purposes[0].item_code;

            if (itemCode === 'Fire Suppression System') {
                // Show fields specific to 'Fire Suppression System'
                const showFieldsForFireSuppression = [
                    'custom_clean_agent', 'custom_application', 'custom_type_of_detection',
                    'custom_location_area_unit', 'custom_main_power_supply',
                    'custom_back_up_power_supply', 'custom_type_of_circuit_wiring'
                ];

                showFieldsForFireSuppression.forEach(field => {
                    frm.fields_dict[field].df.hidden = false;
                });

                const hideFieldsForFireSuppression = [
                    'custom_type_of_operation', 'custom_water_supply_source',
                    'custom_water_tank', 'custom_type_of_water'
                ];

                hideFieldsForFireSuppression.forEach(field => {
                    frm.fields_dict[field].df.hidden = true;
                });
            } else {
                // Show fields specific to other purposes
                const showFieldsForOtherPurposes = [
                    'custom_type_of_operation', 'custom_water_supply_source',
                    'custom_water_tank', 'custom_type_of_water'
                ];

                showFieldsForOtherPurposes.forEach(field => {
                    frm.fields_dict[field].df.hidden = false;
                });

                const hideFieldsForOtherPurposes = [
                    'custom_clean_agent', 'custom_application', 'custom_type_of_detection',
                    'custom_location_area_unit', 'custom_main_power_supply',
                    'custom_back_up_power_supply', 'custom_type_of_circuit_wiring'
                ];

                hideFieldsForOtherPurposes.forEach(field => {
                    frm.fields_dict[field].df.hidden = true;
                });
            }

            // Refresh fields based on updated visibility
            frm.refresh_fields([...hideFields, ...showFieldsForFireSuppression, ...showFieldsForOtherPurposes]);
        }
    }
});

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
            })

            frm.refresh_field('purposes');

            if (row.item_code != 'Fire Suppression System') {
                frm.fields_dict['custom_clean_agent'].df.hidden = true;
                frm.fields_dict['custom_application'].df.hidden = true;
                frm.fields_dict['custom_type_of_detection'].df.hidden = true;
                frm.refresh_field('custom_clean_agent');
                frm.refresh_field('custom_application');
                frm.refresh_field('custom_type_of_detection');

                frm.fields_dict['custom_location_area_unit'].df.hidden = true;
                frm.fields_dict['custom_main_power_supply'].df.hidden = true;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');
            } else {
                frm.fields_dict['custom_clean_agent'].df.hidden = false;
                frm.fields_dict['custom_application'].df.hidden = false;
                frm.fields_dict['custom_type_of_detection'].df.hidden = false;
                frm.refresh_field('custom_clean_agent');
                frm.refresh_field('custom_application');
                frm.refresh_field('custom_type_of_detection');

                 frm.fields_dict['custom_location_area_unit'].df.hidden = false;
                frm.fields_dict['custom_main_power_supply'].df.hidden = false;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = false;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = false;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');
            }
            if (frm.doc.purposes[0].item_code == 'Fire Suppression System') {
                frm.fields_dict['custom_type_of_operation'].df.hidden = true;
                frm.fields_dict['custom_water_supply_source'].df.hidden = true;
                frm.fields_dict['custom_water_tank'].df.hidden = true;
                frm.fields_dict['custom_type_of_water'].df.hidden = true;
                frm.refresh_field('custom_type_of_operation');
                frm.refresh_field('custom_water_supply_source');
                frm.refresh_field('custom_water_tank');
                frm.refresh_field('custom_type_of_water');

                 frm.fields_dict['custom_location_area_unit'].df.hidden = false;
                frm.fields_dict['custom_main_power_supply'].df.hidden = false;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = false;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = false;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');

            } else {
                frm.fields_dict['custom_type_of_operation'].df.hidden = false;
                frm.fields_dict['custom_water_supply_source'].df.hidden = false;
                frm.fields_dict['custom_water_tank'].df.hidden = false;
                frm.fields_dict['custom_type_of_water'].df.hidden = false;
                frm.refresh_field('custom_type_of_operation');
                frm.refresh_field('custom_water_supply_source');
                frm.refresh_field('custom_water_tank');
                frm.refresh_field('custom_type_of_water');

                 frm.fields_dict['custom_location_area_unit'].df.hidden = true;
                frm.fields_dict['custom_main_power_supply'].df.hidden = true;
                frm.fields_dict['custom_back_up_power_supply'].df.hidden = true;
                frm.fields_dict['custom_type_of_circuit_wiring'].df.hidden = true;
                frm.refresh_field('custom_location_area_unit');
                frm.refresh_field('custom_main_power_supply');
                frm.refresh_field('custom_back_up_power_supply');
                frm.refresh_field('custom_type_of_circuit_wiring');
            }


        }


    }


})

