'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'
import { usePathname } from 'next/navigation'

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // 从路径中提取语言代码 - 修复逻辑
  const pathSegments = pathname.split('/')
  let currentLang = 'es' // 默认语言
  
  // 检查第一个段是否是有效的语言代码
  if (pathSegments[1] && ['es', 'en', 'zh'].includes(pathSegments[1])) {
    currentLang = pathSegments[1]
  }
  
  const { t } = useTranslation(currentLang)

  // 根据语言生成正确的导航链接
  const getNavigationPath = (basePath: string) => {
    const mappedPath = pathMappings[currentLang as keyof typeof pathMappings]?.[basePath as keyof typeof pathMappings.es]
    return `/${currentLang}/${mappedPath || basePath}`
  }

  const navigation = [
    { name: t('nav.home'), href: `/${currentLang}`, key: 'home' },
    { name: t('nav.brainrots'), href: getNavigationPath('brainrots'), key: 'brainrots' },
    { name: t('nav.calculator'), href: getNavigationPath('calculadora'), key: 'calculator' },
    { name: t('nav.updates'), href: getNavigationPath('updates'), key: 'updates' },
    { name: t('nav.guides'), href: getNavigationPath('guides'), key: 'guides' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gradient-to-r from-white via-blue-50 to-purple-50 shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${currentLang}`} className="flex items-center group" onClick={closeMenu}>
              {/* 像素化游戏风格Logo */}
              <div className="relative w-12 h-12 mr-3 group-hover:scale-110 transition-transform duration-200">
                {/* 主体 - 像素化方块 */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-md transform rotate-3"></div>
                
                {/* 像素化眼睛 - 白色方块 */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-sm shadow-sm"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-sm shadow-sm"></div>
                
                {/* 像素化瞳孔 - 黑色小方块 */}
                <div className="absolute top-2.5 left-2.5 w-1 h-1 bg-black rounded-sm"></div>
                <div className="absolute top-2.5 right-2.5 w-1 h-1 bg-black rounded-sm"></div>
                
                {/* 像素化嘴巴 - 简单的线条 */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-black rounded-sm"></div>
                
                {/* 像素化装饰 - 小方块 */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-red-500 rounded-sm"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-blue-500 rounded-sm"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-green-500 rounded-sm"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-purple-500 rounded-sm"></div>
                
                {/* 像素化高光 */}
                <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-yellow-200 rounded-sm"></div>
                
                {/* 像素化边框装饰 */}
                <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-pink-400 rounded-sm"></div>
                <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-cyan-400 rounded-sm"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-lime-400 rounded-sm"></div>
                <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-violet-400 rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Steal a Brainrot
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/80 hover:shadow-md group"
                onClick={closeMenu}
              >
                {item.name as string}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher currentLang={currentLang} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-white/80 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white/80 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {item.name as string}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher currentLang={currentLang} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 