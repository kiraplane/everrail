import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Terms of Service | EverRail Wiki',
    description:
      'Terms for using EverRail Wiki, an independent game guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#061019] py-12 text-[#eef9ff]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#a8c1cf]">
          This site provides independent EverRail guides, source notes and
          official-link guidance. It is not affiliated with, endorsed by,
          sponsored by or operated by Aesir Interactive, Outersloth, indienova,
          Valve, Steam or YouTube.
        </p>
        <p className="leading-8 text-[#a8c1cf]">
          Puzzle behavior, achievements, routes and platform support can change
          after game updates. Treat guide pages as community-oriented guidance
          and verify important details in your current build.
        </p>
        <p className="leading-8 text-[#a8c1cf]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, paid files, trainers, or automation
          scripts.
        </p>
        <p className="leading-8 text-[#a8c1cf]">
          Questions about these terms can be sent to hello@everrail.wiki.
        </p>
      </Container>
    </div>
  );
}
