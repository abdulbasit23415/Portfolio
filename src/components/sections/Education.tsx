'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    period: '2022 – 2026',
    role: 'BS in Data Science',
    company: 'Superior University',
    description: 'Completed comprehensive BS in Data Science with focus on ML, data analysis, and predictive modeling.',
    achievements: [
      'Specialized in machine learning and statistical modeling',
      'Completed multiple real-world projects in data analysis',
      'Gained hands-on experience with data manipulation and visualization',
      'Integrated AI and Data Science techniques in full-stack applications',
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    period: '2019 – 2022',
    role: 'ICS in Physics',
    company: 'Punjab Group of College',
    description: 'Foundation in physics with comprehensive introduction to computer science and programming.',
    achievements: [
      'Strong foundation in computer science fundamentals',
      'Introduction to programming and algorithms',
      'Developed problem-solving skills in STEM',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'C++'],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and foundational training."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <ScrollReveal
                key={item.company}
                direction="left"
                delay={index * 150}
              >
                <div className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 z-10">
                    <div className="timeline-dot flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="ml-10 flex-1">
                    <GlassCard className="gradient-left-border">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:border-r border-border/30 pr-6">
                          <span className="text-xs font-semibold text-accent uppercase tracking-widest">{item.period}</span>
                          <h3 className="text-xl font-bold text-foreground mt-1">{item.role}</h3>
                          <p className="text-primary font-semibold text-sm mt-1">{item.company}</p>
                        </div>

                        <div className="md:col-span-2">
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>

                          <div className="mb-4">
                            <h4 className="font-semibold text-foreground text-sm mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement) => (
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

                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <Badge key={tech} label={tech} variant="secondary" className="text-xs" />
                            ))}
                          </div>
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