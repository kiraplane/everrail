import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/everrail/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BatteryCharging,
  BookOpen,
  ChevronDown,
  Compass,
  Crosshair,
  Download,
  Layers3,
  Menu,
  ShieldCheck,
  TrainFront,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: BookOpen,
    routes: ['/', '/guides', '/guides/beginner-guide', '/review'],
  },
  {
    title: 'Train & Survival',
    icon: TrainFront,
    routes: [
      '/guides/train-battery-energy-guide',
      '/guides/passengers-rations-respawn',
      '/guides/wagons-storage-train-upgrades',
      '/guides/cold-hunger-survival',
    ],
  },
  {
    title: 'Explore & Build',
    icon: Layers3,
    routes: [
      '/guides/expeditions-return-plan',
      '/guides/glider-scouting-iso-guide',
      '/guides/crafting-building-recycler',
    ],
  },
  {
    title: 'Combat & Co-op',
    icon: Crosshair,
    routes: [
      '/guides/combat-robots-emp-guide',
      '/guides/co-op-roles-multiplayer-fixes',
      '/guides/achievements-guide',
    ],
  },
  {
    title: 'Steam & Status',
    icon: ShieldCheck,
    routes: [
      '/guides/demo-vs-early-access',
      '/system-requirements',
      '/download',
      '/disclaimer',
    ],
  },
] as const;

const routeCount = wikiNavRoutes.reduce(
  (count, group) => count + group.routes.length,
  0
);

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiLink({
  currentPath,
  href,
}: { currentPath?: string; href: string }) {
  const active = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-lg border px-3 py-2 text-left text-sm leading-6 transition',
        active
          ? 'border-[#62d8ff] bg-[#62d8ff] font-semibold text-[#061019]'
          : 'border-[#294b5e] bg-[#061019] text-[#9cb3bf] hover:border-[#62d8ff] hover:bg-[#143044] hover:text-[#e7f2f7]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#061019]' : 'text-[#62d8ff]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return wikiNavRoutes.map((group) => {
    const active = group.routes.some((route) =>
      isCurrentPath(currentPath, route)
    );

    return (
      <details
        key={group.title}
        open={active}
        className={cn(
          'group rounded-lg border p-3',
          active
            ? 'border-[#62d8ff]/60 bg-[#62d8ff]/5'
            : 'border-[#294b5e] bg-[#061019]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#e7f2f7] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#62d8ff]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#9cb3bf] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#ffbf5b] transition group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2">
          {group.routes.map((route) => (
            <WikiLink key={route} currentPath={currentPath} href={route} />
          ))}
        </div>
      </details>
    );
  });
}

export function WikiRouteSidebar({
  children,
  currentPath,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#294b5e] bg-[#0b1d29] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#62d8ff]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 break-words font-display text-lg font-bold text-[#e7f2f7]">
              EverRail
            </h2>
          </div>
          <Compass className="size-5 shrink-0 text-[#ffbf5b]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
        <p className="mt-4 border-[#294b5e] border-t pt-3 text-[#7f9aa8] text-xs">
          {routeCount} focused wiki routes
        </p>
      </div>

      {sectionLinks.length ? (
        <div className="rounded-xl border border-[#294b5e] bg-[#0b1d29] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#62d8ff]">
            On this page
          </p>
          <div className="mt-3 grid gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-w-0 break-words rounded-lg border border-[#294b5e] bg-[#061019] px-3 py-2 text-[#9cb3bf] text-sm leading-6 hover:border-[#62d8ff] hover:text-[#e7f2f7]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <details className="group mt-5 rounded-xl border border-[#294b5e] bg-[#0b1d29] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#e7f2f7] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <Menu className="size-4 text-[#62d8ff]" />
          Open wiki menu
          <Badge className="bg-[#ffbf5b] text-[#061019]">{routeCount}</Badge>
        </span>
        <ChevronDown className="size-4 text-[#ffbf5b] transition group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3 border-[#294b5e] border-t pt-4">
        <NavGroups currentPath={currentPath} />
        {sectionLinks.length ? (
          <details className="rounded-lg border border-[#294b5e] bg-[#061019] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#e7f2f7]">
              On this page
            </summary>
            <div className="mt-3 grid gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="break-words rounded-lg border border-[#294b5e] px-3 py-2 text-[#9cb3bf] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    {
      href: '/guides/train-battery-energy-guide',
      label: 'Battery',
      icon: BatteryCharging,
    },
    {
      href: '/guides/expeditions-return-plan',
      label: 'Expeditions',
      icon: Compass,
    },
    {
      href: '/guides/co-op-roles-multiplayer-fixes',
      label: 'Co-op',
      icon: Layers3,
    },
    { href: '/download', label: 'Steam', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#3f667a] bg-[#061019]/85 px-2.5 py-1.5 text-[#e7f2f7] text-xs transition hover:border-[#62d8ff] hover:bg-[#143044] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#62d8ff]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}
