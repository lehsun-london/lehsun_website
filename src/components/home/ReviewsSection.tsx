const reviews = [
  {
    text: '"I recently ordered from Leshun and the food brought back so many nostalgic memories. It was incredibly tasty and comforting at the same time. I can’t wait to order again — highly recommended!"',
    author: "- Dr. Apeksha T.",
  },
  {
    text: '"The food was absolutely amazing—a real trip down memory lane! Everything was prepared and packed hygienically, and the flavors were just perfect. Highly recommend!"',
    author: "- Himanshi K.",
  },
  {
    text: '"Just had these awesome fresh out of oven Naan Khatai from Lehsun! These are like drops of heaven and reminds me of my childhood!!!"',
    author: "- Juhi T.",
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-off-white py-24 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 italic font-serif">
            What Our Catering Clients Say
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
