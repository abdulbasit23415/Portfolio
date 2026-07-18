import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`mb-12 animate-fade-in-up ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
    </div>
  )
}
