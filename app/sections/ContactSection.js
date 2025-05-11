'use client';

import { useState } from 'react';
import ParallaxEffect from '@/app/components/ParallaxEffect';
import GlassCard from '@/app/components/GlassCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-blue-900 to-darkBlue-800 text-white relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
              backgroundColor: '#3b82f6',
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Get In Touch</h2>
          <p className="text-lg text-gray-300">We would love to hear from you. Fill out the form below to reach us.</p>
        </div>

        <ParallaxEffect speed={0.05} direction="vertical">
          <GlassCard className="max-w-lg mx-auto p-8 rounded-xl bg-opacity-60 backdrop-blur-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg bg-darkBlue-700 bg-opacity-30 focus:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg bg-darkBlue-700 bg-opacity-30 focus:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full p-3 h-32 rounded-lg bg-darkBlue-700 bg-opacity-30 focus:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-bold transition-colors duration-300 ${
                  isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </GlassCard>
        </ParallaxEffect>
      </div>
    </section>
  );
}