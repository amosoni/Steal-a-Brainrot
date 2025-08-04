'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Calculator, Database, TrendingUp, BookOpen, Play, Users, Trophy, Shield, Zap, Star } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { use } from 'react'

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params)
  const { t } = useTranslation(resolvedParams.lang)

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
            {t('home.title')}
            <span className="block text-blue-100 text-2xl md:text-4xl font-bold mt-2">{t('home.subtitle')}</span>
          </h1>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium relative z-10">
            {t('home.description')}
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
              {t('home.buttons.startExploration')}
            </Link>
            <a 
              href="https://www.roblox.com/games/109983668079237/Steal-a-Brainrot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-xl font-bold border-2 border-blue-600 hover:bg-blue-50 transition-colors card-hover animate-float"
              style={{animationDelay:'0.4s'}}
            >
              {t('home.buttons.playNow')}
            </a>
          </div>
        </div>
      </section>

      {/* 其他内容保持居中 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is Steal a Brainrot */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.whatIs.title')}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                <strong>Steal a Brainrot</strong> {t('home.whatIs.description')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('home.whatIs.rules')}
              </p>
              <p className="text-gray-600">
                {t('home.whatIs.conclusion')}
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
                <h3 className="text-xl font-semibold mb-4 text-blue-700">{t('home.gameFeatures.title')}</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.fastPaced.title')}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.fastPaced.description')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Play className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.simpleControls.title')}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.simpleControls.description')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.powerUps.title')}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.powerUps.description')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.multiplayer.title')}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.multiplayer.description')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.leaderboards.title')}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.leaderboards.description')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{t('home.gameFeatures.customization.title')}</div>
                      <div className="text-sm text-gray-600">{t('home.gameFeatures.customization.description')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Play */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.howToPlay.title')}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('home.howToPlay.objective.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('home.howToPlay.objective.description')}
              </p>
              <h3 className="text-xl font-semibold mb-4">{t('home.howToPlay.controls.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>{t('home.howToPlay.controls.movement')}:</strong> {t('home.howToPlay.controls.movementDesc')}</li>
                <li>• <strong>{t('home.howToPlay.controls.jump')}:</strong> {t('home.howToPlay.controls.jumpDesc')}</li>
                <li>• <strong>{t('home.howToPlay.controls.steal')}:</strong> {t('home.howToPlay.controls.stealDesc')}</li>
                <li>• <strong>{t('home.howToPlay.controls.powerups')}:</strong> {t('home.howToPlay.controls.powerupsDesc')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('home.howToPlay.powerups.title')}</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-blue-600">{t('home.howToPlay.powerups.speed.title')}</h4>
                  <p className="text-sm text-gray-600">{t('home.howToPlay.powerups.speed.description')}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-purple-600">{t('home.howToPlay.powerups.invisibility.title')}</h4>
                  <p className="text-sm text-gray-600">{t('home.howToPlay.powerups.invisibility.description')}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-orange-600">{t('home.howToPlay.powerups.fake.title')}</h4>
                  <p className="text-sm text-gray-600">{t('home.howToPlay.powerups.fake.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Screenshots Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🎮 {t('home.screenshots.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <img src="/api/images/Steal-a-Brainrot1.webp" alt="Steal a Brainrot Gameplay 1" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Vista General</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <img src="/api/images/Steal-a-Brainrot2.webp" alt="Steal a Brainrot Gameplay 2" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Interfaz</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <img src="/api/images/Steal-a-Brainrot3.webp" alt="Steal a Brainrot Gameplay 3" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Personajes</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-3">
              <div className="relative w-full h-32">
                <img src="/api/images/Steal-a-Brainrot4.webp" alt="Steal a Brainrot Gameplay 4" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Acción</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl p-8 shadow-xl text-white">
            <div className="text-4xl font-extrabold mb-2">100+</div>
            <div className="text-lg">Personajes Brainrot</div>
          </div>
          <div className="bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-2xl p-8 shadow-xl text-white">
            <div className="text-4xl font-extrabold mb-2">13</div>
            <div className="text-lg">Niveles de Rebirth</div>
          </div>
          <div className="bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 rounded-2xl p-8 shadow-xl text-white">
            <div className="text-4xl font-extrabold mb-2">7</div>
            <div className="text-lg">Niveles de Rareza</div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white/90 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.faq.title')}</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Guides Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.featuredGuides.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/segundo-piso`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.secondFloor.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.secondFloor.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/rebirth`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.rebirth.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.rebirth.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/scripts`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.scripts.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.scripts.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/secretos`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.secrets.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.secrets.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/codigos`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.codes.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.codes.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/modificado`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.modified.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.modified.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/scripts`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.scriptsNoKey.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.scriptsNoKey.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/probabilidades`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.probabilities.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.probabilities.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/estrategias`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.featuredGuides.advancedStrategies.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.featuredGuides.advancedStrategies.description')}</p>
              </Link>
            </div>
          </div>
        </section>

        {/* More Steal Games Section */}
        <section className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.moreGames.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-fish`} className="block">
                <h3 className="text-lg font-semibold text-green-600 mb-3 hover:text-green-700 transition-colors">{t('home.moreGames.stealAFish.title')}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('home.moreGames.stealAFish.description')}</p>
              </Link>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                <span className="mr-2">🎮</span>
                {t('home.moreGames.bestConsoles')}
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-labubu`} className="block">
                <h3 className="text-lg font-semibold text-purple-600 mb-3 hover:text-purple-700 transition-colors">{t('home.moreGames.stealALabubu.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealALabubu.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-an-anime`} className="block">
                <h3 className="text-lg font-semibold text-red-600 mb-3 hover:text-red-700 transition-colors">{t('home.moreGames.stealAnAnime.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAnAnime.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-pet`} className="block">
                <h3 className="text-lg font-semibold text-orange-500 mb-3 hover:text-orange-600 transition-colors">{t('home.moreGames.stealAPet.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAPet.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-meme`} className="block">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3 hover:text-yellow-600 transition-colors">{t('home.moreGames.stealAMeme.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealAMeme.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-deadly-rails`} className="block">
                <h3 className="text-lg font-semibold text-red-500 mb-3 hover:text-red-600 transition-colors">{t('home.moreGames.stealDeadlyRails.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.moreGames.stealDeadlyRails.description')}</p>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <Link href={`/${resolvedParams.lang}/guides/steal-a-car`} className="block">
                <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-700 transition-colors">{t('home.moreGames.stealACar.title')}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('home.moreGames.stealACar.description')}</p>
              </Link>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                <span className="mr-2">🎮</span>
                {t('home.moreGames.bestConsoles')}
              </a>
            </div>
          </div>
        </section>

        {/* More Game Screenshots */}
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✨ {t('home.moreScreenshots.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot1.webp" alt="Steal a Brainrot Screenshot 1" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.gameOverview.title')}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.gameOverview.description')}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot2.webp" alt="Steal a Brainrot Screenshot 2" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.userInterface.title')}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.userInterface.description')}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot3.webp" alt="Steal a Brainrot Screenshot 3" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('home.moreScreenshots.uniqueCharacters.title')}</h3>
                <p className="text-sm text-gray-600">{t('home.moreScreenshots.uniqueCharacters.description')}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="relative w-full h-40">
                  <img src="/api/images/Steal-a-Brainrot4.webp" alt="Steal a Brainrot Screenshot 4" className="absolute inset-0 w-full h-full object-cover rounded-lg mb-3" />
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
              href={`/${resolvedParams.lang}/guides`}
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-colors card-hover animate-float"
              style={{animationDelay:'0.4s'}}
            >
              {t('home.cta.viewGuides')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 
 