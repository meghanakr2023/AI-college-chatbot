import { useNavigate } from "react-router-dom";
import { images } from "../data/content";
import { PhoneCall, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface CounselorCTAProps {
  onOpenCall: () => void;
}

export default function CounselorCTA({ onOpenCall }: CounselorCTAProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      onOpenCall();
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <img
        src={images.moreStudents}
        alt="Students"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark/90 via-maroon/82 to-black/75" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/8 rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <PhoneCall className="w-3.5 h-3.5" />
          Expert Counsellors Available
        </span>

        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
          Need Help Choosing{" "}
          <br className="hidden sm:block" />
          The Right University For You?
        </h2>
        <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Get personalized guidance on courses, admissions, fees, scholarships, and career paths from our expert counselors.
        </p>

        <button
          onClick={handleClick}
          className="group inline-flex items-center gap-3 bg-white text-maroon px-9 py-4 rounded-2xl font-bold text-lg hover:bg-amber-300 hover:text-maroon-dark transition-all duration-300 shadow-2xl hover:shadow-amber-300/30 btn-shimmer btn-pulse"
        >
          <PhoneCall className="w-5 h-5" />
          Talk to Counsellor
          <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
