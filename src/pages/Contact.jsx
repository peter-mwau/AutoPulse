import React, { useState } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Send,
  MessageCircle,
  User,
  Building,
  Calendar,
  CheckCircle,
  MessageSquare,
  Clock,
  Users,
  Globe,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Headphones,
  Shield,
  Zap,
  Star,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM", status: "open" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM", status: "open" },
    { day: "Sunday", hours: "12:00 PM - 5:00 PM", status: "limited" },
  ];

  const departments = [
    {
      name: "Sales",
      email: "sales@autopulse.com",
      phone: "+1 (555) 123-4567",
      icon: Users,
    },
    {
      name: "Support",
      email: "support@autopulse.com",
      phone: "+1 (555) 123-4568",
      icon: Headphones,
    },
    {
      name: "Financing",
      email: "finance@autopulse.com",
      phone: "+1 (555) 123-4569",
      icon: Shield,
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505] pt-36 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#00AEEF]/10 rounded-full blur-3xl animate-ping" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/20 via-transparent to-lime-500/20 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1.5 backdrop-blur-sm mb-6">
                <Sparkles className="h-4 w-4 text-lime-500" />
                <span className="text-xs font-medium text-[#00AEEF] tracking-wide">
                  GET IN TOUCH
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Let's Find Your{" "}
                <span className="bg-gradient-to-r from-[#00AEEF] to-lime-400 bg-clip-text text-transparent">
                  Next Car
                </span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mb-6">
                Reach our team for sales, financing, or trade-in support. We'll
                guide you through every step of your automotive journey.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-full transition-all hover:scale-105"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("map")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 text-gray-300 font-semibold rounded-full transition-all hover:border-[#00AEEF] hover:text-white"
                >
                  <MapPin className="h-4 w-4" />
                  Find Showroom
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {
              label: "Response Time",
              value: "< 2hr",
              icon: Clock,
              change: "Average",
            },
            {
              label: "Happy Clients",
              value: "2,500+",
              icon: Users,
              change: "+150 this month",
            },
            {
              label: "5-Star Ratings",
              value: "4.9/5",
              icon: Star,
              change: "Excellent",
            },
            {
              label: "Support Channels",
              value: "5",
              icon: MessageCircle,
              change: "24/7 Available",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#00AEEF]/30 transition-all"
            >
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-[#00AEEF]" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              <p className="text-xs text-lime-500 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div
            id="contact-form"
            className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="h-5 w-5 text-[#00AEEF]" />
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-lime-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-lime-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  We'll get back to you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00AEEF] focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00AEEF] focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00AEEF] focus:outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white focus:border-[#00AEEF] focus:outline-none transition-all"
                    >
                      <option value="">Select subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="financing">Financing Question</option>
                      <option value="tradein">Trade-In Valuation</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00AEEF] focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Quick Contact
              </h2>
              <div className="space-y-4">
                <div
                  className="flex items-center gap-3 p-3 rounded-xl bg-black/30 hover:bg-black/50 transition-all group cursor-pointer"
                  onClick={() => copyToClipboard("+1 (555) 123-4567")}
                >
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10">
                    <Phone className="h-4 w-4 text-[#00AEEF]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-lime-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                <div
                  className="flex items-center gap-3 p-3 rounded-xl bg-black/30 hover:bg-black/50 transition-all group cursor-pointer"
                  onClick={() => copyToClipboard("hello@autopulse.com")}
                >
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10">
                    <Mail className="h-4 w-4 text-[#00AEEF]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">
                      hello@autopulse.com
                    </p>
                  </div>
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-lime-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30">
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10">
                    <MapPin className="h-4 w-4 text-[#00AEEF]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Showroom</p>
                    <p className="text-white font-medium">
                      123 Innovation Drive, Silicon Valley, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-[#00AEEF]" />
                <h2 className="text-xl font-bold text-white">Business Hours</h2>
              </div>
              <div className="space-y-3">
                {businessHours.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
                  >
                    <span className="text-gray-300">{item.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">
                        {item.hours}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === "open"
                            ? "bg-lime-500/20 text-lime-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {item.status === "open" ? "Open" : "Limited"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-[#00AEEF]/5 border border-[#00AEEF]/20">
                <p className="text-xs text-gray-400 text-center">
                  🚗 Test drives available by appointment. Walk-ins welcome
                  subject to availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Contact Our <span className="text-[#00AEEF]">Departments</span>
            </h2>
            <p className="text-gray-400">
              Direct lines to our specialist teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-[#00AEEF]/50 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#00AEEF]/10">
                      <Icon className="h-5 w-5 text-[#00AEEF]" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {dept.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-3 w-3 text-gray-500" />
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-gray-300 hover:text-[#00AEEF] transition-colors"
                      >
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-3 w-3 text-gray-500" />
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-gray-300 hover:text-[#00AEEF] transition-colors"
                      >
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div id="map" className="mb-16">
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-[#00AEEF]" />
              <h2 className="text-xl font-bold text-white">Find Us</h2>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <iframe
                title="AutoPulse Showroom Location"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Silicon+Valley+CA&output=embed"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-400">
                📍 123 Innovation Drive, Silicon Valley, CA 94025
              </p>
              <a
                href="https://maps.google.com/?q=123+Innovation+Drive+Silicon+Valley+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00AEEF] text-sm hover:underline inline-flex items-center gap-1"
              >
                Get Directions <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1.5 backdrop-blur-sm mb-6">
            <Globe className="h-4 w-4 text-lime-500" />
            <span className="text-xs font-medium text-[#00AEEF] tracking-wide">
              FOLLOW US
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">Stay Connected</h3>
          <div className="flex justify-center gap-4">
            {[
              { icon: Twitter, name: "Twitter", color: "hover:text-[#1DA1F2]" },
              {
                icon: Linkedin,
                name: "LinkedIn",
                color: "hover:text-[#0077B5]",
              },
              {
                icon: Instagram,
                name: "Instagram",
                color: "hover:text-[#E4405F]",
              },
              { icon: Youtube, name: "YouTube", color: "hover:text-[#FF0000]" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href="#"
                  className="p-3 rounded-full bg-black/40 border border-white/10 text-gray-400 transition-all hover:scale-110 hover:border-[#00AEEF] hover:text-[#00AEEF]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-gray-500">
            🚀 Follow us for the latest arrivals, exclusive offers, and
            automotive news
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
