import re

def extract_session_id(session_str: str):

    match = re.search(r"/sessions/(.*?)/contexts/", session_str)
    if match:
        extracted_string = match.group(1) # 1 is when u want only the extracted value
        return extracted_string
    return ""

def get_str_from_food_dict(food_dict: dict):
    return ", ".join([f"{value} {key}" for key, value in food_dict.items()])

