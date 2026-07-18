'use client'

import React, { useState, useEffect, useRef } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'

const skillsData = {
  'Programming': [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 85 },
  ],
  'AI & ML': [
    { name: 'TensorFlow', level: 80 },
    { name: 'Keras', level: 78 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'XGBoost', level: 75 },
    { name: 'RAG', level: 90 },
    { name: 'LLMs', level: 88 },
  ],
  'Backend & DB': [
    { name: 'FastAPI', level: 88 },
    { name: 'Flask', level: 75 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'MongoDB', level: 78 },
    { name: 'Supabase', level: 85 },
    { name: 'SQLite', level: 80 },
  ],
  'Tools & DevOps': [
    { name: 'n8n', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'Vercel', level: 88 },
    { name: 'Playwright', level: 75 },
    { name: 'Apify', level: 80 },
  ],
  'Data Science': [
    { name: 'Pandas', level: 90 },
    { name: 'NumPy', level: 88 },
    { name: 'Matplotlib', level: 82 },
    { name: 'Seaborn', level: 80 },
    { name: 'OpenCV', level: 72 },
    { name: 'MediaPipe', level: 70 },
  ],
}

type SkillCategory = keyof typeof skillsData

function CircularProgress({ percentage, name }: { percentage: number; name: string }) {
  const [animatedPercent, setAnimatedPercent] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 1200
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.floor(eased * percentage)
            setAnimatedPercent(start)
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [percentage, hasAnimated])

  // Reset animation when category changes
  useEffect(() => {
    setHasAnimated(false)
    setAnimatedPercent(0)
  }, [name])

  const radius = 36
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (animatedPercent / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="5"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">{animatedPercent}%</span>
        </div>
      </div>
      <span className="text-sm font-semibold text-foreground text-center">{name}</span>
    </div>
  )
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Programming')

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Technical Skills"
          subtitle="A comprehensive toolkit of modern technologies and frameworks."
        />

        {/* Category tabs */}
        <ScrollReveal direction="up" className="mb-12">
          <div className="flex flex-wrap gap-3 mb-10">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as SkillCategory)}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/40 scale-105'
                    : 'glass-card-premium hover:border-accent/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Circular progress grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            {skillsData[activeCategory].map((skill, index) => (
              <ScrollReveal
                key={`${activeCategory}-${skill.name}`}
                direction="up"
                delay={index * 80}
                className="flex justify-center"
              >
                <CircularProgress percentage={skill.level} name={skill.name} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Proficiency overview */}
        <ScrollReveal direction="up" className="mt-16">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Design and deploy ML models, LLM-powered applications, and RAG pipelines for intelligent automation.',
                tags: ['TensorFlow', 'Keras', 'Scikit-learn', 'RAG', 'LLMs'],
              },
              {
                title: 'Full-Stack Development',
                description: 'Build full-stack web apps with modern React and Next.js frontends, Python backends, and production-ready APIs.',
                tags: ['Next.js', 'React', 'FastAPI', 'Python', 'REST APIs'],
              },
              {
                title: 'Data Science & Analytics',
                description: 'Analyze data, build predictive models, and create visual insights that support better decision-making.',
                tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL'],
              },
              {
                title: 'Automation & Integration',
                description: 'Automate workflows, connect APIs, and orchestrate backend processes for repeatable operations.',
                tags: ['n8n', 'Git', 'Docker', 'Vercel', 'Playwright', 'Apify'],
              },
            ].map((skill) => (
              <GlassCard key={skill.title} tilt>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-foreground">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/70 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
