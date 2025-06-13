'use client'

import { useRef, useState, useEffect } from 'react';

export default function GlassCard({ 
  children, 
  className = '', 
  hoverEffect = 'lift',
  glowIntensity = 'medium',
  blurStrength = 'medium',
  borderStyle = 'subtle',
  opacity = 'medium',
  interactive = true,
  onClick = null
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // Detect mobile devices and screen size
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 'ontouchstart' in window;
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define configuration maps for different properties
  const blurMap = {
    'none': 'backdrop-blur-none',
    'light': isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-sm',
    'medium': isMobile ? 'backdrop-blur-md' : 'backdrop-blur-md',
    'strong': isMobile ? 'backdrop-blur-lg' : 'backdrop-blur-lg',
    'ultra': isMobile ? 'backdrop-blur-xl' : 'backdrop-blur-xl'
  };

  const opacityMap = {
    'transparent': isMobile ? 'bg-opacity-10' : 'bg-opacity-5',
    'light': isMobile ? 'bg-opacity-15' : 'bg-opacity-10',
    'medium': isMobile ? 'bg-opacity-25' : 'bg-opacity-20',
    'strong': isMobile ? 'bg-opacity-35' : 'bg-opacity-30',
    'solid': isMobile ? 'bg-opacity-45' : 'bg-opacity-40'
  };
  
  const glowMap = {
    'none': '',
    'subtle': isMobile ? 'mobile-glow-subtle' : 'blue-glow-subtle',
    'medium': isMobile ? 'mobile-glow' : 'blue-glow',
    'strong': isMobile ? 'mobile-glow-intense' : 'blue-glow-intense'
  };
  
  const borderMap = {
    'none': 'border-0',
    'subtle': `border ${isMobile ? 'border-blue-400' : 'border-blue-500'} border-opacity-30`,
    'solid': `border-2 ${isMobile ? 'border-blue-400' : 'border-blue-500'} border-opacity-40`,
    'glow': isMobile ? 'mobile-neon-border' : 'neon-border'
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    if (!interactive || !isMobile) return;
    setIsTouched(true);
    setIsHovering(true);
    
    // Prevent default to avoid double-tap zoom on mobile
    if (onClick) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!interactive || !isMobile) return;
    setTimeout(() => {
      setIsTouched(false);
      setIsHovering(false);
    }, 150); // Small delay to show the effect
  };

  const handleMouseMove = (e) => {
    if (!interactive || !isHovering || isMobile) return;
    
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    if (!interactive || isMobile) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!interactive || isMobile) return;
    setIsHovering(false);
  };

  const handleClick = (e) => {
    if (onClick) {
      // Add haptic feedback on mobile if available
      if (isMobile && navigator.vibrate) {
        navigator.vibrate(50);
      }
      onClick(e);
    }
  };

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate 3D transform style based on mouse position (desktop only)
  const getTransformStyle = () => {
    if (!interactive || !isHovering || hoverEffect !== '3d' || isMobile) return {};
    
    const card = cardRef.current;
    if (!card) return {};
    
    const { width, height } = card.getBoundingClientRect();
    const { x, y } = mousePosition;
    
    // Convert mouse position to rotation angles (reduced for better performance)
    const rotateX = ((y - height / 2) / height) * -8;
    const rotateY = ((x - width / 2) / width) * 8;
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.15s ease-out'
    };
  };

  // Get hover effect class based on the selected effect and device
  const getHoverEffectClass = () => {
    if (!interactive) return '';
    
    // Simplified effects for mobile
    if (isMobile) {
      switch (hoverEffect) {
        case 'none':
          return '';
        case 'lift':
          return 'active:scale-[0.98] transition-transform duration-150';
        case 'scale':
          return 'active:scale-[0.95] transition-transform duration-150';
        case 'shine':
          return 'active:bg-opacity-40 transition-all duration-150';
        case '3d':
          return 'active:scale-[0.98] transition-transform duration-150';
        default:
          return 'active:scale-[0.98] transition-transform duration-150';
      }
    }
    
    // Desktop effects
    switch (hoverEffect) {
      case 'none':
        return '';
      case 'lift':
        return 'hover:-translate-y-2 hover:scale-[1.02] transition-transform duration-300';
      case 'scale':
        return 'hover:scale-105 transition-transform duration-300';
      case 'shine':
        return 'hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300';
      case '3d':
        return 'transition-transform duration-300';
      default:
        return 'hover:-translate-y-1 hover:scale-[1.01] transition-transform duration-300';
    }
  };

  // Get entrance animation classes
  const getEntranceClasses = () => {
    return isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-4';
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`
        glass-card
        bg-darkBlue-900
        ${blurMap[blurStrength] || blurMap.medium}
        ${opacityMap[opacity] || opacityMap.medium}
        ${glowMap[glowIntensity] || glowMap.medium}
        ${borderMap[borderStyle] || borderMap.subtle}
        ${getHoverEffectClass()}
        ${interactive ? (isMobile ? 'cursor-pointer touch-manipulation' : 'cursor-pointer') : ''}
        ${isTouched ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}
        rounded-xl overflow-hidden
        transition-all duration-500 ease-out
        ${getEntranceClasses()}
        ${className}
      `}
      style={{
        ...(hoverEffect === '3d' ? getTransformStyle() : {}),
        // Improve performance on mobile
        willChange: isMobile ? 'transform' : 'auto',
        // Better touch target size
        minHeight: isMobile && interactive ? '44px' : 'auto'
      }}
    >
      {children}
      
      {/* Enhanced shine effect for mobile */}
      {hoverEffect === 'shine' && interactive && (
        <div 
          className={`
            absolute inset-0 pointer-events-none
            bg-gradient-to-tr from-transparent via-white to-transparent
            ${isTouched || isHovering ? 'opacity-10' : 'opacity-0'}
            ${isTouched || isHovering ? 'translate-x-full' : '-translate-x-full'}
            transition-all duration-700 ease-out
            transform-gpu
          `}
        />
      )}

      {/* Mobile-specific ripple effect */}
      {isMobile && interactive && isTouched && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            animation: 'mobileRipple 0.6s ease-out'
          }}
        />
      )}

      {/* Global styles for mobile enhancements */}
      <style jsx global>{`
        @keyframes mobileRipple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .mobile-glow-subtle {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
        }
        
        .mobile-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
        
        .mobile-glow-intense {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        
        .mobile-neon-border {
          border: 1px solid rgba(59, 130, 246, 0.6);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
        
        /* Smooth scrolling for mobile */
        @media (max-width: 768px) {
          .glass-card {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
          
          /* Improve performance on mobile */
          .glass-card {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .glass-card {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}