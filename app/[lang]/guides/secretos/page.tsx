'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowLeft, Eye, Lock, Target, Zap, Shield, Users, Trophy, AlertTriangle, Star, Key } from 'lucide-react'

interface SecretosPageProps {
  params: Promise<{ lang: string }>
}

export default function SecretosPage({ params }: SecretosPageProps) {
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
            🔐 {t('guides.secretos.title') as string}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('guides.secretos.description') as string}
          </p>
        </div>

        {/* What are Secrets */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-blue-500" />
            {t('guides.secretos.whatAre.title') as string}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('guides.secretos.whatAre.description') as string}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">{t('guides.secretos.whatAre.types.title') as string}</h3>
              <ul className="text-green-700 space-y-1">
                <li>• {t('guides.secretos.whatAre.types.type1') as string}</li>
                <li>• {t('guides.secretos.whatAre.types.type2') as string}</li>
                <li>• {t('guides.secretos.whatAre.types.type3') as string}</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">{t('guides.secretos.whatAre.rewards.title') as string}</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• {t('guides.secretos.whatAre.rewards.reward1') as string}</li>
                <li>• {t('guides.secretos.whatAre.rewards.reward2') as string}</li>
                <li>• {t('guides.secretos.whatAre.rewards.reward3') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Find Secrets */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Key className="w-6 h-6 text-yellow-500" />
            {t('guides.secretos.howToFind.title') as string}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.secretos.howToFind.method1.title') as string}</h3>
                <p className="text-gray-600">{t('guides.secretos.howToFind.method1.description') as string}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.secretos.howToFind.method2.title') as string}</h3>
                <p className="text-gray-600">{t('guides.secretos.howToFind.method2.description') as string}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('guides.secretos.howToFind.method3.title') as string}</h3>
                <p className="text-gray-600">{t('guides.secretos.howToFind.method3.description') as string}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secret Locations */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-500" />
            {t('guides.secretos.locations.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">{t('guides.secretos.locations.easy.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('guides.secretos.locations.easy.loc1') as string}</li>
                <li>• {t('guides.secretos.locations.easy.loc2') as string}</li>
                <li>• {t('guides.secretos.locations.easy.loc3') as string}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">{t('guides.secretos.locations.hard.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('guides.secretos.locations.hard.loc1') as string}</li>
                <li>• {t('guides.secretos.locations.hard.loc2') as string}</li>
                <li>• {t('guides.secretos.locations.hard.loc3') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            {t('guides.secretos.tips.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                {t('guides.secretos.tips.dos.title') as string}
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• {t('guides.secretos.tips.dos.tip1') as string}</li>
                <li>• {t('guides.secretos.tips.dos.tip2') as string}</li>
                <li>• {t('guides.secretos.tips.dos.tip3') as string}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t('guides.secretos.tips.donts.title') as string}
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• {t('guides.secretos.tips.donts.tip1') as string}</li>
                <li>• {t('guides.secretos.tips.donts.tip2') as string}</li>
                <li>• {t('guides.secretos.tips.donts.tip3') as string}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warnings */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-red-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            {t('guides.secretos.warnings.title') as string}
          </h2>
          <div className="space-y-3 text-red-700">
            <p>• {t('guides.secretos.warnings.warning1') as string}</p>
            <p>• {t('guides.secretos.warnings.warning2') as string}</p>
            <p>• {t('guides.secretos.warnings.warning3') as string}</p>
          </div>
        </div>

        {/* Community Insights */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-500" />
            {t('guides.secretos.community.title') as string}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{t('guides.secretos.community.experience.title') as string}</h3>
              <p className="text-gray-600 text-sm">{t('guides.secretos.community.experience.description') as string}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{t('guides.secretos.community.strategies.title') as string}</h3>
              <p className="text-gray-600 text-sm">{t('guides.secretos.community.strategies.description') as string}</p>
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
            {t('guides.secretos.cta') as string}
          </Link>
        </div>
      </div>
    </div>
  )
} 