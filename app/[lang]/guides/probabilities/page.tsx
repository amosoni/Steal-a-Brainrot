'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface ProbabilitiesPageProps {
  params: Promise<{ lang: string }>
}

export default function ProbabilitiesPage({ params }: ProbabilitiesPageProps) {
  const [lang, setLang] = useState('en') // 改为默认英语

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)
  // 安全地获取数组数据
  const getArrayData = (key: string): string[] => {
    const data = t(key)
    if (Array.isArray(data)) {
      return data as string[]
    }
    return []
  }

  // 安全地获取FAQ数据
  const getFAQData = (key: string): Array<{question: string, answer: string}> => {
    const data = t(key)
    if (Array.isArray(data)) {
      return data as Array<{question: string, answer: string}>
    }
    return []
  }

  // 安全地获取提示数据
  const getTipsData = (key: string): Array<{title: string, description: string}> => {
    const data = t(key)
    if (Array.isArray(data)) {
      return data as Array<{title: string, description: string}>
    }
    return []
  }



  // 调试信息

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.probabilidades.title') as string}</h1>
          <p className="text-xl text-gray-600">{t('guides.probabilidades.subtitle') as string}</p>
        </div>

        {/* Spawn Rates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.probabilidades.spawnRates') as string}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('guides.probabilidades.common.title') as string}</h3>
              <p className="text-2xl font-bold text-gray-600 mb-2">{t('guides.probabilidades.common.rate') as string}</p>
              <p className="text-gray-700 text-sm">{t('guides.probabilidades.common.description') as string}</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('guides.probabilidades.rare.title') as string}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">{t('guides.probabilidades.rare.rate') as string}</p>
              <p className="text-blue-700 text-sm">{t('guides.probabilidades.rare.description') as string}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">{t('guides.probabilidades.epic.title') as string}</h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">{t('guides.probabilidades.epic.rate') as string}</p>
              <p className="text-purple-700 text-sm">{t('guides.probabilidades.epic.description') as string}</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">{t('guides.probabilidades.legendary.title') as string}</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-2">{t('guides.probabilidades.legendary.rate') as string}</p>
              <p className="text-yellow-700 text-sm">{t('guides.probabilidades.legendary.description') as string}</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">{t('guides.probabilidades.mythic.title') as string}</h3>
              <p className="text-2xl font-bold text-red-600 mb-2">{t('guides.probabilidades.mythic.rate') as string}</p>
              <p className="text-red-700 text-sm">{t('guides.probabilidades.mythic.description') as string}</p>
            </div>
          </div>
        </div>

        {/* Luck Stat */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.probabilidades.luckStat') as string}</h2>
          <p className="text-gray-700">{t('guides.probabilidades.luckStatDesc') as string}</p>
        </div>

        {/* How to Increase Luck */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.probabilidades.howToIncreaseLuck') as string}</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {getArrayData('guides.probabilidades.luckMethods').length > 0 ? getArrayData('guides.probabilidades.luckMethods').map((method: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">🍀</span>
                  </div>
                  <span className="text-gray-700">{method}</span>
                </div>
              )) : 
              <div className="text-gray-500">Métodos no disponibles</div>
            }
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">💡 {t('guides.probabilidades.tips') as string}</h2>
          <ul className="text-yellow-800 space-y-2">
            {getArrayData('guides.probabilidades.tipsList').length > 0 ? getArrayData('guides.probabilidades.tipsList').map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              )) : 
              <li>• {t('guides.probabilidades.defaultTip') as string}</li>
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