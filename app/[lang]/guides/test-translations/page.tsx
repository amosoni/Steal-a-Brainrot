'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface TestTranslationsPageProps {
  params: Promise<{ lang: string }>
}

export default function TestTranslationsPage({ params }: TestTranslationsPageProps) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  // 测试所有翻译键
  const testTranslations = [
    { key: 'guides.segundoPiso.title', expected: '如何到达二楼' },
    { key: 'guides.rebirth.title', expected: '终极重生指南' },
    { key: 'guides.scripts.title', expected: '终极脚本指南' },
    { key: 'guides.secretos.title', expected: '秘密' },
    { key: 'guides.codigos.title', expected: '代码（2025年7月）' },
    { key: 'guides.modificado.title', expected: 'Steal a Brainrot 修改版' },
    { key: 'guides.scriptsNoKey.title', expected: '脚本（无密钥）' },
    { key: 'guides.probabilidades.title', expected: '秘密和概率' },
    { key: 'guides.estrategias.title', expected: '高级策略' }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">翻译测试页面</h1>
          <p className="text-xl text-gray-600">当前语言: {lang}</p>
        </div>

        {/* Test Results */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">翻译测试结果</h2>
          
          <div className="space-y-4">
            {testTranslations.map((test, index) => {
              const translation = t(test.key) as string
              const isCorrect = translation === test.expected
              
              return (
                <div key={index} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{test.key}</h3>
                      <p className="text-sm text-gray-600">期望: {test.expected}</p>
                      <p className="text-sm text-gray-600">实际: {translation}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-sm font-semibold ${isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {isCorrect ? '✓ 正确' : '✗ 错误'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Debug Info */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">调试信息</h2>
          <div className="space-y-2 text-sm">
            <p><strong>当前语言:</strong> {lang}</p>
            <p><strong>翻译函数:</strong> {typeof t}</p>
            <p><strong>测试键:</strong> guides.probabilidades.title</p>
            <p><strong>翻译结果:</strong> {t('guides.probabilidades.title') as string}</p>
          </div>
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