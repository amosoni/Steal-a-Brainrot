'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import SEOHead from '@/components/SEOHead'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Eye, 
  CheckCircle, 
  Calendar,
  Map,
  Info,
  Shield,
  Zap,
  Target,
  Users,
  Award,
  AlertTriangle,
  Search,
  Lock
} from 'lucide-react'

interface SecretosGuideProps {
  params: Promise<{ lang: string }>
}

export default function SecretosGuide({ params }: SecretosGuideProps) {
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
        title={t('guides.secretos.seoTitle') as string}
        description={t('guides.secretos.seoDescription') as string}
        keywords={t('guides.secretos.seoKeywords') as string}
        url={`/${lang}/guides/secretos`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.secretos.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.secretos.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.secretos.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.secretos.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.secretos.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">{t('guides.secretos.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#hidden-areas" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.secretos.nav.hiddenAreas') as string}
            </a>
            <a href="#power-ups" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.secretos.nav.powerUps') as string}
            </a>
            <a href="#strategies" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.secretos.nav.strategies') as string}
            </a>
            <a href="#faq" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.secretos.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hidden Areas Section */}
            <div id="hidden-areas" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Map className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-purple-800">{t('guides.secretos.hiddenAreas') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.secretos.hiddenAreasDesc') as string}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-600 mb-3">{t('guides.secretos.secretRoom.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.secretos.secretRoom.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.secretos.secretRoom.howToFind') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.secretos.secretRoom.instructions')) ? 
                        (t('guides.secretos.secretRoom.instructions') as string[]).map((instruction: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {instruction}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.secretos.secretRoom.defaultInstruction') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-600 mb-3">{t('guides.secretos.underground.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.secretos.underground.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.secretos.underground.howToFind') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.secretos.underground.instructions')) ? 
                        (t('guides.secretos.underground.instructions') as string[]).map((instruction: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {instruction}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.secretos.underground.defaultInstruction') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Power-ups Section */}
            <div id="power-ups" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.secretos.powerUps') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-600 mb-3">{t('guides.secretos.invisibility.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.secretos.invisibility.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.secretos.invisibility.howToUse') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.secretos.invisibility.tips')) ? 
                        (t('guides.secretos.invisibility.tips') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.secretos.invisibility.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-yellow-600 mb-3">{t('guides.secretos.speedBoost.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.secretos.speedBoost.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.secretos.speedBoost.howToUse') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.secretos.speedBoost.tips')) ? 
                        (t('guides.secretos.speedBoost.tips') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.secretos.speedBoost.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategies Section */}
            <div id="strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.secretos.strategies') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-indigo-600 mb-3">{t('guides.secretos.stealth.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.secretos.stealth.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.secretos.stealth.techniques') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.secretos.stealth.techniquesList')) ? 
                        (t('guides.secretos.stealth.techniquesList') as string[]).map((technique: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Eye className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                            {technique}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Eye className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.secretos.stealth.defaultTechnique') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-600 mb-3">{t('guides.secretos.escape.title') as string}</h3>
                  <p className="text-gray-700 mb-4">{t('guides.secretos.escape.description') as string}</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.secretos.escape.routes') as string}</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {Array.isArray(t('guides.secretos.escape.routesList')) ? 
                        (t('guides.secretos.escape.routesList') as string[]).map((route: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Target className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {route}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Target className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.secretos.escape.defaultRoute') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.secretos.faq.title') as string}</h2>
              <div className="space-y-6">
                {Array.isArray(t('guides.secretos.faq.questions')) ? 
                  (t('guides.secretos.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.secretos.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.secretos.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.secretos.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.secretos.prerequisites.list')) ? 
                  (t('guides.secretos.prerequisites.list') as string[]).map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.secretos.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="text-lg font-bold text-yellow-800">{t('guides.secretos.warning.title') as string}</h3>
              </div>
              <p className="text-yellow-700 text-sm">{t('guides.secretos.warning.description') as string}</p>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.secretos.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/rebirth`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.secretos.relatedGuides.rebirth') as string}
                </Link>
                <Link href={`/${lang}/guides/scripts`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.secretos.relatedGuides.scripts') as string}
                </Link>
                <Link href={`/${lang}/guides/segundo-piso`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.secretos.relatedGuides.secondFloor') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.secretos.cta.title') as string}</h3>
              <p className="text-purple-100 mb-4">{t('guides.secretos.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                {t('guides.secretos.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 