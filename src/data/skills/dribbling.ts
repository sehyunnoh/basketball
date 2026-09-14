import type { Skill } from '../../types'

export const DRIBBLING: Skill[] = [
  {
    id: 'control-dribble',
    title: 'Control Dribble',
    category: 'dribbling',
    level: 1,
    summary: 'Push the ball with your fingertips and keep your eyes up.',
    description:
      'The control dribble is the low, hard bounce you use when a defender is near. You push the ball with your fingertips, not slap it with your palm, and keep it below your waist so it spends less time in the air. Everything else in dribbling is built on this one.',
    keyPoints: [
      'Fingertips push, palm never touches',
      'Keep the ball below your waist',
      'Pound it hard, not softly',
      'Eyes up the whole time',
      'Knees bent, stay low',
    ],
    commonMistakes: [
      'Slapping the ball with a flat palm.',
      'Dribbling high, where it is easy to steal.',
      'Staring at the ball instead of the floor.',
    ],
    video: {
      youtubeId: 'BnvGa0I8bMc',
      title: 'Fundamentals of Dribbling',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'CMQp0bwjokw',
        title: 'How To Dribble A Basketball For Beginners! Basketball Basics',
        channel: 'Get Handles Basketball',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    prerequisites: ['athletic-stance'],
    relatedSkills: ['stationary-ball-handling', 'weak-hand-dribbling'],
  },
  {
    id: 'stationary-ball-handling',
    title: 'Stationary Ball Handling',
    category: 'dribbling',
    level: 1,
    summary: 'Build handle in one spot — no hoop and almost no space needed.',
    description:
      'Stationary drills are dribbling patterns you do standing in one place: pounds, side to side, front to back, figure eights. They are the fastest way to improve because you can do them at home, every day, without a court. Do them low and hard or they do nothing.',
    keyPoints: [
      'Pound the ball, do not pat it',
      'Stay in a low stance the whole set',
      'Both hands get the same number of reps',
      'Eyes up, or count something on the wall',
      'Finish the set even when the arm burns',
    ],
    commonMistakes: [
      'Standing tall so the drill trains nothing.',
      'Only doing the drills with the strong hand.',
    ],
    video: {
      youtubeId: 'MRrNi7uHmaY',
      title: '6 BEST Dribbling Drills For Kids! Basketball Drills For Beginners',
      channel: 'Get Handles Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'teqk-UDPCrc',
        title: '10 Minute At-Home Dribbling Workout (Follow Along)',
        channel: 'BBall IQ',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['control-dribble'],
    relatedSkills: ['ball-feel-drills', 'weak-hand-dribbling'],
  },
  {
    id: 'weak-hand-dribbling',
    title: 'Weak Hand Dribbling',
    category: 'dribbling',
    level: 1,
    summary: 'Train the hand you avoid, or defenders will force you to that side.',
    description:
      'Your weak hand is the hand you do not want to use, and good defenders find it in about ten seconds. They simply push you that way and the possession is over. The fix is boring and it works: give the weak hand more reps than the strong one, every session.',
    keyPoints: [
      'Do every drill weak hand first',
      'Two weak hand sets for every strong one',
      'Start slow, keep it low and hard',
      'Use the weak hand in real games too',
      'Walk around the house dribbling it',
    ],
    commonMistakes: [
      'Practising the weak hand only when it already feels good.',
      'Switching back to the strong hand as soon as it gets hard.',
    ],
    video: {
      youtubeId: 'Q9GhaXd18hE',
      title: '5 Effective Basketball Weak Hand Dribbling Drills',
      channel: 'ShotMechanics',
    },
    extraVideos: [
      {
        youtubeId: '0_NiW74SVbM',
        title: 'FIX Your Weak Hand Dribble! [5 Minute Video]',
        channel: 'ILoveBasketballTV',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['control-dribble'],
    relatedSkills: ['stationary-ball-handling', 'crossover'],
  },
  {
    id: 'crossover',
    title: 'Crossover',
    category: 'dribbling',
    level: 2,
    summary: 'Switch hands in front of you to change direction fast.',
    description:
      'The crossover bounces the ball from one hand to the other in front of your body while you change direction. It is the first real move most players learn and still the one used most in games. It only works if the defender believes you were going the other way.',
    keyPoints: [
      'Sell the first direction before you cross',
      'Cross low, near the front knee',
      'One hard bounce, not a slow roll',
      'Push off the outside foot to change direction',
      'Shoulders and eyes lead the new direction',
    ],
    commonMistakes: [
      'Crossing high where the defender can reach it.',
      'Crossing while standing straight up.',
      'Crossing without ever threatening the first direction.',
    ],
    video: {
      youtubeId: 'fzySl4Vqfwk',
      title: 'How To Crossover For Beginners! Basketball Basics',
      channel: 'Get Handles Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'M3yD-gwjoRE',
        title: 'The Crossover Dribble | Basketball',
        channel: 'SIKANA English',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Cones'],
      duration: '10 min',
    },
    prerequisites: ['control-dribble', 'weak-hand-dribbling'],
    relatedSkills: ['between-the-legs', 'in-and-out', 'combo-moves'],
  },
  {
    id: 'between-the-legs',
    title: 'Between the Legs',
    category: 'dribbling',
    level: 2,
    summary: 'Change hands under your leg so the ball is never exposed.',
    description:
      'Going between the legs puts your own leg between the ball and the defender, which makes it much safer than a front crossover against tight pressure. Start standing still until the bounce finds your hand every time, then add a step. It looks flashy but it is really a protection move.',
    keyPoints: [
      'Step forward so the gap is wide enough',
      'Push the ball through, do not lob it',
      'Receiving hand waits, ready and low',
      'Stay low, chest up',
      'Learn it both directions',
    ],
    commonMistakes: [
      'Feet too close together, so the ball hits a leg.',
      'Standing upright, which makes the gap tiny.',
      'Looking down to find the ball.',
    ],
    video: {
      youtubeId: 'psoOa6c1pkA',
      title: 'How To Dribble Between The Legs for Beginners! 🏀 Basketball Basics',
      channel: 'Kids Basketball Training',
    },
    extraVideos: [
      {
        youtubeId: 'juEjjdGdVU4',
        title: 'How To Dribble Between The Legs For Beginners | Basketball Basics',
        channel: 'Get Handles Basketball',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['crossover'],
    relatedSkills: ['behind-the-back', 'combo-moves'],
  },
  {
    id: 'behind-the-back',
    title: 'Behind the Back',
    category: 'dribbling',
    level: 2,
    summary: 'Move the ball around your body when the front is covered.',
    description:
      'Behind the back wraps the ball around your body to the other hand, keeping your whole frame between the ball and the defender. Use it when a defender is reaching in front or when you need to change direction while still moving forward. Learn it walking before you try it at speed.',
    keyPoints: [
      'Wrap around the hip, not the lower back',
      'Push the ball forward as it comes around',
      'Catch it out in front of the new hand',
      'Keep moving, do not stop to do the move',
      'Practise walking first, then jogging',
    ],
    commonMistakes: [
      'Bouncing it straight behind you and leaving it there.',
      'Turning your shoulders so far you lose sight of the floor.',
    ],
    video: {
      youtubeId: 'Ze9QKvjZxYQ',
      title: 'How to Dribble a Basketball BEHIND YOUR BACK [Step-By-Step For Beginners]',
      channel: 'ILoveBasketballTV',
    },
    extraVideos: [
      {
        youtubeId: 'RSsm65l-tSI',
        title: 'Behind the Back Ball Handling Progression',
        channel: 'Dr. Dish Basketball',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['crossover'],
    relatedSkills: ['between-the-legs', 'protecting-the-ball'],
  },
  {
    id: 'in-and-out',
    title: 'In and Out',
    category: 'dribbling',
    level: 2,
    summary: 'Fake a crossover with one hand and keep going the same way.',
    description:
      'The in and out looks like the start of a crossover, but the ball never changes hands — you roll your hand over it and push it back out the same side. Because you never give up the ball, it is the safest change of direction in the game. Sell the fake with your shoulders, not just your wrist.',
    keyPoints: [
      'Bring the ball in toward the middle',
      'Hand rolls over the top, no switch',
      'Dip the inside shoulder to sell it',
      'Push back out and accelerate',
      'Same hand the whole time',
    ],
    commonMistakes: [
      'Only moving the hand, so the defender never reacts.',
      'Slowing down after the move instead of exploding out.',
    ],
    video: {
      youtubeId: 'OQWe-Y4zwEg',
      title: 'Fundamentals Of The In & Out Crossover',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'ritQndurZVM',
        title: 'In & Out Dribble Breakdown',
        channel: 'Coach Frikki',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Cones'],
      duration: '10 min',
    },
    prerequisites: ['crossover'],
    relatedSkills: ['hesitation-dribble', 'combo-moves'],
  },
  {
    id: 'hesitation-dribble',
    title: 'Hesitation and Change of Pace',
    category: 'dribbling',
    level: 3,
    summary: 'Slow down to make the defender relax, then go.',
    description:
      'A hesitation is a brief pause — a stand up, a stutter, a slow step — that makes the defender settle their feet. The moment they do, you accelerate past them. Speed alone rarely beats a good defender; the change between speeds does.',
    keyPoints: [
      'Full speed, then genuinely slow down',
      'Sell the pause with your head and chest',
      'Keep the dribble alive and protected',
      'Explode off the front foot',
      'Two speeds beat one fast speed',
    ],
    commonMistakes: [
      'Hesitating without ever accelerating out of it.',
      'Running at one speed the whole possession.',
      'Standing up so slowly the defender recovers.',
    ],
    video: {
      youtubeId: 'AaZxl-KdKls',
      title: 'Top 5 DEADLY Hesitation Moves! [HESI TUTORIAL]',
      channel: 'ILoveBasketballTV',
    },
    extraVideos: [
      {
        youtubeId: 'WBQ9SJSo2Ok',
        title: '5 Change of Pace Secrets (With Drills)',
        channel: 'By Any Means Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Cones'],
      duration: '15 min+',
    },
    prerequisites: ['in-and-out', 'crossover'],
    relatedSkills: ['combo-moves', 'pull-up-jumper'],
  },
  {
    id: 'combo-moves',
    title: 'Combo Moves',
    category: 'dribbling',
    level: 3,
    summary: 'Chain two moves together so the first one sets up the second.',
    description:
      'A combo is two moves linked on purpose: the first gets a reaction, the second beats it. Between the legs into a crossover, in and out into a behind the back — the pairing matters more than the list. Pick two or three combos and make them automatic instead of collecting twenty.',
    keyPoints: [
      'First move must be believable',
      'No pause between the two moves',
      'Finish by attacking, not by dribbling again',
      'Own two or three, not twenty',
      'Practise at game speed with a cone',
    ],
    commonMistakes: [
      'Doing moves for their own sake and going nowhere.',
      'Dribbling five times when one move was enough.',
    ],
    video: {
      youtubeId: 'xF-L5oljxaM',
      title: 'The Only 4 Dribble Moves You Need to Get Past Any Defender',
      channel: 'ILoveBasketballTV',
    },
    extraVideos: [
      {
        youtubeId: 'jhbUkIJQpLE',
        title: 'The Best Moves That Work in a REAL Game',
        channel: 'By Any Means Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Cones'],
      duration: '15 min+',
    },
    prerequisites: ['crossover', 'between-the-legs', 'in-and-out'],
    relatedSkills: ['hesitation-dribble'],
  },
  {
    id: 'protecting-the-ball',
    title: 'Protecting the Ball',
    category: 'dribbling',
    level: 3,
    summary: 'Keep your body between the defender and the ball under pressure.',
    description:
      'Against real pressure the goal is not a highlight move, it is keeping the ball. You turn your shoulder into the defender, dribble with the far hand, and use your off arm as a bar for space. This is the skill that stops a press from turning into easy points.',
    keyPoints: [
      'Dribble with the hand furthest from the defender',
      'Off arm bent and firm, not pushing',
      'Shoulder and hip between defender and ball',
      'Dribble low, near the back knee',
      'Stay calm, keep the dribble alive',
    ],
    commonMistakes: [
      'Picking up the dribble as soon as pressure arrives.',
      'Turning your back fully and losing sight of teammates.',
      'Extending the off arm and pushing off, which is a foul.',
    ],
    video: {
      youtubeId: 'UqZwWpJFw7w',
      title: 'How to: Protect the Basketball When Dribbling!',
      channel: 'THINCPRO Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'ZckFmI2sJG0',
        title: '3 Ways To PROTECT The Basketball When You Dribble',
        channel: 'The Hoop Sage',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['weak-hand-dribbling', 'behind-the-back'],
    relatedSkills: ['hesitation-dribble'],
  },
]
