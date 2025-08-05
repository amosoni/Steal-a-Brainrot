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
  Shield,
  Zap,
  Info,
  Users,
  TrendingUp,
  Lock
} from 'lucide-react'

interface ModificadoGuideProps {
  params: Promise<{ lang: string }>
}

export default function ModificadoGuide({ params }: ModificadoGuideProps) {
  const [lang, setLang] = useState('zh')

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  return (
    <>
      <SEOHead
        title={t('guides.modificado.seoTitle') as string}
        description={t('guides.modificado.seoDescription') as string}
        keywords={t('guides.modificado.seoKeywords') as string}
        url={`/${lang}/guides/modificado`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.modificado.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.modificado.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.modificado.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.modificado.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.modificado.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-purple-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-purple-900 mb-4">{t('guides.modificado.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#what-is-modified" className="text-purple-700 hover:text-purple-800 text-sm">
              {t('guides.modificado.nav.whatIsModified') as string}
            </a>
            <a href="#features" className="text-purple-700 hover:text-purple-800 text-sm">
              {t('guides.modificado.nav.features') as string}
            </a>
            <a href="#risks" className="text-purple-700 hover:text-purple-800 text-sm">
              {t('guides.modificado.nav.risks') as string}
            </a>
            <a href="#faq" className="text-purple-700 hover:text-purple-800 text-sm">
              {t('guides.modificado.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Modified Section */}
            <div id="what-is-modified" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Info className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{t('guides.modificado.whatIsModified') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.modificado.whatIsModifiedDesc') as string}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.modificado.definition') as string}</h3>
                  <p className="text-gray-700">{t('guides.modificado.definitionDesc') as string}</p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div id="features" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.modificado.featuresTitle') as string}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800">{t('guides.modificado.features.unlimitedResources') as string}</h3>
                  </div>
                  <p className="text-blue-700 text-sm">{t('guides.modificado.features.unlimitedResourcesDesc') as string}</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">{t('guides.modificado.features.enhancedMovement') as string}</h3>
                  </div>
                  <p className="text-green-700 text-sm">{t('guides.modificado.features.enhancedMovementDesc') as string}</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-semibold text-purple-800">{t('guides.modificado.features.exclusiveContent') as string}</h3>
                  </div>
                  <p className="text-purple-700 text-sm">{t('guides.modificado.features.exclusiveContentDesc') as string}</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="font-semibold text-orange-800">{t('guides.modificado.features.automation') as string}</h3>
                  </div>
                  <p className="text-orange-700 text-sm">{t('guides.modificado.features.automationDesc') as string}</p>
                </div>
                
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-pink-600 mr-2" />
                    <h3 className="font-semibold text-pink-800">{t('guides.modificado.features.customSkins') as string}</h3>
                  </div>
                  <p className="text-pink-700 text-sm">{t('guides.modificado.features.customSkinsDesc') as string}</p>
                </div>
              </div>
            </div>

            {/* Risks Section */}
            <div id="risks" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">{t('guides.modificado.risksTitle') as string}</h2>
                </div>
                <p className="text-red-700 mb-4">{t('guides.modificado.risksDescription') as string}</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <Lock className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.modificado.risks.accountSuspension') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.modificado.risks.accountSuspensionDesc') as string}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.modificado.risks.lossOfProgress') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.modificado.risks.lossOfProgressDesc') as string}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.modificado.risks.securityVulnerabilities') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.modificado.risks.securityVulnerabilitiesDesc') as string}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.modificado.risks.termsViolation') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.modificado.risks.termsViolationDesc') as string}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.modificado.risks.malware') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.modificado.risks.malwareDesc') as string}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.modificado.faq.title') as string}</h2>
              <div className="space-y-6">
                {Array.isArray(t('guides.modificado.faq.questions')) ? 
                  (t('guides.modificado.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.modificado.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.modificado.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.modificado.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.modificado.prerequisites.list')) ? 
                  (t('guides.modificado.prerequisites.list') as string[]).map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.modificado.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Recommendation */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">{t('guides.modificado.recommendation') as string}</h3>
              <p className="text-green-700 mb-4">{t('guides.modificado.recommendationDesc') as string}</p>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-semibold text-green-800 mb-2">{t('guides.modificado.safeAlternatives') as string}</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  {Array.isArray(t('guides.modificado.safeAlternativesList')) ? 
                    (t('guides.modificado.safeAlternativesList') as string[]).map((alternative: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {alternative}
                      </li>
                    )) : 
                    <li className="flex items-start">
                      <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {t('guides.modificado.defaultSafeAlternative') as string}
                    </li>
                  }
                </ul>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.modificado.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/scripts`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.modificado.relatedGuides.scripts') as string}
                </Link>
                <Link href={`/${lang}/guides/codigos`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.modificado.relatedGuides.codes') as string}
                </Link>
                <Link href={`/${lang}/guides/segundo-piso`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.modificado.relatedGuides.secondFloor') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.modificado.cta.title') as string}</h3>
              <p className="text-purple-100 mb-4">{t('guides.modificado.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                {t('guides.modificado.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 