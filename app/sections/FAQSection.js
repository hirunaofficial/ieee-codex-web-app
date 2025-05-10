'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function FAQSection() {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "What is IEEE CodeX Sri Lanka?", 
      answer: "IEEE CodeX Sri Lanka is the latest initiative by the IEEE Sri Lanka Section aimed at promoting competitive programming in Sri Lanka through various coding contests and training sessions." 
    },
    { 
      question: "How can I participate in the competitions?", 
      answer: "Participants can register for the National Olympiad in Informatics (NOI), IEEEXtreme, and ICPC through the respective official websites once registrations open." 
    },
    { 
      question: "What training sessions are available?", 
      answer: "We offer a series of training sessions focusing on problem-solving, algorithmic thinking, teamwork, time management and insights from past winners to prepare participants for competitions. We aim to build a tech community." 
    },
    { 
      question: "Who can participate in these competitions?", 
      answer: "The competitions like IEEEXtreme 19.0 and International Collegiate Programming Competition (ICPC) are open to university students while National Olympiad in Informatics (NOI) is open to secondary school students." 
    },
    { 
      question: "How can sponsors get involved?", 
      answer: "Sponsors can partner with us to gain visibility, access top talent, and showcase their brand through various promotional opportunities." 
    }
  ];

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-darkBlue-900 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 blue-glow-text">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Find answers to common questions about IEEE CodeX Sri Lanka
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <ParallaxEffect speed={0.03}>
                <GlassCard 
                  className="rounded-xl overflow-hidden"
                  hoverEffect="shine"
                  glowIntensity="medium"
                  interactive={true}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between cursor-pointer p-6 transition-colors hover:bg-darkBlue-700">
                    <h3 className="text-lg font-medium text-blue-300">{faq.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </div>
                  
                  {/* Answer section that shows/hides based on state */}
                  <div 
                    className={`px-6 pb-6 pt-2 text-gray-300 border-t border-blue-900 transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden border-t-0'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </GlassCard>
              </ParallaxEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}