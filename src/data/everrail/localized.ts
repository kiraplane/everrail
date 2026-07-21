import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export const routeLabels: Record<string, string> = {
  '/': 'EverRail Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/train-battery-energy-guide': 'Train Battery & Energy',
  '/guides/passengers-rations-respawn': 'Passengers & Rations',
  '/guides/expeditions-return-plan': 'Expeditions & Returns',
  '/guides/glider-scouting-iso-guide': 'Glider, Scouting & Iso',
  '/guides/crafting-building-recycler': 'Crafting & Recycler',
  '/guides/wagons-storage-train-upgrades': 'Wagons & Storage',
  '/guides/cold-hunger-survival': 'Cold & Hunger',
  '/guides/combat-robots-emp-guide': 'Robots & EMP Combat',
  '/guides/co-op-roles-multiplayer-fixes': 'Co-op Roles & Fixes',
  '/guides/achievements-guide': 'All 33 Achievements',
  '/guides/demo-vs-early-access': 'Demo vs Early Access',
  '/system-requirements': 'System Requirements',
  '/review': 'Should You Buy?',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const keywordRoutes = keywordMatrix
    .filter((matrixItem) => ['keep', 'watch'].includes(matrixItem.status))
    .filter((matrixItem) => matrixItem.route !== 'none')
    .map((matrixItem) => {
      const cleanRoute = matrixItem.route.split('#')[0];
      return {
        keyword: matrixItem.keyword,
        route: matrixItem.route,
        label: routeLabels[cleanRoute] ?? cleanRoute,
        intent: matrixItem.intent,
      };
    });

  return {
    badge: 'Early Access guide hub · Checked July 21, 2026',
    metadataTitle: 'EverRail Wiki - Survival, Train & Co-op Guides',
    title: 'EverRail Wiki',
    intro:
      'Keep the train charged, passengers fed and every expedition recoverable. Use current guides for EverRail power, crafting, gliders, co-op and all 33 Steam achievements.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Open train power guide',
    scopeNote:
      'Current scope: Steam App 4134600 Early Access. Live tooltips and official updates outrank old demo footage when balance or UI changes.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is EverRail?',
        answer:
          'EverRail is an open-world survival crafting game by Aesir Interactive where a moving train is the base, factory and life-support system.',
      },
      {
        question: 'How does train power work?',
        answer:
          'The battery charges while the train moves and drains while it is stopped, so every expedition needs a return margin.',
      },
      {
        question: 'How many players does EverRail support?',
        answer:
          'The released Steam listing supports single-player and online co-op for up to four players.',
      },
      {
        question: 'What happens when a player dies?',
        answer:
          'Another passenger can take over while survivors remain aboard. Each death reduces the train population.',
      },
      {
        question: 'How many EverRail achievements are there?',
        answer:
          'Steam currently lists 33 achievements, including two with hidden descriptions.',
      },
      {
        question: 'Is EverRail finished?',
        answer:
          'No. It entered Early Access on July 20, 2026 and is expected to change through regular patches and community feedback.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} focused guide pages`,
    title: 'EverRail Guide Hub',
    intro:
      'Choose the system causing the next failure: battery, expedition timing, passengers, rations, glider scouting, crafting, train layout, survival meters, combat, co-op or achievements.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Which EverRail guide should I read first?',
        answer:
          'Start with the beginner guide, then read the train battery guide before attempting longer expeditions.',
      },
      {
        question: 'Are these guides for the demo?',
        answer:
          'The July 20 Early Access build is the primary scope. Demo material is used only when clearly labeled and still relevant.',
      },
      {
        question: 'Why is there no codes or tier-list page?',
        answer:
          'No verified redeem-code or ranked-entity system supports those intents, so the site does not publish template filler.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Gameplay cross-check:',
    videoSuffix:
      'The written guide uses current official rules; the video supports route and interface context.',
    officialTitle: 'Check the live Early Access build',
    officialBody:
      'EverRail balance, recipes and UI can change. When a value differs after a patch, use the current in-game tooltip and official Steam update as the authority.',
    officialLinkLabel: 'Open the official Steam page',
    faqTitle: 'EverRail guide FAQ',
    categoryLabels: {
      Start: 'Start Here',
      Train: 'Train Systems',
      Survival: 'Survival',
      Exploration: 'Exploration',
      Crafting: 'Crafting',
      Combat: 'Combat',
      'Co-op': 'Co-op',
      Achievements: 'Achievements',
      Status: 'Early Access Status',
      Reference: 'Reference',
      Review: 'Buying Guide',
      Safety: 'Official Install',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      'System guide': 'System guide',
      Checklist: 'Checklist',
      Status: 'Current status',
    },
  };
}
