import React from "react";
import { 
  Globe, Mail, Phone, MapPin,
  Code2, Facebook, Twitter, 
  Instagram, Github,ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-950 to-indigo-900 text-white pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mr-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">
                Trilance.Tech
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
            Empowering individuals and startups with affordable, scalable digital solutions. We're building an ecosystem where creators, entrepreneurs, and developers grow — together.


            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://www.facebook.com/trilance.tech" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                Home
              </a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                Services
              </a></li>
              <li><a href="#process" className="text-gray-300 hover:text-white transition flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                Our Process
              </a></li>
              
              <li><a href="#developers" className="text-gray-300 hover:text-white transition flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                For Developers
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Contact Us
            </h4>
            <ul className="space-y-4">
              
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <a href="mailto:trilance.tech@gmail.com" className="text-gray-300 hover:text-white transition">
                trilance.tech@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <a href="tel:+8801521732246" className="text-gray-300 hover:text-white transition">
                  +880 1521732246
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Trilance.Tech All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}