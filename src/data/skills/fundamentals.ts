import type { Skill } from '../../types'

export const FUNDAMENTALS: Skill[] = [
  {
    id: 'athletic-stance',
    title: 'Athletic Stance',
    category: 'fundamentals',
    level: 1,
    summary: 'The ready position every basketball move starts from.',
    description:
      'Athletic stance means knees bent, feet about shoulder width apart, and weight on the balls of your feet. From here you can move in any direction without a wasted step. Standing straight up is slow, and a slow first step loses the play.',
    keyPoints: [
      'Feet shoulder width, one foot slightly ahead',
      'Bend the knees, not the back',
      'Weight on the balls of your feet',
      'Chest up, eyes forward',
      'Hands up and ready',
    ],
    commonMistakes: [
      'Standing upright with straight legs.',
      'Bending at the waist so the head drops forward.',
      'Resting flat on the heels.',
    ],
    video: {
      youtubeId: '0V92sII3EFw',
      title: 'The Basic Stance | Basketball',
      channel: 'SIKANA English',
    },
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '5 min',
    },
    relatedSkills: ['triple-threat', 'jump-stop'],
  },
  {
    id: 'triple-threat',
    title: 'Triple Threat',
    category: 'fundamentals',
    level: 1,
    summary: 'Hold the ball so you can shoot, pass, or drive from one position.',
    description:
      'Triple threat is the stance you take right after you catch the ball: knees bent, ball held near your hip, eyes up. It is called triple threat because all three options stay open — shoot, pass, or dribble. The defender has to guess, and that guess is your advantage.',
    keyPoints: [
      'Catch, then get low right away',
      'Ball at hip height, close to your body',
      'Eyes up and see the whole floor',
      'Do not start dribbling immediately',
      'Pivot foot stays planted',
    ],
    commonMistakes: [
      'Dribbling as soon as you catch, which kills two of your three options.',
      'Holding the ball above your head where a defender can reach it.',
      'Looking down at the ball instead of the floor.',
    ],
    video: {
      youtubeId: 'KYct_U274JA',
      title: 'Tips, Skills, and Drills: Triple Threat',
      channel: 'USA Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'SqmRrYChlZs',
        title: 'The Triple Threat Position | Basketball',
        channel: 'SIKANA English',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    prerequisites: ['athletic-stance'],
    relatedSkills: ['pivoting', 'jab-step', 'catch-and-face'],
  },
  {
    id: 'pivoting',
    title: 'Pivoting',
    category: 'fundamentals',
    level: 1,
    summary: 'Turn without travelling by keeping one foot planted.',
    description:
      'A pivot is a turn around one foot that stays on the floor — your pivot foot. Once you stop dribbling, the other foot can go anywhere, but if the pivot foot slides or lifts and comes back down, that is travelling. Pivoting lets you face the basket, protect the ball, or find a passing angle without using your dribble.',
    keyPoints: [
      'Pick a pivot foot and keep it planted',
      'Spin on the ball of that foot',
      'Stay low through the whole turn',
      'Keep the ball tight to your body',
      'Front pivot turns toward, reverse turns away',
    ],
    commonMistakes: [
      'Lifting the pivot foot before passing or shooting.',
      'Standing tall, which makes the turn slow and easy to steal.',
    ],
    video: {
      youtubeId: '3GPNfqIzs9Y',
      title: 'Forward Pivot Drill',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'pCxvlAQNiFg',
        title: 'Stop Traveling! Learn the Pivot Foot the RIGHT Way',
        channel: 'Marcus Hodges',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    prerequisites: ['athletic-stance'],
    relatedSkills: ['triple-threat', 'jump-stop', 'rip-through'],
  },
  {
    id: 'ball-feel-drills',
    title: 'Ball Feel Drills',
    category: 'fundamentals',
    level: 1,
    summary: 'Warm up your hands until the ball stops feeling foreign.',
    description:
      'Ball feel drills are short exercises — pounds, wraps around the waist and legs, figure eights — that teach your hands where the ball is without looking. They need no hoop and very little space, so they fit anywhere. Five minutes a day does more than one long session a week.',
    keyPoints: [
      'Fingertips on the ball, never the palm',
      'Eyes up, not on the ball',
      'Go fast enough to make mistakes',
      'Work both hands equally',
      'Short and daily beats long and rare',
    ],
    commonMistakes: [
      'Going slowly enough that it never feels hard.',
      'Watching your hands the whole time.',
    ],
    video: {
      youtubeId: 'CLoWxOvlHkk',
      title: 'The Ultimate 5 Minute Ball Handling Workout for BEGINNERS 🏀',
      channel: 'ILoveBasketballTV',
    },
    extraVideos: [
      {
        youtubeId: '4F83X7xjJpU',
        title: 'Unique 5 Minute Ballhandling WARMUP to Get Your Handles on a String',
        channel: 'By Any Means Basketball',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    relatedSkills: ['control-dribble', 'stationary-ball-handling'],
  },
  {
    id: 'jump-stop',
    title: 'Jump Stop',
    category: 'fundamentals',
    level: 2,
    summary: 'Stop under control on two feet and keep both pivot options.',
    description:
      'A jump stop is a small hop that lands both feet at the same time. Because they land together, neither foot is locked in as your pivot foot yet, so you can turn either way. It is the safest way to stop at speed without travelling or falling forward.',
    keyPoints: [
      'Low hop, not a high jump',
      'Land both feet at the same instant',
      'Land wide and bend the knees',
      'Ball pulled into your chest',
      'Shoulders over your hips, balanced',
    ],
    commonMistakes: [
      'Landing one foot then the other, which sets a pivot foot.',
      'Hopping too high and drifting past the spot you wanted.',
    ],
    video: {
      youtubeId: 'S7X5E-rtjjA',
      title: 'HOW TO JUMP STOP & PIVOT with the BASKETBALL!',
      channel: 'Shot Science Basketball',
    },
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['athletic-stance', 'pivoting'],
    relatedSkills: ['shot-ready-footwork'],
  },
  {
    id: 'jab-step',
    title: 'Jab Step',
    category: 'fundamentals',
    level: 2,
    summary: 'A short, hard step that makes the defender react first.',
    description:
      'From triple threat you jab your free foot at the defender while the pivot foot stays down. If the defender backs up, you shoot. If the defender freezes or leans, you drive past. The jab is not an attack by itself — it is a question you ask the defender.',
    keyPoints: [
      'Pivot foot never moves',
      'Jab short and hard, stay low',
      'Keep the ball at hip level',
      'Read the defender before you decide',
      'One jab, three possible answers',
    ],
    commonMistakes: [
      'Jabbing so far that you cannot push back off that foot.',
      'Standing up during the jab and losing your drive.',
      'Deciding what to do before you see the reaction.',
    ],
    video: {
      youtubeId: 'WM90iRaOZ3w',
      title: 'Fundamentals Of The Jab Step',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'PJb2kvW_A_E',
        title: 'How to Master The Perfect Jab Step: Basketball Moves For Beginners',
        channel: 'ShotMechanics',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['triple-threat', 'pivoting'],
    relatedSkills: ['rip-through', 'catch-and-face'],
  },
  {
    id: 'catch-and-face',
    title: 'Catch and Face Up',
    category: 'fundamentals',
    level: 2,
    summary: 'Catch, turn to the basket, and be dangerous before you dribble.',
    description:
      'Facing up means catching the pass and immediately pivoting so your shoulders point at the rim. Now you can see the defender, the basket, and your teammates at once. Most young players catch with their back to the play and waste the advantage the pass just created.',
    keyPoints: [
      'Catch with two hands, feet ready',
      'Pivot to face the rim right away',
      'Stay low through the turn',
      'See the rim, the defender, and the help',
      'Ball stays tight while you turn',
    ],
    commonMistakes: [
      'Catching and standing still with your back to the basket.',
      'Turning while standing tall, which is slow and easy to strip.',
    ],
    video: {
      youtubeId: 'kORepRyP_Vg',
      title: 'How to use a pivot foot and triple threat to create space',
      channel: 'Evolution Basketball Training',
    },
    extraVideos: [
      {
        youtubeId: 'F9CDRVeHZrc',
        title: 'Basketball Fundamentals - Square Up Triple Threat',
        channel: 'Better Basketball Training (Ozswoosh)',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['triple-threat', 'pivoting'],
    relatedSkills: ['jab-step', 'catch-and-shoot'],
  },
  {
    id: 'rip-through',
    title: 'Rip Through',
    category: 'fundamentals',
    level: 3,
    summary: 'Sweep the ball across your body to clear a hand and attack.',
    description:
      'A rip through is a hard sweep of the ball from one hip to the other, low and tight, while the pivot foot stays planted. It moves the ball away from the defender reaching in and opens a driving lane on that side. Ripping low keeps the ball safe; ripping high invites a steal.',
    keyPoints: [
      'Sweep low, below the knees',
      'Ball stays close to your body',
      'Pivot foot planted the whole time',
      'Drive on the first step after the rip',
      'Rip and go in one motion',
    ],
    commonMistakes: [
      'Swinging the ball at chest height into the defender hands.',
      'Ripping and then pausing, which gives the help defence time.',
    ],
    video: {
      youtubeId: 'CqhH1FURoik',
      title: 'Proper rip through - How to teach for players of all ages',
      channel: 'Evolution Basketball Training',
    },
    extraVideos: [
      {
        youtubeId: 'ANUCO8ze0JM',
        title: 'This One Basketball Move Will Make You Unstoppable | Rip Through',
        channel: 'Sports Stop',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['jab-step', 'pivoting'],
    relatedSkills: ['triple-threat'],
  },
  {
    id: 'shot-ready-footwork',
    title: 'Shot Ready Footwork',
    category: 'fundamentals',
    level: 3,
    summary: 'Use the hop or the 1-2 step to get into your shot on balance.',
    description:
      'There are two ways to gather your feet before a shot: land both feet together (the hop) or step inside foot then outside foot (the 1-2). The hop squares you up fast; the 1-2 is easier to control at speed and works better moving backwards. Good shooters own both and pick by situation.',
    keyPoints: [
      'Hop: both feet land together, quick release',
      '1-2: inside foot first, then outside',
      'Feet land under your shoulders',
      'Catch on the way down, not flat footed',
      'Same finish either way',
    ],
    commonMistakes: [
      'Drifting sideways on the gather so the shot leaks left or right.',
      'Picking footwork at random instead of by the situation.',
    ],
    video: {
      youtubeId: 'wEOyoVZzp84',
      title: 'SHOOTERS: Should You Hop OR Should You 1-2?',
      channel: 'DeepGame',
    },
    extraVideos: [
      {
        youtubeId: '6iMpVVIbMmc',
        title: 'Shooting The Basketball: The 1-2 Vs The Hop',
        channel: 'BBALLBREAKDOWN',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['jump-stop'],
    relatedSkills: ['catch-and-shoot', 'jump-shot'],
  },
]
