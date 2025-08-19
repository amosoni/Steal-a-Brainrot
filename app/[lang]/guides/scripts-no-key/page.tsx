'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface ScriptsNoKeyPageProps {
  params: Promise<{ lang: string }>
}

export default function ScriptsNoKeyPage({ params }: ScriptsNoKeyPageProps) {
  const [lang, setLang] = useState('es') // 改为默认西班牙语

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



  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.scriptsNoKey.title') as string}</h1>
          <p className="text-xl text-gray-600">{t('guides.scriptsNoKey.subtitle') as string}</p>
        </div>

        {/* Latest Scripts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.scriptsNoKey.latestScripts') as string}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('guides.scriptsNoKey.autoFarmScript.title') as string}</h3>
              <p className="text-blue-700">{t('guides.scriptsNoKey.autoFarmScript.description') as string}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{t('guides.scriptsNoKey.teleportScript.title') as string}</h3>
              <p className="text-green-700">{t('guides.scriptsNoKey.teleportScript.description') as string}</p>
            </div>
          </div>
        </div>

        {/* Security Warning */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-4">{t('guides.scriptsNoKey.securityWarning') as string}</h2>
          <p className="text-red-700 mb-4">{t('guides.scriptsNoKey.securityWarningDesc') as string}</p>
          <div className="bg-white p-4 rounded">
            <h3 className="font-semibold text-red-800 mb-2">⚠️ {t('guides.scripts.importantWarning') as string}</h3>
            <ul className="text-red-700 space-y-1">
              {getArrayData('guides.scripts.warningList').length > 0 ? getArrayData('guides.scripts.warningList').map((warning: string, index: number) => (
                  <li key={index}>• {warning}</li>
                )) : 
                <li>• {t('guides.scripts.defaultWarning') as string}</li>
              }
            </ul>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.scriptsNoKey.howToUse') as string}</h2>
          
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {getArrayData('guides.scriptsNoKey.steps').length > 0 ? getArrayData('guides.scriptsNoKey.steps').map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                )) : 
                <li>Pasos no disponibles</li>
              }
            </ul>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">💡 {t('guides.scriptsNoKey.tips') as string}</h2>
          <ul className="text-yellow-800 space-y-2">
            {getArrayData('guides.scriptsNoKey.tipsList').length > 0 ? getArrayData('guides.scriptsNoKey.tipsList').map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              )) : 
              <li>• {t('guides.scriptsNoKey.defaultTip') as string}</li>
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