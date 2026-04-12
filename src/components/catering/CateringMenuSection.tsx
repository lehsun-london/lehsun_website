"use client";

import { useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cateringMenu, whatsapp } from "@/content/businessInfo";

type Tab = "starters" | "mains" | "rice-breads" | "desserts";
type VegFilter = "veg" | "nonveg";

const tabs: { id: Tab; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Mains" },
  { id: "rice-breads", label: "Rice & Breads" },
  { id: "desserts", label: "Desserts & More" },
];

function DishGrid({ dishes }: { dishes: readonly string[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {dishes.map((dish) => (
        <div key={dish} className="flex items-center gap-2.5 py-2 border-b border-[#E8D5C0]/50">
          <span className="size-1.5 rounded-full bg-[#F5821F] flex-shrink-0" aria-hidden />
          <span className="text-sm text-[#1C0A00] font-medium">{dish}</span>
        </div>
      ))}
    </div>
  );
}

export function CateringMenuSection() {
  const [activeTab, setActiveTab] = useState<Tab>("starters");
  const [vegFilter, setVegFilter] = useState<VegFilter>("veg");

  return (
    <section className="bg-white py-20 md:py-24 px-5 lg:px-10" id="menu">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Full catering menu
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              60+ authentic North Indian dishes to choose from
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-[#E8D5C0] pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-bold transition-colors cursor-pointer border-b-2 -mb-px focus-ring ${
                  activeTab === tab.id
                    ? "border-[#D9381E] text-[#D9381E]"
                    : "border-transparent text-[#6B3A2A] hover:text-[#F5821F]"
                }`}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Veg / Non-Veg toggle — only for starters and mains */}
          {(activeTab === "starters" || activeTab === "mains") && (
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-full border border-[#E8D5C0] bg-[#FFF5E4] p-1">
                {(["veg", "nonveg"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setVegFilter(f)}
                    className={`px-5 py-1.5 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                      vegFilter === f
                        ? "bg-white text-[#1C0A00] shadow-sm"
                        : "text-[#6B3A2A] hover:text-[#1C0A00]"
                    }`}
                    type="button"
                  >
                    {f === "veg" ? "Veg" : "Non-Veg"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Dish content */}
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#E8D5C0] p-7 md:p-9 min-h-[280px]">
            {activeTab === "starters" && (
              vegFilter === "veg"
                ? <DishGrid dishes={cateringMenu.starters.veg} />
                : <DishGrid dishes={cateringMenu.starters.nonVeg} />
            )}
            {activeTab === "mains" && (
              vegFilter === "veg"
                ? <DishGrid dishes={cateringMenu.mains.veg} />
                : (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#6B3A2A] mb-3">Chicken</p>
                      <DishGrid dishes={cateringMenu.mains.nonVeg.chicken} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#6B3A2A] mb-3">Lamb / Goat</p>
                      <DishGrid dishes={cateringMenu.mains.nonVeg.lambGoat} />
                    </div>
                  </div>
                )
            )}
            {activeTab === "rice-breads" && (
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B3A2A] mb-3">Rice</p>
                  <DishGrid dishes={cateringMenu.rice} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B3A2A] mb-3">Breads</p>
                  <DishGrid dishes={cateringMenu.breads} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B3A2A] mb-3">Raita</p>
                  <DishGrid dishes={cateringMenu.raita} />
                </div>
              </div>
            )}
            {activeTab === "desserts" && (
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B3A2A] mb-3">Desserts</p>
                  <DishGrid dishes={cateringMenu.desserts} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6B3A2A] mb-3">Condiments</p>
                  <DishGrid dishes={cateringMenu.condiments} />
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <TrackedLink
              className="inline-flex items-center gap-2 border border-[#E8D5C0] bg-[#FFF5E4] text-[#1C0A00] px-6 py-3 rounded-full text-sm font-semibold hover:border-[#F5821F] hover:text-[#F5821F] transition-colors focus-ring cursor-pointer"
              ctaText="Request Full Brochure"
              destinationType="whatsapp"
              href={whatsapp.brochure}
              intent="menu"
              placement="catering_menu_brochure"
              rel="noopener noreferrer"
              target="_blank"
            >
              Request full brochure on WhatsApp
            </TrackedLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
