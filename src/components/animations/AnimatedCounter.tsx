'use client'

import React, { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, target, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
