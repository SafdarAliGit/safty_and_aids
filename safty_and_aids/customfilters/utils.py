from hijri_converter import Gregorian
from datetime import datetime

def gregorian_to_hijri(date):
    if date:
        g_date = datetime.strptime(date, "%Y-%m-%d")
        hijri_date = Gregorian(g_date.year, g_date.month, g_date.day).to_hijri()
        return f"{hijri_date.year}-{hijri_date.month}-{hijri_date.day}"
    return ""