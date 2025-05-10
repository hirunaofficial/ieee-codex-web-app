'use client'

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState('all');

  const events = [
    { date: "February 13, 2025", title: "Registrations Open for NOI 2025", description: "Begin your journey by registering for the National Olympiad in Informatics.", category: "noi" },
    { date: "March 31, 2025", title: "Registrations Close for NOI 2025", description: "Last chance to secure your spot in the competition!", category: "noi" },
    { date: "April 5, 2025", title: "Qualifier Contest for NOI 2025", description: "Online qualifier contest to select students for NOI 2025.", category: "noi" },
    { date: "May 3-4, 2025", title: "NOI 2025", description: "The National Olympiad in Informatics competition days.", category: "noi" },
    { date: "May - July 2025", title: "Hands-on Training Session Series", description: "Sessions for school students and undergraduates to improve coding skills.", category: "training" },
    { date: "July 27 - August 3, 2025", title: "IOI 2025", description: "Sri Lankan team competes at the International Olympiad in Informatics in Bolivia.", category: "noi" },
    { date: "July - August 2025", title: "IEEEXtreme 19.0 Promotions", description: "Awareness sessions, registrations, and webinars.", category: "ieeextreme" },
    { date: "October 2025", title: "IEEEXtreme 19.0", description: "24-hour global coding challenge!", category: "ieeextreme" },
    { date: "October - November 2025", title: "ICPC National Selections", description: "Selection contest for the ICPC Asia Regional Contest.", category: "icpc" },
    { date: "March 2026", title: "Award Ceremony", description: "Recognizing outstanding performers in NOI, IEEEXtreme, and ICPC.", category: "all" }
  ];

  // Filter events based on the active tab
  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(event => event.category === activeTab);

  return (
    <section id="timeline" className="py-24 bg-darkBlue-900 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 blue-glow-text">Event Timeline</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-10">
            Key dates and milestones for our upcoming events and competitions
          </p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['all', 'noi', 'ieeextreme', 'icpc', 'training'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === category 
                    ? 'bg-blue-600 text-white blue-glow' 
                    : 'glass-card text-gray-300 hover:text-blue-300'
                }`}
              >
                {category === 'all' ? 'All Events' : 
                 category === 'noi' ? 'NOI' : 
                 category === 'ieeextreme' ? 'IEEEXtreme' : 
                 category === 'icpc' ? 'ICPC' : 'Training'}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line z-0"></div>
          
          <div className="relative z-10">
            {filteredEvents.map((event, index) => (
              <div 
                key={index} 
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <ParallaxEffect speed={0.03} direction={index % 2 === 0 ? 'horizontal' : 'horizontal'} reverse={index % 2 === 0}>
                    <GlassCard 
                      className="p-6 rounded-xl"
                      hoverEffect="scale"
                      glowIntensity={event.category === activeTab || activeTab === 'all' ? 'strong' : 'medium'}
                    >
                      <h3 className="font-bold text-xl mb-2 text-blue-300">{event.title}</h3>
                      <div className={`flex items-center text-gray-400 text-sm mb-3 ${
                        index % 2 === 0 ? 'justify-end' : 'justify-start'
                      }`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <p className="text-gray-300">{event.description}</p>
                      
                      {/* Event category badge */}
                      <div className={`mt-3 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <span className="inline-block bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">
                          {event.category === 'noi' ? 'NOI' : 
                           event.category === 'ieeextreme' ? 'IEEEXtreme' : 
                           event.category === 'icpc' ? 'ICPC' : 
                           event.category === 'training' ? 'Training' : 'All Events'}
                        </span>
                      </div>
                    </GlassCard>
                  </ParallaxEffect>
                </div>
                
                <div className="flex items-center justify-center z-20">
                  <div className="bg-blue-600 rounded-full w-8 h-8 border border-blue-400 flex items-center justify-center blue-glow glowing-dot">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 h-full w-1 timeline-line z-0"></div>
          
          <div className="relative z-10 ml-12">
            {filteredEvents.map((event, index) => (
              <div key={index} className="mb-10 relative">
                <div className="absolute -left-12 top-4 flex items-center justify-center z-20">
                  <div className="bg-blue-600 rounded-full w-8 h-8 border border-blue-400 flex items-center justify-center blue-glow glowing-dot">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                
                <GlassCard 
                  className="p-6 rounded-xl"
                  hoverEffect="scale"
                  glowIntensity={event.category === activeTab || activeTab === 'all' ? 'strong' : 'medium'}
                >
                  <h3 className="font-bold text-xl mb-2 text-blue-300">{event.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <p className="text-gray-300">{event.description}</p>
                  
                  {/* Event category badge */}
                  <div className="mt-3">
                    <span className="inline-block bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">
                      {event.category === 'noi' ? 'NOI' : 
                       event.category === 'ieeextreme' ? 'IEEEXtreme' : 
                       event.category === 'icpc' ? 'ICPC' : 
                       event.category === 'training' ? 'Training' : 'All Events'}
                    </span>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}