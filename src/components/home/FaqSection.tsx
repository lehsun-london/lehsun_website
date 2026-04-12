"use client";

import { useState } from "react";
import { ChevronDown, UtensilsCrossed, MapPin, Banknote, Leaf, Clock, Package } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cateringFaqs, menuFaqs } from "@/content/faqs";

interface FaqSectionProps {
  variant?: "catering" | "menu";
}

// Brand colors cycling for each FAQ item
const brandColors = [
  { bg: "#D93423", light: "rgba(217,52,35,0.08)", border: "rgba(217,52,35,0.2)", text: "#D93423" },
  { bg: "#03B6AA", light: "rgba(3,182,170,0.08)",  border: "rgba(3,182,170,0.2)",  text: "#03B6AA" },
  { bg: "#993786", light: "rgba(153,55,134,0.08)", border: "rgba(153,55,134,0.2)", text: "#993786" },
  { bg: "#E69B39", light: "rgba(230,155,57,0.08)", border: "rgba(230,155,57,0.2)", text: "#B8780A" },
  { bg: "#E8540A", light: "rgba(232,84,10,0.08)",  border: "rgba(232,84,10,0.2)",  text: "#E8540A" },
  { bg: "#03B6AA", light: "rgba(3,182,170,0.08)",  border: "rgba(3,182,170,0.2)",  text: "#03B6AA" },
  { bg: "#993786", light: "rgba(153,55,134,0.08)", border: "rgba(153,55,134,0.2)", text: "#993786" },
];

const questionIcons: Record<string, React.ElementType> = {
  "What is included in Lehsun catering?":          UtensilsCrossed,
  "Which events do you cater for?":                 UtensilsCrossed,
  "What does catering start from?":                 Banknote,
  "Can I request a bespoke menu?":                  Leaf,
  "Do you cater in Dartford, Bexley and Orpington?": MapPin,
  "Do you use separate kitchens for veg and non-veg food?": Leaf,
  "What is the minimum catering order?":            Package,
  "How do I order from the daily menu?":            Clock,
  "Is the daily menu available for delivery?":      MapPin,
  "What time is the daily menu posted?":            Clock,
  "Can I order individual dishes or do I have to order a set meal?": Package,
};

function AccordionItem({
  question, answer, index,
}: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = questionIcons[question] ?? UtensilsCrossed;
  const color = brandColors[index % brandColors.length];

  return (
    <div
      className="rounded-2xl mb-3 last:mb-0 overflow-hidden border transition-all duration-200"
      style={{
        borderColor: open ? color.bg : "#EAD6A8",
        backgroundColor: open ? color.light : "white",
      }}
    >
      <button
        className="flex w-full items-start gap-4 p-5 text-left cursor-pointer focus-ring"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        {/* Colored icon pill */}
        <div
          className="flex-shrink-0 size-9 rounded-xl flex items-center justify-center transition-all duration-200 mt-0.5"
          style={{
            backgroundColor: open ? color.bg : color.light,
            color: open ? "white" : color.text,
          }}
        >
          <Icon className="size-4" aria-hidden />
        </div>

        {/* Question */}
        <span
          className="flex-1 font-bold text-sm leading-snug pt-1.5 pr-2 transition-colors duration-200"
          style={{ color: open ? color.text : "#1A0600" }}
        >
          {question}
        </span>

        {/* Chevron */}
        <div
          className="flex-shrink-0 size-7 rounded-full flex items-center justify-center mt-1 transition-all duration-300"
          style={{ backgroundColor: open ? color.bg : "#F3E9C8" }}
        >
          <ChevronDown
            className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            style={{ color: open ? "white" : "#5C2A10" }}
            aria-hidden
          />
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <p className="text-sm leading-relaxed pb-5 px-5 pl-[4.25rem]" style={{ color: "#5C2A10" }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection({ variant = "catering" }: FaqSectionProps) {
  const faqs = variant === "menu" ? menuFaqs : cateringFaqs;

  return (
    <section className="py-20 md:py-28 scroll-mt-20" id="faq"
      style={{ backgroundColor: "#FDF8F0" }}>

      <div className="px-5 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              {/* Tile motif header badge */}
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="size-2 rounded-full" style={{ backgroundColor: "#D93423" }} />
                <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#D93423" }}>
                  {variant === "menu" ? "Ordering FAQ" : "Catering FAQ"}
                </p>
                <div className="size-2 rounded-full" style={{ backgroundColor: "#03B6AA" }} />
              </div>

              <h2
                className="font-serif italic font-black text-balance"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1A0600" }}
              >
                {variant === "menu"
                  ? "Everything about ordering"
                  : "Your catering questions, answered"}
              </h2>
              <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#5C2A10" }}>
                {variant === "menu"
                  ? "How the daily menu works, from ordering to delivery."
                  : "Menus, pricing, areas, dietary needs — all here."}
              </p>
            </div>
          </ScrollReveal>

          {/* Color dot legend — decorative */}
          <ScrollReveal delay={60}>
            <div className="flex items-center justify-center gap-2 mb-8">
              {brandColors.slice(0, 5).map((c, i) => (
                <div key={i} className="size-2.5 rounded-full" style={{ backgroundColor: c.bg }} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
