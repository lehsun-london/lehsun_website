import Link from "next/link";

type TrustProofLink = {
  href: string;
  label: string;
};

type TrustProofBlockProps = {
  items: readonly string[];
  reviewHighlight?: string;
  links?: readonly TrustProofLink[];
};

export function TrustProofBlock({
  items,
  reviewHighlight,
  links = [],
}: TrustProofBlockProps) {
  return (
    <section className="bg-[#D93423] px-5 py-5 text-[#FDF8F0] lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {items.map((item) => (
              <p key={item} className="text-sm font-bold tracking-wide">
                {item}
              </p>
            ))}
          </div>

          {reviewHighlight ? (
            <p className="max-w-xl text-sm font-serif italic text-[#F1E1AA] md:text-right">
              Review highlight: {reviewHighlight}
            </p>
          ) : null}
        </div>

        {links.length > 0 ? (
          <nav
            aria-label="Related pages"
            className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-[#F1E1AA] underline underline-offset-4 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
  );
}
