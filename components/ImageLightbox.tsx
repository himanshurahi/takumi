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
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-[60] bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 group"
        aria-label="Close lightbox"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
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
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 group"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
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
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative max-w-7xl max-h-[90vh] w-full h-full transition-all duration-500 ${
            isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black/50">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </div>

          {/* Image info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {currentImage.alt}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-takumi-red to-red-600 rounded-full" />
                <p className="text-white/80 text-sm md:text-base font-medium">
                  {currentImage.category}
                </p>
                {images.length > 1 && (
                  <>
                    <span className="text-white/60 mx-2">•</span>
                    <p className="text-white/60 text-sm md:text-base">
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
        <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-[60]">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                if (onNavigate) {
                  onNavigate(index)
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

