'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // 获取用户的首选语言
    const getPreferredLanguage = () => {
      if (typeof window !== 'undefined') {
        const acceptLanguage = navigator.language || navigator.languages?.[0] || 'es'
        
        if (acceptLanguage.startsWith('zh')) {
          return 'zh'
        } else if (acceptLanguage.startsWith('en')) {
          return 'en'
        }
      }
      return 'es' // 默认语言
    }

    const preferredLang = getPreferredLanguage()
    
    // 重定向到首选语言页面
    router.replace(`/${preferredLang}`)
  }, [router])

  // 显示加载状�?
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">正在加载...</p>
        <p className="text-sm text-gray-500 mt-2">Loading...</p>
      </div>
    </div>
  )
} 

