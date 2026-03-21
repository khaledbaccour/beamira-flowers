import { ShoppingBag, Truck, Wand2 } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Click & Collect",
    description:
      "Commandez en ligne et recuperez votre bouquet directement dans notre boutique a Tremblay (93).",
    accent: "from-pink-200 to-pink-100",
  },
  {
    icon: Truck,
    title: "Livraison",
    description:
      "Livraison dans toute la France, fleurs fraiches garanties. Recevez vos fleurs en parfait etat.",
    accent: "from-rose-200 to-rose-100",
  },
  {
    icon: Wand2,
    title: "Sur Mesure",
    description:
      "Bouquets personnalises concus selon vos preferences, pour chaque occasion et chaque emotion.",
    accent: "from-pink-300 to-pink-100",
  },
];

export function Services() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[var(--beamira-secondary)] to-white">
      {/* Subtle decorative background dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(var(--beamira-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading area with decorative elements */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block h-px w-12 bg-gradient-to-r from-transparent to-[var(--beamira-primary)]" />
            <span
              className="uppercase text-xs font-medium tracking-[0.2em] text-[var(--beamira-primary)]"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Ce que nous offrons
            </span>
            <span className="block h-px w-12 bg-gradient-to-l from-transparent to-[var(--beamira-primary)]" />
          </div>
          <h2 className="heading-lg text-[var(--beamira-dark)] mb-4">
            Nos Services
          </h2>
          <p
            className="max-w-md mx-auto text-[var(--beamira-text-light)] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Un savoir-faire artisanal au service de vos plus belles emotions
            florales.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border wrapper */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[var(--beamira-primary)] via-[var(--beamira-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card body */}
              <div className="relative bg-white rounded-3xl p-10 border border-[var(--beamira-accent)] shadow-sm group-hover:shadow-xl group-hover:shadow-pink-100/50 transition-all duration-500 group-hover:-translate-y-1.5 h-full flex flex-col">
                {/* Left accent bar */}
                <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-[var(--beamira-primary)] to-[var(--beamira-accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container */}
                <div className="mb-7">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon
                      className="w-6 h-6 text-[var(--beamira-primary)] group-hover:text-[var(--beamira-primary-hover)] transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="heading-md text-[var(--beamira-dark)] mb-3 group-hover:text-[var(--beamira-primary-hover)] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Subtle divider */}
                <div className="w-8 h-px bg-[var(--beamira-primary)] opacity-30 mb-4 group-hover:w-12 group-hover:opacity-60 transition-all duration-500" />

                {/* Description */}
                <p
                  className="text-[var(--beamira-text-light)] leading-[1.8] text-[0.938rem] flex-1"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
