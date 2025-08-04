'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface CodigosGuideProps {
  params: Promise<{ lang: string }>
}

export default function CodigosGuide({ params }: CodigosGuideProps) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
          {t('guides.backToGuides')}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.codigos.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.codigos.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">{t('guides.codigos.noActiveCodes')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.codigos.noActiveCodesDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.codigos.expiredCodes')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                BRAINROT2024 - Expired
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                SUMMER2024 - Expired
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                WINTER2024 - Expired
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.codigos.whyNoCodes')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                The game is still in development
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Developers focus on gameplay over codes
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Codes are only released during special events
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                The community is still growing
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">{t('guides.codigos.howToGetRewards')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Complete daily missions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Participate in events
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Join the Discord community
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Follow official announcements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 