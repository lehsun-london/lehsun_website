import { Star, ExternalLink } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";
import { reviewStats, reviews } from "@/content/businessInfo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const googleReviewsUrl = "https://maps.app.goo.gl/C8JKao4BbBerjfQj8";

export function ReviewsSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-5 lg:px-10 scroll-mt-20" id="reviews">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Google Reviews
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What families across Kent say
            </h2>

            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 text-[#C8881A] fill-[#C8881A]" aria-hidden />
                ))}
                <span className="ml-1.5 text-[#1C0A00] font-black text-lg">{reviewStats.average}</span>
              </div>
              <span className="text-[#E8D5C0]" aria-hidden>·</span>
              <span className="text-sm font-semibold text-[#6B3A2A]">
                {reviewStats.count} {reviewStats.sourceLabel}
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.author} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-[#E8D5C0] bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
                {/* Decorative quote */}
                <div className="text-[80px] font-serif leading-none text-[#F5821F]/15 mb-2 select-none" aria-hidden>
                  &ldquo;
                </div>

                <div className="flex gap-0.5 mb-4" aria-label="5 star review">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="size-3.5 text-[#C8881A] fill-[#C8881A]" aria-hidden />
                  ))}
                </div>

                <p className="mb-5 flex-1 text-[#6B3A2A] font-serif italic leading-relaxed text-sm">
                  &ldquo;{review.quote}&rdquo;
                </p>

                <div className="mb-4">
                  <p className="font-black text-sm text-[#1C0A00]">{review.author}</p>
                  <p className="text-xs text-[#6B3A2A]/60 mt-0.5">{review.age}</p>
                </div>

                <TrackedLink
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A73E8] hover:text-[#1558B0] transition-colors focus-ring rounded-sm cursor-pointer"
                  ctaText={`View ${review.author} review on Google`}
                  destinationType="maps"
                  href={googleReviewsUrl}
                  intent="social"
                  placement="reviews_card"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E8F0FE] text-[9px] font-black text-[#1A73E8]" aria-hidden>G</span>
                  View on Google
                  <ExternalLink className="size-3" aria-hidden />
                </TrackedLink>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240}>
          <div className="text-center">
            <TrackedLink
              className="inline-flex items-center gap-2 rounded-full border border-[#E8D5C0] bg-[#FFF5E4] px-8 py-3.5 text-sm font-bold text-[#1A73E8] hover:bg-[#E8F0FE] transition-colors focus-ring cursor-pointer"
              ctaText="Read More Reviews on Google"
              destinationType="maps"
              href={googleReviewsUrl}
              intent="social"
              placement="reviews_section"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#1A73E8]" aria-hidden>G</span>
              Read All Reviews on Google
              <ExternalLink className="size-3.5" aria-hidden />
            </TrackedLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
