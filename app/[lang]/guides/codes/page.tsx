'use client'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { use } from 'react'

export default function CodesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params)
  const { lang } = resolvedParams

  const { t } = useTranslation(lang)

  // 安全地获取数组数据
  const getArrayData = (key: string): string[] => {
    const data = t(key)
    if (Array.isArray(data)) {
      return data as string[]
    }
    return []
  }

  const expiredCodes = getArrayData('guides.codigos.expiredCodesList')
  const reasons = getArrayData('guides.codigos.reasons')
  const alternatives = getArrayData('guides.codigos.alternatives')
  const tipsList = getArrayData('guides.codigos.tipsList')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides')}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.codigos.title')}</h1>
          <p className="text-xl text-gray-600">{t('guides.codigos.subtitle')}</p>
        </div>

        {/* No Active Codes */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-4">{t('guides.codigos.noActiveCodes')}</h2>
          <p className="text-red-700">{t('guides.codigos.noActiveCodesDesc')}</p>
        </div>

        {/* Expired Codes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.codigos.expiredCodes')}</h2>
          <ul className="space-y-2">
            {expiredCodes.length > 0 ? 
              expiredCodes.map((code: string, index: number) => (
                <li key={index} className="text-red-600">• {code}</li>
              )) : 
              <li className="text-red-600">• Códigos no disponibles</li>
            }
          </ul>
        </div>

        {/* Why No Codes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.codigos.whyNoCodes')}</h2>
          <ul className="space-y-2">
            {reasons.length > 0 ? 
              reasons.map((reason: string, index: number) => (
                <li key={index} className="text-blue-600">• {reason}</li>
              )) : 
              <li className="text-blue-600">• Razones no disponibles</li>
            }
          </ul>
        </div>

        {/* How to Get Rewards */}
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">{t('guides.codigos.howToGetRewards')}</h2>
          <ul className="space-y-2">
            {alternatives.length > 0 ? 
              alternatives.map((alternative: string, index: number) => (
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
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">💡 {t('guides.codigos.tips')}</h2>
          <ul className="text-yellow-800 space-y-2">
            {tipsList.length > 0 ? 
              tipsList.map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              )) : 
              <li>• {t('guides.codigos.defaultTip')}</li>
            }
          </ul>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700">
            ← {t('guides.backToGuides')}
          </Link>
        </div>
      </div>
    </div>
  )
} 