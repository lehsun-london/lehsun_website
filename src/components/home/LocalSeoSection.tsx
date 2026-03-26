export function LocalSeoSection() {
  const areas = [
    "Ebbsfleet Valley",
    "Dartford",
    "Gravesend",
    "Northfleet",
    "Nearby Kent",
  ];
  const eventFit = [
    "Private parties",
    "Birthdays",
    "Family gatherings",
    "Small corporate events",
    "15+ guests",
  ];

  return (
    <section
      className="bg-cream py-20 px-6 lg:px-20 border-t border-[#eec8a0] scroll-mt-28"
      id="areas"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div>
            <span className="text-vermillion font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Where We Cater
            </span>
            <h2 className="text-balance text-4xl md:text-5xl font-black text-slate-900 mb-6">
              North Indian Catering in Dartford, Gravesend &amp; Northfleet
            </h2>

            <div className="text-slate-800 text-lg leading-relaxed space-y-5 max-w-[40rem]">
              <p>
                Based in Ebbsfleet Valley, Lehsun provides North Indian
                catering across Dartford, Gravesend, Northfleet and nearby Kent
                for private parties, birthdays and events.
              </p>
              <p>
                Families across Dartford, Gravesend and Northfleet choose
                Lehsun when they want proper North Indian flavours for
                birthdays, gatherings and celebrations.
              </p>
              <p>
                Whether it&apos;s a house party in Dartford, a family gathering
                in Gravesend, or a celebration in Northfleet, we bring flavours
                like back home in a format that feels warm, reliable and
                event-ready.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-[#efcaa4] bg-[#fff7ef] p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  Areas We Serve
                </h3>
                <ul className="space-y-2 text-slate-800">
                  {areas.map((area) => (
                    <li key={area}>• {area}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-[#efcaa4] bg-[#fff7ef] p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  Best Suited For
                </h3>
                <ul className="space-y-2 text-slate-800">
                  {eventFit.map((event) => (
                    <li key={event}>• {event}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <article className="rounded-[28px] border border-[#efcaa4] bg-white p-6 shadow-xl shadow-[#00000012]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vermillion">
              Based in Ebbsfleet Valley
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">
              A local trust base for nearby events
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Lehsun is rooted in Ebbsfleet Valley, with regular catering
              coverage across the nearby places families book from most often.
            </p>
            <div
              className="relative mt-6 w-full overflow-hidden rounded-2xl border-4 border-[#fff7ef] shadow-lg grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              style={{ paddingTop: "60%" }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.037515223512!2d0.2981533765320587!3d51.43910491569045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b74bf97b3043%3A0xfe7b3d927e4704c6!2sLehsun%20%E2%80%93%20Nostalgic%20North%20Indian%20Catering!5e0!3m2!1sen!2suk!4v1772539173918!5m2!1sen!2suk"
                title="Lehsun location map"
              />
            </div>
            <div className="mt-5 rounded-2xl bg-[#fff7ef] px-5 py-4 text-sm font-semibold text-slate-700">
              28 Portbridge Gardens, Ebbsfleet Valley, DA10 1GG
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
