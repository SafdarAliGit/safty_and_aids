def before_insert(doc, method):
    if doc.packed_items:
        rate = 0
        for item in doc.packed_items:
            rate += item.rate if item.rate else 0

        # Make sure there is at least one item in doc.items
        if doc.items:
            doc.items[0].rate = rate
            doc.items[0].amount = doc.items[0].qty * rate
