const features = [
  {
    icon: '🍲',
    iconClass: '',
    borderClass: 'border-[#E6A21A]',
    title: 'Authentic Regional Recipes',
    body: 'Traditional North Indian dishes cooked in small batches.',
  },
  {
    icon: '🌶',
    iconClass: '',
    borderClass: 'border-[#D9381E]',
    title: 'Bold, Proper Spice',
    body: 'Deep gravies and real tempering — never toned down.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    iconClass: '',
    borderClass: 'border-[#F28C28]',
    title: 'Made for Gatherings',
    body: 'Private parties & corporate events (15+ guests).',
  },
];

export function AboutSection() {
  return (
    <section
      className="bg-cream py-24 px-6 lg:px-20 relative overflow-hidden text-center scroll-mt-28 md:bg-[url('/assets/generated/geometric-motif.png')] md:bg-repeat md:bg-[length:220px] md:bg-[position:center] md:bg-blend-soft-light"
      id="about"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-vermillion font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Why Lehsun</span>
        <h2 className="text-balance text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
          Why Choose Lehsun for North Indian Catering in the UK?
        </h2>
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-10 max-w-[62ch] mx-auto">
          Because proper North Indian food in the UK is hard to find.
          <br />
          <br />
          We cook to take you back — to Delhi winters, loud family dinners,
          <br />
          and the comfort of home in India.
          <br />
          <br />
          Based in Ebbsfleet Valley (DA10 1GG), we proudly serve Dartford, Gravesend and nearby areas.
          <br />
          <br />
          No watered-down gravies. No commercial shortcuts.
          <br />
          Just proper flavour — the way you remember it.
        </p>
        <div className="flex justify-center gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`p-8 bg-white/80 backdrop-blur rounded-2xl border-b-4 shadow-xl ${feature.borderClass}`}
              >
                <span className={`text-5xl mb-4 block ${feature.iconClass}`}>{feature.icon}</span>
                <h3 className="font-black text-xl mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
