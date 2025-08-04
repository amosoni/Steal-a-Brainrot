'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface RebirthGuideProps {
  params: Promise<{ lang: string }>
}

export default function RebirthGuide({ params }: RebirthGuideProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.rebirth.title')}</h1>
        <p className="text-xl text-gray-600">{t('guides.rebirth.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.rebirth.whatIsRebirth')}</h2>
          <p className="text-gray-700 text-lg">
            {t('guides.rebirth.whatIsRebirthDesc')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.rebirth.rebirthProcess')}</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-600 mb-4">{t('guides.rebirth.whenToRebirth')}</h4>
                <p className="text-gray-700 mb-4">{t('guides.rebirth.whenToRebirthDesc')}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">1.</span>
                    {t('guides.rebirth.step1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">2.</span>
                    {t('guides.rebirth.step2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">3.</span>
                    {t('guides.rebirth.step3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">4.</span>
                    {t('guides.rebirth.step4')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">5.</span>
                    {t('guides.rebirth.step5')}
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-4">{t('guides.rebirth.rebirthBenefits')}</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Permanent experience multipliers
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Damage and defense bonuses
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Access to exclusive content
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Speed and jump improvements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Niveles de Rebirth</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-600 mb-3">Nivel 1-5</h4>
                <p className="text-gray-700 text-sm mb-3">Rebirths iniciales</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multiplicador x1.5</li>
                  <li>• +10% velocidad</li>
                  <li>• +5% probabilidad raros</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-600 mb-3">Nivel 6-10</h4>
                <p className="text-gray-700 text-sm mb-3">Rebirths intermedios</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multiplicador x2.0</li>
                  <li>• +20% velocidad</li>
                  <li>• +10% probabilidad raros</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-purple-600 mb-3">Nivel 11+</h4>
                <p className="text-gray-700 text-sm mb-3">Rebirths avanzados</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multiplicador x3.0+</li>
                  <li>• +30% velocidad</li>
                  <li>• +15% probabilidad raros</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Estrategias de Rebirth</h3>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">¿Cuándo Hacer Rebirth?</h4>
                <p className="text-gray-700 mb-3">
                  La decisión de cuándo hacer Rebirth es crucial. Aquí te damos algunas pautas:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Rebirth Temprano:</strong> Si tienes pocos Brainrots pero quieres empezar a acumular beneficios</li>
                  <li><strong>Rebirth Tardío:</strong> Si tienes muchos Brainrots y quieres maximizar los beneficios</li>
                  <li><strong>Rebirth Estratégico:</strong> Cuando el multiplicador actual no es suficiente para tu progreso</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Optimización de Rebirth</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Antes del Rebirth:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Vende todos tus Brainrots</li>
                      <li>• Gasta todo tu dinero en power-ups</li>
                      <li>• Asegúrate de tener el máximo multiplicador</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Después del Rebirth:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Comienza con el nuevo multiplicador</li>
                      <li>• Aprovecha las mejoras de velocidad</li>
                      <li>• Enfócate en Brainrots de mayor valor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Advertencias Importantes</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Pérdida Total:</strong> Al hacer Rebirth, perderás TODOS tus Brainrots y dinero</li>
              <li>• <strong>Sin Vuelta Atrás:</strong> No puedes deshacer un Rebirth una vez confirmado</li>
              <li>• <strong>Progreso Reset:</strong> Tu progreso actual se reinicia completamente</li>
              <li>• <strong>Beneficios Permanentes:</strong> Solo las mejoras permanentes se mantienen</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href={`/${lang}/guides`}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Todas las Guías
          </Link>
        </div>
      </div>
    </div>
  )
} 