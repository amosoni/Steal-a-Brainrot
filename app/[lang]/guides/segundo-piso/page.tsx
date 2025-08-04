'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface SegundoPisoGuideProps {
  params: Promise<{ lang: string }>
}

export default function SegundoPisoGuide({ params }: SegundoPisoGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.segundoPiso.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.segundoPiso.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.segundoPiso.stepByStep')}</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step1.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step1.description')}
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                {t('guides.segundoPiso.step1.tip')}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step2.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step2.description')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('guides.segundoPiso.step2.instructions.step1')}</li>
              <li>{t('guides.segundoPiso.step2.instructions.step2')}</li>
              <li>{t('guides.segundoPiso.step2.instructions.step3')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step3.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step3.description')}
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                {t('guides.segundoPiso.step3.warning')}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step4.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step4.description')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('guides.segundoPiso.step4.instructions.step1')}</li>
              <li>{t('guides.segundoPiso.step4.instructions.step2')}</li>
              <li>{t('guides.segundoPiso.step4.instructions.step3')}</li>
              <li>{t('guides.segundoPiso.step4.instructions.step4')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step5.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step5.description')}
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-green-800">
                {t('guides.segundoPiso.step5.reward')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('guides.segundoPiso.advancedTips.title')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.advancedTips.timing.title')}</h4>
              <p className="text-gray-700 text-sm">
                {t('guides.segundoPiso.advancedTips.timing.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.advancedTips.powerups.title')}</h4>
              <p className="text-gray-700 text-sm">
                {t('guides.segundoPiso.advancedTips.powerups.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 