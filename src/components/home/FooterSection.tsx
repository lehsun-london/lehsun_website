"use client";

import Image from "next/image";
import { openCookieBanner } from "@/components/privacy/CookieConsentBanner";
import { TrackedLink } from "../analytics/TrackedLink";

function SocialIcon({ label }: { label: string }) {
  if (label === "WhatsApp") {
    return (
      <svg
        aria-hidden
        className="size-3.5 text-[#25D366]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg
        aria-hidden
        className="size-3.5 text-[#E1306C]"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3.6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg aria-hidden className="size-3.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#1877F2" />
        <path
          d="M13.3 19v-6.1h2l.3-2.3h-2.3V9.1c0-.7.2-1.2 1.2-1.2h1.2V5.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.8H9v2.3h2V19h2.3Z"
          fill="#fff"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden className="size-3.5" viewBox="0 0 24 24">
      <path
        d="M12 2c3.7 0 6.8 3 6.8 6.8 0 4.8-6.8 13.3-6.8 13.3S5.2 13.6 5.2 8.8C5.2 5 8.3 2 12 2Z"
        fill="#EA4335"
      />
      <circle cx="12" cy="8.8" r="2.8" fill="#FBBC05" />
      <path
        d="M12 2a6.8 6.8 0 0 1 5.2 2.4l-2.4 1.9A3.7 3.7 0 0 0 12 5.1V2Z"
        fill="#4285F4"
      />
      <path
        d="M6.8 4.4A6.8 6.8 0 0 1 12 2v3.1a3.7 3.7 0 0 0-2.8 1.2L6.8 4.4Z"
        fill="#34A853"
      />
    </svg>
  );
}

const links = [
  {
    href: "https://wa.me/c/447768892652",
    label: "WhatsApp",
    destinationType: "whatsapp" as const,
  },
  {
    href: "https://www.instagram.com/lehsun.london",
    label: "Instagram",
    destinationType: "instagram" as const,
  },
  {
    href: "https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/",
    label: "Facebook",
    destinationType: "facebook" as const,
  },
  {
    href: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
    label: "Google",
    destinationType: "maps" as const,
  },
];

export function FooterSection() {
  return (
    <footer className="bg-[#1f120d] text-white py-10 px-6 lg:px-20 border-t-4 border-[#F28C28]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 md:self-start">
          <Image
            alt="Lehsun"
            className="size-8 object-contain filter invert"
            height={32}
            src="/assets/stitch/lehsun-branded-final/logo.png"
            width={32}
          />
          <h2 className="text-lg font-black uppercase tracking-tighter">
            Lehsun
          </h2>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg md:text-xl font-serif italic text-cream mb-3">
            Flavours like you remember.
          </p>
          <p className="text-sm text-white/85 leading-relaxed">
            Lehsun – Nostalgic North Indian Catering
            <br />
            28 Portbridge Gardens
            <br />
            Ebbsfleet Valley
            <br />
            DA10 1GG
            <br />
            United Kingdom
            <br />
            <br />
            Phone: +44 7768 892652
            <br />
            <br />
            Serving: Dartford, Ebbsfleet Valley, Gravesend, Orpington, Swanley
            &amp; Bexley
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest opacity-90">
          {links.map((link) => (
            <TrackedLink
              key={link.label}
              className="hover:text-[#F28C28] transition-colors focus-ring rounded-sm inline-flex items-center gap-2"
              ctaText={link.label}
              destinationType={link.destinationType}
              eventName="click_social"
              href={link.href}
              placement="footer_social_row"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon label={link.label} />
              {link.label}
            </TrackedLink>
          ))}
        </div>
        <button
          className="text-[11px] uppercase tracking-[0.2em] text-white/70 underline-offset-4 transition-colors hover:text-[#F28C28] hover:underline"
          onClick={openCookieBanner}
          type="button"
        >
          Cookie Preferences
        </button>
        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] md:self-end">
          © 2026 Lehsun
        </p>
      </div>
    </footer>
  );
}
