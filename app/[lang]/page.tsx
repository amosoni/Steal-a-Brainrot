'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Calculator, Database, TrendingUp, BookOpen, Play, Users, Trophy, Shield, Zap, Star, Copy, Check, ArrowRight } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { use, useState } from 'react'
import PageSEO from '../../components/PageSEO'

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params)
  const { t } = useTranslation(resolvedParams.lang)
  const [copiedScript, setCopiedScript] = useState<string | null>(null)

  // 复制脚本到剪贴板
  const copyToClipboard = async (script: string, scriptName: string) => {
    try {
      await navigator.clipboard.writeText(script)
      setCopiedScript(scriptName)
      setTimeout(() => setCopiedScript(null), 2000)
    } catch (err) {
      console.error('Failed to copy script:', err)
    }
  }

  // 脚本数据
  const scripts = [
    {
      name: 'StealEveryone',
      title: t('home.scripts.stealEveryone.title') as string,
      description: t('home.scripts.stealEveryone.description') as string,
      code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/checkurasshole/Script/refs/heads/main/IQ'))();`,
      color: 'blue'
    },
    {
      name: 'GumanbaScript',
      title: t('home.scripts.gumanbaScript.title') as string,
      description: t('home.scripts.gumanbaScript.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/gumanba/Scripts/refs/heads/main/StealaBrainrot", true))()`,
      color: 'green'
    },
    {
      name: 'LaserhunScript',
      title: t('home.scripts.laserhunScript.title') as string,
      description: t('home.scripts.laserhunScript.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Hamza3270308/Stealabrainrot/refs/heads/main/Laserhun.lua"))()`,
      color: 'purple'
    },
    {
      name: 'EasyCash',
      title: t('home.scripts.easyCash.title') as string,
      description: t('home.scripts.easyCash.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/gumanba/Scripts/main/StealaBrainrot"))()`,
      color: 'orange'
    },
    {
      name: 'QuantumPulsar',
      title: t('home.scripts.quantumPulsar.title') as string,
      description: t('home.scripts.quantumPulsar.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Estevansit0/KJJK/refs/heads/main/PusarX-loader.lua"))()`,
      color: 'red'
    },
    {
      name: 'ScriptBlox',
      title: t('home.scripts.scriptBlox.title') as string,
      description: t('home.scripts.scriptBlox.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Akbar123s/Script-Roblox-/refs/heads/main/Script%20Brainrot%20New"))()`,
      color: 'indigo'
    },
    {
      name: 'AutoLockCollect',
      title: t('home.scripts.autoLockCollect.title') as string,
      description: t('home.scripts.autoLockCollect.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Hamza3270308/Stealabrainrot/refs/heads/main/StealScript.lua", true))()`,
      color: 'pink'
    },
    {
      name: 'LegendHub',
      title: t('home.scripts.legendHub.title') as string,
      description: t('home.scripts.legendHub.description') as string,
      code: `loadstring(game:HttpGet("https://scripts.city/LegendHub.lua"))()`,
      color: 'yellow'
    },
    {
      name: 'FeronikHub',
      title: t('home.scripts.feronikHub.title') as string,
      description: t('home.scripts.feronikHub.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Fenorik/FenorikHub/refs/heads/main/FenorikHubINIT.lua"))()`,
      color: 'teal'
    },
    {
      name: 'ForkT3',
      title: t('home.scripts.forkT3.title') as string,
      description: t('home.scripts.forkT3.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/forkT3/Steal-a-Brianrot/main/Steal-A-Brianrot.lua"))()`,
      color: 'cyan'
    },
    {
      name: 'OPScript',
      title: t('home.scripts.opScript.title') as string,
      description: t('home.scripts.opScript.description') as string,
      code: `loadstring(game:HttpGet("https://pastebin.com/raw/mccy77qw")`,
      color: 'lime'
    },
    {
      name: 'Polaris',
      title: t('home.scripts.polaris.title') as string,
      description: t('home.scripts.polaris.description') as string,
      code: `loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/d7be76c234d46ce6770101fded39760c.lua"))()`,
      color: 'amber'
    },
    {
      name: 'KeylessOP',
      title: t('home.scripts.keylessOP.title') as string,
      description: t('home.scripts.keylessOP.description') as string,
      code: `loadstring(game:HttpGet("https://pastefy.app/Zk7UIkDN/raw"))()`,
      color: 'emerald'
    },
    {
      name: 'LockBaseAutoSell',
      title: t('home.scripts.lockBaseAutoSell.title') as string,
      description: t('home.scripts.lockBaseAutoSell.description') as string,
      code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/Silentoffa/nullptr/refs/heads/main/hub'))()`,
      color: 'rose'
    },
    {
      name: 'CrawlChicken',
      title: t('home.scripts.crawlChicken.title') as string,
      description: t('home.scripts.crawlChicken.description') as string,
      code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/checkurasshole/Script/refs/heads/main/IQ'))();`,
      color: 'violet'
    },
    {
      name: 'FeronikHubAlt',
      title: t('home.scripts.feronikHubAlt.title') as string,
      description: t('home.scripts.feronikHubAlt.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Fenorik/FenorikHub/main/FenorikHubINIT.lua"))()`,
      color: 'fuchsia'
    },
    {
      name: 'GhostHub',
      title: t('home.scripts.ghostHub.title') as string,
      description: t('home.scripts.ghostHub.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Akbar123s/Script-Roblox-/main/Script%20Brainrot%20New"))()`,
      color: 'slate'
    },
    {
      name: 'QuantumPulsarAlt',
      title: t('home.scripts.quantumPulsarAlt.title') as string,
      description: t('home.scripts.quantumPulsarAlt.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Estevansit0/KJJK/main/PusarX-loader.lua"))()`,
      color: 'stone'
    },
    {
      name: 'SilentScript',
      title: t('home.scripts.silentScript.title') as string,
      description: t('home.scripts.silentScript.description') as string,
      code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/Silentoffa/nullptr/main/hub'))()`,
      color: 'zinc'
    },
    {
      name: 'LaserhunFinal',
      title: t('home.scripts.laserhunFinal.title') as string,
      description: t('home.scripts.laserhunFinal.description') as string,
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Hamza3270308/Stealabrainrot/main/StealScript.lua", true))()`,
      color: 'neutral'
    }
  ]

  const features = [
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
  ]

  const gameFeatures = [
    { icon: Zap, title: t('home.gameFeatures.fastPaced.title'), desc: t('home.gameFeatures.fastPaced.description') },
    { icon: Play, title: t('home.gameFeatures.simpleControls.title'), desc: t('home.gameFeatures.simpleControls.description') },
    { icon: Shield, title: t('home.gameFeatures.powerUps.title'), desc: t('home.gameFeatures.powerUps.description') },
    { icon: Users, title: t('home.gameFeatures.multiplayer.title'), desc: t('home.gameFeatures.multiplayer.description') },
    { icon: Trophy, title: t('home.gameFeatures.leaderboards.title'), desc: t('home.gameFeatures.leaderboards.description') },
    { icon: Star, title: t('home.gameFeatures.customization.title'), desc: t('home.gameFeatures.customization.description') }
  ]

  const faqs = [
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
  ]

  return (
    <>
      <PageSEO
        title={t('home.seo.title') as string}
        description={t('home.seo.description') as string}
        keywords={t('home.seo.keywords') as string}
        url={`/${resolvedParams.lang}`}
        lang={resolvedParams.lang}
        type="website"
        contentQuality="expert"
        wordCount={1500}
        readingTime={5}
        difficulty="medium"
        category="Gaming"
        tags={['Steal a Brainrot', 'Roblox', 'Game Guide', 'Brainrot', 'Gaming Tools']}
      />
      <div className="space-y-12">
        {/* Hero Section with Features - 全宽显示 */}
      <section className="relative text-center py-20 rounded-none shadow-xl mb-8 overflow-hidden">
        {/* 毛玻璃背景图片 */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/api/images/Steal-a-Brainrot1.webp" 
            alt="Steal a Brainrot Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 glass-overlay"></div>
        </div>
        {/* 装饰圆 - 修复显示问题 */}
        <div className="absolute top-4 left-4 w-40 h-40 bg-white/30 rounded-full blur-3xl decoration-float z-0" />
        <div className="absolute bottom-4 right-4 w-48 h-48 bg-purple-400/40 rounded-full blur-3xl decoration-float z-0" />
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-400/35 rounded-full blur-2xl decoration-float z-0" />
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-pink-400/35 rounded-full blur-2xl decoration-float z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow mb-6 relative z-10">
            {t('home.title') as string}
            <span className="block text-blue-100 text-2xl md:text-4xl font-bold mt-2">{t('home.subtitle') as string}</span>
          </h1>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium relative z-10">
            {t('home.description') as string}
          </p>
          
          {/* Features Grid in Hero */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 relative z-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link key={index} href={feature.href}>
                  <div className={`bg-white/90 rounded-2xl glow card-hover p-7 text-center group cursor-pointer transition-all duration-200 ${feature.color}`}
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link 
              href={`/${resolvedParams.lang}/brainrots`}
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
        </div>
      </section>

      {/* 其他内容保持居中 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <img src="/api/images/Steal-a-Brainrot1.webp" alt="Steal a Brainrot Screenshot 1" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
                </div>
                <div className="relative w-full h-32">
                  <img src="/api/images/Steal-a-Brainrot2.webp" alt="Steal a Brainrot Screenshot 2" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
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
                <img src="/api/images/Steal-a-Brainrot1.webp" alt="Steal a Brainrot Gameplay 1" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{t('home.screenshots.gameOverview.title') as string}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <img src="/api/images/Steal-a-Brainrot2.webp" alt="Steal a Brainrot Gameplay 2" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{t('home.screenshots.userInterface.title') as string}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <img src="/api/images/Steal-a-Brainrot3.webp" alt="Steal a Brainrot Gameplay 3" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{t('home.screenshots.uniqueCharacters.title') as string}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <img src="/api/images/Steal-a-Brainrot4.webp" alt="Steal a Brainrot Gameplay 4" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
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
              <Link href={`/${resolvedParams.lang}/guides/segundo-piso`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.secondFloor.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.secondFloor.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/rebirth`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.rebirth.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.rebirth.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/scripts`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.scripts.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.scripts.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/secretos`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.secrets.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.secrets.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/codigos`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.codes.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.codes.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/modificado`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.modified.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.modified.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/scripts`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.scriptsNoKey.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.scriptsNoKey.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/probabilidades`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.probabilities.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.probabilities.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/estrategias`} className="block">
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
              <Link href={`/${resolvedParams.lang}/guides/steal-a-fish`} className="block">
                <h3 className="text-lg font-semibold text-green-600 mb-3 hover:text-green-700 transition-colors">{t('home.moreGames.stealAFish.title') as string}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('home.moreGames.stealAFish.description') as string}</p>
              </Link>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                <span className="mr-2">🎮</span>
                {t('home.moreGames.bestConsoles') as string}
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-labubu`} className="block">
                <h3 className="text-lg font-semibold text-purple-600 mb-3 hover:text-purple-700 transition-colors">{t('home.moreGames.stealALabubu.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealALabubu.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-an-anime`} className="block">
                <h3 className="text-lg font-semibold text-red-600 mb-3 hover:text-red-700 transition-colors">{t('home.moreGames.stealAnAnime.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAnAnime.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-pet`} className="block">
                <h3 className="text-lg font-semibold text-orange-500 mb-3 hover:text-orange-600 transition-colors">{t('home.moreGames.stealAPet.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAPet.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-meme`} className="block">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3 hover:text-yellow-600 transition-colors">{t('home.moreGames.stealAMeme.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAMeme.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-deadly-rails`} className="block">
                <h3 className="text-lg font-semibold text-red-500 mb-3 hover:text-red-600 transition-colors">{t('home.moreGames.stealDeadlyRails.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealDeadlyRails.description') as string}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-car`} className="block">
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
            <h3 className="text-xl font-bold text-red-800 mb-4">{t('home.scripts.warning.title') as string}</h3>
            <p className="text-red-700 mb-4">{t('home.scripts.warning.description') as string}</p>
            <div className="bg-white p-4 rounded">
              <ul className="text-red-700 space-y-1">
                {Array.isArray(t('home.scripts.warning.list') as unknown) ? (t('home.scripts.warning.list') as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                )) : [
                  "• The use of scripts may result in permanent account ban",
                  "• Scripts may contain malicious code", 
                  "• The use of scripts violates the game's terms of service",
                  "• Use scripts at your own risk"
                ].map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
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
                        {t('home.scripts.copiedButton') as string}
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        {t('home.scripts.copyButton') as string}
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
              href={`/${resolvedParams.lang}/guides/scripts`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('home.scripts.viewMoreButton') as string}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* More Game Screenshots */}
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✨ {t('home.moreScreenshots.title') as string}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot1.webp" alt="Steal a Brainrot Screenshot 1" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.gameOverview.title') as string}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.gameOverview.description') as string}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot2.webp" alt="Steal a Brainrot Screenshot 2" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.userInterface.title') as string}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.userInterface.description') as string}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot3.webp" alt="Steal a Brainrot Screenshot 3" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.uniqueCharacters.title') as string}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.uniqueCharacters.description') as string}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot4.webp" alt="Steal a Brainrot Screenshot 4" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.constantAction.title') as string}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.constantAction.description') as string}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-extrabold mb-6 drop-shadow">{t('home.cta.title') as string}</h2>
          <p className="text-2xl mb-8 opacity-90 font-medium">
            {t('home.cta.description') as string}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.roblox.com/games/109983668079237/Steal-a-Brainrot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-xl font-bold border-2 border-white hover:bg-blue-50 hover:text-blue-700 transition-colors card-hover animate-float"
              style={{animationDelay:'0.2s'}}
            >
              {t('home.cta.playNow') as string}
            </a>
            <Link 
              href={`/${resolvedParams.lang}/guides`}
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-colors card-hover animate-float"
              style={{animationDelay:'0.4s'}}
            >
              {t('home.cta.viewGuides') as string}
            </Link>
          </div>
        </section>
      </div>
    </div>
    </>
  )
} 
 