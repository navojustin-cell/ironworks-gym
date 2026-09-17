// Turns the full-size originals in assets/originals into web-sized WebP in public/images.
// Originals stay out of public/ so they are never served. Re-run after adding a photo:
//   node scripts/optimize-images.mjs

import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "assets/originals";
const OUT = "public/images";

// Two widths cover every use: a full-bleed hero background, and a card or gallery tile.
const WIDTHS = { hero: 1600, card: 800 };

// Logos are line art, not photographs. They get one size each and lossless compression,
// because WebP's lossy mode smears hard black edges.
const LOGOS = {
  "blob-73269b4.png": { width: 200, name: "logo" },      // masthead badge, drawn at 40px
  "blob-6efd83c.png": { width: 640, name: "shop-logo" }, // Muscle Shop mark, drawn at 320px
};

const kb = (n) => Math.round(n / 1024);

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let before = 0;
let after = 0;
const rows = [];

for (const file of files) {
  const from = path.join(SRC, file);
  before += (await stat(from)).size;

  if (LOGOS[file]) {
    const { width, name } = LOGOS[file];
    const to = path.join(OUT, `${name}.webp`);
    await sharp(from).resize({ width, withoutEnlargement: true })
      .webp({ lossless: true }).toFile(to);
    const size = (await stat(to)).size;
    after += size;
    rows.push([file, `${name}.webp`, width, kb(size)]);
    continue;
  }

  const base = file.replace(/\.[^.]+$/, "");
  for (const [label, width] of Object.entries(WIDTHS)) {
    const to = path.join(OUT, `${base}-${label}.webp`);
    await sharp(from).resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 }).toFile(to);
    const size = (await stat(to)).size;
    after += size;
    rows.push([file, `${base}-${label}.webp`, width, kb(size)]);
  }
}

for (const [src, out, w, size] of rows) {
  console.log(`${String(size).padStart(4)} KB  ${String(w).padStart(4)}w  ${out}   <- ${src}`);
}
console.log(
  `\n${files.length} originals (${kb(before)} KB) -> ${rows.length} files (${kb(after)} KB), ` +
  `${Math.round((1 - after / before) * 100)}% smaller`
);
