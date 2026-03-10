import { aboutContent, images } from "../data/content";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left – Images */}
          <div className="relative animate-slide-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.collegeClassroom}
                alt="Classroom"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 to-transparent" />
            </div>

            {/* Floating overlay card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 w-40 h-40 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
              <img
                src={images.tech1}
                alt="Technology"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 opacity-20 hidden md:block"
              style={{
                backgroundImage: "radial-gradient(#7B1E2B 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* Right – Content */}
          <div className="animate-slide-right">
            <span className="inline-flex items-center gap-2 text-maroon font-semibold text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-maroon" />
              {aboutContent.subtitle}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 font-bold mb-5 leading-tight">
              {aboutContent.title}
            </h2>
            <div className="section-divider-left" />
            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
              {aboutContent.description}
            </p>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="stat-card bg-cream rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <p className="text-2xl md:text-3xl font-bold text-maroon font-heading">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-1.5 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
