import React from 'react'

interface BadgeProps {
  label: string
  variant?: 'primary' | 'secondary' | 'accent'
  className?: string
}

export function Badge({
  label,
  variant = 'primary',
  className = '',
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary/20 text-primary border border-primary/30',
    secondary: 'bg-secondary/20 text-foreground border border-secondary/30',
    accent: 'bg-accent/20 text-accent border border-accent/30',
  }

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${variantClasses[variant]} ${className}`}
    >
      {label}
    </span>
  )
}
