'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface StealACarGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealACarGuide({ params }: StealACarGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealACar.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.stealACar.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">{t('guides.stealACar.gameOverview')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.stealACar.gameOverviewDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealACar.carTypes')}</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-600 mb-3">{t('guides.stealACar.sportsCars.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealACar.sportsCars.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-600 mb-3">{t('guides.stealACar.luxuryCars.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealACar.luxuryCars.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-purple-600 mb-3">{t('guides.stealACar.legendaryCars.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealACar.legendaryCars.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">{t('guides.stealACar.heistStrategies')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Plan your heist carefully
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Use stealth to avoid detection
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Upgrade your tools and skills
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Work with a team for complex heists
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 