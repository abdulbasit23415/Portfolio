import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { ExternalLink } from 'lucide-react'

type GitHubRepo = {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics?: string[]
  fork: boolean
  archived?: boolean
}

type ProjectCard = {
  title: string
  description: string
  technologies: string[]
  link: string
  github: string
  category: string
}

const githubProfileUrl = 'https://github.com/abdulbasit23415'

const resumeProjects: ProjectCard[] = [
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
    title: 'UMT HR and Faculty Management System',
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
    title: 'Hand Gesture Recognition Computer Vision',
    description: 'Real-time computer vision system using MediaPipe, OpenCV, and CNNs to classify hand gestures.',
    technologies: ['OpenCV', 'MediaPipe', 'CNN', 'Python'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Computer Vision',
  },
  {
    title: 'Crypto Price Prediction ML System',
    description: 'Machine learning system for forecasting cryptocurrency prices with real-time API data and multiple predictive models.',
    technologies: ['Random Forest', 'LSTM', 'ANN', 'Python'],
    link: githubProfileUrl,
    github: githubProfileUrl,
    category: 'Machine Learning',
  },
  {
    title: 'Library Management System Python & SQL',
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

const githubUsername = 'abdulbasit23415'

function toTitle(name: string) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase())
}

function uniqueTechnologies(language: string | null, topics: string[] | undefined) {
  return Array.from(new Set([language, ...(topics || [])].filter(Boolean))).slice(0, 4) as string[]
}

function projectKey(project: ProjectCard) {
  return project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function mergeProjects(manualProjectsList: ProjectCard[], githubProjectsList: ProjectCard[]) {
  const merged = new Map<string, ProjectCard>()

  for (const project of [...manualProjectsList, ...githubProjectsList]) {
    const key = projectKey(project)
    if (!merged.has(key)) {
      merged.set(key, project)
    }
  }

  return Array.from(merged.values())
}

async function getGitHubProjects(): Promise<ProjectCard[]> {
  const token = (process.env.gittoken || process.env.GITHUB_TOKEN || '').replace(/^['"]|['"]$/g, '')

  if (!token) {
    return []
  }

  try {
    const response = await fetch('https://api.github.com/user/repos?per_page=6&sort=updated&direction=desc&affiliation=owner', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`)
    }

    const repos = (await response.json()) as GitHubRepo[]

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, 6)
      .map((repo) => ({
        title: toTitle(repo.name),
        description: repo.description || 'Repository published on GitHub.',
        technologies: uniqueTechnologies(repo.language, repo.topics),
        link: repo.homepage || repo.html_url,
        github: repo.html_url,
        category: 'GitHub',
      }))
  } catch (error) {
    console.error(`Failed to load GitHub projects for ${githubUsername}:`, error)
    return []
  }
}

export async function ProjectsSection() {
  const githubProjects = await getGitHubProjects()
  const projects = mergeProjects(resumeProjects, githubProjects)

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and creativity."
        />

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              delay={index * 100}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col">
                {/* Project header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-foreground flex-1">
                      {project.title}
                    </h3>
                    <Badge label={project.category} variant="accent" className="ml-2" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} label={tech} variant="primary" className="text-xs" />
                  ))}
                </div>

                {/* Links */}
                <div className="pt-4 border-t border-border/50">
                  <a
                    href={project.link}
                    className="w-full px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors duration-300 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View
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
