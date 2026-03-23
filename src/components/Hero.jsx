import React, { useEffect, useState } from "react";
import { useCars } from "../contexts/carsContext";

function Hero() {
  const { cars } = useCars();
  const heroImages = [
    "/car1.jpg",
    "/car2.jpg",
    "/car3.jpg",
    "/car4.jpg",
    "/car5.jpg",
    "/car6.jpg",
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative mb-20 h-screen overflow-hidden rounded-3xl">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1800 ease-in-out ${
                activeImageIndex === index
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 via-transparent to-lime-500/5"></div>

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 174, 239, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 174, 239, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Floating Orbs */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#00AEEF]/10 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-lime-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Main Content */}
        <div className="relative flex h-full items-center p-8 md:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge with Pulse Effect */}
              <div className="relative inline-flex">
                <div className="absolute inset-0 rounded-full bg-[#00AEEF]/20 blur-md animate-pulse"></div>
                <div className="relative inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1.5 backdrop-blur-sm">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500"></span>
                  </div>
                  <span className="text-xs font-medium text-[#00AEEF] tracking-wide">
                    LIVE INVENTORY • END-TO-END PLATFORM
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                  Find your next
                  <span className="relative ml-3 inline-block">
                    <span className="bg-gradient-to-r from-[#00AEEF] via-[#7BD7FF] to-lime-400 bg-clip-text text-transparent">
                      dream car
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      fill="none"
                    >
                      <path
                        d="M0 6L300 6"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#00AEEF" />
                          <stop offset="50%" stopColor="#7BD7FF" />
                          <stop offset="100%" stopColor="#BFFF00" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <br />
                  <span className="text-white/80">in minutes.</span>
                </h1>

                <p className="max-w-xl text-gray-300 leading-relaxed">
                  Experience the future of automotive commerce. Browse
                  high-performance, luxury, and economy vehicles with AI-powered
                  insights, transparent specs, and seamless purchasing.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-8 py-3 font-semibold text-white shadow-lg shadow-[#00AEEF]/30 transition-all hover:scale-105 hover:shadow-[#00AEEF]/50">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Inventory
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></div>
                </button>

                <button className="group relative overflow-hidden rounded-full border border-[#00AEEF]/50 bg-black/30 px-8 py-3 font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-[#00AEEF] hover:text-white">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Consultation
                    <svg
                      className="h-4 w-4 transition-transform group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 scale-0 rounded-full bg-[#00AEEF]/10 transition-transform duration-300 group-hover:scale-100"></div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br from-gray-600 to-gray-800"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="font-semibold text-white">2,500+</span>{" "}
                    happy drivers
                  </div>
                </div>
                <div className="h-4 w-px bg-white/20"></div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-lime-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-400 ml-1">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats with Animation */}
            <div className="relative">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00AEEF]/10 via-transparent to-lime-500/10 blur-xl"></div>

              <div className="relative grid grid-cols-2 gap-4">
                {/* Stat Card 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-[#00AEEF]/50 hover:shadow-lg hover:shadow-[#00AEEF]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-3 inline-flex rounded-lg bg-[#00AEEF]/10 p-2">
                      <svg
                        className="h-5 w-5 text-[#00AEEF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-white">
                      {cars.length}+
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                      Active Listings
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-lime-500">
                      <span>↑ 23%</span>
                      <span className="text-gray-500">this week</span>
                    </div>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-[#00AEEF]/50 hover:shadow-lg hover:shadow-[#00AEEF]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-3 inline-flex rounded-lg bg-lime-500/10 p-2">
                      <svg
                        className="h-5 w-5 text-lime-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-white">120+</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                      Trusted Partners
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-lime-500">
                      <span>↑ 12</span>
                      <span className="text-gray-500">new this month</span>
                    </div>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-[#00AEEF]/50 hover:shadow-lg hover:shadow-[#00AEEF]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-3 inline-flex rounded-lg bg-[#00AEEF]/10 p-2">
                      <svg
                        className="h-5 w-5 text-[#00AEEF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-white">48h</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                      Avg. Delivery
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-lime-500">
                      <span>Express</span>
                      <span className="text-gray-500">nationwide</span>
                    </div>
                  </div>
                </div>

                {/* Stat Card 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-[#00AEEF]/50 hover:shadow-lg hover:shadow-[#00AEEF]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-3 inline-flex rounded-lg bg-lime-500/10 p-2">
                      <svg
                        className="h-5 w-5 text-lime-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <p className="text-4xl font-bold text-white">98%</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                      Verified Sellers
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-lime-500">
                      <span>Trust Score</span>
                      <span className="text-gray-500">A+ Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
