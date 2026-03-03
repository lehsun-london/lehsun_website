const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#catering', label: 'Catering' },
];

export function NavSection() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background-light/90 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          alt="Lehsun Logo"
          className="size-12 object-contain"
          src="/assets/stitch/lehsun-branded-final/logo.png"
        />
        <h2 className="text-2xl font-black uppercase tracking-tighter text-vermillion">Lehsun</h2>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a
            key={link.href}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button className="bg-primary hover:bg-mustard text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
        Order Now
      </button>
    </header>
  );
}
