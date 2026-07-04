// Genera los favicons PNG a partir de public/favicon.svg usando sharp
// (ya presente en node_modules vía Astro). Correr una vez y commitear:
//   node scripts/make-favicons.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const svg = readFileSync(fileURLToPath(new URL('../public/favicon.svg', import.meta.url)));
const out = (file) => fileURLToPath(new URL(`../public/${file}`, import.meta.url));

// PNGs con transparencia (el SVG ya trae su placa azul redondeada).
for (const [file, size] of [
  ['favicon-32.png', 32],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  await sharp(svg, { density: 512 }).resize(size, size).png().toFile(out(file));
  console.log('✓', file);
}

// apple-touch-icon: full-bleed sobre el mismo azul (iOS aplica su propia máscara).
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#1B3A5B' } })
  .composite([{ input: await sharp(svg, { density: 512 }).resize(180, 180).png().toBuffer() }])
  .png()
  .toFile(out('apple-touch-icon.png'));
console.log('✓ apple-touch-icon.png');
