import { MetadataRoute } from 'next'
import { brainrots } from '@/data/brainrots'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stealabrainrot.live'
  const currentDate = new Date().toISOString()
  
  // 基础页面 - 提高优先级
  const basePages = [
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0, // 最高优先级
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0, // 最高优先级
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0, // 最高优先级
    },
    // 添加根域名重定向
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // 功能页面
  const featurePages = [
    // 'brainrots' 由下面的动态分页生成
    'calculadora',
    'calculator',
    'updates',
    'guides',
  ]

  // 指南页面 - 高SEO价值
  const guidePages = [
    'segundo-piso',
    'second-floor', 
    'rebirth',
    'scripts',
    'scripts-no-key',
    'probabilidades',
    'probabilities',
    'estrategias',
    'advanced-strategies',
    'secretos',
    'secrets',
    'codigos',
    'codes',
    'modificado',
    'modified',
    'steal-a-fish',
    'steal-a-labubu',
    'steal-an-anime',
    'steal-a-pet',
    'steal-a-meme',
    'steal-deadly-rails',
    'steal-a-car'
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

    // 添加指南页面
    guidePages.forEach((guide: string) => {
      allPages.push({
        url: `${baseUrl}/${lang}/guides/${guide}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    })

    // 动态为 brainrots 列表页添加分页 URL（与前端每页条数保持一致：12）
    const itemsPerPage = 12
    const totalItems = brainrots.length
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage))
    for (let page = 1; page <= totalPages; page++) {
      const pageSuffix = page === 1 ? '' : `?page=${page}`
      allPages.push({
        url: `${baseUrl}/${lang}/brainrots${pageSuffix}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: page === 1 ? 0.8 : 0.6,
      })
    }

    // 添加个体角色页面 - 高SEO价值
    brainrots.forEach((brainrot) => {
      allPages.push({
        url: `${baseUrl}/${lang}/brainrots/${brainrot.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  })

  return allPages
} 