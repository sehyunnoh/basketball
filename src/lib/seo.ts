import { useEffect } from 'react'
import type { Category, Skill } from '../types'

export const SITE_NAME = 'Basketball'
export const SITE_TITLE = 'Basketball Skills Library — Drills, Levels & Videos'
export const SITE_DESCRIPTION =
  'A curated basketball skills library: dribbling, shooting, finishing, passing and defense drills by level, with one hand-picked video per skill.'

export interface PageMeta {
  title: string
  description: string
}

/**
 * Titles and descriptions live here so the runtime hook below and the
 * build-time prerender (vite-prerender.ts) can never drift apart.
 */
export const skillMeta = (skill: Skill, categoryName?: string): PageMeta => ({
  title: `${skill.title} — Basketball Skill Guide`,
  description: `${skill.summary}${categoryName ? ` (${categoryName})` : ''} Key points, common mistakes and a video walkthrough.`,
})

export const categoryMeta = (category: Category, count: number): PageMeta => ({
  title: `${category.name} Drills & Skills — Basketball`,
  description: `${category.blurb} ${count} skills across three levels.`,
})

export const browseMeta = (count: number): PageMeta => ({
  title: 'All Basketball Skills by Category and Level — Basketball',
  description: `All ${count} basketball skills, by category and level.`,
})

function setMeta(name: string, content: string) {
  document.querySelector(`meta[name="${name}"]`)?.setAttribute('content', content)
}

/**
 * Real per-URL metadata is baked into static HTML at build time; this keeps
 * the tab title and description right while navigating inside the SPA.
 * `noindex` lets thin, per-visit pages (search results, 404) opt out.
 */
export function useDocumentMeta(title: string, description = SITE_DESCRIPTION, noindex = false) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex' : 'index, follow')
    return () => {
      document.title = SITE_TITLE
      setMeta('description', SITE_DESCRIPTION)
      setMeta('robots', 'index, follow')
    }
  }, [title, description, noindex])
}
