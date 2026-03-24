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
  Truck,
} from "lucide-react";
import Hero from "../components/Hero";
import { useCars } from "../contexts/carsContext";

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

function Home() {
  const { cars } = useCars();
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

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

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505] pt-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00AEEF]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#00AEEF]/10 rounded-full blur-3xl animate-ping"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="sticky top-24 z-0">
            <Hero />
          </div>

          <div className="relative z-20 -mt-24 -space-y-6 pb-20">
            {/* Stats Section - Animated Counters */}
            <section className="relative rounded-3xl border border-white/10 bg-[#0B0B0B]/90 px-6 py-12 backdrop-blur-xl shadow-2xl shadow-black/20 md:px-10">
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
                    style={{ animationDelay: `${idx * 100}ms` }}
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
            </section>

            {/* Featured Cars Section - Interactive Carousel */}
            {featuredCars.length > 0 && (
              <section className="relative rounded-3xl border border-white/10 bg-[#0B0B0B]/90 px-6 py-12 backdrop-blur-xl shadow-2xl shadow-black/20 md:px-10">
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
                  {/* Main Featured Car */}
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
              </section>
            )}

            {/* Features Section with Hover Effects */}
            <section className="relative rounded-3xl border border-white/10 bg-[#0B0B0B]/90 px-6 py-12 backdrop-blur-xl shadow-2xl shadow-black/20 md:px-10">
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
                    delay: 0,
                  },
                  {
                    icon: Shield,
                    title: "Secure & Verified",
                    description:
                      "All vehicles are certified and verified by our expert team for your peace of mind",
                    color: "lime",
                    delay: 100,
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Ready",
                    description:
                      "Shop anytime, anywhere with our fully responsive mobile application",
                    color: "blue",
                    delay: 200,
                  },
                  {
                    icon: Users,
                    title: "Expert Support",
                    description:
                      "Our dedicated team is available 24/7 to help you find your perfect vehicle",
                    color: "lime",
                    delay: 300,
                  },
                  {
                    icon: Headphones,
                    title: "Customer First",
                    description:
                      "We prioritize your satisfaction with hassle-free transactions and support",
                    color: "blue",
                    delay: 400,
                  },
                  {
                    icon: Award,
                    title: "Verified Listings",
                    description:
                      "Every listing is authentic with complete vehicle history and documentation",
                    color: "lime",
                    delay: 500,
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/40 border border-white/10 p-8 transition-all duration-500 hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20 hover:-translate-y-2"
                    style={{ animationDelay: `${feature.delay}ms` }}
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
            </section>

            {/* How It Works Section */}
            <section className="relative rounded-3xl border border-white/10 bg-[#0B0B0B]/90 px-6 py-12 backdrop-blur-xl shadow-2xl shadow-black/20 md:px-10">
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
                    icon: Truck,
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
            </section>

            {/* Testimonials Section */}
            <section className="relative rounded-3xl border border-white/10 bg-[#0B0B0B]/90 px-6 py-12 backdrop-blur-xl shadow-2xl shadow-black/20 md:px-10">
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
            </section>

            {/* CTA Section - Animated */}
            <section className="relative rounded-3xl border border-white/10 bg-[#0B0B0B]/90 px-6 py-12 backdrop-blur-xl shadow-2xl shadow-black/20 md:px-10">
              <div
                className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#00AEEF]/20 to-[#0077b3]/20 border border-[#00AEEF]/30 p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00AEEF]/20"
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
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
