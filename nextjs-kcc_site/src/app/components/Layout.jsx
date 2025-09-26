"use client";
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Global Background Elements - Fixed positioning to prevent jarring */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orbs that follow mouse */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 blur-3xl transition-all duration-[2000ms] ease-out"
          style={{
            left: `${mousePosition.x * 0.3}%`,
            top: `${mousePosition.y * 0.3}%`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-3xl transition-all duration-[2500ms] ease-out"
          style={{
            right: `${(100 - mousePosition.x) * 0.25}%`,
            bottom: `${(100 - mousePosition.y) * 0.25}%`,
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-emerald-500/6 to-teal-500/6 blur-3xl transition-all duration-[3000ms] ease-out"
          style={{
            left: `${mousePosition.x * 0.4 + 30}%`,
            bottom: `${(100 - mousePosition.y) * 0.3 + 20}%`,
          }}
        />
        
        {/* Static background elements for depth */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-60 h-60 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-slate-700/10 to-slate-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating chess pieces for global consistency */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl text-white/5 animate-float select-none"
            style={{
              left: `${(i * 8.33) % 100}%`,
              top: `${(i * 12) % 80 + 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + (i % 5)}s`
            }}
          >
            {['♔', '♛', '♜', '♝', '♞', '♟'][i % 6]}
          </div>
        ))}
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/20"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="254712528497" 
        message="Hello, I would like to know more about Karen Chess Club programs." 
      />

      {/* Footer */}
      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-30px) rotate(5deg); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-10px) rotate(-5deg); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-20px) rotate(3deg); 
            opacity: 0.6;
          }
        }
        
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: text-shimmer 3s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        /* Smooth transitions for all sections */
        section {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #f59e0b);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ea580c, #d97706);
        }
      `}</style>
    </div>
  );
}