frappe.ui.form.on('Lead', {
    refresh(frm) {
        frm.fields_dict['custom_site_visit'].input.onclick = () => {
            frappe.route_options = {
                'customer': frm.doc.custom_customer,
                'lead_name': frm.doc.lead_name,
                'lead_id':frm.doc.name,
                'phone': frm.doc.phone,
                'company': frm.doc.company,

            };
            frappe.set_route('Form', 'Site Visit', 'new-site-visit');
        };
    },
    business_name: function (frm) {
        frm.set_value('company_name', frm.doc.business_name);
    },
    d1: function (frm) {
        $('[data-fieldname="d1"]').css('color', 'red');
        $('[data-fieldname="d2"]').css('color', '#242C32');
        $('[data-fieldname="d3"]').css('color', '#242C32');


        var d1 = 1;
        frm.set_value("distance_wt", d1);
        group(frm);
    },
    d2: function (frm) {
        $('[data-fieldname="d1"]').css('color', '#242C32');
        $('[data-fieldname="d2"]').css('color', 'red');
        $('[data-fieldname="d3"]').css('color', '#242C32');


        var d2 = 2;
        frm.set_value("distance_wt", d2);
        group(frm);
    },
    d3: function (frm) {
        $('[data-fieldname="d1"]').css('color', '#242C32');
        $('[data-fieldname="d2"]').css('color', '#242C32');
        $('[data-fieldname="d3"]').css('color', 'red');


        var d3 = 3;
        frm.set_value("distance_wt", d3);
        group(frm);
    },
    b1: function (frm) {
        $('[data-fieldname="b1"]').css('color', 'red');
        $('[data-fieldname="b2"]').css('color', '#242C32');
        $('[data-fieldname="b3"]').css('color', '#242C32');


        var b1 = 1;
        frm.set_value("building_type_wt", b1);
        group(frm);
    },
    b2: function (frm) {
        $('[data-fieldname="b1"]').css('color', '#242C32');
        $('[data-fieldname="b2"]').css('color', 'red');
        $('[data-fieldname="b3"]').css('color', '#242C32');


        var b2 = 2;
        frm.set_value("building_type_wt", b2);
        group(frm);
    },
    b3: function (frm) {
        $('[data-fieldname="b1"]').css('color', '#242C32');
        $('[data-fieldname="b2"]').css('color', '#242C32');
        $('[data-fieldname="b3"]').css('color', 'red');


        var b3 = 3;
        frm.set_value("building_type_wt", b3);
        group(frm);
    },

    o1: function (frm) {
        $('[data-fieldname="o1"]').css('color', 'red');
        $('[data-fieldname="o2"]').css('color', '#242C32');
        $('[data-fieldname="o3"]').css('color', '#242C32');


        var o1 = 1;
        frm.set_value("type_of_occupancy_hazard_wt", o1);
        group(frm);
    },
    o2: function (frm) {
        $('[data-fieldname="o1"]').css('color', '#242C32');
        $('[data-fieldname="o2"]').css('color', 'red');
        $('[data-fieldname="o3"]').css('color', '#242C32');

        var o2 = 2;
        frm.set_value("type_of_occupancy_hazard_wt", o2);
        group(frm);
    },
    o3: function (frm) {
        $('[data-fieldname="o1"]').css('color', '#242C32');
        $('[data-fieldname="o2"]').css('color', '#242C32');
        $('[data-fieldname="o3"]').css('color', 'red');


        var o3 = 3;
        frm.set_value("type_of_occupancy_hazard_wt", o3);
        group(frm);
    }


})

function group(frm) {
    var distance_wt = flt(frm.doc.distance_wt) || 0;
    var building_type_wt = flt(frm.doc.building_type_wt) || 0;
    var type_of_occupancy_hazard_wt = flt(frm.doc.type_of_occupancy_hazard_wt) || 0;
    var all_weight_sum = distance_wt + building_type_wt + type_of_occupancy_hazard_wt;
    var g = "";
    if (all_weight_sum >= 8) {

        g = "C";
    } else if (all_weight_sum >= 6) {
        g = "B";
    } else if (all_weight_sum <= 5) {
        g = "A";
    } else {
        g = 'None'
    }
    frm.set_value("group", g);
    frm.set_value("selling_price_list", g);

}