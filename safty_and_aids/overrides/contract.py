def save(doc, method):
    doctype_name = doc.doctype
    if doc.language == "Arabic":
        print_format_name = "Contract-Ar PF"
    else:
        print_format_name = "Contract-Eng PF"

    try:
        # Fetch the DocType document
        doctype = frappe.get_doc("DocType", doctype_name)

        # Set the default print format
        doctype.default_print_format = print_format_name

        # Save the changes to the DocType
        doctype.save()

        # Commit the transaction to the database
        frappe.db.commit()

    except Exception as e:
        # Log the error message for debugging
        frappe.log_error(message=str(e), title="Error in before_save")
        # Optionally, you can raise the exception again if you want to halt further processing
        raise

