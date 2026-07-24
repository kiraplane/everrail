import { achievements } from './sources';
import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-07-24';
const publishedAt = '2026-07-21';

const videos = {
  soloDayOne: {
    id: 'cFRnk_m22As',
    title: 'Day ONE on This NEW Train Survival Crafting Game SOLO! - Everrail',
    channel: 'ProRogueBear',
    url: 'https://www.youtube.com/watch?v=cFRnk_m22As',
    thumbnailUrl: '/everrail/guides/solo-day-one.jpg',
    publishedAt: '2026-07-20',
    viewCountLabel: '10K+ views at launch check',
    checkedAt,
  },
  trainDayOne: {
    id: 'LDkiIufi_PA',
    title: 'MY BASE IS A TRAIN! | EverRail Day One',
    channel: 'JaWoodle',
    url: 'https://www.youtube.com/watch?v=LDkiIufi_PA',
    thumbnailUrl: '/everrail/guides/train-day-one.jpg',
    publishedAt: '2026-07-20',
    viewCountLabel: '14K+ views at launch check',
    checkedAt,
  },
  thingsToKnow: {
    id: 'mQv_Xn-KSS4',
    title: '7 Things You NEED To Know About EverRail',
    channel: 'FGS',
    url: 'https://www.youtube.com/watch?v=mQv_Xn-KSS4',
    thumbnailUrl: '/everrail/guides/things-to-know.jpg',
    publishedAt: '2026-05-18',
    viewCountLabel: 'Pre-launch feature explainer',
    checkedAt,
  },
  coopLaunch: {
    id: 'ZROv2zyK6FE',
    title:
      "LAUNCH DAY! 'Snowpiercer' Train Survival Game | EVERRAIL | Co-Op Base Building in a Frozen Moon!",
    channel: 'Raptor',
    url: 'https://www.youtube.com/watch?v=ZROv2zyK6FE',
    thumbnailUrl: '/everrail/guides/coop-launch.jpg',
    publishedAt: '2026-07-21',
    viewCountLabel: 'Launch-day co-op stream',
    checkedAt,
  },
  developerLaunch: {
    id: 'uaj5scvMCIY',
    title: 'EverRail Launch Stream - Our Developers Play the Game',
    channel: 'Aesir Interactive',
    url: 'https://www.youtube.com/watch?v=uaj5scvMCIY',
    thumbnailUrl: '/everrail/guides/developer-launch.jpg',
    publishedAt: '2026-07-21',
    viewCountLabel: 'Official developer launch stream',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

const makeGuide = (guide: Omit<Guide, 'publishedAt' | 'updatedAt'>): Guide => ({
  publishedAt,
  updatedAt: publishedAt,
  ...guide,
});

export const guides: Guide[] = [
  makeGuide({
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'EverRail Beginner Guide: Your First Runs on Inara',
    seoTitle: 'EverRail Beginner Guide: First Runs, Stops & Survival',
    seoDescription:
      'Start EverRail with a safe first-run plan for train power, short expeditions, passengers, rations, crafting and the mistakes that end early journeys.',
    summary:
      'Learn one rhythm first: move to charge, stop with a single objective, return before the battery becomes an emergency, then improve the train deliberately.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: videos.soloDayOne.thumbnailUrl,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'The opening order is based on the official train/battery loop and checked against current July 20 solo gameplay. It avoids unverified recipe costs and fixed map claims.',
    videoSearchQueries: [
      'EverRail beginner guide',
      'EverRail tips first run',
      'EverRail solo day one',
    ],
    video: videos.soloDayOne,
    tags: ['First run', 'Solo', 'Priorities'],
    relatedRoutes: [
      '/guides/train-battery-energy-guide',
      '/guides/expeditions-return-plan',
      '/guides/passengers-rations-respawn',
      '/guides/crafting-building-recycler',
    ],
    body: [
      {
        heading: 'Build your first run around the battery',
        paragraphs: [
          'EverRail becomes much easier once you stop treating the train as a parked base. The battery charges while the train moves and drains while it stands still, so every stop is a purchase made with time. Finish the tutorial prompts, learn where the cockpit timer is displayed, and take the first few stops as short practice runs rather than attempts to clear an entire location.',
          'Before opening the expedition door, choose one result: basic materials, a visible recipe, a passenger rescue or a quick facility objective. Leave with enough inventory space to carry that result, watch the train timer while you are outside, and turn back while the return is still routine. A half-finished location is better than a dead train because the procedural world will keep offering new opportunities.',
        ],
        bullets: [
          'Move until the battery has a comfortable reserve before experimenting.',
          'Set one stop objective and one turn-back point.',
          'Keep the route home simple enough to repeat under pressure.',
          'Resume movement before sorting every new item.',
        ],
      },
      {
        heading: 'Spend the first haul on reliability',
        paragraphs: [
          'Early resources compete for crafting, building, repair and storage. Reliability wins that competition. Make the tools or stations required by the active objective, create enough storage to separate survival supplies from construction materials, and keep repair options accessible. A decorative or oversized layout can wait until the train survives ordinary stops without a scramble.',
          'Use the game’s tracking and tooltip systems instead of memorizing recipes from old demo footage. Buildings can be tracked, recipe tooltips identify the required station, and dismantling currently refunds the full build cost. That makes a compact temporary layout safer than hoarding indefinitely. Build what solves the present bottleneck, test it, and relocate it later if the wagon plan changes.',
        ],
        bullets: [
          'Follow the active challenge when it unlocks a needed station.',
          'Keep rations, healing and repair supplies out of the recycling pile.',
          'Leave empty inventory slots before an expedition.',
          'Use full-cost dismantling to correct a poor layout instead of restarting.',
        ],
      },
      {
        heading: 'Protect passengers before chasing scale',
        paragraphs: [
          'Passengers are both your life pool and a continuing food cost. When the current survivor dies, another passenger can take over as long as somebody remains aboard. Rescue opportunities matter, but collecting people faster than you can supply rations creates another failure condition. Check passenger count and ration stock together, especially before a long expedition or a building session that keeps the train stopped.',
          'The useful beginner loop is deliberately modest: charge, scout, stop, collect one useful result, return, move, then process the haul. Repeat until you understand how quickly your particular difficulty setting consumes time and supplies. Only then should you take a deeper dungeon, add several wagons or split attention across multiple production chains.',
        ],
        bullets: [
          'Treat every death as a permanent cost to the train population.',
          'Do not accept a long fight only because another passenger can respawn.',
          'Check rations before rescuing several survivors in succession.',
          'Let the battery decide when a stop ends, not curiosity.',
        ],
      },
      {
        heading: 'Know what can change during Early Access',
        paragraphs: [
          'EverRail launched with a deliberately early Early Access model. Balance, onboarding, content and performance are expected to change, so a guide should teach decisions rather than pretend every cost or timer is permanent. Use the current in-game tooltip when it disagrees with a screenshot, and check Steam announcements after a patch before rebuilding around an old number.',
          'The most stable rules are the ones the game is built around: movement creates energy, stopped time has a cost, expeditions must end with a return, passengers are lives, and the train is a shared system in co-op. If those rules remain your priority, smaller balance changes will not invalidate the whole plan.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in EverRail?',
        answer:
          'Finish the tutorial, charge the train, then make a short expedition with one objective and return before the battery is low.',
      },
      {
        question: 'Can I play EverRail solo?',
        answer:
          'Yes. Steam lists single-player and online co-op. Solo play rewards shorter stops and stricter inventory discipline because one player handles every role.',
      },
      {
        question: 'Should I build many wagons immediately?',
        answer:
          'No. Add space when a real storage or production bottleneck appears, then verify that the larger train is still easy to navigate and maintain.',
      },
    ],
  }),
  makeGuide({
    slug: 'train-battery-energy-guide',
    path: '/guides/train-battery-energy-guide',
    title: 'EverRail Train Battery and Energy Guide',
    seoTitle: 'EverRail Battery Guide: Charge, Stop & Return Safely',
    seoDescription:
      'Understand how the EverRail train battery charges, why stops drain energy, how to budget expeditions and when to leave a location before the run collapses.',
    summary:
      'The battery is the clock behind every decision. Charge while moving, price each stop before leaving the train and preserve a return margin.',
    category: 'Train',
    difficulty: 'System guide',
    coverImageUrl: videos.trainDayOne.thumbnailUrl,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'The charging rule comes from the current Steam description. Stop-planning advice was visually cross-checked against launch-day train gameplay.',
    videoSearchQueries: [
      'EverRail battery guide',
      'EverRail train energy',
      'EverRail train stops',
    ],
    video: videos.trainDayOne,
    tags: ['Battery', 'Train', 'Timer'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/expeditions-return-plan',
      '/guides/wagons-storage-train-upgrades',
      '/guides/co-op-roles-multiplayer-fixes',
    ],
    body: [
      {
        heading: 'Movement is your generator',
        paragraphs: [
          'The train battery recharges while the train is moving and drains while it is stopped. That makes motion a production phase and every station, facility or wilderness stop a consumption phase. Do not wait for a warning before thinking about energy. Decide how much reserve a stop may spend while the train is still rolling and the cockpit display is calm.',
          'A good reserve is not one universal number because difficulty, train systems and updates can change the rate. Use the displayed time as the authority. Learn how long a simple out-and-back route takes, then keep a margin for looting, navigation mistakes, combat and the final trip through the expedition door. If the margin disappears, the objective is already over even if a chest is still visible.',
        ],
        bullets: [
          'Charge before a risky stop instead of hoping to recharge afterward.',
          'Read the cockpit help screen after updates; it contains the current rule.',
          'Leave a larger reserve for dungeons and unfamiliar facilities.',
          'Resume movement before reorganizing the entire train.',
        ],
      },
      {
        heading: 'Separate the stop into three budgets',
        paragraphs: [
          'Think of stopped time in three parts: travel out, useful work and travel back. The return portion is non-negotiable. Estimate it first, then decide how much of the remaining budget belongs to scanning, fighting or collecting. This reverses the common mistake of exploring until a low-battery alarm and then discovering that the return path was longer than expected.',
          'The current design uses the train timer as the primary timer while you are on foot. Keep checking it at natural decision points: before entering a deeper room, after a fight, when inventory fills and whenever you lose sight of the return route. A timer check is useful only if it changes behavior, so pair each threshold with a pre-decided action such as turn around or abandon secondary loot.',
        ],
        bullets: [
          'Return time: protect it first.',
          'Objective time: spend it on one chosen result.',
          'Contingency time: save it for combat, navigation and a blocked route.',
          'Sorting time: move the train before spending it.',
        ],
      },
      {
        heading: 'Stop safely in solo and co-op',
        paragraphs: [
          'Solo players should favor close, readable objectives because nobody remains behind to watch the train while another player scouts. Park with the expedition door facing an easy landmark, avoid carrying materials you cannot afford to lose, and keep the first stop at a new location short enough to learn its shape. A second visit with better information is cheaper than one heroic overextension.',
          'In co-op, name one player as the timekeeper before everyone scatters. Shared power means four separate loot decisions can still kill one train. The timekeeper calls the outbound limit, the turn-back point and the restart. Other players report when they enter a dungeon or need help instead of silently consuming the contingency margin.',
        ],
      },
      {
        heading: 'Recover from a low-battery stop',
        paragraphs: [
          'When the battery becomes critical, stop solving the location. Drop the idea that one more item will rescue the run, follow the known route, and use only the healing or combat necessary to reach the train. Once aboard, start moving before crafting, storage sorting or argument about missed loot. The objective at that point is energy production, not efficiency.',
          'Afterward, identify the real cause: the train stopped with too little reserve, the objective was too far away, the team split without a timer call, or inventory management consumed the stop. Fix that decision on the next run. Building more battery capacity may help later, but it does not replace a stop plan.',
        ],
      },
    ],
    faq: [
      {
        question: 'How does the EverRail battery recharge?',
        answer:
          'The official Steam description says the battery recharges while the train moves and drains while it stands still.',
      },
      {
        question: 'Is there a separate expedition timer?',
        answer:
          'The July update removed the separate countdown and made the train timer the primary clock while players are outside.',
      },
      {
        question: 'What should I do when the battery is low?',
        answer:
          'Abandon secondary loot, return by the known route and start the train moving before sorting or crafting.',
      },
    ],
  }),
  makeGuide({
    slug: 'passengers-rations-respawn',
    path: '/guides/passengers-rations-respawn',
    title: 'EverRail Passengers, Rations and Respawn Guide',
    seoTitle: 'EverRail Passengers Guide: Rations, Lives & Rescue',
    seoDescription:
      'Manage EverRail passengers as lives and mouths to feed: understand respawns, the current ration cycle, starvation warnings and when rescues are sustainable.',
    summary:
      'More passengers mean more chances after death, but also more ration demand. Grow the population only as fast as the train can feed it.',
    category: 'Survival',
    difficulty: 'System guide',
    coverImageUrl: '/everrail/screenshots/4.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Passenger lives come from current Steam copy. The eight-hour ration distribution and starvation behavior come from the developer’s July update.',
    videoSearchQueries: [
      'EverRail passengers guide',
      'EverRail rations',
      'EverRail respawn',
    ],
    tags: ['Passengers', 'Rations', 'Respawn'],
    relatedRoutes: [
      '/guides/cold-hunger-survival',
      '/guides/expeditions-return-plan',
      '/guides/wagons-storage-train-upgrades',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Passengers are lives, not a free retry button',
        paragraphs: [
          'When the active survivor dies, another passenger can step forward and continue the journey. The run survives only while people remain aboard, so every death permanently reduces the train’s safety margin. That makes passenger rescues strategically valuable, but it does not make reckless combat cheap. A recovered backpack cannot replace a population that has collapsed.',
          'Read the passenger count as remaining lives and as future food demand at the same time. If the count is low, prioritize safer routes and rescue opportunities. If it rises quickly, pause expansion long enough to confirm that ration production and storage can support the next distribution. The correct population is the one your current train can keep alive.',
        ],
        bullets: [
          'One death consumes one passenger life.',
          'A rescue increases resilience only if the train can feed the newcomer.',
          'Avoid using respawn as a shortcut back to the train.',
          'Keep the passenger and ration indicators visible in every stop decision.',
        ],
      },
      {
        heading: 'Plan around the current ration cycle',
        paragraphs: [
          'The developer’s July update changed ration distribution to three times a day on a steady eight-hour cycle, with every passenger consuming one ration at each distribution. The interface warns when the store is low and the board computer announces critical situations. Because Early Access balance can change, use the in-game distribution display as the final authority after a patch.',
          'Do not count only the next meal. Carry enough buffer for the time spent on an expedition, the trip needed to find more supplies and the possibility that a planned facility does not contain what you expected. Store rations where they will not be mistaken for general crafting material, and check the ration count before accepting another passenger.',
        ],
        bullets: [
          'Audit rations before a long stop and immediately after a rescue.',
          'Treat the danger callout as a stop-everything warning.',
          'Do not recycle or consume the passenger reserve accidentally.',
          'Keep extra supply for a failed expedition rather than budgeting perfectly.',
        ],
      },
      {
        heading: 'Choose rescues by train readiness',
        paragraphs: [
          'A nearby rescue is attractive because passengers unlock achievements and extend the run, yet a deep rescue can consume battery, ammunition, healing and food. Check the whole cost before committing. If the train is already low on energy or rations, stabilize first and return to rescue work with a larger margin.',
          'In co-op, decide who escorts the rescued passenger objective while the rest protect the return route and watch the train. Shared supplies make duplicated effort expensive. The passenger system rewards a coordinated team that brings everyone home, not four players independently chasing markers.',
        ],
      },
      {
        heading: 'Recover from a population emergency',
        paragraphs: [
          'When passengers or rations approach zero, stop expanding. Resume movement to preserve energy, cancel optional fights, shorten every stop and use the next safe opportunity to obtain the missing resource. If the issue is ration demand rather than a lack of passengers, adding another survivor makes the emergency worse.',
          'After stability returns, improve the wagon layout so food status is easy to audit. The best survival train is not the largest one; it is the one whose critical stores can be checked and replenished before the next clock runs out.',
        ],
      },
    ],
    faq: [
      {
        question: 'What happens when you die in EverRail?',
        answer:
          'Another passenger becomes the active survivor if anyone remains aboard. The journey ends when no passengers remain.',
      },
      {
        question: 'How often do passengers eat rations?',
        answer:
          'The July 2026 update says rations are distributed every eight hours, three times per day, with one ration consumed per passenger.',
      },
      {
        question: 'Should I rescue every passenger immediately?',
        answer:
          'Only when the battery, combat supplies and ration store can support the rescue and the larger population.',
      },
    ],
  }),
  makeGuide({
    slug: 'expeditions-return-plan',
    path: '/guides/expeditions-return-plan',
    title: 'EverRail Expeditions Guide: Scout, Stop and Return',
    seoTitle: 'EverRail Expeditions Guide: Safe Stops & Return Plans',
    seoDescription:
      'Plan EverRail expeditions with a clear objective, battery reserve, outbound route, return trigger and inventory plan for facilities, dungeons and rescues.',
    summary:
      'A successful expedition is not the one that opens every room. It is the one that brings the chosen result back before the train loses power.',
    category: 'Exploration',
    difficulty: 'Checklist',
    coverImageUrl: '/everrail/screenshots/6.jpg',
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'The expedition loop and procedural world are official. Current map-pin, scan-range and timer behavior comes from the July developer update.',
    videoSearchQueries: [
      'EverRail expedition guide',
      'EverRail dungeon tips',
      'EverRail facility gameplay',
    ],
    tags: ['Expeditions', 'Dungeons', 'Return'],
    relatedRoutes: [
      '/guides/train-battery-energy-guide',
      '/guides/glider-scouting-iso-guide',
      '/guides/combat-robots-emp-guide',
      '/guides/cold-hunger-survival',
    ],
    body: [
      {
        heading: 'Pick the result before stopping',
        paragraphs: [
          'Procedural generation means the exact route and loot will vary, so the transferable skill is choosing a result. Use the glider, map and visible facility type to decide whether the stop is for materials, a recipe, Iso, a passenger or a challenge objective. If none of those outcomes matters now, keep the train moving and preserve charge for a stronger opportunity.',
          'Prepare the inventory for that result. Leave room for the expected haul, carry the tool or ammunition needed to obtain it, and store valuables that do not belong on the trip. An expedition with no free slots wastes battery while you compare items under pressure. A short preparation audit on a moving train is cheaper than sorting outside.',
        ],
        bullets: [
          'One stop, one primary objective.',
          'Carry only the tools and supplies that support that objective.',
          'Mark the expedition door and first return landmark.',
          'Skip locations that do not solve a current need.',
        ],
      },
      {
        heading: 'Make the outbound route reversible',
        paragraphs: [
          'Travel out in a way you can reverse when visibility is poor or enemies interrupt the route. Notice large structures, doors, color changes and map pins instead of relying on small loot objects as landmarks. The current update keeps dungeon pins after the map closes or the game restarts, so use persistent markers to reduce repeat exploration.',
          'At each transition, ask whether the next room or descent still fits the return budget. Deep facilities create a chain of small decisions that can quietly consume the entire battery. If the path back is already unclear, solve navigation before moving deeper. Do not let an unopened container become more important than a known exit.',
        ],
      },
      {
        heading: 'Use three return triggers',
        paragraphs: [
          'Return when any one of three things happens: the battery reaches the planned threshold, the objective is complete, or the expedition loses the resources required to continue safely. The third trigger includes low healing, the wrong ammunition, full inventory, damaged equipment or a route blocked by an enemy you cannot handle efficiently.',
          'Turning around after success is often harder than turning around after failure because extra rooms feel free. They are not free; they spend the same battery margin that protects the completed objective. Bank the useful haul, start moving and use the next stop for the next question.',
        ],
        bullets: [
          'Timer trigger: preserve the return reserve.',
          'Success trigger: bank the chosen result.',
          'Capability trigger: leave when the loadout no longer matches the threat.',
          'Team trigger: regroup immediately when a player is lost or separated.',
        ],
      },
      {
        heading: 'Debrief while the train charges',
        paragraphs: [
          'Once aboard, begin moving and then process the expedition. Repair, recycle confirmed junk, move rations and critical materials into predictable storage, and track the next building or recipe. This turns the travel phase into preparation rather than dead time.',
          'Record what the location taught you without assuming the next procedural world will repeat it. Facility objectives, enemy behavior and resource categories transfer; exact room order may not. A useful guide explains how to make the choice again, not where one chest happened to appear.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long should an EverRail expedition last?',
        answer:
          'There is no universal duration. Use the live train timer and turn back early enough to cover travel, combat and navigation mistakes.',
      },
      {
        question: 'Does EverRail have a fixed map?',
        answer:
          'No. The official description says Inara is procedurally generated, so fixed-location maps should not be treated as universal.',
      },
      {
        question: 'Should I clear every dungeon room?',
        answer:
          'Only when the train reserve, supplies and route knowledge still protect a safe return.',
      },
    ],
  }),
  makeGuide({
    slug: 'glider-scouting-iso-guide',
    path: '/guides/glider-scouting-iso-guide',
    title: 'EverRail Glider, Scouting and Iso Guide',
    seoTitle: 'EverRail Glider Guide: Scout, Collect Iso & Land Safely',
    seoDescription:
      'Use the EverRail glider to scout locations, deploy scan drones, collect Iso, choose expeditions and land with enough health to bring information home.',
    summary:
      'The glider is an information tool first. Use altitude to select profitable stops, collect Iso intentionally and land before damage turns scouting into a loss.',
    category: 'Exploration',
    difficulty: 'System guide',
    coverImageUrl: videos.thingsToKnow.thumbnailUrl,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Official Steam and Aesir pages establish glider scouting, drones and Iso. A pre-launch explainer supports the broad system overview; current UI overrides it.',
    videoSearchQueries: [
      'EverRail glider guide',
      'EverRail Iso guide',
      'EverRail drone scanning',
    ],
    video: videos.thingsToKnow,
    tags: ['Glider', 'Iso', 'Scouting'],
    relatedRoutes: [
      '/guides/expeditions-return-plan',
      '/guides/crafting-building-recycler',
      '/guides/train-battery-energy-guide',
      '/guides/achievements-guide',
    ],
    body: [
      {
        heading: 'Scout for decisions, not scenery',
        paragraphs: [
          'Launch the glider with a question: where is the next useful facility, resource cloud, threat or passenger opportunity? Altitude is valuable because it reduces blind stops. Scan the area, compare the result with the train’s current need, and mark a location only when it is worth spending stopped battery time.',
          'The glider can identify threats and points of interest before the on-foot team commits. Use that advantage to separate a quick resource stop from a combat-heavy facility. In co-op, report the chosen landmark and return route before another player launches or leaves the train; the July update prevents two players from grabbing the launch station at the same time.',
        ],
        bullets: [
          'Choose one scouting question before launch.',
          'Mark the train and a safe approach before chasing a distant signal.',
          'Report threats and route length, not just that a location exists.',
          'Let the train keep moving when the scan reveals no urgent target.',
        ],
      },
      {
        heading: 'Collect Iso without losing the scouting mission',
        paragraphs: [
          'Iso is visible in the top resource interface and has dedicated collection achievements at 1,000 and 10,000. Treat collection as a route through known safe opportunities rather than a reason to abandon navigation. The useful flight returns with both resource and information.',
          'Watch glider health and current loadout. The July update exposes health alongside other flight stats and improved recipe tooltips found during scouting. If damage, distance or visibility makes a safe landing uncertain, end the collection path. A smaller Iso haul delivered to the train is more valuable than a large total lost with the pilot.',
        ],
      },
      {
        heading: 'Land with a repeatable approach',
        paragraphs: [
          'Plan the landing before altitude disappears. Approach an open area near the train, avoid a last-second turn around obstacles and keep enough speed for a controlled descent. The Catch of the Day achievement confirms that a successful landing is part of the intended skill set, but the larger goal is preserving the glider and the information gathered.',
          'If a landing fails, change the approach rather than immediately relaunching. Check whether the problem was angle, speed, visibility, damage or an overcrowded landing area. In co-op, keep other players and construction clear of the expected path while the glider returns.',
        ],
        bullets: [
          'Select the landing zone while you still have altitude.',
          'Favor a simple straight approach over a precise landing beside a door.',
          'Abort extra collection when glider health becomes the limiting resource.',
          'Clear the launch and landing area in co-op.',
        ],
      },
      {
        heading: 'Turn the scan into an expedition plan',
        paragraphs: [
          'After landing, translate observations into one stop objective: the nearest passenger, the safest material run, a specific facility or no stop at all. Share the threat level, likely path and return landmark with the expedition team. Scouting only saves battery when it changes where and how long the train stops.',
          'Because Inara is procedural, do not memorize one flight path as a universal route. Reuse the sequence—question, scan, compare, mark, land, decide—every time the world changes.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the glider for in EverRail?',
        answer:
          'It scouts locations and threats, supports drone scanning, collects rare Iso and helps the team choose efficient stops.',
      },
      {
        question: 'Are there glider achievements?',
        answer:
          'Yes. Steam lists achievements for landing successfully and collecting 1,000 and 10,000 Iso with the glider.',
      },
      {
        question: 'Can two co-op players launch at once?',
        answer:
          'The July update specifically prevents two players from grabbing the glider launch station simultaneously.',
      },
    ],
  }),
  makeGuide({
    slug: 'crafting-building-recycler',
    path: '/guides/crafting-building-recycler',
    title: 'EverRail Crafting, Building and Recycler Guide',
    seoTitle: 'EverRail Crafting Guide: Build, Track & Recycle Wisely',
    seoDescription:
      'Use EverRail crafting stations, building tracking, full-cost dismantling and the Salvager recycler without wasting survival supplies or blocking the train.',
    summary:
      'Craft to remove the current bottleneck, track the needed station and recycle only confirmed surplus after the train is moving again.',
    category: 'Crafting',
    difficulty: 'System guide',
    coverImageUrl: '/everrail/screenshots/8.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Building tracking, recycler previews, full dismantle refunds and inventory behavior come from the July developer update and current achievements.',
    videoSearchQueries: [
      'EverRail crafting guide',
      'EverRail recycler salvager',
      'EverRail building guide',
    ],
    tags: ['Crafting', 'Building', 'Salvager'],
    relatedRoutes: [
      '/guides/wagons-storage-train-upgrades',
      '/guides/glider-scouting-iso-guide',
      '/guides/combat-robots-emp-guide',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Craft for the next constraint',
        paragraphs: [
          'The useful first craft is not the most advanced recipe you can afford. It is the item or station that removes the current constraint: no safe repair, no way to process a required material, no storage space, no weapon production or no glider capability. Follow the active objective and the current recipe tooltip so the build advances the loop you are actually playing.',
          'Recipes and balance can change during Early Access, so avoid hoarding around a copied cost from an old video. Track the building or craft in the interface, confirm the correct station, then gather the missing categories. The July update improved objective guidance and allows buildings to be tracked, making the live UI more reliable than a static shopping list.',
        ],
        bullets: [
          'Name the bottleneck before spending materials.',
          'Track one important building at a time.',
          'Keep repair, food and healing reserves separate from construction stock.',
          'Craft while the train is moving whenever the system allows it.',
        ],
      },
      {
        heading: 'Build a workflow, not a maze',
        paragraphs: [
          'Place related stations and storage together so material flow is obvious under time pressure. Keep the expedition door, critical supplies and train controls unobstructed. A wagon that looks efficient in a screenshot can still be frustrating if every return requires walking around machinery to reach food or repairs.',
          'Dismantling currently refunds the full building cost, and the update prevents material loss when dismantling with a full backpack. Use that flexibility to correct the layout as the train grows. Temporary placement is acceptable; blocked movement and inaccessible storage are not.',
        ],
      },
      {
        heading: 'Recycle only with a reason',
        paragraphs: [
          'The Salvager now previews recycling results and returns them immediately. Use the preview to confirm that an item is truly surplus before committing. Unknown equipment, rare components, rations and repair supplies deserve a separate holding area until their use is understood. Recycling everything that looks grey or old can convert a storage problem into a progression problem.',
          'Create a simple rule: keep one working set, keep the reserves tied to tracked crafts, then recycle duplicates and confirmed junk. If the inventory is full, sort on the moving train before opening the recycler. The current update warns when a completed craft has nowhere to go, but good workflow should prevent the warning from becoming normal.',
        ],
        bullets: [
          'Preview the recycler result every time an item is unfamiliar.',
          'Protect the next tracked recipe before recycling duplicates.',
          'Do not use the recycler as emergency storage.',
          'Check the output space before starting a large craft batch.',
        ],
      },
      {
        heading: 'Use achievements as progression markers',
        paragraphs: [
          'Steam achievements identify several intended milestones: Weapon Fabricator, Glider Fabricator, Refiner, Exosuit Forge, Salvager use and a Crafting Module connected to a Crafting Station. Treat those names as a map of systems you will eventually meet, not an instruction to rush every station immediately.',
          'A stable train develops in layers. First solve survival and repair, then processing and storage, then specialized production. When a new station appears, place it where its input and output can be understood at a glance, and revise the wagon layout before adding the next layer.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does dismantling refund materials in EverRail?',
        answer:
          'The July 2026 update says dismantling refunds the full build cost and avoids material loss when the backpack is full.',
      },
      {
        question: 'What should I recycle first?',
        answer:
          'Recycle confirmed junk and duplicates only after protecting survival supplies, a working loadout and materials reserved for the next tracked craft.',
      },
      {
        question: 'How do I know which crafting station I need?',
        answer:
          'Use the active objective, tracking feature and current recipe tooltip; the game highlights the required station and ingredients.',
      },
    ],
  }),
  makeGuide({
    slug: 'wagons-storage-train-upgrades',
    path: '/guides/wagons-storage-train-upgrades',
    title: 'EverRail Wagons, Storage and Train Upgrade Guide',
    seoTitle: 'EverRail Wagon Guide: Storage, Layout & Train Upgrades',
    seoDescription:
      'Expand the EverRail train with useful wagons, readable storage zones and connected crafting modules without blocking movement or overbuilding too early.',
    summary:
      'Add a wagon when it solves a measured space or production problem, then keep survival, expedition and crafting zones easy to audit.',
    category: 'Train',
    difficulty: 'System guide',
    coverImageUrl: '/everrail/screenshots/1.jpg',
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Wagon expansion and current storage tiers are official. Launch-day gameplay supports the layout discussion without supplying fixed upgrade costs.',
    videoSearchQueries: [
      'EverRail wagon guide',
      'EverRail train building',
      'EverRail storage guide',
    ],
    video: videos.trainDayOne,
    tags: ['Wagons', 'Storage', 'Layout'],
    relatedRoutes: [
      '/guides/crafting-building-recycler',
      '/guides/train-battery-energy-guide',
      '/guides/passengers-rations-respawn',
      '/guides/achievements-guide',
    ],
    body: [
      {
        heading: 'Expand only when the train proves it needs space',
        paragraphs: [
          'EverRail allows the moving base to grow across many wagons, but early expansion should answer a real problem. Add space when critical storage is mixed together, a production station blocks movement, or a new module needs a dedicated location. If the current wagon still has clear paths and unused capacity, another car adds distance before it adds value.',
          'The Steam achievements for one wagon and ten wagons confirm that expansion is long-term progression. Treat the first new car as a layout test. Decide what it owns, connect it, verify the route from cockpit to expedition door, and live with the arrangement for a few stops before repeating the pattern.',
        ],
        bullets: [
          'Give each wagon one primary role.',
          'Keep a clear path through every connector.',
          'Do not move emergency supplies far from the expedition return point.',
          'Test the layout during a real stop before expanding again.',
        ],
      },
      {
        heading: 'Use storage tiers by material weight and urgency',
        paragraphs: [
          'The July update lists Small, Medium, Large and Huge storage. Small storage holds eight slots in that update, while the larger heavy-storage and Iso-tank versions require more advanced refined or composite metals. Food depots and battery racks remain on the lighter side of that material curve. Check the current tooltip because these values may move during Early Access.',
          'Bigger is not always better. Use small, visible storage for rations, repairs and the next tracked craft; use larger containers for high-volume materials that do not need constant attention. The goal is a train that communicates its state quickly. If checking rations requires opening six containers, the layout is already too ambiguous.',
        ],
      },
      {
        heading: 'Create three train zones',
        paragraphs: [
          'A reliable layout separates survival, expedition and production. Survival contains rations, healing and repairs. Expedition contains loadouts, ammunition and empty drop-off space near the door. Production contains bulk materials, stations, recycler output and long-term projects. The zones can share a wagon early, but they should still have obvious sides or containers.',
          'In co-op, label the rule verbally before a run: where returned loot goes, which container is protected, and who may recycle. Shared storage becomes a coordination system. A few seconds of placement discipline prevents four players from hiding the one material needed to restart production.',
        ],
        bullets: [
          'Survival zone: fast audit, protected stock.',
          'Expedition zone: quick loadout and quick unloading.',
          'Production zone: bulk materials and processing.',
          'Connector path: never a storage zone.',
        ],
      },
      {
        heading: 'Connect modules deliberately',
        paragraphs: [
          'Expansion Pack requires connecting a Crafting Module with a Crafting Station, showing that adjacency and module relationships matter. Before placing a specialized module, confirm what it connects to and where its inputs will live. Do not force the connection into the only safe walkway just to complete the achievement.',
          'Because dismantling refunds the full cost in the current build, revise the production wagon when a better connection pattern becomes available. The strongest upgrade is the one that improves output without making battery checks, passenger care or expedition returns harder.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many wagons can the EverRail train have?',
        answer:
          'The Steam description says players can attach hundreds of wagons, but practical Early Access layouts should grow only when storage and production justify it.',
      },
      {
        question: 'What storage sizes exist?',
        answer:
          'The July update lists Small, Medium, Large and Huge storage, with Small holding eight slots at that check.',
      },
      {
        question: 'Where should rations be stored?',
        answer:
          'Use a clearly protected survival container that is quick to audit and separate from recycler input or bulk crafting material.',
      },
    ],
  }),
  makeGuide({
    slug: 'cold-hunger-survival',
    path: '/guides/cold-hunger-survival',
    title: 'EverRail Cold, Hunger and Stamina Survival Guide',
    seoTitle: 'EverRail Cold & Hunger Guide: Heat, Food and Stamina',
    seoDescription:
      'Survive EverRail cold and hunger with shorter exposure, Heatpacks, Hot Soup, ration planning, stamina discipline and a return route to the warm train.',
    summary:
      'Exposure and hunger turn time into damage. Carry a warming option, keep the return route short and never let a loot decision consume the survival margin.',
    category: 'Survival',
    difficulty: 'System guide',
    coverImageUrl: '/everrail/screenshots/5.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Cold, hunger, Heatpacks, Hot Soup, stamina and warning behavior are documented in the developer’s July update. Live UI overrides old rates.',
    videoSearchQueries: [
      'EverRail cold guide',
      'EverRail hunger rations',
      'EverRail Heatpack Hot Soup',
    ],
    tags: ['Cold', 'Hunger', 'Stamina'],
    relatedRoutes: [
      '/guides/passengers-rations-respawn',
      '/guides/expeditions-return-plan',
      '/guides/beginner-guide',
      '/guides/combat-robots-emp-guide',
    ],
    body: [
      {
        heading: 'Treat exposure as part of the expedition timer',
        paragraphs: [
          'Cold is not a separate inconvenience; it shortens the useful part of every stop. The July update describes one readable meter that rises while exposed and begins dealing repeated damage when full. Returning to the train removes cold, so the warm train is both the destination and the recovery tool.',
          'Plan distance with exposure in mind. A route that fits the battery timer may still be unsafe when combat, hunger or a damaged suit slows the return. Carry a warming option before a deep facility, keep the train route visible and turn back before the cold meter becomes a health problem. Do not spend healing to continue a stop that is already failing on time.',
        ],
        bullets: [
          'Check cold at the same moments you check the train timer.',
          'Keep Heatpacks or another verified warming option accessible.',
          'Return to the train early enough to recover before the next task.',
          'Use the current meter rather than relying on an old seconds-per-point rate.',
        ],
      },
      {
        heading: 'Keep personal hunger separate from passenger rations',
        paragraphs: [
          'Passengers consume the train’s ration reserve on their distribution cycle, while the active survivor also has hunger pressure. Personal consumption and population supply compete for the same planning attention. Do not eat the last protected passenger reserve during an expedition without understanding what happens at the next distribution.',
          'Hunger first limits stamina and can later drain health when it becomes severe. Eat before the situation damages movement, because a slow return makes the battery and cold problems worse at the same time. Hot Soup is especially useful when the current build recognizes its warming effect, but confirm the live item tooltip after patches.',
        ],
      },
      {
        heading: 'Spend stamina on the return, not the outbound sprint',
        paragraphs: [
          'Sprint only when it changes the result: crossing danger, reaching cover, escaping an enemy or protecting the return threshold. Arriving at a facility with no stamina makes the first fight more expensive and leaves fewer options if the route changes. Walk the safe outbound section and preserve acceleration for the part you cannot predict.',
          'The survival meters interact. Hunger reduces stamina, cold can force healing, and both make the battery clock harder to meet. When two meters are already in warning state, the correct response is usually return, not consume supplies to open one more room.',
        ],
        bullets: [
          'Eat before stamina becomes the bottleneck.',
          'Save sprint for danger and the return leg.',
          'Do not stack cold, low hunger and combat unless the objective is essential.',
          'Recover on the moving train before the next stop.',
        ],
      },
      {
        heading: 'Prepare a repeatable survival loadout',
        paragraphs: [
          'Keep food, warming, healing and repair items in predictable slots or storage. The point is not to carry the maximum amount; it is to know what remains without searching every container. Refill after each expedition while the train moves, then leave empty room for the objective.',
          'Difficulty settings can change the pressure and the Early Access team expects balance iteration. Build the habit around warning states and safe margins rather than a single universal quantity. If the current run regularly reaches the train with multiple red meters, shorten the next stop before crafting more supplies.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do you warm up in EverRail?',
        answer:
          'Return to the train and use current warming options such as craftable Heatpacks or Hot Soup when their live tooltips confirm the effect.',
      },
      {
        question: 'What happens when hunger gets low?',
        answer:
          'The July update says hunger first limits available stamina and later begins draining health at a critical level.',
      },
      {
        question: 'Should I sprint everywhere?',
        answer:
          'No. Preserve stamina for danger, combat and the return leg instead of spending it on a safe outbound route.',
      },
    ],
  }),
  makeGuide({
    slug: 'combat-robots-emp-guide',
    path: '/guides/combat-robots-emp-guide',
    title: 'EverRail Combat Guide: Robots, EMP and Scrapping',
    seoTitle: 'EverRail Combat Guide: Robots, EMP Enemies & Scrapper',
    seoDescription:
      'Fight EverRail robots with cover, range awareness and retreat rules; handle self-destruct, shielded and EMP threats, then scrap remains safely.',
    summary:
      'Win the useful fight, not every fight. Read the robot type, protect the return route and collect remains only after the area is safe.',
    category: 'Combat',
    difficulty: 'System guide',
    coverImageUrl: '/everrail/screenshots/10.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Enemy types, cover controls, optimal-range tooltips, Scrapper tutorials and combat achievements are documented by official current sources.',
    videoSearchQueries: [
      'EverRail combat guide',
      'EverRail EMP robots',
      'EverRail Scrapper',
    ],
    tags: ['Robots', 'EMP', 'Scrapper'],
    relatedRoutes: [
      '/guides/expeditions-return-plan',
      '/guides/crafting-building-recycler',
      '/guides/cold-hunger-survival',
      '/guides/achievements-guide',
    ],
    body: [
      {
        heading: 'Decide whether the fight pays for its time',
        paragraphs: [
          'Combat spends ammunition, healing, equipment condition and the train’s stopped battery. Before engaging, identify what the fight protects: a passenger, facility objective, recipe, resource or safe return path. If the enemy is outside the objective and can be bypassed without creating a threat behind you, preserving time may be the stronger result.',
          'Read the weapon tooltip for optimal range and ammunition type. The July update made that information clearer and improved aiming, leaning and peeking. Fight from a distance that matches the weapon, use cover to limit incoming fire, and avoid advancing so far that the train route disappears behind the battle.',
        ],
        bullets: [
          'Name the reward before spending ammunition.',
          'Keep the retreat path behind you, not through the enemy group.',
          'Use optimal range instead of emptying magazines from panic distance.',
          'Check the train timer after every major encounter.',
        ],
      },
      {
        heading: 'Recognize the current robot threats',
        paragraphs: [
          'Self-destructing robots charge and blink before exploding. Create distance when the warning starts instead of trying to finish a loot interaction beside them. Shielded enemies require patience and a better angle; do not let the shield pull you away from cover. EMP enemies and turrets have tutorial prompts in the current build, so read the prompt when first encountered and protect electronic advantages until the effect is understood.',
          'Station patrol robots are meant to remain near their assigned areas. Use that behavior to plan the edge of an engagement, but never assume every procedural location will produce the same safe boundary. A new patch can change reactions, so prioritize visible tells over memorized timing.',
        ],
      },
      {
        heading: 'Scrap after the area is controlled',
        paragraphs: [
          'The Scrapper converts robot remains into progression and has achievements at 1, 50 and 100 remains. Those milestones reward consistent cleanup, not unsafe cleanup. Confirm that nearby enemies are inactive, reload, check the timer and then scrap. A remains pile is not worth taking explosion damage or missing the return threshold.',
          'Keep Scrapper output separate from unknown equipment until the crafting use is clear. If inventory is nearly full, prioritize the material tied to the tracked craft and leave ordinary loot. Returning with the exact missing component beats returning late with a mixed backpack.',
        ],
        bullets: [
          'Reload and scan the room before using the Scrapper.',
          'Do not scrap in the blast path of a self-destruct enemy.',
          'Preserve inventory room for the objective material.',
          'Leave when combat consumes the contingency reserve.',
        ],
      },
      {
        heading: 'Protect the train during and after combat',
        paragraphs: [
          'The train health bar now previews incoming damage and flashes when damaged. If an attack reaches the train, the expedition objective becomes secondary. Regroup, remove the immediate threat and repair before another stop. A damaged mobile base reduces every later margin.',
          'In co-op, call target type and retreat status instead of scattering fire across multiple enemies. One player watches time and the train while the others clear the path. The team should leave together; a late player can consume the same shared battery that everyone else tried to protect.',
        ],
      },
    ],
    faq: [
      {
        question: 'What robot types are in EverRail?',
        answer:
          'The July update documents self-destructing robots, shielded enemies, EMP enemies, turrets and station patrol robots.',
      },
      {
        question: 'What does the Scrapper do?',
        answer:
          'It is used on robot remains. Steam has achievements for scrapping 1, 50 and 100 remains.',
      },
      {
        question: 'Should I fight every robot?',
        answer:
          'No. Fight when the enemy blocks the objective or safe return and when the battery and supplies can cover the encounter.',
      },
    ],
  }),
  makeGuide({
    slug: 'co-op-roles-multiplayer-fixes',
    path: '/guides/co-op-roles-multiplayer-fixes',
    title: 'EverRail Co-op Guide: Roles and Multiplayer Fixes',
    seoTitle: 'EverRail Co-op Guide: 4-Player Roles & Join Fixes',
    seoDescription:
      'Coordinate EverRail co-op roles for driving, scouting, crafting and expeditions, manage shared power and resources, and recover from current join errors.',
    summary:
      'Four players still share one train, one battery and one failure state. Assign ownership of time, scouting, supplies and the return call before the first stop.',
    category: 'Co-op',
    difficulty: 'Checklist',
    coverImageUrl: videos.coopLaunch.thumbnailUrl,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Four-player support comes from the released Steam listing. Role coordination was checked against launch-day co-op footage; the restart fix comes from the developer update.',
    videoSearchQueries: [
      'EverRail co op gameplay',
      'EverRail multiplayer guide',
      'EverRail join error',
    ],
    video: videos.coopLaunch,
    tags: ['4 players', 'Roles', 'Join error'],
    relatedRoutes: [
      '/guides/train-battery-energy-guide',
      '/guides/expeditions-return-plan',
      '/guides/passengers-rations-respawn',
      '/system-requirements',
    ],
    body: [
      {
        heading: 'Agree on ownership before the train stops',
        paragraphs: [
          'EverRail supports online co-op for up to four players in the released Early Access build. Everyone shares the moving base, power system and resources, so adding players increases attention only when responsibilities are clear. Before the first stop, choose a driver/timekeeper, a glider scout, an expedition lead and a train/logistics owner. Two-player groups can combine adjacent jobs.',
          'Roles are not permanent classes. They are a communication shortcut for the current stop. The timekeeper controls the stop budget and restart call. The scout selects a profitable location. The expedition lead keeps the ground team together. Logistics protects rations, repairs and tracked crafting stock. Change assignments after the train moves, not during an emergency.',
        ],
        bullets: [
          'Timekeeper: battery reserve, turn-back call, restart.',
          'Scout: location, threat and return-route report.',
          'Expedition lead: objective, group movement and extraction.',
          'Logistics: rations, repairs, storage and crafting priority.',
        ],
      },
      {
        heading: 'One train means one resource plan',
        paragraphs: [
          'Do not let four players independently spend the same margin. Announce large crafts, passenger rescues, ration use and deep dungeon entries. Place returned loot in a shared drop-off container, then let the logistics owner sort it while the train moves. This keeps the expedition door clear and prevents valuable materials from disappearing into personal inventories.',
          'Use short calls that change behavior: “turn back,” “train damaged,” “one minute to restart,” or “rations critical.” Avoid long explanations while the battery drains. The detailed discussion belongs on the moving train after everyone is aboard.',
        ],
      },
      {
        heading: 'Extract together',
        paragraphs: [
          'Set a regroup time earlier than the actual restart. The farthest player reports distance and obstacles, while nearby players stop opening rooms and prepare the route. If someone is down or separated, decide quickly whether the rescue fits the reserve. The whole train should not die because the decision remained implicit.',
          'The glider station currently prevents two players from grabbing it simultaneously. Treat launch and landing as controlled shared-space events. Clear the platform, call the flight, and make sure the expedition team understands whether the train will stop after the scout returns.',
        ],
        bullets: [
          'Use one voice for the final turn-back call.',
          'Stop looting when regroup is called.',
          'Report a blocked route immediately.',
          'Begin moving before the post-run inventory meeting.',
        ],
      },
      {
        heading: 'Fix the current multiplayer join error',
        paragraphs: [
          'The developer’s July update identifies a known case where joining multiplayer can fail. The documented recovery is to restart the game before trying to join again. Have both the host and affected player return to a clean state, confirm the game is updated, and retry without changing several network settings at once.',
          'Do not use old eight-player playtest messaging as the released limit. Pre-release tests temporarily invited larger groups, but the current English Steam store lists co-op for up to four players. Also note that Steam lists online co-op, not local split-screen or LAN support.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many players can play EverRail co-op?',
        answer:
          'The released Steam listing says online co-op supports up to four players.',
      },
      {
        question: 'Does EverRail have local co-op?',
        answer:
          'Steam lists online co-op and does not list local or split-screen co-op.',
      },
      {
        question: 'What should I do if joining multiplayer fails?',
        answer:
          'The current developer guidance is to restart the game after a join error, confirm both copies are updated and then retry.',
      },
    ],
  }),
  makeGuide({
    slug: 'achievements-guide',
    path: '/guides/achievements-guide',
    title: 'EverRail Achievements Guide: All 33 Steam Goals',
    seoTitle: 'EverRail Achievements Guide: All 33 Steam Unlocks',
    seoDescription:
      'Track all 33 EverRail Steam achievements across tutorial, loot, crafting, buildings, robots, Scrapper, Salvager, glider Iso, wagons and passengers.',
    summary:
      'Use the official 33-achievement list as a progression checklist, group cumulative goals together and keep the two hidden Long Thaw unlocks unspoiled.',
    category: 'Achievements',
    difficulty: 'Checklist',
    coverImageUrl: '/everrail/screenshots/11.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Names and descriptions are transcribed from the public Steam global-achievement page checked July 21, 2026. Hidden descriptions remain hidden.',
    videoSearchQueries: [
      'EverRail achievements guide',
      'EverRail all achievements',
    ],
    tags: ['33 goals', 'Steam', 'Checklist'],
    relatedRoutes: [
      '/guides/crafting-building-recycler',
      '/guides/glider-scouting-iso-guide',
      '/guides/combat-robots-emp-guide',
      '/guides/wagons-storage-train-upgrades',
    ],
    body: [
      {
        heading: 'Complete the tutorial and small milestones first',
        paragraphs: [
          'Cold Start is the natural first unlock because it asks for tutorial completion. The first tiers of looting, crafting, building, robot defeat, Scrapper and Salvager use teach the actions that later cumulative achievements repeat. Trigger each system once, confirm Steam records it, then continue normal progression instead of grinding the largest target immediately.',
          'Cumulative goals are easiest when the action belongs in the train routine. Scrap remains after safe fights, recycle confirmed junk, collect Iso on useful scout routes and add wagons only when the layout needs them. Progress earned through stable play is less likely to leave the run starved of resources.',
        ],
        bullets: achievements.map(
          (achievement) =>
            `${achievement.name} — ${achievement.officialDescription}`
        ),
      },
      {
        heading: 'Group the crafting and building chains',
        paragraphs: [
          'Mein-Craft progresses from 1 to 20 to 100 crafted items. This Used To Be A Hallway progresses from 1 to 10 to 100 placed buildings. Garbage Day tracks 1, 25 and 100 Salvager uses. Work on these together by crafting needed train improvements, placing a functional layout and recycling only the surplus created by that progression.',
          'The station achievements—Weapon Fabricator, Glider Fabricator, Refiner and Exosuit Forge—are milestones rather than a speedrun order. Expansion Pack specifically requires a Crafting Module connected to a Crafting Station. Build these systems when their inputs and outputs fit the train, then verify the unlock before dismantling or relocating anything.',
        ],
      },
      {
        heading: 'Let exploration and combat totals accumulate',
        paragraphs: [
          'Loot Goblin ends at 1,000 items, Terminate This ends at 1,000 defeated robots and Detroit: Become Scrap ends at 100 scrapped remains. The high tiers are long-horizon goals. Combine them by clearing only useful facility fights, looting the objective and scrapping remains after the room is controlled.',
          'Cloud Juice asks for 1,000 and then 10,000 Iso collected with the glider. Catch of the Day rewards a successful landing. Use normal scouting routes to advance all three. If an Iso path risks the glider or the train timer, protect the run and return later.',
        ],
      },
      {
        heading: 'Finish train, passenger and hidden goals deliberately',
        paragraphs: [
          'Its free Rail Estate asks for 1 and 10 connected wagons, while Wake-Up Call asks for 10 and 50 passengers. Those totals increase both train complexity and ration demand, so do not chase them ahead of storage, food and route stability. Every expansion should remain usable after the achievement appears.',
          'The Long Thaw I and II are hidden on Steam at this check. This page preserves that status instead of publishing an unverified spoiler. If a later patch exposes descriptions or the developer documents the conditions, the checklist can be updated without pretending a current guess is fact.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many achievements does EverRail have?',
        answer: 'Steam currently lists 33 achievements for App 4134600.',
      },
      {
        question: 'Are any EverRail achievements hidden?',
        answer:
          'Yes. The Long Thaw I and The Long Thaw II have hidden descriptions on the public Steam achievement page.',
      },
      {
        question: 'What are the longest achievement grinds?',
        answer:
          'The visible high totals include 1,000 looted items, 1,000 defeated robots, 10,000 glider Iso, 100 buildings, 100 crafts, 100 Salvager uses and 50 passengers.',
      },
    ],
  }),
  makeGuide({
    slug: 'demo-vs-early-access',
    path: '/guides/demo-vs-early-access',
    title: 'EverRail Demo vs Early Access: What Changed?',
    seoTitle: 'EverRail Demo vs Early Access: Current Version Guide',
    seoDescription:
      'Separate EverRail demo footage from the July 20 Early Access release, including the current four-player limit, updated tutorial, UI, rations and systems.',
    summary:
      'Use Early Access as the authority. Demo footage remains useful for broad mechanics but can carry old balance, interface and multiplayer information.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: videos.developerLaunch.thumbnailUrl,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'The released Steam page and official developer launch stream outrank pre-release demos and multiplayer tests.',
    videoSearchQueries: [
      'EverRail Early Access launch',
      'EverRail demo comparison',
      'EverRail developer gameplay',
    ],
    video: videos.developerLaunch,
    tags: ['Demo', 'Early Access', 'Current build'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/review',
      '/system-requirements',
      '/download',
    ],
    body: [
      {
        heading: 'The July 20 release is the primary version',
        paragraphs: [
          'EverRail entered Early Access on July 20, 2026 as Steam App 4134600. The same store page can still offer a demo, so the safest way to identify footage is the recording date and the interface shown rather than a different App ID. Any guide written for the live game should use the released store listing and current patch notes first.',
          'The developer describes this as a deliberately early release with rough edges, limited content and ongoing iteration. The current foundation includes train driving, on-foot exploration, glider flight, survival, combat, crafting and online multiplayer. A demo can illustrate those pillars while still being wrong about balance, available content or UI.',
        ],
        bullets: [
          'Current authority: released Steam page, live UI and post-launch developer updates.',
          'Useful clue: video upload date and whether it says demo, playtest or launch.',
          'Do not copy old timers, costs or player limits without checking.',
          'Keep demo troubleshooting separate from paid-build troubleshooting.',
        ],
      },
      {
        heading: 'Watch for the multiplayer limit mismatch',
        paragraphs: [
          'Pre-release community posts invited up to eight players for a multiplayer playtest. That test number still appears in some cached pages and videos. The released English Steam store now says solo or online co-op for up to four players. Use four as the current public limit unless Aesir changes the store record.',
          'The July demo update also noted a join error that required restarting the game. The workaround may remain useful when the same symptom appears, but confirm the current patch before assuming every multiplayer failure has the demo cause.',
        ],
      },
      {
        heading: 'Expect tutorial, UI and balance differences',
        paragraphs: [
          'The final pre-launch update overhauled the tutorial, changed ration distribution, simplified cold into one meter, improved the glider, added enemy types, clarified item colors and tooltips, improved map pins and revised building and recycling behavior. Earlier footage can therefore show a less readable interface or a different stop rhythm.',
          'When an old video and the current game disagree, follow the live objective and tooltip. Keep the video for route shape or system context only. Exact numbers and recipe costs are the first details to expire in Early Access.',
        ],
      },
      {
        heading: 'Choose demo or Early Access by tolerance',
        paragraphs: [
          'Use the demo to test performance, movement, interface and the basic train-survival idea before buying. Choose Early Access if you want the current build, accept unfinished systems and want to participate in feedback. Wait if rough onboarding, balance changes or incomplete content would outweigh the appeal of shaping development.',
          'Install either version through the verified Steam page. Avoid unofficial mirrors, repacks and files described as an APK or cracked client; EverRail is currently a Windows Steam game.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does EverRail have a separate demo App ID?',
        answer:
          'The current Steam page offers the demo under the same App 4134600 listing; no separate official demo App ID was verified.',
      },
      {
        question: 'Is EverRail four-player or eight-player?',
        answer:
          'The released Steam listing says up to four players. Eight-player references come from a pre-release multiplayer playtest.',
      },
      {
        question: 'Can demo guides still help?',
        answer:
          'Yes for broad concepts, but current UI, balance, timers, recipes and multiplayer details should be checked in Early Access.',
      },
    ],
  }),
  makeGuide({
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'EverRail System Requirements and PC Support',
    seoTitle: 'EverRail System Requirements, Controller & Steam Deck',
    seoDescription:
      'Check EverRail minimum and recommended PC specs, Windows and SSD requirements, 30 GB storage, partial controller support and current Steam Deck status.',
    summary:
      'EverRail currently requires Windows, 16 GB RAM at minimum, a 6 GB-class GPU, 30 GB on an SSD and Shader Model 6.6 with Atomics support.',
    category: 'Reference',
    difficulty: 'Checklist',
    coverImageUrl: '/everrail/screenshots/13.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'All specifications and feature labels come from the English Steam store checked July 21, 2026. No official Steam Deck compatibility badge was found.',
    videoSearchQueries: [
      'EverRail performance',
      'EverRail Steam Deck',
      'EverRail controller support',
    ],
    tags: ['PC specs', 'Controller', 'Steam Deck'],
    relatedRoutes: [
      '/download',
      '/review',
      '/guides/demo-vs-early-access',
      '/guides/co-op-roles-multiplayer-fixes',
    ],
    body: [
      {
        heading: 'Minimum PC requirements',
        paragraphs: [
          'Steam lists Windows 10 64-bit or later, with Windows 11 recommended for Intel 12th- and 13th-generation CPUs. The minimum processor is an Intel Core i7-8700K or AMD Ryzen 7 2700X, paired with 16 GB RAM. Minimum graphics are an NVIDIA GeForce GTX 1660 with 6 GB or AMD Radeon RX 5600 XT with 6 GB.',
          'The store requires 30 GB of available storage and explicitly requires an SSD. It also requires full Shader Model 6.6 support with Atomics. DirectX 11 appears on one live English rendering while current localized records and the recommended tier list DirectX 12; use the current Steam requirement shown for your region and update drivers before troubleshooting a launch failure.',
        ],
        bullets: [
          'OS: Windows 10 64-bit or later.',
          'CPU: Intel Core i7-8700K / AMD Ryzen 7 2700X.',
          'Memory: 16 GB RAM.',
          'GPU: GTX 1660 6 GB / RX 5600 XT 6 GB.',
          'Storage: 30 GB available on an SSD.',
          'Graphics feature: full Shader Model 6.6 with Atomics.',
        ],
      },
      {
        heading: 'Recommended PC requirements',
        paragraphs: [
          'The recommended tier is an Intel Core i7-10700K or AMD Ryzen 7 3800X with 32 GB RAM. Recommended graphics are an NVIDIA GeForce RTX 3060 Ti with 8 GB or AMD Radeon RX 6700 XT with 12 GB, using DirectX 12. Storage remains 30 GB on an SSD.',
          'Early Access performance can change independently of the published target. If the system meets the table but runs poorly, update the GPU driver, close overlays and background loads, test a lower preset, and compare the current patch notes before replacing hardware. Report reproducible problems through the official Steam discussion or Discord.',
        ],
        bullets: [
          'CPU: Intel Core i7-10700K / AMD Ryzen 7 3800X.',
          'Memory: 32 GB RAM.',
          'GPU: RTX 3060 Ti 8 GB / RX 6700 XT 12 GB.',
          'API: DirectX 12.',
          'Storage: 30 GB available on an SSD.',
        ],
      },
      {
        heading: 'Controller and input support',
        paragraphs: [
          'Steam currently labels EverRail as Partial Controller Support, not Full Controller Support. The July update improved controller, keyboard and mouse behavior and added clearer control overlays for on-foot movement, the train and the glider. Some launch or text-input steps may still require another input method.',
          'If a controller action appears missing, open the current help overlay, check Steam Input and compare the binding with keyboard controls. Avoid downloading third-party remapping executables from an unofficial guide. Steam Input is the first safe place to test a layout change.',
        ],
      },
      {
        heading: 'Steam Deck and platform status',
        paragraphs: [
          'Steam currently lists Windows only; macOS and Linux are not supported platforms on the store record. No official Steam Deck Verified, Playable or Unsupported badge was visible at this check. Steam Deck questions exist in the community, but that is interest rather than a compatibility guarantee.',
          'Because the minimum spec requires a modern six-gigabyte-class GPU and Shader Model 6.6 with Atomics, wait for an official Deck badge or current player testing before buying specifically for handheld use. The safest pre-purchase test is the official demo on the exact device, followed by Steam’s refund rules for the paid build.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much RAM does EverRail need?',
        answer: 'Steam lists 16 GB minimum and 32 GB recommended.',
      },
      {
        question: 'Does EverRail require an SSD?',
        answer:
          'Yes. The official requirements explicitly say SSD required and list 30 GB of available space.',
      },
      {
        question: 'Is EverRail Steam Deck verified?',
        answer:
          'No official compatibility badge was verified on the Steam listing as of July 21, 2026.',
      },
    ],
  }),
  makeGuide({
    slug: 'review',
    path: '/review',
    title: 'Is EverRail Worth It in Early Access?',
    seoTitle: 'EverRail Early Access Review: Should You Buy Now?',
    seoDescription:
      'Decide whether EverRail is worth buying now: what the train survival loop does well, how early the build is, current content expectations and who should wait.',
    summary:
      'Buy for the unusual moving-base loop and a chance to shape development; wait if you need polished onboarding, stable balance or a complete survival campaign.',
    category: 'Review',
    difficulty: 'Status',
    coverImageUrl: '/everrail/header.jpg',
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'The decision uses Steam’s explicit Early Access disclosure, current store features, launch-day developer gameplay and the July 21 review snapshot.',
    videoSearchQueries: [
      'EverRail review',
      'EverRail Early Access worth it',
      'EverRail launch gameplay',
    ],
    video: videos.developerLaunch,
    tags: ['Buying guide', 'Early Access', 'Status'],
    relatedRoutes: [
      '/guides/demo-vs-early-access',
      '/system-requirements',
      '/download',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'The reason to buy is the moving-base pressure',
        paragraphs: [
          'EverRail combines a survival-crafting loop with a base that must keep moving to create energy. Stops become deliberate risks: scout by glider, choose a facility, leave the train, collect what matters and return before power collapses. Passengers make death a population cost instead of a simple reload, while wagons turn progression into a visible moving settlement.',
          'That structure is already distinctive enough to evaluate. Solo play concentrates every role on one person; co-op lets up to four players split driving, scouting, expedition and logistics work while sharing the same power and supplies. If that coordination problem sounds exciting, the current foundation has a clear identity.',
        ],
        bullets: [
          'Buy now for train-based survival decisions and co-op role pressure.',
          'Try the demo first if performance or controls are the main concern.',
          'Wait if you need finished content, stable balance or polished onboarding.',
          'Expect patches to change advice, costs and system depth.',
        ],
      },
      {
        heading: 'Early Access really means early here',
        paragraphs: [
          'Aesir says the game launched early in development with rough edges, limited content and ongoing iteration. The present build focuses on driving, energy, scouting, expeditions, crafting, building, combat and passengers. The developer estimates twelve months or longer in Early Access and plans more areas, content, side quests, equipment, polish, localization and performance work.',
          'That disclosure should carry more weight than a launch-day score. The Steam page showed a Very Positive early snapshot on July 21, but the sample was still small and will change quickly. Buy the build that exists today, not only the roadmap you hope will arrive.',
        ],
      },
      {
        heading: 'Who should play now',
        paragraphs: [
          'Play now if you enjoy learning systems while they evolve, can tolerate occasional UI or performance roughness, and like providing feedback. The game is especially suited to groups that enjoy assigning roles and recovering from shared mistakes rather than four players running separate inventories.',
          'Solo players can still enjoy the loop, but the cognitive load is higher. You drive, watch the battery, scout, fight, build and protect supplies alone. Short sessions built around one stop objective are a better fit than trying to clear every location.',
        ],
      },
      {
        heading: 'Who should wait',
        paragraphs: [
          'Wait if incomplete balance, changing recipes, performance work or limited current content would feel like a broken promise. The developer explicitly recommends waiting when a player prefers a finished, polished game. Also wait for an official compatibility signal if Steam Deck or a non-Windows platform is essential.',
          'The low-risk decision is to install the official demo, test the core loop and hardware, then read the latest Steam update before purchasing. Avoid external key claims, unofficial downloads and comparisons that assume another train game has the same systems.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is EverRail finished?',
        answer:
          'No. It launched in Early Access on July 20, 2026, and the developer describes the build as an early foundation with ongoing iteration.',
      },
      {
        question: 'How long will EverRail stay in Early Access?',
        answer:
          'Aesir says twelve months or longer, with the timeline adjusted as development continues.',
      },
      {
        question: 'Should I try the demo first?',
        answer:
          'Yes if performance, controls or tolerance for the current amount of content will decide the purchase.',
      },
    ],
  }),
  makeGuide({
    slug: 'download',
    path: '/download',
    title: 'EverRail Download: Official Steam Install and Safety',
    seoTitle: 'EverRail Download: Official Steam Game & Demo',
    seoDescription:
      'Download EverRail safely from official Steam App 4134600, find the demo, confirm Windows support and avoid fake APK, crack, trainer and modified-client downloads.',
    summary:
      'Use Steam App 4134600 for both the verified Early Access purchase and the official demo. No other PC store or mobile build is verified here.',
    category: 'Safety',
    difficulty: 'Checklist',
    coverImageUrl: '/everrail/screenshots/2.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Steam is the verified download channel linked by the developer. The current platform record lists Windows only.',
    videoSearchQueries: ['EverRail download', 'EverRail demo Steam'],
    tags: ['Steam', 'Demo', 'Safe install'],
    relatedRoutes: [
      '/system-requirements',
      '/guides/demo-vs-early-access',
      '/review',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Use Steam App 4134600',
        paragraphs: [
          'The verified EverRail listing is Steam App 4134600, developed and published by Aesir Interactive. Open that listing in Steam, choose the Early Access purchase or the demo offered on the same page, and let the client install and update the files. The official Aesir game page links back to the same store identity.',
          'Check the title, developer and App ID before installing. Similar names such as EverRain, Underrail, Unrailed!, Frostrail or other train-survival games are different products. A search result that removes the Steam identity or asks for a separate installer is not the official path.',
        ],
        bullets: [
          'Game: EverRail.',
          'Steam App ID: 4134600.',
          'Developer and publisher: Aesir Interactive.',
          'Current platform: Windows.',
          'Required storage: 30 GB on an SSD.',
        ],
      },
      {
        heading: 'Install the demo from the same listing',
        paragraphs: [
          'Steam can display a Download EverRail Demo button on App 4134600. No separate official demo App ID was verified, so use the main listing instead of searching for a standalone executable. The demo is useful for checking performance, controls and the moving-train loop before purchasing.',
          'Demo footage and saves may not match the Early Access build. Read the current patch information before carrying over multiplayer limits, balance values or troubleshooting. If Steam does not show the demo in a region, do not replace it with an unofficial mirror.',
        ],
      },
      {
        heading: 'Avoid fake mobile and modified downloads',
        paragraphs: [
          'EverRail is currently listed for Windows on Steam. An APK, iOS package, crack, repack, trainer bundle or modified client is not an official build verified by this site. These downloads can include malware, steal Steam credentials or damage saves, and they cannot be trusted to match the live multiplayer version.',
          'Do not paste a Steam password into a download page, disable security tools for an unknown installer or run a file described as a patch outside Steam. Use Steam’s Verify integrity of game files feature when installation files appear damaged.',
        ],
        bullets: [
          'No official Android APK is listed.',
          'No official macOS or Linux build is listed.',
          'Do not provide credentials to third-party download mirrors.',
          'Use Steam for updates, repair and uninstallation.',
        ],
      },
      {
        heading: 'Check the PC before buying',
        paragraphs: [
          'The minimum requires Windows 10 64-bit, 16 GB RAM, a GTX 1660 6 GB or RX 5600 XT 6 GB-class GPU, 30 GB on an SSD and Shader Model 6.6 with Atomics. Partial Controller Support is listed. No official Steam Deck compatibility badge was verified at launch.',
          'Run the demo on the target machine when possible. If the paid build does not meet expectations, use Steam’s current support and refund process rather than downloading a different executable from an unofficial source.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download EverRail?',
        answer:
          'Use the official Steam App 4134600 listing linked by Aesir Interactive.',
      },
      {
        question: 'Is there an EverRail demo?',
        answer:
          'Yes. Steam offers a demo from the main EverRail App 4134600 listing when available in the user’s region.',
      },
      {
        question: 'Is EverRail available as an APK?',
        answer:
          'No official Android build is listed. APK and modified-client downloads should be treated as unsafe and unrelated to the verified Steam release.',
      },
    ],
  }),
  {
    slug: 'patch-0-2-2',
    path: '/guides/patch-0-2-2',
    title: 'EverRail 0.2.2 Patch Guide',
    seoTitle: 'EverRail 0.2.2 Patch: Multiplayer, Glider & Fixes',
    seoDescription:
      'See what EverRail 0.2.2 changes for multiplayer sync, gliders, crafting, building, repair tools, performance and current troubleshooting.',
    summary:
      'Patch 0.2.2 targets the launch-week pain points that affect real runs: co-op synchronization, missed building inputs, glider behavior, crafting queues, repair tools and several crashes.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/everrail/screenshots/3.jpg',
    publishedAt: '2026-07-24',
    updatedAt: '2026-07-24',
    sourceStrategy: 'official',
    sourceNotes:
      'Summarized from the official Engine Room Dev Update 0.2.2 published July 23. Current in-game tooltips and later Steam announcements override this snapshot.',
    videoSearchQueries: [
      'EverRail 0.2.2 patch',
      'EverRail multiplayer fix',
      'EverRail glider update',
    ],
    tags: ['0.2.2', 'Multiplayer', 'Glider'],
    relatedRoutes: [
      '/guides/co-op-roles-multiplayer-fixes',
      '/guides/glider-scouting-iso-guide',
      '/guides/crafting-building-recycler',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Update every co-op client before retrying a run',
        paragraphs: [
          'Version 0.2.2 improves item-container synchronization, aiming responsiveness, writable signs, crafting queues, repair effects and building placement for multiplayer clients. It also fixes invisible stairs, incorrect crafting-station displays and several cases where client inputs could be missed.',
          'Have the host and every joining player close the game, finish the Steam update and restart before loading the shared save. If an old session still shows duplicated containers or broken prompts, test a fresh reconnect before changing network settings or dismantling important train modules.',
        ],
      },
      {
        heading: 'Gliders have clearer rules and safer failure states',
        paragraphs: [
          'The patch fixes gliders continuing to respond after crashing, improves launch feedback, repairs Blackbox issues and prevents launches inside tunnels. It also corrects Glider Loadout Station placement and active-glider updates.',
          'Keep the platform clear, launch only in open track sections and verify the selected loadout before takeoff. A pre-patch video may still show tunnel launches or old feedback, so use the current client when its behavior differs from an older guide.',
        ],
      },
      {
        heading: 'Crafting and building should lose fewer inputs',
        paragraphs: [
          'Patch 0.2.2 fixes crafting queues appearing at the wrong station, improves queue synchronization and makes client building placement more reliable. Repair and dismantling visuals were also updated, and a completed craft now has clearer energy-cost warning support.',
          'If a queue still appears wrong, stop adding new jobs, reopen the intended station and compare the shared inventory before retrying. For placement problems, move away from walkways and verify the floor spawned correctly inside the train.',
        ],
      },
      {
        heading: 'Use the new stability options before deeper fixes',
        paragraphs: [
          'The update adds a configurable FPS limit with a 30 FPS minimum and reduces large stutters when leaving the train. It fixes crashes tied to firing before death, drone movement, reopening Settings and rapidly switching equipment.',
          'Set a stable frame limit, remove rapid equipment switching from the reproduction steps and verify files through Steam if crashes continue. Report the save state, player count, tool in hand and exact transition to the official discussion or Discord so the issue can be separated from a fixed 0.2.2 case.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the latest EverRail patch in this guide?',
        answer:
          'Version 0.2.2, published through the official Steam news surface on July 23, 2026.',
      },
      {
        question: 'Does 0.2.2 fix multiplayer?',
        answer:
          'It fixes many synchronization, placement, repair and crafting problems, but it does not guarantee every network or save-specific issue is resolved.',
      },
      {
        question: 'Can gliders launch inside tunnels after 0.2.2?',
        answer: 'No. The official notes say tunnel launching is now prevented.',
      },
    ],
  },
];

export const featuredGuides = [
  guides.find((guide) => guide.slug === 'beginner-guide'),
  guides.find((guide) => guide.slug === 'train-battery-energy-guide'),
  guides.find((guide) => guide.slug === 'passengers-rations-respawn'),
  guides.find((guide) => guide.slug === 'co-op-roles-multiplayer-fixes'),
  guides.find((guide) => guide.slug === 'patch-0-2-2'),
  guides.find((guide) => guide.slug === 'achievements-guide'),
  guides.find((guide) => guide.slug === 'demo-vs-early-access'),
].filter((guide): guide is Guide => Boolean(guide));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
