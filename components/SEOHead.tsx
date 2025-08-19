'use client'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  lang?: string
  noindex?: boolean
  canonical?: string
}

export default function SEOHead({
  title = 'Steal a Brainrot - La Guía Más Completa de Roblox',
  description = '🎮 La herramienta definitiva para Steal a Brainrot en Roblox. Base de datos completa de personajes, calculadora de ganancias, guías de estrategia y consejos expertos.',
  keywords = ['Steal a Brainrot', 'Roblox', 'Brainrot', 'Personajes', 'Calculadora', 'Guía', 'Estrategias'],
  image = '/og-image.jpg',
  url,
  lang = 'es',
  noindex = false,
  canonical
}: SEOHeadProps) {
  const pathname = usePathname()
  const baseUrl = 'https://www.stealabrainrot.live'
  const fullUrl = url || `${baseUrl}${pathname}`
  const canonicalUrl = canonical || fullUrl
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  // 根据语言设置hreflang
  const getHreflangUrl = (targetLang: string) => {
    const pathSegments = pathname.split('/')
    if (pathSegments[1] && ['es', 'en', 'zh'].includes(pathSegments[1])) {
      pathSegments[1] = targetLang
      return `${baseUrl}${pathSegments.join('/')}`
    }
    return `${baseUrl}/${targetLang}${pathname}`
  }

  return (
    <Head>
      {/* 基本元数据 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Steal a Brainrot Team" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* 语言和区域设置 */}
      <meta httpEquiv="Content-Language" content={lang} />
      <meta name="language" content={lang} />
      
      {/* 规范URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang标签 */}
      <link rel="alternate" hrefLang="es" href={getHreflangUrl('es')} />
      <link rel="alternate" hrefLang="en" href={getHreflangUrl('en')} />
      <link rel="alternate" hrefLang="zh" href={getHreflangUrl('zh')} />
      <link rel="alternate" hrefLang="x-default" href={getHreflangUrl('es')} />
      
      {/* Open Graph标签 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Steal a Brainrot" />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'zh_CN'} />
      
      {/* Twitter Card标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@stealabrainrot" />
      <meta name="twitter:creator" content="@stealabrainrot" />
      
      {/* 其他重要元数据 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Steal a Brainrot" />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": fullUrl,
            "inLanguage": lang,
            "isPartOf": {
              "@type": "WebSite",
              "name": "Steal a Brainrot",
              "url": baseUrl,
              "publisher": {
                "@type": "Organization",
                "name": "Steal a Brainrot Team",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/favicon.svg`
                }
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": `${baseUrl}/${lang}`
                }
              ]
            }
          })
        }}
      />
    </Head>
  )
} 