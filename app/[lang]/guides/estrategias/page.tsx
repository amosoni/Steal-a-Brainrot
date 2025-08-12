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
  Sword,
  Zap,
  Shield,
  Target,
  Users,
  Award,
  AlertTriangle
} from 'lucide-react'

// 创建别名以避免命名冲突
const ZapIcon = Zap
const ShieldIcon = Shield
const TargetIcon = Target
const UsersIcon = Users
const AwardIcon = Award
const AlertTriangleIcon = AlertTriangle

interface EstrategiasGuideProps {
  params: Promise<{ lang: string }>
}

export default function EstrategiasGuide({ params }: EstrategiasGuideProps) {
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
        title={t('guides.estrategias.seoTitle') as string}
        description={t('guides.estrategias.seoDescription') as string}
        keywords={t('guides.estrategias.seoKeywords') as string}
        url={`/${lang}/guides/estrategias`}
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.estrategias.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.estrategias.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.estrategias.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.estrategias.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.estrategias.lastUpdated') as string}
            </div>
          </div>
      </div>

        {/* Quick Navigation */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">{t('guides.estrategias.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#combat-strategies" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.estrategias.nav.combatStrategies') as string}
            </a>
            <a href="#resource-management" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.estrategias.nav.resourceManagement') as string}
            </a>
            <a href="#advanced-tips" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.estrategias.nav.advancedTips') as string}
            </a>
            <a href="#faq" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.estrategias.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Combat Strategies Section */}
            <div id="combat-strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Sword className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">{t('guides.estrategias.combatStrategies') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.estrategias.combatStrategiesDesc') as string}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <ZapIcon className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-bold text-red-600">{t('guides.estrategias.hitAndRun.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.estrategias.hitAndRun.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.estrategias.hitAndRun.advantages') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.estrategias.hitAndRun.advantagesList')) ? 
                        (t('guides.estrategias.hitAndRun.advantagesList') as string[]).map((advantage: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {advantage}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.estrategias.hitAndRun.defaultAdvantage') as string}
                        </li>
                      }
                    </ul>
                  </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <ShieldIcon className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-blue-600">{t('guides.estrategias.stealthApproach.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.estrategias.stealthApproach.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.estrategias.stealthApproach.advantages') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.estrategias.stealthApproach.advantagesList')) ? 
                        (t('guides.estrategias.stealthApproach.advantagesList') as string[]).map((advantage: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {advantage}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.estrategias.stealthApproach.defaultAdvantage') as string}
                        </li>
                      }
                    </ul>
                  </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <UsersIcon className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-green-600">{t('guides.estrategias.teamTactics.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.estrategias.teamTactics.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.estrategias.teamTactics.advantages') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.estrategias.teamTactics.advantagesList')) ? 
                        (t('guides.estrategias.teamTactics.advantagesList') as string[]).map((advantage: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {advantage}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.estrategias.teamTactics.defaultAdvantage') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
            </div>
          </div>

            {/* Resource Management Section */}
            <div id="resource-management" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.resourceManagement') as string}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <TargetIcon className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-bold text-yellow-600">{t('guides.estrategias.prioritize.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.estrategias.prioritize.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.estrategias.prioritize.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.estrategias.prioritize.tipsList')) ? 
                        (t('guides.estrategias.prioritize.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.estrategias.prioritize.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <AwardIcon className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-purple-600">{t('guides.estrategias.efficiency.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.estrategias.efficiency.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.estrategias.efficiency.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.estrategias.efficiency.tipsList')) ? 
                        (t('guides.estrategias.efficiency.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.estrategias.efficiency.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Tips Section */}
            <div id="advanced-tips" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.advancedTips') as string}</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 text-lg mb-4">{t('guides.estrategias.advancedTipsDesc') as string}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {Array.isArray(t('guides.estrategias.tips')) ? 
                  (t('guides.estrategias.tips') as Array<{title: string, description: string}>).map((tip, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                      <div className="flex items-center mb-3">
                        <AwardIcon className="w-5 h-5 text-indigo-600 mr-2" />
                        <h3 className="text-lg font-bold text-indigo-600">{tip.title}</h3>
                      </div>
                      <p className="text-gray-700 text-sm">{tip.description}</p>
                    </div>
                  )) : 
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <AwardIcon className="w-5 h-5 text-indigo-600 mr-2" />
                      <h3 className="text-lg font-bold text-indigo-600">{t('guides.estrategias.defaultTip.title') as string}</h3>
                    </div>
                    <p className="text-gray-700 text-sm">{t('guides.estrategias.defaultTip.description') as string}</p>
                  </div>
                }
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.faq.title') as string}</h2>
              <div className="space-y-6">
                {Array.isArray(t('guides.estrategias.faq.questions')) ? 
                  (t('guides.estrategias.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.estrategias.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.estrategias.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.estrategias.prerequisites.title') as string}</h3>
            <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.estrategias.prerequisites.list')) ? 
                  (t('guides.estrategias.prerequisites.list') as string[]).map((prereq: string, index: number) => (
                  <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                  </li>
                )) : 
                <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.estrategias.prerequisites.default') as string}
                </li>
              }
            </ul>
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <AlertTriangleIcon className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="text-lg font-bold text-yellow-800">{t('guides.estrategias.warning.title') as string}</h3>
              </div>
              <p className="text-yellow-700 text-sm">{t('guides.estrategias.warning.description') as string}</p>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.estrategias.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/secretos`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.estrategias.relatedGuides.secrets') as string}
                </Link>
                <Link href={`/${lang}/guides/probabilidades`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.estrategias.relatedGuides.probabilities') as string}
                </Link>
                <Link href={`/${lang}/guides/scripts`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.estrategias.relatedGuides.scripts') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.estrategias.cta.title') as string}</h3>
              <p className="text-purple-100 mb-4">{t('guides.estrategias.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                {t('guides.estrategias.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 