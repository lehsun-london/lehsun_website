import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";

const trustPoints = [
  {
    title: "Proper North Indian Flavours",
    body: "The kind you miss back home, with spice and depth left in.",
  },
  {
    title: "Rooted in Regional Styles",
    body: "Cooked the way it is made back home — Delhi, Punjab and Rajasthan-style.",
  },
  {
    title: "Trusted for Gatherings",
    body: "5-star hygiene rated and chosen for family gatherings, parties and celebrations.",
  },
];

export function AboutSection() {
  return (
    <section
      className="bg-cream py-24 px-6 lg:px-20 relative overflow-hidden scroll-mt-28 md:bg-[url('/assets/generated/geometric-motif.png')] md:bg-repeat md:bg-[length:220px] md:bg-[position:center] md:bg-blend-soft-light"
      id="about"
    >
      <ScrollReveal className="max-w-6xl mx-auto relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,1fr)] lg:items-start">
          <div>
            <span className="text-vermillion font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Why Lehsun
            </span>
            <h2 className="text-balance text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Proper North Indian flavours, made the way you remember
            </h2>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-[34rem]">
              Lehsun is rooted in the flavours people miss most: proper North
              Indian cooking, familiar regional styles, and food hosts can feel
              confident serving to family and friends.
            </p>
            <p className="mt-4 text-base font-semibold tracking-[0.04em] text-[#7c2d12]">
              Not toned down. Not adapted. Just real flavour.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-[#efcaa4] bg-white/90 p-5 shadow-lg shadow-[#0000000d]"
                >
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article className="overflow-hidden rounded-[28px] border border-[#efcaa4] bg-white shadow-xl shadow-[#00000014]">
            <div className="relative aspect-[4/3] bg-[#fff7ef]">
              <Image
                alt="Lehsun 5-star food hygiene rating"
                className="h-full w-full object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                src="/assets/brand/hygiene-rating-5star.png"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-vermillion">
                5-Star Food Hygiene Rated
              </p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">
                Trusted for gatherings
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                A simple reassurance for hosts who want proper flavour and a
                well-run kitchen behind their event.
              </p>
            </div>
          </article>
        </div>
      </ScrollReveal>
    </section>
  );
}
