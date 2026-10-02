import { copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const ORIGIN = 'https://shivams07.github.io'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const pages = JSON.parse(readFileSync(new URL('../src/content/pages.json', import.meta.url), 'utf8'))

/**
 * @param {string} value
 * @returns {string}
 */
function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeText(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Replaces the first match of `pattern`, or exits when the tag is missing.
 * @param {string} html
 * @param {RegExp} pattern
 * @param {string} replacement
 * @param {string} label
 * @returns {string}
 */
function replaceTag(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    console.error(`write-route-html: ${label} not found in dist/index.html`)
    process.exit(1)
  }
  return html.replace(pattern, () => replacement)
}

/**
 * @param {string} source
 * @param {{ path: string, title: string, description: string }} page
 * @returns {string}
 */
function renderRoute(source, page) {
  const url = ORIGIN + page.path
  const title = escapeAttr(page.title)
  const description = escapeAttr(page.description)
  let html = source
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapeText(page.title)}</title>`, '<title>')
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`,
    'meta description',
  )
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`,
    'og:title',
  )
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`,
    'og:description',
  )
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(url)}" />`,
    'og:url',
  )
  html = html.replace(/\s*<link rel="canonical"[^>]*>/g, '')
  return replaceTag(
    html,
    /<\/head>/,
    `  <link rel="canonical" href="${escapeAttr(url)}" />\n  </head>`,
    '</head>',
  )
}

function main() {
  const source = readFileSync(`${dist}index.html`, 'utf8')
  const home = renderRoute(source, pages.home)
  writeFileSync(`${dist}index.html`, home)
  writeFileSync(`${dist}skills.html`, renderRoute(source, pages.skills))
  writeFileSync(`${dist}projects.html`, renderRoute(source, pages.projects))
  copyFileSync(`${dist}index.html`, `${dist}404.html`)
  console.log('Wrote route HTML: index.html, skills.html, projects.html, 404.html')
}

main()
