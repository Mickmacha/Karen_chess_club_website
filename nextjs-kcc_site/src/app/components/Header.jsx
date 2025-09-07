"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
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
        ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3 group transform hover:scale-105 transition-all duration-300"
          >
            {/* Logo Container with Multiple Sizes */}
            <div className="relative">
              {/* Desktop Logo */}
              <div className="hidden sm:block relative w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/25 transition-all duration-300 overflow-hidden">
                <Image
                  src="/logo-256.png" // Your optimized logo
                  alt="Karen Chess Club Logo"
                  width={256}
                  height={256}
                  className="object-contain transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              
              {/* Mobile Logo */}
              <div className="block sm:hidden relative w-10 h-10 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                <Image
                  src="/logo-64.png" // Smaller version for mobile
                  alt="Karen Chess Club Logo"
                  width={64}
                  height={64}
                  className="object-contain transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                  priority
                />
              </div>
            </div>
            
            {/* Text */}
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              } group-hover:text-orange-500`}>
                Karen Chess Club
              </h1>
              <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Strategic Excellence
              </p>
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
            
            <Link 
              href="/blog" 
              className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg group relative ${
                scrolled 
                  ? 'text-gray-700 hover:text-orange-500' 
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              <span className="relative z-10">Blog</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
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

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              } ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              } ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              } ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-gray-200/20 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
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
              
              <Link 
                href="/blog" 
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-orange-500 hover:bg-gray-100/50' 
                    : 'text-gray-300 hover:text-orange-400 hover:bg-white/10'
                }`}
              >
                Blog
              </Link>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-medium text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Join Club
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}