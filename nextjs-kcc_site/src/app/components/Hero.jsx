"use client";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const chessWords = ['Strategy', 'Tactics', 'Victory', 'Mastery', 'Excellence'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % chessWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Chess Pieces */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-6xl text-white/5 animate-float`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            {['♔', '♛', '♜', '♝', '♞', '♟'][i]}
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x/3}%`,
            top: `${mousePosition.y/3}%`,
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: `${mousePosition.x/4}%`,
            bottom: `${mousePosition.y/4}%`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Floating Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-bounce-subtle">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">50+ Active Players Online</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master the Game of{" "}
              <span className="relative inline-block">
                <span 
                  key={currentWordIndex}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 animate-text-shimmer"
                >
                  {chessWords[currentWordIndex]}
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/50 to-amber-500/50 blur opacity-30 animate-pulse"></div>
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Join Karen Chess Club and elevate your chess skills in a vibrant community. 
              From beginners to masters, we provide the perfect environment for strategic growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 relative overflow-hidden"
              >
                <span className="relative z-10">Join Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Discover More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">5</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">12</div>
                <div className="text-sm text-gray-400">Tournaments</div>
              </div>
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Interactive Chess Board */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-6 shadow-2xl">
                  <div className="grid grid-cols-8 gap-1 transform hover:scale-[1.02] transition-transform duration-500">
                    {Array.from({ length: 64 }, (_, i) => {
                      const isEven = Math.floor(i / 8) % 2 === i % 2;
                      return (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm transition-all duration-300 hover:scale-110 cursor-pointer ${
                            isEven ? 'bg-amber-100 hover:bg-amber-200' : 'bg-amber-800 hover:bg-amber-700'
                          }`}
                          style={{
                            animationDelay: `${i * 10}ms`
                          }}
                        >
                          {/* Add some pieces for visual interest */}
                          {i === 0 && <div className="text-amber-800 text-center leading-none text-lg">♜</div>}
                          {i === 7 && <div className="text-amber-800 text-center leading-none text-lg">♜</div>}
                          {i === 56 && <div className="text-amber-100 text-center leading-none text-lg">♖</div>}
                          {i === 63 && <div className="text-amber-100 text-center leading-none text-lg">♖</div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Floating Action Indicators */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

    </section>
  );
}