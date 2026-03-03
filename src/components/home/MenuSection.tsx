import Image from "next/image";

const dishes = [
  {
    alt: "Nalli Nihari",
    image: "/assets/generated/nalli-nihari.png",
    title: "Nalli Nihari",
    note: "Slow-cooked mutton shank in a deeply spiced, rich gravy—silky marrow, intense aroma, pure old-Delhi indulgence.",
    borderClass: "border-[#E6A21A]",
  },
  {
    alt: "Dal Bukhara",
    image: "/assets/generated/dal-bukhara.png",
    title: "Dal Bukhara",
    note: "Black lentils slow-cooked overnight and finished with rich cream and butter for a decadent, smoky, and classic flavor.",
    borderClass: "border-[#D9381E]",
  },
  {
    alt: "Butter Pav Bhaji",
    image: "/assets/food/pav-bhaji-1400.jpg",
    title: "Butter Pav Bhaji",
    note: "Buttery mashed vegetable curry simmered with spices, vibrant and full of Mumbai flavour.",
    borderClass: "border-[#F28C28]",
  },
  {
    alt: "Lehsun's Royal Thaali",
    image: "/assets/food/lehsuns-royal-thaali.jpg",
    title: "Lehsun's Royal Thaali",
    note: "Experience royalty with creamy Daal Bukhara, rich Malai Kofta, and aromatic Kaju Paneer Pulao.",
    borderClass: "border-[#D9381E]",
  },
];

export function MenuSection() {
  return (
    <section
      className="bg-[#FFF8F0] py-24 px-6 lg:px-20 relative scroll-mt-28"
      id="menu"
    >
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4 italic font-serif">
          Signature North Indian Dishes
        </h2>
        <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
          Classic favourites, cooked with depth and care.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
        {dishes.map((dish) => (
          <div
            key={dish.title}
            className={`group bg-white rounded-2xl overflow-hidden border border-cream border-b-4 hover:shadow-2xl transition-all ${dish.borderClass}`}
          >
            <div className="h-64 overflow-hidden relative">
              <Image
                alt={dish.alt}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={dish.image}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                {dish.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {dish.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
