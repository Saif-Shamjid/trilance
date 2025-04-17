import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Ecosystem from "./pages/Ecosystem";
import Portfolio from "./pages/Portfolio";
import HowItWork from "./pages/HowItWork";
import DeveloperEcosystem from "./pages/DeveloperEcosystem";
import CTASection from "./pages/CTASection";
import Footer from "./components/Footer";
import "./App.css";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 transition-opacity duration-300">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

function App() {
  const [activeService, setActiveService] = useState(0);

  return (
    <Router>
      <Navbar
        activeService={activeService}
        setActiveService={setActiveService}
      />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/developer-ecosystem" element={<DeveloperEcosystem />} />
        <Route path="/contact" element={<CTASection />} /> */}
      </Routes>

      {/* Single-page sections (if you're using this approach) */}
      <Home />
      <Services />
      <Ecosystem />
      <HowItWork
        activeService={activeService}
        setActiveService={setActiveService}
      />
      {/* <Portfolio /> */}
      <CTASection />

      <DeveloperEcosystem />

      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
