import { faqs } from "@/content/faqs";

export function FaqSection() {
  return (
    <section
      className="bg-[#fff7ef] py-20 px-6 lg:px-20 border-t border-[#f0d1b4] scroll-mt-28"
      id="faq"
    >
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
