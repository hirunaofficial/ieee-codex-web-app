'use client'

import { ArrowRight } from 'lucide-react';
import FloatingParticles from '@/app/components/FloatingParticles';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';
import { Code } from 'lucide-react';
import Image from 'next/image'; 

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 animated-gradient relative grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-darkBlue-900 opacity-60"></div>
      <FloatingParticles 
        count={40} 
        colors={['#3b82f6', '#60a5fa', '#93c5fd', '#1d4ed8']} 
        interactive={true}
        density="high"
        direction="random"
        speed="medium"
      />
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center min-h-[80vh]">
        <div className="flex flex-col md:flex-row items-center">
          <ParallaxEffect speed={0.05} className="md:w-3/5 mb-12 md:mb-0 hero-animate">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 blue-glow-text">
              From <span className="text-blue-400">logic</span> to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">legacy</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">
              Let's create a thriving tech community together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#competitions" 
                className="group px-8 py-4 bg-blue-600 text-white font-medium rounded-lg blue-glow hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('competitions').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Competitions
                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 bg-transparent border border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors group flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ParallaxEffect>
    
          <ParallaxEffect 
  speed={0.1} 
  direction="scale" 
  reverse={true} 
  className="flex justify-center items-center hero-animate relative w-full h-full" 
  style={{ animationDelay: '0.3s' }}
>
  <div className="group relative flex items-center justify-center w-full h-full">
    
    {/* Spotlight Effect */}
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      <div className="w-[500px] h-[500px] bg-gradient-to-br from-blue-600 to-transparent rounded-full opacity-30 blur-3xl"></div>
    </div>
    
    {/* Codex Logo - Enlarged and Centered */}
    <div className="relative flex items-center justify-center group-hover:scale-105 group-hover:rotate-6 transition-transform duration-700 cursor-pointer">
      <Image 
        src="/images/codex-logo.png" 
        alt="Codex Logo" 
        width={300} 
        height={300} 
        className="rounded-full shadow-2xl shadow-blue-500/70 hover:shadow-blue-600/80 transition-all duration-700"
      />

      {/* Hover Line Effect */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-400 group-hover:w-32 transition-all duration-700"></div>
    </div>
  </div>
</ParallaxEffect>


        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      </div>
    </section>
  );
}