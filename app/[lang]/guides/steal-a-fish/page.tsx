'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface StealAFishGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealAFishGuide({ params }: StealAFishGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealAFish.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.stealAFish.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">{t('guides.stealAFish.gameOverview')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.stealAFish.gameOverviewDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAFish.fishTypes')}</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-600 mb-3">{t('guides.stealAFish.commonFish.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAFish.commonFish.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-600 mb-3">{t('guides.stealAFish.rareFish.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAFish.rareFish.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-yellow-600 mb-3">{t('guides.stealAFish.legendaryFish.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAFish.legendaryFish.description')}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAFish.strategies')}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-cyan-600 mb-3">{t('guides.stealAFish.underwaterCombat.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAFish.underwaterCombat.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-600 mb-3">{t('guides.stealAFish.fishLocations.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAFish.fishLocations.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 