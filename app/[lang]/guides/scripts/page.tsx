'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import PageSEO from '@/components/PageSEO'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Calendar,
  Code,
  Zap,
  Info,
  Shield,
  Users,
  Settings
} from 'lucide-react'

interface ScriptsPageProps {
  params: Promise<{ lang: string }>
}

export default function ScriptsPage({ params }: ScriptsPageProps) {
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
        title={t('guides.scripts.seoTitle') as string}
        description={t('guides.scripts.seoDescription') as string}
        keywords={(() => {
          const keywords = t('guides.scripts.seoKeywords')
          const base = Array.isArray(keywords) ? (keywords as string[]).join(', ') : (keywords as string)
          const suffix = lang === 'es' ? 'Guía, Consejos, Estrategias' : lang === 'zh' ? '指南, 技巧, 策略' : 'Guide, Tips, Strategies'
          return `${base}, ${suffix}`
        })()}
        url={`/${lang}/guides/scripts`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.scripts.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.scripts.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.scripts.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.scripts.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.scripts.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">{t('guides.scripts.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#what-are-scripts" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.scripts.nav.whatAreScripts') as string}
            </a>
            <a href="#popular-scripts" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.scripts.nav.popularScripts') as string}
            </a>
            <a href="#risks" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.scripts.nav.risks') as string}
            </a>
            <a href="#how-to-use" className="text-blue-700 hover:text-blue-800 text-sm">
              {t('guides.scripts.nav.howToUse') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What are Scripts Section */}
            <div id="what-are-scripts" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{t('guides.scripts.whatAreScripts') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.scripts.whatAreScriptsDesc') as string}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.scripts.definition') as string}</h3>
                  <p className="text-gray-700">{t('guides.scripts.definitionDesc') as string}</p>
                </div>
              </div>
            </div>

            {/* Popular Scripts Section */}
            <div id="popular-scripts" className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.scripts.popularScripts') as string}</h2>
          
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-800">{t('guides.scripts.stealEveryone.title') as string}</h3>
                  </div>
                  <p className="text-blue-700 mb-4">{t('guides.scripts.stealEveryone.description') as string}</p>
                  <div className="space-y-2 text-sm text-blue-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.stealEveryone.features.keySystem') as string}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.stealEveryone.features.autoSteal') as string}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.stealEveryone.features.advancedUI') as string}
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <Settings className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-green-800">{t('guides.scripts.gumanbaScript.title') as string}</h3>
                  </div>
                  <p className="text-green-700 mb-4">{t('guides.scripts.gumanbaScript.description') as string}</p>
                  <div className="space-y-2 text-sm text-green-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.gumanbaScript.features.noKey') as string}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.gumanbaScript.features.autoCollection') as string}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.gumanbaScript.features.advancedFeatures') as string}
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold text-purple-800">{t('guides.scripts.laserhunScript.title') as string}</h3>
                  </div>
                  <p className="text-purple-700 mb-4">{t('guides.scripts.laserhunScript.description') as string}</p>
                  <div className="space-y-2 text-sm text-purple-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.laserhunScript.features.autoCollection') as string}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.laserhunScript.features.teleport') as string}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {t('guides.scripts.laserhunScript.features.easySetup') as string}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risks and Warnings Section */}
            <div id="risks" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-red-800">{t('guides.scripts.risks') as string}</h2>
                </div>
                <p className="text-red-700 mb-4">{t('guides.scripts.risksDesc') as string}</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.scripts.warnings.accountBan') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.scripts.warnings.accountBanDesc') as string}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.scripts.warnings.securityRisk') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.scripts.warnings.securityRiskDesc') as string}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-1">{t('guides.scripts.warnings.termsViolation') as string}</h3>
                      <p className="text-red-700 text-sm">{t('guides.scripts.warnings.termsViolationDesc') as string}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* How to Use Scripts Section */}
            <div id="how-to-use" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.scripts.howToUse') as string}</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">{t('guides.scripts.setup.title') as string}</h3>
                  <div className="space-y-3">
                    {getArrayData('guides.scripts.setup.steps').length > 0 ? getArrayData('guides.scripts.setup.steps').map((step: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-blue-700">{step}</p>
                        </div>
                      )) : 
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          1
                        </div>
                        <p className="text-blue-700">{t('guides.scripts.setup.defaultStep') as string}</p>
                      </div>
                    }
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">{t('guides.scripts.instructions.title') as string}</h3>
                  <ul className="space-y-2 text-green-700">
                    {getArrayData('guides.scripts.instructions').length > 0 ? getArrayData('guides.scripts.instructions').map((instruction: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {instruction}
                        </li>
                      )) : 
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {t('guides.scripts.instructions.default') as string}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.scripts.faq.title') as string}</h2>
              <div className="space-y-6">
                {getArrayData('guides.scripts.faq.questions').length > 0 ? 
                  getFAQData('guides.scripts.faq.questions').map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.scripts.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.scripts.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.scripts.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {getArrayData('guides.scripts.prerequisites.list').length > 0 ? getArrayData('guides.scripts.prerequisites.list').map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.scripts.prerequisites.default') as string}
                  </li>
                }
              </ul>
        </div>

            {/* Important Warning */}
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4">⚠️ {t('guides.scripts.importantWarning') as string}</h3>
          <div className="bg-white p-4 rounded">
            <ul className="text-red-700 space-y-1">
              {getArrayData('guides.scripts.warningList').length > 0 ? getArrayData('guides.scripts.warningList').map((warning: string, index: number) => (
                  <li key={index}>• {warning}</li>
                )) : 
                <li>• {t('guides.scripts.defaultWarning') as string}</li>
              }
            </ul>
          </div>
        </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.scripts.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/codigos`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.scripts.relatedGuides.codes') as string}
                </Link>
                <Link href={`/${lang}/guides/modificado`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.scripts.relatedGuides.modified') as string}
                </Link>
                <Link href={`/${lang}/guides/segundo-piso`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.scripts.relatedGuides.secondFloor') as string}
                </Link>
          </div>
        </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.scripts.cta.title') as string}</h3>
              <p className="text-blue-100 mb-4">{t('guides.scripts.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('guides.scripts.cta.button') as string}
          </Link>
        </div>
      </div>
    </div>
      </div>
    </>
  )
} 