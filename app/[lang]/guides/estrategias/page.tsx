'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface EstrategiasGuideProps {
  params: Promise<{ lang: string }>
}

export default function EstrategiasGuide({ params }: EstrategiasGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.estrategias.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.estrategias.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.combatStrategies')}</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-600 mb-3">{t('guides.estrategias.hitAndRun.title')}</h3>
                <p className="text-gray-700 text-sm">{t('guides.estrategias.hitAndRun.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-600 mb-3">{t('guides.estrategias.stealthApproach.title')}</h3>
                <p className="text-gray-700 text-sm">{t('guides.estrategias.stealthApproach.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-600 mb-3">{t('guides.estrategias.teamTactics.title')}</h3>
                <p className="text-gray-700 text-sm">{t('guides.estrategias.teamTactics.description')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.resourceManagement')}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-600 mb-3">{t('guides.estrategias.prioritize.title')}</h3>
                <p className="text-gray-700 text-sm">{t('guides.estrategias.prioritize.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-3">{t('guides.estrategias.efficiency.title')}</h3>
                <p className="text-gray-700 text-sm">{t('guides.estrategias.efficiency.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">{t('guides.estrategias.advancedTips')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Master the timing of power-ups
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Learn map layouts and shortcuts
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Practice movement and evasion
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Study opponent patterns
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Adapt strategies to different situations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 