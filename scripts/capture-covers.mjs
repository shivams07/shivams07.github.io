import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const PUBLIC = fileURLToPath(new URL('../public/', import.meta.url))
const TARGETS = {
  'estate-ease': { url: 'https://estate-ease-web.vercel.app', file: 'covers/estate-ease.jpg', viewport: { width: 1600, height: 932 } },
  'crafx-studio': { url: 'https://crafx-studio-app.vercel.app', file: 'covers/crafx-studio.jpg', viewport: { width: 1600, height: 932 } },
  og: { url: 'http://localhost:4173/', file: 'og-image.jpg', viewport: { width: 1200, height: 630 } },
}

const names = process.argv.slice(2)
const selected = names.length > 0 ? names : ['estate-ease', 'crafx-studio']
mkdirSync(`${PUBLIC}covers`, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome' })
try {
  for (const name of selected) {
    const target = TARGETS[name]
    if (!target) throw new Error(`Unknown target "${name}". Use: ${Object.keys(TARGETS).join(', ')}`)
    const page = await browser.newPage({ viewport: target.viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' })
    await page.goto(target.url, { waitUntil: 'networkidle', timeout: 60_000 })
    await page.waitForTimeout(3000)
    await page.screenshot({ path: `${PUBLIC}${target.file}`, type: 'jpeg', quality: 82 })
    await page.close()
    console.log(`saved public/${target.file}`)
  }
} finally {
  await browser.close()
}
