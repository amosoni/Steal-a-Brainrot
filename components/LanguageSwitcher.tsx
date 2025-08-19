'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
]

// 路径映射配置
const pathMappings = {
  'es': {
    'calculadora': 'calculadora',
    'brainrots': 'brainrots',
    'updates': 'updates',
    'guides': 'guides'
  },
  'en': {
    'calculadora': 'calculator',
    'brainrots': 'brainrots',
    'updates': 'updates',
    'guides': 'guides'
  },
  'zh': {
    'calculadora': 'calculator',
    'brainrots': 'brainrots',
    'updates': 'updates',
    'guides': 'guides'
  }
}

export default function LanguageSwitcher({ currentLang }: { currentLang?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const currentLocale = currentLang || 'es'

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  const handleLanguageChange = (locale: string) => {
    try {
      // 检查当前路径是否包含语言代码
      const pathSegments = pathname.split('/')
      const firstSegment = pathSegments[1]
      
      // 检查第一个段是否是语言代码
      const isLanguageCode = languages.some(lang => lang.code === firstSegment)
      
      let newPath: string
      
      if (isLanguageCode) {
        // 如果路径包含语言代码，替换它并调整路径
        pathSegments[1] = locale
        
        // 处理特殊路径映射
        if (pathSegments[2]) {
          const currentPath = pathSegments[2]
          const targetPath = pathMappings[locale as keyof typeof pathMappings]?.[currentPath as keyof typeof pathMappings.es]
          
          if (targetPath && targetPath !== currentPath) {
            pathSegments[2] = targetPath
          }
        }
        
        newPath = pathSegments.join('/')
      } else {
        // 如果路径不包含语言代码，在开头添加语言代码
        newPath = `/${locale}${pathname}`
      }
      
      console.log('Switching to:', newPath) // 调试日志
      router.push(newPath)
      setIsOpen(false)
    } catch (error) {
      console.error('Error switching language:', error)
      // 降级处理：直接跳转到语言首页
      router.push(`/${locale}`)
      setIsOpen(false)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-200 shadow-sm hover:shadow-md text-gray-700 hover:text-blue-600"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center space-x-3 ${
                  currentLocale === language.code 
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-r-4 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-label={`Switch to ${language.name}`}
              >
                <span className="text-xl">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 
 