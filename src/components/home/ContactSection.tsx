function SocialIcon({ type }: { type: 'whatsapp' | 'website' | 'instagram' | 'facebook' | 'google' }) {
  if (type === 'whatsapp') {
    return (
      <svg aria-hidden className="size-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884" />
      </svg>
    );
  }

  if (type === 'website') {
    return (
      <svg aria-hidden className="size-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.2 2.4 3.4 5.6 3.4 9S14.2 18.6 12 21M12 3C9.8 5.4 8.6 8.6 8.6 12s1.2 6.6 3.4 9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (type === 'instagram') {
    return (
      <svg aria-hidden className="size-4 text-[#E1306C]" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'facebook') {
    return (
      <svg aria-hidden className="size-4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#1877F2" />
        <path d="M13.3 19v-6.1h2l.3-2.3h-2.3V9.1c0-.7.2-1.2 1.2-1.2h1.2V5.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.8H9v2.3h2V19h2.3Z" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg aria-hidden className="size-4" viewBox="0 0 24 24">
      <path d="M12 2c3.7 0 6.8 3 6.8 6.8 0 4.8-6.8 13.3-6.8 13.3S5.2 13.6 5.2 8.8C5.2 5 8.3 2 12 2Z" fill="#EA4335" />
      <circle cx="12" cy="8.8" r="2.8" fill="#FBBC05" />
      <path d="M12 2a6.8 6.8 0 0 1 5.2 2.4l-2.4 1.9A3.7 3.7 0 0 0 12 5.1V2Z" fill="#4285F4" />
      <path d="M6.8 4.4A6.8 6.8 0 0 1 12 2v3.1a3.7 3.7 0 0 0-2.8 1.2L6.8 4.4Z" fill="#34A853" />
    </svg>
  );
}

const socialLinks = [
  {
    href: 'https://wa.me/c/447768892652',
    icon: 'whatsapp' as const,
    label: 'WhatsApp Catalog',
  },
  { href: 'https://www.lehsun.co.uk', icon: 'website' as const, label: 'Website' },
  { href: 'https://www.instagram.com/lehsun.london', icon: 'instagram' as const, label: 'Instagram' },
  {
    href: 'https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/',
    icon: 'facebook' as const,
    label: 'Facebook',
  },
  { href: 'https://maps.app.goo.gl/C8JKao4BbBerjfQj8', icon: 'google' as const, label: 'Google Page' },
];

export function ContactSection() {
  return (
    <section className="bg-white py-24 border-t border-cream scroll-mt-28" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic font-serif">Ready for a Feast?</h2>
        <p className="text-slate-500 text-lg mb-12">Order now for home delivery or quick pickup at our storefront.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
          <a
            className="w-full md:w-auto flex items-center justify-center gap-4 bg-[#25D366] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-green-500/20 focus-ring"
            href="https://wa.me/c/447768892652"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884" />
            </svg>
            Order on WhatsApp
          </a>
          <a
            className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 focus-ring"
            href="tel:+447768892652"
          >
            Call to Pickup
          </a>
        </div>
        <div className="flex justify-center mb-10">
          <div className="bg-green-600 text-white p-1 rounded flex items-center shadow-md">
            <div className="bg-white text-black font-black px-2 py-1 text-xs uppercase leading-none mr-2 flex flex-col">
              <span>Food</span>
              <span>Hygiene</span>
            </div>
            <div className="flex flex-col items-center pr-2">
              <div className="flex gap-0.5">
                <span className="size-4 bg-white rounded-full flex items-center justify-center text-[10px] text-green-600 font-bold">1</span>
                <span className="size-4 bg-white rounded-full flex items-center justify-center text-[10px] text-green-600 font-bold">2</span>
                <span className="size-4 bg-white rounded-full flex items-center justify-center text-[10px] text-green-600 font-bold">3</span>
                <span className="size-4 bg-white rounded-full flex items-center justify-center text-[10px] text-green-600 font-bold">4</span>
                <span className="size-6 bg-green-400 rounded-full flex items-center justify-center text-sm text-green-900 font-black border-2 border-white -mt-1">5</span>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-tighter mt-0.5">Very Good</span>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          <div className="flex gap-4 p-6 bg-cream/30 rounded-2xl border border-cream">
            <span aria-hidden className="text-primary">🕒</span>
            <div>
              <h4 className="font-bold">Opening Hours</h4>
              <p className="text-sm text-slate-600">Mon - Sun: 11:00 AM - 10:30 PM</p>
            </div>
          </div>
          <a
            className="flex gap-4 p-6 bg-cream/30 rounded-2xl border border-cream hover:border-primary/40 transition-colors focus-ring"
            href="https://maps.app.goo.gl/C8JKao4BbBerjfQj8"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span aria-hidden className="text-primary">📍</span>
            <div>
              <h4 className="font-bold">Google Maps</h4>
              <p className="text-sm text-slate-600">Find Lehsun in London</p>
            </div>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-off-white border border-primary/20 text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-colors focus-ring"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon type={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
