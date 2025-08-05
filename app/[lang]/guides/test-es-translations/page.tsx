'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface TestEsTranslationsPageProps {
  params: Promise<{ lang: string }>
}

export default function TestEsTranslationsPage({ params }: TestEsTranslationsPageProps) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  // 测试所有翻译键
  const testTranslations = [
    { key: 'guides.segundoPiso.title', expected: 'Cómo Llegar al Segundo Piso' },
    { key: 'guides.rebirth.title', expected: 'Guía Definitiva de Rebirth' },
    { key: 'guides.scripts.title', expected: 'Guía Definitiva de Scripts' },
    { key: 'guides.secretos.title', expected: 'Secretos' },
    { key: 'guides.codigos.title', expected: 'Códigos (Julio 2025)' },
    { key: 'guides.modificado.title', expected: 'Steal a Brainrot Modificado' },
    { key: 'guides.scriptsNoKey.title', expected: 'Scripts (Sin Clave)' },
    { key: 'guides.probabilidades.title', expected: 'Secretos y Probabilidades' },
    { key: 'guides.estrategias.title', expected: 'Estrategias Avanzadas' }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}/guides`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Página de Prueba de Traducciones</h1>
          <p className="text-xl text-gray-600">Idioma actual: {lang}</p>
        </div>

        {/* Test Results */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resultados de Prueba de Traducciones</h2>
          
          <div className="space-y-4">
            {testTranslations.map((test, index) => {
              const translation = t(test.key) as string
              const isCorrect = translation === test.expected
              
              return (
                <div key={index} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{test.key}</h3>
                      <p className="text-sm text-gray-600">Esperado: {test.expected}</p>
                      <p className="text-sm text-gray-600">Actual: {translation}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-sm font-semibold ${isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Debug Info */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Información de Depuración</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Idioma actual:</strong> {lang}</p>
            <p><strong>Función de traducción:</strong> {typeof t}</p>
            <p><strong>Clave de prueba:</strong> guides.probabilidades.title</p>
            <p><strong>Resultado de traducción:</strong> {t('guides.probabilidades.title') as string}</p>
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