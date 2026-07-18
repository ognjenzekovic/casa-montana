// Resizes/compresses photos in src/assets/gallery/**/* in place.
// Run after adding new photos: npm run optimize-images
// Camera originals are typically 4-10MB at 6000px+ — way more than any
// screen on this site will ever display. This caps the longest edge at
// 2000px (generous for retina) and re-encodes as quality-82 JPEG, which
// is visually indistinguishable at web viewing sizes but a fraction of
// the file size.
import { readdir, stat, rename } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const GALLERY_DIR = new URL('../src/assets/gallery/', import.meta.url);
const MAX_DIMENSION = 2000;
const JPEG_QUALITY = 82;

async function renameWithRetry(from, to, attempts = 5) {
    for (let i = 0; i < attempts; i++) {
        try {
            await rename(from, to);
            return;
        } catch (err) {
            // Windows can transiently lock a file a watcher (e.g. the Vite
            // dev server) just read — back off and retry a few times
            // instead of failing the whole run over one file.
            if (err.code !== 'EPERM' || i === attempts - 1) throw err;
            await new Promise((r) => setTimeout(r, 300));
        }
    }
}

async function* walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(path);
        else yield path;
    }
}

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

let processed = 0;
let savedBytes = 0;

for await (const path of walk(GALLERY_DIR.pathname.replace(/^\/(?=[A-Za-z]:)/, ''))) {
    if (!IMAGE_EXT.has(extname(path).toLowerCase())) continue;

    // Skip anything already within bounds — checking dimensions (not file
    // size) is what makes re-running this script safe. Camera originals
    // always start well above MAX_DIMENSION; re-compressing an
    // already-processed JPEG on every run would silently degrade it a
    // little more each time even if the byte count barely changes.
    const metadata = await sharp(path).metadata();
    if ((metadata.width ?? 0) <= MAX_DIMENSION && (metadata.height ?? 0) <= MAX_DIMENSION) continue;

    const before = (await stat(path)).size;

    const tmpPath = `${path}.tmp`;
    try {
        await sharp(path)
            .rotate() // apply EXIF orientation, then strip metadata below
            .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
            .toFile(tmpPath);
        await renameWithRetry(tmpPath, path);
    } catch (err) {
        console.error(`  skipped ${path} — ${err.message}`);
        continue;
    }

    const after = (await stat(path)).size;
    processed++;
    savedBytes += before - after;
    console.log(
        `${path.split('gallery')[1]}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`
    );
}

console.log(`\n${processed} photo(s) optimized, saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB total.`);
