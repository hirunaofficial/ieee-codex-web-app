'use client'

import { Mail, Phone } from 'lucide-react';
import { useRef } from 'react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function ContactSection() {
  const team = [
    { name: "Thamindu Nirmal", position: "Chair", email: "thamindunirmal@gmail.com", phone: "+94 707621025" },
    { name: "Nethmi Fernando", position: "Secretary", email: "nethmilakshima2003@gmail.com", phone: "+94 774424894" },
    { name: "Dineth Palliyaguru", position: "Public Visibility Vice Chair", email: "dineththeekshana@gmail.com", phone: "+94 774104170" },
    { name: "Mahima Bashitha", position: "Program and Delivery Vice Chair", email: "mahimabashitha2001@gmail.com", phone: "+94 711305386" },
    { name: "Ishara Dias", position: "Finance and Partnerships Vice Chair", email: "isharalakshandias@gmail.com", phone: "+94 703825613" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-blue-900 to-darkBlue-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/2"></div>
      
      {/* Removed the FloatingParticles component which was causing the issue */}
      {/* Added simple static particles instead */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.2,
              backgroundColor: '#3b82f6',
              animation: `pulse ${5 + Math.random() * 5}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 blue-glow-text">Contact Us</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Have questions? Reach out to our team members.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <ParallaxEffect speed={0.05} direction="horizontal" reverse={true}>
            <GlassCard 
              className="rounded-xl overflow-hidden"
              hoverEffect="lift"
              glowIntensity="medium"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-blue-300">Key Contacts</h3>
                <div className="space-y-6">
                  {team.slice(0, 3).map((member, index) => (
                    <div key={index} className="flex bg-darkBlue-700 bg-opacity-40 p-4 rounded-lg hover:bg-darkBlue-600 hover:bg-opacity-40 transition-colors">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {member.name.split(' ').map(name => name[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{member.name}</h4>
                        <p className="text-sm text-blue-300 mb-2">{member.position}</p>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Mail className="h-3 w-3 mr-2 text-blue-400" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Phone className="h-3 w-3 mr-2 text-blue-400" />
                          <span>{member.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ParallaxEffect>

          <ParallaxEffect speed={0.05} direction="horizontal">
            <GlassCard 
              className="rounded-xl overflow-hidden"
              hoverEffect="lift"
              glowIntensity="medium"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-blue-300">Additional Contacts</h3>
                <div className="space-y-6">
                  {team.slice(3, 5).map((member, index) => (
                    <div key={index} className="flex bg-darkBlue-700 bg-opacity-40 p-4 rounded-lg hover:bg-darkBlue-600 hover:bg-opacity-40 transition-colors">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {member.name.split(' ').map(name => name[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{member.name}</h4>
                        <p className="text-sm text-blue-300 mb-2">{member.position}</p>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Mail className="h-3 w-3 mr-2 text-blue-400" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Phone className="h-3 w-3 mr-2 text-blue-400" />
                          <span>{member.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ParallaxEffect>
        </div>

        {/* Connect with us section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ParallaxEffect speed={0.03} direction="vertical">
            <GlassCard 
              className="p-8 rounded-xl text-center"
              hoverEffect="shine"
              glowIntensity="medium"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-300">Connect With Us</h3>
              <p className="text-gray-300 mb-6">
                Follow us on social media to stay updated with the latest news and events.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Dribbble</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </GlassCard>
          </ParallaxEffect>
        </div>
      </div>
    </section>
  );
}