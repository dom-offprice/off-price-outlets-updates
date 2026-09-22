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
SAFE = 168
PHOTO_FRAC = 0.32


def main() -> None:
    if not BEBAS.is_file():
        raise SystemExit(f"Missing font: {BEBAS} (download Bebas Neue to /tmp/og-fonts/)")

    text_right = int(W * (1 - PHOTO_FRAC) - 40)
    photo_w = int(W * PHOTO_FRAC)

    photo_src = Image.open(ROOT / "images/homepage.jpg").convert("RGB")
    photo = ImageOps.fit(
        photo_src, (photo_w, H), method=Image.Resampling.LANCZOS, centering=(0.58, 0.42)
    )
    photo = ImageEnhance.Contrast(
        ImageEnhance.Color(ImageEnhance.Sharpness(photo).enhance(1.12)).enhance(1.05)
    ).enhance(1.06)

    base = Image.new("RGB", (W, H))
    px = base.load()
    rnd = random.Random(7)
    for y in range(H):
        for x in range(W):
            t = x / W
            r = int(22 + 55 * max(0, 1 - t * 1.4))
            g = int(1 + 3 * (1 - t))
            b = int(4 + 6 * (1 - t))
            streak = int(18 * abs(((x + y * 0.7) % 90) / 90 - 0.5))
            n = rnd.randint(-6, 6)
            r = max(0, min(90, r + streak // 2 + n))
            px[x, y] = (r, max(0, g), max(0, b))

    canvas = base.convert("RGBA")
    photo_rgba = photo.convert("RGBA")
    feather = 260
    mask = Image.new("L", (photo_w, H), 255)
    md = ImageDraw.Draw(mask)
    for i in range(feather):
        md.line([(i, 0), (i, H)], fill=int(255 * (i / feather) ** 1.15))
    dark = Image.new("RGBA", (photo_w, H), (0, 0, 0, 0))
    dd = ImageDraw.Draw(dark)
    for i in range(feather):
        dd.line([(i, 0), (i, H)], fill=(0, 0, 0, int(130 * (1 - i / feather))))
    photo_rgba = Image.alpha_composite(photo_rgba, dark)
    canvas.paste(photo_rgba, (W - photo_w, 0), mask)

    logo = Image.open(ROOT / "images/logo-official-white.png").convert("RGBA")
    lp = logo.load()
    for yy in range(logo.height):
        for xx in range(logo.width):
            r, g, b, a = lp[xx, yy]
            if r < 40 and g < 40 and b < 40:
                lp[xx, yy] = (0, 0, 0, 0)
    pad = 16
    logo_p = Image.new("RGBA", (logo.width + pad * 2, logo.height + pad * 2), (0, 0, 0, 0))
    logo_p.paste(logo, (pad, pad), logo)
    logo_w = 600
    logo_r = logo_p.resize(
        (logo_w, int(logo_p.height * logo_w / logo_p.width)), Image.Resampling.LANCZOS
    )
    canvas.alpha_composite(logo_r, (SAFE, SAFE - 8))

    draw = ImageDraw.Draw(canvas)
    red = (235, 40, 65, 255)
    white = (255, 255, 255, 255)
    dim = (228, 224, 226, 255)

    def put(pos, text, font, fill, o=4):
        draw.text((pos[0] + o, pos[1] + o), text, font=font, fill=(0, 0, 0, 165))
        draw.text(pos, text, font=font, fill=fill)

    def tw(text, font):
        bb = draw.textbbox((0, 0), text, font=font)
        return bb[2] - bb[0]

    x = SAFE
    y = SAFE + logo_r.height + 20

    hero_size = 142
    f_hero = ImageFont.truetype(str(BEBAS), hero_size)
    while tw("Warehouse prices.", f_hero) > text_right - x and hero_size > 108:
        hero_size -= 4
        f_hero = ImageFont.truetype(str(BEBAS), hero_size)

    put((x, y), "Brand names.", f_hero, red)
    y += hero_size + 4
    put((x, y), "Warehouse prices.", f_hero, red)
    y += hero_size + 22

    f_loc = ImageFont.truetype(str(BEBAS), 92)
    if tw("Connecticut & Florida", f_loc) > text_right - x:
        f_loc = ImageFont.truetype(str(BEBAS), 84)
    loc_h = 92 if f_loc.size == 92 else 84
    put((x, y), "Connecticut & Florida", f_loc, white, o=3)
    y += loc_h + 12

    f_cities = ImageFont.truetype(str(BODY), 44)
    put((x, y), "North Haven, CT  ·  Jacksonville, FL", f_cities, dim, o=2)
    y += 54

    f_cat = ImageFont.truetype(str(BODY), 46)
    put((x, y), "Footwear  ·  Clothing  ·  Accessories", f_cat, dim, o=2)
    y += 56

    f_cta = ImageFont.truetype(str(BEBAS), 78)
    cta = "Monthly warehouse sales"
    put((x, y), cta, f_cta, white, o=3)
    bb = draw.textbbox((x, y), cta, font=f_cta)
    draw.rectangle([x, bb[3] + 12, min(bb[2] + 6, text_right), bb[3] + 22], fill=red)

    f_url = ImageFont.truetype(str(BODY), 36)
    url = "offpriceoutlets.com"
    ub = draw.textbbox((0, 0), url, font=f_url)
    draw.text((x, H - SAFE - (ub[3] - ub[1]) - 4), url, font=f_url, fill=(180, 175, 178, 255))

    out2x = canvas.convert("RGB")
    out = ImageEnhance.Sharpness(out2x.resize((1200, 630), Image.Resampling.LANCZOS)).enhance(1.25)
    out.save(ROOT / "images/og-image.jpg", "JPEG", quality=97, optimize=True, progressive=True, subsampling=0)
    out.save(ROOT / "images/og-image.png", "PNG", optimize=True)
    print("Wrote", ROOT / "images/og-image.jpg", "hero px", hero_size)


if __name__ == "__main__":
    main()
