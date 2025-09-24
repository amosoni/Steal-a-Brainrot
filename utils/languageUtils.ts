// 语言工具函数
export const supportedLanguages = ['es', 'en', 'zh'] as const
export type SupportedLanguage = typeof supportedLanguages[number]

// 验证语言代码是否有效
export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return supportedLanguages.includes(lang as SupportedLanguage)
}

// 获取默认语言
export function getDefaultLanguage(): SupportedLanguage {
  return 'es'
}

// 从路径中提取语言代码
export function extractLanguageFromPath(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (isValidLanguage(firstSegment)) {
    return firstSegment
  }
  
  return null
}

// 从Accept-Language头获取首选语言
export function getPreferredLanguageFromHeader(acceptLanguage: string | null): SupportedLanguage {
  if (!acceptLanguage) {
    return getDefaultLanguage()
  }
  
  const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().toLowerCase())
  
  // 检查中文
  if (languages.some(lang => lang.includes('zh') || lang.includes('cn') || lang.includes('tw'))) {
    return 'zh'
  }
  
  // 检查英文
  if (languages.some(lang => lang.includes('en'))) {
    return 'en'
  }
  
  // 默认返回西班牙语
  return 'es'
}

// 生成语言重定向URL
export function generateLanguageRedirectUrl(
  currentUrl: URL, 
  targetLanguage: SupportedLanguage,
  pathname: string
): URL {
  const newUrl = new URL(currentUrl)
  
  // 如果路径已经包含语言代码，替换它
  const currentLang = extractLanguageFromPath(pathname)
  if (currentLang) {
    newUrl.pathname = pathname.replace(`/${currentLang}`, `/${targetLanguage}`)
  } else {
    // 如果路径不包含语言代码，添加语言代码
    newUrl.pathname = `/${targetLanguage}${pathname}`
  }
  
  return newUrl
}
