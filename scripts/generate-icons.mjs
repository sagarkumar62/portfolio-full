import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Deep Obsidian Tech Background -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E1118" />
      <stop offset="50%" stop-color="#07080C" />
      <stop offset="100%" stop-color="#020305" />
    </linearGradient>

    <!-- Chrome Metallic Highlight -->
    <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="25%" stop-color="#E2E8F0" />
      <stop offset="60%" stop-color="#94A3B8" />
      <stop offset="85%" stop-color="#CBD5E1" />
      <stop offset="100%" stop-color="#FFFFFF" />
    </linearGradient>

    <!-- Emerald / Cyan Neural Pulse Gradient -->
    <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="50%" stop-color="#2DD4BF" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>

    <!-- Subtle Border Rim -->
    <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.7" />
      <stop offset="40%" stop-color="#D9DDE4" stop-opacity="0.3" />
      <stop offset="70%" stop-color="#1E293B" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#10B981" stop-opacity="0.7" />
    </linearGradient>

    <!-- Glow Filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Squircle Base Frame -->
  <rect x="20" y="20" width="472" height="472" rx="112" ry="112" fill="url(#bgGrad)" stroke="url(#rimGrad)" stroke-width="6" />

  <!-- Background Tech Grid Lines (Faint) -->
  <line x1="20" y1="256" x2="492" y2="256" stroke="#1E232F" stroke-width="1.5" stroke-dasharray="6 8" opacity="0.4" />
  <line x1="256" y1="20" x2="256" y2="492" stroke="#1E232F" stroke-width="1.5" stroke-dasharray="6 8" opacity="0.4" />

  <!-- Outer Cyber Orbit Circle -->
  <circle cx="256" cy="256" r="162" stroke="#1E293B" stroke-width="3" stroke-dasharray="12 12" fill="none" opacity="0.6" />

  <!-- Corner HUD Reticles -->
  <path d="M60 110 V70 H100" stroke="#777B84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5" />
  <path d="M452 110 V70 H412" stroke="#777B84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5" />
  <path d="M60 402 V442 H100" stroke="#777B84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5" />
  <path d="M452 402 V442 H412" stroke="#777B84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5" />

  <!-- Futuristic "S" Monogram Ribbon (Top Segment) -->
  <path d="M176 172 H316 C344 172 364 192 364 220 C364 246 344 264 318 264 H246"
        stroke="url(#chromeGrad)" stroke-width="36" stroke-linecap="round" stroke-linejoin="round" fill="none" />

  <!-- Futuristic "S" Monogram Ribbon (Bottom Segment) -->
  <path d="M266 264 H194 C168 264 148 284 148 310 C148 338 168 358 196 358 H336"
        stroke="url(#chromeGrad)" stroke-width="36" stroke-linecap="round" stroke-linejoin="round" fill="none" />

  <!-- High-Tech Diagonal Code Slash ("Machine" Architecture) -->
  <line x1="304" y1="138" x2="208" y2="374" stroke="url(#neuralGrad)" stroke-width="14" stroke-linecap="round" filter="url(#glow)" />

  <!-- Glowing Neural Core Node (The "Human" Intelligence) -->
  <circle cx="256" cy="256" r="22" fill="#07080C" stroke="url(#neuralGrad)" stroke-width="4" />
  <circle cx="256" cy="256" r="14" fill="url(#neuralGrad)" filter="url(#glow)" />
  <circle cx="256" cy="256" r="6" fill="#FFFFFF" />

  <!-- Micro Telemetry Accent Dots -->
  <circle cx="176" cy="172" r="7" fill="#38BDF8" filter="url(#glow)" />
  <circle cx="336" cy="358" r="7" fill="#10B981" filter="url(#glow)" />
</svg>
`;

async function main() {
  const rootDir = process.cwd();
  const publicDir = path.join(rootDir, "public");
  const iconsDir = path.join(publicDir, "icons");
  const appDir = path.join(rootDir, "app");

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // 1. Write SVG icon to public and app
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgContent);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgContent);
  fs.writeFileSync(path.join(appDir, "icon.svg"), svgContent);
  console.log("Wrote SVG icons successfully.");

  // 2. Generate PNGs using Sharp
  const svgBuffer = Buffer.from(svgContent);

  // 512x512 PNG
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, "icon-512x512.png"));
  console.log("Generated icon-512x512.png");

  // 192x192 PNG
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(iconsDir, "icon-192x192.png"));
  console.log("Generated icon-192x192.png");

  // Apple touch icon 180x180
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("Generated apple-touch-icon.png");

  // 32x32 PNG for favicon
  const png32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), png32);

  // 16x16 PNG for favicon
  const png16 = await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon-16x16.png"), png16);

  // 48x48 PNG
  const png48 = await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toBuffer();

  // Create valid ICO file containing 16x16, 32x32, 48x48
  function createIco(pngBuffers) {
    const numImages = pngBuffers.length;
    const headerSize = 6;
    const dirEntrySize = 16;
    const totalDirSize = headerSize + numImages * dirEntrySize;

    let currentOffset = totalDirSize;
    const entries = [];

    for (const buf of pngBuffers) {
      entries.push({
        buffer: buf,
        size: buf.length,
        offset: currentOffset,
      });
      currentOffset += buf.length;
    }

    const icoBuffer = Buffer.alloc(currentOffset);
    // Header
    icoBuffer.writeUInt16LE(0, 0); // Reserved
    icoBuffer.writeUInt16LE(1, 2); // Type 1 = ICO
    icoBuffer.writeUInt16LE(numImages, 4); // Number of images

    // Directory Entries
    let entryPos = headerSize;
    for (let i = 0; i < numImages; i++) {
      const entry = entries[i];
      const width = i === 0 ? 16 : i === 1 ? 32 : 48;
      icoBuffer.writeUInt8(width, entryPos + 0);
      icoBuffer.writeUInt8(width, entryPos + 1);
      icoBuffer.writeUInt8(0, entryPos + 2); // Color palette
      icoBuffer.writeUInt8(0, entryPos + 3); // Reserved
      icoBuffer.writeUInt16LE(1, entryPos + 4); // Color planes
      icoBuffer.writeUInt16LE(32, entryPos + 6); // Bits per pixel
      icoBuffer.writeUInt32LE(entry.size, entryPos + 8); // Image data size
      icoBuffer.writeUInt32LE(entry.offset, entryPos + 12); // Image data offset
      entryPos += dirEntrySize;
    }

    // Write PNG data
    for (const entry of entries) {
      entry.buffer.copy(icoBuffer, entry.offset);
    }

    return icoBuffer;
  }

  const icoBuf = createIco([png16, png32, png48]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuf);
  console.log("Generated favicon.ico with 16x16, 32x32, 48x48 sizes.");
}

main().catch(console.error);
