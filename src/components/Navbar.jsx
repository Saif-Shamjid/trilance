import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  Code2,
  Smartphone,
  BarChart,
  Settings,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { smoothScroll } from "../utils/smoothScroll"; // Import the utility

export default function Navbar({ activeService, setActiveService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll with optional offset for navbar height
  const handleSmoothScroll = (id, index = null) => {
    if (index !== null) {
      setActiveService(index);
    }
    smoothScroll(id, 80); // 80px offset for navbar height
    setIsOpen(false); // Close mobile menu if open
  };

  const navItems = [
    {
      name: "Services",
      icon: <Code2 className="w-5 h-5 mr-2" />,
      subItems: [
        { name: "Website Development", href: "services", i: 0 },
        { name: "Automation Tools", href: "services", i: 1 },
        { name: "Digital Marketing", href: "services", i: 2 },
        { name: "Developer Ecosystem", href: "services", i: 4 },
      ],
    },
    {
      name: "Process",
      icon: <Settings className="w-5 h-5 mr-2" />,
      href: "process",
    },
    {
      name: "For Developers",
      icon: <Users className="w-5 h-5 mr-2" />,
      href: "developers",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`hidden lg:flex fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-gray-900/95 backdrop-blur-md border-b border-white/10"
            : "py-4 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleSmoothScroll("home")}
            className="flex items-center"
          >
            <div className="flex items-center justify-center mr-3">
              <img
                src="/logo_icon.png"
                alt="Trilance Logo"
                className="w-60 h-10 object-contain rounded"
              />
            </div>
            
          </button>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition"
                  onClick={() => item.href && handleSmoothScroll(item.href)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.subItems && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-right bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                    <div className="py-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() =>
                            handleSmoothScroll(subItem.href, subItem.i)
                          }
                          className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-purple-900/30 hover:text-white transition flex items-center"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleSmoothScroll("call")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className={`lg:hidden fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-gray-900/95 backdrop-blur-md border-b border-white/10"
            : "py-4 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleSmoothScroll("home")}
            className="flex items-center"
          >
            <div className="flex items-center justify-center mr-3">
              <img
                src="/logo_icon.png"
                alt="Trilance Logo"
                className="w-30 h-10 object-contain rounded-full"
              />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <div key={index} className="border-b border-white/10 pb-4">
                      <button
                        className="flex items-center w-full text-left text-gray-300 hover:text-white transition"
                        onClick={() =>
                          item.href && handleSmoothScroll(item.href)
                        }
                      >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </button>

                      {item.subItems && (
                        <div className="mt-2 ml-8 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() =>
                                handleSmoothScroll(subItem.href, subItem.i)
                              }
                              className="block w-full text-left py-2 text-gray-400 hover:text-white transition flex items-center"
                            >
                              <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <button
                    onClick={() => handleSmoothScroll("call")}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center mt-4"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
