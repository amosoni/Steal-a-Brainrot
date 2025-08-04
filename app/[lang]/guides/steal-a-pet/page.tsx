'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface StealAPetGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealAPetGuide({ params }: StealAPetGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealAPet.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.stealAPet.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">{t('guides.stealAPet.gameOverview')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.stealAPet.gameOverviewDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAPet.petTypes')}</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-600 mb-3">{t('guides.stealAPet.commonPets.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAPet.commonPets.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-600 mb-3">{t('guides.stealAPet.rarePets.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAPet.rarePets.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-600 mb-3">{t('guides.stealAPet.legendaryPets.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealAPet.legendaryPets.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">{t('guides.stealAPet.petBattles')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Train your pets regularly
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Use type advantages in battles
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Form balanced teams
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Study opponent strategies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 