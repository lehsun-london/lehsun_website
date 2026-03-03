import Image from 'next/image';

function SocialDot({ label }: { label: string }) {
  if (label === 'Instagram') return <span aria-hidden className="text-[#E1306C]">●</span>;
  if (label === 'Facebook') return <span aria-hidden className="text-[#1877F2]">●</span>;
  if (label === 'Google Page') return <span aria-hidden className="text-[#EA4335]">●</span>;
  return <span aria-hidden className="text-[#2563EB]">●</span>;
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
              <SocialDot label={link.label} />
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">© 2026 Lehsun</p>
      </div>
    </footer>
  );
}
