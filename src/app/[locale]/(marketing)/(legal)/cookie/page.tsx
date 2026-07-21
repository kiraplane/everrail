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
    title: 'Cookie Policy | EverRail Wiki',
    description:
      'How EverRail Wiki uses essential cookies, analytics, and similar technologies.',
    locale,
    pathname: '/cookie',
  });
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#061019] py-12 text-[#eef9ff]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Cookie Policy</h1>
        <p className="leading-8 text-[#a8c1cf]">
          EverRail Wiki uses essential cookies and similar technologies to keep
          the site working, remember basic preferences, and understand aggregate
          traffic patterns.
        </p>
        <p className="leading-8 text-[#a8c1cf]">
          Analytics or advertising partners may set limited cookies to measure
          page performance, ad delivery, referrers, and general device
          information. We use this data to improve guide pages and maintain the
          site.
        </p>
        <p className="leading-8 text-[#a8c1cf]">
          You can block or delete cookies in your browser settings. Some
          features, such as language preferences or consent choices, may not
          work as expected when cookies are disabled.
        </p>
        <p className="leading-8 text-[#a8c1cf]">
          Questions about this policy can be sent to hello@everrail.wiki.
        </p>
      </Container>
    </div>
  );
}
