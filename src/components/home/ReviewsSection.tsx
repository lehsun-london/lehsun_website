const reviews = [
  {
    text: '"The Biryani reminded me of the lanes in Old Delhi. Properly spiced and the saffron aroma is just incredible."',
    author: '- Ananya R.',
  },
  {
    text: '"Lehsun handled our corporate event perfectly. The live Tandoor station was the highlight of the evening!"',
    author: '- Vikram K.',
  },
  {
    text: '"Best Sea Bass I\'ve had in a long time. The mustard crust is a game changer. Truly authentic regional flavors."',
    author: '- Sarah M.',
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-off-white py-24 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 italic font-serif">Customer Reviews</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.author} className="bg-white p-8 rounded-2xl border border-primary/10 shadow-lg">
              <div className="flex text-mustard mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
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
