export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6 lg:px-20 border-t-4 border-[#F28C28]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img
            alt="Lehsun"
            className="size-8 object-contain filter invert"
            src="/assets/stitch/lehsun-branded-final/logo.png"
          />
          <h2 className="text-lg font-black uppercase tracking-tighter">Lehsun</h2>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
          <a className="hover:text-[#F28C28] transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-[#F28C28] transition-colors" href="#">
            Terms
          </a>
          <a className="hover:text-[#F28C28] transition-colors" href="#">
            Contact
          </a>
        </div>
        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">© 2024 Lehsun Authentic Regional Flavors</p>
      </div>
    </footer>
  );
}
