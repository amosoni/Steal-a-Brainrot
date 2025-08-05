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
  Shield,
  Zap,
  Target,
  Users,
  Award,
  AlertTriangle,
  Fish,
  Anchor,
  Compass
} from 'lucide-react'

interface StealAFishGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealAFishGuide({ params }: StealAFishGuideProps) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  return (
    <>
      <SEOHead
        title={t('guides.stealAFish.seoTitle') as string}
        description={t('guides.stealAFish.seoDescription') as string}
        keywords={t('guides.stealAFish.seoKeywords') as string}
        url={`/${lang}/guides/steal-a-fish`}
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealAFish.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.stealAFish.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.stealAFish.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.stealAFish.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.stealAFish.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">{t('guides.stealAFish.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#game-overview" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.stealAFish.nav.gameOverview') as string}
            </a>
            <a href="#fish-types" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.stealAFish.nav.fishTypes') as string}
            </a>
            <a href="#strategies" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.stealAFish.nav.strategies') as string}
            </a>
            <a href="#faq" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.stealAFish.nav.faq') as string}
            </a>
          </div>
      </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Overview Section */}
            <div id="game-overview" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Fish className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-800">{t('guides.stealAFish.gameOverview') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
            {t('guides.stealAFish.gameOverviewDesc') as string}
          </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.stealAFish.gameFeatures') as string}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {Array.isArray(t('guides.stealAFish.gameFeaturesList')) ? 
                      (t('guides.stealAFish.gameFeaturesList') as string[]).map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      )) : 
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {t('guides.stealAFish.defaultFeature') as string}
                      </li>
                    }
                  </ul>
                </div>
              </div>
        </div>

            {/* Fish Types Section */}
            <div id="fish-types" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAFish.fishTypes') as string}</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Fish className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-600">{t('guides.stealAFish.commonFish.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAFish.commonFish.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAFish.commonFish.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAFish.commonFish.features')) ? 
                        (t('guides.stealAFish.commonFish.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAFish.commonFish.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Fish className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-blue-600">{t('guides.stealAFish.rareFish.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAFish.rareFish.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAFish.rareFish.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAFish.rareFish.features')) ? 
                        (t('guides.stealAFish.rareFish.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAFish.rareFish.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Fish className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-bold text-yellow-600">{t('guides.stealAFish.legendaryFish.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAFish.legendaryFish.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAFish.legendaryFish.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAFish.legendaryFish.features')) ? 
                        (t('guides.stealAFish.legendaryFish.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAFish.legendaryFish.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategies Section */}
            <div id="strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAFish.strategies') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Fish className="w-5 h-5 text-cyan-600 mr-2" />
                    <h3 className="text-lg font-bold text-cyan-600">{t('guides.stealAFish.underwaterCombat.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAFish.underwaterCombat.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAFish.underwaterCombat.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAFish.underwaterCombat.tipsList')) ? 
                        (t('guides.stealAFish.underwaterCombat.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAFish.underwaterCombat.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Compass className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-green-600">{t('guides.stealAFish.fishLocations.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAFish.fishLocations.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAFish.fishLocations.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAFish.fishLocations.tipsList')) ? 
                        (t('guides.stealAFish.fishLocations.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAFish.fishLocations.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAFish.faq.title') as string}</h2>
              <div className="space-y-6">
                {Array.isArray(t('guides.stealAFish.faq.questions')) ? 
                  (t('guides.stealAFish.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.stealAFish.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.stealAFish.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealAFish.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.stealAFish.prerequisites.list')) ? 
                  (t('guides.stealAFish.prerequisites.list') as string[]).map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.stealAFish.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-blue-800">{t('guides.stealAFish.tips.title') as string}</h3>
              </div>
              <p className="text-blue-700 text-sm">{t('guides.stealAFish.tips.description') as string}</p>
              </div>
              
            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealAFish.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/steal-a-pet`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAFish.relatedGuides.pet') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-a-car`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAFish.relatedGuides.car') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-a-meme`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAFish.relatedGuides.meme') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.stealAFish.cta.title') as string}</h3>
              <p className="text-blue-100 mb-4">{t('guides.stealAFish.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('guides.stealAFish.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 