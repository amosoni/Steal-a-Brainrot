'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Calculator, Database, TrendingUp, BookOpen, Play, Users, Trophy, Shield, Zap, Star, Copy, Check, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { use, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import PageSEO from '@/components/PageSEO'
import Script from 'next/script'

// 网络信息接口定义
interface NetworkInformation {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  downlink: number;
  rtt: number;
  saveData: boolean;
}

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params)
  
  // 验证语言参数，确保是支持的语言
  const validLanguages = ['es', 'en', 'zh']
  const currentLang = validLanguages.includes(currentLang) ? currentLang : 'es'
  
  const { t } = useTranslation(currentLang)
  const [copiedScript, setCopiedScript] = useState<string | null>(null)
  const [currentGame, setCurrentGame] = useState('main') // 'main', 'game1'
  const [gameLoadingState, setGameLoadingState] = useState<'loading' | 'timeout' | 'error' | 'loaded' | 'unavailable' | 'available' | 'testing' | 'testingAlt' | 'comprehensiveCheck' | 'networkMonitor'>('loading')
  const [gameLoadTimeout, setGameLoadTimeout] = useState<NodeJS.Timeout | null>(null)

  // 游戏URL映射 - 使用useMemo优化
  const gameUrls = useMemo(() => ({
    main: "https://app-447526.games.s3.yandex.net/447526/f3nbrv390m42ja34gqhu9h6abw0011sm/index.html?sdk=%2Fsdk%2Fv2.c68e1234372250dd975a.js#origin=https%3A%2F2Fplayhop.com&app-id=447526&device-type=desktop",
    game1: "https://app-291696.games.s3.yandex.net/291696/x9n9e72j49hyd5vp176oor871e83datc_brotli/index.html?sdk=%2Fsdk%2F_%2Fv2.c68e1234372250dd975a.js#origin=https%3A%2F2Fplayhop.com&app-id=291696&device-type=desktop"
  }), [])

  // 游戏信息 - 使用useMemo优化
  const gameInfo = useMemo(() => ({
    main: {
      title: 'Steal a Brainrot Original 3D',
      description: currentLang === 'es' ? 'Juego Principal' : 
                   currentLang === 'en' ? 'Main Game' : '主游戏',
      image: '/images/Steal-a-Brainrot-Original-3D.webp',
      video: '/videos/Steal-a-Brainrot-Original-3D.mp4',
      icon: '🎮',
      color: 'from-yellow-400 to-orange-500'
    },
    game1: {
      title: 'Obby: Gym Simulator, Escape',
      description: currentLang === 'es' ? 'Simulador de Gimnasio' : 
                   currentLang === 'en' ? 'Gym Simulator' : '健身房模拟器',
      image: '/images/Obby-Gym-Simulator-Escape.webp',
      video: '/videos/Obby-Gym-Simulator-Escape.mp4',
      icon: '🏋️',
      color: 'from-green-400 to-blue-500'
    }
  }), [currentLang])

  // 从游戏URL中提取app-id
  const getAppIdFromUrl = useCallback((url: string) => {
    const match = url.match(/app-id=(\d+)/)
    return match ? match[1] : '447526' // 默认值
  }, [])

  // 动态更新SDK配置
  const updateSDKConfig = useCallback((gameKey: string) => {
    if (typeof window !== 'undefined') {
      const gameUrl = gameUrls[gameKey as keyof typeof gameUrls]
      const appId = getAppIdFromUrl(gameUrl)
      
      // @ts-expect-error - 动态添加全局变量
      window.appData = {
        appId: appId,
        deviceType: 'desktop',
        origin: 'https://playhop.com'
      }
      
      // @ts-expect-error - 动态添加全局变量
      window.playPageData = {
        gameUrl: gameUrl,
        isEmbedded: true
      }
      
    }
  }, [gameUrls, getAppIdFromUrl])

  // 初始化Yandex Games SDK环境
  useEffect(() => {
    // 模拟playhop.com的全局变量初始化
    if (typeof window !== 'undefined') {
      updateSDKConfig('main')
      
      // @ts-expect-error - 动态添加全局变量
      window.YandexGamesSDK = {
        ready: () => Promise.resolve(),
        init: () => Promise.resolve(),
        features: {
          LoadingAPI: {
            ready: () => Promise.resolve()
          }
        }
      }
    }
  }, [updateSDKConfig])

  // 预加载所有游戏资源
  useEffect(() => {
    const preloadGames = () => {
      const games = Object.values(gameUrls)
      
      games.forEach((gameUrl, index) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'document'
        link.href = gameUrl
        link.id = `game-preload-${index}`
        document.head.appendChild(link)
      })
    }
    
    preloadGames()
  }, [gameUrls])

  // 游戏加载超时处理
  useEffect(() => {
    if (gameLoadingState === 'loading') {
      const timeout = setTimeout(() => {
        setGameLoadingState('timeout')
        // 自动重试一次
        setTimeout(() => {
          retryGameLoad()
        }, 2000)
      }, 30000) // 减少到30秒
      
      setGameLoadTimeout(timeout)
      
      return () => {
        if (timeout) clearTimeout(timeout)
      }
    }
  }, [gameLoadingState])

  // 重置游戏加载状态
  const resetGameLoading = useCallback(() => {
    setGameLoadingState('loading')
    if (gameLoadTimeout) {
      clearTimeout(gameLoadTimeout)
      setGameLoadTimeout(null)
    }
  }, [gameLoadTimeout])

  // 重试加载游戏
  const retryGameLoad = useCallback(() => {
    resetGameLoading()
    
    // 强制刷新iframe
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src
      iframeRef.current.src = ''
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc
        }
      }, 100)
    }
  }, [resetGameLoading])

  // 复制脚本到剪贴板
  const copyToClipboard = useCallback(async (script: string, scriptName: string) => {
    try {
      await navigator.clipboard.writeText(script)
      setCopiedScript(scriptName)
      setTimeout(() => setCopiedScript(null), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }, [])

  // iframe引用
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // iframe加载处理
  const handleIframeLoad = useCallback(() => {
    setGameLoadingState('loaded')
    if (gameLoadTimeout) {
      clearTimeout(gameLoadTimeout)
      setGameLoadTimeout(null)
    }
  }, [gameLoadTimeout])

  // iframe错误处理
  const handleIframeError = useCallback(() => {
    setGameLoadingState('error')
  }, [])

  // 基础功能数据 - 使用useMemo优化
  const features = useMemo(() => [
    {
      title: t('home.features.database.title'),
      description: t('home.features.database.description'),
      icon: Database,
      href: '../brainrots',
      color: 'bg-blue-500'
    },
    {
      title: t('home.features.calculator.title'),
      description: t('home.features.calculator.description'),
      icon: Calculator,
      href: '../calculadora',
      color: 'bg-green-500'
    },
    {
      title: t('home.features.updates.title'),
      description: t('home.features.updates.description'),
      icon: TrendingUp,
      href: '../updates',
      color: 'bg-purple-500'
    },
    {
      title: t('home.features.guides.title'),
      description: t('home.features.guides.description'),
      icon: BookOpen,
      href: '../guides',
      color: 'bg-orange-500'
    }
  ], [t])

  // FAQ数据 - 使用useMemo优化
  const faqs = useMemo(() => [
    {
      question: t('home.faq.protect.question'),
      answer: t('home.faq.protect.answer')
    },
    {
      question: t('home.faq.codes.question'),
      answer: t('home.faq.codes.answer')
    },
    {
      question: t('home.faq.improve.question'),
      answer: t('home.faq.improve.answer')
    },
    {
      question: t('home.faq.rebirths.question'),
      answer: t('home.faq.rebirths.answer')
    }
  ], [t])

  // 脚本数据 - 使用useMemo优化
  const scripts = useMemo(() => [
    {
      name: 'StealEveryone',
      title: t('home.scripts.stealEveryone.title') as string,
      description: t('home.scripts.stealEveryone.description') as string,
      code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/checkurasshole/Script/refs/heads/main/IQ'))();`,
      color: 'blue'
    }
  ], [t])

  return (
    <>
      {/* Yandex Games SDK Scripts - 一比一复制playhop.com的实现 */}
      <Script
        id="yandex-sdk-earlyEvents"
        src="https://sdk.yandexgames.net/sdk-earlyEvents.js"
        strategy="beforeInteractive"
      />
      <Script
        id="yandex-sdk-setup"
        src="https://sdk.yandexgames.net/setup-sdk.js"
        strategy="beforeInteractive"
      />
      <Script
        id="yandex-sdk-frame-event"
        src="https://sdk.yandexgames.net/frame-event.js"
        strategy="beforeInteractive"
      />
      <Script
        id="yandex-sdk-loading-api"
        src="https://sdk.yandexgames.net/loading-api.js"
        strategy="beforeInteractive"
      />
      

      
      <PageSEO
        title={t('home.seo.title') as string}
        description={t('home.seo.description') as string}
        keywords={t('home.seo.keywords') as string}
        url={`/${currentLang}`}
        lang={currentLang}
        type="website"
        contentQuality="expert"
        wordCount={2500}
        readingTime={8}
        difficulty="medium"
        category="Gaming"
        tags={['Steal a Brainrot', 'Roblox', 'Game Guide', 'Brainrot', 'Gaming Tools', 'Steal a Brainrot Roblox', 'Steal a Brainrot online', 'Steal a Brainrot free', 'Brainrot characters', 'Steal a Brainrot guide']}
      />
      <div className="space-y-12">
        {/* Hero Section with Game Embed - 全宽显示 */}
      <section className="relative text-center py-20 rounded-none shadow-xl mb-8 overflow-hidden">
        {/* 毛玻璃背景图片 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/api/images/Steal-a-Brainrot1.webp" 
            alt="Steal a Brainrot Background" 
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 glass-overlay"></div>
        </div>
        {/* 装饰圆 - 修复显示问题 */}
        <div className="absolute top-4 left-4 w-40 h-40 bg-white/30 rounded-full blur-3xl decoration-float z-0" />
        <div className="absolute bottom-4 right-4 w-48 h-48 bg-purple-400/40 rounded-full blur-3xl decoration-float z-0" />
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-400/35 rounded-full blur-2xl decoration-float z-0" />
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-pink-400/35 rounded-full blur-2xl decoration-float z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 游戏标题 - 在游戏上方 */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow mb-3">
              Steal a Brainrot Online
            </h1>
            <h2 className="text-lg md:text-2xl font-bold text-blue-100 drop-shadow">
              🎮 {currentLang === 'es' ? '¡Robar Brainrots Nunca Fue Tan Divertido! | Juego Gratis | Sin Descarga' : 
                   currentLang === 'en' ? 'Steal Brainrots Like Never Before! | Free Online | No Download' : 
                   '偷取脑腐从未如此有趣！| 免费在线 | 无需下载'} 🚀
            </h2>
          </div>
          
          {/* 游戏选择区域 - 左侧 */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* 游戏选择侧边栏 */}
            <div className="w-full lg:w-72 space-y-3">
              <h3 className="text-xl font-bold text-white text-center lg:text-left mb-4">
                {currentLang === 'es' ? 'Seleccionar Juego' : 
                 currentLang === 'en' ? 'Select Game' : 
                 '选择游戏'}
              </h3>
              
              {/* 游戏选项 */}
              <div className="space-y-4">
                {/* 主游戏 - Steal a Brainrot */}
                <div className="relative group">
                  <button
                    onClick={() => {
                      setCurrentGame('main')
                      updateSDKConfig('main')
                      resetGameLoading()
                    }}
                    disabled={gameLoadingState === 'unavailable'}
                    className={`w-full h-44 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                      currentGame === 'main' 
                        ? 'ring-2 ring-blue-400 shadow-xl scale-102' 
                        : 'hover:scale-102 hover:shadow-lg'
                    }`}
                  >
                    {/* 游戏背景图片 */}
                    <div className="relative w-full h-full">
                      <Image
                        src={gameInfo.main.image}
                        alt="Steal a Brainrot"
                        fill
                        className="object-cover"
                      />
                      {/* 渐变遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* 游戏信息 */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-sm shadow-lg">
                            🎮
                          </div>
                          <div>
                            <h4 className="font-bold text-base">Steal a Brainrot</h4>
                            <p className="text-xs opacity-90">
                              {currentLang === 'es' ? 'Juego Principal' : 
                               currentLang === 'en' ? 'Main Game' : 
                               '主游戏'}
                            </p>
                          </div>
                        </div>
                        
                        {/* 状态指示器 */}
                        <div className="flex items-center gap-2">
                          {gameLoadingState === 'loading' && (
                            <>
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-blue-200">
                                {currentLang === 'es' ? 'Cargando...' : 
                                 currentLang === 'en' ? 'Loading...' : 
                                 '加载中...'}
                              </span>
                            </>
                          )}
                          {gameLoadingState === 'loaded' && (
                            <>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-xs text-green-200">
                                {currentLang === 'es' ? 'Listo' : 
                                 currentLang === 'en' ? 'Ready' : 
                                 '就绪'}
                              </span>
                            </>
                          )}
                          {gameLoadingState === 'error' && (
                            <>
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span className="text-xs text-red-200">
                                {currentLang === 'es' ? 'Error' : 
                                 currentLang === 'en' ? 'Error' : 
                                 '错误'}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {/* 视频预览 - 鼠标悬停时显示 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
                    <video
                      src={gameInfo.main.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    {/* 视频上的渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                </div>

                {/* 游戏1 */}
                <div className="relative group">
                  <button
                    onClick={() => {
                      setCurrentGame('game1')
                      updateSDKConfig('game1')
                      resetGameLoading()
                    }}
                    disabled={gameLoadingState === 'unavailable'}
                    className={`w-full h-44 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                      currentGame === 'game1' 
                        ? 'ring-2 ring-green-400 shadow-xl scale-102' 
                        : 'hover:scale-102 hover:shadow-lg'
                    }`}
                  >
                    {/* 游戏背景图片 */}
                    <div className="relative w-full h-full">
                      <Image
                        src={gameInfo.game1.image}
                        alt="Obby: Gym Simulator, Escape"
                        fill
                        className="object-cover"
                      />
                      {/* 渐变遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* 游戏信息 */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-sm shadow-lg">
                            🏋️
                          </div>
                          <div>
                            <h4 className="font-bold text-base">
                              {currentLang === 'es' ? 'Simulador de Gimnasio' : 
                               currentLang === 'en' ? 'Gym Simulator' : 
                               '健身房模拟器'}
                            </h4>
                            <p className="text-xs opacity-90">
                              {currentLang === 'es' ? 'Nuevo Juego' : 
                               currentLang === 'en' ? 'New Game' : 
                               '新游戏'}
                            </p>
                          </div>
                        </div>
                        
                        {/* 状态指示器 */}
                        <div className="flex items-center gap-2">
                          {gameLoadingState === 'loading' && (
                            <>
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-blue-200">
                                {currentLang === 'es' ? 'Cargando...' : 
                                 currentLang === 'en' ? 'Loading...' : 
                                 '加载中...'}
                              </span>
                            </>
                          )}
                          {gameLoadingState === 'loaded' && (
                            <>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-xs text-green-200">
                                {currentLang === 'es' ? 'Listo' : 
                                 currentLang === 'en' ? 'Ready' : 
                                 '就绪'}
                              </span>
                            </>
                          )}
                          {gameLoadingState === 'error' && (
                            <>
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span className="text-xs text-red-200">
                                {currentLang === 'es' ? 'Error' : 
                                 currentLang === 'en' ? 'Error' : 
                                 '错误'}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {/* 视频预览 - 鼠标悬停时显示 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
                    <video
                      src={gameInfo.game1.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    {/* 视频上的渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* 游戏加载提示 */}
              <div className="mt-6 p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
                <p className="text-sm text-blue-200 text-center">
                  {currentLang === 'es' ? '💡 Los juegos embebidos pueden tardar más en cargar que visitar el sitio original. Esto es normal debido a las restricciones de seguridad del navegador.' : 
                   currentLang === 'en' ? '💡 Embedded games may take longer to load than visiting the original site. This is normal due to browser security restrictions.' : 
                   '💡 嵌入游戏可能比访问原网站加载更慢。这是由于浏览器安全限制造成的正常现象。'}
                </p>
              </div>
            </div>

            {/* 游戏嵌入区域 - 右侧 */}
            <div className="flex-1">
              <div className="bg-black rounded-2xl p-2 sm:p-4 shadow-2xl border border-white/20 w-full h-[600px]">
                <div className="relative w-full h-full">
                  {/* 加载状态提示 */}
                  {gameLoadingState === 'loading' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 rounded-xl flex flex-col items-center justify-center text-white z-10">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
                      <p className="text-lg font-semibold mb-2">
                        {currentLang === 'es' ? 'Cargando Juego...' : 
                         currentLang === 'en' ? 'Loading Game...' : 
                         '游戏加载中...'}
                      </p>
                      <p className="text-sm text-blue-200 text-center max-w-xs">
                        {currentLang === 'es' ? 'Por favor espera, el juego se está cargando' : 
                         currentLang === 'en' ? 'Please wait, the game is loading' : 
                         '请稍等，游戏正在加载中'}
                      </p>
                    </div>
                  )}

                  {/* 超时提示 */}
                  {gameLoadingState === 'timeout' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 to-red-900/80 rounded-xl flex flex-col items-center justify-center text-white z-10">
                      <div className="text-6xl mb-4">⏰</div>
                      <p className="text-lg font-semibold mb-2">
                        {currentLang === 'es' ? 'Tiempo de Carga Excedido' : 
                         currentLang === 'en' ? 'Loading Timeout' : 
                         '加载超时'}
                      </p>
                      <p className="text-sm text-orange-200 text-center max-w-xs mb-4">
                        {currentLang === 'es' ? 'El juego está tardando más de lo esperado. Puedes esperar o usar el enlace directo.' : 
                         currentLang === 'en' ? 'The game is taking longer than expected. You can wait or use the direct link.' : 
                         '游戏加载时间超出预期。您可以等待或使用直接链接。'}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={retryGameLoad}
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                          {currentLang === 'es' ? 'Reintentar' : 
                           currentLang === 'en' ? 'Retry' : 
                           '重试'}
                        </button>
                        <a
                          href={gameUrls[currentGame as keyof typeof gameUrls]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                        >
                          {currentLang === 'es' ? 'Abrir Directo' : 
                           currentLang === 'en' ? 'Open Direct' : 
                           '直接打开'}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* 错误提示 */}
                  {gameLoadingState === 'error' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 to-pink-900/80 rounded-xl flex flex-col items-center justify-center text-white z-10">
                      <div className="text-6xl mb-4">❌</div>
                      <p className="text-lg font-semibold mb-2">
                        {currentLang === 'es' ? 'Error al Cargar' : 
                         currentLang === 'en' ? 'Loading Error' : 
                         '加载错误'}
                      </p>
                      <p className="text-sm text-red-200 text-center max-w-xs mb-4">
                        {currentLang === 'es' ? 'No se pudo cargar el juego. Intenta de nuevo o usa el enlace directo.' : 
                         currentLang === 'en' ? 'Could not load the game. Try again or use the direct link.' : 
                         '无法加载游戏。请重试或使用直接链接。'}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={retryGameLoad}
                          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                        >
                          {currentLang === 'es' ? 'Reintentar' : 
                           currentLang === 'en' ? 'Retry' : 
                           '重试'}
                        </button>
                        <a
                          href={gameUrls[currentGame as keyof typeof gameUrls]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                        >
                          {currentLang === 'es' ? 'Abrir Directo' : 
                           currentLang === 'en' ? 'Open Direct' : 
                           '直接打开'}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  <iframe 
                    id="game-frame"
                    ref={iframeRef}
                    src={gameUrls[currentGame as keyof typeof gameUrls]}
                    className="w-full h-full border-0 rounded-lg"
                    allow="accelerometer; gyroscope;"
                    data-allowed-origins="https://playhop.com"
                    data-origin-src={gameUrls[currentGame as keyof typeof gameUrls]}
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                  />
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* 其他内容保持居中 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 新的标题区块 - 原来的 H1、H2 移到这里 */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
            {t('home.title') as string}
            <span className="block text-blue-600 text-2xl md:text-4xl font-bold mt-2">{t('home.subtitle') as string}</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium">
            {t('home.description') as string}
          </p>
          
          {/* SEO优化的关键词区块 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentLang === 'es' ? '¿Qué es Steal a Brainrot?' : 
               currentLang === 'en' ? 'What is Steal a Brainrot?' : 
               '什么是Steal a Brainrot？'}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {currentLang === 'es' ? 
                'Steal a Brainrot es un juego de Roblox extremadamente popular donde los jugadores compiten por robar el valioso objeto "Brainrot" entre sí. Este juego de ritmo rápido combina estrategia, habilidad y suerte para crear una experiencia de juego única y emocionante.' :
               currentLang === 'en' ? 
                'Steal a Brainrot is an extremely popular Roblox game where players compete to steal the valuable "Brainrot" object from each other. This fast-paced game combines strategy, skill, and luck to create a unique and exciting gaming experience.' :
               'Steal a Brainrot是一款极其受欢迎的Roblox游戏，玩家们互相竞争偷取珍贵的"Brainrot"物品。这个快节奏的游戏结合了策略、技巧和运气，创造了独特而令人兴奋的游戏体验。'}
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-blue-600 mb-2">
                  {currentLang === 'es' ? '🎮 Juego Online Gratis' : 
                   currentLang === 'en' ? '🎮 Free Online Game' : 
                   '🎮 免费在线游戏'}
                </h3>
                <p className="text-gray-600">
                  {currentLang === 'es' ? 'Juega Steal a Brainrot completamente gratis en Roblox' :
                   currentLang === 'en' ? 'Play Steal a Brainrot completely free on Roblox' :
                   '在Roblox上完全免费玩Steal a Brainrot'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-green-600 mb-2">
                  {currentLang === 'es' ? '📊 Base de Datos Completa' : 
                   currentLang === 'en' ? '📊 Complete Database' : 
                   '📊 完整数据库'}
                </h3>
                <p className="text-gray-600">
                  {currentLang === 'es' ? 'Más de 100 personajes Brainrot con estadísticas detalladas' :
                   currentLang === 'en' ? 'Over 100 Brainrot characters with detailed statistics' :
                   '超过100个Brainrot角色，包含详细统计'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">
                  {currentLang === 'es' ? '🧮 Calculadora de Ganancias' : 
                   currentLang === 'en' ? '🧮 Profit Calculator' : 
                   '🧮 利润计算器'}
                </h3>
                <p className="text-gray-600">
                  {currentLang === 'es' ? 'Calcula la configuración óptima para maximizar ganancias' :
                   currentLang === 'en' ? 'Calculate optimal setup to maximize profits' :
                   '计算最佳配置以最大化利润'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link key={index} href={feature.href}>
                  <div className={`bg-white rounded-2xl glow card-hover p-7 text-center group cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl ${feature.color}`}
                    style={{boxShadow:'0 4px 24px 0 rgba(99,102,241,0.10)'}}>
                    <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title as string}</h3>
                    <p className="text-gray-600">{feature.description as string}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
        
        {/* Action Buttons */}
        <section className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href={`/${currentLang}/brainrots`}
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-xl font-bold shadow-lg hover:bg-blue-700 transition-colors card-hover animate-float"
              style={{animationDelay:'0.2s'}}
            >
              {t('home.buttons.startExploration') as string}
            </Link>
            <a 
              href="https://www.roblox.com/games/109983668079237/Steal-a-Brainrot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-xl font-bold border-2 border-blue-600 hover:bg-blue-50 transition-colors card-hover animate-float"
              style={{animationDelay:'0.4s'}}
            >
              {t('home.buttons.playNow') as string}
            </a>
          </div>
        </section>

        {/* What is Steal a Brainrot */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.whatIs.title') as string}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                <strong>Steal a Brainrot</strong> {t('home.whatIs.description') as string}
              </p>
              <p className="text-gray-600 mb-4">
                {t('home.whatIs.rules') as string}
              </p>
              <p className="text-gray-600">
                {t('home.whatIs.conclusion') as string}
              </p>
            </div>
            <div className="space-y-4">
              {/* 游戏截图展示 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative w-full h-32">
                  <Image 
                    src="/api/images/Steal-a-Brainrot1.webp" 
                    alt="Steal a Brainrot Screenshot 1" 
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="relative w-full h-32">
                  <Image 
                    src="/api/images/Steal-a-Brainrot2.webp" 
                    alt="Steal a Brainrot Screenshot 2" 
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col gap-4">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">{t('home.gameFeatures.title') as string}</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.fastPaced.title') as string}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.fastPaced.description') as string}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Play className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.simpleControls.title') as string}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.simpleControls.description') as string}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.powerUps.title') as string}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.powerUps.description') as string}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.multiplayer.title') as string}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.multiplayer.description') as string}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.leaderboards.title') as string}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.leaderboards.description') as string}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.customization.title') as string}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.customization.description') as string}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Play */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.howToPlay.title') as string}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('home.howToPlay.objective.title') as string}</h3>
              <p className="text-gray-700 mb-4">
                {t('home.howToPlay.objective.description') as string}
              </p>
              <h3 className="text-xl font-semibold mb-4">{t('home.howToPlay.controls.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>{t('home.howToPlay.controls.movement') as string}:</strong> {t('home.howToPlay.controls.movementDesc') as string}</li>
                <li>• <strong>{t('home.howToPlay.controls.jump') as string}:</strong> {t('home.howToPlay.controls.jumpDesc') as string}</li>
                <li>• <strong>{t('home.howToPlay.controls.steal') as string}:</strong> {t('home.howToPlay.controls.stealDesc') as string}</li>
                <li>• <strong>{t('home.howToPlay.controls.powerups') as string}:</strong> {t('home.howToPlay.controls.powerupsDesc') as string}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('home.howToPlay.powerups.title') as string}</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-blue-600">{t('home.howToPlay.powerups.speed.title') as string}</h4>
                  <p className="text-sm text-gray-600">{t('home.howToPlay.powerups.speed.description') as string}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-purple-600">{t('home.howToPlay.powerups.invisibility.title') as string}</h4>
                  <p className="text-sm text-gray-600">{t('home.howToPlay.powerups.invisibility.description') as string}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-orange-600">{t('home.howToPlay.powerups.fake.title') as string}</h4>
                  <p className="text-sm text-gray-600">{t('home.howToPlay.powerups.fake.description') as string}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Screenshots Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🎮 {t('home.screenshots.title') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <Image 
                  src="/api/images/Steal-a-Brainrot1.webp" 
                  alt="Steal a Brainrot Gameplay 1" 
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{t('home.screenshots.gameOverview.title') as string}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <Image 
                  src="/api/images/Steal-a-Brainrot2.webp" 
                  alt="Steal a Brainrot Gameplay 2" 
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{t('home.screenshots.userInterface.title') as string}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <Image 
                  src="/api/images/Steal-a-Brainrot3.webp" 
                  alt="Steal a Brainrot Gameplay 3" 
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{t('home.screenshots.uniqueCharacters.title') as string}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <Image 
                  src="/api/images/Steal-a-Brainrot4.webp" 
                  alt="Steal a Brainrot Gameplay 4" 
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{t('home.screenshots.constantAction.title') as string}</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl p-8 shadow-xl text-white">
                      <div className="text-4xl font-extrabold mb-2">100+</div>
          <div className="text-lg">{t('home.stats.characters') as string}</div>
        </div>
        <div className="bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-2xl p-8 shadow-xl text-white">
          <div className="text-4xl font-extrabold mb-2">13</div>
          <div className="text-lg">{t('home.stats.rebirthLevels') as string}</div>
        </div>
        <div className="bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 rounded-2xl p-8 shadow-xl text-white">
          <div className="text-4xl font-extrabold mb-2">7</div>
          <div className="text-lg">{t('home.stats.rarityLevels') as string}</div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white/90 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.faq.title') as string}</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{faq.question as string}</h3>
                <p className="text-gray-600 text-base">{faq.answer as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Guides Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.featuredGuides.title') as string}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/segundo-piso`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.secondFloor.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.secondFloor.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/rebirth`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.rebirth.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.rebirth.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/scripts`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.scripts.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.scripts.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/secretos`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.secrets.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.secrets.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/codigos`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.codes.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.codes.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/modificado`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.modified.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.modified.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/scripts`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.scriptsNoKey.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.scriptsNoKey.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/probabilidades`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.probabilities.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.probabilities.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/estrategias`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.advancedStrategies.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.advancedStrategies.description') as string}</p>
              </Link>
            </div>
          </div>
        </section>

        {/* More Steal Games Section */}
        <section className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.moreGames.title') as string}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/steal-a-fish`} className="block">
                <h3 className="text-lg font-semibold text-green-600 mb-3 hover:text-green-700 transition-colors">{t('home.moreGames.stealAFish.title') as string}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('home.moreGames.stealAFish.description') as string}</p>
              </Link>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                <span className="mr-2">🎮</span>
                {t('home.moreGames.bestConsoles') as string}
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/steal-a-labubu`} className="block">
                <h3 className="text-lg font-semibold text-purple-600 mb-3 hover:text-purple-700 transition-colors">{t('home.moreGames.stealALabubu.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealALabubu.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/steal-an-anime`} className="block">
                <h3 className="text-lg font-semibold text-red-600 mb-3 hover:text-red-700 transition-colors">{t('home.moreGames.stealAnAnime.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAnAnime.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/steal-a-pet`} className="block">
                <h3 className="text-lg font-semibold text-orange-500 mb-3 hover:text-orange-600 transition-colors">{t('home.moreGames.stealAPet.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAPet.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/steal-a-meme`} className="block">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3 hover:text-yellow-600 transition-colors">{t('home.moreGames.stealAMeme.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAMeme.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/steal-deadly-rails`} className="block">
                <h3 className="text-lg font-semibold text-red-500 mb-3 hover:text-red-600 transition-colors">{t('home.moreGames.stealDeadlyRails.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealDeadlyRails.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${currentLang}/guides/steal-a-car`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.moreGames.stealACar.title') as string}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('home.moreGames.stealACar.description') as string}</p>
              </Link>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                <span className="mr-2">🎮</span>
                {t('home.moreGames.bestConsoles') as string}
              </a>
            </div>
          </div>
        </section>

                {/* Scripts Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.scripts.title') as string}</h2>
          
          {/* Warning Section */}
          <div className="bg-red-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-red-800 mb-4">{t('home.scripts.warning.title')}</h3>
            <p className="text-red-700 mb-4">{t('home.scripts.warning.description')}</p>
            <div className="bg-white p-4 rounded">
              <ul className="text-red-700 space-y-1">
                {(() => {
                  const warningList = t('home.scripts.warning.list')
                  if (Array.isArray(warningList)) {
                    return warningList.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  }
                  return [
                    "• The use of scripts may result in permanent account ban",
                    "• Scripts may contain malicious code", 
                    "• The use of scripts violates the game's terms of service",
                    "• Use scripts at your own risk"
                  ].map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))
                })()}
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            {scripts.map((script, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-blue-600">
                    {index + 1}. {script.title}
                  </h3>
                  <button
                    onClick={() => copyToClipboard(script.code, script.name)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    {copiedScript === script.name ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        {t('home.scripts.copiedButton')}
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        {t('home.scripts.copyButton')}
                      </>
                    )}
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-4">{script.description}</p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-green-600 font-mono">{script.code}</code>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Scripts Link */}
          <div className="text-center mt-8">
            <Link 
              href={`/${currentLang}/guides/scripts`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('home.scripts.viewMoreButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* More Game Screenshots */}
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✨ {t('home.moreScreenshots.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <Image 
                    src="/api/images/Steal-a-Brainrot1.webp" 
                    alt="Steal a Brainrot Screenshot 1" 
                    fill
                    className="object-cover rounded-lg mb-3"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.gameOverview.title')}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.gameOverview.description')}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <Image 
                    src="/api/images/Steal-a-Brainrot2.webp" 
                    alt="Steal a Brainrot Screenshot 2" 
                    fill
                    className="object-cover rounded-lg mb-3"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.userInterface.title')}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.userInterface.description')}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <Image 
                    src="/api/images/Steal-a-Brainrot3.webp" 
                    alt="Steal a Brainrot Screenshot 3" 
                    fill
                    className="object-cover rounded-lg mb-3"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.uniqueCharacters.title')}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.uniqueCharacters.description')}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <Image 
                    src="/api/images/Steal-a-Brainrot4.webp" 
                    alt="Steal a Brainrot Screenshot 4" 
                    fill
                    className="object-cover rounded-lg mb-3"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.constantAction.title')}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.constantAction.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-extrabold mb-6 drop-shadow">{t('home.cta.title')}</h2>
          <p className="text-2xl mb-8 opacity-90 font-medium">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.roblox.com/games/109983668079237/Steal-a-Brainrot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-xl font-bold border-2 border-white hover:bg-blue-50 hover:text-blue-700 transition-colors card-hover animate-float"
              style={{animationDelay:'0.2s'}}
            >
              {t('home.cta.playNow')}
            </a>
            <Link 
              href={`/${currentLang}/guides`}
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-colors card-hover animate-float"
              style={{animationDelay:'0.4s'}}
            >
              {t('home.cta.viewGuides')}
            </Link>
          </div>
        </section>
      </div>
    </div>
    </>
  )
} 
 