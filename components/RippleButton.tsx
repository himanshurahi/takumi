'use client'

import { useState, useRef, MouseEvent, TouchEvent } from 'react'
import Link from 'next/link'

interface RippleButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function RippleButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const rippleIdRef = useRef(0)

  const createRipple = (e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

    const x = clientX - rect.left
    const y = clientY - rect.top

    const newRipple = {
      x,
      y,
      id: rippleIdRef.current++,
    }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)
  }

  const baseClasses =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary'

  const content = (
    <>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/40 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px',
          }}
        />
      ))}
    </>
  )

  if (href) {
    // Use <a> tag for external links (tel:, mailto:, etc.)
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          className={`${baseClasses} ${className} relative overflow-hidden`}
          onMouseDown={createRipple}
          onTouchStart={createRipple}
          onClick={onClick}
        >
          {content}
        </a>
      )
    }
    
    // Use Next.js Link for internal routes
    return (
      <Link
        href={href}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        className={`${baseClasses} ${className} relative overflow-hidden`}
        onMouseDown={createRipple}
        onTouchStart={createRipple}
        onClick={onClick}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={`${baseClasses} ${className} relative overflow-hidden`}
      onMouseDown={createRipple}
      onTouchStart={createRipple}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

