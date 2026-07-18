'use client'

import React, { useMemo } from 'react'

interface ParticleFieldProps {
  count?: number
  className?: string
}

export function ParticleField({ count = 40, className = '' }: ParticleFieldProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 3 + 1
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 15 + 10
      const delay = Math.random() * 10
      const opacity = Math.random() * 0.5 + 0.1
      const color = i % 3 === 0
        ? 'rgba(59, 130, 246, 0.5)'
        : i % 3 === 1
          ? 'rgba(6, 182, 212, 0.4)'
          : 'rgba(236, 72, 153, 0.3)'

      return { id: i, size, x, y, duration, delay, opacity, color }
    })
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `particle-float-${(p.id % 3) + 1} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
