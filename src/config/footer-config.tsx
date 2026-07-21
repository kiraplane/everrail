'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Review', href: Routes.Review, external: false },
      ],
    },
    {
      title: 'Train',
      items: [
        {
          title: 'Battery & Energy',
          href: Routes.TrainBattery,
          external: false,
        },
        {
          title: 'Wagons & Storage',
          href: Routes.WagonsStorage,
          external: false,
        },
        {
          title: 'Passengers & Rations',
          href: Routes.PassengersRations,
          external: false,
        },
      ],
    },
    {
      title: 'Survival',
      items: [
        { title: 'Cold & Hunger', href: Routes.ColdHunger, external: false },
        {
          title: 'Combat & Robots',
          href: Routes.CombatRobots,
          external: false,
        },
        { title: 'Expeditions', href: Routes.Expeditions, external: false },
      ],
    },
    {
      title: 'Steam',
      items: [
        {
          title: 'Achievements',
          href: Routes.Achievements,
          external: false,
        },
        {
          title: 'System Requirements',
          href: Routes.SystemRequirements,
          external: false,
        },
        { title: 'Official Download', href: Routes.Download, external: false },
        {
          title: 'Demo vs Early Access',
          href: Routes.DemoEarlyAccess,
          external: false,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}
