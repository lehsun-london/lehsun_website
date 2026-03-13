const faqs = [
  {
    question: "Do you provide North Indian catering in Dartford?",
    answer:
      "Yes. We provide North Indian catering in Dartford for birthdays, family gatherings, house parties, festive celebrations and corporate events.",
  },
  {
    question: "Do you cater private parties in Ebbsfleet Valley?",
    answer:
      "Yes. Lehsun is based in Ebbsfleet Valley, Kent, and regularly caters private parties and home events locally.",
  },
  {
    question: "What types of events do you cater?",
    answer:
      "We cater birthdays, anniversaries, family gatherings, festive celebrations and corporate events, typically for 15 to 300 guests.",
  },
  {
    question: "Which areas do you cover outside Dartford and Ebbsfleet Valley?",
    answer:
      "We also cater in Gravesend, Swanley, Bexley and nearby Kent areas, depending on the event size and booking requirements.",
  },
  {
    question: "Do you deliver and set up catering for events?",
    answer:
      "Yes. We can deliver and set up catering for event orders, so hosts can focus on their guests while we handle the food side.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-[#fff7ef] py-20 px-6 lg:px-20 border-t border-[#f0d1b4]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10">
          North Indian Catering FAQs
        </h2>
        <div className="grid gap-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl bg-white border border-[#efcaa4] p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-black text-[#1f120d] mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
