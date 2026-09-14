import type { Skill } from '../../types'

export const ATHLETICISM: Skill[] = [
  {
    id: 'dynamic-warmup',
    title: 'Dynamic Warm Up',
    category: 'athleticism',
    level: 1,
    summary: 'Five minutes of movement before you shoot a single ball.',
    description:
      'A dynamic warm up is movement, not holding stretches: leg swings, high knees, lunges, arm circles. It raises your body temperature and takes your joints through the range you are about to use. Static stretching before playing does not prevent injuries and can make you slower for a while.',
    keyPoints: [
      'Move through it — no holding stretches',
      'Start slow, build up over five minutes',
      'Hips, ankles, shoulders, in that order',
      'Finish with a few sprints or slides',
      'Do it before every session, not just games',
    ],
    commonMistakes: [
      'Starting a workout cold with jump shots.',
      'Holding long static stretches before playing.',
    ],
    video: {
      youtubeId: 'wX9RmYxL2W8',
      title: 'Dynamic Warmup and Stretches for Basketball Players',
      channel: 'BBall IQ',
    },
    extraVideos: [
      {
        youtubeId: 'DAjPcYxPPBg',
        title: 'Dynamic Warmup',
        channel: 'Jr. NBA Jr. WNBA',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '5 min',
    },
    relatedSkills: ['cool-down-stretching', 'injury-prevention'],
  },
  {
    id: 'cool-down-stretching',
    title: 'Cool Down and Stretching',
    category: 'athleticism',
    level: 1,
    summary: 'After you play is when holding a stretch actually helps.',
    description:
      'Static stretching — holding a position for twenty or thirty seconds — belongs at the end of a session, when the muscles are warm. It brings your heart rate down and keeps the range of motion you have. Five minutes is enough, and calves, hips and hamstrings matter most for basketball.',
    keyPoints: [
      'Hold each stretch 20 to 30 seconds',
      'Calves, hamstrings, hips, quads',
      'Breathe out into the stretch',
      'Stretch to tension, never to pain',
      'Five minutes, every session',
    ],
    commonMistakes: [
      'Skipping it because the session is over.',
      'Bouncing in a stretch instead of holding it.',
    ],
    video: {
      youtubeId: 'Ee1reoBypmY',
      title: 'Stretching and Cooling Down | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'HtJv4Gv5HTQ',
        title: '5 Min Full Body Post Workout Cool Down Stretch Routine',
        channel: 'Tom Peto Training',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '5 min',
    },
    prerequisites: ['dynamic-warmup'],
    relatedSkills: ['injury-prevention'],
  },
  {
    id: 'injury-prevention',
    title: 'Landing Safely',
    category: 'athleticism',
    level: 1,
    summary: 'Most basketball injuries happen on the way down, not the way up.',
    description:
      'Ankles and knees get hurt landing — flat-footed, knees caving inward, or on someone else’s foot. Landing softly on the balls of your feet with knees tracking over your toes takes almost no strength, only attention. This is worth learning before you work on jumping higher.',
    keyPoints: [
      'Land on the balls of your feet, then heels',
      'Bend the knees to absorb it',
      'Knees track over the toes, never inward',
      'Land on two feet when you can',
      'Look where you are landing',
    ],
    commonMistakes: [
      'Landing stiff-legged with straight knees.',
      'Letting the knees collapse inward on landing.',
      'Landing under the rim where feet are.',
    ],
    video: {
      youtubeId: '-dyKPz5zu34',
      title: 'How to Land Safer in Basketball: 5 Essential Tips for Injury Prevention',
      channel: 'Basketball Movement Lab',
    },
    extraVideos: [
      {
        youtubeId: 'lCxMeAhj8A0',
        title: 'ACL Injury Prevention: Jumping and Landing Technique',
        channel: 'Hospital for Special Surgery',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '10 min',
    },
    prerequisites: ['dynamic-warmup'],
    relatedSkills: ['jumping-higher', 'core-and-balance'],
  },
  {
    id: 'jump-rope',
    title: 'Jump Rope',
    category: 'athleticism',
    level: 2,
    summary: 'Quick feet, calves, and conditioning — in a space the size of a doormat.',
    description:
      'Skipping trains exactly what basketball needs: fast feet, springy ankles, and the ability to keep going. It needs no court and almost no room, so it fits into a day that has no gym in it. Start with sets of thirty seconds and build from there.',
    keyPoints: [
      'Stay on the balls of your feet',
      'Small jumps — a couple of centimetres',
      'Wrists turn the rope, not the arms',
      'Thirty seconds on, thirty off, to start',
      'Elbows in close to your sides',
    ],
    commonMistakes: [
      'Jumping high and tiring out in a minute.',
      'Swinging the whole arm instead of the wrists.',
    ],
    video: {
      youtubeId: 'vEJ7XbbAMAg',
      title: 'Jump Rope Like A Pro In 2 Minutes: Learn How To Skip',
      channel: 'Dayan Kole',
    },
    extraVideos: [
      {
        youtubeId: '4KSnCr7Sj8U',
        title: 'Jump Rope Workout For Basketball',
        channel: 'Jump Rope Dudes',
      },
    ],
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '10 min',
    },
    prerequisites: ['dynamic-warmup'],
    relatedSkills: ['agility-footwork', 'conditioning'],
  },
  {
    id: 'agility-footwork',
    title: 'Agility and Footwork',
    category: 'athleticism',
    level: 2,
    summary: 'Change direction faster — the skill behind both defence and first step.',
    description:
      'Agility is stopping, turning and starting again without losing balance. Cone and ladder drills train the pattern: short steps, low hips, and a hard push off the outside foot. Basketball is played in three-metre bursts, so straight-line speed matters far less than this.',
    keyPoints: [
      'Stay low through every change of direction',
      'Short, quick steps near the turn',
      'Push hard off the outside foot',
      'Eyes and chest up, not on your feet',
      'Quality over quantity — rest between reps',
    ],
    commonMistakes: [
      'Standing tall while changing direction.',
      'Going through drills tired, which trains sloppy footwork.',
    ],
    video: {
      youtubeId: 'LUz0LeY7Dfs',
      title: 'Footwork and Quickness Drills for Basketball | ladder and Cone drills',
      channel: 'Joe Burata tv',
    },
    extraVideos: [
      {
        youtubeId: 'wqJEBkiTD8o',
        title: 'Best Agility Ladder Footwork Drills for Basketball Players',
        channel: 'Better Basketball Training (Ozswoosh)',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Cones'],
      duration: '15 min+',
    },
    prerequisites: ['jump-rope'],
    relatedSkills: ['defensive-slides', 'conditioning'],
  },
  {
    id: 'core-and-balance',
    title: 'Core and Balance',
    category: 'athleticism',
    level: 2,
    summary: 'A strong middle is what lets you finish while somebody leans on you.',
    description:
      'Core work is not about a visible stomach; it is the ability to stay upright and on line when contact arrives. Planks, dead bugs and single-leg balance work need no equipment and transfer directly to finishing through contact and holding a box out.',
    keyPoints: [
      'Planks and dead bugs beat sit-ups',
      'Single-leg balance, thirty seconds a side',
      'Slow and controlled, never rushed',
      'Brace as if about to take contact',
      'Two or three short sessions a week',
    ],
    commonMistakes: [
      'Rushing reps so momentum does the work.',
      'Letting the hips sag in a plank.',
    ],
    video: {
      youtubeId: 's00vLpxVl-E',
      title: 'Top 5 Core Exercises For Basketball Players',
      channel: 'THINCPRO Basketball',
    },
    extraVideos: [
      {
        youtubeId: '4c9ZrSRUtDs',
        title: '9-Minute Balance Workout for Basketball Players!',
        channel: 'Nathanael Morton',
      },
    ],
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '15 min+',
    },
    prerequisites: ['injury-prevention'],
    relatedSkills: ['bodyweight-strength', 'finishing-through-contact'],
  },
  {
    id: 'jumping-higher',
    title: 'Jumping Higher',
    category: 'athleticism',
    level: 3,
    summary: 'Build the jump with bodyweight work — and land well before you jump more.',
    description:
      'Vertical jump improves from strength through the hips and legs, and from practising the jump itself: squats, calf raises, and controlled hops. Progress is slow and worth it. Do not add jump training until landing safely is automatic, and keep the volume low if you are still growing.',
    keyPoints: [
      'Bodyweight squats, calf raises, controlled hops',
      'Quality reps, then stop — not to exhaustion',
      'Arms swing up hard on every jump',
      'Two or three sessions a week, not daily',
      'Land softly on every single rep',
    ],
    commonMistakes: [
      'Doing hundreds of jumps and getting sore knees.',
      'Chasing a dunk before the landing is safe.',
      'Training jumps on tired legs after a long session.',
    ],
    video: {
      youtubeId: '60hu2J_edbY',
      title: 'How to Increase Your Vertical Jump for Basketball at Home (No Equipment)',
      channel: 'THINCPRO Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'Z9QZiNxTDaI',
        title: '3 Ways To Jump Higher Off Two Feet',
        channel: 'ILoveBasketballTV',
      },
    ],
    tags: {
      space: ['Home', 'School hoop'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '15 min+',
    },
    prerequisites: ['injury-prevention', 'core-and-balance'],
    relatedSkills: ['rebound-timing', 'bodyweight-strength'],
  },
  {
    id: 'conditioning',
    title: 'Conditioning',
    category: 'athleticism',
    level: 3,
    summary: 'Train in bursts, because that is how the game is actually played.',
    description:
      'Basketball is repeated sprints with short rests, not steady jogging. Conditioning should match that: hard efforts of ten to thirty seconds with rest between, using court sprints, slides or shooting drills on a clock. Being fit late in a game is a skill you can train.',
    keyPoints: [
      'Short hard bursts, then real rest',
      'Sprint, slide, backpedal — not just running',
      'Use a clock, not a feeling',
      'Add conditioning inside skill drills',
      'Hydrate and sleep — that is part of it',
    ],
    commonMistakes: [
      'Long slow jogging, which trains the wrong system.',
      'Never resting, so every rep is at half speed.',
    ],
    video: {
      youtubeId: 'sPO_61SOahU',
      title: 'How to Do Conditioning the Right Way for Basketball',
      channel: 'By Any Means Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'QckEJVgP1JM',
        title: 'Full Basketball Conditioning Workout',
        channel: 'Vision Driven Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '15 min+',
    },
    prerequisites: ['agility-footwork'],
    relatedSkills: ['transition-offense', 'game-speed-shooting'],
  },
  {
    id: 'bodyweight-strength',
    title: 'Bodyweight Strength',
    category: 'athleticism',
    level: 3,
    summary: 'Push-ups, squats and lunges — no weights needed at this age.',
    description:
      'Young players get stronger from bodyweight work done well: push-ups, squats, lunges, glute bridges. Form matters more than numbers, and heavy lifting is not needed to build a base while you are still growing. Two or three sessions a week alongside basketball is plenty.',
    keyPoints: [
      'Push-ups, squats, lunges, glute bridges',
      'Form first — stop when it breaks down',
      'Two or three sessions a week',
      'Full range of motion, controlled speed',
      'Rest days are when you get stronger',
    ],
    commonMistakes: [
      'Chasing rep counts with sloppy form.',
      'Training every day with no recovery.',
      'Adding heavy weights before bodyweight work is clean.',
    ],
    video: {
      youtubeId: 'PhAXCWAjnU8',
      title: 'Basketball Strength & Conditioning For Youth Athletes',
      channel: 'KP Sports Performance',
    },
    extraVideos: [
      {
        youtubeId: '7jTozgVcqNo',
        title: 'Basketball Workout At Home (Bodyweight)',
        channel: 'DDTV',
      },
    ],
    tags: {
      space: ['Home'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '15 min+',
    },
    prerequisites: ['core-and-balance'],
    relatedSkills: ['jumping-higher', 'conditioning'],
  },
]
