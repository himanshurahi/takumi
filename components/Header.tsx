'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiHome, HiMenu, HiPhotograph, HiUser, HiMail } from 'react-icons/hi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', icon: HiHome },
    { href: '/menu', label: 'Menu', icon: HiMenu },
    { href: '/gallery', label: 'Gallery', icon: HiPhotograph },
    { href: '/about', label: 'About', icon: HiUser },
    { href: '/contact', label: 'Contact', icon: HiMail },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100/50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span 
                className="text-2xl font-protrakt font-bold bg-gradient-to-r from-takumi-red to-red-600 bg-clip-text text-transparent"
                style={{ fontFamily: '"Protrakt Variable", sans-serif', fontWeight: 700 }}
              >
                Takumi
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-takumi-red to-red-600 group-hover:w-full transition-all duration-300" />
            </div>
            <span className="text-sm text-gray-600 hidden sm:inline font-medium">
              Asian Kitchen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-takumi-black hover:text-takumi-red transition-colors duration-300 font-medium rounded-lg group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-takumi-red/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 bg-takumi-black transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-takumi-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-takumi-black transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            {/* Decorative top border */}
            <div className="h-px bg-gradient-to-r from-transparent via-takumi-red/30 to-transparent mb-6"></div>
            
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-white to-takumi-beige/30 border border-gray-100 hover:border-takumi-red/30 hover:shadow-md transition-all duration-300 active:scale-[0.98] mobile-menu-item"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-takumi-red/10 to-red-500/10 flex items-center justify-center group-hover:from-takumi-red/20 group-hover:to-red-500/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-takumi-red group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Label */}
                    <span className="flex-1 text-takumi-black font-medium text-base group-hover:text-takumi-red transition-colors duration-300">
                      {link.label}
                    </span>
                    
                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-takumi-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-takumi-red/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </Link>
                )
              })}
            </div>
            
            {/* Decorative bottom border */}
            <div className="h-px bg-gradient-to-r from-transparent via-takumi-red/30 to-transparent mt-6"></div>
            
            {/* Quick action button */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/menu"
                className="block w-full px-4 py-3 rounded-xl bg-gradient-to-r from-takumi-red to-red-600 text-white font-semibold text-center shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

