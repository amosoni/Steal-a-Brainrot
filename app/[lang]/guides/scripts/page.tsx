'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface ScriptsGuideProps {
  params: Promise<{ lang: string }>
}

export default function ScriptsGuide({ params }: ScriptsGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.scripts.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.scripts.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.scripts.whatAreScripts')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.scripts.whatAreScriptsDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.scripts.popularScripts')}</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-600 mb-3">{t('guides.scripts.autoFarm.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.scripts.autoFarm.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-600 mb-3">{t('guides.scripts.autoRebirth.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.scripts.autoRebirth.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-purple-600 mb-3">{t('guides.scripts.teleport.title')}</h4>
                <p className="text-gray-700 text-sm">{t('guides.scripts.teleport.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-600 mb-4">{t('guides.scripts.risks')}</h3>
            <p className="text-gray-700">{t('guides.scripts.risksDesc')}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.scripts.howToUse')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">1.</span>
                {t('guides.scripts.instructions.step1')}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">2.</span>
                {t('guides.scripts.instructions.step2')}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">3.</span>
                {t('guides.scripts.instructions.step3')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 