'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface ProbabilidadesGuideProps {
  params: Promise<{ lang: string }>
}

export default function ProbabilidadesGuide({ params }: ProbabilidadesGuideProps) {
  const [lang, setLang] = useState('en')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
      setIsLoading(false)
    })
  }, [params])

  const { t } = useTranslation(lang)

  // 调试信息
  console.log('ProbabilidadesGuide - Current lang:', lang)
  console.log('ProbabilidadesGuide - Translation test:', t('probabilidades.title'))

  // 如果还在加载，显示加载状态
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
          {t('guides.backToGuides')}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('probabilidades.title')}</h1>
        <p className="text-xl text-gray-600">{t('probabilidades.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('probabilidades.spawnRates')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-600 mb-3">{t('probabilidades.common.title')}</h3>
                <p className="text-2xl font-bold text-gray-600 mb-2">{t('probabilidades.common.rate')}</p>
                <p className="text-gray-700 text-sm">{t('probabilidades.common.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-600 mb-3">{t('probabilidades.rare.title')}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{t('probabilidades.rare.rate')}</p>
                <p className="text-gray-700 text-sm">{t('probabilidades.rare.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-3">{t('probabilidades.epic.title')}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">{t('probabilidades.epic.rate')}</p>
                <p className="text-gray-700 text-sm">{t('probabilidades.epic.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-600 mb-3">{t('probabilidades.legendary.title')}</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-2">{t('probabilidades.legendary.rate')}</p>
                <p className="text-gray-700 text-sm">{t('probabilidades.legendary.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-600 mb-3">{t('probabilidades.mythic.title')}</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">{t('probabilidades.mythic.rate')}</p>
                <p className="text-gray-700 text-sm">{t('probabilidades.mythic.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">{t('probabilidades.luckStat')}</h3>
            <p className="text-gray-700 mb-4">{t('probabilidades.luckStatDesc')}</p>
            
            <h4 className="font-semibold text-gray-900 mb-3">{t('probabilidades.howToIncreaseLuck')}</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Complete daily missions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Participate in events
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Use luck-boosting items
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Join guild activities
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Achieve milestones
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 