'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface ModifiedPageProps {
  params: Promise<{ lang: string }>
}

export default function ModifiedPage({ params }: ModifiedPageProps) {
  const [lang, setLang] = useState('en') // 改为默认英语

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.modificado.title') as string}</h1>
          <p className="text-xl text-gray-600">{t('guides.modificado.subtitle') as string}</p>
        </div>

        {/* What is Modified */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.modificado.whatIsModified') as string}</h2>
          <p className="text-gray-700">{t('guides.modificado.whatIsModifiedDesc') as string}</p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.modificado.featuresTitle') as string}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">⚡</span>
              </div>
              <span className="text-gray-700">{t('guides.modificado.features.unlimitedResources') as string}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">⚡</span>
              </div>
              <span className="text-gray-700">{t('guides.modificado.features.enhancedMovement') as string}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">⚡</span>
              </div>
              <span className="text-gray-700">{t('guides.modificado.features.exclusiveContent') as string}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">⚡</span>
              </div>
              <span className="text-gray-700">{t('guides.modificado.features.automation') as string}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">⚡</span>
              </div>
              <span className="text-gray-700">{t('guides.modificado.features.customSkins') as string}</span>
            </div>
          </div>
        </div>

        {/* Key Risks */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-4">{t('guides.modificado.risksTitle') as string}</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-3">
              <span className="text-red-600 text-lg">⚠️</span>
              <span className="text-red-700">{t('guides.modificado.risks.accountSuspension') as string}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-600 text-lg">⚠️</span>
              <span className="text-red-700">{t('guides.modificado.risks.lossOfProgress') as string}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-600 text-lg">⚠️</span>
              <span className="text-red-700">{t('guides.modificado.risks.securityVulnerabilities') as string}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-600 text-lg">⚠️</span>
              <span className="text-red-700">{t('guides.modificado.risks.termsViolation') as string}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-600 text-lg">⚠️</span>
              <span className="text-red-700">{t('guides.modificado.risks.malware') as string}</span>
            </li>
          </ul>
        </div>

        {/* Recommendation */}
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">{t('guides.modificado.recommendation') as string}</h2>
          <p className="text-green-700">{t('guides.modificado.recommendationDesc') as string}</p>
        </div>

        {/* Safety Tips */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">🛡️ {t('guides.modificado.safetyTips') as string}</h2>
          <ul className="text-yellow-800 space-y-2">
            {Array.isArray(t('guides.modificado.safetyTipsList')) ? 
              (t('guides.modificado.safetyTipsList') as string[]).map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              )) : 
              <li>• {t('guides.modificado.defaultSafetyTip') as string}</li>
            }
          </ul>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700">
            ← {t('guides.backToGuides') as string}
          </Link>
        </div>
      </div>
    </div>
  )
} 