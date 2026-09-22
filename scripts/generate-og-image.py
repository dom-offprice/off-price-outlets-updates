#!/usr/bin/env python3
"""Regenerate images/og-image.jpg (1200×630) for link previews."""
from __future__ import annotations

import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
BEBAS = Path("/tmp/og-fonts/BebasNeue-Regular.ttf")
BODY = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")

W, H = 2400, 1260
SAFE = 160
MIN_PHOTO_FRAC = 0.46
FEATHER_PX = 96


def main() -> None:
    if not BEBAS.is_file():
        raise SystemExit(f"Missing font: {BEBAS} (download Bebas Neue to /tmp/og-fonts/)")

    logo = Image.open(ROOT / "images/logo-official-white.png").convert("RGBA")
    lp = logo.load()
    for yy in range(logo.height):
        for xx in range(logo.width):
            r, g, b, a = lp[xx, yy]
            if r < 40 and g < 40 and b < 40:
                lp[xx, yy] = (0, 0, 0, 0)
    pad = 12
    logo_p = Image.new("RGBA", (logo.width + pad * 2, logo.height + pad * 2), (0, 0, 0, 0))
    logo_p.paste(logo, (pad, pad), logo)
    logo_w = 620
    logo_r = logo_p.resize(
        (logo_w, int(logo_p.height * logo_w / logo_p.width)), Image.Resampling.LANCZOS
    )

    meas = ImageDraw.Draw(Image.new("RGB", (W, H)))
    x = SAFE

    def tw(text: str, font) -> int:
        bb = meas.textbbox((0, 0), text, font=font)
        return bb[2] - bb[0]

    def th(font) -> int:
        bb = meas.textbbox((0, 0), "Ag", font=font)
        return bb[3] - bb[1]

    hero_size = 152
    f_hero = ImageFont.truetype(str(BEBAS), hero_size)
    max_panel = int(W * (1 - MIN_PHOTO_FRAC)) - 24
    while tw("Warehouse prices.", f_hero) > max_panel - x and hero_size > 118:
        hero_size -= 2
        f_hero = ImageFont.truetype(str(BEBAS), hero_size)

    f_loc = ImageFont.truetype(str(BEBAS), 98)
    if tw("Connecticut & Florida", f_loc) > max_panel - x:
        f_loc = ImageFont.truetype(str(BEBAS), 90)

    f_cities = ImageFont.truetype(str(BODY), 48)
    f_cat = ImageFont.truetype(str(BODY), 50)
    f_cta = ImageFont.truetype(str(BEBAS), 96)
    cta = "Monthly warehouse sales"

    y = SAFE + logo_r.height + 16
    blocks: list[tuple[str, object, int, int]] = []
    blocks.append(("Brand names.", f_hero, 4, hero_size + 6))
    blocks.append(("Warehouse prices.", f_hero, 4, hero_size + 24))
    GAP_AFTER_LOC = 40
    blocks.append(("Connecticut & Florida", f_loc, 3, th(f_loc) + GAP_AFTER_LOC))
    blocks.append(("North Haven, CT  ·  Jacksonville, FL", f_cities, 2, th(f_cities) + 16))
    blocks.append(("Footwear  ·  Clothing  ·  Accessories", f_cat, 2, th(f_cat) + 22))
    blocks.append((cta, f_cta, 3, th(f_cta) + 36))

    max_text_x = x + logo_w
    for text, font, _shadow, advance in blocks:
        bb = meas.textbbox((x, y), text, font=font)
        max_text_x = max(max_text_x, bb[2] + 8)
        y += advance

    split_x = max_text_x + 36
    min_photo_w = int(W * MIN_PHOTO_FRAC)
    if W - split_x < min_photo_w:
        split_x = W - min_photo_w

    photo_w = W - split_x
    print(f"split_x={split_x} photo_w={photo_w} feather={FEATHER_PX}")

    photo_src = Image.open(ROOT / "images/homepage.jpg").convert("RGB")
    photo = ImageOps.fit(
        photo_src, (photo_w, H), method=Image.Resampling.LANCZOS, centering=(0.62, 0.42)
    )
    photo = ImageEnhance.Contrast(
        ImageEnhance.Color(ImageEnhance.Sharpness(photo).enhance(1.1)).enhance(1.04)
    ).enhance(1.05)

    base = Image.new("RGB", (W, H))
    px = base.load()
    rnd = random.Random(7)
    for py in range(H):
        for px_x in range(W):
            t = min(1.0, px_x / max(split_x + FEATHER_PX, 1))
            r = int(22 + 55 * max(0, 1 - t * 1.35))
            g = int(1 + 3 * (1 - t))
            b = int(4 + 6 * (1 - t))
            streak = int(18 * abs(((px_x + py * 0.7) % 90) / 90 - 0.5))
            n = rnd.randint(-6, 6)
            r = max(0, min(90, r + streak // 2 + n))
            px[px_x, py] = (r, max(0, g), max(0, b))

    canvas = base.convert("RGBA")

    photo_rgba = photo.convert("RGBA")
    mask = Image.new("L", (photo_w, H), 255)
    md = ImageDraw.Draw(mask)
    for i in range(FEATHER_PX):
        md.line([(i, 0), (i, H)], fill=int(255 * (i / FEATHER_PX) ** 1.35))
    canvas.paste(photo_rgba, (split_x, 0), mask)

    canvas.alpha_composite(logo_r, (SAFE, SAFE - 6))

    draw = ImageDraw.Draw(canvas)
    red = (235, 40, 65, 255)
    white = (255, 255, 255, 255)
    dim = (232, 228, 230, 255)

    def put(pos, text, font, fill, o=4):
        draw.text((pos[0] + o, pos[1] + o), text, font=font, fill=(0, 0, 0, 150))
        draw.text(pos, text, font=font, fill=fill)

    y = SAFE + logo_r.height + 16
    for text, font, shadow, advance in blocks:
        fill = red if text.startswith("Brand") or text.startswith("Warehouse") else white
        if text in ("North Haven, CT  ·  Jacksonville, FL", "Footwear  ·  Clothing  ·  Accessories"):
            fill = dim
        put((x, y), text, font, fill, o=shadow)
        if text == cta:
            bb = draw.textbbox((x, y), text, font=font)
            draw.rectangle([x, bb[3] + 14, bb[2] + 8, bb[3] + 24], fill=red)
        y += advance

    out2x = canvas.convert("RGB")
    out = ImageEnhance.Sharpness(out2x.resize((1200, 630), Image.Resampling.LANCZOS)).enhance(1.22)
    out.save(ROOT / "images/og-image.jpg", "JPEG", quality=97, optimize=True, progressive=True, subsampling=0)
    out.save(ROOT / "images/og-image.png", "PNG", optimize=True)
    out.resize((390, 204), Image.Resampling.LANCZOS).save(
        ROOT / "images/og-preview-phone.jpg", "JPEG", quality=92
    )
    print("Wrote", ROOT / "images/og-image.jpg", "hero px", hero_size)


if __name__ == "__main__":
    main()
