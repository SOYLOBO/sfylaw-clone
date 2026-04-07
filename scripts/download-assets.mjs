import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');
const BASE = 'https://www.sfylaw.com';

const assets = [
  // Logos
  '/wp-content/uploads/sites/1200688/2021/02/logo-white-sml.png',
  '/wp-content/uploads/sites/1200688/2021/11/logo-white.png',
  '/wp-content/uploads/sites/1200688/2021/01/logo-1.png',
  // Hero banner
  '/wp-content/uploads/sites/1200688/2021/11/NewBanner2.jpg',
  // Dividers
  '/wp-content/uploads/sites/1200688/2021/01/divider-1.png',
  '/wp-content/uploads/sites/1200688/2021/01/divider02.png',
  // Content images
  '/wp-content/uploads/sites/1200688/2021/11/ChessContent1.jpg',
  '/wp-content/uploads/sites/1200688/2021/01/AdobeStock_239774433.jpg',
  '/wp-content/uploads/sites/1200688/2020/12/young_sanford_f.jpg',
  '/wp-content/uploads/sites/1200688/2021/01/AdobeStock_87237553-final.jpg',
  // Maps
  '/wp-content/uploads/sites/1200688/2021/01/TradeCenterMap.jpg',
  '/wp-content/uploads/sites/1200688/2021/01/JerseyMapNew.jpg',
];

async function download(path) {
  const url = BASE + path;
  const outPath = join(PUBLIC, 'images', path.split('/').pop());
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    });
    if (!res.ok) {
      console.error(`FAIL ${res.status}: ${path}`);
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, buffer);
    console.log(`OK: ${path.split('/').pop()} (${buffer.length} bytes)`);
  } catch (e) {
    console.error(`ERROR: ${path} - ${e.message}`);
  }
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  // Download 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map(download));
  }
  console.log('Done!');
}

main();
