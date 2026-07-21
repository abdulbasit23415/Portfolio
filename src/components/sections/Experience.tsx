'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Junior AI Engineer',
    company: 'Excels Tech Solution LLC',
    period: '04/2026 – Present',
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
    <section id="experience" aria-label="Where has Abdul Basit worked?" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="A timeline of my professional journey and accomplishments."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ScrollReveal
                key={experience.company}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 150}
              >
                <div className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="timeline-dot flex items-center justify-center">
                      <Briefcase className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                    <GlassCard className="gradient-left-border">
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs font-semibold text-accent uppercase tracking-widest">{experience.period}</span>
                          <h3 className="text-xl font-bold text-foreground mt-1">{experience.role}</h3>
                          <p className="text-primary font-semibold text-sm">{experience.company}</p>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">{experience.description}</p>

                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement) => (
                              <li
                                key={achievement}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-accent mt-0.5 text-xs">●</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} label={tech} variant="secondary" className="text-xs" />
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
