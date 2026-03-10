import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SignupPopup from "../components/SignupPopup";
import CallPopup from "../components/CallPopup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import QuotesSection from "../components/QuotesSection";
import MentorsSection from "../components/MentorsSection";
import StudentLifeSection from "../components/StudentLifeSection";
import EventsGallery from "../components/EventsGallery";
import CounselorCTA from "../components/CounselorCTA";
import HiringStatsSection from "../components/HiringStatsSection";
import { Lock, ArrowRight } from "lucide-react";

export default function HomePage() {
  const { user } = useAuth();
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  const handleReachMentors = () => {
    if (!user && !sessionStorage.getItem("popupShown")) {
      setShowSignupPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Visible to everyone */}
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <CoursesSection />
      <QuotesSection />
      <MentorsSection onReachMentors={handleReachMentors} />

      {/* Gated content */}
      {user ? (
        <>
          <StudentLifeSection />
          <EventsGallery />
          <CounselorCTA onOpenCall={() => setShowCallPopup(true)} />
          <HiringStatsSection />
          <Footer />
        </>
      ) : (
        <>
          {/* Gated section CTA */}
          <section className="py-20 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-cream to-cream-dark opacity-60" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, rgba(123,30,43,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(245,158,11,0.06) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-maroon" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Want to See More?
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Sign up to explore campus life, events, placement statistics,
                and talk to our AI counselor — completely free.
              </p>
              <button
                onClick={() => setShowSignupPopup(true)}
                className="group inline-flex items-center gap-2.5 bg-maroon text-white px-9 py-4 rounded-2xl font-bold text-lg hover:bg-maroon-dark transition-all duration-200 shadow-lg hover:shadow-xl btn-shimmer"
              >
                Sign Up to Unlock
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <p className="text-sm text-gray-400 mt-4">Free forever · No credit card required</p>
            </div>
          </section>
          <Footer />
        </>
      )}

      <SignupPopup show={showSignupPopup} onClose={() => setShowSignupPopup(false)} />
      <CallPopup open={showCallPopup} onClose={() => setShowCallPopup(false)} />
    </div>
  );
}
