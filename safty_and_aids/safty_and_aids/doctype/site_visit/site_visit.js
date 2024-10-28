frappe.ui.form.on("Site Visit", {
    onload(frm) {
        // Run the fill_first_child function on form load
        fill_first_child(frm);
        fill_second_child(frm);
    },
    refresh(frm) {
        // Optionally, you could also call it on refresh if needed
        fill_first_child(frm);
        fill_second_child(frm);
    }
});

function fill_first_child(frm) {
    // Clear any outdated data in the 'site_visit_item_first' child table
    frm.clear_table('site_visit_item_first');

    let obj1 = [
    { description_english: "Fire Pump with Accessories (size....@...bar....volt)", description_arabic: `<div dir="rtl">مضخة الحريق مع كامل ملحقاتها</div>`, sr_no: 1 },
    { description_english: "Diesel", description_arabic: `<div dir="rtl">ديزل</div>`, sr_no: 'A' },
    { description_english: "Jocky", description_arabic: `<div dir="rtl">جوكي</div>`, sr_no: 'B' },
    { description_english: "Electric", description_arabic: `<div dir="rtl">كهرباء</div>`, sr_no: 'C' },
    { description_english: "Fire Hose Cabinet (red/stainless) (single door/double door)", description_arabic: `<div dir="rtl">صناديق الحريق ( احمر / استينلس ) - ( باب بابين )</div>`, sr_no: 2 },
    { description_english: "Surface cabinet-recessed cabinet", description_arabic: `<div dir="rtl">خارج الجدار داخل الجدار</div>`, sr_no: 'A' },
    { description_english: "Synthetic Hose", description_arabic: `<div dir="rtl">هوز كتان</div>`, sr_no: 'B' },
    { description_english: "Rubber Hose", description_arabic: `<div dir="rtl">هوز رير</div>`, sr_no: 'C' },
    { description_english: "Sprinkler head", description_arabic: `<div dir="rtl">رأس الرشاش الآلي</div>`, sr_no: 3 },
    { description_english: "Open-Concealed", description_arabic: `<div dir="rtl">رشاش مفتوح رشاش سقفي</div>`, sr_no: 'A' },
    { description_english: "Pendant", description_arabic: `<div dir="rtl">سفلي</div>`, sr_no: 'B' },
    { description_english: "Upright", description_arabic: `<div dir="rtl">علوي</div>`, sr_no: 'C' },
    { description_english: "Side wall", description_arabic: `<div dir="rtl">جداري</div>`, sr_no: 'D' },
    { description_english: "Fire hydrant (size:....inch)", description_arabic: `<div dir="rtl">حنفية حريق ( .. بوصة)</div>`, sr_no: 4 },
    { description_english: "Dry type", description_arabic: `<div dir="rtl">رطبة</div>`, sr_no: 'A' },
    { description_english: "Wet type", description_arabic: `<div dir="rtl">جافة</div>`, sr_no: 'B' },
    { description_english: "Wet alarm check valve (size:....inch)", description_arabic: `<div dir="rtl">محبس انثار (مانی ... بوصة )</div>`, sr_no: 5 },
    { description_english: "Non-return valve", description_arabic: `<div dir="rtl">محبس عدم الرجوع</div>`, sr_no: 6 },
    { description_english: "Test drain valve", description_arabic: `<div dir="rtl">محبس اختيار الشبكة</div>`, sr_no: 7 },
    { description_english: "Gate valve", description_arabic: `<div dir="rtl">محابس بوابية</div>`, sr_no: 8 },
    { description_english: "Check valve", description_arabic: `<div dir="rtl">ردادات بوابية</div>`, sr_no: 9 },
    { description_english: "Fire department connection", description_arabic: `<div dir="rtl">وصلة الدفاع المدني</div>`, sr_no: 10 },
    { description_english: "Fire Extinguishers powder (size;......Kg-Lbs)", description_arabic: `<div dir="rtl">طفايات الحريق بودرة ( حجم ............. كيلو / رطل )</div>`, sr_no: 11 },
    { description_english: "Fire Extinguishers CO2 (size:.....Kg-Lbs)", description_arabic: `<div dir="rtl">طفايات الحريق ثاني أكسيد الكربون | حجم ........... كيلو او رطل</div>`, sr_no: 12 },
    { description_english: "Fire proof door (X) MTRS", description_arabic: `<div dir="rtl">أبواب طوارئ مقاوم للحريق .....................)</div>`, sr_no: 13 },
    { description_english: "Water Tank (... Ltrs/gallon) (Inside/Outside Floor)", description_arabic: `<div dir="rtl">خزان الماء ............ لتر / جالون ( خارجي داخلي)</div>`, sr_no: 14 },
    { description_english: "Conduit Network", description_arabic: `<div dir="rtl">شبكة التمديدات</div>`, sr_no: 15 },
];


    // Check if object has data
    if (obj1.length) {
        // Iterate through each row in the obj array
        obj1.forEach(item => {
            // Add a new row in the 'site_visit_item_first' child table
            let newRow = frm.add_child("site_visit_item_first");

            // Populate the fields in the new row
            newRow.description_english = item.description_english;
            newRow.description_arabic = item.description_arabic;
            newRow.sr_no = item.sr_no;
        });

        // Refresh the child table to display the new rows
        frm.refresh_field("site_visit_item_first");
    } else {
        frappe.msgprint("No Data Found For First Child Table.");
    }
}

