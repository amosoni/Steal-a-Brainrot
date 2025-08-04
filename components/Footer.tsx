'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const pathname = usePathname()
  
  // 从路径中提取语言代码
  const pathSegments = pathname.split('/')
  let currentLang = 'es' // 默认语言
  
  // 检查第一个段是否是有效的语言代码
  if (pathSegments[1] && ['es', 'en', 'zh'].includes(pathSegments[1])) {
    currentLang = pathSegments[1]
  }
  
  const { t } = useTranslation(currentLang)

  return (
    <footer className="bg-gradient-to-r from-white via-blue-50 to-purple-50 shadow-lg border-t border-gray-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href={`/${currentLang}`} className="flex items-center group">
              {/* 像素化游戏风格Logo - 与导航栏一致 */}
              <div className="relative w-10 h-10 mr-3 group-hover:scale-110 transition-transform duration-200">
                {/* 主体 - 像素化方块 */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-md transform rotate-3"></div>
                
                {/* 像素化眼睛 - 白色方块 */}
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-white rounded-sm shadow-sm"></div>
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-sm shadow-sm"></div>
                
                {/* 像素化瞳孔 - 黑色小方块 */}
                <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-black rounded-sm"></div>
                <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-black rounded-sm"></div>
                
                {/* 像素化嘴巴 - 简单的线条 */}
                <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-black rounded-sm"></div>
                
                {/* 像素化装饰 - 小方块 */}
                <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-red-500 rounded-sm"></div>
                <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-blue-500 rounded-sm"></div>
                <div className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-green-500 rounded-sm"></div>
                <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-purple-500 rounded-sm"></div>
                
                {/* 像素化高光 */}
                <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-yellow-200 rounded-sm"></div>
                
                {/* 像素化边框装饰 */}
                <div className="absolute -top-0.5 -left-0.5 w-0.5 h-0.5 bg-pink-400 rounded-sm"></div>
                <div className="absolute -top-0.5 -right-0.5 w-0.5 h-0.5 bg-cyan-400 rounded-sm"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-lime-400 rounded-sm"></div>
                <div className="absolute -bottom-0.5 -right-0.5 w-0.5 h-0.5 bg-violet-400 rounded-sm"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Steal a Brainrot
              </span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} Steal a Brainrot. {t('footer.allRightsReserved')}.
          </div>

          {/* Links Section */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.roblox.com/games/109983668079237/Steal-a-Brainrot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-200 rounded-lg px-3 py-2 hover:bg-white/80 hover:shadow-md group relative"
            >
              {t('footer.playOnRoblox')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="https://twitter.com/StealABrainrot" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-200 rounded-lg px-3 py-2 hover:bg-white/80 hover:shadow-md group relative"
            >
              Twitter
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="https://discord.gg/stealabrainrot" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-200 rounded-lg px-3 py-2 hover:bg-white/80 hover:shadow-md group relative"
            >
              Discord
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 