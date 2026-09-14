import type { Skill } from '../../types'

export const SHOOTING: Skill[] = [
  {
    id: 'shooting-form',
    title: 'Shooting Form',
    category: 'shooting',
    level: 1,
    summary: 'Build the shape of your shot before you worry about distance.',
    description:
      'Good form is a chain: feet set, knees bend, elbow under the ball, and the wrist snaps down on the follow through. Every part happens in that order, upward, in one motion. Learn the shape close to the basket, because range comes from legs and repetition, not from heaving the ball.',
    keyPoints: [
      'Feet set, toes toward the rim',
      'Shooting elbow under the ball',
      'Guide hand on the side, does nothing',
      'Push up through the legs',
      'Snap the wrist, hold the follow through',
    ],
    commonMistakes: [
      'Pushing the ball with the guide hand.',
      'Shooting from too far away before the form is solid.',
      'Elbow flaring out to the side.',
    ],
    video: {
      youtubeId: 't7ciq_x4138',
      title: 'Fundamentals Of Shooting',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'UcnB9e5O5NY',
        title: 'The Ultimate Guide for Shooting the Basketball',
        channel: 'ILoveBasketballTV',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['athletic-stance'],
    relatedSkills: ['form-shooting', 'free-throw'],
  },
  {
    id: 'form-shooting',
    title: 'Form Shooting',
    category: 'shooting',
    level: 1,
    summary: 'One hand, close to the rim, until the shot repeats itself.',
    description:
      'Form shooting means standing a couple of steps from the basket and shooting with the shooting hand only, guide hand off the ball. Without the second hand there is nowhere to hide a flaw, so mistakes show up immediately. Make ten in a row from one spot before you step back.',
    keyPoints: [
      'Start two steps from the rim',
      'Guide hand off the ball completely',
      'Ball starts on the pads, not the palm',
      'Straight line up, straight line down',
      'Make ten before you move back',
    ],
    commonMistakes: [
      'Backing up before the shot is repeatable.',
      'Letting the guide hand sneak back on.',
      'Rushing reps instead of resetting each shot.',
    ],
    video: {
      youtubeId: 'zFZEqPFnhPA',
      title: 'One-Hand Shooting Drill with Allan Houston',
      channel: 'Jr. NBA Jr. WNBA',
    },
    extraVideos: [
      {
        youtubeId: 'Z60IxHevLAs',
        title: 'One Hand Form Shot | Basketball Drills',
        channel: 'Pro Skills Basketball',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['shooting-form'],
    relatedSkills: ['free-throw', 'jump-shot'],
  },
  {
    id: 'free-throw',
    title: 'Free Throw',
    category: 'shooting',
    level: 1,
    summary: 'The one shot nobody guards — win it with a routine.',
    description:
      'A free throw is always from the same spot with nobody defending, so the only variable is you. That is why shooters build a routine: same stance, same number of dribbles, same breath, every single time. The routine is not superstition, it is how you make the shot identical under pressure.',
    keyPoints: [
      'Same foot position on the line every time',
      'Same dribbles, same breath, same rhythm',
      'Eyes on one point on the rim',
      'Legs power the shot, arms just aim',
      'Hold the follow through until it drops',
    ],
    commonMistakes: [
      'Changing the routine when the game is close.',
      'Shooting all arms with no legs, so the shot falls short.',
      'Rushing the shot as soon as the ball arrives.',
    ],
    video: {
      youtubeId: 'iW2VFzBiaQo',
      title: 'The Free Throw | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: '0343D3fjPnQ',
        title: 'How to Make More Free Throws: Basketball Shooting Tips',
        channel: 'ShotMechanics',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '10 min',
    },
    prerequisites: ['shooting-form'],
    relatedSkills: ['form-shooting', 'jump-shot'],
  },
  {
    id: 'jump-shot',
    title: 'Jump Shot',
    category: 'shooting',
    level: 2,
    summary: 'Add a jump to your form without changing the form.',
    description:
      'The jump shot is your form shot with legs under it: you rise, release near the top, and land where you took off. The jump is for power and space, not for height, so a small controlled jump beats a big one. If your shot changes shape when you jump, go back to form shooting.',
    keyPoints: [
      'Jump straight up, land where you started',
      'Release on the way up or at the top',
      'Same elbow and wrist as form shooting',
      'Balanced landing, no drifting',
      'Hold the follow through',
    ],
    commonMistakes: [
      'Fading backwards on every shot.',
      'Jumping as high as possible and losing control.',
      'Releasing on the way down.',
    ],
    video: {
      youtubeId: 'qhgs5ZODc4A',
      title: 'The Jump Shot | Basketball',
      channel: 'SIKANA English',
    },
    extraVideos: [
      {
        youtubeId: 'Ph6-w-LCpYo',
        title: '3 Keys to Fix Your Jump Shot & Get PERFECT Shot ARC!',
        channel: 'ILoveBasketballTV',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['form-shooting'],
    relatedSkills: ['catch-and-shoot', 'pull-up-jumper', 'shot-ready-footwork'],
  },
  {
    id: 'catch-and-shoot',
    title: 'Catch and Shoot',
    category: 'shooting',
    level: 2,
    summary: 'Be ready before the pass arrives so the shot is already loaded.',
    description:
      'Catching and shooting quickly is mostly preparation: hands up, knees already bent, feet moving into the catch. The shot starts before the ball touches your hands, which is why good shooters look so fast. Catching flat footed and then getting ready is always a beat too slow.',
    keyPoints: [
      'Hands up and target ready early',
      'Feet arrive as the ball arrives',
      'Catch low, already bent',
      'Face the rim as you catch',
      'One motion from catch to release',
    ],
    commonMistakes: [
      'Standing straight up and dipping after the catch.',
      'Catching with the feet still, then shuffling into the shot.',
    ],
    video: {
      youtubeId: 'IYzPW29rYEI',
      title: '3 Keys How to Shoot a Basketball Better off the Catch',
      channel: 'ShotMechanics',
    },
    extraVideos: [
      {
        youtubeId: '1vzcKKT5258',
        title: 'How To Shoot a Basketball: Shooting off the Catch Pro Tip!',
        channel: 'SeeMikeDunn',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['jump-shot', 'shot-ready-footwork'],
    relatedSkills: ['shooting-off-movement', 'catch-and-face'],
  },
  {
    id: 'pull-up-jumper',
    title: 'Pull Up Jumper',
    category: 'shooting',
    level: 2,
    summary: 'Stop out of the dribble and rise into a balanced shot.',
    description:
      'A pull up is a shot taken out of your own dribble, usually after beating a defender a step. The hard part is the gather: you have to turn forward speed into a balanced, upward jump instead of a fade. Practise the last dribble and the stop far more than the shot itself.',
    keyPoints: [
      'Last dribble is low and hard',
      'Gather on two feet, balanced',
      'Rise straight up, not forward',
      'Shoulders square before you release',
      'Same follow through as a set shot',
    ],
    commonMistakes: [
      'Drifting forward into the defender and drawing a charge.',
      'Taking the shot off balance because the stop was rushed.',
    ],
    video: {
      youtubeId: 'xLyFaI491ho',
      title: 'The Ultimate Guide to the Pull-Up // Master the Mid Range',
      channel: 'By Any Means Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'nZ3codEmFm4',
        title: 'How to Shoot a Pull Up Jump Shot',
        channel: 'SeeMikeDunn',
      },
    ],
    tags: {
      space: ['School hoop', 'Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['jump-shot', 'control-dribble'],
    relatedSkills: ['hesitation-dribble', 'game-speed-shooting'],
  },
  {
    id: 'three-point-shot',
    title: 'Three Point Shot',
    category: 'shooting',
    level: 3,
    summary: 'Extend your range with your legs, not by changing your form.',
    description:
      'A three pointer is the same shot from further out, powered by a stronger leg drive. If reaching the rim forces your elbow out or drops the ball to your hip, you are not ready for that distance yet. Move back one step at a time, and only when the form survives.',
    keyPoints: [
      'Power comes from the legs, not the arms',
      'Do not let the form change to reach',
      'Step back one foot at a time',
      'Know where the line is without looking',
      'Feet set before the catch',
    ],
    commonMistakes: [
      'Shooting threes before you can shoot from the free throw line with clean form.',
      'Throwing the ball from the hip to get it there.',
      'Stepping on the line because you never checked your feet.',
    ],
    video: {
      youtubeId: 'dFYFE7TD8os',
      title: '5 Secrets To INSTANTLY Make More 3 Point Shots!',
      channel: 'Get Handles Basketball',
    },
    extraVideos: [
      {
        youtubeId: 'XtrUlFGG5Yo',
        title: 'How to Shoot a 3 Pointer PERFECTLY!!! Basketball Shooting Drills',
        channel: 'THINCPRO Basketball',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['jump-shot', 'catch-and-shoot'],
    relatedSkills: ['game-speed-shooting'],
  },
  {
    id: 'shooting-off-movement',
    title: 'Shooting on the Move',
    category: 'shooting',
    level: 3,
    summary: 'Turn sprinting, cutting, and relocating into a set shot.',
    description:
      'In a real game you rarely stand still waiting for a pass — you cut, you relocate after passing, and the ball arrives while you are moving. Shooting on the move is the skill of stopping that momentum into balanced feet. Footwork does the work; the shot itself never changes.',
    keyPoints: [
      'Sprint to the spot, then set the feet',
      'Chin the ball briefly if the catch is wild',
      'Inside foot first when running the baseline',
      'Stop the drift before you shoot',
      'Relocate after every pass',
    ],
    commonMistakes: [
      'Shooting while still travelling sideways.',
      'Jogging to the spot so the feet arrive late.',
    ],
    video: {
      youtubeId: '69nZMcq0ph8',
      title: 'Basketball: How to shoot on the move',
      channel: 'Julz Allender',
    },
    extraVideos: [
      {
        youtubeId: 'u26gG3oAXKo',
        title: 'NBA Shooting Drills: Relocation with John Townsend',
        channel: 'Dr. Dish Basketball',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Partner',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['catch-and-shoot'],
    relatedSkills: ['game-speed-shooting', 'shot-ready-footwork'],
  },
  {
    id: 'game-speed-shooting',
    title: 'Game Speed Shooting',
    category: 'shooting',
    level: 3,
    summary: 'Practise at the speed and pressure you will actually shoot at.',
    description:
      'Shots made standing still, unguarded, at your own pace do not predict much. Game speed practice means moving to the ball, shooting quickly, and keeping score so a miss costs you something. Give yourself a target number and a time limit, and the session starts to feel like a game.',
    keyPoints: [
      'Move to every shot, never stand still',
      'Keep score and beat your last number',
      'Add a clock so there is pressure',
      'Rebound your own ball and go again',
      'Quality reps beat counting reps',
    ],
    commonMistakes: [
      'Shooting 100 comfortable shots and calling it a workout.',
      'Stopping the session on a made shot every time.',
    ],
    video: {
      youtubeId: 'qu4n-L5mwdk',
      title: 'The Ultimate By-Yourself Shooting Workout! What is Your Score??',
      channel: 'By Any Means Basketball',
    },
    extraVideos: [
      {
        youtubeId: '3YQJiA7e_Jc',
        title: 'MAKE IN PRACTICE, MISS IN GAMES?!? (Game Speed Practice)',
        channel: 'Shot Science Basketball',
      },
    ],
    tags: {
      space: ['Indoor court'],
      solo: 'Solo',
      equipment: ['Ball only'],
      duration: '15 min+',
    },
    prerequisites: ['catch-and-shoot', 'pull-up-jumper'],
    relatedSkills: ['three-point-shot', 'shooting-off-movement'],
  },
]
