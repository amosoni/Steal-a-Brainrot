'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
]

export default function LanguageSwitcher({ currentLang }: { currentLang?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const currentLocale = currentLang || 'es'

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  const handleLanguageChange = (locale: string) => {
    // 检查当前路径是否包含语言代码
    const pathSegments = pathname.split('/')
    const firstSegment = pathSegments[1]
    
    // 检查第一个段是否是语言代码
    const isLanguageCode = languages.some(lang => lang.code === firstSegment)
    
    let newPath: string
    
    if (isLanguageCode) {
      // 如果路径包含语言代码，替换它
      pathSegments[1] = locale
      newPath = pathSegments.join('/')
    } else {
      // 如果路径不包含语言代码，在开头添加语言代码
      newPath = `/${locale}${pathname}`
    }
    
    console.log('Switching to:', newPath) // 调试日志
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 ${
                  currentLocale === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 
 