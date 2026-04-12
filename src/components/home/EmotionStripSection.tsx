import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EmotionStripSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 px-5 lg:px-10" id="emotion-strip"
      style={{ backgroundColor: "#D93423" }}>

      {/* Tile motif texture overlay — very subtle */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/brand/lehsun-motifs-2200.png')",
          backgroundSize: "300px auto",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Geometric motif — large decorative circle, right side */}
      <div
        aria-hidden
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/generated/geometric-motif.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "invert(1)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <ScrollReveal>
          {/* Small decorative dots row */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 opacity-40" style={{ backgroundColor: "#F1E1AA" }} />
            <div className="size-2 rounded-full" style={{ backgroundColor: "#03B6AA" }} />
            <div className="size-3 rounded-full" style={{ backgroundColor: "#E69B39" }} />
            <div className="size-2 rounded-full" style={{ backgroundColor: "#03B6AA" }} />
            <div className="h-px w-16 opacity-40" style={{ backgroundColor: "#F1E1AA" }} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-70" style={{ color: "#F1E1AA" }}>
            Made with care. Served with love.
          </p>

          <blockquote>
            <p
              className="font-serif italic font-black text-balance leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", color: "#F1E1AA" }}
            >
              &ldquo;The flavours you grew up with&nbsp;&mdash;
              <br className="hidden sm:block" />
              made fresh, for moments that matter.&rdquo;
            </p>
          </blockquote>

          {/* Divider row */}
          <div className="flex items-center justify-center gap-3 mt-10 mb-6">
            <div className="h-px w-16 opacity-40" style={{ backgroundColor: "#F1E1AA" }} />
            <div className="size-2 rounded-full" style={{ backgroundColor: "#E69B39" }} />
            <div className="size-3 rounded-full" style={{ backgroundColor: "#03B6AA" }} />
            <div className="size-2 rounded-full" style={{ backgroundColor: "#E69B39" }} />
            <div className="h-px w-16 opacity-40" style={{ backgroundColor: "#F1E1AA" }} />
          </div>

          <p className="text-sm font-semibold tracking-wide opacity-70" style={{ color: "#F1E1AA" }}>
            Lehsun &mdash; the Hindi word for garlic, the soul of every dish we cook.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
