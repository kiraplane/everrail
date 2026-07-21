'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BatteryCharging,
  BookOpen,
  Boxes,
  Compass,
  Download,
  Gamepad2,
  Snowflake,
  Trophy,
  Users,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'All current survival, train and co-op guides.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description:
            'Your first safe loop from train to expedition and back.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Compass className="size-4" />,
        },
        {
          title: 'Train battery & energy',
          description: 'Keep the locomotive powered without wasting your run.',
          href: Routes.TrainBattery,
          external: false,
          icon: <BatteryCharging className="size-4" />,
        },
      ],
    },
    {
      title: 'Survival',
      href: Routes.ColdHunger,
      external: false,
      icon: <Snowflake className="size-4" />,
      items: [
        {
          title: 'Cold & hunger',
          description: 'Manage warmth, food and expedition risk.',
          href: Routes.ColdHunger,
          external: false,
          icon: <Snowflake className="size-4" />,
        },
        {
          title: 'Crafting & recycler',
          description: 'Turn limited space and scrap into useful upgrades.',
          href: Routes.CraftingRecycler,
          external: false,
          icon: <Boxes className="size-4" />,
        },
        {
          title: 'Co-op roles & fixes',
          description: 'Divide jobs and solve common multiplayer problems.',
          href: Routes.CoopRoles,
          external: false,
          icon: <Users className="size-4" />,
        },
      ],
    },
    {
      title: 'Steam',
      href: Routes.Achievements,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'All 33 achievements',
          description:
            'A checklist built from the official Steam achievement data.',
          href: Routes.Achievements,
          external: false,
          icon: <Trophy className="size-4" />,
        },
        {
          title: 'Demo vs Early Access',
          description:
            'Understand the current Steam build and what may change.',
          href: Routes.DemoEarlyAccess,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Use Steam App 4134600 and avoid unsafe mirrors.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
