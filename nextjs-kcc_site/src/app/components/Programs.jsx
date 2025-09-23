"use client";
import { useState, useRef, useEffect } from 'react';

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: "Beginner's Circle",
      description: "Welcome to chess! Join our friendly community where everyone starts their chess journey together.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='100%25' stop-color='%23d97706'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg1)'/%3E%3Cg transform='translate(200,150)'%3E%3Ctext x='0' y='0' text-anchor='middle' dominant-baseline='central' font-size='120' fill='white' opacity='0.9'%3E♟%3C/text%3E%3C/g%3E%3C/svg%3E",
      features: ["Learn basic rules & moves", "Friendly group sessions", "Practice games", "No pressure environment"],
      schedule: "Mondays & Wednesdays",
      time: "6:00 PM - 7:30 PM",
      level: "Beginner",
      duration: "8 weeks",
      price: "$80/month",
      memberCount: "15+ members"
    },
    {
      title: "Young Champions",
      description: "Where young minds discover the magic of chess through fun games, puzzles, and friendly competitions.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='100%25' stop-color='%234338ca'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg2)'/%3E%3Cg transform='translate(200,150)'%3E%3Ctext x='0' y='0' text-anchor='middle' dominant-baseline='central' font-size='120' fill='white' opacity='0.9'%3E♝%3C/text%3E%3C/g%3E%3C/svg%3E",
      features: ["Interactive learning games", "Chess puzzles & activities", "Youth tournaments", "Character building"],
      schedule: "Saturdays",
      time: "10:00 AM - 12:00 PM",
      level: "Ages 6-16",
      duration: "Ongoing",
      price: "$60/month",
      memberCount: "25+ young players",
      popular: true
    },
    {
      title: "Team Strategy Sessions",
      description: "Bring your team together! Learn strategic thinking and decision-making through the timeless game of chess.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2310b981'/%3E%3Cstop offset='100%25' stop-color='%23059669'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg3)'/%3E%3Cg transform='translate(200,150)'%3E%3Ctext x='0' y='0' text-anchor='middle' dominant-baseline='central' font-size='120' fill='white' opacity='0.9'%3E♛%3C/text%3E%3C/g%3E%3C/svg%3E",
      features: ["Team building activities", "Strategic thinking workshops", "Problem-solving sessions", "Leadership development"],
      schedule: "Flexible",
      time: "Custom scheduling",
      level: "Groups & Teams",
      duration: "Half-day workshops",
      price: "Contact us",
      memberCount: "5+ companies served"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="programs"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M50 15l-8 8h16l-8-8zM15 50l8-8v16l-8-8zM85 50l-8-8v16l8-8zM50 85l8-8H42l8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-orange-400 font-medium">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Chess 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              {" "}Community
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From first moves to mastery, find your place in our welcoming chess family. 
            Every player has a story, and yours starts here.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveProgram(index)}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Member Count Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    👥 {program.memberCount}
                  </div>
                  
                  {/* Level Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 line-height-relaxed">
                    {program.description}
                  </p>
                  
                  {/* Schedule Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                      </svg>
                      {program.schedule} • {program.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.duration} • {program.price}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start text-gray-300 text-sm"
                        >
                          <svg className="w-3 h-3 mt-1 mr-2 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center">
                      {program.title === 'Team Strategy Sessions' ? 'Get Quote' : 'Join Program'}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA Section */}
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/30">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                New to chess? 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  {" "}We're here to help! 
                </span>
                ♟️
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Schedule a free meet & greet with our friendly community. We'll help you find the perfect program 
                and answer any questions about starting your chess journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  💬 Free Meet & Greet
                </button>
                <button className="border-2 border-slate-600 hover:border-slate-500 text-white hover:bg-slate-700/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  📅 View Our Schedule
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <p className="text-sm text-gray-400 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  All skill levels welcome • Friendly community • No intimidation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}