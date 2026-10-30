import urllib.request
import os

video_url = "https://dms.licdn.com/playlist/vid/v2/D4E05AQEe9KYztMYkcA/mp4-720p-30fp-crf28/B4EaGGoEavJoCE-/0/1793260016829?e=2147483647&v=beta&t=8ooySE7dq3G1vUtX04xJ4b_av5EOeA-mMFT9eqPdG9U"
cover_url = "https://media.licdn.com/dms/image/v2/D4E05AQEe9KYztMYkcA/videocover-high/B4EaGGoEavJoBU-/0/1793260015030?e=2147483647&v=beta&t=PNuzSe9Y3od-GbZc0fBppvO0linMoTum-NYjRENKex0"

video_path = "public/events_media/emergence_goa_video.mp4"
cover_path = "public/events_media/emergence_goa_cover.jpg"

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

print("Downloading video...")
req_v = urllib.request.Request(video_url, headers=headers)
with urllib.request.urlopen(req_v) as resp, open(video_path, 'wb') as f:
    f.write(resp.read())
print(f"Downloaded video! Size: {os.path.getsize(video_path) / 1024 / 1024:.2f} MB")

print("Downloading cover...")
req_c = urllib.request.Request(cover_url, headers=headers)
with urllib.request.urlopen(req_c) as resp, open(cover_path, 'wb') as f:
    f.write(resp.read())
print(f"Downloaded cover! Size: {os.path.getsize(cover_path) / 1024:.1f} KB")

