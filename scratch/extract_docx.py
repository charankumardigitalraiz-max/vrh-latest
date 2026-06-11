import zipfile
import xml.etree.ElementTree as ET

docx_path = r"c:\Users\sande\Downloads\vrh-latest-main\vrh-latest-main\public\Job Description for Career Page Update.docx"

try:
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        # Docx XML namespaces
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        text_parts = []
        for paragraph in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            p_text = []
            for run in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                if run.text:
                    p_text.append(run.text)
            text_parts.append("".join(p_text))
            
        full_text = "\n".join(text_parts)
        print("--- EXTRACTED TEXT ---")
        print(full_text)
        print("----------------------")
        
        # Let's save the extracted text to a scratch file
        with open("extracted_jd.txt", "w", encoding="utf-8") as f:
            f.write(full_text)
except Exception as e:
    print("Error:", e)
