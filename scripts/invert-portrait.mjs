#!/usr/bin/env node
/**
 * Inverts public/portrait.png and writes public/portrait-inverted.png.
 * Run: node scripts/invert-portrait.mjs
 * Requires: npm install sharp (or run npm run invert-portrait)
 */

import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const inputPath = join(root, 'public', 'portrait.png')
const outputPath = join(root, 'public', 'portrait-inverted.png')

async function main() {
  let sharp
  try {
    sharp = (await import('sharp')).default
  } catch (e) {
    console.error('sharp is not installed. Run: npm install sharp')
    process.exit(1)
  }

  const buf = readFileSync(inputPath)
  const inverted = await sharp(buf)
    .negate({ alpha: false })
    .toBuffer()

  writeFileSync(outputPath, inverted)
  console.log('Wrote', outputPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
