import frappe
from safty_and_aids.customfilters.utils import gregorian_to_hijri


def before_save(doc, method):
    if doc.custom_current_date:  # Assuming `posting_date` is the field in the document
        doc.custom_current_hijri_date = gregorian_to_hijri(doc.custom_current_date)
