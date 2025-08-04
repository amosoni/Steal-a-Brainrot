'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface SecretosGuideProps {
  params: Promise<{ lang: string }>
}

export default function SecretosGuide({ params }: SecretosGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.secretos.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.secretos.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.secretos.hiddenAreas')}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-600 mb-3">{t('guides.secretos.secretRoom.title')}</h3>
                <p className="text-gray-700">{t('guides.secretos.secretRoom.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-3">{t('guides.secretos.underground.title')}</h3>
                <p className="text-gray-700">{t('guides.secretos.underground.description')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.secretos.powerUps')}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-600 mb-3">{t('guides.secretos.invisibility.title')}</h3>
                <p className="text-gray-700">{t('guides.secretos.invisibility.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-600 mb-3">{t('guides.secretos.speedBoost.title')}</h3>
                <p className="text-gray-700">{t('guides.secretos.speedBoost.description')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.secretos.strategies')}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-indigo-600 mb-3">{t('guides.secretos.stealth.title')}</h3>
                <p className="text-gray-700">{t('guides.secretos.stealth.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-600 mb-3">{t('guides.secretos.escape.title')}</h3>
                <p className="text-gray-700">{t('guides.secretos.escape.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 