'use client'

import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Filter, ChevronDown, ChevronUp, Calendar as CalendarIcon, Award, Code, Trophy, Users, BookOpen } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const timelineRef = useRef(null);
  
  // Calculate current date for timeline indicator
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Intersection Observer to trigger animations when section comes into view
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
    
    const section = document.getElementById('timeline');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  // Scroll to today's date on the timeline
  const scrollToToday = () => {
    if (!timelineRef.current) return;
    
    // Find an event close to today's date
    const today = new Date();
    let closestEventIndex = 0;
    let minDiff = Infinity;
    
    events.forEach((event, index) => {
      // Handle date ranges like "May - July 2025"
      const dateParts = event.date.split(" - ");
      const eventDate = new Date(dateParts[0] + ", 2025");
      const diff = Math.abs(eventDate - today);
      
      if (diff < minDiff) {
        minDiff = diff;
        closestEventIndex = index;
      }
    });
    
    // Get the element and scroll to it
    const eventElements = timelineRef.current.querySelectorAll('.timeline-event');
    if (eventElements[closestEventIndex]) {
      eventElements[closestEventIndex].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Highlight the event briefly
      eventElements[closestEventIndex].classList.add('highlight-pulse');
      setTimeout(() => {
        eventElements[closestEventIndex].classList.remove('highlight-pulse');
      }, 2000);
    }
  };

  // Toggle event expanded state
  const toggleEventExpanded = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  // Complete events data with full NOI qualification process
  const events = [
    { 
      date: "February 2025", 
      title: "NOI 2025 Registration Opens", 
      description: "Registration begins for the National Olympiad in Informatics 2025.", 
      category: "noi",
      status: "past",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "Registration for NOI 2025 opened to all secondary school students across Sri Lanka. Students could register through their schools or individually online."
    },
    { 
      date: "March 15, 2025", 
      title: "NOI 2025 Qualifier Round 1", 
      description: "First qualifying round for NOI 2025 - online contest.", 
      category: "noi",
      status: "past",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "The first qualifier was an online contest lasting 3 hours with 4-5 problems of varying difficulty. Students competed from their schools or designated centers."
    },
    { 
      date: "April 12, 2025", 
      title: "NOI 2025 Qualifier Round 2", 
      description: "Second qualifying round for NOI 2025 - advanced problems.", 
      category: "noi",
      status: "past",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "The second qualifier featured more challenging algorithmic problems. Top performers from Round 1 advanced to compete in this round."
    },
    { 
      date: "May 10, 2025", 
      title: "NOI 2025 National Finals", 
      description: "National finals to select the Sri Lankan team for IOI 2025.", 
      category: "noi",
      status: "past",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "The national finals consisted of two 5-hour contests held over two days. The top 4 students were selected to represent Sri Lanka at the International Olympiad in Informatics."
    },
    { 
      date: "June 28, 2025", 
      title: "Session 1: Introduction to Competitive Programming", 
      description: "Kickstart your journey into the world of competitive programming.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Learn what competitive programming is, why it matters, and how to get started effectively. This foundational session sets the stage for your entire learning journey."
    },
    { 
      date: "July 5, 2025", 
      title: "Session 2: Time and Space Complexity", 
      description: "Understanding algorithm efficiency through complexity analysis.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Master the fundamental concepts of analyzing algorithm performance, a crucial skill for competitive programming success."
    },
    { 
      date: "July 12, 2025", 
      title: "Session 3: Arrays and Prefix Sums", 
      description: "Learn to manipulate arrays efficiently with prefix sum techniques.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Explore array manipulation techniques and leverage prefix sums to solve range query problems with optimal efficiency."
    },
    { 
      date: "July 19, 2025", 
      title: "Session 4: Sorting Algorithms", 
      description: "Dive into essential sorting algorithms and their applications.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Understanding sorting algorithms, their logic, and real-world applications in competitive coding scenarios."
    },
    { 
      date: "July 26, 2025", 
      title: "Session 5: Two-Pointer Techniques", 
      description: "Master the two-pointer technique for array problems.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Learn to solve array problems with reduced complexity using smart two-pointer logic and implementations."
    },
    { 
      date: "August 2, 2025", 
      title: "Session 6: Binary Search", 
      description: "Discover the power of binary search beyond simple element finding.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Apply binary search techniques to solve complex optimization and search problems efficiently."
    },
    { 
      date: "August 9, 2025", 
      title: "Session 7: Greedy Algorithms", 
      description: "Learn to make optimal choices at each step with greedy methods.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Build intuition for solving problems using greedy approaches and understand when they provide optimal solutions."
    },
    { 
      date: "August 16, 2025", 
      title: "Session 8: Recursion and Backtracking", 
      description: "Tackle problems with recursive solutions and backtracking.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Explore the power of backtracking in decision-making scenarios and master recursive problem-solving approaches."
    },
    { 
      date: "August 23, 2025", 
      title: "Session 9: Dynamic Programming (Part I)", 
      description: "Introduction to dynamic programming fundamentals.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Get introduced to dynamic programming, breaking problems into subproblems, and building efficient solutions."
    },
    { 
      date: "August 30, 2025", 
      title: "Session 10: Dynamic Programming (Part II)", 
      description: "Advanced DP techniques with memoization and tabulation.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Dive deeper into DP techniques with memoization, tabulation, and advanced problem types and optimization strategies."
    },
    { 
      date: "September 6, 2025", 
      title: "Session 11: Graph Theory and Traversals", 
      description: "Learn graph representation and traversal algorithms.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Master graph representation techniques and perform traversals like BFS and DFS to solve complex graph problems."
    },
    { 
      date: "September 13, 2025", 
      title: "Session 12: Trees and Disjoint Set Union (DSU)", 
      description: "Understand tree structures and DSU for union-find problems.", 
      category: "sessions",
      status: "future",
      icon: <BookOpen className="h-5 w-5" />,
      detailedInfo: "Master tree data structures and use the Disjoint Set Union technique for optimizing union-find operations."
    },
    { 
      date: "October 2025", 
      title: "IEEEXtreme 19.0", 
      description: "24-hour global coding challenge for IEEE student members.", 
      category: "ieeextreme",
      status: "future",
      icon: <Code className="h-5 w-5" />,
      detailedInfo: "IEEEXtreme is a global 24-hour programming competition where teams of IEEE student members compete against each other to solve algorithmic problems. Sri Lankan teams will participate from designated competition centers."
    },
    { 
      date: "October - November 2025", 
      title: "ICPC National Selections", 
      description: "Selection contest for the ICPC Asia Regional Contest.", 
      category: "icpc",
      status: "future",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "University teams will compete to represent Sri Lanka at the ICPC Asia Regional Contest. Teams consist of three undergraduate students. The selection contest will be held over 5 hours with challenging algorithmic problems."
    },
    { 
      date: "December 2025", 
      title: "ICPC Asia Regional Contest", 
      description: "Regional contest for qualified ICPC teams.", 
      category: "icpc",
      status: "future",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "The selected Sri Lankan teams will compete in the ICPC Asia Regional Contest alongside teams from other Asian countries. Top performers may advance to the ICPC World Finals."
    },
    { 
      date: "February 2026", 
      title: "NOI 2026 Registration Opens", 
      description: "Registration begins for the next National Olympiad in Informatics.", 
      category: "noi",
      status: "future",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "Begin your journey by registering for the National Olympiad in Informatics 2026. Registration is open to all secondary school students across Sri Lanka."
    },
    { 
      date: "March 2026", 
      title: "NOI 2026 Qualifier Round 1", 
      description: "First qualifying round for NOI 2026.", 
      category: "noi",
      status: "future",
      icon: <Trophy className="h-5 w-5" />,
      detailedInfo: "The first qualifier for the next cycle begins. Students who participated in training sessions will be well-prepared for the algorithmic challenges."
    },
    { 
      date: "March 2026", 
      title: "Annual Awards Ceremony", 
      description: "Recognizing outstanding performers across all competitions and sessions.", 
      category: "all",
      status: "future",
      icon: <Award className="h-5 w-5" />,
      detailedInfo: "The annual award ceremony will recognize and celebrate outstanding achievements across all CodeX competitions and training sessions. Awards will be presented to top performers, and scholarships and internship opportunities will be announced."
    }
  ];

  // Enhanced category metadata for better display
  const categories = {
    all: { 
      label: 'All Events', 
      color: 'green-400',
      icon: <Filter className="h-4 w-4 mr-1.5" />
    },
    sessions: { 
      label: 'Training Sessions', 
      color: 'green-400',
      icon: <BookOpen className="h-4 w-4 mr-1.5" />
    },
    noi: { 
      label: 'NOI', 
      color: 'green-400',
      icon: <Trophy className="h-4 w-4 mr-1.5" />
    },
    ieeextreme: { 
      label: 'IEEEXtreme', 
      color: 'green-400',
      icon: <Code className="h-4 w-4 mr-1.5" />
    },
    icpc: { 
      label: 'ICPC', 
      color: 'green-400',
      icon: <Trophy className="h-4 w-4 mr-1.5" />
    }
  };

  // Filter events based on the active tab
  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(event => event.category === activeTab);

  // Get category details including label and color
  const getCategoryDetails = (category) => {
    return categories[category] || categories.all;
  };

  // Get event status styling
  const getEventStatusStyle = (status) => {
    switch(status) {
      case 'past':
        return 'opacity-70';
      case 'current':
        return 'border-2 border-blue-400';
      case 'future':
      default:
        return '';
    }
  };

  return (
    <section id="timeline" className="py-24 bg-darkBlue-900 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      {/* Enhanced code/time symbols background decoration with animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-5xl font-mono opacity-5 text-blue-500 animate-float">{'{'}</div>
        <div className="absolute top-40 right-20 text-5xl font-mono opacity-5 text-blue-500 animate-float animation-delay-500">{'}'}</div>
        <div className="absolute top-1/2 left-1/4 text-6xl opacity-5 text-blue-500 transform -rotate-12 animate-pulse-slow">
          <Clock className="w-16 h-16" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-6xl opacity-5 text-blue-500 transform rotate-12 animate-pulse-slow animation-delay-1000">
          <Calendar className="w-16 h-16" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">ROADMAP</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-glow-text">Event Timeline</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-6">
            Complete timeline from NOI qualifiers to training sessions and competitions
          </p>
          
          {/* Current date indicator */}
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-blue-900 bg-opacity-30 border border-blue-500 border-opacity-30 rounded-lg text-white">
            <CalendarIcon className="h-4 w-4 mr-2 text-blue-400" />
            <span>Today: {formattedCurrentDate}</span>
          </div>
          
          {/* Enhanced Category Tabs with counters */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="p-1 bg-darkBlue-800 bg-opacity-60 rounded-lg inline-flex flex-wrap justify-center gap-1">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-4 py-2 rounded-md transition-all text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-darkBlue-900 ${
                    activeTab === key 
                      ? `bg-${category.color} bg-opacity-20 text-${category.color} border border-${category.color} border-opacity-30` 
                      : 'text-gray-300 hover:text-blue-300 hover:bg-darkBlue-700'
                  }`}
                  aria-pressed={activeTab === key}
                  aria-label={`Filter by ${category.label}`}
                >
                  {category.icon}
                  {category.label}
                  {key !== 'all' && (
                    <span className={`ml-1.5 text-xs bg-darkBlue-700 px-1.5 rounded-full ${
                      activeTab === key ? `text-${category.color}` : 'text-gray-400'
                    }`}>
                      {events.filter(event => event.category === key).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Jump to Current Month button */}
          <button
            onClick={scrollToToday}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-darkBlue-900 mb-8"
          >
            <Clock className="h-4 w-4 mr-2" />
            Jump to Current Month
          </button>
        </div>

        {/* Desktop Timeline with enhanced animations and interactions */}
        <div 
          ref={timelineRef}
          className={`hidden md:block relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Timeline vertical line with enhanced gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-800 z-0 rounded-full"></div>
          
          <div className="relative z-10">
            {filteredEvents.map((event, index) => {
              const categoryDetails = getCategoryDetails(event.category);
              const isExpanded = expandedEvent === index;
              
              return (
                <div 
                  key={index} 
                  className={`mb-16 flex items-center timeline-event ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${getEventStatusStyle(event.status)}`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s ease-out ${300 + index * 150}ms`
                  }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10'}`}>
                    <ParallaxEffect speed={0.03} direction="vertical" reverse={index % 2 === 0}>
                      <GlassCard 
                        className={`p-6 rounded-xl overflow-hidden relative card-3d transition-all duration-300 ${
                          isExpanded ? 'scale-105 shadow-xl' : ''
                        }`}
                        hoverEffect="scale"
                        glowIntensity={event.category === activeTab || activeTab === 'all' ? 'strong' : 'medium'}
                      >
                        {/* Enhanced category indicator */}
                        <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} h-full w-1.5 rounded-l bg-gradient-to-b from-${categoryDetails.color} via-${categoryDetails.color} to-${categoryDetails.color}/70`}></div>
                        
                        {/* Event head with icon */}
                        <div className="flex items-center justify-between mb-3">
                          <div className={`${index % 2 === 0 ? 'ml-auto' : ''} flex items-center gap-2`}>
                            <div className={`bg-${categoryDetails.color} bg-opacity-20 p-2 rounded-full ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                              {event.icon}
                            </div>
                            <h3 className={`font-bold text-xl text-blue-300 ${index % 2 === 0 ? 'order-1 mr-2' : 'order-2 ml-2'}`}>
                              {event.title}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Date with enhanced styling */}
                        <div className={`flex items-center text-gray-400 text-sm mb-3 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-mono">{event.date}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-300">{event.description}</p>
                        
                        {/* Detailed info (expandable) */}
                        {isExpanded && (
                          <div className="mt-4 bg-darkBlue-800 bg-opacity-50 p-3 rounded-lg border border-blue-900 border-opacity-30">
                            <p className="text-gray-300 text-sm">{event.detailedInfo}</p>
                          </div>
                        )}
                        
                        {/* Footer with category badge and expand button */}
                        <div className={`mt-4 flex items-center ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}>
                          <span className={`inline-block bg-${categoryDetails.color} bg-opacity-20 text-${categoryDetails.color} text-xs px-3 py-1 rounded-full border border-${categoryDetails.color} border-opacity-30 flex items-center`}>
                            {categoryDetails.icon}
                            {categoryDetails.label}
                          </span>
                          
                          <button 
                            onClick={() => toggleEventExpanded(index)}
                            className={`ml-2 p-1 rounded-full bg-darkBlue-800 bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 text-gray-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            aria-label={isExpanded ? "Show less details" : "Show more details"}
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </GlassCard>
                    </ParallaxEffect>
                  </div>
                  
                  {/* Enhanced timeline node with event icon */}
                  <div className="flex items-center justify-center z-20">
                    <div className="relative">
                      {/* Animated pulse background */}
                      <div className={`absolute -inset-2 rounded-full animate-pulse-slow opacity-30 bg-${categoryDetails.color}`}></div>
                      
                      <div className={`bg-${categoryDetails.color} rounded-full w-12 h-12 border border-${categoryDetails.color} flex items-center justify-center blue-glow relative z-10 transition-transform duration-300 ${
                        isExpanded ? 'scale-125' : ''
                      }`}>
                        {event.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Mobile Timeline */}
        <div className={`md:hidden relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Mobile timeline vertical line with improved styling */}
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-800 z-0 rounded-full"></div>
          
          <div className="relative z-10 ml-16">
            {filteredEvents.map((event, index) => {
              const categoryDetails = getCategoryDetails(event.category);
              const isExpanded = expandedEvent === index;
              
              return (
                <div 
                  key={index} 
                  className={`mb-12 relative timeline-event ${getEventStatusStyle(event.status)}`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s ease-out ${300 + index * 150}ms`
                  }}
                >
                  {/* Enhanced mobile timeline node */}
                  <div className="absolute -left-12 top-4 flex items-center justify-center z-20">
                    <div className="relative">
                      {/* Animated pulse background */}
                      <div className={`absolute -inset-2 rounded-full animate-pulse-slow opacity-30 bg-${categoryDetails.color}`}></div>
                      
                      <div className={`bg-${categoryDetails.color} rounded-full w-9 h-9 border border-${categoryDetails.color} flex items-center justify-center blue-glow relative z-10 transition-transform duration-300 ${
                        isExpanded ? 'scale-110' : ''
                      }`}>
                        {event.icon}
                      </div>
                    </div>
                  </div>
                  
                  <GlassCard 
                    className={`p-6 rounded-xl overflow-hidden relative card-3d transition-all duration-300 ${
                      isExpanded ? 'scale-102' : ''
                    }`}
                    hoverEffect="shine"
                    glowIntensity={event.category === activeTab || activeTab === 'all' ? 'strong' : 'medium'}
                  >
                    {/* Enhanced category indicator */}
                    <div className={`absolute top-0 left-0 h-full w-1.5 rounded-l bg-gradient-to-b from-${categoryDetails.color} via-${categoryDetails.color} to-${categoryDetails.color}/70`}></div>
                    
                    <h3 className="font-bold text-xl mb-2 text-blue-300">{event.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="font-mono">{event.date}</span>
                    </div>
                    <p className="text-gray-300">{event.description}</p>
                    
                    {/* Detailed info (expandable) */}
                    {isExpanded && (
                      <div className="mt-4 bg-darkBlue-800 bg-opacity-50 p-3 rounded-lg border border-blue-900 border-opacity-30">
                        <p className="text-gray-300 text-sm">{event.detailedInfo}</p>
                      </div>
                    )}
                    
                    {/* Footer with category badge and expand button */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className={`inline-flex items-center bg-${categoryDetails.color} bg-opacity-20 text-${categoryDetails.color} text-xs px-2.5 py-1 rounded-full border border-${categoryDetails.color} border-opacity-30`}>
                        {categoryDetails.icon}
                        <span className="ml-1">{categoryDetails.label}</span>
                      </span>
                      
                      <button 
                        onClick={() => toggleEventExpanded(index)}
                        className={`p-1.5 rounded-full bg-darkBlue-800 bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 text-gray-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        aria-label={isExpanded ? "Show less details" : "Show more details"}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Enhanced footer with additional information */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-darkBlue-800 bg-opacity-40 rounded-lg p-4 flex items-center">
              <div className="bg-blue-900 bg-opacity-30 rounded-full p-2 mr-3">
                <CalendarIcon className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-medium text-white">Academic Year</h4>
                <p className="text-blue-300 text-sm">2025-2026</p>
              </div>
            </div>
            <div className="bg-darkBlue-800 bg-opacity-40 rounded-lg p-4 flex items-center">
              <div className="bg-blue-900 bg-opacity-30 rounded-full p-2 mr-3">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-medium text-white">Timeline Updates</h4>
                <p className="text-blue-300 text-sm">Last updated December 2024</p>
              </div>
            </div>
          </div>
          
          <div className="inline-block py-2.5 px-6 bg-blue-900 bg-opacity-30 rounded-full border border-blue-500 border-opacity-30">
            <span className="text-blue-300 font-medium flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              <span>Showing</span>
              <span className={`mx-1.5 px-2 py-0.5 rounded-full text-sm bg-${categories[activeTab].color} bg-opacity-20 text-${categories[activeTab].color}`}>
                {categories[activeTab].label}
              </span>
              <span>events ({filteredEvents.length})</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* CSS for highlight pulse animation */}
      <style jsx>{`
        .highlight-pulse {
          animation: highlight-pulse 2s ease-in-out;
        }
        
        @keyframes highlight-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
          50% { transform: scale(1.03); box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        
        .timeline-line {
          background: linear-gradient(to bottom, transparent, #3b82f6 10%, #3b82f6 90%, transparent);
        }
      `}</style>
    </section>
  );
}