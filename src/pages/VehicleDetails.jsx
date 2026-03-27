import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Fuel,
  Gauge,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Truck,
} from "lucide-react";
import { useCars } from "../contexts/carsContext";

function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cars } = useCars();

  const car = cars.find((item) => String(item.id) === String(id));

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!car) {
    return (
      <main className="relative min-h-screen bg-linear-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505] pb-20 pt-60">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-10 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-white">Vehicle not found</h1>
            <p className="mt-3 text-gray-400">
              This listing may have been removed or is still loading.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-gray-200 transition-all hover:border-[#00AEEF] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
              <Link
                to="/listings"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#00AEEF] to-[#0077b3] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105"
              >
                Browse Inventory
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#050505] pb-20 pt-60">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 right-10 h-80 w-80 rounded-full bg-[#00AEEF]/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-lime-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm transition-all hover:border-[#00AEEF] hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
            <div className="relative h-105 overflow-hidden rounded-2xl">
              <img
                src={car.img_url}
                alt={`${car.make} ${car.model}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/1000x700?text=Vehicle+Image";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/40 bg-black/60 px-3 py-1 text-xs text-[#00AEEF]">
                <Sparkles className="h-3 w-3 text-lime-500" />
                FEATURED LISTING
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm md:p-8">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              {car.make.charAt(0).toUpperCase() + car.make.slice(1)}{" "}
              {car.model.toUpperCase()}
            </h1>

            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Calendar className="h-4 w-4 text-[#00AEEF]" />
                {car.year}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Gauge className="h-4 w-4 text-[#00AEEF]" />
                {car.horsepower} HP
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Fuel className="h-4 w-4 text-[#00AEEF]" />
                Premium Gasoline
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-[#00AEEF]/30 bg-linear-to-r from-[#00AEEF]/15 to-lime-500/10 p-5">
              <p className="text-sm text-gray-300">Starting from</p>
              <p className="mt-1 text-4xl font-bold text-white">
                {formatPrice(car.price)}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Est. {formatPrice(car.price / 60)}/month for 60 months
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button className="rounded-xl bg-linear-to-r from-[#00AEEF] to-[#0077b3] px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]">
                Reserve This Car
              </button>
              <Link
                to="/financing"
                className="rounded-xl border border-[#00AEEF] px-5 py-3 text-center text-sm font-semibold text-[#00AEEF] transition-all hover:bg-[#00AEEF]/10"
              >
                Start Financing
              </Link>
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Why Buy From AutoPulse
              </h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  "150-point inspection completed",
                  "7-day return guarantee",
                  "Nationwide delivery available",
                  "No hidden dealer fees",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
            <Shield className="mb-2 h-5 w-5 text-[#00AEEF]" />
            <h3 className="text-sm font-semibold text-white">
              Certified Quality
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Every car is mechanically inspected and backed by our warranty.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
            <Truck className="mb-2 h-5 w-5 text-[#00AEEF]" />
            <h3 className="text-sm font-semibold text-white">Fast Delivery</h3>
            <p className="mt-2 text-sm text-gray-400">
              Doorstep delivery options with live tracking and secure transport.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
            <MapPin className="mb-2 h-5 w-5 text-[#00AEEF]" />
            <h3 className="text-sm font-semibold text-white">Dealer Support</h3>
            <p className="mt-2 text-sm text-gray-400">
              Talk to our specialists at +1 (555) 123-4567 for this listing.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-gray-200 transition-all hover:border-[#00AEEF]"
          >
            <Phone className="h-4 w-4 text-[#00AEEF]" />
            Call Dealership
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-gray-200 transition-all hover:border-[#00AEEF]"
          >
            Contact Sales Team
          </Link>
        </div>
      </div>
    </main>
  );
}

export default VehicleDetails;
