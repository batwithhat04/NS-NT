import re

file_path = r"c:\Users\avina\Desktop\confoDSW\src\config\conferenceData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace images for organizers
organizers_mapping = {
    "Ajay K. Sharma": "'/images/director_Ajay_NITDelhi.webp'",
    "Lalit Kumar Awasthi": "null",
    "Venu Gopal Achanta": "null",
    "R. S. Bawa": "null",
    "Geeta Sikka": "'/images/prof_geeta_sikka_3c8bbc.webp'",
    "Jyoteesh Malhotra": "'/images/prof_jyoteesh_malhotra_af803a.webp'",
    "Manoj Kumar": "'/images/prof_manoj_kumar_taleja_3c8ba5.webp'",
    "Rikmantra Basu": "'/images/dr_rikmantra_basu_3c8c71.webp'",
    "Prashant Kumar": "'/images/dr_prashant_kumar_af8149.webp'",
    "Anupama Sharma": "null",
    "Ripudaman Singh": "null",
    "Ashutosh Sharma": "null",
    "Chennupati Jagadish": "null",
    "Pulickel M. Ajayan": "null"
}

def replacer(match):
    name_block = match.group(1)
    for name, img in organizers_mapping.items():
        if name in name_block:
            return f"image: {img},"
    return "image: null,"

# Find blocks like:
# name: '...',
# designation: '...',
# institution: '...',
# ...
# image: 'https://images.unsplash.com/...',

# A simpler approach: we split the content into lines and track the current person's name
lines = content.split('\n')
current_name = None
new_lines = []
for line in lines:
    name_match = re.search(r"name:\s*'([^']+)'", line)
    if name_match:
        current_name = name_match.group(1)
    
    if "image: 'https://images.unsplash.com" in line:
        found_match = False
        if current_name:
            for k, v in organizers_mapping.items():
                if k in current_name:
                    new_lines.append(line.replace(re.search(r"image: '.*?'", line).group(0), f"image: {v}"))
                    found_match = True
                    break
        if not found_match:
            # Speakers or non-matched organizers
            new_lines.append(line.replace(re.search(r"image: '.*?'", line).group(0), "image: null"))
    else:
        new_lines.append(line)

with open(file_path, "w", encoding="utf-8") as f:
    f.write('\n'.join(new_lines))
