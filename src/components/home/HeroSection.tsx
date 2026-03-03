import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <Image
        alt="North Indian feast with rich gravies and warm festive lighting"
        className="absolute inset-0 z-0 object-cover"
        fill
        priority
        sizes="100vw"
        src="/assets/stitch/lehsun-branded-final/hero-bg.png"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#2b1307]/40 via-[#3d1c0f]/50 to-[#2a1309]/75" />
      <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center gap-4">
        <h1 className="text-balance text-primary text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
          Authentic North Indian Catering in the UK
        </h1>
        <p className="text-balance text-white italic font-serif text-xl md:text-2xl leading-tight">
          Flavours like you remember.
        </p>
        <p className="text-white text-base font-medium max-w-[52ch] mx-auto opacity-95 leading-relaxed">
          Indian catering for private parties &amp; corporate events in
          Ebbsfleet Valley, Dartford, Gravesend and nearby areas.
          <br />
          Slow-cooked gravies • Bold spice • Nostalgia in every bite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <a
            className="bg-[#D9381E] text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest hover:bg-[#F28C28] transition-colors shadow-lg shadow-vermillion/20 flex items-center justify-center focus-ring"
            href="#catering"
          >
            Plan Your Event
          </a>
          <a
            className="border-2 border-white text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#D9381E] transition-all flex items-center justify-center focus-ring"
            href="#contact"
          >
            View Today&apos;s Menu
          </a>
        </div>
        <p className="text-sm md:text-base text-white/90 font-medium">
          Minimum 15+ guests
        </p>
      </div>
      <a
        className="absolute bottom-10 left-1/2 -translate-x-1/2 motion-safe:animate-bounce focus-ring rounded-sm"
        href="#about"
      >
        <span aria-hidden className="text-white text-3xl">
          ↓
        </span>
      </a>
    </section>
  );
}
