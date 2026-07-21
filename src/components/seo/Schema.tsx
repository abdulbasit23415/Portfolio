import React from 'react'

export function Schema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdul Basit',
    jobTitle: 'AI Engineer & Full-Stack Developer',
    url: 'https://abdulbasit23415.vercel.app',
    sameAs: [
      'https://github.com/abdulbasit23415',
      'https://linkedin.com/in/abdulbasit-kashif0003',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Full-Stack Development',
      'Next.js',
      'Python',
      'Data Science',
      'RAG Pipelines',
      'LLMs',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Information Technology University (ITU)',
    },
    mainEntityOfPage: {
      '@type': 'WebSite',
      '@id': 'https://abdulbasit23415.vercel.app/#website',
      url: 'https://abdulbasit23415.vercel.app',
      name: 'Abdul Basit Portfolio',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
