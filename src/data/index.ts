import type { Category, CategoryId, Level, Skill } from '../types'
import { CATEGORIES } from './categories'
import { DRIBBLING } from './skills/dribbling'
import { FUNDAMENTALS } from './skills/fundamentals'
import { SHOOTING } from './skills/shooting'

/**
 * The single place new content lands. Adding a phase 2 category means adding a
 * file here and nothing else — no screen knows the category list up front.
 */
export const SKILLS: Skill[] = [...FUNDAMENTALS, ...DRIBBLING, ...SHOOTING]

export const SKILL_BY_ID = new Map(SKILLS.map((s) => [s.id, s]))

/** Categories that actually have content. Empty ones never reach a screen. */
export const PUBLISHED_CATEGORIES: Category[] = CATEGORIES.filter((c) =>
  SKILLS.some((s) => s.category === c.id),
)

export function getSkill(id: string): Skill | undefined {
  return SKILL_BY_ID.get(id)
}

export function skillsInCategory(categoryId: CategoryId): Skill[] {
  return SKILLS.filter((s) => s.category === categoryId)
}

export function skillsInLevel(categoryId: CategoryId, level: Level): Skill[] {
  return SKILLS.filter((s) => s.category === categoryId && s.level === level)
}

export function countByCategory(categoryId: CategoryId): number {
  return skillsInCategory(categoryId).length
}

/** Where "New to basketball? Start here" points. */
export const START_HERE_SKILL: Skill | undefined =
  SKILLS.find((s) => s.category === 'fundamentals' && s.level === 1) ?? SKILLS[0]

export { CATEGORIES, CATEGORY_BY_ID } from './categories'

// Data integrity: broken cross-links are silent in production but obvious here.
if (import.meta.env.DEV) {
  const ids = new Set(SKILLS.map((s) => s.id))
  const problems: string[] = []

  if (ids.size !== SKILLS.length) problems.push('duplicate skill ids')

  for (const skill of SKILLS) {
    for (const ref of [...(skill.prerequisites ?? []), ...(skill.relatedSkills ?? [])]) {
      if (!ids.has(ref)) problems.push(`${skill.id} links to unknown skill "${ref}"`)
    }
    if (skill.summary.length > 80) {
      problems.push(`${skill.id} summary is ${skill.summary.length} chars (max 80)`)
    }
    if (skill.keyPoints.length < 3 || skill.keyPoints.length > 5) {
      problems.push(`${skill.id} has ${skill.keyPoints.length} key points (want 3-5)`)
    }
  }

  if (problems.length) console.warn('[skills data]\n' + problems.join('\n'))
}
