import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, Handshake, Code, Rocket, 
  TrendingUp, ArrowRight, Check, Zap
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery Call",
      description: "Free consultation to understand your needs and goals",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-purple-500",
      details: [
        "No-pressure conversation",
        "Identify key requirements",
        "Discuss budget and timeline",
        "Outline potential solutions"
      ]
    },
    {
      title: "Co-Creation",
      description: "We work together to design the perfect solution for you",
      icon: <Handshake className="w-6 h-6" />,
      color: "bg-blue-500",
      details: [
        "Wireframes and mockups",
        "Your feedback incorporated",
        "Technical planning",
        "Approval before development"
      ]
    },
    {
      title: "Development",
      description: "Our team builds your custom solution with regular updates",
      icon: <Code className="w-6 h-6" />,
      color: "bg-green-500",
      details: [
        "2-week development sprints",
        "Bi-weekly progress demos",
        "Your input welcomed",
        "Quality assurance testing"
      ]
    },
    {
      title: "Launch",
      description: "We handle deployment and ensure everything works perfectly",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-yellow-500",
      details: [
        "Domain and hosting setup",
        "Final testing",
        "Team training",
        "Go-live support"
      ]
    },
    {
      title: "Growth Phase",
      description: "Ongoing support and optimization for long-term success",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-pink-500",
      details: [
        "Free maintenance",
        "Performance analytics",
        "Marketing guidance",
        "Scaling recommendations"
      ]
    }
  ];

  return (
    <section id="process" className="relative py-20 bg-gradient-to-b from-purple-950 to-indigo-900 text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-600 opacity-20 rounded-full filter blur-3xl"></div>
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
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-medium">Our Proven Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300 mb-4">
            Simple, Stress-Free Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From first conversation to ongoing growth - we guide you every step of the way
          </p>
        </motion.div>

        {/* Process timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-400 to-pink-400 transform -translate-x-1/2"></div>
            
            {/* Steps */}
            <div className="space-y-20">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex gap-5 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step content */}
                  <div className={`w-1/2 p-8  rounded-2xl backdrop-blur-sm border border-white/10 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg mr-4 ${step.color}`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                          Step {index + 1}:
                        </span> {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step indicator */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-xl border-4 border-indigo-900 z-10`}>
                    {step.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process timeline - Mobile */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-purple-400 to-pink-400"></div>
            
            {/* Steps */}
            <div className="space-y-12 pl-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step indicator */}
                  <div className={`absolute left-0 transform -translate-x-1/2 w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-xl border-4 border-indigo-900 z-10`}>
                    {step.icon}
                  </div>

                  {/* Step content */}
                  <div className="p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-bold mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                        Step {index + 1}:
                      </span> {step.title}
                    </h3>
                    <p className="text-gray-300 mb-3">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#call" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all group">
            Start Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}