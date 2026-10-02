import { readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const PHONE = /7\D{0,2}7\D{0,2}1\D{0,2}5\D{0,2}9\D{0,2}8\D{0,2}7\D{0,2}5\D{0,2}1\D{0,2}3/
const INTERNAL = /\b(alfred|hydra)\b/gi
const SCANNED = new Set(['.html', '.js', '.css', '.svg', '.json', '.txt', '.xml', '.webmanifest'])

/**
 * @param {string} text
 * @returns {string[]}
 */
function scanText(text) {
  const problems = []
  if (PHONE.test(text)) problems.push('phone number')
  for (const match of text.matchAll(INTERNAL)) {
    const word = match[1].toLowerCase()
    const label = `internal project: ${word[0].toUpperCase()}${word.slice(1)}`
    if (!problems.includes(label)) problems.push(label)
  }
  return problems
}

/**
 * @param {string} dir
 * @returns {string[]}
 */
function listFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? listFiles(path) : [path]
  })
}

function main() {
  const dist = fileURLToPath(new URL('../dist', import.meta.url))
  const failures = listFiles(dist)
    .filter((file) => SCANNED.has(extname(file)))
    .flatMap((file) => scanText(readFileSync(file, 'utf8')).map((problem) => `${file}: ${problem}`))
  if (failures.length > 0) {
    console.error(`Privacy/content guard failed:\n${failures.join('\n')}`)
    process.exit(1)
  }
  console.log('Privacy/content guard passed.')
}

main()
