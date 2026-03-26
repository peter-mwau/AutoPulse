import React, { useState } from "react";
import {
  BadgeCheck,
  Camera,
  FileCheck2,
  RefreshCw,
  ArrowRight,
  Sparkles,
  TrendingUp,
  DollarSign,
  Car,
  Calculator,
  Calendar,
  Gauge,
  Fuel,
  Upload,
  CheckCircle,
  Clock,
  Award,
  Zap,
  Shield,
  BarChart3,
  ChevronRight,
  Star,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

function TradeIn() {
  const [vehicleData, setVehicleData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    condition: "good",
  });
  const [estimatedValue, setEstimatedValue] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const steps = [
    {
      icon: Camera,
      title: "Share Vehicle Details",
      description: "Upload photos and basic specs of your current vehicle.",
      color: "blue",
    },
    {
      icon: FileCheck2,
      title: "Get Instant Estimate",
      description: "Receive a data-backed estimate from current market trends.",
      color: "lime",
    },
    {
      icon: RefreshCw,
      title: "Apply to New Purchase",
      description: "Use your trade-in value directly toward your next car.",
      color: "blue",
    },
  ];

  const conditions = [
    {
      value: "excellent",
      label: "Excellent",
      multiplier: 1.2,
      description: "Like new, no issues",
    },
    {
      value: "good",
      label: "Good",
      multiplier: 1.0,
      description: "Minor wear, well maintained",
    },
    {
      value: "fair",
      label: "Fair",
      multiplier: 0.8,
      description: "Visible wear, needs some work",
    },
    {
      value: "poor",
      label: "Poor",
      multiplier: 0.6,
      description: "Significant wear, needs repairs",
    },
  ];

  const handleCalculate = () => {
    setIsCalculating(true);
    // Simulate API call
    setTimeout(() => {
      const baseValue = 25000;
      const yearFactor = (2024 - parseInt(vehicleData.year || 2020)) * 0.05;
      const mileageFactor =
        (parseInt(vehicleData.mileage || 50000) / 50000) * 0.1;
      const conditionMultiplier =
        conditions.find((c) => c.value === vehicleData.condition)?.multiplier ||
        1;

      let value =
        baseValue *
        (1 - yearFactor) *
        (1 - mileageFactor) *
        conditionMultiplier;
      value = Math.max(5000, Math.min(50000, value));

      setEstimatedValue(Math.round(value / 1000) * 1000);
      setIsCalculating(false);
    }, 1500);
  };

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
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  TRADE-IN PROGRAM
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Upgrade With{" "}
                <span className="bg-gradient-to-r from-[#00AEEF] to-lime-400 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mb-6">
                Trade in your vehicle and unlock a smoother path to your next
                purchase with transparent valuations. Get an instant estimate in
                minutes.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    document
                      .getElementById("trade-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-full transition-all hover:scale-105"
                >
                  <span>Start Trade-In</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 text-gray-300 font-semibold rounded-full transition-all hover:border-[#00AEEF] hover:text-white">
                  <Calculator className="h-4 w-4" />
                  Calculate Value
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {
              label: "Avg. Trade-In Value",
              value: "$18,500",
              icon: DollarSign,
              change: "+12%",
            },
            {
              label: "Success Rate",
              value: "96%",
              icon: BadgeCheck,
              change: "+8%",
            },
            {
              label: "Processing Time",
              value: "2min",
              icon: Clock,
              change: "50% faster",
            },
            {
              label: "Satisfaction",
              value: "4.9/5",
              icon: Star,
              change: "Excellent",
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

        {/* Interactive Trade-In Form */}
        <div id="trade-form" className="mb-16">
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Car className="h-5 w-5 text-[#00AEEF]" />
                  <h2 className="text-2xl font-bold text-white">
                    Vehicle Details
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Make
                      </label>
                      <select
                        value={vehicleData.make}
                        onChange={(e) =>
                          setVehicleData({
                            ...vehicleData,
                            make: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white focus:border-[#00AEEF] focus:outline-none transition-all"
                      >
                        <option value="">Select Make</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="ford">Ford</option>
                        <option value="bmw">BMW</option>
                        <option value="mercedes">Mercedes-Benz</option>
                        <option value="audi">Audi</option>
                        <option value="tesla">Tesla</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Model
                      </label>
                      <input
                        type="text"
                        value={vehicleData.model}
                        onChange={(e) =>
                          setVehicleData({
                            ...vehicleData,
                            model: e.target.value,
                          })
                        }
                        placeholder="e.g., Camry"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00AEEF] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Year
                      </label>
                      <select
                        value={vehicleData.year}
                        onChange={(e) =>
                          setVehicleData({
                            ...vehicleData,
                            year: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white focus:border-[#00AEEF] focus:outline-none"
                      >
                        <option value="">Select Year</option>
                        {[...Array(20)].map((_, i) => {
                          const year = 2024 - i;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mileage
                      </label>
                      <input
                        type="number"
                        value={vehicleData.mileage}
                        onChange={(e) =>
                          setVehicleData({
                            ...vehicleData,
                            mileage: e.target.value,
                          })
                        }
                        placeholder="e.g., 45000"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00AEEF] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Condition
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {conditions.map((cond) => (
                        <button
                          key={cond.value}
                          onClick={() =>
                            setVehicleData({
                              ...vehicleData,
                              condition: cond.value,
                            })
                          }
                          className={`p-2 rounded-lg text-center transition-all ${
                            vehicleData.condition === cond.value
                              ? "bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white"
                              : "bg-black/30 border border-white/10 text-gray-400 hover:border-[#00AEEF]/50"
                          }`}
                        >
                          <p className="text-xs font-semibold">{cond.label}</p>
                          <p className="text-[10px] opacity-75">
                            {cond.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Photos
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-[#00AEEF]/50 transition-all cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-gray-500 mb-2" />
                      <p className="text-sm text-gray-500">
                        Click or drag photos here
                      </p>
                      <p className="text-xs text-gray-600">
                        Upload up to 5 photos of your vehicle
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleCalculate}
                    disabled={
                      !vehicleData.make ||
                      !vehicleData.model ||
                      !vehicleData.year
                    }
                    className="w-full py-3 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get Instant Estimate
                  </button>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-[#00AEEF]/10 to-lime-500/10 rounded-2xl p-6 border border-white/10">
                {isCalculating ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 border-4 border-[#00AEEF] border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-gray-300">
                      Calculating your vehicle's value...
                    </p>
                  </div>
                ) : estimatedValue ? (
                  <>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Your Trade-In Estimate
                    </h3>
                    <div className="mb-6">
                      <p className="text-4xl md:text-5xl font-bold text-white">
                        {formatCurrency(estimatedValue)}
                      </p>
                      <p className="text-gray-400 mt-1">
                        estimated trade-in value
                      </p>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-gray-400">Market Value</span>
                        <span className="text-white font-semibold">
                          {formatCurrency(estimatedValue * 1.1)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-gray-400">
                          Condition Adjustment
                        </span>
                        <span className="text-lime-500 font-semibold">
                          +{formatCurrency(estimatedValue * 0.1)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-400">Tax Savings</span>
                        <span className="text-lime-500 font-semibold">
                          ~{formatCurrency(estimatedValue * 0.08)}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/listings"
                      className="block w-full text-center py-3 bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white font-semibold rounded-xl hover:scale-105 transition-transform mb-3"
                    >
                      Apply to Purchase
                    </Link>
                    <p className="text-xs text-gray-500 text-center">
                      *Estimate based on current market data. Final offer may
                      vary after inspection.
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <BadgeCheck className="h-12 w-12 text-[#00AEEF] mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Ready to Trade?
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Fill out your vehicle details to get an instant estimate
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/60 to-black/40 border border-white/10 p-6 transition-all hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`inline-flex rounded-lg bg-[#00AEEF]/10 p-2.5`}
                    >
                      <Icon className="h-5 w-5 text-[#00AEEF]" />
                    </div>
                    <span className="text-3xl font-bold text-[#00AEEF]/20">
                      0{idx + 1}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-2">
                    {stepItem.title}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Why Trade With <span className="text-[#00AEEF]">AutoPulse</span>
            </h2>
            <p className="text-gray-400">
              Benefits of choosing our trade-in program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Fair Market Value",
                description:
                  "AI-powered valuation based on real-time market data",
                color: "blue",
              },
              {
                icon: Clock,
                title: "Instant Process",
                description: "Get your estimate in under 2 minutes",
                color: "lime",
              },
              {
                icon: Shield,
                title: "No Obligation",
                description: "Free estimate with no commitment required",
                color: "blue",
              },
              {
                icon: Award,
                title: "Best Price Guarantee",
                description: "We match competitive offers from other dealers",
                color: "lime",
              },
              {
                icon: Zap,
                title: "Seamless Transfer",
                description: "Apply value directly to your new purchase",
                color: "blue",
              },
              {
                icon: CheckCircle,
                title: "Transparent Process",
                description: "Clear breakdown of your vehicle's value",
                color: "lime",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-[#00AEEF]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-[#00AEEF]/10`}>
                    <benefit.icon className="h-4 w-4 text-[#00AEEF]" />
                  </div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="rounded-3xl bg-gradient-to-r from-[#00AEEF]/10 to-[#0077b3]/10 p-8 md:p-10 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#00AEEF]/20">
              <Info className="h-5 w-5 text-[#00AEEF]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How is my trade-in value calculated?",
                a: "We use AI-powered algorithms analyzing real-time market data, vehicle condition, mileage, and local demand.",
              },
              {
                q: "Do I need to purchase a car to trade in?",
                a: "No, you can get a free estimate without any purchase obligation.",
              },
              {
                q: "What documents do I need?",
                a: "Vehicle title, registration, and any maintenance records you have.",
              },
              {
                q: "How long is the offer valid?",
                a: "Your estimate is valid for 7 days, giving you time to decide.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/30 border border-white/10"
              >
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-sm text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Ready to upgrade your ride?{" "}
            <button
              onClick={() =>
                document
                  .getElementById("trade-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[#00AEEF] hover:underline inline-flex items-center gap-1"
            >
              Start your trade-in now <ChevronRight className="h-3 w-3" />
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

export default TradeIn;
