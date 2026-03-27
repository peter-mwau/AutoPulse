import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BadgeCheck,
  Car,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: Shield,
      title: "Transparency First",
      description:
        "Clear pricing, no hidden dealer fees, and complete vehicle history on every listing.",
    },
    {
      icon: Zap,
      title: "Fast Experience",
      description:
        "From browsing to financing and delivery, we remove friction from every step.",
    },
    {
      icon: Users,
      title: "Human Support",
      description:
        "Real specialists guide buyers with financing, trade-ins, and post-sale support.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505] pb-20 pt-60">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[#00AEEF]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-lime-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <section className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-lime-500" />
            <span className="text-xs font-medium tracking-wide text-[#00AEEF]">
              ABOUT AUTOPULSE
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Built for a Better Car
            <span className="bg-linear-to-r from-[#00AEEF] to-lime-400 bg-clip-text text-transparent">
              {" "}
              Buying Experience
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            AutoPulse is a modern dealership platform combining curated
            inventory, transparent pricing, and digital-first tools that help
            drivers find the right car without the usual stress.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Vehicles Sold", value: "2,500+", icon: Car },
              { label: "Partner Dealers", value: "120+", icon: BadgeCheck },
              { label: "Avg. Response", value: "< 2 Hours", icon: Clock },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/35 p-4 text-center"
              >
                <item.icon className="mx-auto mb-2 h-6 w-6 text-[#00AEEF]" />
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
            >
              <value.icon className="mb-3 h-6 w-6 text-[#00AEEF]" />
              <h2 className="text-xl font-semibold text-white">
                {value.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400">{value.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[#00AEEF]/25 bg-linear-to-r from-[#00AEEF]/10 to-lime-500/10 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Why drivers trust AutoPulse
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-gray-200 md:grid-cols-2">
            {[
              "Certified multi-point vehicle inspections",
              "Transparent financing and monthly payment estimates",
              "Trade-in value estimates in minutes",
              "Real support team from first message to final delivery",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-lime-500" />
                {item}
              </p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/listings"
              className="rounded-full bg-linear-to-r from-[#00AEEF] to-[#0077b3] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105"
            >
              Browse Inventory
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-gray-200 transition-all hover:border-[#00AEEF] hover:text-white"
            >
              Contact Our Team
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-sm md:p-10">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#00AEEF]" />
            <h2 className="text-2xl font-bold text-white">Our Promise</h2>
          </div>
          <p className="mt-3 max-w-3xl text-gray-300">
            We are building the dealership experience customers deserve: faster,
            clearer, and more trustworthy. Every listing and every conversation
            should leave buyers feeling confident about their decision.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
