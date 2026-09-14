import type { Skill } from '../../types'

export const STRATEGY: Skill[] = [
  {
    id: 'basketball-rules',
    title: 'The Rules',
    category: 'strategy',
    level: 1,
    summary: 'Enough of the rulebook to play a real game without confusion.',
    description:
      'You need surprisingly few rules to start: how scoring works, what travelling and double dribble are, what a foul is, and what happens when the ball goes out. Everything else you can pick up while playing. Knowing these stops the game being interrupted every thirty seconds.',
    keyPoints: [
      'Two inside the arc, three outside, one per free throw',
      'Travelling: moving your pivot foot',
      'Double dribble: stopping and starting again',
      'Fouls: illegal contact, five or six and you are out',
      'Out of bounds: last person to touch it loses it',
    ],
    commonMistakes: [
      'Learning rules only when a referee calls them.',
      'Arguing calls instead of adjusting to them.',
    ],
    video: {
      youtubeId: 'XbtmGKif7Ck',
      title: 'The Basic Rules of Basketball | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'wYjp2zoqQrs',
        title: 'The Rules of Basketball - Explained!',
        channel: 'Ninh Ly',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '5 min',
    },
    relatedSkills: ['positions', 'pivoting'],
  },
  {
    id: 'positions',
    title: 'Positions and Roles',
    category: 'strategy',
    level: 1,
    summary: 'What the five spots on the floor are actually responsible for.',
    description:
      'The five positions — point guard, shooting guard, small forward, power forward, centre — describe jobs, not fixed identities. At youth level everyone should try every position, because the skills overlap far more than the labels suggest. Knowing the roles mostly helps you understand where to stand.',
    keyPoints: [
      '1 point guard: brings the ball up, runs the offence',
      '2 shooting guard: scores, mostly from outside',
      '3 small forward: does a bit of everything',
      '4 power forward: scores inside, rebounds',
      '5 centre: closest to the rim, protects it',
    ],
    commonMistakes: [
      'Deciding you are "a centre" at twelve and skipping ball handling.',
      'Treating the labels as rules about where you may go.',
    ],
    video: {
      youtubeId: '4_4CymXARWQ',
      title: 'Basketball Positions and Roles | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'Wk8PrzMLGEE',
        title: 'Every position in basketball explained',
        channel: 'Tifo Sports by The Athletic',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '5 min',
    },
    prerequisites: ['basketball-rules'],
    relatedSkills: ['spacing'],
  },
  {
    id: 'spacing',
    title: 'Spacing',
    category: 'strategy',
    level: 1,
    summary: 'Stand far enough apart that one defender cannot guard two of you.',
    description:
      'Spacing is the habit of staying roughly four to five metres from your nearest teammate. When you bunch up, one defender covers two players and the floor has nowhere to drive. Most youth offences fail for this reason alone, not for lack of moves.',
    keyPoints: [
      'Stay four to five metres from teammates',
      'Do not follow the ball around',
      'Fill the spot someone just left',
      'Stand where you are a threat, not just open',
      'Good spacing creates driving lanes for free',
    ],
    commonMistakes: [
      'Everyone drifting toward the ball.',
      'Standing in the same place the driver wants to go.',
    ],
    video: {
      youtubeId: 'ukOTVfR2_k4',
      title: 'The Ultimate Guide to Spacing (How to Always Be in the Right Spot)',
      channel: 'Vision Driven Basketball',
    },
    extraVideos: [
      {
        youtubeId: '7uo-Lpw3nTE',
        title: 'Learn The Gap Theory',
        channel: 'The Film Room',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['None'],
      duration: '10 min',
    },
    prerequisites: ['positions'],
    relatedSkills: ['give-and-go', 'passing-decisions'],
  },
  {
    id: 'give-and-go',
    title: 'Give and Go',
    category: 'strategy',
    level: 2,
    summary: 'Pass, then cut to the rim while your defender watches the ball.',
    description:
      'The give and go is the oldest play in basketball and still one of the best: you pass to a teammate and immediately cut hard to the basket. It works because defenders relax the instant the ball leaves your hands. Two players and one cut beat most set plays.',
    keyPoints: [
      'Pass, then move immediately',
      'Cut the moment the defender turns their head',
      'Go hard — a slow cut is ignored',
      'Hands ready for the return pass',
      'Clear out if the pass does not come',
    ],
    commonMistakes: [
      'Passing and standing still to watch.',
      'Cutting slowly, which the defender simply follows.',
    ],
    video: {
      youtubeId: 'LOL5ZNuP7vk',
      title: 'The Give-and-Go | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'wH79CAnB9Vw',
        title: 'Give & Go Drill',
        channel: 'Jr. NBA Jr. WNBA',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['chest-pass', 'spacing'],
    relatedSkills: ['backdoor-cut', 'passing-decisions'],
  },
  {
    id: 'backdoor-cut',
    title: 'Backdoor Cut',
    category: 'strategy',
    level: 2,
    summary: 'When they overplay the pass, cut behind them to the basket.',
    description:
      'A defender denying you the ball has to stand between you and the passer — which means their back is to the basket. The backdoor cut punishes that: you step toward the ball to sell it, then cut hard behind them. It is the answer to tight denial defence.',
    keyPoints: [
      'Step toward the ball to set it up',
      'Cut behind them, not around the front',
      'Go when their head turns to the ball',
      'Hand up as a target, low and away',
      'Finish without slowing down',
    ],
    commonMistakes: [
      'Cutting before selling the first move.',
      'Drifting instead of cutting hard.',
      'Cutting into a lane a teammate is already in.',
    ],
    video: {
      youtubeId: 'AMFXMHce4qM',
      title: 'How To Get Open: The Backdoor Cut',
      channel: 'Shot Science Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'O4EX3P76h_U',
        title: 'The Backdoor Cut | Basketball',
        channel: 'SIKANA English',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['give-and-go'],
    relatedSkills: ['off-ball-defense', 'layup-strong-hand'],
  },
  {
    id: 'setting-a-screen',
    title: 'Setting a Screen',
    category: 'strategy',
    level: 2,
    summary: 'Stand still in the right place and free a teammate without touching anyone.',
    description:
      'A screen is a legal block: you plant your feet and let your teammate’s defender run into you. The rule is that you must be stationary when contact happens — leaning, sticking out a hip, or moving into them is an offensive foul. The screener often ends up more open than the player they freed.',
    keyPoints: [
      'Be completely still before contact',
      'Feet shoulder width, arms crossed on your chest',
      'Set it close enough that they cannot slip through',
      'Screener rolls to the rim afterwards',
      'Moving into the defender is a foul',
    ],
    commonMistakes: [
      'Still moving when the defender arrives — an offensive foul.',
      'Sticking out a hip or knee to make contact.',
      'Setting the screen too far away to matter.',
    ],
    video: {
      youtubeId: 'CTnSABsyzIE',
      title: 'Setting and Using a Screen | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'Ruce8Fb7zTY',
        title: 'Fundamentals Of Setting Up A Screen',
        channel: 'Jr. NBA Jr. WNBA',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['None'],
      duration: '10 min',
    },
    prerequisites: ['spacing'],
    relatedSkills: ['pick-and-roll', 'defending-pick-and-roll'],
  },
  {
    id: 'pick-and-roll',
    title: 'Pick and Roll',
    category: 'strategy',
    level: 3,
    summary: 'A screen on the ball, then the screener cuts to the rim.',
    description:
      'One player screens for the ball handler and then rolls toward the basket, turning one defender’s problem into two. It is the most used action in basketball at every level because it works with only two players and forces the defence to choose what to give up.',
    keyPoints: [
      'Wait for the screen — do not leave early',
      'Brush shoulders with the screener',
      'Screener rolls hard after contact',
      'Attack downhill, do not drift sideways',
      'Read what the two defenders do',
    ],
    commonMistakes: [
      'Using the screen before it is set.',
      'The screener standing still instead of rolling.',
      'Going away from the screen out of habit.',
    ],
    video: {
      youtubeId: 'Rl9kBocUc1E',
      title: 'Youth League Basketball Offense - Pick and Roll',
      channel: 'SportVideos',
    },
    extraVideos: [
      {
        youtubeId: 'jd6Av5Ukmjs',
        title: 'The Ultimate Guide to the Pick and Roll',
        channel: 'By Any Means Basketball',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['setting-a-screen'],
    relatedSkills: ['pick-and-roll-passing', 'defending-pick-and-roll'],
  },
  {
    id: 'zone-vs-man',
    title: 'Zone vs Man to Man',
    category: 'strategy',
    level: 3,
    summary: 'Tell which defence you are facing, then attack it differently.',
    description:
      'In man to man each defender follows a player; in a zone each guards an area. You can tell them apart in one possession by cutting through and seeing whether anyone follows you. Zones are beaten by moving the ball quickly and standing in the gaps; man is beaten by cuts and screens.',
    keyPoints: [
      'Cut through once and see who follows',
      'Man defence: use cuts and screens',
      'Zone: move the ball faster than they shift',
      'Zone: stand in the gaps, not in front of someone',
      'Against a zone, one extra pass usually opens it',
    ],
    commonMistakes: [
      'Playing a zone the same way you play man defence.',
      'Dribbling into the middle of a zone and getting trapped.',
    ],
    video: {
      youtubeId: 'iTI9SEOA1Aw',
      title: 'Difference Between Zone Defense vs Man To Man Defense',
      channel: 'Basketball Coach Allen',
    },
    extraVideos: [
      {
        youtubeId: 'wuWE4T1DHCw',
        title: 'Man-to-man defense | Basketball',
        channel: 'SIKANA English',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['None'],
      duration: '15 min+',
    },
    prerequisites: ['spacing', 'off-ball-defense'],
    relatedSkills: ['help-and-rotations'],
  },
  {
    id: 'transition-offense',
    title: 'Transition Offense',
    category: 'strategy',
    level: 3,
    summary: 'Score before the defence gets back and set.',
    description:
      'The seconds right after a rebound or steal are the easiest scoring chance in basketball, because the defence is behind the ball and unorganised. Transition works on lanes: the ball goes up the middle, two players sprint the sidelines wide, and everyone runs before looking for the ball.',
    keyPoints: [
      'Outlet and go — no dribbling it out',
      'Ball in the middle, runners fill the sidelines',
      'Sprint wide, not toward the ball',
      'First two seconds decide it',
      'No easy shot? Pull it out and set up',
    ],
    commonMistakes: [
      'Everyone running to the same lane.',
      'Jogging back on defence after a miss.',
      'Forcing a bad shot because the break looked open.',
    ],
    video: {
      youtubeId: 'JBSAIy6npKY',
      title: 'Fast break transition offense complete guide',
      channel: 'Coachbase',
    },
    extraVideos: [
      {
        youtubeId: 'VSPQ42e82mg',
        title: 'The Most Important Part of Offensive Transition',
        channel: 'The Film Room',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['outlet-pass', 'defensive-rebounding'],
    relatedSkills: ['conditioning', 'passing-decisions'],
  },
]
