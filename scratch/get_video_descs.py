import urllib.request
import re
import html

ids = ['ZHTU8zSmOS0', 'Sx6S6GclXSw', '47g-ZMYZR9E', 'KSGUtA8a9Fk', 'vwWBp6E-PCo', 'o0Q74sPWIc4']
results = {}

for vid in ids:
    try:
        url = f'https://www.youtube.com/watch?v={vid}'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        content = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
        
        # Meta description
        m = re.search(r'<meta name="description" content="([^"]*)"', content)
        desc = html.unescape(m.group(1)) if m else ''
        
        # Title
        t = re.search(r'<title>([^<]*)</title>', content)
        title = html.unescape(t.group(1).replace(' - YouTube', '')) if t else ''
        
        results[vid] = {
            'title': title,
            'description': desc
        }
        print(f"[{vid}] {title}")
        print(f"Desc: {desc}")
        print("-" * 50)
    except Exception as e:
        print(f"[{vid}] Error: {e}")

