import type { Skill } from '../../types'

export const REBOUNDING: Skill[] = [
  {
    id: 'box-out',
    title: 'Box Out',
    category: 'rebounding',
    level: 1,
    summary: 'Find your player, put your back on them, then go get the ball.',
    description:
      'Boxing out means turning so your back is against the player you are guarding and holding them behind you while the shot comes off. It is the one rebounding skill that has nothing to do with height. Most rebounds are lost before the ball comes down, by watching the shot instead of finding a body.',
    keyPoints: [
      'Find your player the moment the shot goes up',
      'Pivot so your back is on them',
      'Sit low, elbows wide, wide base',
      'Hold the box for one full second',
      'Then go get the ball',
    ],
    commonMistakes: [
      'Watching the ball instead of finding a body.',
      'Boxing out and then forgetting to go after the rebound.',
      'Standing tall, which is easy to push out of the way.',
    ],
    video: {
      youtubeId: 'ounIDTQiQ2s',
      title: 'Basketball Defense: Boxing Out',
      channel: "DICK'S",
    },
    extraVideos: [
      {
        youtubeId: 'bhTAm_1UflA',
        title: '3-Second Box Out Drill',
        channel: 'Jr. NBA Jr. WNBA',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['pivoting', 'defensive-stance'],
    relatedSkills: ['defensive-rebounding', 'securing-the-rebound'],
  },
  {
    id: 'securing-the-rebound',
    title: 'Securing the Rebound',
    category: 'rebounding',
    level: 1,
    summary: 'Two hands, chin it, land wide — a rebound you lose does not count.',
    description:
      'Catching the ball is only half of a rebound. You take it with two hands, pull it under your chin with your elbows out, and land on a wide base so nobody can rip it away. Bringing it down to your waist is where most young players get stripped.',
    keyPoints: [
      'Catch with two hands, never one',
      'Chin the ball, elbows out',
      'Land wide and balanced',
      'Never bring it below your chest',
      'Turn away from pressure before you move',
    ],
    commonMistakes: [
      'Catching one-handed and losing it on the way down.',
      'Dropping the ball to waist height, where hands can reach it.',
      'Dribbling immediately in a crowd.',
    ],
    video: {
      youtubeId: '6nk54_kIcEA',
      title: 'The Basics of Rebounding',
      channel: 'TeamSnap',
    },
    extraVideos: [
      {
        youtubeId: 'opss2n2hXe8',
        title: 'Control the Ball After Every Rebound!',
        channel: 'Championship Productions',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '5 min',
    },
    prerequisites: ['jump-stop'],
    relatedSkills: ['box-out', 'outlet-pass'],
  },
  {
    id: 'reading-the-miss',
    title: 'Reading the Miss',
    category: 'rebounding',
    level: 1,
    summary: 'Misses are predictable — stand where the ball is going to land.',
    description:
      'Rebounds are not random. A shot from the corner mostly comes off to the opposite side, a long shot bounces long, and a flat shot rebounds further than a high-arcing one. Watching where the shot was taken from tells you where to be before anyone else moves.',
    keyPoints: [
      'Shots from the side come off the far side',
      'Long shots make long rebounds',
      'Flat shots bounce further than soft ones',
      'Most misses land outside the paint',
      'Move as the shot goes up, not after',
    ],
    commonMistakes: [
      'Standing directly under the rim, where few rebounds land.',
      'Waiting to see the miss before starting to move.',
    ],
    video: {
      youtubeId: '3sLB60PZmkk',
      title: 'Rebounding Secrets (Get More Boards)',
      channel: 'Coach Frikki',
    },
    extraVideos: [
      {
        youtubeId: 'jIBTjguvX94',
        title: 'How to Understand and Execute Successful Box Outs',
        channel: 'The Film Room',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    relatedSkills: ['box-out', 'offensive-rebounding'],
  },
  {
    id: 'defensive-rebounding',
    title: 'Defensive Rebounding',
    category: 'rebounding',
    level: 2,
    summary: 'End the possession — a stop is not a stop until you have the ball.',
    description:
      'Defensive rebounding is the last step of playing defence, and skipping it hands the other team a second try from closer in. The sequence is always the same: find your player, box out, get the ball, and get it out to the sideline quickly.',
    keyPoints: [
      'Find, box, get — in that order',
      'Everyone boxes out, not just the tall players',
      'Take it out of the air with two hands',
      'Land facing the sideline',
      'One outlet pass, not three dribbles',
    ],
    commonMistakes: [
      'Leaking out for the fast break before the ball is secured.',
      'Assuming the big player will handle it.',
    ],
    video: {
      youtubeId: '7RtVtQ-bqjI',
      title: 'How to Rebound on Defense in Basketball',
      channel: 'iSportdotcom',
    },
    extraVideos: [
      {
        youtubeId: 'K93HkeLb-kc',
        title: 'Rebound like Dennis Rodman: Lockdown Breakdown',
        channel: 'Coach Mike',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['box-out', 'securing-the-rebound'],
    relatedSkills: ['outlet-pass', 'help-and-rotations'],
  },
  {
    id: 'offensive-rebounding',
    title: 'Offensive Rebounding',
    category: 'rebounding',
    level: 2,
    summary: 'Get around the box out for a second shot from right under the rim.',
    description:
      'On offence somebody is trying to box you out, so you have to beat them to the spot or get around them. A quick step to one side as the shot goes up, or a swim move over their arm, is usually enough. An offensive rebound is the easiest shot your team will get all game.',
    keyPoints: [
      'Move as the shot leaves the hand',
      'Go around the box out, not through it',
      'Swim an arm over their shoulder',
      'Assume every shot misses',
      'Tip it to yourself if you cannot grab it',
    ],
    commonMistakes: [
      'Standing and admiring the shot.',
      'Pushing the defender in the back, which is a foul.',
      'Crashing when your team needs you back on defence.',
    ],
    video: {
      youtubeId: '4_L5s2w-YNo',
      title: 'Catching an Offensive Rebound | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'lBtOk7pzAf0',
        title: 'Offensive Rebounding Basketball Drill',
        channel: 'TeamSnap',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['reading-the-miss'],
    relatedSkills: ['putbacks'],
  },
  {
    id: 'rebound-timing',
    title: 'Timing the Jump',
    category: 'rebounding',
    level: 2,
    summary: 'Jump when the ball arrives, not when everyone else does.',
    description:
      'Most contested rebounds are lost by jumping early — you come down while the ball is still up. Good rebounders wait a beat, let the crowd jump, and then go up as the ball comes into reach. Height matters less than arriving at the right moment.',
    keyPoints: [
      'Let the early jumpers go first',
      'Jump to the ball, not straight up',
      'Reach at the top, not on the way up',
      'Two hands whenever you can',
      'Be ready to jump twice',
    ],
    commonMistakes: [
      'Jumping as soon as the shot goes up.',
      'Jumping straight up when the ball is going elsewhere.',
    ],
    video: {
      youtubeId: '7uQfJEv6-IA',
      title: 'Snag More Rebounds! Elite Level Basketball Rebounding Tips',
      channel: 'ShotMechanics',
    },
    extraVideos: [
      {
        youtubeId: 'xcPhbBZliCE',
        title: 'How To Improve Your Rebounding In Basketball',
        channel: 'Baller Boot Camp',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['securing-the-rebound'],
    relatedSkills: ['contested-rebounds'],
  },
  {
    id: 'putbacks',
    title: 'Putbacks',
    category: 'rebounding',
    level: 3,
    summary: 'Score straight off your own offensive rebound, before the defence resets.',
    description:
      'A putback is the shot you take immediately after grabbing an offensive rebound. Speed beats power here: the defence is still turned around for about half a second, so going straight back up beats landing, gathering and trying again. Keep the ball high the whole time.',
    keyPoints: [
      'Keep the ball high — never bring it down',
      'Go straight back up off two feet',
      'Use the glass, it is right there',
      'Expect contact and finish anyway',
      'No dribble unless you have to',
    ],
    commonMistakes: [
      'Bringing the ball down to gather, and getting stripped.',
      'Landing, pausing, then shooting into a set defence.',
    ],
    video: {
      youtubeId: 'YzhHbFUVBO0',
      title: '6 Offensive Rebound Putback Drills | Putback Layup',
      channel: 'Kevin Melson',
    },
    extraVideos: [
      {
        youtubeId: '06goiG6GFo4',
        title: 'Offensive Rebound Putback Series',
        channel: 'PureIntensityBBall',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['offensive-rebounding', 'power-layup'],
    relatedSkills: ['finishing-through-contact'],
  },
  {
    id: 'contested-rebounds',
    title: 'Contested Rebounds',
    category: 'rebounding',
    level: 3,
    summary: 'When two players have hands on it, the stronger base wins.',
    description:
      'Some rebounds come down into a crowd with two or three people holding it at once. You win these by landing with a wide base, keeping the ball high and away from reaching hands, and turning your shoulder into the traffic rather than away from it. Letting go early is the only real mistake.',
    keyPoints: [
      'Land wide, knees bent, low centre of gravity',
      'Ball high and away from the crowd',
      'Turn your shoulder into the contact',
      'Rip it away hard, not slowly',
      'Call for a timeout rather than lose it',
    ],
    commonMistakes: [
      'Swinging the ball through people, which is a foul.',
      'Landing with feet together and getting knocked off balance.',
    ],
    video: {
      youtubeId: 'xeNVQ8hhS7U',
      title: 'Chris Mack - War Rebounding',
      channel: 'Championship Productions',
    },
    extraVideos: [
      {
        youtubeId: 'efqrY2zwc84',
        title: "Teach Rebounding Skills with Chris Mack's 1-on-1 Drill!",
        channel: 'Championship Productions',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['rebound-timing', 'securing-the-rebound'],
    relatedSkills: ['rebounding-against-bigger-players'],
  },
  {
    id: 'rebounding-against-bigger-players',
    title: 'Rebounding Against Bigger Players',
    category: 'rebounding',
    level: 3,
    summary: 'Position and timing beat height, if you get to the spot first.',
    description:
      'Against someone taller you cannot win by jumping higher, so you win earlier: get to the spot before they do and put your body where they want to be. A swim move over their arm as the ball comes off gets your hands above theirs even when your head is not.',
    keyPoints: [
      'Get to the spot first, every time',
      'Body on them before the ball comes off',
      'Swim an arm over their shoulder',
      'Go up as they come down',
      'Tip it away from them if you cannot hold it',
    ],
    commonMistakes: [
      'Trying to out-jump someone taller.',
      'Giving up the position once they lean on you.',
    ],
    video: {
      youtubeId: 'IFtYglmumvg',
      title: 'Get More Rebounds No Matter Your Height',
      channel: 'By Any Means Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'Im4pROY8DNs',
        title: 'How to Rebound: Use a Backstroke Swim Move vs. Taller Players',
        channel: 'My Basketball Teacher',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['box-out', 'contested-rebounds'],
    relatedSkills: ['offensive-rebounding'],
  },
]
