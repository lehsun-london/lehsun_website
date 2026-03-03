import Image from 'next/image';

const dishes = [
  {
    alt: 'Biryani',
    image: '/assets/stitch/lehsun-branded-final/dish-biryani.png',
    title: 'Saffron Infused Biryani',
    note: 'Aromatic long-grain basmati with premium Kashmiri saffron.',
    borderClass: 'border-[#E6A21A]',
  },
  {
    alt: 'Sea Bass',
    image: '/assets/stitch/lehsun-branded-final/dish-seabass.png',
    title: 'Mustard Gold Sea Bass',
    note: 'Wild-caught sea bass with stone-ground mustard crust.',
    borderClass: 'border-[#D9381E]',
  },
  {
    alt: 'Dal',
    image: '/assets/stitch/lehsun-branded-final/dish-dal.png',
    title: 'Garlic Tempering Dal',
    note: 'Slow-cooked black lentils finished with burnt garlic.',
    borderClass: 'border-[#F28C28]',
  },
  {
    alt: 'Prawns',
    image: '/assets/stitch/lehsun-branded-final/dish-prawns.png',
    title: 'Vermillion Spice Prawns',
    note: 'King prawns in a fiery vermillion chili glaze.',
    borderClass: 'border-[#D9381E]',
  },
];

export function MenuSection() {
  return (
    <section className="bg-[#FFF8F0] py-24 px-6 lg:px-20 relative scroll-mt-28" id="menu">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4 italic font-serif">Signature Dishes</h2>
        <div className="w-24 h-1 bg-primary mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
        {dishes.map((dish) => (
          <div
            key={dish.title}
            className={`group bg-white rounded-2xl overflow-hidden border border-cream border-b-4 hover:shadow-2xl transition-all ${dish.borderClass}`}
          >
            <div className="h-64 overflow-hidden relative">
              <Image
                alt={dish.alt}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={dish.image}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{dish.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{dish.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
