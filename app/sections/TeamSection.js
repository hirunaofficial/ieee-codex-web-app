'use client'

import { useState, useEffect } from 'react';
import { Linkedin, User, Users } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  
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
      bio: "Leading IEEE CodeX initiatives to build a thriving tech community in Sri Lanka."
    },
    { 
      name: "Nethmi Fernando", 
      position: "Secretary",
      image: "/images/team/Nethmi Fernando.jpg",
      social: {
        linkedin: "https://linkedin.com/in/nethmi-fernando"
      },
      bio: "Coordinating all administrative aspects and ensuring smooth operations of our initiatives."
    },
    { 
      name: "Dineth Palliyaguru", 
      position: "Public Visibility Vice Chair",
      image: "/images/team/DinethPalliyaguru.jpg",
      social: {
        linkedin: "https://linkedin.com/in/dineth-palliyaguru"
      },
      bio: "Managing our public presence and outreach strategies to promote competitive programming."
    },
    { 
      name: "Mahima Bashitha", 
      position: "Program and Delivery Vice Chair",
      image: "/images/team/Mahima Bhashitha.jpg",
      social: {
        linkedin: "https://linkedin.com/in/mahima-bashitha"
      },
      bio: "Overseeing all programming events and competitions for maximum participant value."
    },
    { 
      name: "Ishara Dias", 
      position: "Finance and Partnerships Vice Chair",
      image: "/images/team/Ishara_Dias.jpg",
      social: {
        linkedin: "https://linkedin.com/in/ishara-dias"
      },
      bio: "Managing financial resources and developing strategic partnerships with industry leaders."
    },
  ];

  // Coordinators with their corresponding images
  const coordinators = [
    { name: "Hiruna Gallage", image: "/images/team/Hiruna_Gallage.jpg" },
    { name: "Chamika Pathirana", image: "/images/team/Chamika Lakshan.png" },
    { name: "Adeepa Shamal", image: "/images/team/adeepa wickramasinghe.jpg" },
    { name: "Yashodha De Silva", image: "/images/team/Yashodha De Silva.jpg" },
    { name: "Sasanka Savindi", image: "/images/team/SasankaWakista.jpg" },
    { name: "Madhawa Aloka", image: "/images/team/Madhawa_aloka.jpg" },
    { name: "Menura Basitha", image: "/images/team/Menura Andrahennedi (2).jpg" },
    { name: "Senaya Bandara", image: "/images/team/Senaya Bandara.jpg" }
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
  const MemberAvatar = ({ member, index, size = "large" }) => {
    const sizeClasses = {
      large: "w-24 h-24",
      small: "w-10 h-10"
    };

    const textSizeClasses = {
      large: "text-xl",
      small: "text-xs"
    };

    if (imageErrors[member.name] || !member.image) {
      // Fallback to gradient avatar with initials
      return (
        <div className={`${sizeClasses[size]} bg-gradient-to-br ${getGradient(index)} rounded-full flex items-center justify-center mx-auto ${size === 'large' ? 'mb-6 blue-glow-subtle' : 'mb-2'}`}>
          <span className={`text-white font-bold ${textSizeClasses[size]}`}>
            {getInitials(member.name)}
          </span>
        </div>
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden mx-auto ${size === 'large' ? 'mb-6 blue-glow-subtle' : 'mb-2'} bg-gradient-to-br ${getGradient(index)}`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={() => handleImageError(member.name)}
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section id="team" className="py-24 blue-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      {/* Decorative silhouettes */}
      <div className="absolute top-40 left-10 text-blue-600 opacity-5">
        <User className="w-32 h-32" />
      </div>
      <div className="absolute bottom-40 right-10 text-blue-600 opacity-5">
        <Users className="w-32 h-32" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-glow-text">Our Team</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Meet the dedicated individuals behind IEEE CodeX Sri Lanka
          </p>
        </div>

        {/* Executive Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  className="rounded-xl overflow-hidden card-3d"
                  hoverEffect="3d"
                  glowIntensity="medium"
                >
                  <div className="p-6 sm:p-8 relative">
                    {/* Decorative background glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
                    
                    {/* Avatar with image or gradient fallback */}
                    <MemberAvatar member={member} index={index} size="large" />
                    
                    <h3 className="text-xl font-bold text-center mb-1 text-white">{member.name}</h3>
                    <p className="text-blue-300 text-center text-sm mb-4">{member.position}</p>
                    
                    {/* Bio */}
                    <p className="text-gray-300 text-sm text-center mb-5 italic">"{member.bio}"</p>
                    
                    {/* LinkedIn Link Only */}
                    <div className="flex justify-center">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-darkBlue-700 bg-opacity-40 rounded-full text-blue-400 hover:bg-blue-900 hover:text-white transition-all hover:scale-110"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ParallaxEffect>
            </div>
          ))}
        </div>

        {/* Coordinators Section - Simplified */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <GlassCard className="p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-center mb-10 text-blue-300">Our Coordinators</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {coordinators.map((coordinator, index) => (
                <ParallaxEffect key={index} speed={0.02} direction="scale">
                  <GlassCard 
                    className="px-4 py-3 rounded-lg text-center h-full flex flex-col items-center justify-center card-3d"
                    hoverEffect="scale"
                    glowIntensity="subtle"
                  >
                    <MemberAvatar member={coordinator} index={index + team.length} size="small" />
                    <span className="text-gray-300 text-sm">{coordinator.name}</span>
                  </GlassCard>
                </ParallaxEffect>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}