import { useRouter } from 'next/navigation'
import { useMemo, useCallback } from 'react'

// 导入翻译文件
import esTranslations from '@/locales/es.json'
import enTranslations from '@/locales/en.json'
import zhTranslations from '@/locales/zh.json'

// 翻译数据
const translations = {
  es: esTranslations,
  en: enTranslations,
  zh: zhTranslations
}

// 支持的语言列表
const supportedLocales = ['es', 'en', 'zh'] as const
type SupportedLocale = typeof supportedLocales[number]

// 验证语言代码是否有效
const isValidLocale = (locale: string): locale is SupportedLocale => {
  return supportedLocales.includes(locale as SupportedLocale)
}

export function useTranslation(lang?: string) {
  const locale = lang && isValidLocale(lang) ? lang : 'es'
  
  // 调试信息
  if (process.env.NODE_ENV === 'development') {
    console.log('useTranslation called with lang:', lang, 'locale:', locale)
  }

  const t = useCallback((key: string, fallback?: string): string => {
    if (!key || typeof key !== 'string') {
      console.warn('Invalid translation key:', key)
      return fallback || key || 'Translation Error'
    }

    const currentTranslations = translations[locale] || translations.es
    const keys = key.split('.')
    let value: unknown = currentTranslations
    
    // 尝试在当前语言中找到翻译
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        // 如果找不到翻译，尝试英文
        const fallbackTranslations = translations.en
        let fallbackValue: unknown = fallbackTranslations
        
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackTranslations) {
            fallbackValue = (fallbackValue as Record<string, unknown>)[fallbackKey]
          } else {
            // 如果英文也找不到，尝试西班牙语
            const spanishTranslations = translations.es
            let spanishValue: unknown = spanishTranslations
            
            for (const spanishKey of keys) {
              if (spanishValue && typeof spanishValue === 'object' && spanishKey in spanishValue) {
                spanishValue = (spanishValue as Record<string, unknown>)[spanishKey]
              } else {
                // 最后的后备方案
                if (process.env.NODE_ENV === 'development') {
                  console.warn('Translation key not found:', key, 'for locale:', locale)
                }
                return fallback || key
              }
            }
            return spanishValue as string || fallback || key
          }
        }
        return fallbackValue as string || fallback || key
      }
    }
    
    // 确保返回字符串
    if (typeof value === 'string') {
      return value
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value)
    } else {
      return fallback || key
    }
  }, [locale])

  // 获取当前语言信息
  const getLocaleInfo = useCallback(() => {
    return {
      locale,
      isSupported: isValidLocale(locale),
      supportedLocales: [...supportedLocales],
      defaultLocale: 'es' as const
    }
  }, [locale])

  // 检查翻译键是否存在
  const hasTranslation = useCallback((key: string): boolean => {
    const keys = key.split('.')
    let value: unknown = translations[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return false
      }
    }
    
    return typeof value === 'string' && value.length > 0
  }, [locale])

  return { 
    t, 
    locale,
    getLocaleInfo,
    hasTranslation,
    supportedLocales: [...supportedLocales]
  }
} 
 