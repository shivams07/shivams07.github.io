import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'

const HERO_FONTS = /dm-sans-latin-(300|500)-normal-.*\.woff2$/

function preloadHeroFonts(): Plugin {
  return {
    name: 'preload-hero-fonts',
    transformIndexHtml(_html, ctx) {
      if (!ctx.bundle) return undefined
      return Object.values(ctx.bundle)
        .filter((asset) => HERO_FONTS.test(asset.fileName))
        .map((asset) => ({
          tag: 'link',
          attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${asset.fileName}`, crossorigin: '' },
          injectTo: 'head' as const,
        }))
    },
  }
}

export default defineConfig({
  plugins: [react(), preloadHeroFonts()],
  base: '/',
})
