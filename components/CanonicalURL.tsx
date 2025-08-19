'use client'
import { usePathname } from 'next/navigation'

export default function CanonicalURL() {
  const pathname = usePathname()
  const baseUrl = 'https://www.stealabrainrot.live'
  
  // 构建规范URL
  const canonicalUrl = `${baseUrl}${pathname}`
  
  // 构建hreflang链接
  const getHreflangUrl = (targetLang: string) => {
    const pathSegments = pathname.split('/')
    if (pathSegments[1] && ['es', 'en', 'zh'].includes(pathSegments[1])) {
      pathSegments[1] = targetLang
      return `${baseUrl}${pathSegments.join('/')}`
    }
    return `${baseUrl}/${targetLang}${pathname}`
  }
  
  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es" href={getHreflangUrl('es')} />
      <link rel="alternate" hrefLang="en" href={getHreflangUrl('en')} />
      <link rel="alternate" hrefLang="zh" href={getHreflangUrl('zh')} />
      <link rel="alternate" hrefLang="x-default" href={getHreflangUrl('es')} />
    </>
  )
} 