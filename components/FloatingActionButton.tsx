'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GiShoppingCart } from 'react-icons/gi'
import { HiPhone, HiMenu } from 'react-icons/hi'
import RippleButton from './RippleButton'

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show button after scrolling past hero section
      setIsScrolled(scrollPosition > windowHeight * 0.5)
      setIsVisible(scrollPosition > windowHeight * 0.3)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Quick Action Buttons - Appear on scroll */}
      {isScrolled && (
        <div className={`flex flex-col gap-3 transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {/* Menu Button */}
          <RippleButton
            href="/menu"
            variant="secondary"
            className="group relative flex items-center justify-center w-14 h-14 bg-white text-takumi-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-gray-100 !px-0 !py-0"
            onClick={() => setIsExpanded(false)}
          >
            <HiMenu className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90 relative z-10" />
            <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block z-20">
              <div className="bg-takumi-black text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-xl">
                Menu
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-takumi-black"></div>
              </div>
            </div>
          </RippleButton>
          
          {/* Call Button */}
          <RippleButton
            href="tel:9996939329"
            variant="secondary"
            className="group relative flex items-center justify-center w-14 h-14 bg-white text-takumi-red rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-gray-100 !px-0 !py-0"
            onClick={() => setIsExpanded(false)}
          >
            <HiPhone className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 relative z-10" />
            <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block z-20">
              <div className="bg-takumi-black text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-xl">
                Call Us
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-takumi-black"></div>
              </div>
            </div>
          </RippleButton>
        </div>
      )}
      
      {/* Main Order Button */}
      <div className="relative group">
        {isExpanded ? (
          <button
            onClick={() => setIsExpanded(false)}
            className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-takumi-red to-red-600 text-white rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 active:scale-95 rotate-45"
            aria-label="Close menu"
          >
            <GiShoppingCart className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full bg-takumi-red animate-ping opacity-20"></span>
          </button>
        ) : (
          <div
            onMouseEnter={() => {
              if (isScrolled) setIsExpanded(true)
            }}
            className="relative"
          >
            <Link
              href="/menu"
              onClick={(e) => {
                // On mobile, if scrolled, expand instead of navigating
                if (isScrolled && window.innerWidth < 768) {
                  e.preventDefault()
                  setIsExpanded(true)
                }
              }}
              className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-takumi-red to-red-600 text-white rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <GiShoppingCart className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute inset-0 rounded-full bg-takumi-red animate-ping opacity-20"></span>
              {isScrolled && (
                <span className="absolute -top-1 -right-1 bg-white text-takumi-red text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg md:hidden animate-pulse">
                  !
                </span>
              )}
            </Link>
          </div>
        )}
        
        {/* Tooltip on hover (desktop) */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className="bg-takumi-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
            {isExpanded ? 'Close' : 'Order Now'}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-takumi-black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

