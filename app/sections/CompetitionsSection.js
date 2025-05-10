'use client'

import { Trophy, Code, Users, Calendar } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';
import Image from 'next/image';

export default function CompetitionsSection() {
  const competitions = [
    {
      name: "National Olympiad in Informatics (NOI)",
      description: "An annual algorithmic programming contest to select the national team for the International Olympiad in Informatics (IOI). The competition runs from February to June 2025.",
      timeline: "February to June 2025",
      icon: <Trophy className="h-12 w-12 text-blue-400" />,
      image: "/images/noi.png",
      category: "noi"
    },
    {
      name: "IEEEXtreme 19.0",
      description: "A global 24-hour hackathon where university teams compete in algorithm-based programming challenges. Open to all IEEE undergraduate and graduate members worldwide.",
      timeline: "July to November 2025",
      icon: <Code className="h-12 w-12 text-blue-400" />,
      image: "/images/ieeextreme.png",
      category: "ieeextreme"
    },
    {
      name: "International Collegiate Programming Contest (ICPC)",
      description: "The world's largest algorithmic competition for university students. Teams of three compete to solve complex real-world problems.",
      timeline: "July to November 2025",
      icon: <Users className="h-12 w-12 text-blue-400" />,
      image: "/images/icpc.png",
      category: "icpc"
    }
  ];

  return (
    <section id="competitions" className="py-24 blue-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 blue-glow-text">Our Competitions</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Challenging contests that develop problem-solving skills and algorithmic thinking
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <ParallaxEffect key={index} speed={0.05} direction="scale" className="h-full">
              <GlassCard 
                className="p-8 h-full flex flex-col"
                hoverEffect="3d"
                glowIntensity="medium"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center blue-glow">
                    {competition.icon}
                  </div>
                </div>

                {/* Competition Image */}
                <div className="mb-4 flex justify-center">
                  <Image 
                    src={competition.image} 
                    alt={competition.name} 
                    width={150} 
                    height={150} 
                    className="rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 text-center text-blue-300">{competition.name}</h3>
                <p className="text-gray-300 mb-6 text-center flex-grow">{competition.description}</p>
                
                <div className="flex items-center justify-center text-blue-400 mt-auto">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{competition.timeline}</span>
                </div>
              </GlassCard>
            </ParallaxEffect>
          ))}
        </div>
      </div>
    </section>
  );
}