function fill_second_child(frm) {
    // Clear any outdated data in the 'site_visit_item_first' child table
    frm.clear_table('site_visit_item_second');

    let obj2 = [

    { description_english: "Control Panel (Conventional/Addressable) (bran... Size(", description_arabic: `<div dir="rtl">....لوحة التحكم (معنون / غير معنون) النوع .. حجم</div>`, sr_no: 1 },
    { description_english: "Smoke Detector (Conventional/Addressable)", description_arabic: `<div dir="rtl">كاشف الدخان ( معنون غير معنون)</div>`, sr_no: 2 },
    { description_english: "Heat Detector (Conventional/Addressable)", description_arabic: `<div dir="rtl">كاشف الحرارة ( معنون / غير معنون)</div>`, sr_no: 3 },
    { description_english: "Break Glass (Conventional/Addressable)", description_arabic: `<div dir="rtl">كاسر الزجاج معنون / غير معنون)</div>`, sr_no: 4 },
    { description_english: "Fire Alarm BELL (Conventional/Addressable", description_arabic: `<div dir="rtl">جرس الإنذار ( معنون / غير معنون) )</div>`, sr_no: 5 },
    { description_english: "Siren", description_arabic: `<div dir="rtl">سارينة (معنون / غير معنون)</div>`, sr_no: 6 },
    { description_english: "Siren with Strobe", description_arabic: `<div dir="rtl">سارينة مع فشر ( معنون / غير معنون)</div>`, sr_no: 7 },
    { description_english: "Gas Detector", description_arabic: `<div dir="rtl">كاشف غاز ( معنون / غير معنون)</div>`, sr_no: 8 },
    { description_english: "Smoke Detector Battery", description_arabic: `<div dir="rtl">كاشف دخان بطارية</div>`, sr_no: 9 },
    { description_english: "Emergency Light", description_arabic: `<div dir="rtl">كواشف اثارة احتياطية</div>`, sr_no: 10 },
    { description_english: "Exit Light", description_arabic: `<div dir="rtl">لوح مخارج الطوارئ</div>`, sr_no: 11 },
    { description_english: "First Aid", description_arabic: `<div dir="rtl">صيدلية اسعافات أولية</div>`, sr_no: 12 },
    { description_english: "Fire Blanket", description_arabic: `<div dir="rtl">بطانية حريق</div>`, sr_no: 13 },
    { description_english: "Conduit Network", description_arabic: `<div dir="rtl">شبكة التمديدات</div>`, sr_no: 14 },

];


    // Check if object has data
    if (obj2.length) {
        // Iterate through each row in the obj array
        obj2.forEach(item => {
            // Add a new row in the 'site_visit_item_first' child table
            let newRow = frm.add_child("site_visit_item_second");

            // Populate the fields in the new row
            newRow.description_english = item.description_english;
            newRow.description_arabic = item.description_arabic;
            newRow.sr_no = item.sr_no;
        });

        // Refresh the child table to display the new rows
        frm.refresh_field("site_visit_item_second");
    } else {
        frappe.msgprint("No Data Found For First Child Table.");
    }
}

