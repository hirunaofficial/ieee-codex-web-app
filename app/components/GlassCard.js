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

  // Define configuration maps for different properties
  const blurMap = {
    'none': 'backdrop-blur-none',
    'light': 'backdrop-blur-sm',
    'medium': 'backdrop-blur-md',
    'strong': 'backdrop-blur-lg',
    'ultra': 'backdrop-blur-xl'
  };

  const opacityMap = {
    'transparent': 'bg-opacity-5',
    'light': 'bg-opacity-10',
    'medium': 'bg-opacity-20',
    'strong': 'bg-opacity-30',
    'solid': 'bg-opacity-40'
  };
  
  const glowMap = {
    'none': '',
    'subtle': 'blue-glow-subtle',
    'medium': 'blue-glow',
    'strong': 'blue-glow-intense'
  };
  
  const borderMap = {
    'none': 'border-0',
    'subtle': 'border border-blue-500 border-opacity-30',
    'solid': 'border-2 border-blue-500 border-opacity-40',
    'glow': 'neon-border'
  };

  const handleMouseMove = (e) => {
    if (!interactive || !isHovering) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    if (!interactive) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setIsHovering(false);
  };

  useEffect(() => {
    // Add a small initial delay to ensure the transition works on mount
    const timer = setTimeout(() => {
      const card = cardRef.current;
      if (card) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  // Calculate 3D transform style based on mouse position
  const getTransformStyle = () => {
    if (!interactive || !isHovering || hoverEffect !== '3d') return {};
    
    const card = cardRef.current;
    if (!card) return {};
    
    const { width, height } = card.getBoundingClientRect();
    const { x, y } = mousePosition;
    
    // Convert mouse position to rotation angles
    const rotateX = ((y - height / 2) / height) * -10; // -5 to 5 degrees
    const rotateY = ((x - width / 2) / width) * 10; // -5 to 5 degrees
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease'
    };
  };

  // Get hover effect class based on the selected effect
  const getHoverEffectClass = () => {
    if (!interactive) return '';
    
    switch (hoverEffect) {
      case 'none':
        return '';
      case 'lift':
        return 'hover:-translate-y-2 hover:scale-[1.02]';
      case 'scale':
        return 'hover:scale-105';
      case 'shine':
        return 'hover:bg-opacity-30 hover:border-opacity-50';
      case '3d':
        return ''; // Handled via JavaScript
      default:
        return 'hover:-translate-y-1 hover:scale-[1.01]';
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        glass-card
        ${blurMap[blurStrength] || blurMap.medium}
        ${opacityMap[opacity] || opacityMap.medium}
        ${glowMap[glowIntensity] || glowMap.medium}
        ${borderMap[borderStyle] || borderMap.subtle}
        ${getHoverEffectClass()}
        ${interactive ? 'cursor-pointer' : ''}
        rounded-xl overflow-hidden
        transition-all duration-300
        opacity-0 translate-y-4
        ${className}
      `}
      style={{
        ...(hoverEffect === '3d' ? getTransformStyle() : {})
      }}
    >
      {children}
      
      {/* Shine effect overlay */}
      {hoverEffect === 'shine' && interactive && (
        <div 
          className={`
            absolute inset-0 pointer-events-none
            bg-gradient-to-tr from-transparent via-white to-transparent
            opacity-0 group-hover:opacity-10 transition-opacity duration-700
            -translate-x-full group-hover:translate-x-full
            transform-gpu
          `}
          style={{
            transitionProperty: 'opacity, transform',
            transitionDuration: '0s, 1s'
          }}
        />
      )}
    </div>
  );
}