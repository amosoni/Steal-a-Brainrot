'use client'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { use } from 'react'

export default function AdvancedStrategiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params)
  const { lang } = resolvedParams

  const { t } = useTranslation(lang)

  // 安全地获取提示数组
  const getTipsArray = () => {
    const tips = t('guides.estrategias.tips')
    if (Array.isArray(tips)) {
      return tips as string[]
    }
    return []
  }

  const tipsArray = getTipsArray()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides')}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.estrategias.title')}</h1>
          <p className="text-xl text-gray-600">{t('guides.estrategias.subtitle')}</p>
        </div>

        {/* Combat Strategies */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.combatStrategies')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">{t('guides.estrategias.hitAndRun.title')}</h3>
              <p className="text-red-700">{t('guides.estrategias.hitAndRun.description')}</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('guides.estrategias.stealthApproach.title')}</h3>
              <p className="text-blue-700">{t('guides.estrategias.stealthApproach.description')}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{t('guides.estrategias.teamTactics.title')}</h3>
              <p className="text-blue-700">{t('guides.estrategias.teamTactics.description')}</p>
            </div>
          </div>
        </div>

        {/* Resource Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.resourceManagement')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">{t('guides.estrategias.prioritize.title')}</h3>
              <p className="text-yellow-700">{t('guides.estrategias.prioritize.description')}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">{t('guides.estrategias.efficiency.title')}</h3>
              <p className="text-purple-700">{t('guides.estrategias.efficiency.description')}</p>
            </div>
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.estrategias.advancedTips')}</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {tipsArray.map((tip: string, index: number) => (
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
            {tipsArray.length > 0 ? 
              tipsArray.map((tip: string, index: number) => (
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
            ← {t('guides.backToGuides')}
          </Link>
        </div>
      </div>
    </div>
  )
} 