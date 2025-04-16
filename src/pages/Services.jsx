import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, DollarSign, HeartPulse, Users, 
  ArrowRight, Zap, Circle, ArrowRightCircle 
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const problems = [
    {
      title: "Cost Barriers",
      description: "Professional-grade websites and tools are often too expensive — not just for businesses, but for individuals and startups too.",
      icon: <DollarSign className="w-6 h-6" />,
      stats: "80% of people skip digital solutions due to high upfront costs."
    },
    {
      title:"Template Limitations",
      description: "Most affordable platforms like WordPress or Shopify offer drag-and-drop templates that aren't future-ready or scalable.",
      icon: <AlertTriangle className="w-6 h-6" />,
      stats: "They look good at first, but quickly limit growth and customization."
    },
    {
      title:"Missing Tools",
      description: "Many people need simple systems — like inventory or store management — but can’t find the right fit. Even if they do, it’s expensive and hard to maintain.",
      icon: <Circle className="w-6 h-6" />,
      stats: "People end up juggling spreadsheets, or abandoning tools that don’t help."
    },
    {
      title: "Maintenance Anxiety",
      description: "Most abandon their websites due to lack of ongoing support",
      icon: <HeartPulse className="w-6 h-6" />,
      stats: "60% of small business websites become inactive within 1 year"
    },
    
    {
      title: "Overwhelm & Confusion",
      description: "Most people don’t know where to start — domains, hosting, design, marketing… it’s all too much without guidance.",
      icon: <Zap className="w-6 h-6" />,
      stats: "Many give up before launching because they feel lost or unsupported."
    },
    {
      title:"Time Drain",
      description: "Running a business or launching an idea takes time. Learning tech on top of that? Nearly impossible for most.",
      icon: <ArrowRightCircle className="w-6 h-6" />,
      stats: "People waste hours on DIY platforms that don’t scale or stick."
    },
    {
      title:"Scattered Communication",
      description: "Without a proper system, most orders and inquiries come through random social media DMs — it’s unscalable and chaotic.",
      icon: <ArrowRight className="w-6 h-6" />,
      stats: "Customers get lost. Opportunities get missed. Growth slows down."
    },
    {
      title:"Lack of Trustworthy Support",
      description: "Freelancers and agencies often disappear after delivery — leaving people stuck when things go wrong.",
      icon: <Circle className="w-6 h-6" />,
      stats: "Technical issues become dead ends without ongoing help."
    },
    {
      title: "Talent Gap",
      description: " Developers lack real projects to showcase their skills",
      icon: <Users className="w-6 h-6" />,
      stats: "70% of junior developers struggle to find their first client"
    }
  ];

  const solutions = [
    "Affordable solutions at 1/10th traditional cost",
    "Free basic maintenance included",
    "Real-world projects for aspiring developers",
    "Community support network",
    "Growth-focused digital strategies"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-950 to-indigo-900 text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-600 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600 opacity-20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-800/50 border border-indigo-600 mb-4">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-medium">The Digital Struggle</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300 mb-4 p-2">
          Why Most People Struggle to Go Digital
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          The challenges are real — whether you're a small business, a solo creator, or just starting something new. But we’re building a better way forward.
          </p>
        </motion.div>

        {/* Interactive problem cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border ${activeTab === index ? 'border-purple-400 bg-purple-900/30' : 'border-white/10 bg-white/5'} transition-all cursor-pointer`}
              onClick={() => setActiveTab(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute top-0 left-8 transform -translate-y-1/2 w-12 h-12 rounded-full ${activeTab === index ? 'bg-purple-500' : 'bg-gray-700'} flex items-center justify-center shadow-lg transition-all`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">{problem.title}</h3>
              <p className="text-gray-300 mb-4">{problem.description}</p>
              <div className="text-sm text-purple-300 font-medium">{problem.stats}</div>
              
              {activeTab === index && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Vision section */}
        <div className="relative bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full filter blur-3xl transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl transform -translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10">
            <motion.div 
              className="flex flex-col lg:flex-row items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="font-medium">Our Vision</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Building an <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">Ecosystem</span> That Works For Everyone
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                We’re bridging the gap between everyday entrepreneurs and tech talent to create sustainable digital growth.
                </p>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfJySWXN5l4PWOK3_xuqaUpTVEDHIjcpdWt0o-fj2yrliENTg/viewform?usp=sharing" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all">
                Join the movement. <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <br />
                <span className="text-sm text-gray-400">by telling us what you need or wish existed.</span>

              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  {/* Solution pathway */}
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                          <Circle className="w-2 h-2 fill-current text-white" />
                        </div>
                        {index < solutions.length - 1 && (
                          <div className="h-12 w-px bg-gradient-to-b from-purple-400 to-transparent mx-auto"></div>
                        )}
                      </div>
                      <div>
                        <p className="text-lg font-medium">{solution}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}