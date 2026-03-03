import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      <Image
        alt="High quality overhead shot of diverse Indian spices and dishes"
        className="absolute inset-0 z-0 object-cover"
        fill
        priority
        sizes="100vw"
        src="/assets/stitch/lehsun-branded-final/hero-bg.png"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/60" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-primary text-5xl md:text-8xl font-black leading-tight tracking-tight mb-6">
          Authentic Flavors,
          <br />
          <span className="text-white italic font-serif">Modern Soul</span>
        </h1>
        <p className="text-white text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
          Experience the essence of Indian heritage through the curated lens of Lehsun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="bg-[#D9381E] text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest hover:bg-[#F28C28] transition-colors shadow-lg shadow-vermillion/20 flex items-center justify-center focus-ring"
            href="#menu"
          >
            Explore Menu
          </a>
          <a
            className="border-2 border-white text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#D9381E] transition-all flex items-center justify-center focus-ring"
            href="#about"
          >
            Our Story
          </a>
        </div>
      </div>
      <a className="absolute bottom-10 left-1/2 -translate-x-1/2 motion-safe:animate-bounce focus-ring rounded-sm" href="#about">
        <span aria-hidden className="text-white text-3xl">↓</span>
      </a>
    </section>
  );
}
