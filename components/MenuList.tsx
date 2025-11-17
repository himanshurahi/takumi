'use client'

import { useState, useEffect, useRef } from 'react'
import MenuCard from './MenuCard'
import menuItems from '@/data/menu.json'

const categories = ['All', 'Sushi', 'Noodles', 'Fried Rice', 'Starters', 'Dimsums', 'Bao']

export default function MenuList() {
  const [activeCategory, setActiveCategory] = useState('All')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isUserInteractingRef = useRef(false)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Only run on mobile
    const checkMobile = () => window.innerWidth < 768
    if (!checkMobile()) return

    // Check if content is scrollable
    const checkScrollable = () => {
      return container.scrollWidth > container.clientWidth
    }

    if (!checkScrollable()) return

    let scrollTimeout: NodeJS.Timeout | null = null
    let hasAutoScrolled = false

    const stopAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
        autoScrollIntervalRef.current = null
      }
    }

    const startAutoScroll = () => {
      if (hasAutoScrolled || isUserInteractingRef.current) return
      if (autoScrollIntervalRef.current) return

      const maxScroll = container.scrollWidth - container.clientWidth
      
      // First, scroll all the way to the right
      container.scrollTo({
        left: maxScroll,
        behavior: 'smooth'
      })

      // After scrolling to the end, wait a moment, then scroll back
      setTimeout(() => {
        if (isUserInteractingRef.current) return
        
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      }, 2000)
    }

    const handleUserInteraction = () => {
      isUserInteractingRef.current = true
      stopAutoScroll()

      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isUserInteractingRef.current = false
      }, 3000)
    }

    // Handle scroll events
    const handleScroll = () => {
      handleUserInteraction()
    }

    // Handle touch events
    const handleTouchStart = () => {
      handleUserInteraction()
    }

    // Handle mouse down (for desktop testing)
    const handleMouseDown = () => {
      handleUserInteraction()
    }

    // Start auto-scroll after 1.5 seconds on page load
    const initialTimer = setTimeout(() => {
      if (!isUserInteractingRef.current && checkScrollable()) {
        startAutoScroll()
        hasAutoScrolled = true
      }
    }, 1500)

    // Add event listeners
    container.addEventListener('scroll', handleScroll, { passive: true })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('mousedown', handleMouseDown)

    return () => {
      stopAutoScroll()
      if (scrollTimeout) clearTimeout(scrollTimeout)
      if (initialTimer) clearTimeout(initialTimer)
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  const getFilteredItems = () => {
    if (activeCategory === 'All') {
      return [
        ...menuItems.sushi,
        ...menuItems.noodles,
        ...menuItems.friedRice,
        ...menuItems.startersVeg,
        ...menuItems.startersNonVeg,
        ...menuItems.dimsums,
        ...menuItems.bao,
      ]
    }
    
    const categoryMap: { [key: string]: keyof typeof menuItems } = {
      'Sushi': 'sushi',
      'Noodles': 'noodles',
      'Fried Rice': 'friedRice',
      'Starters': 'startersVeg', // Will combine both veg and non-veg
      'Dimsums': 'dimsums',
      'Bao': 'bao',
    }
    
    if (activeCategory === 'Starters') {
      return [...menuItems.startersVeg, ...menuItems.startersNonVeg]
    }
    
    return menuItems[categoryMap[activeCategory]] || []
  }

  return (
    <div>
      {/* Category Filter - Japanese Style - Responsive */}
      <div className="relative mb-12 md:mb-16">
        {/* Decorative top wave - hidden on mobile */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-takumi-red/30 to-transparent hidden md:block"></div>
        
        {/* Mobile: Horizontal scrollable tabs with auto-scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden group whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-takumi-red to-red-600 text-white shadow-lg shadow-red-500/30 border-2 border-takumi-red/50'
                      : 'bg-white/90 backdrop-blur-sm text-takumi-black border-2 border-gray-200 active:bg-white active:border-takumi-red/50'
                  }`}
                >
                  <span className="relative z-10 tracking-wide">{category}</span>
                  
                  {/* Active state decorative elements */}
                  {activeCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-takumi-red opacity-0 group-active:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop: Centered flex layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 lg:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 lg:px-8 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden group ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-takumi-red to-red-600 text-white shadow-xl shadow-red-500/30 scale-105 border-2 border-takumi-red/50'
                  : 'bg-white/90 backdrop-blur-sm text-takumi-black hover:bg-white border-2 border-gray-200 hover:border-takumi-red/50 hover:shadow-lg'
              }`}
            >
              <span className="relative z-10 tracking-wide">{category}</span>
              
              {/* Active state decorative elements */}
              {activeCategory === category && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-takumi-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Decorative dots */}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-50"></div>
                </>
              )}
            </button>
          ))}
        </div>
        
        {/* Decorative bottom wave - hidden on mobile */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-takumi-red/30 to-transparent hidden md:block"></div>
      </div>

      {/* Menu Grid - Japanese Layout */}
      <div className="relative">
        {/* Enhanced decorative background elements - more vibrant on mobile */}
        <div className="absolute -left-8 top-0 w-24 h-24 md:w-24 md:h-24 bg-takumi-red/10 md:bg-takumi-red/5 rounded-full blur-3xl opacity-70 md:opacity-50"></div>
        <div className="absolute -right-8 bottom-0 w-32 h-32 md:w-32 md:h-32 bg-red-500/10 md:bg-red-500/5 rounded-full blur-3xl opacity-70 md:opacity-50"></div>
        {/* Mobile: Additional decorative elements */}
        <div className="md:hidden absolute top-1/3 left-1/4 w-20 h-20 bg-takumi-red/8 rounded-full blur-2xl"></div>
        <div className="md:hidden absolute bottom-1/3 right-1/4 w-16 h-16 bg-red-500/8 rounded-full blur-2xl"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10 items-stretch">
          {getFilteredItems().map((item, index) => (
            <div 
              key={`${item.name}-${index}`} 
              className="animate-slide-up h-full" 
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
