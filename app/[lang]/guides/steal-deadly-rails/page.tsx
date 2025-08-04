'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface StealDeadlyRailsGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealDeadlyRailsGuide({ params }: StealDeadlyRailsGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealDeadlyRails.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.stealDeadlyRails.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">{t('guides.stealDeadlyRails.gameOverview')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.stealDeadlyRails.gameOverviewDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealDeadlyRails.monsterTypes')}</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-600 mb-3">{t('guides.stealDeadlyRails.commonMonsters.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealDeadlyRails.commonMonsters.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-red-600 mb-3">{t('guides.stealDeadlyRails.rareMonsters.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealDeadlyRails.rareMonsters.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-orange-600 mb-3">{t('guides.stealDeadlyRails.legendaryMonsters.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealDeadlyRails.legendaryMonsters.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">{t('guides.stealDeadlyRails.rhythmGameplay')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Master the timing of the conveyor belt
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Focus on high-value monsters
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Use power-ups strategically
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Practice your reflexes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 