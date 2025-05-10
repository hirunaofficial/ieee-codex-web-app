'use client'

import { ArrowRight, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-darkBlue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-white blue-glow-text">CodeX</span>
              <span className="ml-2 text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-md border border-blue-700">IEEE Sri Lanka</span>
            </div>
            <p className="text-gray-400 mb-4">From logic to legacy</p>
            <p className="text-gray-500 text-sm">
              Building a thriving tech community through competitive programming.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#competitions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Competitions
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  IEEE Sri Lanka
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  International Olympiad in Informatics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  IEEEXtreme Global
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  ICPC Official
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Competitive Programming Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 IEEE CodeX Sri Lanka. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-gray-500 ml-2">in Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}