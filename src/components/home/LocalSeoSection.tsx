export function LocalSeoSection() {
  const areas = [
    "Dartford",
    "Ebbsfleet Valley",
    "Gravesend",
    "Swanley",
    "Bexley",
  ];
  const events = [
    "Birthday parties",
    "House parties",
    "Anniversary dinners",
    "Festive gatherings",
    "Corporate lunches and office events",
  ];
  const trustSignals = [
    "Based in Ebbsfleet Valley, DA10 1GG",
    "Minimum order size of 15 guests",
    "Catering available for 15 to 300 guests",
    "Delivery and setup support for event orders",
    "5-star hygiene rating displayed on site",
  ];

  return (
    <section className="bg-cream py-20 px-6 lg:px-20 border-t border-[#eec8a0]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-balance text-4xl md:text-5xl font-black text-slate-900 mb-8">
          North Indian Catering in Dartford, Ebbsfleet Valley &amp; Nearby Areas
        </h2>

        <div className="text-slate-800 text-lg leading-relaxed space-y-5">
          <p>
            Lehsun is a North Indian catering business based in Ebbsfleet
            Valley, Kent. We focus on event catering for customers who want
            proper North Indian flavour for birthdays, home celebrations,
            festive gatherings and corporate events in Dartford and the
            surrounding area.
          </p>
          <p>
            Our menus are built around dishes people genuinely remember:
            slow-cooked gravies, bold spice, rich dals, breads, rice dishes and
            comforting North Indian classics that work well for family-style
            event catering. Whether the event is at home, at work or at a hired
            venue, the focus stays the same: proper flavour, generous portions
            and food that suits a gathering.
          </p>
          <p>
            If you&apos;re searching for party catering in Dartford, Indian
            catering in Ebbsfleet Valley, or North Indian catering near you, we
            want this page to answer the practical questions hosts usually have:
            where we cover, what events we handle, and what kind of setup to
            expect.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-[#efcaa4] bg-[#fff7ef] p-8">
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              Areas We Serve
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dartford and Ebbsfleet Valley are our primary focus, with nearby
              coverage for surrounding towns depending on event size and
              booking availability.
            </p>
            <ul className="space-y-2 text-slate-800">
              {areas.map((area) => (
                <li key={area}>• {area}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#efcaa4] bg-[#fff7ef] p-8">
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              Types of Events We Cater
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We design menus and portions for gatherings where hosts want food
              that feels generous, familiar and celebration-ready.
            </p>
            <ul className="space-y-2 text-slate-800">
              {events.map((event) => (
                <li key={event}>• {event}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-[#efcaa4] bg-white p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Why Choose Lehsun for Catering in Dartford and Ebbsfleet Valley?
          </h3>
          <p className="text-slate-700 text-lg leading-relaxed">
            Hosts usually need three things from an event caterer: food that
            guests remember, communication that stays clear before the event,
            and delivery that feels dependable on the day. That is exactly what
            we aim to provide. We prepare North Indian food in small batches,
            help customers plan for realistic guest counts, and support event
            setups that need more than just a takeaway order.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl bg-[#fff7ef] px-5 py-4 text-sm font-semibold text-slate-700"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div
            className="relative w-full overflow-hidden rounded-2xl border-4 border-white shadow-xl"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.037515223512!2d0.2981533765320587!3d51.43910491569045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b74bf97b3043%3A0xfe7b3d927e4704c6!2sLehsun%20%E2%80%93%20Nostalgic%20North%20Indian%20Catering!5e0!3m2!1sen!2suk!4v1772539173918!5m2!1sen!2suk"
              title="Lehsun – Nostalgic North Indian Catering's location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
