"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";
import { reviewStats, reviews, cateringReviews, dailyMenuReviews } from "@/content/businessInfo";

type ReviewItem = { author: string; type: string; quote: string; googleUrl: string };
type ReviewVariant = "all" | "catering" | "daily";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const googleReviewsUrl = "https://maps.app.goo.gl/C8JKao4BbBerjfQj8";

// Google G mark SVG
function GoogleMark({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRow({ count = 5, size = "size-3.5" }: { count?: number; size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} star review`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} className={`${size} text-[#B8780A] fill-[#B8780A]`} aria-hidden />
      ))}
    </div>
  );
}

// Mobile stacked carousel
function StackedReviews({ items }: { items: readonly ReviewItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const review = items[activeIndex];

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full max-w-md mx-auto" style={{ height: "360px" }}>
        {[2, 1].map((offset) => (
          <div
            key={offset}
            className="absolute inset-x-0 rounded-2xl border border-[#E2C9A8] bg-white"
            style={{
              bottom: `${offset * -10}px`,
              left: `${offset * 14}px`,
              right: `${offset * 14}px`,
              height: "320px",
              opacity: 1 - offset * 0.3,
              transform: `scale(${1 - offset * 0.05})`,
              transformOrigin: "bottom center",
              zIndex: 10 - offset,
            }}
            aria-hidden
          />
        ))}

        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={activeIndex}
            initial={{ opacity: 0, x: direction * 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -60, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col rounded-2xl border-2 border-[#E8751A]/20 bg-white p-7 shadow-xl cursor-pointer select-none"
            style={{ zIndex: 20 }}
            onClick={() => { setDirection(1); setActiveIndex((prev) => (prev + 1) % items.length); }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) { setDirection(1); setActiveIndex((p) => (p + 1) % items.length); }
              else if (info.offset.x > 50) { setDirection(-1); setActiveIndex((p) => (p - 1 + items.length) % items.length); }
            }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl overflow-hidden opacity-20 pointer-events-none" aria-hidden>
              <div className="tile-band w-full h-full" />
            </div>
            <Quote className="size-8 text-[#E8751A]/25 mb-3 flex-shrink-0" aria-hidden />
            <StarRow />
            <p className="flex-1 text-[#6B3520] font-serif italic leading-relaxed text-sm my-4">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-[#E2C9A8]">
              <p className="font-black text-sm text-[#1A0600]">{review.author}</p>
              <GoogleMark className="size-5" />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="flex gap-1 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center focus-ring cursor-pointer"
            aria-label={`View review ${i + 1}`}
          >
            <span className={`block rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-[#E8751A] w-6 h-2" : "bg-[#E2C9A8] w-2 h-2 hover:bg-[#B8780A]"
            }`} />
          </button>
        ))}
      </div>
      <p className="text-[11px] text-[#6B3520]/40 mt-2 tracking-wide">tap to cycle · swipe to navigate</p>
    </div>
  );
}

export function ReviewsSection({ variant = "all" }: { variant?: ReviewVariant }) {
  const displayReviews: readonly ReviewItem[] =
    variant === "catering" ? cateringReviews :
    variant === "daily" ? dailyMenuReviews :
    reviews;

  const heading =
    variant === "catering" ? <>What clients say about<br className="hidden sm:block" /> our catering.</> :
    variant === "daily" ? <>What people say about<br className="hidden sm:block" /> the daily menu.</> :
    <>Real families. Real evenings.<br className="hidden sm:block" /> Real flavours.</>;

  return (
    <section className="py-12 md:py-16 px-5 lg:px-10 scroll-mt-20" id="reviews"
      style={{ backgroundColor: "#FDF8F0" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C42B0A] mb-3">
              What People Say
            </p>
            <h2
              className="font-serif italic font-black text-[#1A0600] text-balance mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {heading}
            </h2>

            {/* Stats row */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#E2C9A8] rounded-full px-6 py-2.5 shadow-sm">
              <StarRow count={5} size="size-4" />
              <span className="font-black text-xl text-[#1A0600]">5★</span>
              <span className="text-[#E2C9A8]">·</span>
              <span className="text-sm font-semibold text-[#6B3520]">{reviewStats.count}+ verified reviews</span>
              <GoogleMark className="size-4" />
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile: stacked cards */}
        <div className="md:hidden mb-6">
          <StackedReviews items={displayReviews} />
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
          {displayReviews.map((review, i) => (
            <ScrollReveal key={review.author} delay={i * 60}>
              <article className="relative flex flex-col rounded-2xl border border-[#E2C9A8] bg-white p-6 shadow-sm h-full overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-l-4 hover:border-l-[#E8751A] transition-all duration-300 cursor-default">
                {i === 0 && (
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none" aria-hidden>
                    <div className="tile-band w-full h-full rounded-bl-2xl" />
                  </div>
                )}
                <StarRow />
                <p className="mt-3 flex-1 text-[#6B3520] font-serif italic leading-relaxed text-sm">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-5 pt-3 border-t border-[#E2C9A8] flex items-center justify-between">
                  <p className="font-black text-xs text-[#1A0600]">{review.author}</p>
                  <GoogleMark className="size-4" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={280}>
          <div className="text-center">
            <TrackedLink
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#E2C9A8] bg-white px-8 py-3.5 text-sm font-bold text-[#1A73E8] hover:bg-[#E8F0FE] hover:border-[#1A73E8] transition-all duration-200 focus-ring cursor-pointer shadow-sm"
              ctaText="Read More Reviews on Google"
              destinationType="maps"
              href={googleReviewsUrl}
              intent="review_click"
              placement="reviews_section"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GoogleMark className="size-5" />
              Read all {reviewStats.count}+ reviews on Google
              <ExternalLink className="size-3.5" aria-hidden />
            </TrackedLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
