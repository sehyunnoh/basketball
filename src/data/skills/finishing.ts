import type { Skill } from '../../types'

export const FINISHING: Skill[] = [
  {
    id: 'layup-strong-hand',
    title: 'Layup',
    category: 'finishing',
    level: 1,
    summary: 'The first shot to learn: two steps, then lay it off the glass.',
    description:
      'A layup is a close shot taken on the move, off one foot, usually bounced gently off the backboard. The rhythm is right foot, left foot, jump on the left when shooting with the right hand. Aim for the top corner of the small square on the board, not the rim.',
    keyPoints: [
      'Outside foot down, inside knee drives up',
      'Jump off the foot opposite your shooting hand',
      'Lay it softly off the square',
      'Finish high, do not throw it',
      'Same rhythm every time',
    ],
    commonMistakes: [
      'Jumping off the wrong foot.',
      'Shooting too hard so the ball rattles out.',
      'Taking three steps, which is travelling.',
    ],
    video: {
      youtubeId: '3noGvqHdoRE',
      title: 'Fundamentals of Lay-Ups',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'eIL_P_wOrUE',
        title: 'NEVER MISS LAYUPS AGAIN: Layup Aiming Tricks and Tips',
        channel: 'ShotMechanics',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['control-dribble'],
    relatedSkills: ['layup-weak-hand', 'power-layup'],
  },
  {
    id: 'layup-weak-hand',
    title: 'Weak Hand Layup',
    category: 'finishing',
    level: 1,
    summary: 'Finish on the left side with your left hand, and the right with your right.',
    description:
      'Driving to your weak side and still finishing with your strong hand means reaching across your body, right into the defender. The left-hand layup keeps your body between the ball and the defence. It feels wrong for about two weeks, then it feels normal.',
    keyPoints: [
      'Left side, left hand — no exceptions',
      'Jump off the right foot for a left-hand layup',
      'Start without a dribble, then add one',
      'Keep the ball on your outside shoulder',
      'Slow reps beat fast misses',
    ],
    commonMistakes: [
      'Switching back to the strong hand under the rim.',
      'Rushing to full speed before the footwork is automatic.',
    ],
    video: {
      youtubeId: 'FBbaXNTmu4Y',
      title: 'Youth Basketball: How We Teach Left Hand Layups',
      channel: 'BBall IQ',
    },
    extraVideos: [
      {
        youtubeId: 'ssiGnB4oJaw',
        title: 'Master Weak Hand Layups',
        channel: 'Get Handles Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['layup-strong-hand', 'weak-hand-dribbling'],
    relatedSkills: ['reverse-layup'],
  },
  {
    id: 'power-layup',
    title: 'Power Layup',
    category: 'finishing',
    level: 1,
    summary: 'Stop on two feet and go straight up — the finish that survives contact.',
    description:
      'A power layup ends with a jump stop instead of a running one-foot layup, so you rise straight up rather than drifting under the rim. Two feet give you balance when someone bumps you, and you keep the option to pivot or pump fake. It is the safest finish in traffic.',
    keyPoints: [
      'Jump stop on two feet, square to the board',
      'Ball chinned, elbows out',
      'Jump straight up, not forward',
      'Finish off the glass with two hands if needed',
      'Land where you took off',
    ],
    commonMistakes: [
      'Drifting under the basket so there is no angle left.',
      'Landing one foot at a time, which sets a pivot foot and kills the jump.',
    ],
    video: {
      youtubeId: 'Wp3nQOG4D4o',
      title: 'The Lay-Up: Power Lay-Ups, Reverse Lay-Ups and One-Step Lay-Ups | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'axezFSRRBKQ',
        title: 'Why Two-Foot Finishing is the Most Underrated Skill in Basketball',
        channel: 'By Any Means Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['layup-strong-hand', 'jump-stop'],
    relatedSkills: ['finishing-through-contact'],
  },
  {
    id: 'reverse-layup',
    title: 'Reverse Layup',
    category: 'finishing',
    level: 2,
    summary: 'Finish on the far side of the rim so the defender cannot reach it.',
    description:
      'A reverse layup carries you under the basket and you finish on the other side, using the rim itself as a shield. The shot blocker chasing you from behind runs out of room. The hard part is judging how far under to go before you turn and shoot.',
    keyPoints: [
      'Go under the rim, not around it',
      'Use the rim as the screen',
      'Shoot off the far side of the glass',
      'Look for the board as you clear the hoop',
      'Keep it high and soft',
    ],
    commonMistakes: [
      'Going too far under, so there is no angle to the backboard.',
      'Turning your head too late to find the target.',
    ],
    video: {
      youtubeId: 'jVb-CRFGJ70',
      title: 'The Reverse Layup (Finishing Breakdown)',
      channel: 'Coach Frikki',
    },
    extraVideos: [
      {
        youtubeId: 'IGcalXmWUwA',
        title: 'How to Shoot a Reverse Lay Up in Basketball',
        channel: 'iSportdotcom',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['layup-weak-hand'],
    relatedSkills: ['floater', 'finishing-through-contact'],
  },
  {
    id: 'floater',
    title: 'Floater',
    category: 'finishing',
    level: 2,
    summary: 'A high, soft shot over a taller defender before they can jump.',
    description:
      'The floater — also called a runner or teardrop — is released early and high, arcing over an arm that is longer than yours. You shoot it on the way up, off one foot, before the big defender has set. It is the answer to being smaller than the person guarding the rim.',
    keyPoints: [
      'Release early, before the defender jumps',
      'High arc, soft touch',
      'One-foot takeoff, off the inside foot',
      'Fingertips flick it, arms stay quiet',
      'Practise it from the same two spots',
    ],
    commonMistakes: [
      'Shooting it flat so it gets blocked anyway.',
      'Waiting until you are under the rim to decide.',
    ],
    video: {
      youtubeId: 'FtT0iQsl890',
      title: 'Floater Secrets: 3 Simple Keys to Scoring the Floater',
      channel: 'ShotMechanics',
    },
    extraVideos: [
      {
        youtubeId: '_LGKqZVQvzw',
        title: 'Secrets to the FLOATER! | How to shoot a Floater, Runner, Teardrop',
        channel: 'Shot Science Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['layup-strong-hand'],
    relatedSkills: ['reverse-layup', 'euro-step'],
  },
  {
    id: 'euro-step',
    title: 'Euro Step',
    category: 'finishing',
    level: 2,
    summary: 'Two steps in different directions to walk around a defender.',
    description:
      'After you pick up your dribble you get two steps. The euro step spends the first one going one way and the second going the other, so the defender commits to a body that is no longer there. It is legal footwork, not a trick — the count is the same as a normal layup.',
    keyPoints: [
      'Pick up the ball, then step wide one way',
      'Second step goes the opposite way',
      'Sell the first step with your shoulders',
      'Keep the ball away from the defender',
      'Finish off the second foot',
    ],
    commonMistakes: [
      'Taking a third step, which is travelling.',
      'Making both steps small, so nobody is fooled.',
    ],
    video: {
      youtubeId: 'UW8Wl7K5HDA',
      title: 'Fundamentals Of The Euro-Step',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'OPAp7Ro3Xk4',
        title: 'Master The Euro Step: A Step By Step Process',
        channel: 'DeepGame',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Cones'],
      duration: '15 min+',
    },
    prerequisites: ['layup-strong-hand', 'jump-stop'],
    relatedSkills: ['floater', 'attacking-a-closeout'],
  },
  {
    id: 'finishing-through-contact',
    title: 'Finishing Through Contact',
    category: 'finishing',
    level: 3,
    summary: 'Absorb the bump and still get the shot up on balance.',
    description:
      'Near the rim someone will hit you. Finishing through contact means expecting it: you brace, take the hit with your body rather than your shooting arm, and keep the shot on line. Bracing also draws the foul, which is worth more than the avoided one.',
    keyPoints: [
      'Jump into the contact, do not shy from it',
      'Take the hit on your shoulder and hip',
      'Shooting arm stays free and high',
      'Expect the foul, finish anyway',
      'Strong core, wide base on the landing',
    ],
    commonMistakes: [
      'Throwing the ball up early hoping for a whistle.',
      'Turning away from contact, which loses the angle and the balance.',
    ],
    video: {
      youtubeId: 'lytUfw3-LLw',
      title: 'How To Finish Through Contact: the Ultimate Guide',
      channel: 'By Any Means Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'OrfhQdRbTXA',
        title: '3 Ways To Finish Through Contact',
        channel: 'Pro Training Basketball',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['power-layup'],
    relatedSkills: ['reverse-layup', 'post-drop-step'],
  },
  {
    id: 'post-drop-step',
    title: 'Drop Step',
    category: 'finishing',
    level: 3,
    summary: 'Feel where the defender is, then step around them to the rim.',
    description:
      'With your back to the basket you can feel which side the defender is leaning on. The drop step swings your free foot past them on the other side, putting you under the rim in one move. It is the first post move worth learning because it needs no dribble skill, only feel and footwork.',
    keyPoints: [
      'Sit low and hold your ground',
      'Feel the defender with your back and arm',
      'Drop the foot away from their pressure',
      'One dribble at most, then finish',
      'Finish off two feet, high off the glass',
    ],
    commonMistakes: [
      'Standing tall so you get pushed off the spot.',
      'Guessing which way to go instead of feeling for it.',
    ],
    video: {
      youtubeId: 'TlOwO09gzpI',
      title: 'Fundamentals Of The Drop-Step Layup',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: '4bndda2KIVA',
        title: 'Killer Drop Step (Low Post Move)',
        channel: 'Shot Science Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['pivoting', 'power-layup'],
    relatedSkills: ['finishing-through-contact'],
  },
  {
    id: 'attacking-a-closeout',
    title: 'Attacking a Closeout',
    category: 'finishing',
    level: 3,
    summary: 'Read the sprinting defender and drive past the foot they landed on.',
    description:
      'When a defender runs at you they arrive off balance for a moment. If they close out short, you shoot; if they fly past, you drive — and you drive at the side their weight is already on, because they cannot push back off it. The read happens in the catch, not after a dribble.',
    keyPoints: [
      'Be ready to shoot before they arrive',
      'Short closeout, take the shot',
      'Long closeout, drive past them',
      'Attack the foot carrying their weight',
      'One dribble should get you there',
    ],
    commonMistakes: [
      'Putting the ball on the floor before reading anything.',
      'Driving into the help instead of away from it.',
    ],
    video: {
      youtubeId: 'xa4VdW6cDs4',
      title: 'The Key To Beating Your Defender - Attacking Closeouts',
      channel: 'Vision Driven Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'CLSYZlTwUvk',
        title: 'How To Attack Closeouts',
        channel: 'Coach Frikki',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['catch-and-face', 'euro-step'],
    relatedSkills: ['closeouts', 'catch-and-shoot'],
  },
]
