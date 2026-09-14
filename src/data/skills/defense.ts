import type { Skill } from '../../types'

export const DEFENSE: Skill[] = [
  {
    id: 'defensive-stance',
    title: 'Defensive Stance',
    category: 'defense',
    level: 1,
    summary: 'Low, wide, and balanced — the position you defend everything from.',
    description:
      'A defensive stance is wider and lower than your normal athletic stance, with your weight on the balls of your feet and hands active. You hold it for a whole possession, which is why defence is tiring in a way offence is not. Everything else on this list starts here.',
    keyPoints: [
      'Feet wider than your shoulders',
      'Sit down in the hips, chest up',
      'Weight on the balls of your feet',
      'Hands out and moving',
      'Hold it — do not stand up between passes',
    ],
    commonMistakes: [
      'Standing upright as soon as the ball goes elsewhere.',
      'Bending at the waist instead of the knees.',
      'Hands down by your sides.',
    ],
    video: {
      youtubeId: '4A6KqSJX8Ek',
      title: 'Fundamentals of A Defensive Stance',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'hPmc7R_dAxc',
        title: 'How To Play Defense For Beginners! Basketball Basics',
        channel: 'Get Handles Basketball',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['None'],
      duration: '5 min',
    },
    prerequisites: ['athletic-stance'],
    relatedSkills: ['defensive-slides', 'guarding-the-ball'],
  },
  {
    id: 'defensive-slides',
    title: 'Defensive Slides',
    category: 'defense',
    level: 1,
    summary: 'Move sideways without ever crossing your feet.',
    description:
      'Sliding means pushing off the trailing foot and stepping with the lead foot, keeping your stance the whole way. Crossing your feet feels faster but costs you a full step if the ball changes direction — and it always does. Slides work in a hallway, no ball needed.',
    keyPoints: [
      'Push off the back foot, step with the front',
      'Never cross your feet',
      'Stay low the whole slide',
      'Short, quick steps, not lunges',
      'Head stays level, no bouncing',
    ],
    commonMistakes: [
      'Crossing the feet and getting caught flat.',
      'Rising up between steps, which is slow to restart.',
    ],
    video: {
      youtubeId: 'QaYwcS00vSA',
      title: 'Basketball Defense: Stance and Slides',
      channel: "DICK'S",
    },
    extraVideos: [
      {
        youtubeId: 'OJA552n_S6I',
        title: 'Defensive Drills for Youth Basketball | Zig Zag Practice',
        channel: 'FastModel Sports',
      },
    ],
    tags: {
      space: ['Home', 'School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Cones'],
      duration: '10 min',
    },
    prerequisites: ['defensive-stance'],
    relatedSkills: ['guarding-the-ball', 'closeouts'],
  },
  {
    id: 'guarding-the-ball',
    title: 'Guarding the Ball',
    category: 'defense',
    level: 1,
    summary: 'Stay in front by moving your feet, not by reaching.',
    description:
      'On-ball defence is about position, not hands. You give yourself an arm’s length of space so you can react, angle your body to push the dribbler toward the sideline, and move your feet to stay in front. Reaching in is what turns good defence into a foul.',
    keyPoints: [
      'One arm’s length of space',
      'Move your feet, not your hands',
      'Angle them toward the sideline',
      'Watch their waist, not the ball',
      'Beaten? Sprint to get back in front',
    ],
    commonMistakes: [
      'Reaching in and fouling instead of sliding.',
      'Watching the ball, which every fake then works on.',
      'Standing so close you cannot react to a first step.',
    ],
    video: {
      youtubeId: 'J9KL8YjFMm4',
      title: 'How to Defend the Ball-Handler | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'AZl-Abt3A9s',
        title: '3 Reasons Why You Get Beat on Defense',
        channel: 'ShotMechanics',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['defensive-slides'],
    relatedSkills: ['contesting-shots', 'steals-without-fouling'],
  },
  {
    id: 'closeouts',
    title: 'Closeouts',
    category: 'defense',
    level: 2,
    summary: 'Sprint at the shooter, then stop short enough to still move.',
    description:
      'A closeout is the run at a player who just caught the ball. You sprint most of the way, then take short choppy steps to get under control with a high hand. Arriving out of control is worse than arriving late: the shooter simply drives past your momentum.',
    keyPoints: [
      'Sprint the first two thirds',
      'Chop the feet to stop under control',
      'High hand on the shooting side',
      'Stop short of them, not on them',
      'Land ready to slide, not flat',
    ],
    commonMistakes: [
      'Running all the way in and flying past.',
      'Jogging out, which gives an open shot anyway.',
      'Leaving both hands down.',
    ],
    video: {
      youtubeId: 'nOwQXU7IHZg',
      title: 'Fundamentals Of The Closeout',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'TrSAkKgHl0s',
        title: 'How To Close Out On Defense',
        channel: 'Shot Science Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['defensive-slides'],
    relatedSkills: ['off-ball-defense', 'attacking-a-closeout'],
  },
  {
    id: 'off-ball-defense',
    title: 'Off-Ball Defense',
    category: 'defense',
    level: 2,
    summary: 'See your player and the ball at the same time.',
    description:
      'Most of a possession you are not guarding the ball. The rule is to keep both your player and the ball in view at once, which means standing off to one side rather than face to face. The further your player is from the ball, the further you can sag toward the middle to help.',
    keyPoints: [
      'See your player and the ball together',
      'One step toward the ball, one step back',
      'Point at both — it forces the right angle',
      'Closer to the ball, closer to your player',
      'Move on every pass, not after it lands',
    ],
    commonMistakes: [
      'Turning your back on the ball to face your player.',
      'Ball-watching until your player cuts behind you.',
    ],
    video: {
      youtubeId: 'JIO9Kv0KMAs',
      title: 'The Fundamentals of Off Ball Defense',
      channel: "DICK'S",
    },
    extraVideos: [
      {
        youtubeId: '6L6QPqrtCGc',
        title: 'Guarding a player without the ball | Basketball',
        channel: 'SIKANA English',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['defensive-stance'],
    relatedSkills: ['help-and-rotations', 'closeouts'],
  },
  {
    id: 'contesting-shots',
    title: 'Contesting Shots',
    category: 'defense',
    level: 2,
    summary: 'Make the shot harder with a hand up — without leaving your feet.',
    description:
      'A contest is a hand in the shooter’s line of sight, straight up, close enough to matter. You do not need to block it; a hand up measurably lowers the shooting percentage. Jumping at a pump fake, on the other hand, gives away three free throws.',
    keyPoints: [
      'Hand straight up, not swiping across',
      'Contest the sight line, not the ball',
      'Stay down on the first fake',
      'Jump straight up if you jump at all',
      'Land without crashing into them',
    ],
    commonMistakes: [
      'Jumping at every shot fake.',
      'Swiping down at the ball, which hits the arm.',
      'Closing out into the shooter and fouling.',
    ],
    video: {
      youtubeId: 'HW5QhCSKTsw',
      title: 'How To Block Shots! Blocking Shots the Smart Way',
      channel: 'Shot Science Basketball',
    },
    extraVideos: [
      {
        youtubeId: '7itVh_2AXM4',
        title: 'How to Play Defense without Fouling',
        channel: 'Better Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['closeouts'],
    relatedSkills: ['steals-without-fouling'],
  },
  {
    id: 'help-and-rotations',
    title: 'Help and Rotations',
    category: 'defense',
    level: 3,
    summary: 'When a teammate is beaten, someone steps in and everyone shifts.',
    description:
      'Help defence means the nearest off-ball defender steps in front of a driver while the rest of the team rotates to cover whoever they left. It only works if it is immediate and if everyone moves together — one player helping alone just creates two open shooters.',
    keyPoints: [
      'Help early, at the top of the drive',
      'Get there before they gather, or not at all',
      'Whoever helps, someone covers theirs',
      'Talk — help is announced out loud',
      'Recover to your player after the pass',
    ],
    commonMistakes: [
      'Helping late and fouling a player already shooting.',
      'Helping without anyone rotating behind you.',
      'Playing it silently, so nobody knows who covers whom.',
    ],
    video: {
      youtubeId: 'ES7MVSegkSs',
      title: 'Man Defense Principle - Help Side',
      channel: 'Upward Sports',
    },
    extraVideos: [
      {
        youtubeId: 'lYMHGPNq_78',
        title: 'How to Teach Help Side Defense! 4 Best Basketball Drills',
        channel: 'Basketball Orbit',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['off-ball-defense'],
    relatedSkills: ['defending-pick-and-roll'],
  },
  {
    id: 'steals-without-fouling',
    title: 'Steals Without Fouling',
    category: 'defense',
    level: 3,
    summary: 'Take the ball from underneath, and only when it is actually there.',
    description:
      'Good steals come from reading a pass or swiping up at an exposed ball, not from reaching at a protected one. Going down on the ball hits the arm and gets called; going up from underneath is clean. A gamble that misses leaves your team defending four against five.',
    keyPoints: [
      'Swipe up from underneath, never down',
      'Take it when the ball is exposed',
      'Read the passer’s eyes and shoulders',
      'Gamble only with help behind you',
      'A miss costs more than a steal gains',
    ],
    commonMistakes: [
      'Reaching in on a protected dribble.',
      'Gambling for every pass and leaving the lane open.',
      'Chopping down on the ball, which is always a foul.',
    ],
    video: {
      youtubeId: '9FrXY8RmJgA',
      title: 'How To Get More Steals, the Right Way',
      channel: 'By Any Means Basketball',
    },
    extraVideos: [
      {
        youtubeId: '-OQaS386hBE',
        title: 'Defense Hacks: Get Steals & Blocks Without Fouling',
        channel: 'Get Handles Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['guarding-the-ball', 'contesting-shots'],
    relatedSkills: ['off-ball-defense'],
  },
  {
    id: 'defending-pick-and-roll',
    title: 'Defending the Pick and Roll',
    category: 'defense',
    level: 3,
    summary: 'Two defenders, one plan — agree before the screen arrives.',
    description:
      'A ball screen makes two defenders solve one problem, and the only bad answer is two different answers. Fight over the screen, go under it, hedge, or switch: each is fine if both of you do the same one. The screener’s defender calls it early and out loud.',
    keyPoints: [
      'Call the screen before it lands',
      'Over the top against a shooter',
      'Under it against a weak shooter',
      'Big shows, guard recovers — or switch',
      'Both defenders, same decision',
    ],
    commonMistakes: [
      'Getting caught on the screen because nobody called it.',
      'One defender switching while the other fights over.',
      'Helping so far off the roller that the pass is free.',
    ],
    video: {
      youtubeId: 'fpCAf1XJ7UI',
      title: 'How To Defend Ball Screens',
      channel: 'FIBA Basketball',
    },
    extraVideos: [
      {
        youtubeId: '6Ao9Ya2eXjM',
        title: 'How To Defend The High Pick And Roll',
        channel: 'BBALLBREAKDOWN',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['help-and-rotations'],
    relatedSkills: ['pick-and-roll-passing'],
  },
]
