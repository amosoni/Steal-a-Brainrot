import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

// 导入翻译文件
import esTranslations from '../locales/es.json'
import enTranslations from '../locales/en.json'
import zhTranslations from '../locales/zh.json'

// 翻译数据
const translations = {
  es: esTranslations,
  en: enTranslations,
  zh: zhTranslations
}

export function useTranslation(lang?: string) {
  const locale = lang || 'en'
  
  // 调试信息
  console.log('useTranslation called with lang:', lang, 'locale:', locale)

  const t = useMemo(() => {
    const currentTranslations = translations[locale as keyof typeof translations] || translations.es
    
    return (key: string) => {
      const keys = key.split('.')
      let value: unknown = currentTranslations
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k]
        } else {
          // 如果找不到翻译，返回英文或西班牙语
          const fallbackTranslations = translations.en
          let fallbackValue: unknown = fallbackTranslations
          
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
              fallbackValue = (fallbackValue as Record<string, unknown>)[fallbackKey]
            } else {
              console.warn('Translation key not found:', key, 'for locale:', locale)
              return key // 如果都找不到，返回原始键
            }
          }
          return fallbackValue
        }
      }
      
      return value || key
    }
  }, [locale])

  return { t, locale }
} 
 