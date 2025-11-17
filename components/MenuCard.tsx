'use client'

import Image from 'next/image'
import { useState } from 'react'
import { 
  GiSushis, 
  GiNoodles, 
  GiRiceCooker, 
  GiDumpling, 
  GiChickenLeg,
  GiSushi
} from 'react-icons/gi'

interface MenuCardProps {
  name: string
  japaneseName?: string
  price: string
  description: string
  image: string
  category: string
}

// Category-specific loading icons using React Icons
const getLoadingIcon = (category: string) => {
  const categoryLower = category.toLowerCase()
  const iconClass = "w-16 h-16 text-takumi-red animate-pulse"
  
  if (categoryLower.includes('sushi')) {
    return <GiSushis className={iconClass} />
  } else if (categoryLower.includes('noodle')) {
    return <GiNoodles className={iconClass} />
  } else if (categoryLower.includes('rice')) {
    return <GiRiceCooker className={iconClass} />
  } else if (categoryLower.includes('dimsum') || categoryLower.includes('bao')) {
    return <GiDumpling className={iconClass} />
  } else if (categoryLower.includes('starter') || categoryLower.includes('chicken') || categoryLower.includes('paneer')) {
    return <GiChickenLeg className={iconClass} />
  }
  
  // Default loading icon (sushi)
  return <GiSushi className={iconClass} />
}

export default function MenuCard({ name, japaneseName, price, description, image, category }: MenuCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="group cursor-pointer relative h-full">
      {/* Mobile: Enhanced glow effect */}
      <div className="md:hidden absolute -inset-1 bg-gradient-to-r from-takumi-red/20 via-red-500/20 to-takumi-red/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Japanese-style card with elegant border */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-takumi-red/30 h-full flex flex-col md:shadow-lg md:hover:shadow-2xl">
        {/* Decorative top accent line - more visible on mobile */}
        <div className="absolute top-0 left-0 right-0 h-1 md:h-1 bg-gradient-to-r from-transparent via-takumi-red/50 to-transparent opacity-60 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
        
        {/* Image container with Japanese frame effect */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-takumi-beige/30 to-white">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-takumi-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-takumi-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          
          {/* Loading placeholder */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-takumi-beige/50 to-white z-10">
              <div className="flex flex-col items-center gap-3">
                {getLoadingIcon(category)}
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-takumi-red rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-2 h-2 bg-takumi-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-takumi-red rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Error placeholder */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-takumi-beige/50 to-white z-10">
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Image unavailable</span>
              </div>
            </div>
          )}
          
          <Image
            src={image}
            alt={name}
            fill
            loading="lazy"
            className={`object-cover group-hover:scale-110 transition-all duration-700 ease-out ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              setHasError(true)
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          {/* Category badge - Japanese style - Enhanced for mobile */}
          <div className="absolute top-4 right-4 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-takumi-red/30 md:bg-takumi-red/20 blur-sm rounded-full"></div>
              <div className="relative bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1.5 rounded-full border-2 border-takumi-red/40 md:border-takumi-red/30 shadow-lg md:shadow-md">
                <span className="text-xs font-bold text-takumi-red tracking-wider uppercase">{category}</span>
              </div>
            </div>
          </div>
          
          {/* Price badge - elegant Japanese style */}
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl border border-takumi-red/20">
              <span className="text-lg font-bold bg-gradient-to-r from-takumi-red to-red-600 bg-clip-text text-transparent">
                {price}
              </span>
            </div>
          </div>
        </div>
        
        {/* Content section - Enhanced for mobile */}
        <div className="p-5 md:p-6 flex-1 flex flex-col bg-white relative">
          {/* Mobile: Subtle gradient background */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-br from-takumi-beige/10 via-transparent to-white opacity-50 -z-0"></div>
          
          {/* Title and Price */}
          <div className="mb-4 relative z-10">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-heading font-bold text-takumi-black group-hover:text-takumi-red transition-colors duration-300">
                  {name}
                </h3>
                {japaneseName && (
                  <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium" style={{ fontFamily: 'serif' }}>
                    {japaneseName}
                  </p>
                )}
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-takumi-red to-red-600 bg-clip-text text-transparent whitespace-nowrap">
                {price}
              </span>
            </div>
            
            {/* Decorative divider - more visible on mobile */}
            <div className="h-px bg-gradient-to-r from-transparent via-takumi-red/20 md:via-gray-200 to-transparent my-3"></div>
          </div>
          
          {/* Description */}
          <div className="flex-1 flex items-start mb-4 min-h-[4.5rem]">
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
              {description}
            </p>
          </div>
          
          {/* Japanese-style footer with decorative element */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Japanese star/chef icon */}
                <div className="relative">
                  <svg className="w-5 h-5 text-takumi-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Chef's Choice</span>
              </div>
              
              {/* Decorative arrow */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-takumi-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-takumi-red/0 to-red-500/0 group-hover:from-takumi-red/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none -z-10"></div>
      </div>
    </div>
  )
}

