import type { Category } from '../types'

/**
 * All nine categories, defined once. Which ones appear on the site is derived
 * from whether they have skills (see `data/index.ts`) — adding phase 2 content
 * is a data-only change (10.7).
 */
export const CATEGORIES: Category[] = [
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    blurb: 'Stance, triple threat, pivots, and the ball handling every other skill sits on.',
    phase: 1,
  },
  {
    id: 'dribbling',
    name: 'Dribbling',
    blurb: 'Control the ball with either hand, change direction, and get out of pressure.',
    phase: 1,
  },
  {
    id: 'shooting',
    name: 'Shooting',
    blurb: 'Build a repeatable shot, from one-hand form work to pull-ups and threes.',
    phase: 1,
  },
  {
    id: 'finishing',
    name: 'Finishing',
    blurb: 'Layups with both hands, floaters, euro steps, and scoring close to the rim.',
    phase: 2,
  },
  {
    id: 'passing',
    name: 'Passing',
    blurb: 'Move the ball accurately and read when to pass instead of dribbling.',
    phase: 2,
  },
  {
    id: 'defense',
    name: 'Defense',
    blurb: 'Stance, slides, closeouts, and guarding the ball without fouling.',
    phase: 2,
  },
  {
    id: 'rebounding',
    name: 'Rebounding',
    blurb: 'Box out, find position, and time your jump to win the ball.',
    phase: 3,
  },
  {
    id: 'strategy',
    name: 'Strategy',
    blurb: 'Positions, spacing, pick and roll, cuts, and the rules that shape the game.',
    phase: 3,
  },
  {
    id: 'athleticism',
    name: 'Athleticism',
    blurb: 'Warm ups, jumping, agility, conditioning, and staying injury free.',
    phase: 3,
  },
]

export const CATEGORY_BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]))
