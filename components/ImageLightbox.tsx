'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  images: Array<{ src: string; alt: string; category: string }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  onNavigate?: (index: number) => void
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  onNavigate,
}: ImageLightboxProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsAnimating(true)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        onNext()
      } else if (e.key === 'ArrowLeft') {
        onPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 z-[60] bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 group touch-manipulation"
        aria-label="Close lightbox"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrevious()
            }}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 group touch-manipulation"
            aria-label="Previous image"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 group touch-manipulation"
            aria-label="Next image"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full h-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] transition-all duration-500 ${
            isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl bg-black/50">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </div>

          {/* Image info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 line-clamp-2">
                {currentImage.alt}
              </h3>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-takumi-red to-red-600 rounded-full flex-shrink-0" />
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-medium">
                  {currentImage.category}
                </p>
                {images.length > 1 && (
                  <>
                    <span className="text-white/60 mx-1 sm:mx-2">•</span>
                    <p className="text-white/60 text-xs sm:text-sm md:text-base">
                      {currentIndex + 1} / {images.length}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image counter dots */}
      {images.length > 1 && (
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-[60] px-2 max-w-full overflow-x-auto">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                if (onNavigate) {
                  onNavigate(index)
                }
              }}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 flex-shrink-0 touch-manipulation ${
                index === currentIndex
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white/40 hover:bg-white/60 w-1.5 sm:w-2'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

