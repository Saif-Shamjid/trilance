import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Zap, Sparkles, Calendar,
  Smartphone, Code2, Shield, Users
} from "lucide-react";

export default function CTASection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="call" className="relative py-16 md:py-28 bg-gradient-to-br from-indigo-900 to-purple-950 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-pink-600 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-blue-600 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-96 md:h-96 bg-purple-600 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Animated sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center">
          {/* Decorative header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
            <span className="font-medium text-sm md:text-base text-white">Let's Get Started</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300 mb-4 md:mb-6 leading-tight"
          >
            Let's Build Something<br className="hidden sm:block" />Amazing — <span className="underline decoration-yellow-400">Together</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 px-4"
          >
            Your digital success starts with one simple conversation. We'll handle the tech while you focus on your business.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-14"
          >
            {expanded ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden"
              >
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeSMyujrq0a0P-Z3YSu0vdhExy67u7c8HJGj6cePiKO37cqYQ/viewform?usp=sharing?embedded=true" 
                  className="w-full h-[500px] md:h-[600px]"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading...
                </iframe>
              </motion.div>
            ) : (
              <butto
                onClick={() => setExpanded(true)}
                className="inline-flex items-center px-6 py-3 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Request Your Professional Website
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" />
              </butto>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
          >
            <div className="flex flex-col items-center p-3 md:p-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-2 md:mb-3">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
              </div>
              <p className="text-xs md:text-sm font-medium text-white">Custom Coded</p>
            </div>
            <div className="flex flex-col items-center p-3 md:p-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-2 md:mb-3">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
              </div>
              <p className="text-xs md:text-sm font-medium text-white">Free Maintenance</p>
            </div>
            <div className="flex flex-col items-center p-3 md:p-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-600/20 flex items-center justify-center mb-2 md:mb-3">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-pink-300" />
              </div>
              <p className="text-xs md:text-sm font-medium text-white">Fast Delivery</p>
            </div>
            <div className="flex flex-col items-center p-3 md:p-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-600/20 flex items-center justify-center mb-2 md:mb-3">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
              </div>
              <p className="text-xs md:text-sm font-medium text-white">Ongoing Support</p>
            </div>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16"
          >
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">Still have questions?</p>
            <button className="inline-flex items-center px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all group">
              <Smartphone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              <a target="_blank" href="https://wa.me/+8801521732246" className="text-sm md:text-base">Schedule a Free Call</a>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}