"use client";
import { useState, useEffect } from 'react';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
    <section id="about" className="relative py-32 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Chess Pieces */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl text-white/5 animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 10)}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${10 + i}s`
            }}
          >
            {['♔', '♛', '♜', '♝', '♞', '♟', '♗', '♘'][i]}
          </div>
        ))}
        
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x/4}%`,
            top: `${mousePosition.y/4}%`,
          }}
        />
        <div 
          className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: `${mousePosition.x/5}%`,
            bottom: `${mousePosition.y/5}%`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-bounce-subtle">
              <span className="text-2xl mr-2">♔</span>
              <span className="text-sm font-medium">Established Since 2019</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              About{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 animate-text-shimmer">
                  Karen Chess Club
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/50 to-amber-500/50 blur opacity-30 animate-pulse"></div>
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded with a passion for the timeless game of chess, Karen Chess Club has been 
                fostering strategic thinking and building lasting friendships since our inception. 
                We believe chess is more than a game—it's a pathway to mental growth and community connection.
              </p>
              <p>
                Our club welcomes players of all skill levels, from curious beginners taking their 
                first moves to seasoned players seeking competitive challenges. Together, we create 
                an environment where learning thrives and friendships are forged over the checkered board.
              </p>
            </div>

            {/* Enhanced Stats with Animation */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              {[
                { number: "50+", label: "Active Members", delay: "0s" },
                { number: "5", label: "Years Running", delay: "0.2s" },
                { number: "12", label: "Tournaments Won", delay: "0.4s" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="relative">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Mission Card with Advanced Styling */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl p-10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                {/* Floating Chess Piece */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  ♛
                </div>

                <div className="text-center">
                  <div className="text-8xl mb-6 animate-float filter drop-shadow-lg">♛</div>
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To cultivate strategic thinking, promote the art of chess, and build a 
                    supportive community where every player can reach their full potential.
                  </p>
                  
                  {/* Decorative Chess Pattern */}
                  <div className="grid grid-cols-4 gap-2 mt-8 opacity-30">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded transition-all duration-300 hover:scale-110 ${
                          Math.floor(i / 4) % 2 === i % 2 ? 'bg-white/5' : 'bg-orange-500/10'
                        }`}
                        style={{
                          animationDelay: `${i * 50}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>

            {/* Additional Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h4 className="font-semibold text-white mb-1">Competitive Play</h4>
                <p className="text-gray-400 text-sm">Regular tournaments and rated games</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📚</div>
                <h4 className="font-semibold text-white mb-1">Learning Hub</h4>
                <p className="text-gray-400 text-sm">Coaching and skill development</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}