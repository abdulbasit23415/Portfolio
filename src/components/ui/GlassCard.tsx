import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-lg p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-lg hover:border-accent/30 hover:scale-105' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
