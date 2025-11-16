'use client'

import { useState, useRef } from 'react'
import { IconType } from 'react-icons'

interface TouchIconProps {
  icon: IconType
  className?: string
  onTouch?: () => void
  size?: string
}

export default function TouchIcon({ icon: Icon, className = '', onTouch, size = 'w-8 h-8' }: TouchIconProps) {
  const [isTouching, setIsTouching] = useState(false)
  const iconRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true)
    if (onTouch) onTouch()
  }

  const handleTouchEnd = () => {
    setIsTouching(false)
  }

  return (
    <div
      ref={iconRef}
      className={`relative touch-manipulation inline-block ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={() => setIsTouching(true)}
      onMouseUp={() => setIsTouching(false)}
      onMouseLeave={() => setIsTouching(false)}
    >
      <Icon className={`${size} transition-all duration-300 ${isTouching ? 'scale-125 rotate-12' : ''}`} />
      {isTouching && (
        <div
          className="absolute inset-0 rounded-full bg-takumi-red/30 animate-ping pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '150%',
            height: '150%',
          }}
        />
      )}
    </div>
  )
}

