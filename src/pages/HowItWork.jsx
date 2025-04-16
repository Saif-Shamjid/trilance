import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, Cpu, BarChart, Settings, Users, 
  ArrowRight, Zap, Check, Server, Globe,
  Smartphone, Shield, Mail, Database, MessageCircle, Headphones, Layers
} from "lucide-react";

export default function ServicesSection({ activeService, setActiveService }) {


  const services = [
    // Website Development (unchanged)
    {
      title: "Website Development",
      icon: <Code className="w-8 h-8" />,
      highlights: [
        "No drag-and-drop tools (Not WordPress)",
        "No third-party limitations",
        "No cookie-cutter templates",
        "Fully custom coded solutions"
      ],
      details: [
        {
          icon: <Code className="w-6 h-6 text-purple-400" />,
          title: "Professional Tech Stack",
          description: "Built with React (like Gmail/Facebook), Node.js, and MongoDB for enterprise-grade performance"
        },
        {
          icon: <Database className="w-6 h-6 text-blue-400" />,
          title: "Full Code Ownership",
          description: "You get complete source code that any developer can work on or scale in the future"
        },
        {
          icon: <Server className="w-6 h-6 text-green-400" />,
          title: "Hosting + Domain Included",
          description: "We handle setup with reliable hosting and a professional domain name (1 year free)"
        }
      ]
    },
    // Automation Tools (unchanged)
    {
      title: "Automation Tools",
      icon: <Cpu className="w-8 h-8" />,
      highlights: [
        "Inventory management systems",
        "Shop/farm management tools",
        "Custom calculation systems",
        "Process automation solutions"
      ],
      details: [
        {
          icon: <Settings className="w-6 h-6 text-purple-400" />,
          title: "Management & Automation Tools",
          description: "Custom-built applications to streamline your business operations"
        },
        {
          icon: <Users className="w-6 h-6 text-blue-400" />,
          title: "Direct Consultation",
          description: "Tell us exactly what you need - we'll build it your way"
        },
        {
          icon: <Zap className="w-6 h-6 text-green-400" />,
          title: "Fast Development",
          description: "We implement solutions quickly without compromising quality"
        }
      ]
    },
    // Digital Marketing (updated)
    {
      title: "Digital Marketing",
      icon: <BarChart className="w-8 h-8" />,
      highlights: [
        "Digital marketing strategy",
        "Basic SEO setup",
        "Content guidance",
        "Performance tracking"
      ],
      details: [
        {
          icon: <Smartphone className="w-6 h-6 text-purple-400" />,
          title: "Marketing Package",
          description: "Essential digital marketing services included"
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
          title: "Expert Consultation",
          description: "Direct access to our marketing specialists"
        },
        {
          icon: <Layers className="w-6 h-6 text-green-400" />,
          title: "Upgrade Options",
          description: "Available paid services for advanced needs"
        }
      ]
    },
    // Free Maintenance (updated)
    {
      title: "Free Maintenance",
      icon: <Shield className="w-8 h-8" />,
      highlights: [
        "Free support",
        "Emergency fixes",
        "Fast response times",
        "Scaling advice"
      ],
      details: [
        {
          icon: <Headphones className="w-6 h-6 text-purple-400" />,
          title: "Ongoing Support",
          description: "Get help with any issues or adjustments"
        },
        {
          icon: <Zap className="w-6 h-6 text-blue-400" />,
          title: "Emergency Assistance",
          description: "Priority fixes for critical issues"
        },
        {
          icon: <Globe className="w-6 h-6 text-green-400" />,
          title: "Growth Guidance",
          description: "Advice for scaling your solution"
        }
      ]
    },
    // Developer Ecosystem (updated)
    {
      title: "Developer Ecosystem",
      icon: <Users className="w-8 h-8" />,
      highlights: [
        "New talent gets experience",
        "Businesses get affordable solutions",
        "Community support",
        "Future expansion"
      ],
      details: [
        {
          icon: <Code className="w-6 h-6 text-purple-400" />,
          title: "Developer Platform",
          description: "Future platform connecting developers with projects"
        },
        {
          icon: <Users className="w-6 h-6 text-blue-400" />,
          title: "Talent Development",
          description: "Helping new developers gain real-world experience"
        },
        {
          icon: <Globe className="w-6 h-6 text-green-400" />,
          title: "Community Growth",
          description: "Building a supportive developer ecosystem"
        }
      ]
    }
  ];

  return (
    <section id="services" className="relative py-12 md:py-20 bg-gradient-to-b from-indigo-900 to-purple-950 text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-pink-600 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-blue-600 opacity-20 rounded-full filter blur-3xl"></div>
      
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
            <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
            <span className="text-sm md:text-base font-medium">Our Premium Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300 mb-3 md:mb-4">
            Exactly What You'll Get
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
          Professional solutions designed for anyone starting their digital journey to thrive online.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Service selector */}
          <div className="lg:w-1/3 overflow-x-auto pb-4 lg:pb-0">
            <div className="flex lg:grid lg:grid-cols-1 gap-3 md:gap-4 w-max lg:w-full">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  className={`text-left p-4 md:p-6 rounded-xl backdrop-blur-sm border transition-all flex-shrink-0 w-64 md:w-auto ${activeService === index ? 'border-purple-400 bg-purple-900/30' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                  onClick={() => setActiveService(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <div className={`p-2 md:p-3 rounded-lg mr-3 md:mr-4 ${activeService === index ? 'bg-purple-600' : 'bg-gray-700'}`}>
                      {React.cloneElement(service.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                  </div>
                  <ul className="mt-3 md:mt-4 space-y-1 md:space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm md:text-base text-gray-300">
                        <Check className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service details */}
          <div className="lg:w-2/3">
            <motion.div 
              className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 border border-white/10 h-full"
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                  {services[activeService].title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">Details</span>
                </h3>
                <p className="text-gray-300 text-sm md:text-base max-w-2xl">
                  {activeService === 0 ? (
                    "Professional-grade websites built to scale, not limit it"
                  ) : activeService === 1 ? (
                    "Custom automation solutions tailored to streamline your business operations"
                  ) : activeService === 2 ? (
                    "Comprehensive digital marketing services to grow your online presence"
                  ) : activeService === 3 ? (
                    "Reliable support to keep your solutions running smoothly"
                  ) : (
                    "Building a community to connect developers"
                  )}
                </p>
              </div>

              {activeService === 0 ? (
                // Website Development details (unchanged)
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* ... existing website development content ... */}
                  {/* Special expanded details for website development */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Code className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-purple-400" />
                      <h4 className="text-lg md:text-xl font-bold">Enterprise Technology</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      We use the same technologies powering Facebook, Gmail and Instagram:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>React.js</strong> - For blazing fast frontend performance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Node.js</strong> - Scalable backend architecture</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>MongoDB</strong> - Flexible database that grows with you</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Database className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-blue-400" />
                      <h4 className="text-lg md:text-xl font-bold">Complete Ownership</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Unlike template solutions, you get:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Full source code</strong> - No locked-in platforms</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Scalable foundation</strong> - Add features as you grow</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Developer-friendly</strong> - Any programmer can work on it</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Globe className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-green-400" />
                      <h4 className="text-lg md:text-xl font-bold">Hosting Package</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      We handle the technical setup:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Custom domain</strong> included (1 year free)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Reliable hosting</strong> optimized for your site</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>SSL security</strong> for customer trust</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Shield className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-yellow-400" />
                      <h4 className="text-lg md:text-xl font-bold">Ongoing Support</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      We stand behind our work:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Free</strong> maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Fast response</strong> to urgent issues</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Marketing guidance</strong> to grow online</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : activeService === 1 ? (
                // Automation Tools details (unchanged)
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* ... existing automation tools content ... */}
                  {/* Management & Automation Tools */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Settings className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-purple-400" />
                      <h4 className="text-lg md:text-xl font-bold">Management & Automation</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Custom-built applications to streamline your operations:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Inventory Systems</strong> - Track stock, orders, and supplies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Shop/Farm Tools</strong> - Manage your business operations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Calculation Systems</strong> - Automate complex calculations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Process Automation</strong> - Streamline repetitive tasks</span>
                      </li>
                    </ul>
                  </div>

                  {/* Direct Consultation */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Users className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-blue-400" />
                      <h4 className="text-lg md:text-xl font-bold">Direct Consultation</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      We build exactly what you need:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Tell us your needs</strong> - Describe your workflow challenges</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>We'll propose solutions</strong> - With technical feasibility</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Iterate together</strong> - Until it's perfect for your business</span>
                      </li>
                    </ul>
                  </div>

                  {/* Fast Development */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Zap className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-yellow-400" />
                      <h4 className="text-lg md:text-xl font-bold">Fast Development</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Quick turnaround without quality compromise:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Rapid prototyping</strong> - See working models quickly</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Agile development</strong> - Continuous improvements</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Quick deployment</strong> - Start using solutions fast</span>
                      </li>
                    </ul>
                  </div>

                  {/* Types of Tools */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Cpu className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-green-400" />
                      <h4 className="text-lg md:text-xl font-bold">Tool Examples</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Common solutions we build:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Inventory Management</strong> - Track stock levels automatically</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>POS Systems</strong> - For retail/store operations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Farm Management</strong> - Crop/livestock tracking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Custom Calculators</strong> - For specific business needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : activeService === 2 ? (
                // Digital Marketing details (new)
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Marketing Package */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Smartphone className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-purple-400" />
                      <h4 className="text-lg md:text-xl font-bold">Marketing Package</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Included with our services:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Strategy Development</strong> - Custom marketing plan</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>SEO Setup</strong> - Basic search optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Content Guidance</strong> - What and how to post</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Performance Tracking</strong> - Monitor your results</span>
                      </li>
                    </ul>
                  </div>

                  {/* Expert Consultation */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-blue-400" />
                      <h4 className="text-lg md:text-xl font-bold">Expert Consultation</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Direct access to our specialists:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>1-on-1 Sessions</strong> - Discuss your specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Strategy Review</strong> - Get professional feedback</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Q&A Support</strong> - Get answers to your questions</span>
                      </li>
                    </ul>
                  </div>

                  {/* Upgrade Options */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Layers className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-green-400" />
                      <h4 className="text-lg md:text-xl font-bold">Upgrade Options</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Available paid services:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Paid Advertising - Google/Facebook ads management</strong> </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Advanced SEO</strong> - Comprehensive optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Social Media Management</strong> - We handle your accounts</span>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Content Creation</strong> - Professional posts & graphics</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Performance Marketing</strong> - a digital advertising strategy where businesses pay only when specific</span>
                      </li>
                    </ul>
                  </div>

                  {/* Performance Tracking */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <BarChart className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-yellow-400" />
                      <h4 className="text-lg md:text-xl font-bold">Performance Tracking</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Monitor your marketing success:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Analytics Setup</strong> - Track website visitors</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Monthly Reports</strong> - See what's working</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Improvement Tips</strong> - Based on your data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : activeService === 3 ? (
                // Free Maintenance details (new)
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Ongoing Support */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Headphones className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-purple-400" />
                      <h4 className="text-lg md:text-xl font-bold">Ongoing Support</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      We're here to help with:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Technical Issues</strong> - Fixing website problems</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Minor Adjustments</strong> - Small changes and updates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Guidance</strong> - How-to questions and advice</span>
                      </li>
                    </ul>
                  </div>

                  {/* Emergency Assistance */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Zap className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-blue-400" />
                      <h4 className="text-lg md:text-xl font-bold">Emergency Assistance</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      For critical situations:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Priority Response</strong> - Immediate attention</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Critical Fixes</strong> - When your site is down</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Security Issues</strong> - Urgent vulnerabilities</span>
                      </li>
                    </ul>
                  </div>

                  {/* Fast Response */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Shield className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-green-400" />
                      <h4 className="text-lg md:text-xl font-bold">Fast Response Times</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Our support standards:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>24-hour response</strong> - For all support requests</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>4-hour response</strong> - For high priority issues</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>1-hour response</strong> - For emergency situations</span>
                      </li>
                    </ul>
                  </div>

                  {/* Growth Guidance */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Globe className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-yellow-400" />
                      <h4 className="text-lg md:text-xl font-bold">Growth Guidance</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Advice for scaling your business:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Scaling Tips</strong> - When you're ready to grow</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Feature Recommendations</strong> - What to add next</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Performance Optimization</strong> - Keep things running smoothly</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : activeService === 4 ? (
                // Developer Ecosystem details (new)
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Developer Platform */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Code className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-purple-400" />
                      <h4 className="text-lg md:text-xl font-bold">Developer Platform</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Our vision for the future:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Project Marketplace</strong> - Connecting developers with clients</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Onboarding Program</strong> - Helping new developers join</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-purple-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Quality Standards</strong> - Maintaining high-quality work</span>
                      </li>
                    </ul>
                  </div>

                  {/* Talent Development */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Users className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-blue-400" />
                      <h4 className="text-lg md:text-xl font-bold">Talent Development</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Helping new developers grow:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Real Projects</strong> - Gain practical experience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Mentorship</strong> - Guidance from experienced devs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Portfolio Building</strong> - Showcase your work</span>
                      </li>
                    </ul>
                  </div>

                  {/* Community Growth */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Globe className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-green-400" />
                      <h4 className="text-lg md:text-xl font-bold">Community Growth</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Building a supportive network:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Knowledge Sharing</strong> - Learn from each other</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Collaboration</strong> - Work on projects together</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Networking</strong> - Connect with peers</span>
                      </li>
                    </ul>
                  </div>

                  {/* Business Benefits */}
                  <div className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Users className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-yellow-400" />
                      <h4 className="text-lg md:text-xl font-bold">Business Benefits</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Advantages for businesses:
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Affordable Solutions</strong> - Cost-effective development</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Quality Work</strong> - From vetted developers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-yellow-600/20 p-1 rounded mr-2 md:mr-3 mt-1">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                        </div>
                        <span className="text-sm md:text-base"><strong>Scalable Teams</strong> - Add developers as needed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                // Default layout for other services
                <div className="grid gap-4 md:gap-6">
                  {services[activeService].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 p-4 md:p-6 rounded-lg md:rounded-xl border border-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-3 md:mb-4">
                        <div className="p-1 md:p-2 rounded-lg mr-3 md:mr-4 bg-purple-600/20">
                          {React.cloneElement(detail.icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                        </div>
                        <h4 className="text-lg md:text-xl font-bold">{detail.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base">{detail.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeService !== 3 && ( // Don't show button for Free Maintenance
                <motion.div 
                  className="mt-8 md:mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}