"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cateringFaqs, menuFaqs } from "@/content/faqs";

interface FaqSectionProps {
  variant?: "catering" | "menu";
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E8D5C0]">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer focus-ring"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        <span className="font-semibold text-[#1C0A00] text-sm leading-snug pr-2">{question}</span>
        <ChevronDown
          className={`size-4 text-[#F5821F] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-[#6B3A2A] text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection({ variant = "catering" }: FaqSectionProps) {
  const faqs = variant === "menu" ? menuFaqs : cateringFaqs;

  return (
    <section className="bg-[#FFF5E4] py-20 md:py-28 px-5 lg:px-10 scroll-mt-20" id="faq">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              {variant === "menu" ? "Ordering FAQ" : "Catering FAQ"}
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              {variant === "menu"
                ? "Everything you need to know about ordering"
                : "Everything you need to know about catering"}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="bg-white rounded-2xl border border-[#E8D5C0] shadow-sm px-6">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
