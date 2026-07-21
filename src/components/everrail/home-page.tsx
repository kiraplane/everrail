import { FaqSection } from '@/components/everrail/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/everrail/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
} from '@/data/everrail/localized';
import { siteFacts } from '@/data/everrail/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BatteryCharging,
  BookOpen,
  Boxes,
  ExternalLink,
  Gauge,
  Plane,
  ShieldCheck,
  Snowflake,
  TrainFront,
  Trophy,
  Users,
  Utensils,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const decisionRoutes = [
  {
    title: 'The battery drains too fast',
    text: 'Price every stop, protect the return reserve and restart before sorting.',
    href: '/guides/train-battery-energy-guide',
    icon: BatteryCharging,
    status: 'POWER',
  },
  {
    title: 'Passengers need rations',
    text: 'Balance extra lives against the eight-hour distribution cycle.',
    href: '/guides/passengers-rations-respawn',
    icon: Utensils,
    status: 'CREW',
  },
  {
    title: 'I need a safer expedition',
    text: 'Choose one result, keep the route reversible and leave on a trigger.',
    href: '/guides/expeditions-return-plan',
    icon: Gauge,
    status: 'RETURN',
  },
  {
    title: 'I am learning the glider',
    text: 'Scout locations, collect Iso deliberately and plan the landing early.',
    href: '/guides/glider-scouting-iso-guide',
    icon: Plane,
    status: 'SCOUT',
  },
  {
    title: 'Our co-op run is chaos',
    text: 'Assign time, scouting, expedition and logistics ownership.',
    href: '/guides/co-op-roles-multiplayer-fixes',
    icon: Users,
    status: 'CO-OP',
  },
  {
    title: 'I want all 33 unlocks',
    text: 'Track the official crafting, combat, glider, wagon and passenger goals.',
    href: '/guides/achievements-guide',
    icon: Trophy,
    status: 'STEAM',
  },
] as const;

const topicModules = [
  {
    title: 'Keep the train alive',
    text: 'Power, wagons, storage and the moving-base decisions that control every stop.',
    icon: TrainFront,
    links: [
      ['/guides/train-battery-energy-guide', 'Battery & energy'],
      ['/guides/wagons-storage-train-upgrades', 'Wagons & storage'],
      ['/guides/passengers-rations-respawn', 'Passengers & rations'],
    ],
  },
  {
    title: 'Return from Inara',
    text: 'Scout first, spend one stop on one result and keep survival meters recoverable.',
    icon: Snowflake,
    links: [
      ['/guides/expeditions-return-plan', 'Expedition plan'],
      ['/guides/glider-scouting-iso-guide', 'Glider & Iso'],
      ['/guides/cold-hunger-survival', 'Cold & hunger'],
    ],
  },
  {
    title: 'Build with a reason',
    text: 'Remove the current bottleneck, preserve critical stores and avoid a blocked layout.',
    icon: Boxes,
    links: [
      ['/guides/crafting-building-recycler', 'Craft & recycle'],
      ['/guides/combat-robots-emp-guide', 'Robots & EMP'],
      ['/guides/achievements-guide', 'Achievement plan'],
    ],
  },
] as const;

