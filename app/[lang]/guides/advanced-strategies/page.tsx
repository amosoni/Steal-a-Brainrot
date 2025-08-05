'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface AdvancedStrategiesPageProps {
  params: Promise<{ lang: string }>
}

export default function AdvancedStrategiesPage({ params }: AdvancedStrategiesPageProps) {
  const [lang, setLang] = useState('es') // 改为默认西班牙语

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.estrategias.title') as string}</h1>
          <p className="text-xl text-gray-600">{t('guides.estrategias.subtitle') as string}</p>
        </div>

        {/* Combat Strategies */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.combatStrategies') as string}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">{t('guides.estrategias.hitAndRun.title') as string}</h3>
              <p className="text-red-700">{t('guides.estrategias.hitAndRun.description') as string}</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('guides.estrategias.stealthApproach.title') as string}</h3>
              <p className="text-blue-700">{t('guides.estrategias.stealthApproach.description') as string}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{t('guides.estrategias.teamTactics.title') as string}</h3>
              <p className="text-green-700">{t('guides.estrategias.teamTactics.description') as string}</p>
            </div>
          </div>
        </div>

        {/* Resource Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.resourceManagement') as string}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">{t('guides.estrategias.prioritize.title') as string}</h3>
              <p className="text-yellow-700">{t('guides.estrategias.prioritize.description') as string}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">{t('guides.estrategias.efficiency.title') as string}</h3>
              <p className="text-purple-700">{t('guides.estrategias.efficiency.description') as string}</p>
            </div>
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.advancedTips') as string}</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {(t('guides.estrategias.tips') as string[]).map((tip: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">💡</span>
                </div>
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">🏆 专业技巧</h2>
          <ul className="space-y-2 text-gray-700">
            {Array.isArray(t('guides.estrategias.tips')) ? 
              (t('guides.estrategias.tips') as string[]).map((tip: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {tip}
                </li>
              )) : 
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Consejos no disponibles
              </li>
            }
          </ul>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700">
            ← {t('guides.backToGuides') as string}
          </Link>
        </div>
      </div>
    </div>
  )
} 