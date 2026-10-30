import urllib.request
import re
import json

video_ids = [
    'ZHTU8zSmOS0',
    'Sx6S6GclXSw',
    '47g-ZMYZR9E',
    'KSGUtA8a9Fk',
    'vwWBp6E-PCo',
    'o0Q74sPWIc4'
]

results = []

for vid in video_ids:
    oembed_url = f'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json'
    req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
    title = ""
    author = ""
    thumbnail = f"https://img.youtube.com/vi/{vid}/hqdefault.jpg"
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            title = data.get('title', '')
            author = data.get('author_name', '')
            thumbnail = data.get('thumbnail_url', thumbnail)
    except Exception as e:
        print("oembed error", vid, e)

    results.append({
        'id': vid,
        'title': title,
        'author': author,
        'thumbnail': thumbnail,
        'youtubeUrl': f"https://www.youtube.com/watch?v={vid}",
        'embedUrl': f"https://www.youtube-nocookie.com/embed/{vid}"
    })

print(json.dumps(results, indent=2))
with open('scratch/student_videos.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

