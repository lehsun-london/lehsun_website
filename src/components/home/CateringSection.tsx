const points = ['Bespoke Menu Curation', 'On-site Live Tandoor Stations', 'Sommelier-Guided Spice Pairings'];

export function CateringSection() {
  return (
    <section className="bg-vermillion text-white py-24 px-6 lg:px-20 relative" id="catering">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter">
            Elevate Your Events
          </h2>
          <p className="text-white/80 text-xl mb-12">
            Lehsun brings the grandeur of Indian royal kitchens to your private gatherings, corporate events, and
            weddings.
          </p>
          <ul className="space-y-6">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-mustard bg-white rounded-full p-1 font-bold">check</span>
                <span className="text-lg font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <button className="mt-12 bg-white text-vermillion px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cream transition-colors shadow-xl">
            Inquire Now
          </button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 border-8 border-white">
            <img
              alt="Catering"
              className="w-full h-full object-cover"
              data-alt="Elegant table setting with traditional Indian brass serveware"
              src="/assets/stitch/lehsun-branded-final/catering-table.png"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mustard rounded-full flex items-center justify-center border-4 border-dashed border-white text-white p-6 text-center rotate-[-15deg]">
            <p className="text-xs font-black uppercase tracking-widest">Premium Catering • Est 1994</p>
          </div>
        </div>
      </div>
    </section>
  );
}
