import React from 'react'

export function Schema() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://abdulbasit23415.vercel.app/#person',
    name: 'Abdul Basit',
    jobTitle: 'AI Engineer & Full-Stack Developer',
    url: 'https://abdulbasit23415.vercel.app',
    image: {
      '@type': 'ImageObject',
      url: 'https://abdulbasit23415.vercel.app/profile-v2.png',
      width: 800,
      height: 800,
      caption: 'Abdul Basit - AI Engineer & Full-Stack Developer',
    },
    email: 'kashifabdulbasit@gmail.com',
    telephone: '+92-319-153-3977',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://github.com/abdulbasit23415',
      'https://linkedin.com/in/abdulbasit-kashif0003',
      'mailto:kashifabdulbasit@gmail.com',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Excels Tech Solution LLC',
      url: 'https://excelstechsolution.com',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Information Technology University (ITU)',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressCountry: 'PK',
      },
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Full-Stack Development',
      'Next.js',
      'Python',
      'Data Science',
      'FastAPI',
      'Computer Vision',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'AI Engineer',
      description: 'Develops AI-powered web applications, RAG pipelines, and automation solutions.',
      occupationLocation: {
        '@type': 'Country',
        name: 'Pakistan',
      },
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://abdulbasit23415.vercel.app/#website',
    url: 'https://abdulbasit23415.vercel.app',
    name: 'Abdul Basit Portfolio',
    description: 'Portfolio of Abdul Basit: AI Engineer & Full-Stack Developer specializing in LLMs, RAG pipelines, and modern web applications.',
    author: {
      '@id': 'https://abdulbasit23415.vercel.app/#person',
    },
    inLanguage: 'en-US',
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://abdulbasit23415.vercel.app/#profilepage',
    url: 'https://abdulbasit23415.vercel.app',
    name: 'Abdul Basit: AI Engineer & Full-Stack Developer Portfolio',
    isPartOf: {
      '@id': 'https://abdulbasit23415.vercel.app/#website',
    },
    dateCreated: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    about: {
      '@id': 'https://abdulbasit23415.vercel.app/#person',
    },
    mainEntity: {
      '@id': 'https://abdulbasit23415.vercel.app/#person',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  )
}
