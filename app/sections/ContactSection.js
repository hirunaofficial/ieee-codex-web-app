'use client';

import { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Check, AlertCircle, Loader, Github, Linkedin, Twitter } from 'lucide-react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error'
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  
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
    
    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({...formErrors, [name]: ''});
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-400" />,
      label: 'Email',
      value: 'contact@codex.ieee.lk',
      link: 'mailto:contact@codex.ieee.lk'
    },
    {
      icon: <Phone className="h-5 w-5 text-blue-400" />,
      label: 'Phone',
      value: '+94 117 521 232',
      link: 'tel:+94117521232'
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-400" />,
      label: 'Location',
      value: 'IEEE Sri Lanka Section, Colombo',
      link: 'https://maps.app.goo.gl/your-location-link'
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/ieee-codex-sl', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/ieee-codex-sl', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/ieeecodexsl', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-darkBlue-900 via-blue-900 to-darkBlue-800 text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
      
      {/* Animated particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
              backgroundColor: '#3b82f6',
              animation: `floatUp ${15 + Math.random() * 15}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">CONNECT</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-glow-text">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            We would love to hear from you. Reach out with any questions about our competitions or training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact information column */}
          <div className={`md:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <GlassCard className="p-6 sm:p-8 rounded-xl h-full flex flex-col">
              <h3 className="text-xl font-bold text-blue-300 mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-start hover:text-blue-300 transition-colors group"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="p-2 bg-blue-900 bg-opacity-30 rounded-full mr-4 group-hover:bg-blue-800 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">{info.label}</h4>
                      <p className="text-white group-hover:text-blue-300 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Social links */}
              <div className="mt-auto">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                      className="p-2 bg-blue-900 bg-opacity-30 rounded-full text-blue-300 hover:bg-blue-800 hover:text-white transition-all hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Contact form column */}
          <div className={`md:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ParallaxEffect speed={0.03} direction="vertical">
              <GlassCard className="p-6 sm:p-8 rounded-xl bg-opacity-80 backdrop-blur-lg relative">
                {/* Success message */}
                {formStatus === 'success' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-darkBlue-900 bg-opacity-95 rounded-xl z-10 animate-fadeIn">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-300 mb-2">Message Sent!</h3>
                      <p className="text-gray-300 mb-4">Thank you for reaching out. We'll get back to you soon.</p>
                      <button 
                        onClick={() => setFormStatus(null)} 
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-sm font-medium text-blue-300 mb-1.5" htmlFor="name">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 ${
                        focusedField === 'name' ? 'scale-105 origin-left' : ''
                      }`}>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          className={`w-full p-3 rounded-lg bg-darkBlue-800 bg-opacity-50 border transition-colors focus:outline-none focus:ring-2 ${
                            formErrors.name 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-blue-800 focus:border-blue-500 focus:ring-blue-500'
                          }`}
                          placeholder="Your name"
                          aria-describedby={formErrors.name ? "name-error" : undefined}
                        />
                      </div>
                      {formErrors.name && (
                        <p id="name-error" className="text-red-400 text-xs mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 inline mr-1" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-blue-300 mb-1.5" htmlFor="email">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 ${
                        focusedField === 'email' ? 'scale-105 origin-left' : ''
                      }`}>
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          className={`w-full p-3 rounded-lg bg-darkBlue-800 bg-opacity-50 border transition-colors focus:outline-none focus:ring-2 ${
                            formErrors.email 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-blue-800 focus:border-blue-500 focus:ring-blue-500'
                          }`}
                          placeholder="your.email@example.com"
                          aria-describedby={formErrors.email ? "email-error" : undefined}
                        />
                      </div>
                      {formErrors.email && (
                        <p id="email-error" className="text-red-400 text-xs mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 inline mr-1" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-300 mb-1.5" htmlFor="subject">
                      Subject
                    </label>
                    <div className={`relative transition-all duration-300 ${
                      focusedField === 'subject' ? 'scale-105 origin-left' : ''
                    }`}>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        className="w-full p-3 rounded-lg bg-darkBlue-800 bg-opacity-50 border border-blue-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-blue-300 mb-1.5" htmlFor="message">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <div className={`relative transition-all duration-300 ${
                      focusedField === 'message' ? 'scale-105 origin-left' : ''
                    }`}>
                      <textarea 
                        id="message"
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        className={`w-full p-3 h-32 rounded-lg bg-darkBlue-800 bg-opacity-50 border transition-colors focus:outline-none focus:ring-2 ${
                          formErrors.message 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-blue-800 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                        placeholder="Your message here..."
                        aria-describedby={formErrors.message ? "message-error" : undefined}
                      ></textarea>
                    </div>
                    {formErrors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 inline mr-1" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Form error message */}
                  {formStatus === 'error' && (
                    <div className="p-3 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg flex items-center text-red-300">
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>Something went wrong. Please try again later or contact us directly via email.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-3.5 px-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center ${
                      formStatus === 'submitting' 
                        ? "bg-blue-500 cursor-not-allowed" 
                        : "bg-blue-600 hover:bg-blue-500 hover:scale-102"
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </GlassCard>
            </ParallaxEffect>
          </div>
        </div>
        
        {/* Optional newsletter signup or call to action */}
        <div className={`max-w-3xl mx-auto mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-blue-300 mb-2">Want to stay updated?</p>
          <h3 className="text-xl font-bold text-white mb-4">Join our newsletter for upcoming events and competitions</h3>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              className="bg-darkBlue-800 bg-opacity-50 border border-blue-800 p-3 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:rounded-l-lg mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              placeholder="Your email address"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-l-lg sm:rounded-l-none rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}