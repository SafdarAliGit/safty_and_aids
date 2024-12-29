from hijri_converter import Gregorian
from datetime import datetime

from hijri_converter import Gregorian
from datetime import datetime

def gregorian_to_hijri(date):
    if date:
        # Check if the input is a datetime.date object
        if isinstance(date, datetime):
            g_date = date
        elif isinstance(date, str):
            g_date = datetime.strptime(date, "%Y-%m-%d")
        else:
            return ""  # Return an empty string if the input is neither

        # Convert Gregorian date to Hijri
        hijri_date = Gregorian(g_date.year, g_date.month, g_date.day).to_hijri()
        return f"{hijri_date.year}-{hijri_date.month}-{hijri_date.day}"
    return ""
