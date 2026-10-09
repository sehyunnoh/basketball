import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createServer } from 'vite'
import type { Plugin } from 'vite'

const ORIGIN = 'https://sehyunnoh.github.io'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Swap the `content` of the one <meta> tag identified by `attr="key"`. */
function setMeta(html: string, attr: 'name' | 'property', key: string, value: string) {
  const tag = new RegExp(`<meta[^>]*?${attr}="${key}"[^>]*?>`)
  return html.replace(tag, (m) =>
    m.replace(/content="[^"]*"/, () => `content="${escapeHtml(value)}"`),
  )
}

/**
 * GitHub Pages can't rewrite URLs, so a client-routed SPA would answer every
 * deep link with a 404 and crawlers would never see per-page metadata. After
 * the build this writes one static index.html per route (same app shell,
 * route-specific head), a 404.html fallback, and the sitemap listing them.
 */
export function prerender(base: string): Plugin {
  let outDir = 'dist'
  return {
    name: 'prerender',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    async closeBundle() {
      // Reuse the app's own data and meta helpers so build output can't drift.
      const server = await createServer({
        configFile: false,
        appType: 'custom',
        server: { middlewareMode: true },
        logLevel: 'error',
      })
      try {
        const data = await server.ssrLoadModule('/src/data/index.ts')
        const seo = await server.ssrLoadModule('/src/lib/seo.ts')
        const { SKILLS, PUBLISHED_CATEGORIES, CATEGORY_BY_ID, skillsInCategory } = data
        const template = readFileSync(join(outDir, 'index.html'), 'utf-8')

        const pages: { path: string; title: string; description: string }[] = [
          { path: '', title: seo.SITE_TITLE, description: seo.SITE_DESCRIPTION },
          { path: 'browse/', ...seo.browseMeta(SKILLS.length) },
          ...PUBLISHED_CATEGORIES.map((c: any) => ({
            path: `category/${c.id}/`,
            ...seo.categoryMeta(c, skillsInCategory(c.id).length),
          })),
          ...SKILLS.map((s: any) => ({
            path: `skill/${s.id}/`,
            ...seo.skillMeta(s, CATEGORY_BY_ID.get(s.category)?.name),
          })),
        ]

        for (const page of pages) {
          const url = `${ORIGIN}${base}${page.path}`
          let html = template
          html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
          html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
          html = setMeta(html, 'name', 'description', page.description)
          html = setMeta(html, 'property', 'og:title', page.title)
          html = setMeta(html, 'property', 'og:description', page.description)
          html = setMeta(html, 'property', 'og:url', url)
          html = setMeta(html, 'name', 'twitter:title', page.title)
          html = setMeta(html, 'name', 'twitter:description', page.description)

          const file = join(outDir, page.path, 'index.html')
          mkdirSync(dirname(file), { recursive: true })
          writeFileSync(file, html)
        }

        copyFileSync(join(outDir, 'index.html'), join(outDir, '404.html'))

        const urls = pages.map((p) => `  <url>\n    <loc>${ORIGIN}${base}${p.path}</loc>\n  </url>`)
        writeFileSync(
          join(outDir, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
        )
      } finally {
        await server.close()
      }
    },
  }
}
