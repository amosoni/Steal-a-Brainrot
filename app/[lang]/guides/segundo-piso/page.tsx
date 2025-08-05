'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface SegundoPisoGuideProps {
  params: Promise<{ lang: string }>
}

export default function SegundoPisoGuide({ params }: SegundoPisoGuideProps) {
  const [lang, setLang] = useState('es')

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
          {t('guides.backToGuides') as string}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.segundoPiso.title') as string}</h1>
        <p className="text-xl text-gray-600">{t('guides.segundoPiso.subtitle') as string}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.segundoPiso.stepByStep') as string}</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step1.title') as string}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step1.description') as string}
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                {t('guides.segundoPiso.step1.tip') as string}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step2.title') as string}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step2.description') as string}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {Array.isArray(t('guides.segundoPiso.step2.instructions')) ? 
                (t('guides.segundoPiso.step2.instructions') as string[]).map((instruction: string, index: number) => (
                  <li key={index}>{instruction}</li>
                )) : 
                <li>Instrucciones no disponibles</li>
              }
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step3.title') as string}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step3.description') as string}
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                {t('guides.segundoPiso.step3.warning') as string}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step4.title') as string}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step4.description') as string}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {Array.isArray(t('guides.segundoPiso.step4.instructions')) ? 
                (t('guides.segundoPiso.step4.instructions') as string[]).map((instruction: string, index: number) => (
                  <li key={index}>{instruction}</li>
                )) : 
                <li>Instrucciones no disponibles</li>
              }
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.segundoPiso.step5.title') as string}</h3>
            <p className="text-gray-700 mb-4">
              {t('guides.segundoPiso.step5.description') as string}
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-green-800">
                {t('guides.segundoPiso.step5.reward') as string}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('guides.segundoPiso.advancedTips.title') as string}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.advancedTips.timing.title') as string}</h4>
              <p className="text-gray-700 text-sm">
                {t('guides.segundoPiso.advancedTips.timing.description') as string}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.advancedTips.powerups.title') as string}</h4>
              <p className="text-gray-700 text-sm">
                {t('guides.segundoPiso.advancedTips.powerups.description') as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 