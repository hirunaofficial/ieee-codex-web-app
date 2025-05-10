'use client'

import { Mail, Phone } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function TeamSection() {
  const team = [
    { name: "Thamindu Nirmal", position: "Chair", email: "thamindunirmal@gmail.com", phone: "+94 707621025" },
    { name: "Nethmi Fernando", position: "Secretary", email: "nethmilakshima2003@gmail.com", phone: "+94 774424894" },
    { name: "Dineth Palliyaguru", position: "Public Visibility Vice Chair", email: "dineththeekshana@gmail.com", phone: "+94 774104170" },
    { name: "Mahima Bashitha", position: "Program and Delivery Vice Chair", email: "mahimabashitha2001@gmail.com", phone: "+94 711305386" },
    { name: "Ishara Dias", position: "Finance and Partnerships Vice Chair", email: "isharalakshandias@gmail.com", phone: "+94 703825613" },
  ];

  const coordinators = [
    "Chamika Pathirana", "Hiruna Gallage", "Adeepa Shamal", "Yashodha De Silva", 
    "Sasanka Savindi", "Madhawa Aloka", "Menura Basitha", "Unduli Senadheera"
  ];

  return (
    <section id="team" className="py-24 blue-gradient relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 blue-glow-text">Our Team</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Meet the dedicated individuals behind IEEE CodeX Sri Lanka
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <ParallaxEffect key={index} speed={0.05 * (index + 1)} direction="vertical">
              <GlassCard 
                className="rounded-xl overflow-hidden"
                hoverEffect="3d"
              >
                <div className="p-8 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 blue-glow">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-1 text-white">{member.name}</h3>
                  <p className="text-blue-300 text-center text-sm mb-6">{member.position}</p>
                  <div className="flex items-center text-gray-300 mb-3 bg-darkBlue-700 bg-opacity-40 p-3 rounded-lg">
                    <Mail className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300 bg-darkBlue-700 bg-opacity-40 p-3 rounded-lg">
                    <Phone className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
                </div>
              </GlassCard>
            </ParallaxEffect>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">Coordinators</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coordinators.map((coordinator, index) => (
              <ParallaxEffect key={index} speed={0.03} direction="scale">
                <GlassCard 
                  className="px-6 py-3 rounded-lg"
                  hoverEffect="scale"
                  glowIntensity="subtle"
                >
                  <span className="text-gray-300">{coordinator}</span>
                </GlassCard>
              </ParallaxEffect>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}