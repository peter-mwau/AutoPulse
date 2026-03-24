import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  CheckCircle,
  Lock,
  Smartphone,
  Users,
  Headphones,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Shield,
  Sparkles,
  Gauge,
  Calendar,
  DollarSign,
  Clock,
  ThumbsUp,
  Play,
  ChevronRight,
  Globe,
  Battery,
  Navigation,
  Gift,
  Coffee,
  Heart,
  Eye,
  Share2,
  CreditCard,
  Car,
  MapPin,
  Phone,
  Menu,
  MessageCircle,
  Truck,
} from "lucide-react";
import { useCars } from "../contexts/carsContext";

// Custom hook for scroll progress
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

// CountUp Animation Component
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

// Scroll Progress Indicator Component
const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-[#00AEEF] to-lime-500 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  );
};

// Individual Section Component with scroll-triggered animations
const ScrollSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Main Home Component with Stacked Scroll Effect
function Home() {
  const { cars } = useCars();
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  // Featured cars from API
  const featuredCars = cars.slice(0, 3);

  // Testimonials data
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, Luxury Auto Group",
      content:
        "AutoPulse transformed our dealership completely. Sales increased by 40% in just 3 months. The platform is intuitive and our customers love it!",
      rating: 5,
      avatar: "MC",
      company: "Luxury Auto Group",
    },
    {
      name: "Sarah Johnson",
      role: "Car Enthusiast",
      content:
        "Best car buying experience ever! The seamless process from browsing to purchase took less than 2 hours. Highly recommended!",
      rating: 5,
      avatar: "SJ",
      company: "Verified Buyer",
    },
    {
      name: "David Rodriguez",
      role: "Fleet Manager",
      content:
        "We manage over 200 vehicles through AutoPulse. The analytics and inventory management features are game-changing for our business.",
      rating: 5,
      avatar: "DR",
      company: "Fleet Solutions Inc",
    },
  ];

  // Auto-rotate featured cars
  useEffect(() => {
    if (featuredCars.length > 0) {
      const interval = setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % featuredCars.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [featuredCars.length]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Handle scroll for stacked effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = heroHeight + index * 100;
          const progress = Math.max(
            0,
            Math.min(1, (scrollY - sectionTop + 200) / 400),
          );

          section.style.transform = `translateY(${progress * -50}px)`;
          section.style.opacity = Math.min(1, progress * 2);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />

      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505]">
        {/* Sticky Hero Section */}
        <div
          ref={heroRef}
          className="sticky top-0 z-10 min-h-screen overflow-hidden"
        >
          {/* Hero Content */}
          <div className="relative h-screen overflow-hidden rounded-3xl">
            {/* Background Slideshow */}
            <div className="absolute inset-0">
              {[
                "/car1.jpg",
                "/car2.jpg",
                "/car3.jpg",
                "/car4.jpg",
                "/car5.jpg",
                "/car6.jpg",
              ].map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1800 ease-in-out ${
                    index === 0
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
                      high-performance, luxury, and economy vehicles with
                      AI-powered insights, transparent specs, and seamless
                      purchasing.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/listings"
                      className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-8 py-3 font-semibold text-white shadow-lg shadow-[#00AEEF]/30 transition-all hover:scale-105 hover:shadow-[#00AEEF]/50"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Inventory
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></div>
                    </Link>

                    <button className="group relative overflow-hidden rounded-full border border-[#00AEEF]/50 bg-black/30 px-8 py-3 font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-[#00AEEF] hover:text-white">
                      <span className="relative z-10 flex items-center gap-2">
                        Book Consultation
                        <MessageCircle className="h-4 w-4" />
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
                        <Star
                          key={i}
                          className="h-4 w-4 fill-lime-500 text-lime-500"
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-1">
                        5.0 Rating
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Stats with Animation */}
                <div className="relative">
                  <div className="absolute inset-0 -z-10 rounded-full bg-[#00AEEF]/15 blur-3xl"></div>
                  <img
                    src="/car_dec.png"
                    alt="Car Showcase"
                    className="mx-auto w-full max-w-xl rounded-3xl object-contain p-2 animate-float"
                  />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="h-10 w-6 rounded-full border-2 border-white/30">
                <div className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-white animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked Content Sections */}
        <div className="relative z-20 bg-gradient-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505]">
          {/* Stats Section */}
          <div
            ref={(el) => (sectionsRef.current[0] = el)}
            className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 transition-all duration-500"
          >
            <ScrollSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    label: "Active Listings",
                    value: cars.length,
                    suffix: "+",
                    icon: Car,
                    color: "blue",
                    growth: "+23%",
                  },
                  {
                    label: "Happy Customers",
                    value: 2500,
                    suffix: "+",
                    icon: Users,
                    color: "lime",
                    growth: "+150%",
                  },
                  {
                    label: "Dealerships",
                    value: 120,
                    suffix: "+",
                    icon: MapPin,
                    color: "blue",
                    growth: "+12",
                  },
                  {
                    label: "Avg. Delivery",
                    value: 48,
                    suffix: "h",
                    icon: Clock,
                    color: "lime",
                    growth: "Express",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="relative">
                      <div
                        className={`mb-3 inline-flex rounded-lg bg-${stat.color === "blue" ? "[#00AEEF]" : "lime-500"}/10 p-2.5`}
                      >
                        <stat.icon
                          className={`h-5 w-5 text-${stat.color === "blue" ? "[#00AEEF]" : "lime-500"}`}
                        />
                      </div>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                      <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-lime-500">
                        <TrendingUp className="h-3 w-3" />
                        <span>{stat.growth}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSection>
          </div>

          {/* Featured Cars Section */}
          {featuredCars.length > 0 && (
            <div
              ref={(el) => (sectionsRef.current[1] = el)}
              className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 transition-all duration-500"
            >
              <ScrollSection delay={200}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1 backdrop-blur-sm mb-4">
                    <Sparkles className="h-4 w-4 text-lime-500" />
                    <span className="text-xs font-medium text-gray-300">
                      Featured Vehicles
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-white md:text-5xl mb-4">
                    Editor's <span className="text-[#00AEEF]">Picks</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Discover our hand-picked selection of exceptional vehicles
                  </p>
                </div>

                <div className="relative">
                  {featuredCars[featuredIndex] && (
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/80 to-black/40 border border-white/10 transition-all duration-700 hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        <div className="relative h-64 lg:h-auto rounded-2xl overflow-hidden">
                          <img
                            src={featuredCars[featuredIndex].img_url}
                            alt={`${featuredCars[featuredIndex].make} ${featuredCars[featuredIndex].model}`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.src =
                                "https://via.placeholder.com/600x400?text=Featured+Vehicle";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold text-black">
                              Featured
                            </span>
                            <span className="rounded-full bg-[#00AEEF] px-3 py-1 text-xs font-semibold text-white">
                              Hot Deal
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {featuredCars[featuredIndex].make
                              .charAt(0)
                              .toUpperCase() +
                              featuredCars[featuredIndex].make.slice(1)}{" "}
                            {featuredCars[featuredIndex].model.toUpperCase()}
                          </h3>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1 text-gray-400">
                              <Calendar className="h-4 w-4 text-[#00AEEF]" />
                              <span className="text-sm">
                                {featuredCars[featuredIndex].year}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-400">
                              <Gauge className="h-4 w-4 text-[#00AEEF]" />
                              <span className="text-sm">
                                {featuredCars[featuredIndex].horsepower} HP
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">
                            Experience unparalleled performance and luxury with
                            this exceptional vehicle. Equipped with the latest
                            technology and premium features.
                          </p>
                          <div className="mb-6">
                            <p className="text-3xl font-bold text-white">
                              {formatPrice(featuredCars[featuredIndex].price)}
                            </p>
                            <p className="text-sm text-gray-500">
                              or{" "}
                              {formatPrice(
                                featuredCars[featuredIndex].price / 60,
                              )}
                              /mo
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <Link
                              to={`/listings/${featuredCars[featuredIndex].id}`}
                              className="flex-1 text-center rounded-lg bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-6 py-3 font-semibold text-white transition-all hover:scale-105"
                            >
                              View Details
                            </Link>
                            <button className="rounded-lg border border-white/20 px-6 py-3 text-white transition-all hover:border-[#00AEEF] hover:text-[#00AEEF]">
                              <Heart className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Carousel Indicators */}
                  <div className="flex justify-center gap-2 mt-6">
                    {featuredCars.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFeaturedIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          featuredIndex === idx
                            ? "w-8 bg-[#00AEEF]"
                            : "w-2 bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </ScrollSection>
            </div>
          )}

          {/* Features Section */}
          <div
            ref={(el) => (sectionsRef.current[2] = el)}
            className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 transition-all duration-500"
          >
            <ScrollSection delay={400}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1 backdrop-blur-sm mb-4">
                  <Zap className="h-4 w-4 text-lime-500" />
                  <span className="text-xs font-medium text-gray-300">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-white md:text-5xl mb-4">
                  The <span className="text-[#00AEEF]">AutoPulse</span>{" "}
                  Advantage
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Experience automotive shopping like never before
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description:
                      "Browse our extensive inventory with blazing fast search and filtering capabilities",
                    color: "blue",
                  },
                  {
                    icon: Shield,
                    title: "Secure & Verified",
                    description:
                      "All vehicles are certified and verified by our expert team for your peace of mind",
                    color: "lime",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Ready",
                    description:
                      "Shop anytime, anywhere with our fully responsive mobile application",
                    color: "blue",
                  },
                  {
                    icon: Users,
                    title: "Expert Support",
                    description:
                      "Our dedicated team is available 24/7 to help you find your perfect vehicle",
                    color: "lime",
                  },
                  {
                    icon: Headphones,
                    title: "Customer First",
                    description:
                      "We prioritize your satisfaction with hassle-free transactions and support",
                    color: "blue",
                  },
                  {
                    icon: Award,
                    title: "Verified Listings",
                    description:
                      "Every listing is authentic with complete vehicle history and documentation",
                    color: "lime",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/40 border border-white/10 p-8 transition-all duration-500 hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="relative">
                      <div
                        className={`rounded-lg bg-${feature.color === "blue" ? "[#00AEEF]" : "lime-500"}/10 w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon
                          className={`h-7 w-7 text-${feature.color === "blue" ? "[#00AEEF]" : "lime-500"}`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00AEEF] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm text-[#00AEEF] inline-flex items-center gap-1">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSection>
          </div>

          {/* How It Works Section */}
          <div
            ref={(el) => (sectionsRef.current[3] = el)}
            className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 transition-all duration-500"
          >
            <ScrollSection delay={600}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1 backdrop-blur-sm mb-4">
                  <Play className="h-4 w-4 text-lime-500" />
                  <span className="text-xs font-medium text-gray-300">
                    Simple Process
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-white md:text-5xl mb-4">
                  How <span className="text-[#00AEEF]">AutoPulse</span> Works
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Get your dream car in three simple steps
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    icon: Eye,
                    title: "Browse & Filter",
                    description:
                      "Explore our extensive collection with advanced filters",
                    color: "blue",
                  },
                  {
                    step: "02",
                    icon: CreditCard,
                    title: "Secure Payment",
                    description:
                      "Complete your purchase with our secure payment system",
                    color: "lime",
                  },
                  {
                    step: "03",
                    icon: "Truck",
                    title: "Fast Delivery",
                    description: "Get your vehicle delivered within 48 hours",
                    color: "blue",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="relative group">
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#00AEEF] to-lime-500 -translate-y-1/2 z-0"></div>
                    )}
                    <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/40 border border-white/10 group-hover:border-[#00AEEF]/50 transition-all duration-500 group-hover:scale-105">
                      <div className="text-6xl font-bold text-[#00AEEF]/20 mb-4 group-hover:text-[#00AEEF]/30 transition-colors">
                        {step.step}
                      </div>
                      <div className="rounded-full bg-gradient-to-r from-[#00AEEF]/20 to-lime-500/20 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <step.icon className="h-10 w-10 text-[#00AEEF]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSection>
          </div>

          {/* Testimonials Section */}
          <div
            ref={(el) => (sectionsRef.current[4] = el)}
            className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 transition-all duration-500"
          >
            <ScrollSection delay={800}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1 backdrop-blur-sm mb-4">
                  <Star className="h-4 w-4 text-lime-500" />
                  <span className="text-xs font-medium text-gray-300">
                    Testimonials
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-white md:text-5xl mb-4">
                  What Our <span className="text-[#00AEEF]">Customers</span> Say
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who found their dream
                  car with AutoPulse
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl bg-gradient-to-br from-black/80 to-black/40 border border-white/10 p-8 transition-all duration-500 hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20 hover:-translate-y-2"
                  >
                    <div className="absolute top-4 right-4 text-[#00AEEF]/20 group-hover:text-[#00AEEF]/30 transition-colors">
                      <svg
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00AEEF] to-lime-500 flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-lime-500 text-lime-500"
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {testimonial.content}
                      </p>
                      <p className="mt-4 text-xs text-[#00AEEF]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSection>
          </div>

          {/* CTA Section */}
          <div
            ref={(el) => (sectionsRef.current[5] = el)}
            className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 transition-all duration-500"
          >
            <ScrollSection delay={1000}>
              <div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00AEEF]/20 to-[#0077b3]/20 border border-[#00AEEF]/30 p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00AEEF]/20"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
              >
                <div
                  className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300AEEF" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
                ></div>
                <div className="relative text-center">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Ready to Find Your Dream Car?
                  </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Join thousands of satisfied customers who found their
                    perfect vehicle with AutoPulse
                  </p>
                  <Link
                    to="/listings"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00AEEF]/50 group"
                  >
                    <span>Browse Listings</span>
                    <ArrowRight
                      className={`h-5 w-5 transition-transform duration-300 ${isHoveringCTA ? "translate-x-1" : ""}`}
                    />
                  </Link>
                  <p className="mt-6 text-xs text-gray-500">
                    ⚡ Over 2,500+ cars sold • 🎉 98% customer satisfaction
                  </p>
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Home;
