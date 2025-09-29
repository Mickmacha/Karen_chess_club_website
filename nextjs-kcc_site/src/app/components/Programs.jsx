"use client";
import { useState, useEffect } from 'react';

export default function Programs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('programs');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: "Youth Program",
      level: "Ages 8-16",
      duration: "Ongoing",
      icon: "♔",
      features: [
        "Age-appropriate learning methods",
        "Fun chess puzzles and games",
        "Character building through chess",
        "Youth tournament participation",
        "Parent progress updates",
        "Weekly group sessions"
      ],
      description: "Specially designed program to introduce young minds to the world of chess while building confidence and strategic thinking skills."
    },
    {
      title: "Beginner Foundation",
      level: "All Ages",
      duration: "Flexible",
      icon: "♟",
      features: [
        "Basic piece movements and rules",
        "Opening principles and development",
        "Simple tactics and combinations",
        "Endgame fundamentals",
        "Weekly practice games",
        "Personalized guidance"
      ],
      description: "Perfect for absolute beginners who want to learn chess from scratch in a supportive environment."
    },
    {
      title: "Corporate Training",
      level: "Professional",
      duration: "Customized",
      icon: "♛",
      features: [
        "Strategic thinking workshops",
        "Team building activities",
        "Leadership through chess",
        "Problem-solving skills",
        "Corporate tournaments",
        "Executive coaching"
      ],
      description: "Enhance your team's strategic thinking and decision-making abilities through the game of chess."
    }
  ];

  return (
    <section id="programs" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Chess Pieces */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl text-white/5 animate-float"
            style={{
              left: `${15 + (i * 14)}%`,
              top: `${10 + (i * 15)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${9 + i}s`
            }}
          >
            {['♔', '♛', '♜', '♝', '♞', '♟'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-orange-400 font-medium">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Choose Your{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 animate-text-shimmer">
                Chess Journey
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/50 to-amber-500/50 blur opacity-30 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From complete beginners to advanced competitors, we have the perfect program 
            to elevate your chess skills and strategic thinking.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveProgram(index)}
            >
              
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 h-full hover:bg-white/15">
                {/* Program Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-center">
                  {program.icon}
                </div>

                {/* Program Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>{program.level}</span>
                    <span>•</span>
                    <span>{program.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-orange-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/25 relative overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Active Program Detail */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {programs[activeProgram].title}
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {programs[activeProgram].description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-sm text-gray-400">Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  4.9
                </div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}