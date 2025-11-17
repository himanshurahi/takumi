'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageLightbox from './ImageLightbox'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
    alt: 'Sushi platter',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
    alt: 'Fried rice',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
    alt: 'Noodles',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
    alt: 'Bao buns',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
    alt: 'Chef at work',
    category: 'Chef',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    alt: 'Restaurant interior',
    category: 'Ambience',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    alt: 'Dining area',
    category: 'Ambience',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
    alt: 'Food preparation',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
    alt: 'Sushi selection',
    category: 'Food',
  },
]

export default function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="relative h-64 md:h-80 rounded-3xl overflow-hidden group cursor-pointer card card-glow transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-takumi-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-2xl">
                  <p className="text-takumi-black font-bold text-lg mb-1">{image.alt}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-takumi-red to-red-600 rounded-full" />
                    <p className="text-gray-600 text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <svg className="w-5 h-5 text-takumi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
        onNavigate={navigateToImage}
      />
    </>
  )
}

