import { TrackedLink } from "../analytics/TrackedLink";

const googleReviewsUrl =
  "https://www.google.com/maps/place/Lehsun+%E2%80%93+Nostalgic+North+Indian+Catering/@51.4391298,0.2981501,17z/data=!4m8!3m7!1s0x47d8b74bf97b3043:0xfe7b3d927e4704c6!8m2!3d51.4391265!4d0.300725!9m1!1b1!16s%2Fg%2F11x7whmsl4?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    author: "Anudeet M",
    age: "5 months ago",
    text: "We ordered from Lehsun - Nostalgic North Indian Catering for our housewarming, and it made the occasion even more special. The chole, dal makhni, dum aloo, puri, pulao, and moong dal halwa were all cooked to perfection - flavorful, homely, and truly nostalgic. Delivery was timely, portions were generous, and our guests kept complimenting the food. Highly recommend them for anyone looking for authentic North Indian catering.",
  },
  {
    author: "Dr Apeksha Tiwari",
    age: "4 months ago",
    text: "I recently ordered from Leshun and the food brought back so many nostalgic memories. It was incredibly tasty and comforting at the same time. I can't wait to order again - highly recommended!",
  },
  {
    author: "Himanshi Khurana",
    age: "6 months ago",
    text: "The food was absolutely amazing-a real trip down memory lane! Everything was prepared and packed hygienically, and the flavors were just perfect. Highly recommend!",
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-off-white py-24 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 italic font-serif">
            What Customers Say on Google
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 shadow-lg"
            >
              <div
                className="flex text-mustard mb-4 text-lg"
                aria-label="5 star review"
              >
                <span>★★★★★</span>
              </div>
              <div className="mb-4">
                <p className="font-black text-lg text-slate-900">
                  {review.author}
                </p>
                <p className="text-sm font-medium text-slate-500">
                  {review.age}
                </p>
              </div>
              <p className="mb-6 flex-1 text-slate-600 italic leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <TrackedLink
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1A73E8] transition-colors hover:text-[#1558B0] focus-ring rounded-sm"
                ctaText={`View ${review.author} review on Google`}
                destinationType="maps"
                eventName="click_social"
                href={googleReviewsUrl}
                placement="reviews_card"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  aria-hidden
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F0FE] text-xs font-black text-[#1A73E8]"
                >
                  G
                </span>
                View on Google
              </TrackedLink>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <TrackedLink
            className="inline-flex items-center gap-3 rounded-full bg-[#1A73E8] px-8 py-4 font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-colors hover:bg-[#1558B0] focus-ring"
            ctaText="Read More Reviews on Google"
            destinationType="maps"
            eventName="click_social"
            href={googleReviewsUrl}
            placement="reviews_section"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              aria-hidden
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-[#1A73E8]"
            >
              G
            </span>
            Read More Reviews on Google
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
