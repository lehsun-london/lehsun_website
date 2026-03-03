const features = [
  {
    icon: 'history_edu',
    iconClass: 'text-[#F28C28]',
    borderClass: 'border-[#E6A21A]',
    title: 'Authentic Roots',
    body: 'Recipes passed down through generations of home cooks, preserving the essence of regional heritage.',
  },
  {
    icon: 'skillet',
    iconClass: 'text-[#D9381E]',
    borderClass: 'border-[#D9381E]',
    title: 'Regional Mastery',
    body: 'Specific spice blends sourced from native terrains to ensure every bite is an authentic journey.',
  },
  {
    icon: 'favorite',
    iconClass: 'text-[#E6A21A]',
    borderClass: 'border-[#F28C28]',
    title: 'Soul Food',
    body: 'Designed for celebrations that demand the best, cooked with patience and pure intention.',
  },
];

export function AboutSection() {
  return (
    <section
      className="bg-cream py-24 px-6 lg:px-20 relative overflow-hidden text-center bg-[url('{{DATA:IMAGE:IMAGE_3}}')] bg-repeat bg-[length:200px] bg-opacity-5"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <span className="text-vermillion font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Heritage</span>
        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">Why Lehsun?</h2>
        <p className="text-slate-700 text-xl md:text-2xl font-medium leading-relaxed mb-10">
          Because some flavours should never fade... We bring the soul of regional India to your table with
          uncompromising authenticity. We believe in the magic of slow-cooking and the honesty of fresh ingredients.
        </p>
        <div className="flex justify-center gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`p-8 bg-white/80 backdrop-blur rounded-2xl border-b-4 shadow-xl ${feature.borderClass}`}
              >
                <span className={`material-symbols-outlined text-5xl mb-4 ${feature.iconClass}`}>{feature.icon}</span>
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
