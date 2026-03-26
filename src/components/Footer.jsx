import React from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  ChevronRight,
  Send,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Home", to: "/" },
        { name: "Inventory", to: "/listings" },
        { name: "Financing", to: "/financing" },
        { name: "Trade-In", to: "/trade-in" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "For Dealerships", to: "/about" },
        { name: "For Buyers", to: "/listings" },
        { name: "For Financing", to: "/financing" },
        { name: "For Trade-Ins", to: "/trade-in" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Support Center", to: "/contact" },
        { name: "Live Inventory", to: "/listings" },
        { name: "Payment Calculator", to: "/financing" },
        { name: "Trade-In Estimate", to: "/trade-in" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Contact", to: "/contact" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-linear-to-b from-[#0B0B0B] to-[#050505] pt-5">
      {/* Glow Effect at Top */}
      <div className="absolute -top-px left-0 h-px w-full bg-linear-to-r from-transparent via-[#00AEEF] to-transparent"></div>

      {/* Pulse Animation Line */}
      <div className="absolute left-0 top-0 h-px w-24 bg-lime-500 animate-pulse"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            {/* <div className="flex items-center gap-2 mb-6">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute h-8 w-8 rotate-45 border-2 border-[#00AEEF]"></div>
                <span className="relative text-2xl font-black text-white">
                  A
                </span>
                <div className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-lime-400 animate-pulse"></div>
              </div>
              <h2 className="text-2xl font-bold">
                <span className="text-white">Auto</span>
                <span className="text-[#00AEEF]">Pulse</span>
              </h2>
            </div> */}
            <img
              src="/AutoPulse_logo.png"
              alt="AutoPulse Logo"
              className="mb-6 h-20 w-30"
            />

            <p className="mb-6 text-sm leading-relaxed text-gray-400 max-w-sm">
              End-to-end automotive commerce platform powering the next
              generation of car dealerships with AI-driven insights and seamless
              purchasing experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 hover:text-[#00AEEF] transition-colors">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  123 Innovation Drive, Silicon Valley, CA
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-[#00AEEF] transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-[#00AEEF] transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@autopulse.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#00AEEF]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="group flex items-center gap-1 text-sm text-gray-400 transition-all hover:text-white"
                      >
                        <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="group flex items-center gap-1 text-sm text-gray-400 transition-all hover:text-white"
                      >
                        <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.name}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-lime-500" />
              <span className="text-sm font-medium text-white">
                Stay updated with AutoPulse news
              </span>
            </div>

            <form className="flex w-full max-w-md gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg bg-black/50 px-10 py-2.5 text-sm text-white placeholder:text-gray-500 border border-white/10 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF] transition-all"
                />
              </div>
              <button
                type="submit"
                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-[#00AEEF] to-[#0077b3] px-4 py-2.5 text-sm font-medium text-white transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Subscribe
                  <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} AutoPulse. All rights reserved. |
            <a href="#" className="ml-1 hover:text-[#00AEEF] transition-colors">
              Privacy Policy
            </a>
            <span className="mx-1">•</span>
            <a href="#" className="hover:text-[#00AEEF] transition-colors">
              Terms of Service
            </a>
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/30 text-gray-400 transition-all hover:border-[#00AEEF] hover:text-[#00AEEF]"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-[#00AEEF]/0 transition-all group-hover:bg-[#00AEEF]/10"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
