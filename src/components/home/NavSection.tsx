"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";
import { whatsapp } from "@/content/businessInfo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/menu", label: "Daily Menu" },
];

export function NavSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#E8D5C0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 focus-ring rounded-sm">
          <Image
            alt="Lehsun Logo"
            className="size-9 object-contain"
            height={36}
            src="/assets/stitch/lehsun-branded-final/logo.png"
            width={36}
          />
          <span className="text-lg font-black uppercase tracking-tight text-[#D9381E]">
            Lehsun
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors focus-ring rounded-sm ${
                  active
                    ? "text-[#D9381E] underline underline-offset-4 decoration-[#D9381E]/50"
                    : "text-[#6B3A2A] hover:text-[#F5821F]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/menu"
            className="text-sm font-semibold text-[#6B3A2A] hover:text-[#2E8B7A] px-4 py-2 rounded-full border border-[#E8D5C0] hover:border-[#2E8B7A] transition-colors focus-ring"
          >
            Daily Menu
          </Link>
          <TrackedLink
            className="bg-[#D9381E] hover:bg-[#F5821F] text-white px-5 py-2 rounded-full text-sm font-bold transition-colors shadow-sm shadow-[#D9381E]/20 focus-ring"
            ctaText="Plan an Event"
            destinationType="whatsapp"
            href={whatsapp.cateringEnquiry}
            intent="lead"
            isPrimaryCta
            placement="nav_header"
            rel="noopener noreferrer"
            target="_blank"
          >
            Plan an Event
          </TrackedLink>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <TrackedLink
            aria-label="Message us on WhatsApp"
            className="flex items-center justify-center size-9 rounded-full bg-[#25D366] text-white shadow focus-ring"
            ctaText="WhatsApp"
            destinationType="whatsapp"
            href={whatsapp.cateringEnquiry}
            intent="lead"
            isPrimaryCta
            placement="nav_mobile_whatsapp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessageCircle className="size-4" aria-hidden />
          </TrackedLink>
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex items-center justify-center size-9 rounded-md text-[#1C0A00] focus-ring cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8D5C0] px-5 py-5 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold py-3 border-b border-[#E8D5C0] transition-colors focus-ring rounded-sm cursor-pointer ${
                  active ? "text-[#D9381E]" : "text-[#6B3A2A] hover:text-[#F5821F]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <TrackedLink
            className="mt-3 w-full text-center bg-[#D9381E] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#F5821F] transition-colors focus-ring cursor-pointer"
            ctaText="Plan an Event"
            destinationType="whatsapp"
            href={whatsapp.cateringEnquiry}
            intent="lead"
            isPrimaryCta
            placement="nav_mobile_menu"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => setMobileOpen(false)}
          >
            Plan an Event
          </TrackedLink>
        </div>
      )}
    </header>
  );
}
