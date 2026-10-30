import json
import re

with open('scratch/script_out.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Try to find JSON or URLs
urls = re.findall(r'https?://[^\s"\'\\]+', text)
for u in set(urls):
    print("URL:", u)

# Let's see if there are any stream URLs, m3u8 or mp4 or media
for line in text.split('\n'):
    if any(k in line for k in ['url', 'src', 'stream', 'video', 'media', 'manifest']):
        print("LINE:", line[:150])