export function EverRailHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featured = getLocalizedFeaturedGuides(locale);
  const facts = getLocalizedGameFacts(locale);
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: content.intro,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/logo.svg`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        url: siteFacts.officialSteamUrl,
        image: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
        datePublished: '2026-07-20',
        gamePlatform: ['Windows'],
        playMode: ['SinglePlayer', 'MultiPlayer', 'CoOp'],
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
      },
      {
        '@type': 'VideoObject',
        name: 'EverRail | Game Intro Trailer',
        thumbnailUrl: `${siteFacts.domain}/everrail/guides/official-trailer.jpg`,
        uploadDate: '2026-06-07',
        embedUrl: `https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#061019] text-[#e7f2f7]">
      <JsonLd data={graph} />

      <section className="relative overflow-hidden border-[#294b5e] border-b">
        <Image
          src={siteFacts.officialHeroImage}
          alt="EverRail train moving through the frozen world of Inara"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,25,.98)_0%,rgba(6,16,25,.9)_48%,rgba(6,16,25,.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#061019_100%)]" />

        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.72fr)]">
            <div className="min-w-0">
              <Badge className="border border-[#62d8ff]/40 bg-[#0b1d29]/90 text-[#8be6ff]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[.96] tracking-[-.04em] md:text-7xl">
                EverRail <span className="text-[#62d8ff]">Wiki</span>
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#bad0da] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#62d8ff] px-5 py-3 font-bold text-[#061019] shadow-[4px_4px_0_#ffbf5b] hover:bg-[#9deaff]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#5d8194] bg-[#0b1d29]/80 px-5 py-3 text-[#e7f2f7] hover:bg-[#143044]"
                >
                  <LocaleLink href="/guides/train-battery-energy-guide">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#9cb3bf]">
                {content.scopeNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#5d8194] bg-black shadow-[0_18px_70px_rgba(98,216,255,.18)]">
              <div className="flex items-center justify-between border-[#5d8194] border-b bg-[#0b1d29] px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[.18em] text-[#8be6ff]">
                  Official game intro
                </span>
                <span className="inline-flex items-center gap-2 text-[#9cb3bf] text-xs">
                  <span className="size-2 rounded-full bg-[#ff6b63]" />
                  Inara feed
                </span>
              </div>
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="EverRail official game intro trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-9 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-9">
            <MobileWikiNav currentPath="/" locale={locale} />

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-[#294b5e] bg-[#0b1d29] p-4"
                >
                  <p
                    className={
                      index % 3 === 0
                        ? 'text-xs font-bold uppercase tracking-[.16em] text-[#62d8ff]'
                        : index % 3 === 1
                          ? 'text-xs font-bold uppercase tracking-[.16em] text-[#ffbf5b]'
                          : 'text-xs font-bold uppercase tracking-[.16em] text-[#ff8f88]'
                    }
                  >
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#bad0da]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#62d8ff]">
                    Start here
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Solve the failure in front of you
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#8be6ff] text-sm font-semibold"
                >
                  All 15 guides <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {decisionRoutes.map((route) => (
                  <LocaleLink
                    key={route.href}
                    href={route.href}
                    className="group flex min-w-0 gap-4 rounded-xl border border-[#294b5e] bg-[#0b1d29] p-4 transition hover:-translate-y-0.5 hover:border-[#62d8ff]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#3f667a] bg-[#061019]">
                      <route.icon className="size-5 text-[#62d8ff]" />
                    </span>
                    <span className="min-w-0">
                      <span className="text-[10px] font-bold tracking-[.18em] text-[#ffbf5b]">
                        {route.status}
                      </span>
                      <span className="mt-0.5 block font-display text-lg font-bold group-hover:text-[#8be6ff]">
                        {route.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#9cb3bf]">
                        {route.text}
                      </span>
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3">
                <BookOpen className="size-6 text-[#ffbf5b]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#62d8ff]">
                    Current guides
                  </p>
                  <h2 className="font-display text-3xl font-black">
                    Latest player routes
                  </h2>
                </div>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((guide) => (
                  <article
                    key={guide.slug}
                    className="group overflow-hidden rounded-xl border border-[#294b5e] bg-[#0b1d29]"
                  >
                    <div className="relative aspect-video border-[#294b5e] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061019] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#143044] text-[#8be6ff]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#9cb3bf]">
                        {guide.summary}
                      </p>
                      <LocaleLink
                        href={guide.path}
                        className="mt-4 inline-flex items-center gap-2 text-[#8be6ff] text-sm font-semibold"
                      >
                        Open guide <ArrowRight className="size-4" />
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-4 xl:grid-cols-3">
              {topicModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-xl border border-[#294b5e] bg-[#0b1d29] p-5"
                >
                  <module.icon className="size-6 text-[#ffbf5b]" />
                  <h2 className="mt-4 font-display text-2xl font-black">
                    {module.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#9cb3bf]">
                    {module.text}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {module.links.map(([href, label]) => (
                      <LocaleLink
                        key={href}
                        href={href}
                        className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-[#294b5e] bg-[#061019] px-3 py-2 text-sm text-[#bad0da] hover:border-[#62d8ff] hover:text-[#e7f2f7]"
                      >
                        <span className="min-w-0 break-words">{label}</span>
                        <ArrowRight className="size-4 shrink-0 text-[#62d8ff]" />
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-[#294b5e] bg-[#0b1d29] p-6">
                <ShieldCheck className="size-7 text-[#ffbf5b]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Released-build facts
                </h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-[#9cb3bf]">
                  <p>Early Access launched July 20, 2026 on Steam.</p>
                  <p>Windows · Single-player · 4-player online co-op.</p>
                  <p>Steam App 4134600 · 33 current achievements.</p>
                </div>
                <LocaleLink
                  href="/review"
                  className="mt-4 inline-flex items-center gap-2 text-[#ffbf5b] text-sm font-semibold"
                >
                  Decide whether to play now <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-xl border border-[#294b5e] bg-[#0b1d29] p-6">
                <TrainFront className="size-7 text-[#62d8ff]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Official records
                </h2>
                <div className="mt-4 grid gap-2">
                  {[
                    ['Steam store', siteFacts.officialSteamUrl],
                    ['Steam achievements', siteFacts.officialAchievementsUrl],
                    ['Aesir Interactive', siteFacts.officialWebsiteUrl],
                    ['Official Discord', siteFacts.officialDiscordUrl],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-[#294b5e] bg-[#061019] px-4 py-3 text-sm text-[#bad0da] hover:border-[#62d8ff]"
                    >
                      {label} <ExternalLink className="size-4 text-[#62d8ff]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-[#294b5e] bg-[#0b1d29] p-5 md:p-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#62d8ff]">
                Player question index
              </p>
              <h2 className="mt-2 font-display text-2xl font-black">
                Every supported query maps to a real answer
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.keywordRoutes.slice(0, 28).map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    className="rounded-full border border-[#294b5e] bg-[#061019] px-3 py-2 text-[#9cb3bf] text-xs hover:border-[#62d8ff] hover:text-[#e7f2f7]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
            </section>

            <FaqSection items={content.faq} title="EverRail FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
