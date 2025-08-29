// components/Header.jsx
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-orange-500 font-bold text-xl">♔</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">Karen Chess Club</h1>
              <p className="text-sm text-gray-600">Strategic Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Programs
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Events
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/join" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Join Club
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'}`}></span>
              <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
              <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium">About</Link>
              <Link href="/programs" className="text-gray-700 hover:text-orange-500 font-medium">Programs</Link>
              <Link href="/events" className="text-gray-700 hover:text-orange-500 font-medium">Events</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium">Contact</Link>
              <Link href="/join" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium text-center">
                Join Club
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}