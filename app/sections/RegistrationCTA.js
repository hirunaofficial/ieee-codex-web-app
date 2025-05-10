'use client'

import { ArrowRight } from 'lucide-react';
import FloatingParticles from '@/app/components/FloatingParticles';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function RegistrationCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-darkBlue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/2"></div>
      <FloatingParticles 
        count={15} 
        colors={['#3b82f6', '#60a5fa']} 
        minSize={2}
        maxSize={6}
        direction="up"
        density="low"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ParallaxEffect speed={0.05} direction="scale" reverse={true}>
          <GlassCard 
            className="max-w-4xl mx-auto text-center p-10 rounded-2xl" 
            glowIntensity="strong"
            blurStrength="strong"
            hoverEffect="shine"
          >
            <h2 className="text-3xl font-bold mb-4 blue-glow-text">Ready to Join the Community?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Register now for our upcoming competitions and training sessions!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#" 
                className="group px-8 py-4 bg-blue-600 text-white font-medium rounded-lg blue-glow hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center"
              >
                Register for NOI 2025
                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#" 
                className="group px-8 py-4 bg-transparent border border-blue-500 text-blue-300 font-medium rounded-lg hover:bg-blue-600 hover:bg-opacity-20 transition-all hover:scale-105 flex items-center justify-center"
              >
                Join Training Sessions
                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </GlassCard>
        </ParallaxEffect>
      </div>
    </section>
  );
}