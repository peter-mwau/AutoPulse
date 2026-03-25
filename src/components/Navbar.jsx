import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useDarkMode } from "../contexts/themeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  const getNavClassName = ({ isActive }) =>
    `relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#00AEEF] after:transition-all after:duration-300 ${
      isActive
        ? "text-white after:w-full"
        : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
    }`;

  return (
    <div
      ref={navbarRef}
      className="fixed top-4 left-1/2 z-50 w-[90%] max-w-7xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-2xl dark:bg-[#0B0B0B]/80 p-2 px-6 shadow-2xl shadow-[#00AEEF]/20 backdrop-blur-xl border dark:border-white/10">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <Link to="/" className="cursor-pointer">
            <img
              src="/AutoPulse_logo.png"
              alt="AutoPulse Logo"
              className="h-16 w-16 rounded-full object-cover hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <NavLink to="/" end className={getNavClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/listings" className={getNavClassName}>
                Showcase
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                className="relative text-sm font-medium text-gray-300 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#00AEEF] after:transition-all after:duration-300 hover:after:w-full"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-sm font-medium text-gray-300 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#00AEEF] after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="gap-3 md:gap-5 flex flex-row my-auto items-center">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 hover:cursor-pointer rounded-full bg-[#00AEEF]/20 p-2 text-gray-300 hover:text-white transition-colors"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden rounded-full bg-[#00AEEF]/20 p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* CTA Button */}
          <button className="hidden md:inline-flex group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#00AEEF]/50">
            <span className="relative z-10">Request Demo</span>
            <div className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-white/10 bg-[#0B0B0B]/95 p-4 backdrop-blur-xl shadow-2xl shadow-[#00AEEF]/20 md:hidden">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#00AEEF]/20 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listings"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#00AEEF]/20 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Showcase
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={closeMobileMenu}
            className="mt-4 w-full rounded-full bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[#00AEEF]/50"
          >
            Request Demo
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
