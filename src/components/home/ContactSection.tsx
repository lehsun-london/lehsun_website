export function ContactSection() {
  return (
    <section className="bg-white py-24 border-t border-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic font-serif">Ready for a Feast?</h2>
        <p className="text-slate-500 text-lg mb-12">Order now for home delivery or quick pickup at our storefront.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            className="w-full md:w-auto flex items-center justify-center gap-4 bg-[#25D366] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-green-500/20"
            href="#"
          >
            <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
          <div className="flex items-center gap-4 text-slate-400 font-bold uppercase tracking-widest text-sm">
            <span className="h-px w-8 bg-slate-200" />
            or
            <span className="h-px w-8 bg-slate-200" />
          </div>
          <button className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
            Call to Pickup
          </button>
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
          <div className="flex gap-4 p-6 bg-cream/30 rounded-2xl border border-cream">
            <span className="material-symbols-outlined text-primary">schedule</span>
            <div>
              <h4 className="font-bold">Opening Hours</h4>
              <p className="text-sm text-slate-600">Mon - Sun: 11:00 AM - 10:30 PM</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-cream/30 rounded-2xl border border-cream">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <div>
              <h4 className="font-bold">Location</h4>
              <p className="text-sm text-slate-600">12 Spice Garden Lane, Food City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
