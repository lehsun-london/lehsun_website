const dishes = [
  {
    alt: 'Biryani',
    image: '/assets/stitch/lehsun-branded-final/dish-biryani.png',
    title: 'Saffron Infused Biryani',
    note: 'Aromatic long-grain basmati with premium Kashmiri saffron.',
    buttonClass: 'bg-[#F28C28]',
  },
  {
    alt: 'Sea Bass',
    image: '/assets/stitch/lehsun-branded-final/dish-seabass.png',
    title: 'Mustard Gold Sea Bass',
    note: 'Wild-caught sea bass with stone-ground mustard crust.',
    buttonClass: 'bg-[#D9381E]',
  },
  {
    alt: 'Dal',
    image: '/assets/stitch/lehsun-branded-final/dish-dal.png',
    title: 'Garlic Tempering Dal',
    note: 'Slow-cooked black lentils finished with burnt garlic.',
    buttonClass: 'bg-[#E6A21A]',
  },
  {
    alt: 'Prawns',
    image: '/assets/stitch/lehsun-branded-final/dish-prawns.png',
    title: 'Vermillion Spice Prawns',
    note: 'King prawns in a fiery vermillion chili glaze.',
    buttonClass: 'bg-[#D9381E]',
  },
];

export function MenuSection() {
  return (
    <section className="bg-[#FFF8F0] py-24 px-6 lg:px-20 relative" id="menu">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4 italic font-serif">Signature Dishes</h2>
        <div className="w-24 h-1 bg-primary mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
        {dishes.map((dish) => (
          <div key={dish.title} className="group bg-white rounded-2xl overflow-hidden border border-cream hover:shadow-2xl transition-all">
            <div className="h-64 overflow-hidden">
              <img
                alt={dish.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={dish.image}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{dish.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{dish.note}</p>
              <button className={`w-full text-white py-2 rounded-lg font-bold text-sm uppercase ${dish.buttonClass}`}>
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
