import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import { navLinks, profile } from "../../data/profile";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#0a0a0f]/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="group flex items-center gap-2" aria-label="Go to home page">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-emerald-500 shadow-lg shadow-violet-500/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity group-hover:scale-110 group-hover:shadow-violet-500/50 group-hover:before:opacity-100">
            <Code2 size={18} className="relative z-10 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">{profile.initials}</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-violet-500/10 text-violet-300"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-sm text-white shadow-lg shadow-violet-500/20 transition-all hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-violet-500/40"
          >
            Hire Me
          </NavLink>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-white/5 bg-[#0d0d16]/95 backdrop-blur-md md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm transition-all ${
                    isActive
                      ? "bg-violet-500/10 text-violet-300"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-center text-sm text-white"
            >
              Hire Me
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
