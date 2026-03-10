import { GraduationCap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { contactInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-maroon flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold">EduReach</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premier engineering institution established in 2005. AICTE approved, CBSE Banglore affiliated.
            </p>
            {/* Divider accent */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-maroon to-amber-400 rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#courses" },
                { label: "Faculty", href: "#mentors" },
                { label: "Campus Life", href: "#campus" },
                { label: "Placements", href: "#placements" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 hover:text-amber-300 transition-colors duration-200 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Programs</h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <p>B.Tech (6 specializations)</p>
              <p>M.Tech (3 specializations)</p>
              <p>MBA (Finance, Marketing, HR, IT)</p>
              <div className="mt-4 inline-flex items-center gap-1.5 bg-amber-400/15 text-amber-300 text-xs px-3 py-1.5 rounded-full font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Admissions open: March 1st
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3.5 text-sm text-gray-400">
              <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-2.5 hover:text-amber-300 transition-colors duration-200">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2.5 hover:text-amber-300 transition-colors duration-200">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                {contactInfo.phone}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2024 EduReach College,Bangalore, Karnataka. All rights reserved.</p>
          <p className="text-xs">AICTE Approved ·  CBSE Affiliated</p>
        </div>
      </div>
    </footer>
  );
}
