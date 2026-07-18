'use client'

import React, { useState, useEffect, useRef } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { Wrench } from 'lucide-react'

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), 100)
        }
      },
      { threshold: 0.1 }
    )

    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [percentage])

  return (
    <div ref={ref} className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

const skillsData = {
  'Programming': ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Next.js'],
  'AI & ML': ['TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'RAG', 'LLMs'],
  'Backend & Database': ['FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'Supabase', 'SQLite'],
  'Tools & DevOps': ['n8n', 'Git', 'Docker', 'Vercel', 'Playwright', 'Apify'],
  'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV', 'MediaPipe'],
  'Web Scraping': ['Playwright', 'Crawlee', 'Apify', 'BeautifulSoup', 'Selenium'],
}

type SkillCategory = keyof typeof skillsData

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
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as SkillCategory)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/50'
                    : 'glass hover:border-accent/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData[activeCategory].map((skill, index) => (
              <ScrollReveal
                key={skill}
                direction="up"
                delay={index * 50}
                className="h-full"
              >
                <GlassCard className="h-full flex items-center justify-center text-center">
                  <div>
                    <Wrench className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold text-foreground">{skill}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Proficiency overview */}
        <ScrollReveal direction="up" className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Design and deploy ML models, LLM-powered applications, and RAG pipelines for intelligent automation.',
                tags: ['TensorFlow', 'Keras', 'Scikit-learn', 'RAG', 'LLMs'],
                proof: 'Built AI chatbots and retrieval workflows for real-world use cases.',
              },
              {
                title: 'Full-Stack Development',
                description: 'Build full-stack web apps with modern React and Next.js frontends, Python backends, and production-ready APIs.',
                tags: ['Next.js', 'React', 'FastAPI', 'Python', 'REST APIs'],
                proof: 'Delivered AI-powered platforms with smooth UI workflows and backend routing.',
              },
              {
                title: 'Data Science & Analytics',
                description: 'Analyze data, build predictive models, and create visual insights that support better decision-making.',
                tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL'],
                proof: 'Applied analytics across academic and real-world projects.',
              },
              {
                title: 'Automation & Integration',
                description: 'Automate workflows, connect APIs, and orchestrate backend processes for repeatable operations.',
                tags: ['n8n', 'Git', 'Docker', 'Vercel', 'Playwright', 'Apify'],
                proof: 'Reduced manual processing with automated pipelines and integrations.',
              },
            ].map((skill) => (
              <GlassCard key={skill.title}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/70 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground/80">
                    {skill.proof}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
