import Image from 'next/image';

const points = ['Bespoke Menu Curation', 'On-site Live Tandoor Stations', 'Sommelier-Guided Spice Pairings'];

export function CateringSection() {
  return (
    <section className="bg-vermillion text-white py-24 px-6 lg:px-20 relative scroll-mt-28" id="catering">
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
                <span className="text-mustard bg-white rounded-full px-2 py-1 font-bold leading-none">✓</span>
                <span className="text-lg font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <a
            className="mt-12 bg-white text-vermillion px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cream transition-colors shadow-xl inline-flex focus-ring"
            href="https://wa.me/447768892652?text=Hi%20Lehsun%2C%20I%27d%20like%20to%20inquire%20about%20catering."
            rel="noopener noreferrer"
            target="_blank"
          >
            Inquire Now
          </a>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 border-8 border-white">
            <Image
              alt="Catering"
              className="w-full h-full object-cover"
              height={1200}
              src="/assets/stitch/lehsun-branded-final/catering-table.png"
              width={960}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
