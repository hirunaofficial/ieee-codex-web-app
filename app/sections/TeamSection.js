'use client'

import { useState, useEffect } from 'react';
import { Linkedin, User, Users, Mail, Award, Star } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  
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
    
    const teamElement = document.getElementById('team');
    if (teamElement) {
      observer.observe(teamElement);
    }
    return () => observer.disconnect();
  }, []);

  // Handle image load errors
  const handleImageError = (memberName) => {
    setImageErrors(prev => ({
      ...prev,
      [memberName]: true
    }));
  };

  // Team data with images and LinkedIn
  const team = [
    { 
      name: "Thamindu Nirmal", 
      position: "Chair",
      image: "/images/team/Thamindu Nirmal.jpg",
      social: {
        linkedin: "https://linkedin.com/in/thamindu-nirmal"
      },
      bio: "Leading IEEE CodeX initiatives to build a thriving tech community in Sri Lanka.",
      achievements: ["Community Leader", "Tech Innovator", "Event Organizer"]
    },
    { 
      name: "Nethmi Fernando", 
      position: "Secretary",
      image: "/images/team/Nethmi Fernando.jpg",
      social: {
        linkedin: "https://linkedin.com/in/nethmi-fernando"
      },
      bio: "Coordinating all administrative aspects and ensuring smooth operations of our initiatives.",
      achievements: ["Operations Expert", "Process Optimizer", "Team Coordinator"]
    },
    { 
      name: "Dineth Palliyaguru", 
      position: "Public Visibility Vice Chair",
      image: "/images/team/DinethPalliyaguru.jpg",
      social: {
        linkedin: "https://linkedin.com/in/dineth-palliyaguru"
      },
      bio: "Managing our public presence and outreach strategies to promote competitive programming.",
      achievements: ["Marketing Strategist", "Brand Ambassador", "Content Creator"]
    },
    { 
      name: "Mahima Bashitha", 
      position: "Program and Delivery Vice Chair",
      image: "/images/team/Mahima Bhashitha.jpg",
      social: {
        linkedin: "https://linkedin.com/in/mahima-bashitha"
      },
      bio: "Overseeing all programming events and competitions for maximum participant value.",
      achievements: ["Program Manager", "Event Coordinator", "Quality Assurance"]
    },
    { 
      name: "Ishara Dias", 
      position: "Finance and Partnerships Vice Chair",
      image: "/images/team/Ishara_Dias.jpg",
      social: {
        linkedin: "https://linkedin.com/in/ishara-dias"
      },
      bio: "Managing financial resources and developing strategic partnerships with industry leaders.",
      achievements: ["Financial Analyst", "Partnership Developer", "Strategic Planner"]
    },
  ];

  // Coordinators with their corresponding images
  const coordinators = [
    { name: "Hiruna Gallage", image: "/images/team/Hiruna_Gallage.jpg", role: "Technical Coordinator" },
    { name: "Chamika Pathirana", image: "/images/team/Chamika Lakshan.png", role: "Event Coordinator" },
    { name: "Adeepa Shamal", image: "/images/team/adeepa wickramasinghe.jpg", role: "Content Coordinator" },
    { name: "Yashodha De Silva", image: "/images/team/Yashodha De Silva.jpg", role: "Design Coordinator" },
    { name: "Sasanka Savindi", image: "/images/team/SasankaWakista.jpg", role: "Social Media Coordinator" },
    { name: "Madhawa Aloka", image: "/images/team/Madhawa_aloka.jpg", role: "Logistics Coordinator" },
    { name: "Menura Basitha", image: "/images/team/Menura Andrahennedi (2).jpg", role: "Community Coordinator" },
    { name: "Senaya Bandara", image: "/images/team/Senaya Bandara.jpg", role: "Marketing Coordinator" }
  ];

  // Function to get initials from name
  const getInitials = (name) => {
    return name.split(' ').map(part => part[0]).join('');
  };

  // Function to generate random gradient colors for avatars
  const getGradient = (index) => {
    const gradients = [
      "from-blue-600 to-purple-600",
      "from-green-500 to-blue-600",
      "from-blue-600 to-cyan-500",
      "from-indigo-600 to-blue-500",
      "from-blue-500 to-teal-400",
      "from-purple-600 to-pink-600",
      "from-orange-500 to-red-500",
      "from-teal-500 to-green-500"
    ];
    
    return gradients[index % gradients.length];
  };

  // Component for member avatar with fallback
  const MemberAvatar = ({ member, index, size = "large", showBorder = false }) => {
    const sizeClasses = {
      large: "w-32 h-32",
      medium: "w-20 h-20",
      small: "w-16 h-16"
    };

    const textSizeClasses = {
      large: "text-2xl",
      medium: "text-lg",
      small: "text-sm"
    };

    const borderClass = showBorder ? "ring-4 ring-blue-400 ring-opacity-50" : "";

    if (imageErrors[member.name] || !member.image) {
      return (
        <div className={`${sizeClasses[size]} bg-gradient-to-br ${getGradient(index)} rounded-full flex items-center justify-center mx-auto ${size === 'large' ? 'mb-6 blue-glow-subtle' : 'mb-3'} ${borderClass} transition-all duration-300`}>
          <span className={`text-white font-bold ${textSizeClasses[size]}`}>
            {getInitials(member.name)}
          </span>
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden mx-auto ${size === 'large' ? 'mb-6 blue-glow-subtle' : 'mb-3'} bg-gradient-to-br ${getGradient(index)} ${borderClass} transition-all duration-300`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
          style={{ objectPosition: 'center 30%' }}
          onError={() => handleImageError(member.name)}
          loading="lazy"
        />
      </div>
    );
  };

  // Modal for member details
  const MemberModal = ({ member, isOpen, onClose }) => {
    if (!isOpen || !member) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-darkBlue-800 rounded-2xl p-8 max-w-md w-full relative animate-pulse-glow">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
          
          <div className="text-center">
            <MemberAvatar member={member} index={0} size="large" showBorder={true} />
            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-blue-300 mb-4">{member.position}</p>
            <p className="text-gray-300 mb-6 italic">"{member.bio}"</p>
            
            {member.achievements && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Achievements</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.achievements.map((achievement, index) => (
                    <span key={index} className="bg-blue-600 bg-opacity-30 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-500 border-opacity-30">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-center">
              {member.social?.linkedin && (
                <a 
                  href={member.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="py-24 blue-gradient relative overflow-hidden">
      {/* Enhanced Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-pulse absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="animate-pulse absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full delay-1000"></div>
        <div className="animate-pulse absolute bottom-32 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full delay-2000"></div>
        <div className="animate-pulse absolute bottom-48 right-20 w-1 h-1 bg-blue-300 rounded-full delay-500"></div>
      </div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-40 left-10 text-blue-600 opacity-10 animate-float">
        <User className="w-32 h-32" />
      </div>
      <div className="absolute bottom-40 right-10 text-blue-600 opacity-10 animate-float-delayed">
        <Users className="w-32 h-32" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 opacity-5">
        <Award className="w-48 h-48" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-20 text-blue-300 px-4 py-2 rounded-full border border-blue-500 border-opacity-30 mb-6 inline-block animate-pulse-subtle">
            <Star className="inline w-3 h-3 mr-2" />
            MEET OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 blue-glow-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Amazing Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Meet the passionate innovators driving IEEE CodeX Sri Lanka forward
          </p>
        </div>

        {/* Executive Team with enhanced cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {team.map((member, index) => (
            <div 
              key={index}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${200 + index * 150}ms`
              }}
            >
              <ParallaxEffect speed={0.03} direction="vertical">
                <GlassCard 
                  className={`rounded-2xl overflow-hidden card-3d transition-all duration-500 ${
                    hoveredMember === index ? 'transform scale-105' : ''
                  }`}
                  hoverEffect="3d"
                  glowIntensity="medium"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="p-8 relative overflow-hidden">
                    {/* Enhanced background effects */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full filter blur-2xl opacity-15 animate-pulse-slow delay-1000"></div>
                    
                    {/* Avatar with enhanced effects */}
                    <div className="relative z-10">
                      <MemberAvatar 
                        member={member} 
                        index={index} 
                        size="large" 
                        showBorder={hoveredMember === index}
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-center mb-2 text-white group-hover:text-blue-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 text-center text-sm mb-6 font-medium">
                        {member.position}
                      </p>
                      
                      {/* Interactive elements */}
                      <div className="flex justify-center">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </GlassCard>
              </ParallaxEffect>
            </div>
          ))}
        </div>

        {/* Enhanced Coordinators Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <GlassCard className="p-10 rounded-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-300 mb-4">Our Coordinators</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-400">The backbone of our organization</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coordinators.map((coordinator, index) => (
                <ParallaxEffect key={index} speed={0.02} direction="scale">
                  <GlassCard 
                    className="px-6 py-6 rounded-xl text-center h-full flex flex-col items-center justify-center card-3d group hover:bg-gradient-to-br hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300"
                    hoverEffect="scale"
                    glowIntensity="subtle"
                  >
                    <div className="relative">
                      <MemberAvatar member={coordinator} index={index + team.length} size="medium" />
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-white text-sm font-semibold mb-1 group-hover:text-blue-300 transition-colors">
                      {coordinator.name}
                    </span>
                    <span className="text-blue-400 text-xs font-medium">
                      {coordinator.role}
                    </span>
                  </GlassCard>
                </ParallaxEffect>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Member Detail Modal */}
      <MemberModal 
        member={selectedMember} 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}