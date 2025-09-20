import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stealabrainrot.live'
  const currentDate = new Date().toISOString()
  
  // 基础页面
  const basePages = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // 功能页面
  const featurePages = [
    'brainrots',
    'calculadora',
    'calculator',
    'updates',
    'guides',
  ]

  // 为每种语言生成功能页面
  const allPages: MetadataRoute.Sitemap = [...basePages]
  
  const languages = ['es', 'en', 'zh'] as const
  
  languages.forEach((lang: string) => {
    featurePages.forEach((feature: string) => {
      // 根据语言调整路径
      let path = feature
      if (lang === 'en' && feature === 'calculadora') {
        path = 'calculator'
      } else if (lang === 'zh' && feature === 'calculadora') {
        path = 'calculator'
      }
      
      allPages.push({
        url: `${baseUrl}/${lang}/${path}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    })
  })

  return allPages
} 