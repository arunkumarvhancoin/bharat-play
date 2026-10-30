import re
import json

with open('linkedin_page.html', 'r', encoding='utf-8') as f:
    content = f.read()

scripts = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL)
for s in scripts:
    if 'adaptiveStreams' in s or 'playbackUrl' in s or 'dms.licdn.com' in s:
        print("--- SCRIPT ---")
        print(s)

