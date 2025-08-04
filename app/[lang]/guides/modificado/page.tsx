'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface ModificadoGuideProps {
  params: Promise<{ lang: string }>
}

export default function ModificadoGuide({ params }: ModificadoGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.modificado.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.modificado.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.modificado.whatIsModified')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.modificado.whatIsModifiedDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.modificado.features')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Unlimited resources and currency
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Enhanced movement and speed
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Access to exclusive content
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Advanced automation features
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Custom skins and cosmetics
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-600 mb-4">{t('guides.modificado.risks')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Account suspension or ban
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Loss of progress and items
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Security vulnerabilities
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Violation of terms of service
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Potential malware or viruses
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-600 mb-4">{t('guides.modificado.recommendation')}</h3>
            <p className="text-gray-700">{t('guides.modificado.recommendationDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 