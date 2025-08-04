'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface StealALabubuGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealALabubuGuide({ params }: StealALabubuGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealALabubu.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.stealALabubu.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">{t('guides.stealALabubu.gameOverview')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.stealALabubu.gameOverviewDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealALabubu.labubuTypes')}</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-600 mb-3">{t('guides.stealALabubu.commonLabubu.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealALabubu.commonLabubu.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-pink-600 mb-3">{t('guides.stealALabubu.rareLabubu.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealALabubu.rareLabubu.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-purple-600 mb-3">{t('guides.stealALabubu.legendaryLabubu.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.stealALabubu.legendaryLabubu.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-pink-800 mb-4">{t('guides.stealALabubu.collectionTips')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Follow official releases
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Join collector communities
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Trade with other collectors
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Preserve figure condition
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 