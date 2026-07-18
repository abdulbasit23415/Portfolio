'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'

const experiences = [
  {
    role: 'Junior AI Engineer',
    company: 'Excels Tech Solution LLC',
    period: '04/2026 - Present',
    description: 'Developing AI-powered web applications and intelligent automation solutions for enterprise clients.',
    achievements: [
      'Deployed AI chatbots and RAG pipelines for customer support',
      'Optimized PostgreSQL and Supabase databases improving API response times',
      'Built WhatsApp Business API chatbots with automated workflows',
      'Integrated LLMs for document processing and AI-driven automation',
    ],
    technologies: ['Python', 'FastAPI', 'Next.js', 'RAG', 'LLMs', 'Pinecone'],
  },
  {
    role: 'Software Engineer',
    company: 'Coding Caliber',
    period: '3 Months',
    description: 'Built AI chatbot solutions and designed end-to-end automation systems using n8n and Python.',
    achievements: [
      'Developed Python-based AI chatbots improving automated response handling',
      'Built automation pipelines reducing manual task processing by 70%',
      'Integrated REST APIs and third-party services for seamless system communication',
      'Performed debugging and performance optimization of automation scripts',
    ],
    technologies: ['Python', 'n8n', 'FastAPI', 'REST APIs', 'Docker'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="A timeline of my professional journey and accomplishments."
        />

        {/* Experience timeline */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ScrollReveal
              key={experience.company}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <GlassCard>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Period and role */}
                  <div className="md:border-r border-border/50 pr-6">
                    <div className="text-sm font-semibold text-accent mb-2">
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {experience.role}
                    </h3>
                    <p className="text-primary font-semibold">{experience.company}</p>
                  </div>

                  {/* Description and achievements */}
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground mb-4">{experience.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} label={tech} variant="secondary" className="text-xs" />
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
