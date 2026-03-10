import { achievementsContent } from "../data/content";

export default function AchievementsSection() {
  return (
    <section className="relative bg-maroon py-16 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)",
        }}
      />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {achievementsContent.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-in-up delay-${i * 100 + 100}`}
            >
              <p className="text-3xl md:text-5xl font-bold text-white font-heading mb-2 leading-none">
                {stat.value}
              </p>
              <div className="w-8 h-0.5 bg-amber-400 mx-auto mb-2 opacity-80" />
              <p className="text-white/75 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40" />
    </section>
  );
}
