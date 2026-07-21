'use client'

import React, { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'

const skillsData = {
  'Programming': ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Next.js'],
  'AI & ML': ['TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'RAG', 'LLMs'],
  'Backend & DB': ['FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'Supabase', 'SQLite'],
  'Tools & DevOps': ['n8n', 'Git', 'Docker', 'Vercel', 'Playwright', 'Apify'],
  'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV', 'MediaPipe'],
}

type SkillCategory = keyof typeof skillsData

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Programming')

  return (
    <section id="skills" aria-label="What technologies does Abdul Basit use?" className="py-20 md:py-32 relative overflow-hidden">
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

          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skillsData[activeCategory].map((skill, index) => (
              <ScrollReveal
                key={`${activeCategory}-${skill}`}
                direction="up"
                delay={index * 80}
                className="flex justify-center"
              >
                <GlassCard tilt className="w-full text-center py-5">
                  <p className="font-semibold text-foreground text-sm">{skill}</p>
                </GlassCard>
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
