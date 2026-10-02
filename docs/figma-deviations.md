# Figma deviations register

Source file `qcwZv1EwyMCq1MHvePWLiI` (Portfolio, Community, by Ashwin). Frames measured: Home `7:14`,
Skills `56:20`, Projects `79:287`. That is 3 of 3 frames viewed and 3 of 3 measured. No variables are
defined (`get_variable_defs` returns `{}`), and no node is hidden.

| # | Where | Figma | Ships | Why |
|---|---|---|---|---|
| 1 | Home hero `20:63` | Full-bleed photo of the author + marquee text | uihut-style typographic hero with animated neon glow | Owner will not use a photo; spec §2 |
| 2 | All copy | Author's name, bio, projects, email, phone | Owner's content from `profile.ts` | Different person |
| 3 | Dock `7:44`, button 4 | Avatar image (`Skuyxz - Collection _ OpenSea`) | Icon button | Personal image of the author |
| 4 | Dock `7:44` | Positioned inside the hero (y 849) | `position: fixed`, bottom centre, every page | Navigation must stay reachable |
| 5 | Dock active item | `#d4d4d4` | `--color-neon` `#CDF45A` | uihut palette (spec §4) |
| 6 | Dock | No shadow (sat on a photo) | `0 10px 30px rgba(0,0,0,.18)` | Now floats over white sections |
| 7 | Contact circle `142:83` | `#455CE9` fill, white text | Neon fill, black text | uihut palette; black on neon passes AA |
| 8 | Contact fields `52:22`/`52:25` | "Email:" with colon, "Phone" without | "Email", "LinkedIn", no colons | Inconsistent labels; phone not shown |
| 9 | Skill card gap `62:44` | 29px (icon card) vs 30px (chip card `71:532`) | 30px for both | Same component, 1px drift |
| 10 | Skill chip `71:535` | `p-[24px]` inside a 50px-tall box | height 50px, horizontal padding 24px | Vertical padding impossible in the box |
| 11 | Skill icon rows `67:26` | Hand-staggered second row (`justify-end`) | Wrapping flex row | Content differs per card |
| 12 | Card arrow `20:95` | "Arrow Up Left Contained" rotated 44° | Circle-arrow pointing right, rotates on hover | Equivalent glyph, own icon set |
| 13 | Footer `49:77` | 565px tall, wordmark ends 18px from bottom | Bottom padding `--dock-clearance` (112px) | Fixed dock would cover the wordmark |
| 14 | Footer arrow `49:81` | Decorative | "Back to top" button | Give it a function |
| 15 | Skills heading `56:145` | "Skills that fuel my passion" | "Skills & stack" | Professional tone |
| 16 | Card cover `20:82` | Image cropped at left −4.89%, top 3.07%, width 114.25% | `object-fit: cover; object-position: top` | Own screenshots |
| 17 | All frames | Desktop only (1920px) | Fluid `clamp()` down to 375px, tablet and mobile layouts | No smaller breakpoint exists in the file. Each minimum is a designed **floor**, not the exact 375px value. Pure-vw tokens resolve above their floor at 375px: \`--gutter\` ≈ 26px, \`--fs-wordmark\` ≈ 58.6px, so the wordmark spans the width. |
| 18 | Hero values | n/a (uihut is a flat preview image) | Designed values in `Hero.module.css` / `NeonGlow.module.css` | Rule 1: no values are read off screenshots |
| 19 | Top bar `59:19` | 61px side gutter (content uses 133px) | Kept: `--gutter-bar` 61px | Measured; reproduced 1:1 |
| 20 | Footer wordmark `49:78` | DM Sans 500 300px, tracking 6px | `min(284px, (100vw − 2·padding) / 6.5)`, tracking 0.02em | "Shivam Singh" in the self-hosted static DM Sans 500 renders wider than Figma's text; this sizes it to span the box without clipping at every width |
| 21 | Project covers for Nomi / figma-to-code | Photo/screenshot covers | Designed SVG covers (`NomiCover`, `FigmaToCodeCover`) | No screenshots exist for an iOS app and an agent skill; values are designed, not measured |
| 22 | AI engineering skill card | Plain `#1e1e1e` card | Inset 1.5px neon ring + `0 0 40px rgba(205,244,90,.18)` glow | Marks the specialism (spec §2); designed, not measured |
| 23 | Hero glow | n/a | Solid-core radial gradients, 70px blur (50px + larger blobs on phones), drifting on 4, 5 and 6s cycles with wide sweeps | Tuned so the glow reads as neon on white and its motion is clearly visible (owner asked for livelier movement); static under reduced motion |
| 24 | Contact labels `52:22` (light pages) | `#7e7e7e` | `#616161` (`--color-muted`); dark tone keeps `#7e7e7e` | #7e7e7e is 4.06:1 on white, below WCAG AA 4.5:1 |
| 25 | Hero social column | n/a (designed) | Hidden below 1600px; GitHub/LinkedIn/Email remain in the dock | Below ~1600px the 44px circles touch the headline |
