'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import SEOHead from '@/components/SEOHead'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  CheckCircle, 
  Calendar,
  TrendingUp,
  Info,
  Zap,
  Target,
  Smile,
  Laugh,
  Sparkles
} from 'lucide-react'

interface StealAMemeGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealAMemeGuide({ params }: StealAMemeGuideProps) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)
  // 安全地获取数组数据
  const getArrayData = (key: string): string[] => {
    const data = t(key)
    if (Array.isArray(data)) {
      return data as string[]
    }
    return []
  }

  // 安全地获取FAQ数据
  const getFAQData = (key: string): Array<{question: string, answer: string}> => {
    const data = t(key)
    if (Array.isArray(data)) {
      return data as Array<{question: string, answer: string}>
    }
    return []
  }

  // 安全地获取提示数据
  const getTipsData = (key: string): Array<{title: string, description: string}> => {
    const data = t(key)
    if (Array.isArray(data)) {
      return data as Array<{title: string, description: string}>
    }
    return []
  }



  return (
    <>
      <SEOHead
        title={t('guides.stealAMeme.seoTitle')}
        description={t('guides.stealAMeme.seoDescription')}
        keywords={(() => {
          const keywords = t('guides.stealAMeme.seoKeywords')
          if (Array.isArray(keywords)) {
            return keywords as string[]
          }
          return [keywords as string]
        })()}
        url={`/${lang}/guides/steal-a-meme`}
        lang={lang}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealAMeme.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.stealAMeme.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.stealAMeme.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.stealAMeme.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.stealAMeme.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-yellow-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-900 mb-4">{t('guides.stealAMeme.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#game-overview" className="text-yellow-700 hover:text-yellow-800 text-sm">
              {t('guides.stealAMeme.nav.gameOverview') as string}
            </a>
            <a href="#meme-types" className="text-yellow-700 hover:text-yellow-800 text-sm">
              {t('guides.stealAMeme.nav.memeTypes') as string}
            </a>
            <a href="#viral-strategies" className="text-yellow-700 hover:text-yellow-800 text-sm">
              {t('guides.stealAMeme.nav.viralStrategies') as string}
            </a>
            <a href="#faq" className="text-yellow-700 hover:text-yellow-800 text-sm">
              {t('guides.stealAMeme.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Overview Section */}
            <div id="game-overview" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Smile className="w-6 h-6 text-yellow-600 mr-3" />
                  <h2 className="text-2xl font-bold text-yellow-800">{t('guides.stealAMeme.gameOverview') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.stealAMeme.gameOverviewDesc') as string}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.stealAMeme.gameFeatures') as string}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {getArrayData('guides.stealAMeme.gameFeaturesList').length > 0 ? getArrayData('guides.stealAMeme.gameFeaturesList').map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      )) : 
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        {t('guides.stealAMeme.defaultFeature') as string}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/* Meme Types Section */}
            <div id="meme-types" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAMeme.memeTypes') as string}</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Smile className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-600">{t('guides.stealAMeme.viralMemes.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAMeme.viralMemes.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAMeme.viralMemes.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealAMeme.viralMemes.features').length > 0 ? getArrayData('guides.stealAMeme.viralMemes.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAMeme.viralMemes.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Laugh className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-bold text-yellow-600">{t('guides.stealAMeme.classicMemes.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAMeme.classicMemes.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAMeme.classicMemes.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealAMeme.classicMemes.features').length > 0 ? getArrayData('guides.stealAMeme.classicMemes.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAMeme.classicMemes.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-bold text-orange-600">{t('guides.stealAMeme.legendaryMemes.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAMeme.legendaryMemes.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAMeme.legendaryMemes.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealAMeme.legendaryMemes.features').length > 0 ? getArrayData('guides.stealAMeme.legendaryMemes.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAMeme.legendaryMemes.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Viral Strategies Section */}
            <div id="viral-strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAMeme.viralStrategies') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-bold text-yellow-600">{t('guides.stealAMeme.trendingTactics.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAMeme.trendingTactics.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAMeme.trendingTactics.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealAMeme.trendingTactics.tipsList').length > 0 ? getArrayData('guides.stealAMeme.trendingTactics.tipsList').map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAMeme.trendingTactics.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-bold text-orange-600">{t('guides.stealAMeme.memeCulture.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAMeme.memeCulture.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAMeme.memeCulture.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealAMeme.memeCulture.tipsList').length > 0 ? getArrayData('guides.stealAMeme.memeCulture.tipsList').map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAMeme.memeCulture.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAMeme.faq.title') as string}</h2>
              <div className="space-y-6">
                {getArrayData('guides.stealAMeme.faq.questions').length > 0 ? 
                  getFAQData('guides.stealAMeme.faq.questions').map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.stealAMeme.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.stealAMeme.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealAMeme.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {getArrayData('guides.stealAMeme.prerequisites.list').length > 0 ? getArrayData('guides.stealAMeme.prerequisites.list').map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.stealAMeme.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="text-lg font-bold text-yellow-800">{t('guides.stealAMeme.tips.title') as string}</h3>
              </div>
              <p className="text-yellow-700 text-sm">{t('guides.stealAMeme.tips.description') as string}</p>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealAMeme.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/steal-a-fish`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAMeme.relatedGuides.fish') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-a-labubu`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAMeme.relatedGuides.labubu') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-an-anime`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAMeme.relatedGuides.anime') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.stealAMeme.cta.title') as string}</h3>
              <p className="text-yellow-100 mb-4">{t('guides.stealAMeme.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-yellow-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
              >
                {t('guides.stealAMeme.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 