'use client'

import React, { useRef } from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  tilt?: boolean
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  tilt = false,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }

  const handleMouseLeave = () => {
    if (!tilt || !cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <div
      ref={cardRef}
      className={`glass-card-premium rounded-2xl p-6 ${
        hover ? 'cursor-default' : ''
      } ${className}`}
      onMouseMove={tilt ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      {children}
    </div>
  )
}
