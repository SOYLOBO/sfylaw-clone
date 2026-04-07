import { chromium } from 'playwright';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const OUTPUT_DIR = join(import.meta.dirname, '..', 'public', 'images');

const IMAGES = [
  { url: '/wp-content/uploads/sites/1200688/2020/12/young_sanford_f.jpg', name: 'young_sanford_f.jpg' },
  { url: '/wp-content/uploads/sites/1200688/2021/11/ChessContent1.jpg', name: 'ChessContent1.jpg' },
  { url: '/wp-content/uploads/sites/1200688/2021/01/AdobeStock_239774433.jpg', name: 'AdobeStock_239774433.jpg' },
  { url: '/wp-content/uploads/sites/1200688/2021/01/AdobeStock_87237553-final.jpg', name: 'AdobeStock_87237553-final.jpg' },
  { url: '/wp-content/uploads/sites/1200688/2021/11/logo-white.png', name: 'logo-white.png' },
  { url: '/wp-content/uploads/sites/1200688/2021/01/logo-1.png', name: 'logo-1.png' },
  { url: '/wp-content/uploads/sites/1200688/2021/01/divider-1.png', name: 'divider-1.png' },
  { url: '/wp-content/uploads/sites/1200688/2021/01/divider02.png', name: 'divider02.png' },
  { url: '/wp-content/uploads/sites/1200688/2021/01/TradeCenterMap.jpg', name: 'TradeCenterMap.jpg' },
  { url: '/wp-content/uploads/sites/1200688/2021/01/JerseyMapNew.jpg', name: 'JerseyMapNew.jpg' },
];

const BASE = 'https://www.sfylaw.com';

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  // First visit the homepage to get past Cloudflare
  const page = await context.newPage();
  console.log('Visiting homepage to pass Cloudflare...');
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
  console.log('Homepage loaded: ' + page.url());

  // Now download each image
  for (const img of IMAGES) {
    try {
      const resp = await page.goto(BASE + img.url, { waitUntil: 'load', timeout: 15000 });
      if (resp && resp.ok()) {
        const buffer = await resp.body();
        const outPath = join(OUTPUT_DIR, img.name);
        await writeFile(outPath, buffer);
        console.log(`OK: ${img.name} (${buffer.length} bytes)`);
      } else {
        console.log(`FAIL: ${img.name} - HTTP ${resp?.status()}`);
      }
    } catch (e) {
      console.log(`ERROR: ${img.name} - ${e.message}`);
    }
  }

  await browser.close();
  console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
