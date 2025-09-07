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
      title: "Beginner Classes",
      description: "Learn the fundamentals of chess from basic moves to opening principles.",
      icon: "♟",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconBg: "from-blue-500 to-indigo-500",
      features: ["Basic rules and moves", "Opening strategies", "Tactical patterns", "Weekly sessions"],
      schedule: "Mondays & Wednesdays, 6:00 PM",
      level: "Beginner",
      duration: "8 weeks"
    },

    {
      title: "Youth Program", 
      description: "Specially designed chess education for young minds aged 6-16.",
      icon: "♝",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "from-green-500 to-emerald-500",
      features: ["Age-appropriate teaching", "Fun learning games", "Youth tournaments", "Skill development"],
      schedule: "Saturdays, 10:00 AM",
      level: "Youth (6-16)",
      duration: "Ongoing"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="programs"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 mb-4">
            <span className="text-orange-600 font-medium">Our Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Choose Your Chess Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're just starting your chess journey or looking to master advanced strategies, 
            we have the perfect program tailored for your skill level and goals.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveProgram(index)}
            >
              {/* Card Background with Gradient Border */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent ${program.bgColor} group-hover:bg-white`}>
                  
                  {/* Floating Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <span className="text-white text-3xl">{program.icon}</span>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Program Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 transition-all duration-300">
                        {program.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${program.color} text-white`}>
                        {program.level}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                    
                    {/* Quick Info */}
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {program.schedule}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Duration: {program.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-black mb-3">What You'll Learn:</h4>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Button */}
                  <button className={`w-full bg-gradient-to-r ${program.color} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl relative overflow-hidden`}>
                    <span className="relative z-10 flex items-center justify-center">
                      Enroll Now
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                  
                  {/* Popular Badge */}
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                        Most Popular
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-slate-900 to-black rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-4xl animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${8 + Math.random() * 4}s`
                  }}
                >
                  {['♔', '♛', '♜', '♝', '♞', '♟'][Math.floor(Math.random() * 6)]}
                </div>
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Not sure which program is right for you?</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our chess instructors to find the perfect program that matches your skill level and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">
                  Free Consultation
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-2deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}