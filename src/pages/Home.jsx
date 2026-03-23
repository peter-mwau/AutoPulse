import React, { useState, useMemo, useEffect } from "react";
import { useCars } from "../contexts/carsContext";
import {
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Zap,
  Gauge,
  Calendar,
  DollarSign,
  Fuel,
  Settings,
  Star,
  Shield,
  Clock,
  CreditCard,
  Info,
  CheckCircle,
  Truck,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function Home() {
  const { cars } = useCars();
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [horsepowerRange, setHorsepowerRange] = useState({ min: 0, max: 1000 });
  const [yearRange, setYearRange] = useState({ min: 2000, max: 2024 });
  const [sortBy, setSortBy] = useState("price-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Categories based on car types
  const categories = [
    { id: "all", name: "All Vehicles", icon: "🚗", color: "blue" },
    {
      id: "luxury",
      name: "Luxury",
      icon: "👑",
      color: "purple",
      condition: (car) => car.price > 50000,
    },
    {
      id: "sports",
      name: "Sports",
      icon: "🏎️",
      color: "red",
      condition: (car) => car.horsepower > 300,
    },
    {
      id: "economy",
      name: "Economy",
      icon: "💰",
      color: "green",
      condition: (car) => car.price < 30000,
    },
    {
      id: "performance",
      name: "Performance",
      icon: "⚡",
      color: "yellow",
      condition: (car) => car.horsepower > 400,
    },
  ];

  // Get unique makes for filter
  const makes = useMemo(() => {
    const uniqueMakes = [...new Set(cars.map((car) => car.make))];
    return uniqueMakes.sort();
  }, [cars]);

  // Filter and sort cars
  const filteredCars = useMemo(() => {
    let filtered = [...cars];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((car) =>
        `${car.make} ${car.model}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      const category = categories.find((c) => c.id === selectedCategory);
      if (category && category.condition) {
        filtered = filtered.filter((car) => category.condition(car));
      }
    }

    // Make filter
    if (selectedMake) {
      filtered = filtered.filter((car) => car.make === selectedMake);
    }

    // Price filter
    filtered = filtered.filter(
      (car) => car.price >= priceRange.min && car.price <= priceRange.max,
    );

    // Horsepower filter
    filtered = filtered.filter(
      (car) =>
        car.horsepower >= horsepowerRange.min &&
        car.horsepower <= horsepowerRange.max,
    );

    // Year filter
    filtered = filtered.filter(
      (car) => car.year >= yearRange.min && car.year <= yearRange.max,
    );

    // Sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "horsepower-asc":
        filtered.sort((a, b) => a.horsepower - b.horsepower);
        break;
      case "horsepower-desc":
        filtered.sort((a, b) => b.horsepower - a.horsepower);
        break;
      case "year-desc":
        filtered.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        filtered.sort((a, b) => a.year - b.year);
        break;
      default:
        break;
    }

    return filtered;
  }, [
    cars,
    searchTerm,
    selectedMake,
    selectedCategory,
    priceRange,
    horsepowerRange,
    yearRange,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const paginatedCars = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCars.slice(startIndex, endIndex);
  }, [filteredCars, currentPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    selectedMake,
    selectedCategory,
    priceRange,
    horsepowerRange,
    yearRange,
    sortBy,
  ]);

  const toggleFavorite = (carId) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId],
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br pb-5 from-[#0B0B0B] via-[#0F0F0F] to-[#050505] pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-black/40 px-4 py-1 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-lime-500" />
              <span className="text-xs font-medium text-gray-300">
                Live Inventory
              </span>
              <div className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500"></span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Our <span className="text-[#00AEEF]">Showcase</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Discover our curated collection of premium vehicles. Each car
              comes with detailed specs and instant purchase options.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-3 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white shadow-lg shadow-[#00AEEF]/30"
                      : "border border-white/10 bg-black/40 text-gray-300 hover:border-[#00AEEF]/50 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search by make or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg bg-black/50 px-10 py-3 text-white placeholder:text-gray-500 border border-white/10 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF] transition-all"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-white transition-all hover:border-[#00AEEF]"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {showFilters ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-lg bg-black/50 px-4 py-2 text-white border border-white/10 focus:border-[#00AEEF] focus:outline-none"
                >
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="horsepower-desc">
                    Horsepower: High to Low
                  </option>
                  <option value="horsepower-asc">
                    Horsepower: Low to High
                  </option>
                  <option value="year-desc">Newest First</option>
                  <option value="year-asc">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="rounded-lg border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Make Filter */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Make
                    </label>
                    <select
                      value={selectedMake}
                      onChange={(e) => setSelectedMake(e.target.value)}
                      className="w-full rounded-lg bg-black/50 px-3 py-2 text-white border border-white/10 focus:border-[#00AEEF] focus:outline-none"
                    >
                      <option value="">All Makes</option>
                      {makes.map((make) => (
                        <option key={make} value={make}>
                          {make.charAt(0).toUpperCase() + make.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Max Price: {formatPrice(priceRange.max)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          max: parseInt(e.target.value),
                        })
                      }
                      className="w-full accent-[#00AEEF]"
                    />
                  </div>

                  {/* Horsepower Range */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Max Horsepower: {horsepowerRange.max} HP
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="50"
                      value={horsepowerRange.max}
                      onChange={(e) =>
                        setHorsepowerRange({
                          ...horsepowerRange,
                          max: parseInt(e.target.value),
                        })
                      }
                      className="w-full accent-[#00AEEF]"
                    />
                  </div>

                  {/* Year Range */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Year: {yearRange.min} - {yearRange.max}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="2000"
                        max="2024"
                        value={yearRange.min}
                        onChange={(e) =>
                          setYearRange({
                            ...yearRange,
                            min: parseInt(e.target.value),
                          })
                        }
                        className="w-1/2 rounded-lg bg-black/50 px-3 py-2 text-white border border-white/10 focus:border-[#00AEEF] focus:outline-none"
                      />
                      <input
                        type="number"
                        min="2000"
                        max="2024"
                        value={yearRange.max}
                        onChange={(e) =>
                          setYearRange({
                            ...yearRange,
                            max: parseInt(e.target.value),
                          })
                        }
                        className="w-1/2 rounded-lg bg-black/50 px-3 py-2 text-white border border-white/10 focus:border-[#00AEEF] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedMake ||
                  priceRange.max < 200000 ||
                  horsepowerRange.max < 1000 ||
                  yearRange.min > 2000 ||
                  yearRange.max < 2024) && (
                  <button
                    onClick={() => {
                      setSelectedMake("");
                      setPriceRange({ min: 0, max: 200000 });
                      setHorsepowerRange({ min: 0, max: 1000 });
                      setYearRange({ min: 2000, max: 2024 });
                    }}
                    className="mt-4 text-sm text-[#00AEEF] hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="text-[#00AEEF] font-semibold">
                {paginatedCars.length}
              </span>{" "}
              of {filteredCars.length} vehicles
            </p>
          </div>

          {/* Car Grid */}
          {paginatedCars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedCars.map((car) => (
                  <div
                    key={car.id}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-black/80 to-black/40 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-[#00AEEF]/50 hover:shadow-2xl hover:shadow-[#00AEEF]/20"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-black/50">
                      <img
                        src={car.img_url}
                        alt={`${car.make} ${car.model}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x300?text=No+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(car.id)}
                        className="absolute top-3 right-3 rounded-full bg-black/60 p-2 backdrop-blur-sm transition-all hover:scale-110"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(car.id)
                              ? "fill-red-500 text-red-500"
                              : "text-white"
                          }`}
                        />
                      </button>

                      {/* Year Badge */}
                      <div className="absolute top-3 left-3 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {car.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {car.make.charAt(0).toUpperCase() + car.make.slice(1)}{" "}
                          {car.model.toUpperCase()}
                        </h3>
                      </div>

                      {/* Specs */}
                      <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Gauge className="h-4 w-4 text-[#00AEEF]" />
                          <span>{car.horsepower} HP</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-[#00AEEF]" />
                          <span>{car.year}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4 flex items-baseline gap-1">
                        <DollarSign className="h-4 w-4 text-lime-500" />
                        <span className="text-2xl font-bold text-white">
                          {formatPrice(car.price)}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedCar(car)}
                          className="flex-1 rounded-lg border border-[#00AEEF] bg-transparent px-4 py-2 text-sm font-medium text-[#00AEEF] transition-all hover:bg-[#00AEEF]/10"
                        >
                          Quick View
                        </button>
                        <button className="flex-1 rounded-lg bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="rounded-lg border border-white/10 bg-black/50 p-2 text-white transition-all hover:border-[#00AEEF] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1;
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`h-10 w-10 rounded-lg font-medium transition-all ${
                            currentPage === pageNum
                              ? "bg-gradient-to-r from-[#00AEEF] to-[#0077b3] text-white"
                              : "border border-white/10 bg-black/50 text-gray-400 hover:border-[#00AEEF] hover:text-white"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      pageNum === currentPage - 2 ||
                      pageNum === currentPage + 2
                    ) {
                      return (
                        <span key={idx} className="text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="rounded-lg border border-white/10 bg-black/50 p-2 text-white transition-all hover:border-[#00AEEF] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="rounded-full bg-black/50 p-6 mb-4">
                <Search className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No vehicles found
              </h3>
              <p className="text-gray-400">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedMake("");
                  setSelectedCategory("all");
                  setPriceRange({ min: 0, max: 200000 });
                  setHorsepowerRange({ min: 0, max: 1000 });
                  setYearRange({ min: 2000, max: 2024 });
                }}
                className="mt-4 rounded-lg bg-[#00AEEF] px-4 py-2 text-black font-medium hover:bg-[#00AEEF]/80"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Car Details Modal */}
      {selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedCar(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#0B0B0B] to-[#050505] border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 backdrop-blur-sm text-white hover:bg-black/80 transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 md:p-8">
              {/* Image */}
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedCar.img_url}
                  alt={`${selectedCar.make} ${selectedCar.model}`}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x400?text=No+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedCar.make.charAt(0).toUpperCase() +
                      selectedCar.make.slice(1)}{" "}
                    {selectedCar.model.toUpperCase()}
                  </h2>
                  <p className="text-gray-300">{selectedCar.year}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Specs */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-black/50 p-4 border border-white/10">
                      <Gauge className="h-5 w-5 text-[#00AEEF] mb-2" />
                      <p className="text-sm text-gray-400">Horsepower</p>
                      <p className="text-xl font-bold text-white">
                        {selectedCar.horsepower} HP
                      </p>
                    </div>
                    <div className="rounded-lg bg-black/50 p-4 border border-white/10">
                      <Calendar className="h-5 w-5 text-[#00AEEF] mb-2" />
                      <p className="text-sm text-gray-400">Year</p>
                      <p className="text-xl font-bold text-white">
                        {selectedCar.year}
                      </p>
                    </div>
                    <div className="rounded-lg bg-black/50 p-4 border border-white/10">
                      <Fuel className="h-5 w-5 text-[#00AEEF] mb-2" />
                      <p className="text-sm text-gray-400">Fuel Type</p>
                      <p className="text-xl font-bold text-white">
                        Premium Gasoline
                      </p>
                    </div>
                    <div className="rounded-lg bg-black/50 p-4 border border-white/10">
                      <Settings className="h-5 w-5 text-[#00AEEF] mb-2" />
                      <p className="text-sm text-gray-400">Transmission</p>
                      <p className="text-xl font-bold text-white">Automatic</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-4">
                      Features
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {[
                        "Leather Seats",
                        "Navigation System",
                        "Bluetooth Connectivity",
                        "Backup Camera",
                        "Keyless Entry",
                        "Premium Audio",
                      ].map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-lime-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Purchase */}
                <div className="space-y-6">
                  <div className="rounded-xl bg-gradient-to-r from-[#00AEEF]/10 to-transparent p-6 border border-[#00AEEF]/30">
                    <p className="text-sm text-gray-400 mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-white mb-4">
                      {formatPrice(selectedCar.price)}
                    </p>
                    <button className="w-full rounded-lg bg-gradient-to-r from-[#00AEEF] to-[#0077b3] px-6 py-3 font-bold text-white transition-all hover:scale-105 mb-3">
                      Purchase Now
                    </button>
                    <button className="w-full rounded-lg border border-[#00AEEF] bg-transparent px-6 py-3 font-medium text-[#00AEEF] transition-all hover:bg-[#00AEEF]/10">
                      Schedule Test Drive
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-4">
                      Financing Options
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-black/30">
                        <span className="text-gray-400">
                          Monthly Payment Estimate
                        </span>
                        <span className="text-white font-bold">
                          {formatPrice(selectedCar.price / 60)}/mo*
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        *Based on 60-month financing at 4.5% APR. Terms and
                        conditions apply.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-4">
                      Dealer Information
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-[#00AEEF]" />
                        <span className="text-sm">
                          AutoPulse Certified Dealership
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#00AEEF]" />
                        <span className="text-sm">
                          123 Innovation Drive, Silicon Valley, CA
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[#00AEEF]" />
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
