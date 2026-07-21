import type {
  Achievement,
  DataSource,
  GameFact,
  KeywordMatrixItem,
} from './types';

export const checkedAt = '2026-07-21';

export const siteFacts = {
  siteName: 'EverRail Wiki',
  domain: 'https://www.everrail.wiki',
  canonicalHost: 'www.everrail.wiki',
  gameName: 'EverRail',
  creator: 'Aesir Interactive',
  publishers: ['Aesir Interactive'],
  publisher: 'Aesir Interactive',
  officialSteamUrl: 'https://store.steampowered.com/app/4134600/EverRail/',
  officialDemoUrl: 'https://store.steampowered.com/app/4134600/EverRail/',
  officialCommunityUrl: 'https://steamcommunity.com/app/4134600/',
  officialGuidesUrl: 'https://steamcommunity.com/app/4134600/guides/',
  officialAchievementsUrl:
    'https://steamcommunity.com/stats/4134600/achievements/',
  officialWebsiteUrl: 'https://aesir-interactive.com/games/19/everrail',
  officialDiscordUrl: 'https://discord.gg/AesirInteractive',
  officialYouTubeUrl: 'https://www.youtube.com/@AesirInteractiv',
  officialXUrl: 'https://x.com/PlayEverRail',
  supportEmail: 'hello@everrail.wiki',
  releaseDate: 'July 20, 2026',
  steamAppId: '4134600',
  demoAppId: null,
  officialCoverImage: '/everrail/header.jpg',
  officialHeroImage: '/everrail/screenshots/0.jpg',
  officialScreenshot: '/everrail/screenshots/3.jpg',
  officialTrailerId: 'wbhRwLzRn6k',
} as const;

export const siteDescription =
  'EverRail Wiki with current Early Access guides for train power, passengers, expeditions, crafting, co-op, achievements and survival on Inara.';

export const gameFacts: GameFact[] = [
  {
    label: 'Core loop',
    value:
      'Keep the train moving, scout Inara, run expeditions and return with supplies.',
  },
  {
    label: 'Train power',
    value:
      'The battery recharges while moving and drains while the train is stopped.',
  },
  {
    label: 'Passengers',
    value:
      'Each survivor is another life, but every passenger also consumes rations.',
  },
  {
    label: 'Co-op',
    value: 'Single-player or online co-op for up to four players.',
  },
  {
    label: 'Achievements',
    value: 'Steam currently exposes 33 Early Access achievements.',
  },
  {
    label: 'Release',
    value: 'Early Access launched July 20, 2026 for Windows on Steam.',
  },
];

