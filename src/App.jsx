import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Financing from "./pages/Financing";
import TradeIn from "./pages/TradeIn";
import Contact from "./pages/Contact";
import About from "./pages/About";
import VehicleDetails from "./pages/VehicleDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id" element={<VehicleDetails />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/trade-in" element={<TradeIn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
