import Image from "next/image";

function FloralAccentSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Stylized petal cluster */}
      <ellipse cx="60" cy="40" rx="18" ry="30" fill="var(--beamira-primary)" opacity="0.12" transform="rotate(0 60 60)" />
      <ellipse cx="60" cy="40" rx="18" ry="30" fill="var(--beamira-primary)" opacity="0.10" transform="rotate(72 60 60)" />
      <ellipse cx="60" cy="40" rx="18" ry="30" fill="var(--beamira-primary)" opacity="0.08" transform="rotate(144 60 60)" />
      <ellipse cx="60" cy="40" rx="18" ry="30" fill="var(--beamira-primary)" opacity="0.10" transform="rotate(216 60 60)" />
      <ellipse cx="60" cy="40" rx="18" ry="30" fill="var(--beamira-primary)" opacity="0.12" transform="rotate(288 60 60)" />
      <circle cx="60" cy="60" r="8" fill="var(--beamira-primary)" opacity="0.15" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SmallFloralDivider() {
  return (
    <div className="flex items-center gap-3 my-6" aria-hidden="true">
      <span className="block h-px w-8 bg-[var(--beamira-primary)] opacity-30" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="2.5" fill="var(--beamira-primary)" opacity="0.4" />
        <ellipse cx="8" cy="4" rx="2" ry="3.5" fill="var(--beamira-primary)" opacity="0.2" />
        <ellipse cx="8" cy="12" rx="2" ry="3.5" fill="var(--beamira-primary)" opacity="0.2" />
        <ellipse cx="4" cy="8" rx="3.5" ry="2" fill="var(--beamira-primary)" opacity="0.2" />
        <ellipse cx="12" cy="8" rx="3.5" ry="2" fill="var(--beamira-primary)" opacity="0.2" />
      </svg>
      <span className="block h-px w-8 bg-[var(--beamira-primary)] opacity-30" />
    </div>
  );
}

export function About() {
  return (
    <section
      id="a-propos"
      className="bg-brand-light relative overflow-hidden"
    >
      {/* Subtle background pattern — radial dots */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--beamira-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with decorative frame and floral accent */}
          <div className="relative">
            {/* Offset decorative border behind the image */}
            <div className="absolute -bottom-4 -right-4 inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-[var(--beamira-primary)] opacity-20" />

            {/* Floral SVG peeking from top-left corner */}
            <FloralAccentSVG className="absolute -top-10 -left-10 z-20 opacity-70" />

            <div className="rounded-2xl aspect-square overflow-hidden relative shadow-lg">
              <Image
                src="/hero-bouquet.jpg"
                alt="Beamira Flowers - Bouquet artisanal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            {/* Pill-style label with decorative line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-px w-8 bg-[var(--beamira-primary)] opacity-50" />
              <span className="inline-block text-brand uppercase text-xs font-semibold bg-[var(--beamira-accent)] px-3 py-1 rounded-full">
                Notre Histoire
              </span>
            </div>

            <h2 className="heading-lg text-[var(--beamira-dark)] mb-6 text-balance">
              Beamira Flowers
            </h2>

            <p className="body-text mb-4 text-pretty text-lg leading-relaxed first-line:font-semibold first-line:text-[var(--beamira-dark)]">
              Chez Beamira Flowers, nous croyons que chaque bouquet raconte une
              histoire. Depuis notre atelier a Tremblay-en-France, nous
              selectionnons avec soin les plus belles fleurs pour creer des
              compositions uniques qui illuminent vos moments precieux. Notre
              passion pour l&apos;art floral se reflete dans chaque creation,
              confectionnee avec amour et attention aux details.
            </p>

            <SmallFloralDivider />

            <p className="body-text mb-8 text-pretty">
              Que ce soit pour celebrer un anniversaire, exprimer votre amour ou
              simplement apporter de la joie, nous mettons tout notre savoir-faire
              a votre service.
            </p>

            {/* Instagram CTA as a styled card-like link */}
            <a
              href="https://instagram.com/beamira.flowers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[var(--beamira-accent)] text-brand font-semibold text-sm transition-shadow duration-200 hover:shadow-md"
            >
              <InstagramIcon className="size-5" />
              <span>Suivez-nous sur Instagram</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
