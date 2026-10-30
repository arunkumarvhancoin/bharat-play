import re

with open('linkedin_page.html', 'r', encoding='utf-8') as f:
    content = f.read()

scripts = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL)
out = []
for s in scripts:
    if 'adaptiveStreams' in s or 'playbackUrl' in s or 'dms.licdn.com' in s:
        out.append(s)

with open('scratch/script_out.txt', 'w', encoding='utf-8') as f:
    f.write('\n\n=== SCRIPT ===\n\n'.join(out))

print(f"Saved {len(out)} scripts to scratch/script_out.txt")

