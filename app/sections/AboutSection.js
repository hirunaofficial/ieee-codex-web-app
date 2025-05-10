'use client'

import GlassCard from '@/app/components/GlassCard';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 blue-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 blue-glow-text">About IEEE CodeX</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            IEEE CodeX Sri Lanka is the latest initiative by the IEEE Sri Lanka Section, aimed at building a thriving tech community through the power of competitive programming.
          </p>
        </div>
        
        <GlassCard 
          className="rounded-2xl p-8"
          glowIntensity="medium"
          blurStrength="medium"
          hoverEffect="none"
          interactive={false}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our engaging competitions, such as the National Olympiad in Informatics (NOI), IEEEXtreme 19.0, and the International Collegiate Programming Contest (ICPC) National Qualifier, provide a platform for participants to enhance their technical abilities and represent Sri Lanka on international stages.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In addition to these competitions, we are excited to launch a Hands-on training session series. These sessions are designed for both school students and undergraduates, regardless of their current skill level, to improve their coding capabilities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-darkBlue-800 to-darkBlue-600 p-6 rounded-xl neon-border">
              <p className="text-gray-200 mb-6 leading-relaxed">
                Participants will enhance their problem-solving and algorithmic skills while gaining valuable insights from past winners who will share their experiences, strategies, and real competition questions.
              </p>
              <GlassCard 
                className="p-4 rounded-lg"
                glowIntensity="subtle"
                blurStrength="medium"
                hoverEffect="none"
                interactive={false}
              >
                <p className="text-blue-300 font-medium">
                  Our goal is to equip all aspiring coders with the confidence and skills necessary to excel in competitive programming and effectively represent Sri Lanka on the global stage. Join us in this journey to unlock your potential and become a part of the vibrant CodeX community!
                </p>
              </GlassCard>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}