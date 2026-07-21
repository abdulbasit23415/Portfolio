import { MetadataRoute } from 'next'

const BASE_URL = 'https://abdulbasit23415.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    // Root — highest priority, the main portfolio page
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Hero / Home section
    {
      url: `${BASE_URL}/#home`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // About — primary entity page for "Who is Abdul Basit?"
    {
      url: `${BASE_URL}/#about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Skills — high value for recruiter searches ("Next.js developer Pakistan")
    {
      url: `${BASE_URL}/#skills`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Projects — portfolio work, updated regularly
    {
      url: `${BASE_URL}/#projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Experience — work history, key for recruiter searches
    {
      url: `${BASE_URL}/#experience`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    // Education — static academic background
    {
      url: `${BASE_URL}/#education`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // Resume download section
    {
      url: `${BASE_URL}/#resume`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // Contact — important for lead generation
    {
      url: `${BASE_URL}/#contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    // Resume PDF — directly indexable downloadable asset
    {
      url: `${BASE_URL}/ABDUL_BASIT_RESUME.pdf`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
