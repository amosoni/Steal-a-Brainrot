'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowLeft, Star, TrendingUp, Target, Zap, Shield, Users, Trophy, AlertTriangle } from 'lucide-react'

interface RebirthPageProps {
  params: Promise<{ lang: string }>
}

export default function RebirthPage({ params }: RebirthPageProps) {
  const [lang, setLang] = useState('es')
  
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
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            {t('common.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔄 {t('guides.rebirth.title') as string}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('guides.rebirth.description') as string}
          </p>
        </div>

        {/* What is Rebirth */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            {t('guides.rebirth.whatIs.title') as string}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('guides.rebirth.whatIs.description') as string}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">{t('guides.rebirth.whatIs.benefits.title') as string}</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• {t('guides.rebirth.whatIs.benefits.benefit1') as string}</li>
                <li>• {t('guides.rebirth.whatIs.benefits.benefit2') as string}</li>
                <li>• {t('guides.rebirth.whatIs.benefits.benefit3') as string}</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">{t('guides.rebirth.whatIs.costs.title') as string}</h3>
              <ul className="text-red-700 space-y-1">
                <li>• {t('guides.rebirth.whatIs.costs.cost1') as string}</li>
                <li>• {t('guides.rebirth.whatIs.costs.cost2') as string}</li>
                <li>• {t('guides.rebirth.whatIs.costs.cost3') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to Rebirth */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-500" />
            {t('guides.rebirth.whenTo.title') as string}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.rebirth.whenTo.optimal.title') as string}</h3>
                <p className="text-gray-600">{t('guides.rebirth.whenTo.optimal.description') as string}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.rebirth.whenTo.consider.title') as string}</h3>
                <p className="text-gray-600">{t('guides.rebirth.whenTo.consider.description') as string}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.rebirth.whenTo.avoid.title') as string}</h3>
                <p className="text-gray-600">{t('guides.rebirth.whenTo.avoid.description') as string}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rebirth Strategy */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            {t('guides.rebirth.strategy.title') as string}
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <h3 className="font-semibold text-gray-800 mb-2">{t('guides.rebirth.strategy.step1.title') as string}</h3>
                <p className="text-sm text-gray-600">{t('guides.rebirth.strategy.step1.description') as string}</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <h3 className="font-semibold text-gray-800 mb-2">{t('guides.rebirth.strategy.step2.title') as string}</h3>
                <p className="text-sm text-gray-600">{t('guides.rebirth.strategy.step2.description') as string}</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <h3 className="font-semibold text-gray-800 mb-2">{t('guides.rebirth.strategy.step3.title') as string}</h3>
                <p className="text-sm text-gray-600">{t('guides.rebirth.strategy.step3.description') as string}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips and Warnings */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" />
            {t('guides.rebirth.tips.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                {t('guides.rebirth.tips.dos.title') as string}
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• {t('guides.rebirth.tips.dos.tip1') as string}</li>
                <li>• {t('guides.rebirth.tips.dos.tip2') as string}</li>
                <li>• {t('guides.rebirth.tips.dos.tip3') as string}</li>
                <li>• {t('guides.rebirth.tips.dos.tip4') as string}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t('guides.rebirth.tips.donts.title') as string}
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• {t('guides.rebirth.tips.donts.tip1') as string}</li>
                <li>• {t('guides.rebirth.tips.donts.tip2') as string}</li>
                <li>• {t('guides.rebirth.tips.donts.tip3') as string}</li>
                <li>• {t('guides.rebirth.tips.donts.tip4') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Insights */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-500" />
            {t('guides.rebirth.community.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{t('guides.rebirth.community.experience.title') as string}</h3>
              <p className="text-gray-600 text-sm">{t('guides.rebirth.community.experience.description') as string}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{t('guides.rebirth.community.strategies.title') as string}</h3>
              <p className="text-gray-600 text-sm">{t('guides.rebirth.community.strategies.description') as string}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href={`/${lang}/brainrots`}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Trophy className="w-5 h-5" />
            {t('guides.rebirth.cta') as string}
          </Link>
        </div>
      </div>
    </div>
  )
} 