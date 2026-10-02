# shivams07.github.io

Personal portfolio of **Shivam Singh**, Full Stack Developer specialising in AI.
Live at **https://shivams07.github.io**.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, build, 404.html, privacy/content guard
npm run covers     # re-capture project screenshots (uses installed Chrome)
```

All copy and data live in `src/content/profile.ts`. Edit that file to update the site.

The build fails if the output contains a phone number or a name from the internal-project list
(`scripts/check-dist.mjs`).

## Deploy

Every push to `main` runs lint and the build, then publishes `dist/` to GitHub Pages
(`.github/workflows/deploy.yml`).

## Credits

- Layout adapted from the Figma Community file *Portfolio (Community)* by Ashwin. It was rebuilt; none of
  its text, photos or assets are reused. Intentional differences are listed in `docs/figma-deviations.md`.
- Visual style inspired by uihut's *Multi-Concept Portfolio Website Theme*. No files or assets from it are
  used.
- Brand icons: [Simple Icons](https://simpleicons.org) (CC0).
