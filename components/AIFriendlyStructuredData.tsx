'use client'

interface AIFriendlyStructuredDataProps {
  title: string
  description: string
  url: string
  type: 'article' | 'guide' | 'game' | 'tool'
  author: string
  publishedTime?: string
  modifiedTime?: string
  keywords?: string[]
  language: string
  contentQuality: 'expert' | 'intermediate' | 'beginner'
  wordCount?: number
  readingTime?: number
  difficulty?: 'easy' | 'medium' | 'hard'
  category: string
  tags?: string[]
}

export default function AIFriendlyStructuredData({
  title,
  description,
  url,
  type,
  author,
  publishedTime,
  modifiedTime,
  keywords = [],
  language,
  contentQuality,
  wordCount,
  readingTime,
  difficulty,
  category,
  tags = []
}: AIFriendlyStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? "Article" : type === 'guide' ? "HowTo" : type === 'game' ? "VideoGame" : "WebApplication",
    "headline": title,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Steal a Brainrot Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://steal-a-brainrot.com/favicon.svg"
      }
    },
    "inLanguage": language,
    "isAccessibleForFree": true,
    "contentQuality": contentQuality,
    "educationalLevel": difficulty,
    "about": {
      "@type": "Thing",
      "name": category
    },
    "keywords": keywords.join(", "),
    "wordCount": wordCount,
    "timeRequired": readingTime ? `PT${readingTime}M` : undefined,
    "mainEntity": {
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": url
    },
    "mentions": tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    })),
    ...(publishedTime && {
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime
    }),
    // AI友好的额外属性
    "aiFriendly": true,
    "contentType": type,
    "targetAudience": "roblox-players,gamers",
    "updateFrequency": "regular",
    "contentDepth": contentQuality,
    "interactivityType": "active",
    "learningResourceType": type === 'guide' ? "tutorial" : "reference",
    "educationalUse": ["self-study", "reference"],
    "accessibilityFeature": ["readingOrder", "structuralNavigation", "tableOfContents"],
    "accessibilityHazard": "none",
    "accessibilityControl": ["fullKeyboardControl", "fullMouseControl"],
    "accessibilityAPI": "ARIA"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
} 