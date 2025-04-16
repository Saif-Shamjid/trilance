import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Users, GitBranch, Briefcase, 
  ArrowRight, Zap, Check, Terminal
} from "lucide-react";

export default function DeveloperEcosystem() {
  const [expanded, setExpanded] = useState(false);

  const benefits = [
    {
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Real Projects",
      description: "Work on actual client projects to build your portfolio"
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Mentorship",
      description: "Learn from experienced developers and get feedback"
    },
    {
      icon: <GitBranch className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Collaboration",
      description: "Join a community of passionate developers"
    },
    {
      icon: <Terminal className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Skill Growth",
      description: "Work with modern tech stacks (React, Node.js, MongoDB)"
    }
  ];

  return (
    <section id="developers" className="relative py-12 md:py-20 bg-gradient-to-b from-purple-950 to-indigo-900 text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-blue-600 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-pink-600 opacity-20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-indigo-800/50 border border-indigo-600 mb-3 md:mb-4">
            <Code2 className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
            <span className="text-sm md:text-base font-medium">For Developers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300 mb-3 md:mb-4">
            Join Our Growing Ecosystem
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Gain real-world experience while helping Bangladeshi businesses succeed
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Benefits illustration */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-purple-600 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full filter blur-3xl opacity-30"></div>
            
            <div className="relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-3 md:mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Developer pathway */}
              <motion.div 
                className="mt-8 md:mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                  How It Works For Developers
                </h4>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-1 rounded-full mr-3 md:mr-4 mt-1">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400"></div>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium">Apply to join our network</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-1 rounded-full mr-3 md:mr-4 mt-1">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400"></div>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium">Get matched with suitable projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-1 rounded-full mr-3 md:mr-4 mt-1">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400"></div>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium">Build real solutions with support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-1 rounded-full mr-3 md:mr-4 mt-1">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400"></div>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium">Grow your portfolio and skills</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Application form */}
          <motion.div
            className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 backdrop-blur-sm order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Apply to Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">Today</span>
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
              Fill out this simple form and we'll get back to you within 48 hours
            </p>

            {expanded ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
              >
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeTldUAm-0bjCL_1A_TlTnEjFZmHRzJi_oK9zi084h3Jabmyw/viewform?usp=sharing?embedded=true" 
                  className="w-full h-[400px] md:h-[500px]"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading...
                </iframe>
              </motion.div>
            ) : (
              <>
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10">
                      <p className="text-xs md:text-sm text-gray-400 mb-1">Your Name</p>
                      <div className="h-1 w-full bg-white/10 rounded-full"></div>
                    </div>
                    <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10">
                      <p className="text-xs md:text-sm text-gray-400 mb-1">Email</p>
                      <div className="h-1 w-full bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10">
                    <p className="text-xs md:text-sm text-gray-400 mb-1">Tech Skills</p>
                    <div className="h-1 w-full bg-white/10 rounded-full mb-1 md:mb-2"></div>
                    <div className="h-1 w-3/4 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10">
                    <p className="text-xs md:text-sm text-gray-400 mb-1">Portfolio/GitHub</p>
                    <div className="h-1 w-full bg-white/10 rounded-full"></div>
                  </div>
                </div>

                <button 
                  onClick={() => setExpanded(true)}
                  className="w-full py-3 md:py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Continue to Full Application
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </button>
              </>
            )}

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                Why Join Us?
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Build a portfolio with real client projects</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Get mentorship from experienced developers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Contribute to Bangladesh's digital growth</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-pink-600/30 to-purple-600/30 border border-white/10 mb-4 md:mb-6">
            <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
            <span className="text-sm md:text-base">Ready to launch your developer career?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}