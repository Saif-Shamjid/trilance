import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Maximize, Eye, CodeIcon,
  Smartphone, Monitor, Zap, ArrowRightCircle, Check, ChevronDown
} from "lucide-react";

const projects = [
  {
    name: "Dhaka Boutique",
    description: "E-commerce platform for a local fashion retailer",
    tags: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    features: [
      "Inventory management system",
      "Custom product customization",
      "Mobile-first design",
      "Order tracking"
    ],
    images: {
      desktop: "https://example.com/desktop-agro.jpg",
      mobile: "https://example.com/desktop-agro.jpg",
      additional: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
      ]
    },
    url: "https://doctor-meet-live.web.app/",
    testimonial: "Our online sales increased by 300% within 2 months of launch!"
  },
  {
    name: "AgroFarm BD",
    description: "Farm management system for agricultural business",
    tags: ["React", "Firebase", "GIS Mapping", "Dashboard"],
    features: [
      "Crop tracking system",
      "Supplier management",
      "Real-time analytics",
      "Mobile app integration"
    ],
    images: {
      desktop: "https://example.com/desktop-agro.jpg",
      mobile: "https://example.com/mobile-agro.jpg",
      additional: [
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg"
      ]
    },
    url: "https://agrofarmbd.com",
    testimonial: "Transformed our chaotic operations into streamlined digital workflows"
  },
  {
    name: "Cafe Aroma",
    description: "Cafe ordering system with table reservations",
    tags: ["Next.js", "Stripe", "QR Menus", "Admin Panel"],
    features: [
      "Online food ordering",
      "Table reservation system",
      "Loyalty program",
      "Inventory automation"
    ],
    images: {
      desktop: "https://example.com/desktop-cafe.jpg",
      mobile: "https://example.com/mobile-cafe.jpg",
      additional: [
        "https://example.com/image6.jpg",
        "https://example.com/image7.jpg",
        "https://example.com/image8.jpg"
      ]
    },
    url: "https://cafearoma.com",
    testimonial: "Customers love the convenience and our staff saves 2 hours daily"
  }
];

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [viewMode, setViewMode] = useState("desktop"); // 'desktop' or 'mobile'
  const [showMoreImages, setShowMoreImages] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setShowMoreImages(false);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setShowMoreImages(false);
  };

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-indigo-900 to-purple-950 text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-pink-600 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 bg-blue-600 opacity-20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-purple-800/50 border border-purple-600 mb-3 md:mb-4">
            <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
            <span className="text-sm md:text-base font-medium">Our Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300 mb-3 md:mb-4">
            Transforming Businesses
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            See how we've helped Bangladeshi businesses thrive in the digital world
          </p>
        </motion.div>

        {/* Project showcase */}
        <div className="relative">
          {/* Project navigation arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 sm:p-3 md:p-4 rounded-full hover:bg-purple-600 transition ml-2 sm:ml-4"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 sm:p-3 md:p-4 rounded-full hover:bg-purple-600 transition mr-2 sm:mr-4"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Project display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Device view toggle */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="inline-flex bg-white/10 rounded-full p-0.5 sm:p-1 border border-white/20">
                  <button 
                    onClick={() => setViewMode("mobile")}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center text-xs sm:text-sm ${viewMode === "mobile" ? 'bg-purple-600' : ''}`}
                  >
                    <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
                    Mobile
                  </button>
                  <button 
                    onClick={() => setViewMode("desktop")}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center text-xs sm:text-sm ${viewMode === "desktop" ? 'bg-purple-600' : ''}`}
                  >
                    <Monitor className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
                    Desktop
                  </button>
                </div>
              </div>

              {/* Project showcase */}
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Screenshot display */}
                <div className="relative">
                  <div className={`bg-black/20 rounded-xl overflow-hidden border border-white/10 ${viewMode === "mobile" ? 'max-w-xs mx-auto' : ''}`}>
                    {/* Device frame */}
                    {viewMode === "mobile" ? (
                      <div className="relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-b-lg"></div>
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white/20"></div>
                        <img 
                          src={projects[activeProject].images.mobile} 
                          alt={`${projects[activeProject].name} Mobile`} 
                          className="w-full cursor-zoom-in"
                          onClick={() => setFullscreenImage(projects[activeProject].images.mobile)}
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute bottom-0 left-0 w-full h-6 md:h-8 bg-gray-900/50 rounded-b-lg flex justify-center items-center space-x-2">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                          <div className="w-6 h-0.5 md:w-8 md:h-1 rounded-full bg-gray-700"></div>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                        </div>
                        <img 
                          src={projects[activeProject].images.desktop} 
                          alt={`${projects[activeProject].name} Desktop`} 
                          className="w-full cursor-zoom-in"
                          onClick={() => setFullscreenImage(projects[activeProject].images.desktop)}
                        />
                      </div>
                    )}
                  </div>

                  {/* View more images button */}
                  {projects[activeProject].images.additional.length > 0 && (
                    <div className="mt-4 flex justify-center">
                      <button 
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs sm:text-sm font-medium flex items-center"
                        onClick={() => setShowMoreImages(!showMoreImages)}
                      >
                        {showMoreImages ? 'Hide Additional Images' : 'View More Images'}
                        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform ${showMoreImages ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  )}

                  {/* Additional images */}
                  {showMoreImages && projects[activeProject].images.additional.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {projects[activeProject].images.additional.map((image, index) => (
                        <div key={index} className="bg-black/20 rounded-lg overflow-hidden border border-white/10">
                          <img 
                            src={image} 
                            alt={`${projects[activeProject].name} Screenshot ${index + 1}`} 
                            className="w-full h-full object-cover cursor-zoom-in"
                            onClick={() => setFullscreenImage(image)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project details */}
                <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 md:mb-6 gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">
                        {projects[activeProject].name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300">{projects[activeProject].description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {projects[activeProject].tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-[10px] xs:text-xs bg-white/10 px-2 py-0.5 rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {projects[activeProject].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-purple-600/20 p-0.5 sm:p-1 rounded mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
                          </div>
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
                    <p className="italic text-sm sm:text-base mb-1 sm:mb-2">"{projects[activeProject].testimonial}"</p>
                    <a 
                      href={projects[activeProject].url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm sm:text-base text-purple-300 hover:text-white transition"
                    >
                      Visit Live Site <ArrowRightCircle className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fullscreen modal */}
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenImage(null)}
            >
              <div className="relative max-w-6xl w-full max-h-[90vh]">
                <button 
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 p-1 sm:p-2 rounded-full hover:bg-purple-600 transition z-10"
                  onClick={() => setFullscreenImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <img 
                  src={fullscreenImage} 
                  alt="Fullscreen view" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-pink-600/30 to-purple-600/30 border border-white/10 mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-yellow-400" />
            <span className="text-xs sm:text-sm md:text-base">Ready to transform your business?</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto">
              Get Your Professional Website
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 text-white text-sm sm:text-base font-medium border border-white/20 hover:bg-white/20 transition-all w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}