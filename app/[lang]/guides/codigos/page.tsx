'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import SEOHead from '@/components/SEOHead'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Calendar,
  RefreshCw,
  Info,
  Shield,
  Zap
} from 'lucide-react'

interface CodigosGuideProps {
  params: Promise<{ lang: string }>
}

export default function CodigosGuide({ params }: CodigosGuideProps) {
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
        title={t('guides.codigos.seoTitle') as string}
        description={t('guides.codigos.seoDescription') as string}
        keywords={t('guides.codigos.seoKeywords') as string}
        url={`/${lang}/guides/codigos`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.codigos.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.codigos.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.codigos.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.codigos.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.codigos.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">{t('guides.codigos.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#active-codes" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.codigos.nav.activeCodes') as string}
            </a>
            <a href="#expired-codes" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.codigos.nav.expiredCodes') as string}
            </a>
            <a href="#alternatives" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.codigos.nav.alternatives') as string}
            </a>
            <a href="#faq" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.codigos.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Codes Section */}
            <div id="active-codes" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">{t('guides.codigos.noActiveCodes') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.codigos.noActiveCodesDesc') as string}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.codigos.currentStatus') as string}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {Array.isArray(t('guides.codigos.statusList')) ? 
                      (t('guides.codigos.statusList') as string[]).map((status: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {status}
                        </li>
                      )) : 
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {t('guides.codigos.defaultStatus') as string}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/* Expired Codes Section */}
            <div id="expired-codes" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.codigos.expiredCodes') as string}</h2>
              <div className="space-y-4">
                {Array.isArray(t('guides.codigos.expiredCodesList')) ? 
                  (t('guides.codigos.expiredCodesList') as string[]).map((code: string, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <span className="font-mono text-gray-700">{code}</span>
                      <span className="text-red-500 text-sm font-medium">{t('guides.codigos.expired') as string}</span>
                    </div>
                  )) : 
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-gray-500">{t('guides.codigos.noExpiredCodes') as string}</span>
                  </div>
                }
              </div>
              
              <div className="mt-6 bg-yellow-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">{t('guides.codigos.whyExpired') as string}</h3>
                <ul className="space-y-2 text-gray-700">
                  {Array.isArray(t('guides.codigos.reasons')) ? 
                    (t('guides.codigos.reasons') as string[]).map((reason: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Info className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                        {reason}
                      </li>
                    )) : 
                    <li className="flex items-start">
                      <Info className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      {t('guides.codigos.defaultReason') as string}
                    </li>
                  }
                </ul>
              </div>
            </div>

            {/* Alternatives Section */}
            <div id="alternatives" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.codigos.alternativesTitle') as string}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Array.isArray(t('guides.codigos.alternatives')) ? 
                  (t('guides.codigos.alternatives') as string[]).map((alternative: string, index: number) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Zap className="w-5 h-5 text-green-600 mr-2" />
                        <h3 className="font-semibold text-green-800">{t(`guides.codigos.alternative${index + 1}.title`) as string}</h3>
                      </div>
                      <p className="text-green-700">{alternative}</p>
                    </div>
                  )) : 
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Zap className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="font-semibold text-green-800">{t('guides.codigos.defaultAlternative.title') as string}</h3>
                    </div>
                    <p className="text-green-700">{t('guides.codigos.defaultAlternative.description') as string}</p>
                  </div>
                }
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.codigos.faq.title') as string}</h2>
              <div className="space-y-6">
                {Array.isArray(t('guides.codigos.faq.questions')) ? 
                  (t('guides.codigos.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.codigos.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.codigos.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.codigos.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.codigos.prerequisites.list')) ? 
                  (t('guides.codigos.prerequisites.list') as string[]).map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.codigos.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.codigos.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/scripts`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.codigos.relatedGuides.scripts') as string}
                </Link>
                <Link href={`/${lang}/guides/modificado`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.codigos.relatedGuides.modified') as string}
                </Link>
                <Link href={`/${lang}/guides/segundo-piso`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.codigos.relatedGuides.secondFloor') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.codigos.cta.title') as string}</h3>
              <p className="text-blue-100 mb-4">{t('guides.codigos.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('guides.codigos.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 