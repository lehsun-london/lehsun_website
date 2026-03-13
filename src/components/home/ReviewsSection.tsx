const reviews = [
  {
    text: '"We booked Lehsun for a family gathering near Dartford and the food was full of proper North Indian flavour. Guests kept asking where the catering was from."',
    author: "- Dr. Apeksha T.",
  },
  {
    text: '"Lehsun catered our event in Ebbsfleet Valley and everything arrived well packed, on time and full of flavour. It genuinely felt like food from home."',
    author: "- Himanshi K.",
  },
  {
    text: '"From the gravies to the breads, the spread was ideal for a house party. The menu felt thoughtful and the setup made hosting much easier."',
    author: "- Juhi T.",
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-off-white py-24 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 italic font-serif">
            What Clients Say About Our Catering
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-white p-8 rounded-2xl border border-primary/10 shadow-lg max-w-[38ch] mx-auto w-full"
            >
              <div
                className="flex text-mustard mb-4 text-lg"
                aria-label="5 star review"
              >
                <span>★★★★★</span>
              </div>
              <p className="text-slate-600 italic mb-6">{review.text}</p>
              <p className="font-bold text-slate-900">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
