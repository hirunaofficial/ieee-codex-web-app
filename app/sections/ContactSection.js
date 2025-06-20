'use client';

import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-darkBlue-900 via-blue-900 to-darkBlue-800 text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      
      {/* Animated particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
              backgroundColor: '#3b82f6',
              animation: `floatUp ${15 + Math.random() * 15}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">CONNECT</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-glow-text">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 mb-12">
            We would love to hear from you. Reach out with any questions about our competitions or training programs.
          </p>

          {/* Contact Card */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ParallaxEffect speed={0.03} direction="vertical">
              <GlassCard className="p-8 md:p-12 rounded-2xl bg-opacity-80 backdrop-blur-lg max-w-2xl mx-auto">
                <div className="text-center">
                  {/* Email Icon */}
                  <div className="w-20 h-20 bg-blue-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-6 blue-glow-subtle">
                    <Mail className="w-10 h-10 text-blue-400" />
                  </div>
                  
                  {/* Contact Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">Contact for More Information</h3>
                  <p className="text-gray-300 mb-8">
                    Have questions about our sessions, competitions, or want to get involved? We're here to help!
                  </p>
                  
                  {/* Email Contact */}
                  <div className="bg-gradient-to-r from-blue-900 to-blue-800 bg-opacity-30 rounded-xl p-6 border border-blue-500 border-opacity-30">
                    <a 
                      href="mailto:thamindusri@ieee.org" 
                      className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors group bg-darkBlue-800 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 text-lg font-medium"
                    >
                      <Mail className="w-6 h-6 mr-4 flex-shrink-0" />
                      <span className="group-hover:underline">thamindusri@ieee.org</span>
                    </a>
                    
                    <div className="mt-4 pt-4 border-t border-blue-900 border-opacity-30">
                      <p className="text-blue-300 text-sm">
                        <strong>Thamindu Nirmal</strong> - Chair, IEEE CodeX Sri Lanka
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Feel free to reach out for any inquiries about our programs, partnerships, or participation opportunities.
                      </p>
                    </div>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-darkBlue-800 bg-opacity-30 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">Training Sessions</h4>
                      <p className="text-gray-400">Questions about our 12-session competitive programming series</p>
                    </div>
                    <div className="bg-darkBlue-800 bg-opacity-30 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">Competitions</h4>
                      <p className="text-gray-400">Inquiries about NOI, IEEEXtreme, and ICPC events</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ParallaxEffect>
          </div>

          {/* Bottom Message */}
          <div className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-400 text-sm">
              We typically respond within 24 hours. Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}