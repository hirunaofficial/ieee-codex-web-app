'use client'

import { useState, useEffect } from 'react';
import GlassCard from '@/app/components/GlassCard';
import { Code, Trophy, Book, Users, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    observer.observe(document.getElementById('about'));
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="py-24 blue-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      
      {/* Floating code symbols */}
      <div className="absolute top-20 left-10 text-blue-500 opacity-20 animate-bounce-slow">
        <Code size={32} />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-500 opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <Code size={32} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">ABOUT US</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-glow-text">About IEEE CodeX</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            IEEE CodeX Sri Lanka is the latest initiative by the IEEE Sri Lanka Section, aimed at building a thriving tech community through the power of competitive programming.
          </p>
        </div>
        
        <GlassCard
          className={`rounded-2xl p-6 md:p-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          glowIntensity="medium"
          blurStrength="medium"
          hoverEffect="subtle"
          interactive={true}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Trophy className="text-blue-400 h-6 w-6" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our engaging competitions, such as the National Olympiad in Informatics (NOI), IEEEXtreme 19.0, and the International Collegiate Programming Contest (ICPC) National Qualifier, provide a platform for participants to enhance their technical abilities and represent Sri Lanka on international stages.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Book className="text-blue-400 h-6 w-6" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  In addition to these competitions, we are excited to launch a Hands-on training session series. These sessions are designed for both school students and undergraduates, regardless of their current skill level, to improve their coding capabilities.
                </p>
              </div>
              
              <a 
                href="#competitions" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-4 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-darkBlue-900 rounded-md px-2 py-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('competitions').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>See our competitions</span>
                <ExternalLink className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-darkBlue-800 to-darkBlue-600 p-6 rounded-xl neon-border relative">
              {/* Shimmer effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="shimmer absolute inset-0"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1">
                    <Users className="text-blue-400 h-6 w-6" />
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Participants will enhance their problem-solving and algorithmic skills while gaining valuable insights from past winners who will share their experiences, strategies, and real competition questions.
                  </p>
                </div>
                
                <GlassCard
                  className="p-4 rounded-lg card-3d"
                  glowIntensity="subtle"
                  blurStrength="medium"
                  hoverEffect="glow"
                  interactive={true}
                >
                  <p className="text-blue-300 font-medium">
                    Our goal is to equip all aspiring coders with the confidence and skills necessary to excel in competitive programming and effectively represent Sri Lanka on the global stage. Join us in this journey to unlock your potential and become a part of the vibrant CodeX community!
                  </p>
                </GlassCard>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">3+</div>
                    <div className="text-xs text-gray-400">Major Competitions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">500+</div>
                    <div className="text-xs text-gray-400">Participants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
        
        {/* Timeline teaser */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="#timeline" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-300 border border-blue-500 border-opacity-30 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>View our programming journey</span>
            <ExternalLink className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}