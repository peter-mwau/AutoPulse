import React, { useState } from "react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 z-50 w-[90%] max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-2xl bg-[#0B0B0B]/80 p-2 px-6 shadow-2xl shadow-[#00AEEF]/20 backdrop-blur-xl border border-white/10">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center">
            {/* Abstract Logo: Pulse + A */}
            <div className="absolute h-8 w-8 rotate-45 border-2 border-[#00AEEF]"></div>
            <span className="relative text-2xl font-black text-white">A</span>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-lime-400 animate-pulse"></div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-white">Auto</span>
            <span className="text-[#00AEEF]">Pulse</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex items-center gap-8">
            {["Home", "Solutions", "Showcase", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative text-sm font-medium text-gray-300 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#00AEEF] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#00AEEF]/50"
        >
          <span className="relative z-10">Request Demo</span>
          <div className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
