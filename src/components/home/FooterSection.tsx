"use client";

import Image from "next/image";
import Link from "next/link";
import { openCookieBanner } from "@/components/privacy/CookieConsentBanner";
import { TrackedLink } from "../analytics/TrackedLink";
import { contact, whatsapp } from "@/content/businessInfo";

function SocialIcon({ label }: { label: string }) {
  if (label === "WhatsApp") {
    return (
      <svg aria-hidden className="size-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg aria-hidden className="size-3.5 text-[#E1306C]" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (label === "Facebook") {
    return (
      <svg aria-hidden className="size-3.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#1877F2" />
        <path d="M13.3 19v-6.1h2l.3-2.3h-2.3V9.1c0-.7.2-1.2 1.2-1.2h1.2V5.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.8H9v2.3h2V19h2.3Z" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg aria-hidden className="size-3.5" viewBox="0 0 24 24">
      <path d="M12 2c3.7 0 6.8 3 6.8 6.8 0 4.8-6.8 13.3-6.8 13.3S5.2 13.6 5.2 8.8C5.2 5 8.3 2 12 2Z" fill="#EA4335" />
      <circle cx="12" cy="8.8" r="2.8" fill="#FBBC05" />
      <path d="M12 2a6.8 6.8 0 0 1 5.2 2.4l-2.4 1.9A3.7 3.7 0 0 0 12 5.1V2Z" fill="#4285F4" />
      <path d="M6.8 4.4A6.8 6.8 0 0 1 12 2v3.1a3.7 3.7 0 0 0-2.8 1.2L6.8 4.4Z" fill="#34A853" />
    </svg>
  );
}

const socialLinks = [
  { href: whatsapp.catalog, label: "WhatsApp", destinationType: "whatsapp" as const },
  { href: contact.instagram, label: "Instagram", destinationType: "instagram" as const },
  { href: contact.facebook, label: "Facebook", destinationType: "facebook" as const },
  { href: contact.googleMaps, label: "Google", destinationType: "maps" as const },
];

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/menu", label: "Daily Menu" },
];

export function FooterSection() {
  return (
    <footer className="bg-[#1C0A00] text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                alt="Lehsun"
                className="size-8 object-contain brightness-0 invert"
                height={32}
                src="/assets/stitch/lehsun-branded-final/logo.png"
                width={32}
              />
              <span className="text-base font-black uppercase tracking-tight">Lehsun</span>
            </div>
            <p className="text-sm font-serif italic text-[#C8881A] mb-4">
              Flavours like you remember.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Lehsun &ndash; Nostalgic North Indian Catering
              <br />28 Portbridge Gardens, Ebbsfleet Valley
              <br />DA10 1GG, United Kingdom
              <br /><br />
              <TrackedLink
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:text-[#F5821F] transition-colors"
                ctaText={contact.phone}
                destinationType="phone"
                intent="lead"
                isPrimaryCta={false}
                leadType="general"
                placement="footer_call"
              >
                {contact.phone}
              </TrackedLink>
            </p>
          </div>

          {/* Navigation + areas */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 font-bold">Pages</p>
            <nav className="flex flex-col gap-2 mb-6" aria-label="Footer navigation">
              {pageLinks.map((link) =>
                link.href === "/menu" ? (
                  <TrackedLink
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#F5821F] transition-colors font-medium cursor-pointer"
                    ctaText={link.label}
                    destinationType="internal"
                    intent="menu"
                    leadType="menu_enquiry"
                    placement="footer_page_menu"
                    value={15}
                  >
                    {link.label}
                  </TrackedLink>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#F5821F] transition-colors font-medium cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">Areas served</p>
            <nav className="flex flex-col gap-1.5 mb-3" aria-label="Location pages">
              <Link href="/catering/ebbsfleet-valley" className="text-xs text-white/50 hover:text-[#F5821F] transition-colors">Ebbsfleet Valley (DA10)</Link>
              <Link href="/catering/dartford" className="text-xs text-white/50 hover:text-[#F5821F] transition-colors">Dartford (DA1, DA2)</Link>
              <Link href="/catering/gravesend" className="text-xs text-white/50 hover:text-[#F5821F] transition-colors">Gravesend (DA11, DA12)</Link>
            </nav>
            <p className="text-xs text-white/40 leading-relaxed">
              Also covering Northfleet, Bexley, Orpington and nearby Kent.
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">Find us</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <TrackedLink
                  key={link.label}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-[#F5821F] transition-colors focus-ring rounded-sm cursor-pointer py-2"
                  ctaText={link.label}
                  destinationType={link.destinationType}
                  href={link.href}
                  intent={link.label === "WhatsApp" ? "menu" : "social"}
                  leadType={link.label === "WhatsApp" ? "menu_enquiry" : undefined}
                  placement="footer_social"
                  rel="noopener noreferrer"
                  target="_blank"
                  value={link.label === "WhatsApp" ? 15 : undefined}
                >
                  <SocialIcon label={link.label} />
                  {link.label}
                </TrackedLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">&copy; 2026 Lehsun</p>
          <button
            className="text-xs uppercase tracking-[0.2em] text-white/30 hover:text-[#F5821F] hover:underline underline-offset-4 transition-colors cursor-pointer"
            onClick={openCookieBanner}
            type="button"
          >
            Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  );
}
