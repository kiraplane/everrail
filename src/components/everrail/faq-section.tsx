import type { GuideFaq } from '@/data/everrail/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-xl border border-[#244657] bg-[#0b1d29] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#eef9ff]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#244657] bg-[#061019] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#eef9ff] transition group-open:text-[#ffbf5b]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#a8c1cf]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
