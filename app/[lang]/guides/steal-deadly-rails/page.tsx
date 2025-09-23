'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import PageSEO from '@/components/PageSEO'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  CheckCircle, 
  Calendar,
  Shield,
  Zap,
  Target,
  AlertTriangle,
  Train,
  Gauge,
  Skull
} from 'lucide-react'

interface StealDeadlyRailsGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealDeadlyRailsGuide({ params }: StealDeadlyRailsGuideProps) {
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
      <PageSEO
        title={t('guides.stealDeadlyRails.seoTitle') as string}
        description={t('guides.stealDeadlyRails.seoDescription') as string}
        keywords={(() => {
          const keywords = t('guides.stealDeadlyRails.seoKeywords')
          const base = Array.isArray(keywords) ? (keywords as string[]).join(', ') : (keywords as string)
          const suffix = lang === 'es' ? 'Guía, Consejos, Estrategias' : lang === 'zh' ? '指南, 技巧, 策略' : 'Guide, Tips, Strategies'
          return `${base}, ${suffix}`
        })()}
        url={`/${lang}/guides/steal-deadly-rails`}
        lang={lang}
        type="guide"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealDeadlyRails.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.stealDeadlyRails.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.stealDeadlyRails.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.stealDeadlyRails.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.stealDeadlyRails.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-red-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4">{t('guides.stealDeadlyRails.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#game-overview" className="text-red-700 hover:text-red-800 text-sm">
              {t('guides.stealDeadlyRails.nav.gameOverview') as string}
            </a>
            <a href="#rail-types" className="text-red-700 hover:text-red-800 text-sm">
              {t('guides.stealDeadlyRails.nav.railTypes') as string}
            </a>
            <a href="#survival-strategies" className="text-red-700 hover:text-red-800 text-sm">
              {t('guides.stealDeadlyRails.nav.survivalStrategies') as string}
            </a>
            <a href="#faq" className="text-red-700 hover:text-red-800 text-sm">
              {t('guides.stealDeadlyRails.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Overview Section */}
            <div id="game-overview" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Train className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">{t('guides.stealDeadlyRails.gameOverview') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.stealDeadlyRails.gameOverviewDesc') as string}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.stealDeadlyRails.gameFeatures') as string}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {getArrayData('guides.stealDeadlyRails.gameFeaturesList').length > 0 ? getArrayData('guides.stealDeadlyRails.gameFeaturesList').map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      )) : 
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        {t('guides.stealDeadlyRails.defaultFeature') as string}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/* Rail Types Section */}
            <div id="rail-types" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealDeadlyRails.railTypes') as string}</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Gauge className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-600">{t('guides.stealDeadlyRails.easyRails.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealDeadlyRails.easyRails.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealDeadlyRails.easyRails.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealDeadlyRails.easyRails.features').length > 0 ? getArrayData('guides.stealDeadlyRails.easyRails.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealDeadlyRails.easyRails.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-bold text-red-600">{t('guides.stealDeadlyRails.hardRails.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealDeadlyRails.hardRails.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealDeadlyRails.hardRails.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealDeadlyRails.hardRails.features').length > 0 ? getArrayData('guides.stealDeadlyRails.hardRails.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealDeadlyRails.hardRails.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Skull className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-bold text-orange-600">{t('guides.stealDeadlyRails.deadlyRails.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealDeadlyRails.deadlyRails.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealDeadlyRails.deadlyRails.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealDeadlyRails.deadlyRails.features').length > 0 ? getArrayData('guides.stealDeadlyRails.deadlyRails.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealDeadlyRails.deadlyRails.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Survival Strategies Section */}
            <div id="survival-strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealDeadlyRails.survivalStrategies') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-bold text-red-600">{t('guides.stealDeadlyRails.defenseTactics.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealDeadlyRails.defenseTactics.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealDeadlyRails.defenseTactics.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealDeadlyRails.defenseTactics.tipsList').length > 0 ? getArrayData('guides.stealDeadlyRails.defenseTactics.tipsList').map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealDeadlyRails.defenseTactics.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-bold text-orange-600">{t('guides.stealDeadlyRails.timingStrategies.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealDeadlyRails.timingStrategies.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealDeadlyRails.timingStrategies.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealDeadlyRails.timingStrategies.tipsList').length > 0 ? getArrayData('guides.stealDeadlyRails.timingStrategies.tipsList').map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealDeadlyRails.timingStrategies.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealDeadlyRails.faq.title') as string}</h2>
              <div className="space-y-6">
                {getArrayData('guides.stealDeadlyRails.faq.questions').length > 0 ? 
                  getFAQData('guides.stealDeadlyRails.faq.questions').map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.stealDeadlyRails.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.stealDeadlyRails.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealDeadlyRails.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {getArrayData('guides.stealDeadlyRails.prerequisites.list').length > 0 ? getArrayData('guides.stealDeadlyRails.prerequisites.list').map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.stealDeadlyRails.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Warning */}
            <div className="bg-red-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-lg font-bold text-red-800">{t('guides.stealDeadlyRails.warning.title') as string}</h3>
              </div>
              <p className="text-red-700 text-sm">{t('guides.stealDeadlyRails.warning.description') as string}</p>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealDeadlyRails.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/steal-a-fish`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealDeadlyRails.relatedGuides.fish') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-a-labubu`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealDeadlyRails.relatedGuides.labubu') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-an-anime`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealDeadlyRails.relatedGuides.anime') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.stealDeadlyRails.cta.title') as string}</h3>
              <p className="text-red-100 mb-4">{t('guides.stealDeadlyRails.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                {t('guides.stealDeadlyRails.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 