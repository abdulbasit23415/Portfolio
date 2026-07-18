'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'

const timeline = [
  {
    year: '2026',
    title: 'Junior AI Engineer',
    company: 'Excels Tech Solution LLC',
    description: 'Developing AI-powered web applications and RAG pipelines.',
  },
  {
    year: '2025',
    title: 'Software Engineer',
    company: 'Coding Caliber',
    description: 'Built AI chatbots and automation pipelines using n8n and Python.',
  },
  {
    year: '2023',
    title: 'Data Science Graduate',
    company: 'Superior University',
    description: 'Completed BS in Data Science with focus on ML and analytics.',
  },
  {
    year: '2019',
    title: 'ICS in Physics',
    company: 'Punjab Group of College',
    description: 'Foundation in physics with introduction to computer science.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Dedicated data science professional with expertise in AI engineering, machine learning, and full-stack development."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a dedicated AI engineer and full-stack developer with hands-on experience in building intelligent, data-driven applications. Currently working at Excels Tech Solution LLC, where I develop AI-powered platforms, RAG pipelines, and automation solutions using Python, Next.js, and LLMs.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans machine learning, data science, backend optimization, and modern web technologies. I specialize in integrating Large Language Models, implementing Retrieval-Augmented Generation, and building scalable production systems. I&apos;m passionate about solving complex problems through AI and creating technology that makes a real impact.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <p className="text-sm text-muted-foreground">AI Projects</p>
                </GlassCard>
                <GlassCard className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <p className="text-sm text-muted-foreground">Tech Skills</p>
                </GlassCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Right content - Timeline */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full" />

                  {/* Timeline line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-1.5 top-8 w-0.5 h-16 bg-gradient-to-b from-primary to-accent/30" />
                  )}

                  {/* Content */}
                  <GlassCard hover={false} className="!p-4">
                    <div className="text-sm text-accent font-semibold mb-1">
                      {item.year}
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-primary mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
