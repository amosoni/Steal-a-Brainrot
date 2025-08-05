'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import SEOHead from '@/components/SEOHead'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Percent, 
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
  BarChart3
} from 'lucide-react'

interface ProbabilidadesGuideProps {
  params: Promise<{ lang: string }>
}

export default function ProbabilidadesGuide({ params }: ProbabilidadesGuideProps) {
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
        title={t('guides.probabilidades.seoTitle') as string}
        description={t('guides.probabilidades.seoDescription') as string}
        keywords={t('guides.probabilidades.seoKeywords') as string}
        url={`/${lang}/guides/probabilidades`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.probabilidades.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.probabilidades.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.probabilidades.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.probabilidades.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.probabilidades.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">{t('guides.probabilidades.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#spawn-rates" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.probabilidades.nav.spawnRates') as string}
            </a>
            <a href="#luck-stat" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.probabilidades.nav.luckStat') as string}
            </a>
            <a href="#strategies" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.probabilidades.nav.strategies') as string}
            </a>
            <a href="#faq" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.probabilidades.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Spawn Rates Section */}
            <div id="spawn-rates" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-purple-800">{t('guides.probabilidades.spawnRates') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.probabilidades.spawnRatesDesc') as string}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-600 mb-3">{t('guides.probabilidades.common.title') as string}</h3>
                  <p className="text-2xl font-bold text-gray-600 mb-2">{t('guides.probabilidades.common.rate') as string}</p>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.probabilidades.common.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.probabilidades.common.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.probabilidades.common.features')) ? 
                        (t('guides.probabilidades.common.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.probabilidades.common.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-600 mb-3">{t('guides.probabilidades.rare.title') as string}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{t('guides.probabilidades.rare.rate') as string}</p>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.probabilidades.rare.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.probabilidades.rare.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.probabilidades.rare.features')) ? 
                        (t('guides.probabilidades.rare.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.probabilidades.rare.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-600 mb-3">{t('guides.probabilidades.epic.title') as string}</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">{t('guides.probabilidades.epic.rate') as string}</p>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.probabilidades.epic.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.probabilidades.epic.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.probabilidades.epic.features')) ? 
                        (t('guides.probabilidades.epic.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.probabilidades.epic.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-yellow-600 mb-3">{t('guides.probabilidades.legendary.title') as string}</h3>
                  <p className="text-2xl font-bold text-yellow-600 mb-2">{t('guides.probabilidades.legendary.rate') as string}</p>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.probabilidades.legendary.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.probabilidades.legendary.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.probabilidades.legendary.features')) ? 
                        (t('guides.probabilidades.legendary.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.probabilidades.legendary.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-600 mb-3">{t('guides.probabilidades.mythic.title') as string}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">{t('guides.probabilidades.mythic.rate') as string}</p>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.probabilidades.mythic.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.probabilidades.mythic.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.probabilidades.mythic.features')) ? 
                        (t('guides.probabilidades.mythic.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.probabilidades.mythic.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Luck Stat Section */}
            <div id="luck-stat" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.probabilidades.luckStat') as string}</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 text-lg mb-4">{t('guides.probabilidades.luckStatDesc') as string}</p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('guides.probabilidades.howToIncreaseLuck') as string}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Array.isArray(t('guides.probabilidades.luckMethods')) ? 
                  (t('guides.probabilidades.luckMethods') as Array<{title: string, description: string}>).map((method, index: number) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                        <h4 className="font-semibold text-green-800">{method.title}</h4>
                      </div>
                      <p className="text-green-700 text-sm">{method.description}</p>
                    </div>
                  )) : 
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-800">{t('guides.probabilidades.defaultLuckMethod.title') as string}</h4>
                    </div>
                    <p className="text-green-700 text-sm">{t('guides.probabilidades.defaultLuckMethod.description') as string}</p>
                  </div>
                }
              </div>
            </div>

            {/* Strategies Section */}
            <div id="strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.probabilidades.strategies') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-indigo-600 mb-3">{t('guides.probabilidades.farming.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.probabilidades.farming.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.probabilidades.farming.tips') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.probabilidades.farming.tipsList')) ? 
                        (t('guides.probabilidades.farming.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.probabilidades.farming.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-600 mb-3">{t('guides.probabilidades.timing.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.probabilidades.timing.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.probabilidades.timing.tips') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.probabilidades.timing.tipsList')) ? 
                        (t('guides.probabilidades.timing.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Clock className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Clock className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.probabilidades.timing.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.probabilidades.faq.title') as string}</h2>
              <div className="space-y-6">
                {Array.isArray(t('guides.probabilidades.faq.questions')) ? 
                  (t('guides.probabilidades.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.probabilidades.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.probabilidades.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.probabilidades.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.probabilidades.prerequisites.list')) ? 
                  (t('guides.probabilidades.prerequisites.list') as string[]).map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.probabilidades.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-blue-800">{t('guides.probabilidades.tips.title') as string}</h3>
              </div>
              <p className="text-blue-700 text-sm">{t('guides.probabilidades.tips.description') as string}</p>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.probabilidades.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/secretos`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.probabilidades.relatedGuides.secrets') as string}
                </Link>
                <Link href={`/${lang}/guides/rebirth`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.probabilidades.relatedGuides.rebirth') as string}
                </Link>
                <Link href={`/${lang}/guides/scripts`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.probabilidades.relatedGuides.scripts') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.probabilidades.cta.title') as string}</h3>
              <p className="text-purple-100 mb-4">{t('guides.probabilidades.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                {t('guides.probabilidades.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 