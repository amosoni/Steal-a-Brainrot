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
  Info,
  Zap,
  Target,
  Users,
  Heart,
  Gift,
  Sparkles
} from 'lucide-react'

interface StealALabubuGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealALabubuGuide({ params }: StealALabubuGuideProps) {
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
        title={t('guides.stealALabubu.seoTitle')}
        description={t('guides.stealALabubu.seoDescription')}
        keywords={(() => {
          const keywords = t('guides.stealALabubu.seoKeywords')
          if (Array.isArray(keywords)) {
            return keywords as string[]
          }
          return [keywords as string]
        })()}
        url={`/${lang}/guides/steal-a-labubu`}
        lang={lang}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealALabubu.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.stealALabubu.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.stealALabubu.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.stealALabubu.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.stealALabubu.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-pink-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-pink-900 mb-4">{t('guides.stealALabubu.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#game-overview" className="text-pink-700 hover:text-pink-800 text-sm">
              {t('guides.stealALabubu.nav.gameOverview') as string}
            </a>
            <a href="#labubu-types" className="text-pink-700 hover:text-pink-800 text-sm">
              {t('guides.stealALabubu.nav.labubuTypes') as string}
            </a>
            <a href="#collection-strategies" className="text-pink-700 hover:text-pink-800 text-sm">
              {t('guides.stealALabubu.nav.collectionStrategies') as string}
            </a>
            <a href="#faq" className="text-pink-700 hover:text-pink-800 text-sm">
              {t('guides.stealALabubu.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Overview Section */}
            <div id="game-overview" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-pink-600 mr-3" />
                  <h2 className="text-2xl font-bold text-pink-800">{t('guides.stealALabubu.gameOverview') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.stealALabubu.gameOverviewDesc') as string}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.stealALabubu.gameFeatures') as string}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {getArrayData('guides.stealALabubu.gameFeaturesList').length > 0 ? getArrayData('guides.stealALabubu.gameFeaturesList').map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      )) : 
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        {t('guides.stealALabubu.defaultFeature') as string}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/* Labubu Types Section */}
            <div id="labubu-types" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealALabubu.labubuTypes') as string}</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-600">{t('guides.stealALabubu.commonLabubu.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealALabubu.commonLabubu.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealALabubu.commonLabubu.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealALabubu.commonLabubu.features').length > 0 ? getArrayData('guides.stealALabubu.commonLabubu.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealALabubu.commonLabubu.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Gift className="w-5 h-5 text-pink-600 mr-2" />
                    <h3 className="text-lg font-bold text-pink-600">{t('guides.stealALabubu.rareLabubu.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealALabubu.rareLabubu.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealALabubu.rareLabubu.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealALabubu.rareLabubu.features').length > 0 ? getArrayData('guides.stealALabubu.rareLabubu.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealALabubu.rareLabubu.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-purple-600">{t('guides.stealALabubu.legendaryLabubu.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealALabubu.legendaryLabubu.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealALabubu.legendaryLabubu.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealALabubu.legendaryLabubu.features').length > 0 ? getArrayData('guides.stealALabubu.legendaryLabubu.features').map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealALabubu.legendaryLabubu.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Collection Strategies Section */}
            <div id="collection-strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealALabubu.collectionStrategies') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-pink-600 mr-2" />
                    <h3 className="text-lg font-bold text-pink-600">{t('guides.stealALabubu.targetedCollection.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealALabubu.targetedCollection.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealALabubu.targetedCollection.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealALabubu.targetedCollection.tipsList').length > 0 ? getArrayData('guides.stealALabubu.targetedCollection.tipsList').map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealALabubu.targetedCollection.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-purple-600">{t('guides.stealALabubu.communityTrading.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealALabubu.communityTrading.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealALabubu.communityTrading.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {getArrayData('guides.stealALabubu.communityTrading.tipsList').length > 0 ? getArrayData('guides.stealALabubu.communityTrading.tipsList').map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealALabubu.communityTrading.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealALabubu.faq.title') as string}</h2>
              <div className="space-y-6">
                {getArrayData('guides.stealALabubu.faq.questions').length > 0 ? 
                  getFAQData('guides.stealALabubu.faq.questions').map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.stealALabubu.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.stealALabubu.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealALabubu.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {getArrayData('guides.stealALabubu.prerequisites.list').length > 0 ? getArrayData('guides.stealALabubu.prerequisites.list').map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.stealALabubu.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-pink-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-pink-600 mr-2" />
                <h3 className="text-lg font-bold text-pink-800">{t('guides.stealALabubu.tips.title') as string}</h3>
              </div>
              <p className="text-pink-700 text-sm">{t('guides.stealALabubu.tips.description') as string}</p>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealALabubu.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/steal-a-fish`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealALabubu.relatedGuides.fish') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-a-pet`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealALabubu.relatedGuides.pet') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-an-anime`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealALabubu.relatedGuides.anime') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.stealALabubu.cta.title') as string}</h3>
              <p className="text-pink-100 mb-4">{t('guides.stealALabubu.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
              >
                {t('guides.stealALabubu.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 