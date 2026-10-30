import re
import json
import html

with open('linkedin_page.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Look for mp4 URLs
mp4_urls = re.findall(r'https://[^"\'\\s<>]+\.mp4[^"\'\\s<>]*', content)
print(f"Found {len(mp4_urls)} mp4 URLs")
for u in set(mp4_urls):
    print("MP4:", html.unescape(u).replace('&amp;', '&'))

# Look for dms.licdn.com URLs
licdn_urls = re.findall(r'https://dms\.licdn\.com/[^"\'\\s<>]+', content)
print(f"Found {len(licdn_urls)} licdn URLs")
for u in set(licdn_urls):
    u_clean = html.unescape(u).replace('&amp;', '&')
    print("LICDN:", u_clean[:120])

# Look for video elements or JSON data
scripts = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL)
for s in scripts:
    if 'mp4' in s or 'adaptiveStreams' in s or 'playbackUrl' in s:
        print("Script with video data found! Length:", len(s))
        matches = re.findall(r'https://[^\s"\'\\]+\.mp4[^\s"\'\\]*', s)
        for m in matches:
            print("Script MP4:", m[:120])

