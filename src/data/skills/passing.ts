import type { Skill } from '../../types'

export const PASSING: Skill[] = [
  {
    id: 'chest-pass',
    title: 'Chest Pass',
    category: 'passing',
    level: 1,
    summary: 'The default pass: straight, fast, and easy to catch.',
    description:
      'A chest pass starts at your chest and finishes with both thumbs pointing down and out. It is the quickest two-handed pass and the one a teammate can catch in shooting position. Step into it — the power comes from the legs and the push, not from the arms alone.',
    keyPoints: [
      'Start with the ball at your chest',
      'Step toward your target',
      'Push through, thumbs finish down',
      'Aim at their chest, not their feet',
      'Snap it — a slow pass gets stolen',
    ],
    commonMistakes: [
      'Winding up behind your head first, which tells the defence it is coming.',
      'Passing softly so the receiver has to wait for it.',
    ],
    video: {
      youtubeId: 'Gzs2TlU2qbs',
      title: 'Chest Pass (Beginner Passing)',
      channel: 'Atlanta Hawks',
    },
    extraVideos: [
      {
        youtubeId: 'SbOsxamKyzY',
        title: 'Tips, Skills, and Drills: Passing',
        channel: 'USA Basketball',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    prerequisites: ['athletic-stance'],
    relatedSkills: ['bounce-pass', 'overhead-pass'],
  },
  {
    id: 'bounce-pass',
    title: 'Bounce Pass',
    category: 'passing',
    level: 1,
    summary: 'Go under the defender’s hands when the straight line is blocked.',
    description:
      'A bounce pass takes the same push as a chest pass but lands about two thirds of the way to your teammate, so it arrives at their waist. Hands are harder to get low than high, which is why this is the pass that beats a defender standing in the lane.',
    keyPoints: [
      'Bounce it two thirds of the way there',
      'Ball should arrive at their waist',
      'Same push as a chest pass, aimed down',
      'Use it past a defender’s hands',
      'Do not loop it high off the floor',
    ],
    commonMistakes: [
      'Bouncing it too close to yourself so it arrives slowly.',
      'Using it for long passes, where it is easy to cut off.',
    ],
    video: {
      youtubeId: '_X_GmUCJhJU',
      title: 'How to Throw a Bounce Pass | Basketball Moves',
      channel: 'Howcast',
    },
    extraVideos: [
      {
        youtubeId: 'sKd6aAN8CeY',
        title: 'The Two-Handed Pass: Chest and Bounce | Basketball',
        channel: 'SIKANA English',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    prerequisites: ['chest-pass'],
    relatedSkills: ['passing-off-the-dribble'],
  },
  {
    id: 'overhead-pass',
    title: 'Overhead Pass',
    category: 'passing',
    level: 1,
    summary: 'Pass over the top when someone is pressuring you closely.',
    description:
      'The overhead pass is thrown from above your forehead with both hands, mostly with the wrists. Holding the ball high keeps it away from a defender digging at your waist, and it covers distance quickly — which is why it starts most fast breaks after a rebound.',
    keyPoints: [
      'Ball above your forehead, not behind your head',
      'Wrists and elbows do the work',
      'Step into the throw',
      'Use it over pressure and after rebounds',
      'Keep it flat, not looping',
    ],
    commonMistakes: [
      'Dropping the ball behind your head, where it can be stolen.',
      'Throwing a high lob a defender has time to run under.',
    ],
    video: {
      youtubeId: '_cusca-kwWs',
      title: 'The Two-Handed Overhead Pass | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'y7uxFUC9phU',
        title: 'Overhead Pass Drill',
        channel: 'Jr. NBA Jr. WNBA',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    prerequisites: ['chest-pass'],
    relatedSkills: ['outlet-pass'],
  },
  {
    id: 'one-hand-push-pass',
    title: 'One-Hand Push Pass',
    category: 'passing',
    level: 2,
    summary: 'The quickest pass there is — no gather, just push it out.',
    description:
      'Bringing the ball to two hands takes time a live defence does not give you. A one-hand push pass leaves from wherever the ball already is, driven by the wrist and a step. It is less accurate over distance, so keep it short and use it when speed matters more than polish.',
    keyPoints: [
      'No wind-up — push from where the ball is',
      'Wrist snap does most of the work',
      'Step in the direction you are passing',
      'Short and medium range only',
      'Learn it with both hands',
    ],
    commonMistakes: [
      'Throwing it like a baseball, which sails.',
      'Using it for long passes, where two hands are more accurate.',
    ],
    video: {
      youtubeId: '3TuvrQm10Iw',
      title: 'One-Hand Push Pass | Basketball Fundamentals',
      channel: 'Street Cred Sports Training',
    },
    extraVideos: [
      {
        youtubeId: 'A9IF7rqF0tc',
        title: 'Quick Hitter with coach Dan Becker - The Push Pass',
        channel: 'Basketball Manitoba',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['chest-pass'],
    relatedSkills: ['passing-off-the-dribble', 'no-look-pass'],
  },
  {
    id: 'passing-off-the-dribble',
    title: 'Passing Off the Dribble',
    category: 'passing',
    level: 2,
    summary: 'Pass straight out of a live dribble without gathering first.',
    description:
      'Picking the ball up announces that a pass is coming and gives the defence a beat to react. Passing out of the dribble turns the last bounce into the pass itself, so nothing changes until the ball is already gone. It is the difference between a pass that works and one that gets read.',
    keyPoints: [
      'Turn the last dribble into the pass',
      'Do not gather to two hands first',
      'Keep your eyes up through the move',
      'Pass off either hand',
      'Feet keep moving after it leaves',
    ],
    commonMistakes: [
      'Picking the ball up, pausing, then passing.',
      'Looking at the receiver from the moment you start dribbling.',
    ],
    video: {
      youtubeId: 'eufP0_bNGBw',
      title: 'The Dribble Pass | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 's_6Y8AUgoAw',
        title: 'Improve Your Passing | Passing Off The Dribble',
        channel: 'Pro Training Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['one-hand-push-pass', 'control-dribble'],
    relatedSkills: ['pick-and-roll-passing'],
  },
  {
    id: 'outlet-pass',
    title: 'Outlet Pass',
    category: 'passing',
    level: 2,
    summary: 'Turn a rebound into a fast break with the first pass.',
    description:
      'The outlet is the pass thrown immediately after a defensive rebound, up the side of the floor, to start the break. Speed matters more than distance: the fast break is won in the first second, while the other team is still turning around. Land, turn to the sideline, and throw.',
    keyPoints: [
      'Chin the rebound, land balanced',
      'Turn to the sideline, not the middle',
      'Throw it before the defence turns',
      'Overhead or one-hand, whichever is quicker',
      'Lead the runner, do not hit them still',
    ],
    commonMistakes: [
      'Dribbling out of the rebound instead of passing.',
      'Outletting through the middle, where a steal becomes a layup.',
    ],
    video: {
      youtubeId: 'bkWerd-AiLM',
      title: 'Basketball Drills: How to Rebound, make the Outlet Pass & Finish',
      channel: 'ProTips4U',
    },
    extraVideos: [
      {
        youtubeId: '9bbQHNAG5Yg',
        title: 'Receiving The Outlet Pass Breakdown Drill',
        channel: 'Jr. NBA Jr. WNBA',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['overhead-pass'],
    relatedSkills: ['passing-decisions'],
  },
  {
    id: 'pick-and-roll-passing',
    title: 'Pick and Roll Passing',
    category: 'passing',
    level: 3,
    summary: 'Read what the two defenders do, then pick the pass they gave you.',
    description:
      'A pick and roll creates a two-on-two, and the defence has to choose what to give up. If the big defender steps out, the roller is open; if they drop back, you have the pull-up; if a third defender helps, someone on the perimeter is free. Your job is to see which one and deliver it.',
    keyPoints: [
      'Use the screen shoulder to shoulder',
      'Big steps out, hit the roller',
      'Big drops back, take the shot',
      'Help comes, pass to the open shooter',
      'Pocket bounce pass beats a lob',
    ],
    commonMistakes: [
      'Deciding the pass before the screen is even set.',
      'Picking up your dribble, which removes every option at once.',
    ],
    video: {
      youtubeId: 'kx3cEz9ZHNQ',
      title: 'How to Become an Elite Pick & Roll Passer',
      channel: 'The Film Room',
    },
    extraVideos: [
      {
        youtubeId: 'ffjo8ReDzhA',
        title: 'Tips, Skills and Drills: Pick And Roll',
        channel: 'USA Basketball',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['passing-off-the-dribble'],
    relatedSkills: ['passing-decisions', 'defending-pick-and-roll'],
  },
  {
    id: 'no-look-pass',
    title: 'No-Look Pass',
    category: 'passing',
    level: 3,
    summary: 'Look one way, pass the other — to move a defender, not to show off.',
    description:
      'A no-look pass works because defenders watch your eyes. You look off one side long enough for the help to shift, then deliver to the side you already knew was open. It is a tool for moving defenders, and a bad idea any time a normal pass would do.',
    keyPoints: [
      'Know where the pass is going first',
      'Use your eyes to move the help',
      'Keep the pass itself simple',
      'Only when it actually gains something',
      'Normal pass open? Throw the normal pass',
    ],
    commonMistakes: [
      'Throwing it for style and turning the ball over.',
      'Looking away so long you lose the target.',
    ],
    video: {
      youtubeId: 'b5V-aqjiaGc',
      title: 'How to Do a No-Look Pass | Basketball',
      channel: 'Howcast',
    },
    extraVideos: [
      {
        youtubeId: '1mWhF9O8fNU',
        title: 'How To No Look Pass (Get More Assists)',
        channel: 'Coach Frikki',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['one-hand-push-pass'],
    relatedSkills: ['passing-decisions'],
  },
  {
    id: 'passing-decisions',
    title: 'Knowing When to Pass',
    category: 'passing',
    level: 3,
    summary: 'The hardest part of passing is deciding, not throwing.',
    description:
      'Most turnovers are good passes thrown at the wrong moment. Before you catch, know where your teammates are; after you catch, take the shot if it is there, drive if the lane is open, and pass if neither is. Holding the ball while you work it out is what lets the defence set.',
    keyPoints: [
      'Look at the floor before the ball arrives',
      'Shoot, drive, or pass — decide in one beat',
      'A pass one second late is a turnover',
      'Pass away from help, not into it',
      'The open teammate beats your contested shot',
    ],
    commonMistakes: [
      'Dribbling while thinking, which invites pressure.',
      'Forcing a pass into a crowd because it was the plan.',
    ],
    video: {
      youtubeId: 'isZLiFb_8VE',
      title: 'The Trick To Knowing When To Pass And When To Shoot',
      channel: 'DeepGame',
    },
    extraVideos: [
      {
        youtubeId: 'RT13mVgyxxU',
        title: 'Open & Decide Drill',
        channel: 'Jr. NBA Jr. WNBA',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['bounce-pass', 'passing-off-the-dribble'],
    relatedSkills: ['pick-and-roll-passing', 'catch-and-face'],
  },
]
