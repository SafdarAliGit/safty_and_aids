frappe.ui.form.on('Maintenance Visit', {
    refresh(frm) {
        if(frm.doc.purposes.length == 0){
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
        }

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
            })

            frm.refresh_field('purposes');

            if (row.item_code != 'Fire Suppression System') {
                frm.fields_dict['custom_clean_agent'].df.hidden = true;
                frm.fields_dict['custom_application'].df.hidden = true;
                frm.fields_dict['custom_type_of_detection'].df.hidden = true;
                frm.refresh_field('custom_clean_agent');
                frm.refresh_field('custom_application');
                frm.refresh_field('custom_type_of_detection');
            } else {
                frm.fields_dict['custom_clean_agent'].df.hidden = false;
                frm.fields_dict['custom_application'].df.hidden = false;
                frm.fields_dict['custom_type_of_detection'].df.hidden = false;
                frm.refresh_field('custom_clean_agent');
                frm.refresh_field('custom_application');
                frm.refresh_field('custom_type_of_detection');
            }
              if (row.item_code == 'Fire Suppression System') {
                frm.fields_dict['custom_type_of_operation'].df.hidden = true;
                frm.fields_dict['custom_water_supply_source'].df.hidden = true;
                frm.fields_dict['custom_water_tank'].df.hidden = true;
                frm.fields_dict['custom_type_of_water'].df.hidden = true;
                frm.refresh_field('custom_type_of_operation');
                frm.refresh_field('custom_water_supply_source');
                frm.refresh_field('custom_water_tank');
                frm.refresh_field('custom_type_of_water');
            } else {
                frm.fields_dict['custom_type_of_operation'].df.hidden = false;
                frm.fields_dict['custom_water_supply_source'].df.hidden = false;
                frm.fields_dict['custom_water_tank'].df.hidden = false;
                frm.fields_dict['custom_type_of_water'].df.hidden = false;
                frm.refresh_field('custom_type_of_operation');
                frm.refresh_field('custom_water_supply_source');
                frm.refresh_field('custom_water_tank');
                frm.refresh_field('custom_type_of_water');
            }


        }


    }


})

