'use client'

import { useState } from 'react'
import MenuCard from './MenuCard'

const menuItems = {
  sushi: [
    {
      name: 'Salmon Sashimi',
      price: '₹450',
      description: 'Fresh Atlantic salmon, expertly sliced and served with wasabi and soy sauce',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      category: 'Sushi',
    },
    {
      name: 'Dragon Roll',
      price: '₹550',
      description: 'Eel, cucumber, avocado, topped with eel sauce and sesame seeds',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      category: 'Sushi',
    },
    {
      name: 'California Roll',
      price: '₹380',
      description: 'Crab, avocado, cucumber, wrapped in nori and sushi rice',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      category: 'Sushi',
    },
    {
      name: 'Tuna Nigiri',
      price: '₹420',
      description: 'Premium tuna over seasoned sushi rice, a classic favorite',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      category: 'Sushi',
    },
  ],
  friedRice: [
    {
      name: 'Chicken Fried Rice',
      price: '₹280',
      description: 'Wok-tossed jasmine rice with tender chicken, vegetables, and soy sauce',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
      category: 'Fried Rice',
    },
    {
      name: 'Vegetable Fried Rice',
      price: '₹240',
      description: 'Colorful mix of fresh vegetables stir-fried with fragrant jasmine rice',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
      category: 'Fried Rice',
    },
    {
      name: 'Prawn Fried Rice',
      price: '₹320',
      description: 'Succulent prawns with jasmine rice, eggs, and aromatic seasonings',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
      category: 'Fried Rice',
    },
    {
      name: 'Egg Fried Rice',
      price: '₹220',
      description: 'Classic comfort food with scrambled eggs and perfectly seasoned rice',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
      category: 'Fried Rice',
    },
  ],
  noodles: [
    {
      name: 'Pad Thai',
      price: '₹320',
      description: 'Stir-fried rice noodles with tamarind, peanuts, and your choice of protein',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
      category: 'Noodles',
    },
    {
      name: 'Ramen Bowl',
      price: '₹380',
      description: 'Rich pork broth, ramen noodles, soft-boiled egg, and tender chashu',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
      category: 'Noodles',
    },
    {
      name: 'Chicken Lo Mein',
      price: '₹290',
      description: 'Wheat noodles with chicken, vegetables, and savory sauce',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
      category: 'Noodles',
    },
    {
      name: 'Vegetable Chow Mein',
      price: '₹260',
      description: 'Crispy noodles topped with fresh stir-fried vegetables',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
      category: 'Noodles',
    },
  ],
  bao: [
    {
      name: 'Pork Belly Bao',
      price: '₹180',
      description: 'Slow-braised pork belly in a fluffy steamed bun with hoisin sauce',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
      category: 'Bao',
    },
    {
      name: 'Chicken Bao',
      price: '₹160',
      description: 'Tender marinated chicken with pickled vegetables in a soft bun',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
      category: 'Bao',
    },
    {
      name: 'Vegetable Bao',
      price: '₹140',
      description: 'Fresh vegetables and tofu with our signature sauce',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
      category: 'Bao',
    },
    {
      name: 'Crispy Tofu Bao',
      price: '₹150',
      description: 'Crispy tofu with spicy mayo and fresh greens',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
      category: 'Bao',
    },
  ],
}

const categories = ['All', 'Sushi', 'Fried Rice', 'Noodles', 'Bao']

export default function MenuList() {
  const [activeCategory, setActiveCategory] = useState('All')

  const getFilteredItems = () => {
    if (activeCategory === 'All') {
      return [
        ...menuItems.sushi,
        ...menuItems.friedRice,
        ...menuItems.noodles,
        ...menuItems.bao,
      ]
    }
    
    const categoryMap: { [key: string]: keyof typeof menuItems } = {
      'Sushi': 'sushi',
      'Fried Rice': 'friedRice',
      'Noodles': 'noodles',
      'Bao': 'bao',
    }
    
    return menuItems[categoryMap[activeCategory]] || []
  }

  return (
    <div>
      {/* Category Filter - Japanese Style - Responsive */}
      <div className="relative mb-12 md:mb-16">
        {/* Decorative top wave - hidden on mobile */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-takumi-red/30 to-transparent hidden md:block"></div>
        
        {/* Mobile: Horizontal scrollable tabs */}
        <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
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
        {/* Decorative background elements */}
        <div className="absolute -left-8 top-0 w-24 h-24 bg-takumi-red/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -right-8 bottom-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl opacity-50"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {getFilteredItems().map((item, index) => (
            <div 
              key={`${item.name}-${index}`} 
              className="animate-slide-up" 
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

