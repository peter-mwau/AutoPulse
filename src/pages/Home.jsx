import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Eye,
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
  Play,
  Heart,
  CreditCard,
  Car,
  MapPin,
  Truck,
  Cpu,
  Network,
  Binary,
  Rocket,
  CheckCircle,
} from "lucide-react";
import Hero from "../components/Hero";
import { useCars } from "../contexts/carsContext";

// Simple particle background
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      color: `rgba(0, 174, 239, ${Math.random() * 0.15})`,
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      },
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      },
    });

    for (let i = 0; i < 80; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    setSize();
    animate();
    window.addEventListener("resize", setSize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

// Simple scroll reveal hook
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// Animated Counter
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal();

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

// Section Header
const SectionHeader = ({ badge, title, gradientText, description }) => (
  <div className="text-center mb-12">
    <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1.5 backdrop-blur-sm mb-4">
      <Icon className="h-4 w-4 text-lime-500" />
      <span className="text-xs font-medium text-[#00AEEF] tracking-wide">
        {badge}
      </span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      {title}{" "}
      <span className="bg-gradient-to-r from-[#00AEEF] to-lime-400 bg-clip-text text-transparent">
        {gradientText}
      </span>
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
  </div>
);

// Feature Card
const FeatureCard = ({ title, description, color = "blue" }) => (
  <div className="group rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/50 hover:shadow-lg hover:shadow-[#00AEEF]/10">
    <div
      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
        color === "blue" ? "bg-[#00AEEF]/10" : "bg-lime-500/10"
      }`}
    >
      <Icon
        className={`h-6 w-6 ${
          color === "blue" ? "text-[#00AEEF]" : "text-lime-500"
        }`}
      />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

function Home() {
  const { cars } = useCars();
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  console.log("Cars: ", cars);

  const featuredCars = cars
    .filter((car) => car.horsepower > 450 && car.horsepower < 500)
    .slice(0, 5);

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, Luxury Auto Group",
      content:
        "AutoPulse transformed our dealership completely. Sales increased by 40% in just 3 months.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Sarah Johnson",
      role: "Car Enthusiast",
      content:
        "Best car buying experience ever! The seamless process from browsing to purchase took less than 2 hours.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "David Rodriguez",
      role: "Fleet Manager",
      content:
        "We manage over 200 vehicles through AutoPulse. The analytics features are game-changing.",
      rating: 5,
      avatar: "DR",
    },
  ];

  useEffect(() => {
    if (featuredCars.length > 0) {
      const interval = setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % featuredCars.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [featuredCars.length]);

  useEffect(() => {
    const handleScroll = () => {
      const progress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505]">
      <ParticleBackground />

      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent" />

      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gradient-to-r from-[#00AEEF] via-lime-500 to-[#00AEEF] transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="relative">
        {/* Hero */}
        <Hero />

        {/* Content Sections */}
        <div className="relative z-10 pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-20">
              {[
                {
                  label: "Active Listings",
                  value: cars.length,
                  suffix: "+",
                  icon: Car,
                  growth: "+23%",
                },
                {
                  label: "Happy Customers",
                  value: 2500,
                  suffix: "+",
                  icon: Users,
                  growth: "+150%",
                },
                {
                  label: "Partner Dealers",
                  value: 120,
                  suffix: "+",
                  icon: MapPin,
                  growth: "+12",
                },
                {
                  label: "Avg. Delivery",
                  value: 48,
                  suffix: "h",
                  icon: Clock,
                  growth: "Express",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-black/45 p-6 text-center backdrop-blur-sm transition-all hover:border-[#00AEEF]/40 hover:shadow-lg hover:shadow-[#00AEEF]/10"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-[#00AEEF]" />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                  <p className="text-xs text-lime-500 mt-1">{stat.growth}</p>
                </div>
              ))}
            </div>

            {/* Featured Cars */}
            {featuredCars.length > 0 && (
              <div>
                <SectionHeader
                  icon={Sparkles}
                  badge="EXCLUSIVE SELECTION"
                  title="Editor's"
                  gradientText="Picks"
                  description="Hand-picked vehicles from our premium collection"
                />

                <div className="relative">
                  {featuredCars[featuredIndex] && (
                    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/70 to-black/45 backdrop-blur-sm shadow-lg shadow-[#00AEEF]/10">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
                        <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
                          <img
                            src={featuredCars[featuredIndex].img_url}
                            alt="Featured car"
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src =
                                "https://via.placeholder.com/600x400?text=Vehicle";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="px-3 py-1 bg-lime-500 text-black text-xs font-semibold rounded-full">
                              Featured
                            </span>
                            <span className="px-3 py-1 bg-[#00AEEF] text-white text-xs font-semibold rounded-full">
                              Limited
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {featuredCars[featuredIndex].make.toUpperCase()}{" "}
                            {featuredCars[featuredIndex].model.toUpperCase()}
                          </h3>
                          <div className="flex gap-4 mb-4">
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
                          <p className="text-gray-300 mb-6">
                            Experience unparalleled performance with this
                            exceptional vehicle.
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
                              className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                            >
                              View Details
                            </Link>
                            <button className="px-6 py-3 border border-white/20 rounded-lg hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors">
                              <Heart className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center gap-2 mt-6">
                    {featuredCars.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFeaturedIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${featuredIndex === idx ? "w-8 bg-[#00AEEF]" : "w-1.5 bg-gray-600"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            <div>
              <SectionHeader
                icon={Cpu}
                badge="CORE FEATURES"
                title="The"
                gradientText="AutoPulse Advantage"
                description="Powered by next-generation technology"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "AI-powered search with instant results",
                    color: "blue",
                  },
                  {
                    icon: Shield,
                    title: "Fully Verified",
                    description: "Verified vehicle history & documentation",
                    color: "lime",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Ready",
                    description: "Seamless experience on any device",
                    color: "blue",
                  },
                  {
                    icon: Users,
                    title: "24/7 Support",
                    description: "Expert assistance anytime",
                    color: "lime",
                  },
                  {
                    icon: Network,
                    title: "Global Network",
                    description: "Connected dealer ecosystem",
                    color: "blue",
                  },
                  {
                    icon: Lock,
                    title: "Secure Payments",
                    description: "Safe & encrypted transactions",
                    color: "lime",
                  },
                ].map((feature, idx) => (
                  <FeatureCard key={idx} {...feature} />
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <SectionHeader
                icon={Rocket}
                badge="SIMPLE PROCESS"
                title="How"
                gradientText="AutoPulse Works"
                description="Get your dream car in three easy steps"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    icon: Eye,
                    title: "Browse & Select",
                    description: "Explore our collection with smart filters",
                  },
                  {
                    step: "02",
                    icon: CreditCard,
                    title: "Secure Payment",
                    description: "Complete purchase with confidence",
                  },
                  {
                    step: "03",
                    icon: Truck,
                    title: "Fast Delivery",
                    description: "Receive your vehicle in 48 hours",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="relative text-center">
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/4 left-full w-full h-px bg-gradient-to-r from-[#00AEEF] to-lime-500" />
                    )}
                    <div className="rounded-2xl border border-white/10 bg-black/45 p-8 backdrop-blur-sm transition-all hover:border-[#00AEEF]/40 hover:shadow-lg hover:shadow-[#00AEEF]/10">
                      <div className="text-5xl font-bold text-[#00AEEF]/20 mb-4">
                        {step.step}
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00AEEF]/20 to-lime-500/20 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="h-8 w-8 text-[#00AEEF]" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <SectionHeader
                icon={Star}
                badge="COMMUNITY LOVE"
                title="What Our"
                gradientText="Customers Say"
                description="Join thousands of satisfied drivers"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm transition-all hover:border-[#00AEEF]/40 hover:shadow-lg hover:shadow-[#00AEEF]/10"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00AEEF] to-lime-500 flex items-center justify-center text-white font-bold">
                        {t.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{t.name}</h4>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-lime-500 text-lime-500"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="relative overflow-hidden rounded-3xl border border-[#00AEEF]/20 bg-gradient-to-r from-[#00AEEF]/10 to-[#0077b3]/10 p-8 text-center backdrop-blur-sm md:p-12"
              onMouseEnter={() => setIsHoveringCTA(true)}
              onMouseLeave={() => setIsHoveringCTA(false)}
            >
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Drive Your{" "}
                  <span className="bg-gradient-to-r from-[#00AEEF] to-lime-400 bg-clip-text text-transparent">
                    Dream Car
                  </span>
                  ?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                  Join the future of automotive commerce today
                </p>
                <Link
                  to="/listings"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Explore Inventory</span>
                  <ArrowRight
                    className={`h-5 w-5 transition-transform ${isHoveringCTA ? "translate-x-1" : ""}`}
                  />
                </Link>
                <p className="mt-6 text-xs text-gray-500">
                  ⚡ 2,500+ cars sold • 🎉 98% satisfaction • 🔒 Secure
                  transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
