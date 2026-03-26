import React, { useState, useMemo } from "react";
import {
  Calculator,
  CheckCircle,
  DollarSign,
  Shield,
  TrendingUp,
  CreditCard,
  Calendar,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  BadgeCheck,
  Clock,
  FileText,
  Phone,
  PiggyBank,
  Wallet,
  BarChart3,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

function Financing() {
  const [loanAmount, setLoanAmount] = useState(35000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(4.5);
  const [selectedPlan, setSelectedPlan] = useState("standard");

  // Calculate monthly payment with useMemo to avoid setState in effect
  const monthlyPayment = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const payment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment || 0;
  }, [loanAmount, loanTerm, interestRate]);

  const perks = [
    {
      icon: DollarSign,
      title: "Flexible APR Options",
      description:
        "Competitive rates from 2.99% APR with terms tailored to your budget.",
      color: "blue",
      stat: "2.99%",
      statLabel: "Starting APR",
    },
    {
      icon: Calculator,
      title: "Fast Pre-Qualification",
      description:
        "Get pre-qualified in under 2 minutes without impacting your credit score.",
      color: "lime",
      stat: "2min",
      statLabel: "Average Time",
    },
    {
      icon: Shield,
      title: "Transparent Terms",
      description:
        "No hidden fees, clear monthly payments, full visibility from start to finish.",
      color: "blue",
      stat: "100%",
      statLabel: "Transparency",
    },
  ];

  const plans = [
    {
      id: "standard",
      name: "Standard",
      rate: 4.5,
      term: 60,
      features: [
        "Fixed rate",
        "No prepayment penalty",
        "Online account management",
      ],
      icon: Shield,
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      rate: 3.99,
      term: 72,
      features: [
        "Lower APR",
        "Extended warranty included",
        "Priority support",
        "Gap insurance",
      ],
      icon: BadgeCheck,
      popular: true,
    },
    {
      id: "flex",
      name: "Flex",
      rate: 5.5,
      term: 48,
      features: [
        "Flexible payments",
        "Early payoff option",
        "Mobile app access",
      ],
      icon: Wallet,
      popular: false,
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505] pt-[250px] pb-20 overflow-hidden">
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
                  SMART FINANCING
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Drive Now,{" "}
                <span className="bg-gradient-to-r from-[#00AEEF] to-lime-400 bg-clip-text text-transparent">
                  Pay Smart
                </span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mb-6">
                AutoPulse financing connects you with trusted lending partners
                so you can choose the plan that fits your lifestyle. Get
                pre-qualified in minutes.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-full transition-all hover:scale-105">
                  <span>Get Pre-Qualified</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 text-gray-300 font-semibold rounded-full transition-all hover:border-[#00AEEF] hover:text-white">
                  <Calculator className="h-4 w-4" />
                  Calculate Payment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {
              label: "Average APR",
              value: "3.99%",
              icon: TrendingUp,
              change: "-0.5%",
            },
            {
              label: "Approval Rate",
              value: "94%",
              icon: BadgeCheck,
              change: "+12%",
            },
            {
              label: "Avg. Savings",
              value: "$2,500",
              icon: PiggyBank,
              change: "vs traditional",
            },
            {
              label: "Processing Time",
              value: "2min",
              icon: Clock,
              change: "60% faster",
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

        {/* Calculator Section */}
        <div className="mb-16">
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="h-5 w-5 text-[#00AEEF]" />
                  <h2 className="text-2xl font-bold text-white">
                    Payment Calculator
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Vehicle Price: {formatCurrency(loanAmount)}
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="150000"
                      step="5000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$10k</span>
                      <span>$50k</span>
                      <span>$100k</span>
                      <span>$150k</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Loan Term: {loanTerm} months
                    </label>
                    <input
                      type="range"
                      min="24"
                      max="84"
                      step="12"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>24mo</span>
                      <span>36mo</span>
                      <span>48mo</span>
                      <span>60mo</span>
                      <span>72mo</span>
                      <span>84mo</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Estimated APR: {interestRate}%
                    </label>
                    <input
                      type="range"
                      min="2.99"
                      max="15.99"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) =>
                        setInterestRate(parseFloat(e.target.value))
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>2.99%</span>
                      <span>6%</span>
                      <span>10%</span>
                      <span>15.99%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculator Results */}
              <div className="bg-gradient-to-br from-[#00AEEF]/10 to-lime-500/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Your Estimated Payment
                </h3>
                <div className="mb-6">
                  <p className="text-4xl md:text-5xl font-bold text-white">
                    {formatCurrency(monthlyPayment)}
                  </p>
                  <p className="text-gray-400 mt-1">per month</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Total Loan Amount</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Total Interest</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(monthlyPayment * loanTerm - loanAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400">Total Cost</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(monthlyPayment * loanTerm)}
                    </span>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-xl hover:scale-105 transition-transform">
                  Apply Now
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  *Rates are estimates based on credit score. Final terms may
                  vary.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Perks Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/60 to-black/40 border border-white/10 p-6 transition-all hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div
                    className={`mb-4 inline-flex rounded-lg bg-[#00AEEF]/10 p-2.5`}
                  >
                    <Icon className="h-5 w-5 text-[#00AEEF]" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-white">
                      {perk.title}
                    </h2>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#00AEEF]">
                        {perk.stat}
                      </p>
                      <p className="text-xs text-gray-500">{perk.statLabel}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{perk.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Financing Plans */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Choose Your <span className="text-[#00AEEF]">Plan</span>
            </h2>
            <p className="text-gray-400">
              Flexible financing options tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative cursor-pointer rounded-2xl p-6 transition-all ${
                    selectedPlan === plan.id
                      ? "border-2 border-[#00AEEF] bg-gradient-to-br from-[#00AEEF]/20 to-lime-500/20 shadow-2xl shadow-[#00AEEF]/20"
                      : "border border-white/10 bg-black/40 hover:border-[#00AEEF]/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#00AEEF] to-lime-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className="inline-flex rounded-full bg-[#00AEEF]/10 p-3 mb-3">
                      <Icon className="h-6 w-6 text-[#00AEEF]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-2xl font-bold text-[#00AEEF] mt-2">
                      {plan.rate}% APR
                    </p>
                    <p className="text-sm text-gray-500">{plan.term} months</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="h-4 w-4 text-lime-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
                      selectedPlan === plan.id
                        ? "bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white hover:scale-105"
                        : "border border-white/20 text-gray-300 hover:border-[#00AEEF] hover:text-white"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="rounded-3xl bg-gradient-to-r from-[#00AEEF]/10 to-[#0077b3]/10 p-8 md:p-10 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#00AEEF]/20">
              <Zap className="h-5 w-5 text-[#00AEEF]" />
            </div>
            <h2 className="text-2xl font-bold text-white">How it works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: FileText,
                title: "Submit Details",
                description: "Quick application form with basic information",
              },
              {
                step: "02",
                icon: Calculator,
                title: "Compare Offers",
                description: "Review personalized offers from top lenders",
              },
              {
                step: "03",
                icon: CheckCircle,
                title: "Secure Purchase",
                description: "Choose your plan and complete purchase",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-px bg-gradient-to-r from-[#00AEEF] to-lime-500" />
                )}
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00AEEF]/20 mb-3">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00AEEF]/20 to-lime-500/20 flex items-center justify-center mx-auto mb-3">
                    <step.icon className="h-6 w-6 text-[#00AEEF]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Have questions about financing?{" "}
            <button className="text-[#00AEEF] hover:underline inline-flex items-center gap-1">
              Contact our specialists <ArrowRight className="h-3 w-3" />
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Financing;
