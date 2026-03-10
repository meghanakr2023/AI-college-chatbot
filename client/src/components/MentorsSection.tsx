import { useEffect, useRef } from "react";
import { mentorsContent } from "../data/content";

interface MentorsSectionProps {
  onReachMentors?: () => void;
}

export default function MentorsSection({ onReachMentors }: MentorsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (triggered.current || !sectionRef.current || !onReachMentors) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        triggered.current = true;
        onReachMentors();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onReachMentors]);

  return (
    <section id="mentors" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-maroon font-semibold text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-maroon" />
            Learn from the Best
            <span className="w-8 h-px bg-maroon" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Popular Mentors
          </h2>
          <div className="section-divider" />
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible scrollbar-hide">
          {mentorsContent.map((mentor, i) => (
            <div
              key={mentor.name}
              className={`group min-w-[270px] md:min-w-0 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-350 animate-fade-in-up delay-${i * 100 + 100}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60 mentor-card">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                {/* Hover overlay content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-350">
                  <p className="text-white text-xs font-medium opacity-90">{mentor.bio}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading text-base font-bold text-gray-900 leading-tight">{mentor.name}</h3>
                <p className="text-maroon text-xs font-semibold mt-0.5 mb-2">{mentor.role}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {mentor.teaches.split(", ").map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-maroon/8 text-maroon px-2 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
