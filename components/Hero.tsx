'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { GiSushis, GiRiceCooker, GiBowlOfRice, GiNoodles, GiBamboo, GiChopsticks, GiOnigori, GiTeapotLeaves, GiDango, GiCherry, GiPaperLantern } from 'react-icons/gi'
import RippleButton from './RippleButton'
import TouchIcon from './TouchIcon'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    { lang: 'English', text: 'Takumi' },
    { lang: 'Japanese', text: 'たくみ' },
    { lang: 'Hindi', text: 'ताकुमी' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2500) // Change every 2.5 seconds

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-takumi-beige via-white to-takumi-beige bg-pattern py-20 md:py-0">
      {/* Animated background gradient orbs */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-takumi-red/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 opacity-30">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#1a1a1a"
            fillOpacity="0.15"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,150,1344,106,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Mobile Food Icons - Cute Japanese themed icons for mobile */}
      {/* Top row */}
      <div className="absolute top-12 left-6 text-takumi-red/18 animate-float md:hidden">
        <GiSushis className="w-7 h-7" />
      </div>
      <div className="absolute top-20 right-8 text-takumi-red/15 animate-float-slow md:hidden" style={{ animationDelay: '0.5s' }}>
        <GiOnigori className="w-8 h-8" />
      </div>
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-takumi-red/12 animate-float-fast md:hidden" style={{ animationDelay: '1s' }}>
        <GiCherry className="w-6 h-6" />
      </div>
      
      {/* Middle row */}
      <div className="absolute top-1/3 left-4 text-takumi-red/16 animate-float-rotate md:hidden" style={{ animationDelay: '1.5s' }}>
        <GiBowlOfRice className="w-9 h-9" />
      </div>
      <div className="absolute top-1/3 right-6 text-takumi-red/14 animate-float md:hidden" style={{ animationDelay: '2s' }}>
        <GiTeapotLeaves className="w-7 h-7" />
      </div>
      
      {/* Bottom row */}
      <div className="absolute bottom-32 left-8 text-takumi-red/15 animate-float-slow md:hidden" style={{ animationDelay: '2.5s' }}>
        <GiChopsticks className="w-8 h-8 rotate-45" />
      </div>
      <div className="absolute bottom-24 right-4 text-takumi-red/12 animate-float-fast md:hidden" style={{ animationDelay: '3s' }}>
        <GiDango className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-1/3 text-takumi-red/10 animate-float-rotate md:hidden" style={{ animationDelay: '3.5s' }}>
        <GiPaperLantern className="w-7 h-7" />
      </div>
      <div className="absolute bottom-28 right-1/3 text-takumi-red/13 animate-float md:hidden" style={{ animationDelay: '4s' }}>
        <GiNoodles className="w-8 h-8" />
      </div>

      {/* Floating Food Icons */}
      {/* Sushi Icons */}
      <div className="absolute top-20 left-10 text-takumi-red/20 animate-float-rotate hidden lg:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/40 hover:drop-shadow-2xl" style={{ animationDelay: '0s' }}>
        <GiSushis className="w-16 h-16 drop-shadow-lg transition-all duration-300" />
      </div>
      <div className="absolute top-40 right-20 text-takumi-red/15 animate-float-slow hidden xl:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/35 hover:drop-shadow-2xl" style={{ animationDelay: '1.5s' }}>
        <GiSushis className="w-12 h-12 drop-shadow-lg transition-all duration-300" />
      </div>
      <div className="absolute bottom-32 left-1/4 text-takumi-red/25 animate-float hidden lg:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/45 hover:drop-shadow-2xl" style={{ animationDelay: '2.5s' }}>
        <GiSushis className="w-14 h-14 drop-shadow-lg transition-all duration-300" />
      </div>

      {/* Rice Bowl Icons */}
      <div className="absolute top-1/3 right-10 text-takumi-red/20 animate-float-slow hidden lg:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/40 hover:drop-shadow-2xl" style={{ animationDelay: '0.8s' }}>
        <GiBowlOfRice className="w-20 h-20 drop-shadow-lg transition-all duration-300" />
      </div>
      <div className="absolute bottom-20 right-1/3 text-takumi-red/15 animate-float-rotate hidden xl:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/35 hover:drop-shadow-2xl" style={{ animationDelay: '2s' }}>
        <GiBowlOfRice className="w-16 h-16 drop-shadow-lg transition-all duration-300" />
      </div>
      <div className="absolute top-1/2 left-20 text-takumi-red/18 animate-float hidden lg:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/38 hover:drop-shadow-2xl" style={{ animationDelay: '3s' }}>
        <GiBowlOfRice className="w-14 h-14 drop-shadow-lg transition-all duration-300" />
      </div>

      {/* Noodles Icon */}
      <div className="absolute top-1/4 right-1/4 text-takumi-red/20 animate-float-fast hidden xl:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/40 hover:drop-shadow-2xl" style={{ animationDelay: '1.2s' }}>
        <GiNoodles className="w-16 h-16 drop-shadow-lg transition-all duration-300" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-takumi-red/15 animate-float-rotate hidden lg:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/35 hover:drop-shadow-2xl" style={{ animationDelay: '2.2s' }}>
        <GiNoodles className="w-16 h-16 drop-shadow-lg transition-all duration-300" />
      </div>

      {/* Rice Cooker Icon */}
      <div className="absolute top-10 right-1/3 text-takumi-red/12 animate-float-slow hidden xl:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/32 hover:drop-shadow-2xl" style={{ animationDelay: '1.8s' }}>
        <GiRiceCooker className="w-14 h-14 drop-shadow-lg transition-all duration-300" />
      </div>

      {/* Bamboo Icon */}
      <div className="absolute bottom-10 left-1/3 text-takumi-red/10 animate-float hidden lg:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/30 hover:drop-shadow-2xl" style={{ animationDelay: '3.5s' }}>
        <GiBamboo className="w-12 h-12 drop-shadow-lg transition-all duration-300" />
      </div>

      {/* Chopsticks Icon */}
      <div className="absolute top-1/2 right-1/5 text-takumi-red/15 animate-float-rotate hidden xl:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/35 hover:drop-shadow-2xl" style={{ animationDelay: '2.8s' }}>
        <GiChopsticks className="w-10 h-10 drop-shadow-lg transition-all duration-300" />
      </div>
      <div className="absolute bottom-1/4 left-1/5 text-takumi-red/12 animate-float-fast hidden lg:block group cursor-pointer transition-all duration-300 hover:scale-125 hover:text-takumi-red/32 hover:drop-shadow-2xl" style={{ animationDelay: '1.5s' }}>
        <GiChopsticks className="w-8 h-8 drop-shadow-lg transition-all duration-300" />
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-takumi-red/40 rounded-full animate-pulse-slow hidden md:block" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-takumi-red/30 rounded-full animate-pulse-slow hidden md:block" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-takumi-red/40 rounded-full animate-pulse-slow hidden md:block" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto animate-fade-in">
        {/* Mobile: Enhanced background gradient orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-takumi-red/20 to-red-500/10 rounded-full blur-3xl md:hidden animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/20 to-takumi-red/10 rounded-full blur-3xl md:hidden animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Food Icons Section - Top - Touch Interactive */}
        <div className="mb-8 md:mb-12 flex items-center justify-center gap-3 md:gap-6 lg:gap-8 px-4 relative">
          {/* Mobile: Decorative glow behind icons */}
          <div className="absolute inset-0 bg-gradient-to-r from-takumi-red/10 via-transparent to-takumi-red/10 rounded-full blur-2xl md:hidden -z-10"></div>
          {/* Sushi Icon */}
          <div className="flex-shrink-0 group cursor-pointer icon-touch">
            <div className="transform transition-all duration-500 ease-out group-hover:scale-150 group-hover:-translate-y-4 group-hover:rotate-12 group-hover:drop-shadow-2xl active:scale-125 active:rotate-6">
              <TouchIcon
                icon={GiSushis}
                size="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
                className="text-takumi-black/80 group-hover:text-takumi-red transition-colors duration-500"
              />
            </div>
          </div>
          
          {/* Utensils/Chopsticks */}
          <div className="flex-shrink-0 group cursor-pointer icon-touch">
            <div className="transform transition-all duration-500 ease-out group-hover:scale-150 group-hover:-translate-y-4 group-hover:rotate-[-12deg] group-hover:drop-shadow-2xl active:scale-125 active:-rotate-6">
              <TouchIcon
                icon={GiChopsticks}
                size="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                className="text-takumi-black/70 rotate-90 group-hover:text-amber-600 transition-colors duration-500"
              />
            </div>
          </div>
          
          {/* Bowl with Noodles */}
          <div className="flex-shrink-0 relative group cursor-pointer icon-touch">
            <div className="transform transition-all duration-500 ease-out group-hover:scale-150 group-hover:-translate-y-4 group-hover:drop-shadow-2xl active:scale-125">
              <TouchIcon
                icon={GiBowlOfRice}
                size="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
                className="text-takumi-black/80 group-hover:text-takumi-red transition-colors duration-500"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-125 pointer-events-none">
                <GiNoodles className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-takumi-red group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="absolute top-1/3 right-0 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 pointer-events-none">
                <GiChopsticks className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-amber-700 rotate-45 group-hover:text-amber-500 transition-colors duration-500" />
              </div>
            </div>
          </div>
          
          {/* Japanese Characters */}
          <div className="flex-shrink-0 group cursor-pointer icon-touch">
            <div className="transform transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-xl active:scale-110">
              <div className="bg-takumi-red px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 rounded group-hover:bg-gradient-to-br group-hover:from-takumi-red group-hover:to-red-600 transition-all duration-500">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-bold transition-all duration-500 group-hover:scale-110" style={{ fontFamily: 'serif' }}>
                  たくみ
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Takumi Text with Animation */}
        <h1 className="px-2 mb-6 md:mb-8">
          <div className="relative h-[1.1em] flex items-center justify-center">
            <span 
              key={currentText}
              className="block text-takumi-black absolute inset-0 flex items-center justify-center uppercase tracking-wider font-protrakt"
              style={{ 
                animation: 'fadeIn 0.8s ease-in-out',
                fontFamily: currentText === 0 ? '"Protrakt Variable", sans-serif' : currentText === 1 ? 'serif' : 'sans-serif',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                fontWeight: '400',
                letterSpacing: '0.1em',
                lineHeight: '1.1'
              }}
            >
              {texts[currentText].text}
            </span>
          </div>
        </h1>
        
        {/* Gold Underline */}
        <div className="flex justify-center mb-3 md:mb-4">
          <div className="h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 md:w-48 lg:w-64"></div>
        </div>
        
        {/* Asian Kitchen Text */}
        <div className="mb-10 md:mb-14 lg:mb-16">
          <span className="text-takumi-black uppercase tracking-widest font-semibold" style={{ 
            fontSize: 'clamp(0.75rem, 2vw, 1.25rem)',
            letterSpacing: '0.2em'
          }}>
            Asian Kitchen
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-slide-up px-4 relative">
          {/* Mobile: Enhanced button container with glow */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-r from-takumi-red/5 via-transparent to-red-500/5 rounded-3xl blur-2xl -z-10"></div>
          
          <RippleButton
            href="/menu"
            variant="primary"
            className="w-full sm:w-auto text-sm md:text-base px-6 md:px-10 py-3 md:py-4 sticky-button relative z-10 shadow-2xl shadow-red-500/30 md:shadow-lg"
          >
            <span>Order Now</span>
          </RippleButton>
          <RippleButton
            href="/menu"
            variant="secondary"
            className="w-full sm:w-auto text-sm md:text-base px-6 md:px-10 py-3 md:py-4 relative z-10 shadow-xl md:shadow-md border-2 md:border-2"
          >
            View Menu
          </RippleButton>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-takumi-black/40 rounded-full flex items-start justify-center p-2 shadow-lg backdrop-blur-sm bg-white/50">
            <div className="w-1.5 h-3 bg-gradient-to-b from-takumi-red to-red-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