export const achievements: Achievement[] = [
  {
    name: 'Loot Goblin I',
    officialDescription: 'Loot 10 Items',
    kind: 'exploration',
  },
  {
    name: 'Detroit: Become Scrap I',
    officialDescription: 'Use a Scrapper on 1 robot remains',
    kind: 'combat',
  },
  {
    name: 'Loot Goblin II',
    officialDescription: 'Loot 100 Items',
    kind: 'exploration',
  },
  {
    name: 'Cold Start',
    officialDescription: 'Complete the tutorial',
    kind: 'progression',
  },
  {
    name: 'Mein-Craft I',
    officialDescription: 'Craft 1 Item',
    kind: 'crafting',
  },
  {
    name: 'This Used To Be A Hallway I',
    officialDescription: 'Place 1 building',
    kind: 'crafting',
  },
  {
    name: 'Terminate This I',
    officialDescription: 'Defeat 10 Robots',
    kind: 'combat',
  },
  {
    name: 'Mein-Craft II',
    officialDescription: 'Craft 20 Items',
    kind: 'crafting',
  },
  {
    name: 'Peace Was Never An Option',
    officialDescription: 'Build the Weapon Fabricator',
    kind: 'crafting',
  },
  {
    name: 'Wings of Industry',
    officialDescription: 'Build the Glider Fabricator',
    kind: 'crafting',
  },
  {
    name: 'This Used To Be A Hallway II',
    officialDescription: 'Place 10 building',
    kind: 'crafting',
  },
  {
    name: 'Garbage Day I',
    officialDescription: 'Use the Salvager to recycle 1 Item',
    kind: 'crafting',
  },
  {
    name: 'Loot Goblin III',
    officialDescription: 'Loot 1000 Items',
    kind: 'exploration',
  },
  {
    name: 'Garbage Day II',
    officialDescription: 'Use the Salvager to recycle 25 Items',
    kind: 'crafting',
  },
  {
    name: 'Catch of the Day',
    officialDescription: 'Successfully land the Glider',
    kind: 'exploration',
  },
  {
    name: 'Mein-Craft III',
    officialDescription: 'Craft 100 Items',
    kind: 'crafting',
  },
  {
    name: 'Cloud Juice I',
    officialDescription: 'Collect 1000 Iso with your Glider',
    kind: 'exploration',
  },
  {
    name: 'Refined Taste',
    officialDescription: 'Build the Refiner',
    kind: 'crafting',
  },
  {
    name: 'Iron Management',
    officialDescription: 'Build the Exosuit Forge',
    kind: 'crafting',
  },
  {
    name: 'Detroit: Become Scrap II',
    officialDescription: 'Use a Scrapper on 50 robot remains',
    kind: 'combat',
  },
  {
    name: 'Garbage Day III',
    officialDescription: 'Use the Salvager to recycle 100 Items',
    kind: 'crafting',
  },
  {
    name: 'Its free Rail Estate I',
    officialDescription: 'Connect 1 new Wagon to your train',
    kind: 'train',
  },
  {
    name: 'Terminate This II',
    officialDescription: 'Defeat 100 Robots',
    kind: 'combat',
  },
  {
    name: 'Cloud Juice II',
    officialDescription: 'Collect 10000 Iso with your Glider',
    kind: 'exploration',
  },
  {
    name: 'Detroit: Become Scrap III',
    officialDescription: 'Use a Scrapper on 100 robot remains',
    kind: 'combat',
  },
  {
    name: 'This Used To Be A Hallway III',
    officialDescription: 'Place 100 building',
    kind: 'crafting',
  },
  {
    name: 'Expansion Pack',
    officialDescription: 'Connect a Crafting Module with a Crafting Station',
    kind: 'train',
  },
  {
    name: 'Wake-Up Call I',
    officialDescription: 'Collect 10 Passengers',
    kind: 'train',
  },
  {
    name: 'Terminate This III',
    officialDescription: 'Defeat 1000 Robots',
    kind: 'combat',
  },
  {
    name: 'Its free Rail Estate II',
    officialDescription: 'Connect 10 new Wagons to your train',
    kind: 'train',
  },
  {
    name: 'The Long Thaw I',
    officialDescription: 'Hidden achievement',
    kind: 'hidden',
  },
  {
    name: 'The Long Thaw II',
    officialDescription: 'Hidden achievement',
    kind: 'hidden',
  },
  {
    name: 'Wake-Up Call II',
    officialDescription: 'Collect 50 Passengers',
    kind: 'train',
  },
];

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'EverRail Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary identity, Early Access, platform, system, feature and media record for App 4134600.',
  },
  {
    type: 'developer',
    label: 'Aesir Interactive EverRail page',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Developer page linked directly from Steam; confirms the moving-train, glider, expedition and co-op pillars.',
  },
  {
    type: 'official',
    label: 'Steam global achievements',
    url: siteFacts.officialAchievementsUrl,
    checkedAt,
    confidence: 'high',
    note: 'Public source for all 33 current names, descriptions and hidden-achievement status.',
  },
  {
    type: 'official',
    label: 'EverRail Steam Community',
    url: siteFacts.officialCommunityUrl,
    checkedAt,
    confidence: 'high',
    note: 'Official update posts and current player questions about battery pressure, co-op, UI, controls and performance.',
  },
  {
    type: 'youtube',
    label: 'Aesir Interactive game intro trailer',
    url: 'https://www.youtube.com/watch?v=wbhRwLzRn6k',
    checkedAt,
    confidence: 'high',
    note: 'Official developer upload used as the homepage trust video.',
  },
  {
    type: 'youtube',
    label: 'Aesir Interactive launch stream',
    url: 'https://www.youtube.com/watch?v=uaj5scvMCIY',
    checkedAt,
    confidence: 'high',
    note: 'Launch-day developer gameplay used for current-build visual cross-checks.',
  },
  {
    type: 'youtube',
    label: 'ProRogueBear solo day-one gameplay',
    url: 'https://www.youtube.com/watch?v=cFRnk_m22As',
    checkedAt,
    confidence: 'medium',
    note: 'Current July 20 solo run used to validate the opening decision order without treating commentary as game fact.',
  },
  {
    type: 'youtube',
    label: 'JaWoodle EverRail day one',
    url: 'https://www.youtube.com/watch?v=LDkiIufi_PA',
    checkedAt,
    confidence: 'medium',
    note: 'High-traction launch gameplay used to cross-check train-building and battery-pressure explanations.',
  },
  {
    type: 'youtube',
    label: 'Raptor launch-day co-op stream',
    url: 'https://www.youtube.com/watch?v=ZROv2zyK6FE',
    checkedAt,
    confidence: 'medium',
    note: 'Current co-op gameplay used to inform role coordination and shared-resource cautions.',
  },
  {
    type: 'competitor',
    label: 'Voidtrain Wiki train page',
    url: 'https://voidtrain.fandom.com/wiki/Train',
    checkedAt,
    confidence: 'medium',
    note: 'Adjacent-game entity-page benchmark; useful structurally but never a source for EverRail facts.',
  },
  {
    type: 'competitor',
    label: 'Voidtrain Steam quick guide',
    url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3249782972',
    checkedAt,
    confidence: 'medium',
    note: 'Adjacent beginner-guide benchmark for actionable progression and train-management structure.',
  },
  {
    type: 'competitor',
    label: 'Co-Optimus EverRail page',
    url: 'https://www.co-optimus.com/game/18062/pc/everrail.html',
    checkedAt,
    confidence: 'medium',
    note: 'Direct co-op intent competitor; checked against the official four-player Steam listing.',
  },
  {
    type: 'search',
    label: 'Current web and YouTube result set',
    url: 'https://www.google.com/search?q=everrail+guide',
    checkedAt,
    confidence: 'medium',
    note: 'Exact-game results are still thin; current demand clusters around beginner help, train power, co-op, achievements and platform questions.',
  },
];

