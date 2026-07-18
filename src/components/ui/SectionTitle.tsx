'use client'

import React, { useRef, useState, useEffect } from 'react'

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
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <div ref={ref} className={`mb-16 ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-fuchsia-400 bg-clip-text text-transparent mb-4 text-glow animate-gradient-text bg-[length:200%_auto]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-muted-foreground text-lg max-w-2xl transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-primary to-accent overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-primary via-accent to-fuchsia-400 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    </div>
  )
}
