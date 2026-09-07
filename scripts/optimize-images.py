"""Regenerate the site's WebP derivatives without modifying original assets.

Requires Pillow. Run from any directory: python3 scripts/optimize-images.py
"""
from pathlib import Path
from PIL import Image, ImageOps

assets = Path(__file__).resolve().parents[1] / "client/public/assets"
output = assets / "optimized"
output.mkdir(exist_ok=True)

for name, widths in [
    ("hero-2026.jpg", (640, 960, 1280)),
    ("head-2026.jpg", (160, 320)),
    ("long-journey.jpg", (640, 1280)),
]:
    with Image.open(assets / name) as source:
        original = ImageOps.exif_transpose(source).convert("RGB")
        for width in widths:
            image = original.copy()
            image.thumbnail((width, 10000))
            image.save(output / f"{Path(name).stem}-{width}.webp", "WEBP", quality=84)

for path in (assets / "publications").glob("*.png"):
    with Image.open(path) as source:
        image = source.convert("RGB")
        image.thumbnail((720, 720))
        image.save(output / f"{path.stem}.webp", "WEBP", quality=88)
