'use client'

import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';
import CountUpAnimation from '@/app/components/CountUpAnimation';

export default function StatsSection() {
  return (
    <section className="py-20 bg-darkBlue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <ParallaxEffect speed={0.08} direction="vertical">
            <GlassCard 
              className="p-8 rounded-xl text-center"
              hoverEffect="lift"
              glowIntensity="medium"
            >
              <h3 className="text-5xl font-bold text-blue-400 mb-2 blue-glow-text">
                <CountUpAnimation end={1000} suffix="+" easing="easeOutExpo" />
              </h3>
              <p className="text-gray-300">Participants</p>
            </GlassCard>
          </ParallaxEffect>
          
          <ParallaxEffect speed={0.12} direction="vertical">
            <GlassCard 
              className="p-8 rounded-xl text-center"
              hoverEffect="lift"
              glowIntensity="medium"
              delay={200}
            >
              <h3 className="text-5xl font-bold text-blue-400 mb-2 blue-glow-text">
                <CountUpAnimation end={3} easing="easeOutExpo" delay={200} />
              </h3>
              <p className="text-gray-300">Major Competitions</p>
            </GlassCard>
          </ParallaxEffect>
          
          <ParallaxEffect speed={0.16} direction="vertical">
            <GlassCard 
              className="p-8 rounded-xl text-center"
              hoverEffect="lift"
              glowIntensity="medium"
              delay={400}
            >
              <h3 className="text-5xl font-bold text-blue-400 mb-2 blue-glow-text">
                <CountUpAnimation end={20} suffix="+" easing="easeOutExpo" delay={400} />
              </h3>
              <p className="text-gray-300">Training Sessions</p>
            </GlassCard>
          </ParallaxEffect>
          
          <ParallaxEffect speed={0.2} direction="vertical">
            <GlassCard 
              className="p-8 rounded-xl text-center"
              hoverEffect="lift"
              glowIntensity="medium"
              delay={600}
            >
              <h3 className="text-5xl font-bold text-blue-400 mb-2 blue-glow-text">
                <CountUpAnimation end={5} easing="easeOutExpo" delay={600} />
              </h3>
              <p className="text-gray-300">International Representations</p>
            </GlassCard>
          </ParallaxEffect>
        </div>
      </div>
    </section>
  );
}