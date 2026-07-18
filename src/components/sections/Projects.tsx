'use client'

import React, { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { ExternalLink, Github } from 'lucide-react'

type ProjectCard = {
  title: string
  description: string
  technologies: string[]
  link: string
  github: string
  category: string
}

const githubProfileUrl = 'https://github.com/abdulbasit23415'

const allProjects: ProjectCard[] = [
  {
    title: 'AI Power Email',
    description: 'AI-powered email marketing platform with AI-generated content, automated campaigns, intelligent A/B testing, follow-ups, and deliverability optimization.',
    technologies: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    link: 'https://aipoweremail.com/',
    github: githubProfileUrl,
    category: 'AI/Full Stack',
  },
  {
    title: 'AI RAG Chatbot',
    description: 'AI-powered customer support platform that lets businesses train and deploy intelligent chatbots using RAG, LLMs, and custom knowledge bases.',
    technologies: ['RAG', 'LLMs', 'Pinecone', 'Next.js', 'Python'],
    link: 'https://airagchatbot.com',
    github: githubProfileUrl,
    category: 'AI',
  },
  {
    title: 'WhatsApp Business Chatbot',
    description: 'Final-year AI-powered WhatsApp chatbot for customer support and business workflow automation with webhooks and multi-user sessions.',
    technologies: ['Python', 'WhatsApp API', 'FastAPI', 'Webhooks'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'AI/Automation',
  },
  {
    title: 'UMT HR & Faculty Management',
    description: 'Web-based portal for HR, faculty, and admin management with responsive UI, routing, and backend communication.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Neon DB'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Full Stack',
  },
  {
    title: 'Instagram Insights Scraper',
    description: 'Full-stack data extraction tool for collecting posts, reels, profiles, and engagement data for analytics.',
    technologies: ['Python', 'FastAPI', 'Apify Crawlee', 'PostgreSQL'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Data Science',
  },
  {
    title: 'Hand Gesture Recognition',
    description: 'Real-time computer vision system using MediaPipe, OpenCV, and CNNs to classify hand gestures.',
    technologies: ['OpenCV', 'MediaPipe', 'CNN', 'Python'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Computer Vision',
  },
  {
    title: 'Crypto Price Prediction',
    description: 'Machine learning system for forecasting cryptocurrency prices with real-time API data and multiple predictive models.',
    technologies: ['Random Forest', 'LSTM', 'ANN', 'Python'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Machine Learning',
  },
  {
    title: 'Library Management System',
    description: 'Team-based Python and SQL application for book records, borrow and return tracking, fines, search, and reporting.',
    technologies: ['Python', 'SQL Server', 'OOP', 'Database Design'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Full Stack',
  },
  {
    title: 'Fashion Connect',
    description: 'Dynamic fashion platform built with Next.js and Strapi CMS for designers to showcase collections and users to browse content.',
    technologies: ['Next.js', 'Strapi CMS', 'TypeScript', 'Zustand'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Full Stack',
  },
]

const categories = ['All', ...Array.from(new Set(allProjects.map((p) => p.category)))]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and creativity."
        />

        {/* Filter tabs */}
        <ScrollReveal direction="up" className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                    : 'glass-card-premium hover:border-accent/30 text-foreground/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              delay={index * 80}
              className="h-full"
            >
              <GlassCard
                className={`h-full flex flex-col ${index === 0 && activeFilter === 'All' ? 'md:col-span-2 lg:col-span-1 border-primary/20' : ''}`}
                tilt
              >
                {/* Project header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-foreground flex-1">
                      {project.title}
                    </h3>
                    <Badge label={project.category} variant="accent" className="ml-2 text-xs" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} label={tech} variant="primary" className="text-xs" />
                  ))}
                </div>

                {/* Links */}
                <div className="pt-4 border-t border-border/30 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary/20 to-accent/20 text-accent rounded-xl hover:from-primary/30 hover:to-accent/30 transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 glass-card-premium rounded-xl hover:border-primary/30 transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2 text-foreground/80"
                  >
                    <Github size={15} />
                    Code
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
