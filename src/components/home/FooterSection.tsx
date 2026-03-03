import Image from 'next/image';

function SocialIcon({ label }: { label: string }) {
  if (label === 'Website') {
    return (
      <svg aria-hidden className="size-3.5 text-[#60A5FA]" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.2 2.4 3.4 5.6 3.4 9S14.2 18.6 12 21M12 3C9.8 5.4 8.6 8.6 8.6 12s1.2 6.6 3.4 9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (label === 'Instagram') {
    return (
      <svg aria-hidden className="size-3.5 text-[#E1306C]" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (label === 'Facebook') {
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

const links = [
  { href: 'https://www.lehsun.co.uk', label: 'Website' },
  { href: 'https://www.instagram.com/lehsun.london', label: 'Instagram' },
  { href: 'https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/', label: 'Facebook' },
  { href: 'https://maps.app.goo.gl/C8JKao4BbBerjfQj8', label: 'Google Page' },
];

export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6 lg:px-20 border-t-4 border-[#F28C28]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            alt="Lehsun"
            className="size-8 object-contain filter invert"
            height={32}
            src="/assets/stitch/lehsun-branded-final/logo.png"
            width={32}
          />
          <h2 className="text-lg font-black uppercase tracking-tighter">Lehsun</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest opacity-80">
          {links.map((link) => (
            <a
              key={link.label}
              className="hover:text-[#F28C28] transition-colors focus-ring rounded-sm inline-flex items-center gap-2"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon label={link.label} />
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">© 2026 Lehsun</p>
      </div>
    </footer>
  );
}
