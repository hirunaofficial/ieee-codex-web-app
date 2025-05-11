'use client'

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Users, Award, Medal, Mail, ExternalLink, Bell, FileText, MapPin } from 'lucide-react';
import FloatingParticles from '@/app/components/FloatingParticles';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function RegistrationCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef(null);
  
  // IOI Team Selection Results
  const ioiTeam = [
    { 
      name: "Deera Wijesundara", 
      school: "Maliyadeva College, Kurunegala",
      medal: "gold"
    },
    { 
      name: "Malitha Bandara", 
      school: "Dharmaraja College, Kandy",
      medal: "silver"
    },
    { 
      name: "Praveen Athauda-arachchi", 
      school: "The British School in Colombo",
      medal: "bronze"
    },
    { 
      name: "Savindu Damsara", 
      school: "Maris Stella College, Thimbirigaskattawa",
      medal: "honorable"
    }
  ];
  
  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Handle newsletter signup
  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate form submission
      setTimeout(() => {
        setFormSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setShowQuickForm(false);
          setEmail('');
          setFormSubmitted(false);
        }, 3000);
      }, 800);
    }
  };
  
  // Get medal icon based on placement
  const getMedalIcon = (medalType) => {
    switch(medalType) {
      case 'gold':
        return <Medal className="w-5 h-5 text-yellow-400" />;
      case 'silver':
        return <Medal className="w-5 h-5 text-gray-300" />;
      case 'bronze':
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-900 to-darkBlue-700 relative overflow-hidden"
      id="register"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/2"></div>
      
      {/* Enhanced particles with better configuration */}
      <FloatingParticles 
        count={20} 
        colors={['#3b82f6', '#60a5fa', '#93c5fd']} 
        minSize={2}
        maxSize={8}
        direction="up"
        density="medium"
      />
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ParallaxEffect speed={0.05} direction="scale" reverse={true}>
            <GlassCard 
              className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl relative overflow-hidden" 
              glowIntensity="strong"
              blurStrength="strong"
              hoverEffect="shine"
            >
              {/* Event concluded badge */}
              <div className="absolute top-4 right-4 bg-green-600 bg-opacity-20 border border-green-500 border-opacity-30 text-green-300 text-xs px-3 py-1 rounded-full flex items-center">
                <Bell className="w-3 h-3 mr-1" />
                <span>Team Selected</span>
              </div>
              
              {/* Heading with enhanced styling */}
              <div className="mb-8 text-center">
                <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">TEAM ANNOUNCEMENT</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-glow-text">Meet Sri Lanka's IOI 2025 Team!</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
                <p className="text-xl mb-2 text-gray-300">
                  Four outstanding minds will represent Sri Lanka on the global stage
                </p>
                <p className="text-blue-300 flex items-center justify-center mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>IOI 2025 • July 27 - August 3, 2025</span>
                  <MapPin className="w-4 h-4 mx-2" />
                  <span>Bolivia</span>
                </p>
              </div>
              
              {/* Team Members */}
              <div className="bg-darkBlue-900 bg-opacity-40 rounded-xl p-6 mb-8">
                <div className="grid gap-4">
                  {ioiTeam.map((member, index) => (
                    <div 
                      key={index}
                      className="bg-darkBlue-800 bg-opacity-50 rounded-lg p-4 border border-blue-900 border-opacity-30 flex items-center"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 0.8s ease-out ${300 + index * 150}ms`
                      }}
                    >
                      <div className="mr-4 bg-blue-900 bg-opacity-40 rounded-full p-2">
                        {getMedalIcon(member.medal)}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{member.name}</h3>
                        <p className="text-gray-300 text-sm">{member.school}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Call to action buttons for post-event */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <a 
                  href="https://www.facebook.com/share/p/1LTxAJoPPT/" 
                  target="_blank"
                    rel="noopener noreferrer"
                  className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-lg blue-glow hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-darkBlue-900"
                >
                  Complete NOI Results
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="https://ioinformatics.org/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-transparent border border-blue-500 text-blue-300 font-bold rounded-lg hover:bg-blue-600 hover:bg-opacity-20 transition-all hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-darkBlue-900"
                >
                  About IOI
                  <FileText className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              {/* Next event information */}
              <div className="bg-darkBlue-800 bg-opacity-30 p-5 rounded-xl mb-6 border border-blue-900 border-opacity-30">
                <h3 className="text-lg font-bold text-white mb-2 text-center">Support Our Team</h3>
                <p className="text-gray-300 text-center mb-4">
                  Follow their journey to IOI 2025 in Bolivia and stay updated on their preparation and achievements.
                </p>
                
                {/* Newsletter signup for future events */}
                {!showQuickForm && !formSubmitted && (
                  <div className="text-center">
                    <button 
                      onClick={() => setShowQuickForm(true)}
                      className="text-blue-300 hover:text-blue-200 transition-colors underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-darkBlue-900 rounded-md"
                    >
                      Get IOI team updates and competition news
                    </button>
                  </div>
                )}
                
                {showQuickForm && !formSubmitted && (
                  <form 
                    onSubmit={handleNewsletterSignup}
                    className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto"
                  >
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address" 
                      required
                      className="w-full sm:w-auto flex-grow px-4 py-2 rounded-lg bg-darkBlue-800 bg-opacity-70 border border-blue-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label="Email for IOI team updates"
                    />
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe
                    </button>
                  </form>
                )}
                
                {formSubmitted && (
                  <div className="text-green-400 flex items-center justify-center">
                    <Award className="w-4 h-4 mr-2" />
                    <span>Thank you! You'll receive updates about the IOI team journey.</span>
                  </div>
                )}
              </div>
              
              {/* Quote */}
              <div className="mt-6 pt-6 border-t border-blue-900 border-opacity-30 text-center">
                <p className="text-gray-300 italic mb-2">
                  "The level of competition at NOI 2025 was outstanding. We're proud to see these four talented young programmers representing Sri Lanka on the international stage."
                </p>
                <p className="text-blue-300 text-sm">
                  - Thamindu Nirmal, Chair of IEEE CodeX Sri Lanka
                </p>
              </div>
            </GlassCard>
          </ParallaxEffect>
        </div>
      </div>
    </section>
  );
}