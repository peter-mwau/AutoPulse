import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Star,
  ChevronDown,
  Sparkles,
} from "lucide-react";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/car1.jpg",
    "/car2.jpg",
    "/car3.jpg",
    "/car4.jpg",
    "/car5.jpg",
    "/car6.jpg",
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              currentImage === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Animated Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 174, 239, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 174, 239, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00AEEF]/10 blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-lime-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-[80%] mx-auto">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 backdrop-blur-sm px-4 py-1.5 mb-6">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500" />
                </div>
                <span className="text-xs font-medium text-[#00AEEF] tracking-wide">
                  LIVE INVENTORY • END-TO-END PLATFORM
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Find your next
                <br />
                <span className="bg-gradient-to-r from-[#00AEEF] via-[#7BD7FF] to-lime-400 bg-clip-text text-transparent">
                  dream car
                </span>
                <br />
                <span className="text-white/80">in minutes.</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg max-w-xl mb-8">
                Experience the future of automotive commerce. Browse
                high-performance, luxury, and economy vehicles with AI-powered
                insights, transparent specs, and seamless purchasing.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/listings"
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#00AEEF]/30"
                >
                  Explore Inventory
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button className="group inline-flex items-center gap-2 px-8 py-3 border border-[#00AEEF]/50 text-gray-200 font-semibold rounded-full transition-all hover:border-[#00AEEF] hover:text-white hover:bg-[#00AEEF]/10">
                  <MessageCircle className="h-4 w-4" />
                  Book Consultation
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-gray-500 to-gray-700"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">
                    <span className="font-semibold text-white">2,500+</span>{" "}
                    happy drivers
                  </span>
                </div>

                <div className="w-px h-4 bg-white/20" />

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-lime-500 text-lime-500"
                    />
                  ))}
                  <span className="text-sm text-gray-300 ml-1">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - 3D Car Visualization */}
            <div className="hidden lg:block relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/20 via-transparent to-lime-500/20 rounded-full blur-3xl" />

              {/* Main Car Image with 3D Effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl blur-2xl transform group-hover:scale-110 transition-transform duration-500" />
                <img
                  src="/car_dec.png"
                  alt="3D Car Visualization"
                  className="relative w-full max-w-lg mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 animate-float"
                  style={{
                    filter: "drop-shadow(0 20px 30px rgba(0, 174, 239, 0.3))",
                  }}
                />

                {/* Glowing Ring Effect */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-[#00AEEF]/30 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute inset-0 rounded-full border border-lime-500/20 animate-pulse" />

                {/* Floating Particles */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#00AEEF]/20 rounded-full blur-xl animate-pulse" />
                <div
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-lime-500/20 rounded-full blur-xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />

                {/* Tech Badge */}
                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 border border-[#00AEEF]/30">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-lime-500" />
                    <span className="text-xs text-white">3D Visualization</span>
                  </div>
                </div>

                {/* Spec Highlights */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 whitespace-nowrap">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-gray-400">⚡ 0-60 in 3.2s</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="text-gray-400">🔋 350mi Range</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="text-gray-400">🚀 155mph Top Speed</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -left-8 top-1/4 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/10 transform -translate-x-1/2">
                <div className="text-center">
                  <p className="text-[#00AEEF] text-xs font-bold">0-60 MPH</p>
                  <p className="text-white text-lg font-bold">
                    3.2<span className="text-xs">s</span>
                  </p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/10 transform translate-x-1/2">
                <div className="text-center">
                  <p className="text-lime-500 text-xs font-bold">TOP SPEED</p>
                  <p className="text-white text-lg font-bold">
                    155<span className="text-xs">mph</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(2deg);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
