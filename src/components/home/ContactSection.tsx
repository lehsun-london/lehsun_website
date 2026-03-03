import { type DestinationType } from "@/lib/analytics";
import { TrackedLink } from "../analytics/TrackedLink";

function SocialIcon({ type }: { type: 'whatsapp' | 'instagram' | 'facebook' | 'google' }) {
  if (type === 'whatsapp') {
    return (
      <svg aria-hidden className="size-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884" />
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
    label: 'WhatsApp',
    destinationType: 'whatsapp' as const,
  },
  {
    href: 'https://www.instagram.com/lehsun.london',
    icon: 'instagram' as const,
    label: 'Instagram',
    destinationType: 'instagram' as const,
  },
  {
    href: 'https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/',
    icon: 'facebook' as const,
    label: 'Facebook',
    destinationType: 'facebook' as const,
  },
  {
    href: 'https://maps.app.goo.gl/C8JKao4BbBerjfQj8',
    icon: 'google' as const,
    label: 'Google',
    destinationType: 'maps' as const,
  },
];

export function ContactSection() {
  return (
    <section className="bg-[#fffaf4] py-24 border-t border-cream scroll-mt-28" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic font-serif">
            Today&apos;s Specials – North Indian Food in the UK
          </h2>
          <p className="text-slate-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Limited daily food orders — cooked in small batches.
            <br />
            Boldly spiced, freshly prepared, flavours like you remember.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <TrackedLink
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-[1.02] transition-all shadow-xl shadow-green-500/20 focus-ring"
              ctaText="Order on WhatsApp"
              destinationType="whatsapp"
              eventName="click_whatsapp_order"
              href="https://wa.me/c/447768892652"
              placement="contact_top"
              rel="noopener noreferrer"
              target="_blank"
            >
              Order on WhatsApp
            </TrackedLink>
            <TrackedLink
              className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-[#D9381E] transition-colors shadow-xl shadow-primary/20 text-center focus-ring"
              ctaText="View Today's Menu"
              destinationType="whatsapp"
              eventName="click_whatsapp_order"
              href="https://wa.me/c/447768892652"
              placement="contact_top"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Today&apos;s Menu
            </TrackedLink>
          </div>
        </div>

        <div className="bg-cream/70 border border-[#efcaa4] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Planning an Event?</h3>
          <p className="text-slate-700 text-lg md:text-xl mb-8">
            Authentic Indian catering for 15+ guests.
            <br />
            Flavours like you remember. Nostalgia in every bite.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <TrackedLink
              className="w-full md:w-auto bg-[#D9381E] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-[#B52E18] transition-colors shadow-lg focus-ring"
              ctaText="Plan Your Event"
              destinationType="anchor"
              eventName="click_plan_event"
              href="#catering"
              placement="contact_event_card"
            >
              Plan Your Event
            </TrackedLink>
            <TrackedLink
              className="w-full md:w-auto border-2 border-[#D9381E] text-[#D9381E] px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-[#D9381E] hover:text-white transition-all focus-ring"
              ctaText="Message on WhatsApp"
              destinationType="whatsapp"
              eventName="click_whatsapp_message"
              href="https://wa.me/447768892652?text=Hi%20Lehsun%2C%20I%27d%20like%20to%20plan%20an%20event."
              placement="contact_event_card"
              rel="noopener noreferrer"
              target="_blank"
            >
              Message on WhatsApp
            </TrackedLink>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {socialLinks.map((link) => (
            <TrackedLink
              key={link.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-off-white border border-primary/20 text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-colors focus-ring"
              ctaText={link.label}
              destinationType={link.destinationType as DestinationType}
              eventName="click_social"
              href={link.href}
              placement="contact_social_row"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon type={link.icon} />
              {link.label}
            </TrackedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
