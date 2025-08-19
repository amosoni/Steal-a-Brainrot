'use client'
import { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface PageWrapperProps {
  children: ReactNode
  className?: string
  showLoading?: boolean
}

export default function PageWrapper({ children, className = '', showLoading = false }: PageWrapperProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(showLoading)
  const [pageKey, setPageKey] = useState(pathname)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // 当路径改变时，触发页面切换动画
    setPageKey(pathname)
    
    if (showLoading) {
      setIsLoading(true)
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [pathname, showLoading])

  useEffect(() => {
    // 页面进入动画
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [pageKey])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div
      key={pageKey}
      className={`min-h-screen transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  )
} 