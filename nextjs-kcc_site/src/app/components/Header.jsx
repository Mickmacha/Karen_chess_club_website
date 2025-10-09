"use client"
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'programs', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - Redesigned for Clarity */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3 sm:gap-4 group"
          >
            {/* Logo Icon - High Quality */}
            <div className={`relative flex-shrink-0 transition-all duration-300 ${
              scrolled 
                ? 'w-12 h-12 sm:w-14 sm:h-14' 
                : 'w-14 h-14 sm:w-16 sm:h-16'
            } group-hover:scale-110`}>
              <img
                src="/Logo.svg"
                alt="Karen Chess Club"
                className="w-full h-full object-contain drop-shadow-lg"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col justify-center">
              <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-all duration-300 ${
                scrolled 
                  ? 'text-slate-900' 
                  : 'text-white'
              } group-hover:text-orange-500`}>
                Karen Chess Club
              </span>
              <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-slate-600' : 'text-slate-300'
              }`}>
                Strategic Excellence
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-lg group ${
                  activeSection === item.id
                    ? scrolled 
                      ? 'text-orange-500' 
                      : 'text-orange-400'
                    : scrolled
                      ? 'text-gray-700 hover:text-orange-500'
                      : 'text-gray-300 hover:text-orange-400'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-orange-500/10 rounded-lg animate-pulse"></div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
            
            <a 
              href="/blog" 
              className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg group relative ${
                scrolled 
                  ? 'text-gray-700 hover:text-orange-500' 
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              <span className="relative z-10">Blog</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 group overflow-hidden"
            >
              <span className="relative z-10">Join Club</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                scrolled ? 'bg-slate-900' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                scrolled ? 'bg-slate-900' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                scrolled ? 'bg-slate-900' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className={`pt-4 space-y-2 border-t ${
            scrolled ? 'border-gray-200/20' : 'border-white/20'
          }`}>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? scrolled 
                      ? 'text-orange-500 bg-orange-500/10' 
                      : 'text-orange-400 bg-orange-400/10'
                    : scrolled
                      ? 'text-gray-700 hover:text-orange-500 hover:bg-gray-100/50'
                      : 'text-gray-300 hover:text-orange-400 hover:bg-white/10'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.label}
              </button>
            ))}
            
            <a 
              href="/blog" 
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                scrolled 
                  ? 'text-gray-700 hover:text-orange-500 hover:bg-gray-100/50' 
                  : 'text-gray-300 hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              Blog
            </a>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-medium text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Join Club
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}