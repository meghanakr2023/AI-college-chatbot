import { images, siteConfig } from "../data/content";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[88vh] min-h-[560px] overflow-hidden">
      {/* Background image */}
      <img
        src={images.hero}
        alt="EduReach Campus"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ animation: "none" }}
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 Q720 0 1440 60 L1440 60 L0 60Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Eyebrow tag */}
          <div className="animate-fade-in-up delay-75 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-widest uppercase">
              {siteConfig.established} · Bangalore, Karnataka · AICTE Approved
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-150 font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 max-w-3xl">
            Welcome to{" "}
            <span className="gradient-text">{siteConfig.name} College</span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up delay-300 text-white/85 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {siteConfig.tagline}. Premier engineering institution with{" "}
            <span className="text-amber-300 font-semibold">92% placement rate</span>{" "}
            and partnerships with Google, Microsoft & Amazon.
          </p>

          {/* CTA group */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-white text-maroon px-7 py-3.5 rounded-xl font-semibold hover:bg-amber-300 hover:text-maroon-dark transition-all duration-300 shadow-lg hover:shadow-xl btn-shimmer"
            >
              Explore Programs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/15 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>

          {/* Quick stats row */}
          <div className="animate-fade-in-up delay-500 flex flex-wrap gap-6 mt-12">
            {[
              { value: "92%", label: "Placement Rate" },
              { value: "₹42 LPA", label: "Highest Package" },
              { value: "150+", label: "Companies" },
              { value: "10K+", label: "Alumni" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-amber-300">{s.value}</p>
                <p className="text-white/70 text-xs tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
