import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <GraduationCap className="w-8 h-8 text-maroon transition-transform duration-300 group-hover:scale-110" />
          <span className="font-heading text-xl font-bold text-maroon tracking-tight">EduReach</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-gray-600 hover:text-maroon transition-colors duration-200 text-sm font-medium after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-maroon after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">
                Hi, <span className="text-maroon font-semibold">{user.name.split(" ")[0]}</span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm bg-maroon/8 text-maroon px-3.5 py-1.5 rounded-lg hover:bg-maroon hover:text-white transition-all duration-200 font-medium"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-maroon font-semibold hover:text-maroon-dark transition-colors duration-200 px-2 py-1"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm bg-maroon text-white px-5 py-2 rounded-lg font-semibold hover:bg-maroon-dark transition-all duration-200 shadow-sm hover:shadow-md btn-shimmer"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 animate-fade-in shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-maroon hover:bg-cream px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-2">
            {user ? (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Hi, <span className="text-maroon font-semibold">{user.name.split(" ")[0]}</span></span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-maroon font-medium text-sm bg-maroon/10 px-3 py-1.5 rounded-lg"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center text-maroon font-semibold border border-maroon px-4 py-2 rounded-lg text-sm hover:bg-maroon hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center bg-maroon text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-maroon-dark transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
