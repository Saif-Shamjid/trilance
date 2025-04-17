import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Smartphone,
  ShoppingCart,
  BarChart,
  Cpu,
  Database,
  Wifi,
  Rocket,
  TrendingUp,
  Code2,
  LayoutTemplate,
  SmartphoneCharging,
} from "lucide-react";

const processSteps = [
  {
    title: "Consultation",
    description: "Free discovery call to understand your needs",
    icon: (
      <Wifi className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    ),
    color: "bg-purple-500",
  },
  {
    title: "Design",
    description: "Custom UI/UX tailored for your business",
    icon: (
      <LayoutTemplate className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    ),
    color: "bg-blue-500",
  },
  {
    title: "Development",
    description: "Clean, scalable code implementation",
    icon: (
      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    ),
    color: "bg-green-500",
  },
  {
    title: "Deployment",
    description: "Seamless launch with full support",
    icon: (
      <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    ),
    color: "bg-yellow-500",
  },
  {
    title: "Growth",
    description: "Ongoing optimization & marketing",
    icon: (
      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    ),
    color: "bg-pink-500",
  },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate positions with left adjustment
  const calculatePosition = (index) => {
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1024;
    const radius = screenWidth < 640 ? 100 : screenWidth < 768 ? 130 : 180;
    const angle = index * (360 / processSteps.length) - 90;
    const radians = angle * (Math.PI / 180);
    const leftAdjustment = -40;
    return {
      x: Math.cos(radians) * radius + leftAdjustment,
      y: Math.sin(radians) * radius - 35,
    };
  };

  return (
    <section
      id="home"
      className="relative pt-5 min-h-screen flex flex-col lg:flex-row items-center justify-between text-white px-6 md:px-12 lg:px-24 overflow-hidden gap-10 lg:gap-0"
    >
      {/* Background Image with Overlay
      
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80

      */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Digital technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-indigo-900/90 to-blue-950/90"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center z-10 py-12 lg:py-0">
        <motion.div
          className="max-w-2xl space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400"
            whileHover={{ scale: 1.02 }}
          >
            Digital Growth Engine For Businesses, Creators & Dreamers
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            From first website to full digital transformation - we provide the
            tools, talent and ongoing support to help you thrive online.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#services"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-indigo-700 transition px-8 py-3.5 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Our Services <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border-2 border-white/30 backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition px-8 py-3.5 rounded-full font-semibold shadow-md flex items-center gap-2">
              <Smartphone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              <a href="#call" className="text-sm md:text-base">
                Schedule a Free Call
              </a>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Process Revolver Section */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center relative mt-8 lg:mt-0">
        <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
          {/* Outer Circle - Now Perfectly Round */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 flex items-center justify-center">
            <div className="w-full h-full rounded-full border-2 border-white/10"></div>
          </div>

          {/* Process Steps - Adjusted Left Position */}
          {processSteps.map((step, index) => {
            const { x, y } = calculatePosition(index);
            const isActive = index === activeStep;

            return (
              <motion.div
                key={index}
                className={`absolute w-14 sm:w-16 h-14 sm:h-16 rounded-full ${step.color} flex items-center justify-center shadow-xl z-10`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: isActive ? 1.2 : 0.9,
                  opacity: isActive ? 1 : 0.7,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    rotate: isActive ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center Display - Larger and More Visible */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-purple-900/90 to-blue-900/90 shadow-2xl flex items-center justify-center z-0 backdrop-blur-sm border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6"
              >
                <h3 className="font-bold text-lg lg:text-xl mb-2 text-white">
                  {processSteps[activeStep].title}
                </h3>
                <p className="text-sm lg:text-base text-white/90 leading-tight">
                  {processSteps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Sparkles Animation */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <style jsx>{`
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
