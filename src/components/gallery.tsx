const placeholders = [
  { gradient: "from-pink-200 to-rose-300", emoji: "🌸" },
  { gradient: "from-rose-300 to-pink-400", emoji: "🌹" },
  { gradient: "from-red-200 to-rose-300", emoji: "🌺" },
  { gradient: "from-pink-100 to-pink-200", emoji: "💐" },
  { gradient: "from-rose-200 to-red-300", emoji: "🌸" },
  { gradient: "from-pink-300 to-rose-400", emoji: "🌹" },
  { gradient: "from-rose-100 to-pink-300", emoji: "🌺" },
  { gradient: "from-red-100 to-rose-200", emoji: "💐" },
];

export function Gallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-gray-800 mb-3">
            Nos Creations
          </h2>
          <p className="text-gray-500 text-lg">
            Chaque bouquet est une oeuvre d&apos;art unique
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholders.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
              >
                <span className="text-4xl opacity-60">{item.emoji}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
