'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowLeft, Building2, ArrowUpDown, Target, Zap, Shield, Users, Trophy, AlertTriangle, Star } from 'lucide-react'

interface SecondFloorPageProps {
  params: Promise<{ lang: string }>
}

export default function SecondFloorPage({ params }: SecondFloorPageProps) {
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
            🏢 {t('guides.secondFloor.title') as string}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('guides.secondFloor.description') as string}
          </p>
        </div>

        {/* What is Second Floor */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-500" />
            {t('guides.secondFloor.whatIs.title') as string}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('guides.secondFloor.whatIs.description') as string}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">{t('guides.secondFloor.whatIs.advantages.title') as string}</h3>
              <ul className="text-green-700 space-y-1">
                <li>• {t('guides.secondFloor.whatIs.advantages.adv1') as string}</li>
                <li>• {t('guides.secondFloor.whatIs.advantages.adv2') as string}</li>
                <li>• {t('guides.secondFloor.whatIs.advantages.adv3') as string}</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">{t('guides.secondFloor.whatIs.challenges.title') as string}</h3>
              <ul className="text-orange-700 space-y-1">
                <li>• {t('guides.secondFloor.whatIs.challenges.chal1') as string}</li>
                <li>• {t('guides.secondFloor.whatIs.challenges.chal2') as string}</li>
                <li>• {t('guides.secondFloor.whatIs.challenges.chal3') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Access */}
        <div className="bg-white rounded-lg shadow-lg p-6">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <ArrowUpDown className="w-6 h-6 text-purple-500" />
              {t('guides.secondFloor.access.title') as string}
            </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.secondFloor.access.requirement1.title') as string}</h3>
                <p className="text-gray-600">{t('guides.secondFloor.access.requirement1.description') as string}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.secondFloor.access.requirement2.title') as string}</h3>
                <p className="text-gray-600">{t('guides.secondFloor.access.requirement2.description') as string}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.secondFloor.access.requirement3.title') as string}</h3>
                <p className="text-gray-600">{t('guides.secondFloor.access.requirement3.description') as string}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategies */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-500" />
            {t('guides.secondFloor.strategies.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">{t('guides.secondFloor.strategies.offensive.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('guides.secondFloor.strategies.offensive.strat1') as string}</li>
                <li>• {t('guides.secondFloor.strategies.offensive.strat2') as string}</li>
                <li>• {t('guides.secondFloor.strategies.offensive.strat3') as string}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">{t('guides.secondFloor.strategies.defensive.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('guides.secondFloor.strategies.defensive.strat1') as string}</li>
                <li>• {t('guides.secondFloor.strategies.defensive.strat2') as string}</li>
                <li>• {t('guides.secondFloor.strategies.defensive.strat3') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            {t('guides.secondFloor.tips.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                {t('guides.secondFloor.tips.dos.title') as string}
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• {t('guides.secondFloor.tips.dos.tip1') as string}</li>
                <li>• {t('guides.secondFloor.tips.dos.tip2') as string}</li>
                <li>• {t('guides.secondFloor.tips.dos.tip3') as string}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t('guides.secondFloor.tips.donts.title') as string}
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• {t('guides.secondFloor.tips.donts.tip1') as string}</li>
                <li>• {t('guides.secondFloor.tips.donts.tip2') as string}</li>
                <li>• {t('guides.secondFloor.tips.donts.tip3') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warnings */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-red-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            {t('guides.secondFloor.warnings.title') as string}
          </h2>
          <div className="space-y-3 text-red-700">
            <p>• {t('guides.secondFloor.warnings.warning1') as string}</p>
            <p>• {t('guides.secondFloor.warnings.warning2') as string}</p>
            <p>• {t('guides.secondFloor.warnings.warning3') as string}</p>
          </div>
        </div>

        {/* Community Insights */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-500" />
            {t('guides.secondFloor.community.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{t('guides.secondFloor.community.experience.title') as string}</h3>
              <p className="text-gray-600 text-sm">{t('guides.secondFloor.community.experience.description') as string}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{t('guides.secondFloor.community.strategies.title') as string}</h3>
              <p className="text-gray-600 text-sm">{t('guides.secondFloor.community.strategies.description') as string}</p>
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
            {t('guides.secondFloor.cta') as string}
          </Link>
        </div>
      </div>
    </div>
  )
} 