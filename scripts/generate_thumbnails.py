#!/usr/bin/env python3
import os
from PIL import Image

THUMB_DIR = "assets/images/thumbnails"
os.makedirs(THUMB_DIR, exist_ok=True)

SOURCE_DIRS = [
    "assets/images/awards",
    "assets/images/projects",
]

TARGET_WIDTH = 1200
QUALITY = 92

def process_image(src_path, dst_path):
    try:
        with Image.open(src_path) as img:
            # Skip animated GIFs or SVGs
            if getattr(img, "is_animated", False):
                return
            if img.format not in ["JPEG", "PNG", "WEBP"]:
                return
            
            # If already smaller than target, don't upscale
            if img.width <= TARGET_WIDTH:
                target_w = img.width
                target_h = img.height
            else:
                target_w = TARGET_WIDTH
                target_h = int(img.height * (TARGET_WIDTH / img.width))

            thumb = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
            
            # Save as JPEG (or PNG if has alpha channel)
            if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                thumb.save(dst_path, "PNG", optimize=True)
            else:
                thumb = thumb.convert("RGB")
                thumb.save(dst_path, "JPEG", quality=QUALITY, optimize=True)

            orig_kb = os.path.getsize(src_path) // 1024
            thumb_kb = os.path.getsize(dst_path) // 1024
            print(f"[OK] {os.path.basename(src_path)}: {img.size} ({orig_kb} KB) -> {thumb.size} ({thumb_kb} KB)")
    except Exception as e:
        print(f"[ERROR] {src_path}: {e}")

def main():
    print(f"Scanning for images to generate thumbnails into '{THUMB_DIR}'...")
    for s_dir in SOURCE_DIRS:
        if not os.path.exists(s_dir):
            continue
        for fname in os.listdir(s_dir):
            if fname.startswith("."):
                continue
            ext = os.path.splitext(fname)[1].lower()
            if ext in [".jpg", ".jpeg", ".png", ".webp"]:
                src = os.path.join(s_dir, fname)
                dst = os.path.join(THUMB_DIR, fname)
                process_image(src, dst)
    print("Thumbnail generation complete!")

if __name__ == "__main__":
    main()
