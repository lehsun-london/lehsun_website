import Image from "next/image";
import { TrackedLink } from "../analytics/TrackedLink";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
];

export function NavSection() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background-light/90 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          alt="Lehsun Logo"
          className="size-12 object-contain"
          height={48}
          src="/assets/stitch/lehsun-branded-final/logo.png"
          width={48}
        />
        <h2 className="text-2xl font-black uppercase tracking-tighter text-vermillion">
          Lehsun
        </h2>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors focus-ring rounded-sm"
            ctaText={link.label}
            destinationType="anchor"
            eventName="click_scroll_section"
            href={link.href}
            placement="nav_header"
          >
            {link.label}
          </TrackedLink>
        ))}
      </nav>
      <TrackedLink
        className="bg-primary hover:bg-mustard text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/20 focus-ring"
        ctaText="Contact Us"
        destinationType="anchor"
        eventName="click_contact_us"
        href="#contact"
        placement="nav_header"
      >
        Contact Us
      </TrackedLink>
    </header>
  );
}
