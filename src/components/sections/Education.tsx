'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'

const education = [
  {
    period: '2026',
    role: 'Data Science Graduate',
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
    period: '2022',
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
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and foundational training."
        />

        <div className="space-y-6">
          {education.map((item, index) => (
            <ScrollReveal
              key={item.company}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <GlassCard>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:border-r border-border/50 pr-6">
                    <div className="text-sm font-semibold text-accent mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.role}
                    </h3>
                    <p className="text-primary font-semibold">{item.company}</p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement) => (
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

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
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