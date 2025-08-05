'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface CodesPageProps {
  params: Promise<{ lang: string }>
}

export default function CodesPage({ params }: CodesPageProps) {
  const [lang, setLang] = useState('es') // 改为默认西班牙语

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.codigos.title') as string}</h1>
          <p className="text-xl text-gray-600">{t('guides.codigos.subtitle') as string}</p>
        </div>

        {/* No Active Codes */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-4">{t('guides.codigos.noActiveCodes') as string}</h2>
          <p className="text-red-700">{t('guides.codigos.noActiveCodesDesc') as string}</p>
        </div>

        {/* Expired Codes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.codigos.expiredCodes') as string}</h2>
          <ul className="space-y-2">
            {Array.isArray(t('guides.codigos.expiredCodesList')) ? 
              (t('guides.codigos.expiredCodesList') as string[]).map((code: string, index: number) => (
                <li key={index} className="text-red-600">• {code}</li>
              )) : 
              <li className="text-red-600">• Códigos no disponibles</li>
            }
          </ul>
        </div>

        {/* Why No Codes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.codigos.whyNoCodes') as string}</h2>
          <ul className="space-y-2">
            {Array.isArray(t('guides.codigos.reasons')) ? 
              (t('guides.codigos.reasons') as string[]).map((reason: string, index: number) => (
                <li key={index} className="text-blue-600">• {reason}</li>
              )) : 
              <li className="text-blue-600">• Razones no disponibles</li>
            }
          </ul>
        </div>

        {/* How to Get Rewards */}
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">{t('guides.codigos.howToGetRewards') as string}</h2>
          <ul className="space-y-2">
            {Array.isArray(t('guides.codigos.alternatives')) ? 
              (t('guides.codigos.alternatives') as string[]).map((alternative: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">{alternative}</span>
                </li>
              )) : 
              <li className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Alternativas no disponibles</span>
              </li>
            }
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">💡 {t('guides.codigos.tips') as string}</h2>
          <ul className="text-yellow-800 space-y-2">
            {Array.isArray(t('guides.codigos.tipsList')) ? 
              (t('guides.codigos.tipsList') as string[]).map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              )) : 
              <li>• {t('guides.codigos.defaultTip') as string}</li>
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