const item = (
  keyword: string,
  intent: string,
  route: string,
  priority: KeywordMatrixItem['priority'],
  status: KeywordMatrixItem['status'],
  evidence: string,
  notes: string
): KeywordMatrixItem => ({
  keyword,
  intent,
  route,
  priority,
  status,
  evidence,
  notes,
});

export const keywordMatrix: KeywordMatrixItem[] = [
  item(
    'everrail',
    'Find the game entity.',
    '/',
    'P0',
    'keep',
    'Official Steam entity and launch results.',
    'Homepage head term.'
  ),
  item(
    'everrail wiki',
    'Find structured help.',
    '/',
    'P0',
    'keep',
    'Exact-match domain and no mature dedicated wiki.',
    'Homepage wiki intent.'
  ),
  item(
    'everrail guide',
    'Browse current help.',
    '/guides',
    'P0',
    'keep',
    'Current video and web guide results.',
    'Guide hub.'
  ),
  item(
    'everrail beginner guide',
    'Survive the opening loop.',
    '/guides/beginner-guide',
    'P0',
    'keep',
    'Direct YouTube result plus tutorial-heavy official updates.',
    'Answer-first beginner path.'
  ),
  item(
    'everrail tips',
    'Avoid common early mistakes.',
    '/guides/beginner-guide',
    'P0',
    'keep',
    'Current YouTube titles use tips and things to know.',
    'Merged with beginner intent.'
  ),
  item(
    'everrail train battery',
    'Understand charge and stop timing.',
    '/guides/train-battery-energy-guide',
    'P0',
    'keep',
    'Core Steam mechanic and current player battery complaint.',
    'Highest-value system page.'
  ),
  item(
    'everrail energy guide',
    'Manage shared train power.',
    '/guides/train-battery-energy-guide',
    'P0',
    'keep',
    'Official game loop.',
    'Merged battery/energy intent.'
  ),
  item(
    'everrail passengers',
    'Protect lives and understand respawns.',
    '/guides/passengers-rations-respawn',
    'P0',
    'keep',
    'Core store copy and current official update.',
    'Passenger economy page.'
  ),
  item(
    'everrail rations',
    'Prevent starvation.',
    '/guides/passengers-rations-respawn',
    'P0',
    'keep',
    'Official update documents eight-hour ration cycle.',
    'Same decision system as passengers.'
  ),
  item(
    'everrail expeditions',
    'Plan safe stops and returns.',
    '/guides/expeditions-return-plan',
    'P0',
    'keep',
    'Official feature pillar.',
    'Exploration timing page.'
  ),
  item(
    'everrail glider',
    'Scout and land safely.',
    '/guides/glider-scouting-iso-guide',
    'P0',
    'keep',
    'Official feature pillar and achievement set.',
    'Includes drone and Iso decisions.'
  ),
  item(
    'everrail iso',
    'Collect and protect Iso.',
    '/guides/glider-scouting-iso-guide',
    'P1',
    'keep',
    'Official UI and achievements expose Iso.',
    'Merged with glider intent.'
  ),
  item(
    'everrail crafting guide',
    'Choose useful early crafts.',
    '/guides/crafting-building-recycler',
    'P0',
    'keep',
    'Official feature pillar and achievement chains.',
    'Craft/build/recycle cluster.'
  ),
  item(
    'everrail recycler salvager',
    'Recycle without wasting useful gear.',
    '/guides/crafting-building-recycler',
    'P1',
    'keep',
    'Official update and achievement chains.',
    'Uses current Salvager name.'
  ),
  item(
    'everrail wagons',
    'Expand the moving base.',
    '/guides/wagons-storage-train-upgrades',
    'P0',
    'keep',
    'Steam store and achievement chains.',
    'Train-layout page.'
  ),
  item(
    'everrail storage',
    'Organize shared resources.',
    '/guides/wagons-storage-train-upgrades',
    'P1',
    'keep',
    'Official update details storage tiers.',
    'Merged with wagons.'
  ),
  item(
    'everrail cold hunger',
    'Survive exposure and stamina pressure.',
    '/guides/cold-hunger-survival',
    'P0',
    'keep',
    'Official update documents both meters.',
    'Survival-needs page.'
  ),
  item(
    'everrail robots emp',
    'Fight current enemy types.',
    '/guides/combat-robots-emp-guide',
    'P1',
    'keep',
    'Official update and combat achievements.',
    'Combat page avoids unverified damage values.'
  ),
  item(
    'everrail co op',
    'Understand multiplayer roles.',
    '/guides/co-op-roles-multiplayer-fixes',
    'P0',
    'keep',
    'Official four-player listing and direct competitor page.',
    'Includes join-error recovery.'
  ),
  item(
    'everrail multiplayer not working',
    'Fix a failed join.',
    '/guides/co-op-roles-multiplayer-fixes',
    'P1',
    'keep',
    'Official known issue says restart after join error.',
    'Current Early Access caveat.'
  ),
  item(
    'everrail achievements',
    'Complete all Steam goals.',
    '/guides/achievements-guide',
    'P0',
    'keep',
    'Steam exposes 33 achievements.',
    'Official checklist.'
  ),
  item(
    'everrail system requirements',
    'Check PC compatibility.',
    '/system-requirements',
    'P0',
    'keep',
    'Official Steam requirements.',
    'Exact hardware table.'
  ),
  item(
    'everrail steam deck',
    'Check handheld support.',
    '/system-requirements#steam-deck',
    'P1',
    'watch',
    'Current Steam discussion; no official compatibility badge found.',
    'State uncertainty clearly.'
  ),
  item(
    'everrail controller support',
    'Check input support.',
    '/system-requirements#controller',
    'P1',
    'keep',
    'Steam lists Partial Controller Support.',
    'No full-support claim.'
  ),
  item(
    'everrail demo',
    'Separate demo knowledge from Early Access.',
    '/guides/demo-vs-early-access',
    'P1',
    'keep',
    'Demo remains on the same Steam app page.',
    'Avoid old demo rules leaking into guides.'
  ),
  item(
    'everrail review',
    'Decide whether to buy now.',
    '/review',
    'P1',
    'keep',
    'Current launch reviews and Early Access disclosure.',
    'Decision page, not a score farm.'
  ),
  item(
    'everrail download',
    'Find the safe official install.',
    '/download',
    'P0',
    'keep',
    'Steam is the verified PC channel.',
    'Safety page for risky download queries.'
  ),
  item(
    'everrail release date',
    'Confirm launch status.',
    '/review',
    'P1',
    'keep',
    'Steam release record: July 20, 2026.',
    'Covered in buy/status page.'
  ),
  item(
    'everrail roadmap',
    'See future plans.',
    '/review#early-access',
    'P2',
    'watch',
    'Steam mentions a roadmap but no verified public board URL was found.',
    'Do not invent milestones.'
  ),
  item(
    'everrail map',
    'Find fixed locations.',
    'none',
    'P2',
    'watch',
    'World is procedurally generated.',
    'No static map page at launch.'
  ),
  item(
    'everrail codes',
    'Redeem rewards.',
    'none',
    'P3',
    'ignore',
    'No redeem-code system or reliable demand.',
    'Do not publish a fake codes page.'
  ),
  item(
    'everrail tier list',
    'Rank entities.',
    'none',
    'P3',
    'ignore',
    'No ranked-unit or character system supports the intent.',
    'Do not import template furniture.'
  ),
  item(
    'everrail trainer cheats crack',
    'Find unsafe shortcuts.',
    '/download',
    'P3',
    'ignore',
    'No safe editorial use; official install is the answer.',
    'Never provide cheats, cracks or modified clients.'
  ),
  item(
    'everrail guía principiantes',
    'Spanish beginner help.',
    '/guides/beginner-guide',
    'P2',
    'localize_later',
    'Steam supports Spanish text.',
    'English core first.'
  ),
];
