import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function EverRailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#061019]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">{children}</main>
      <AdsterraNativeBanner className="border-[#24445C] border-t bg-[#061019]" />
      <Footer />
    </div>
  );
}
