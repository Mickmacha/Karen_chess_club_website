"use client"
import Link from "next/link"
import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo Section - Matching Header Style */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3 group transform hover:scale-105 transition-all duration-300"
          >
            {/* Logo Container matching header */}
            <div className="relative w-10 h-10 rounded-lg shadow-md group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
              <Image
                src="/logo-64.png"
                alt="Karen Chess Club Logo"
                width={64}
                height={64}
                className="object-contain transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
              />
            </div>
            
            {/* Text matching header */}
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                Karen Chess Club
              </h3>
              <p className="text-gray-400 text-xs">
                Strategic Excellence
              </p>
            </div>
          </button>

          {/* Quick Navigation - Matching Header Style */}
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('programs')}
              className="relative text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">Programs</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <Link 
              href="/blog" 
              className="relative text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">Blog</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </nav>

          {/* CTA Button - Matching Header Style */}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 group overflow-hidden"
          >
            <span className="relative z-10">Join Club</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-gray-800/50 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-gray-400 text-sm">
            © 2025 Karen Chess Club. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link 
              href="#" 
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
            >
              Privacy
            </Link>
            <Link 
              href="#" 
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}