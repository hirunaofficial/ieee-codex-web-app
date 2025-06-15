'use client'

import { useState, useEffect } from 'react';
import { Calendar, Clock, ExternalLink, ArrowRight, BookOpen, X, Mail, User, Globe } from 'lucide-react';
import Image from 'next/image';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function SessionsSection() {
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
    
    const section = document.getElementById('sessions');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  const sessions = [
    {
      id: 1,
      title: "Introduction to Competitive Programming",
      description: "Kickstart your journey into the world of competitive programming. Learn what it is, why it matters, and how to get started effectively.",
      date: "June 28th, 2025",
      slug: "intro-competitive-programming"
    },
    {
      id: 2,
      title: "Time and Space Complexity",
      description: "Understanding how to analyze algorithms' efficiency through time and space complexity is a key skill for coding contests.",
      date: "July 5th, 2025",
      slug: "time-space-complexity"
    },
    {
      id: 3,
      title: "Arrays and Prefix Sums",
      description: "Learn to manipulate arrays efficiently and leverage prefix sums to solve range query problems with ease.",
      date: "July 12th, 2025",
      slug: "arrays-prefix-sums"
    },
    {
      id: 4,
      title: "Sorting Algorithms",
      description: "Dive into essential sorting algorithms, their logic, and real-world applications in competitive coding.",
      date: "July 19th, 2025",
      slug: "sorting-algorithms"
    },
    {
      id: 5,
      title: "Two-Pointer Techniques",
      description: "Master the two-pointer technique to solve array problems with reduced complexity and smarter logic.",
      date: "July 26th, 2025",
      slug: "two-pointer-techniques"
    },
    {
      id: 6,
      title: "Binary Search",
      description: "Discover the power of binary search beyond finding elements and apply it to solve complex problems efficiently.",
      date: "August 2nd, 2025",
      slug: "binary-search"
    },
    {
      id: 7,
      title: "Greedy Algorithms",
      description: "Learn to make optimal choices at each step and build intuition for solving problems using greedy methods.",
      date: "August 9th, 2025",
      slug: "greedy-algorithms"
    },
    {
      id: 8,
      title: "Recursion and Backtracking",
      description: "Tackle problems with recursive solutions and explore the power of backtracking in decision-making scenarios.",
      date: "August 16th, 2025",
      slug: "recursion-backtracking"
    },
    {
      id: 9,
      title: "Dynamic Programming (Part I)",
      description: "Get introduced to dynamic programming, breaking problems into subproblems, and building efficient solutions.",
      date: "August 23rd, 2025",
      slug: "dynamic-programming-1"
    },
    {
      id: 10,
      title: "Dynamic Programming (Part II)",
      description: "Dive deeper into DP techniques with memoization, tabulation, and advanced problem types.",
      date: "August 30th, 2025",
      slug: "dynamic-programming-2"
    },
    {
      id: 11,
      title: "Graph Theory and Traversals",
      description: "Learn how to represent graphs and perform traversals like BFS and DFS to solve a range of problems.",
      date: "September 6th, 2025",
      slug: "graph-theory-traversals"
    },
    {
      id: 12,
      title: "Trees and Disjoint Set Union (DSU)",
      description: "Understand tree data structures and use the Disjoint Set Union technique for optimizing union-find problems.",
      date: "September 13th, 2025",
      slug: "trees-dsu"
    }
  ];

  const [selectedSession, setSelectedSession] = useState(null);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  const closeModal = () => {
    setSelectedSession(null);
  };

  return (
    <section id="sessions" className="py-24 bg-darkBlue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      {/* Floating book symbols */}
      <div className="absolute top-20 left-10 text-blue-500 opacity-20 animate-bounce-slow">
        <BookOpen size={32} />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-500 opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <BookOpen size={32} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">TRAINING</span>
          
          {/* Updated Header with CodeX Text Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
            <Image 
              src="/images/codex-text.png" 
              alt="CodeX" 
              width={160} 
              height={45} 
              className="drop-shadow-lg blue-glow-text"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
              }}
            />
            <h2 className="text-3xl md:text-4xl font-bold blue-glow-text">Session Series</h2>
          </div>
          
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Comprehensive training sessions are designed to build strong programming foundations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sessions.map((session, index) => (
            <div 
              key={session.id}
              className={`transition-all duration-1000 delay-${200 + index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <ParallaxEffect speed={0.03} direction="vertical">
                <GlassCard 
                  className="p-6 h-full flex flex-col card-3d cursor-pointer"
                  hoverEffect="3d"
                  glowIntensity="medium"
                  onClick={() => handleSessionClick(session)}
                >
                  {/* Session Number Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-900 bg-opacity-70 flex items-center justify-center blue-glow-subtle">
                      <span className="text-blue-400 font-bold text-lg">{session.id}</span>
                    </div>
                    <div className="text-blue-400 opacity-70">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-blue-300 leading-tight">{session.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">{session.description}</p>
                  
                  {/* Session details */}
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center text-blue-400 mb-3">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium">{session.date}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-blue-900 border-opacity-70">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">Session {session.id} of 12</span>
                        <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ParallaxEffect>
            </div>
          ))}
        </div>
        
        {/* Series Overview */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <GlassCard className="p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">About the Series</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This comprehensive 12-session series is designed to take you from the basics of competitive programming to advanced algorithmic concepts. Each session builds upon previous knowledge, ensuring a structured learning path that prepares you for national and international programming competitions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-sm text-gray-400">Comprehensive Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-sm text-gray-400">Months Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Online</div>
                <div className="text-sm text-gray-400">Expert-Led Sessions</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Session Registration Modal */}
      {selectedSession && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-darkBlue-900 rounded-2xl border border-blue-500 border-opacity-30 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-blue-900 bg-opacity-70 flex items-center justify-center mr-4 blue-glow-subtle">
                      <span className="text-blue-400 font-bold text-lg">{selectedSession.id}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {selectedSession.title}
                      </h3>
                      <p className="text-blue-300 text-sm mt-1">Session {selectedSession.id} of 12</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-darkBlue-800 rounded-lg"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Date Badge */}
              <div className="flex items-center mb-6 bg-blue-900 bg-opacity-30 rounded-lg p-3 border border-blue-500 border-opacity-30">
                <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-blue-300 font-medium">{selectedSession.date}</span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                  About This Session
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedSession.description}
                </p>
              </div>

              {/* Session Details */}
              <div className="bg-darkBlue-800 bg-opacity-50 rounded-xl p-5 mb-6 border border-blue-900 border-opacity-30">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Session Details
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Speaker:</span>
                    </div>
                    <span className="text-blue-300 font-medium bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full text-sm">TBA</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Date:</span>
                    </div>
                    <span className="text-blue-300 font-medium">{selectedSession.date}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Time:</span>
                    </div>
                    <span className="text-blue-300 font-medium bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full text-sm">TBA</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Meeting Link:</span>
                    </div>
                    <span className="text-blue-300 font-medium bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full text-sm">TBA</span>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <div className="mb-6">
                <button 
                  disabled
                  className="w-full py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 rounded-xl font-semibold cursor-not-allowed transition-all flex items-center justify-center border border-gray-600"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Registration Opens Soon
                </button>
                <p className="text-gray-400 text-sm text-center mt-2">
                  We'll notify you when registration becomes available
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 bg-opacity-30 rounded-xl p-5 border border-blue-500 border-opacity-30">
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 text-blue-400 mr-2" />
                  <h4 className="text-blue-300 font-semibold">Need More Information?</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions about this session? Contact our team for detailed information and updates.
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:thamindusrinirmal1@gmail.com" 
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group bg-darkBlue-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70"
                  >
                    <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">thamindusrinirmal1@gmail.com</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="mailto:dineth@ieee.org" 
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group bg-darkBlue-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70"
                  >
                    <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">dineth@ieee.org</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}