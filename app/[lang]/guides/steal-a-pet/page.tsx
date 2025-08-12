'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import SEOHead from '@/components/SEOHead'
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  CheckCircle, 
  Calendar,
  Info,
  Zap,
  Target,
  Award,
  Heart,
  PawPrint,
  Sword
} from 'lucide-react'

interface StealAPetGuideProps {
  params: Promise<{ lang: string }>
}

export default function StealAPetGuide({ params }: StealAPetGuideProps) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  return (
    <>
      <SEOHead
        title={t('guides.stealAPet.seoTitle') as string}
        description={t('guides.stealAPet.seoDescription') as string}
        keywords={t('guides.stealAPet.seoKeywords') as string}
        url={`/${lang}/guides/steal-a-pet`}
        lang={lang}
        type="guide"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('guides.backToGuides') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('guides.stealAPet.title') as string}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('guides.stealAPet.subtitle') as string}</p>
          
          {/* SEO Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t('guides.stealAPet.readingTime') as string}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {t('guides.stealAPet.difficulty') as string}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {t('guides.stealAPet.lastUpdated') as string}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">{t('guides.stealAPet.quickNavigation') as string}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#game-overview" className="text-green-700 hover:text-green-800 text-sm">
              {t('guides.stealAPet.nav.gameOverview') as string}
            </a>
            <a href="#pet-types" className="text-green-700 hover:text-green-800 text-sm">
              {t('guides.stealAPet.nav.petTypes') as string}
            </a>
            <a href="#battle-strategies" className="text-green-700 hover:text-green-800 text-sm">
              {t('guides.stealAPet.nav.battleStrategies') as string}
            </a>
            <a href="#faq" className="text-green-700 hover:text-green-800 text-sm">
              {t('guides.stealAPet.nav.faq') as string}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Overview Section */}
            <div id="game-overview" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <PawPrint className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-green-800">{t('guides.stealAPet.gameOverview') as string}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  {t('guides.stealAPet.gameOverviewDesc') as string}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('guides.stealAPet.gameFeatures') as string}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {Array.isArray(t('guides.stealAPet.gameFeaturesList')) ? 
                      (t('guides.stealAPet.gameFeaturesList') as string[]).map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      )) : 
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {t('guides.stealAPet.defaultFeature') as string}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/* Pet Types Section */}
            <div id="pet-types" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAPet.petTypes') as string}</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <PawPrint className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-600">{t('guides.stealAPet.commonPets.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAPet.commonPets.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAPet.commonPets.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAPet.commonPets.features')) ? 
                        (t('guides.stealAPet.commonPets.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAPet.commonPets.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-green-600">{t('guides.stealAPet.rarePets.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAPet.rarePets.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAPet.rarePets.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAPet.rarePets.features')) ? 
                        (t('guides.stealAPet.rarePets.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAPet.rarePets.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-blue-600">{t('guides.stealAPet.legendaryPets.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAPet.legendaryPets.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAPet.legendaryPets.characteristics') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAPet.legendaryPets.features')) ? 
                        (t('guides.stealAPet.legendaryPets.features') as string[]).map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAPet.legendaryPets.defaultFeature') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Battle Strategies Section */}
            <div id="battle-strategies" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAPet.battleStrategies') as string}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Sword className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-green-600">{t('guides.stealAPet.combatTactics.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAPet.combatTactics.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAPet.combatTactics.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAPet.combatTactics.tipsList')) ? 
                        (t('guides.stealAPet.combatTactics.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAPet.combatTactics.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-blue-600">{t('guides.stealAPet.teamFormation.title') as string}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{t('guides.stealAPet.teamFormation.description') as string}</p>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('guides.stealAPet.teamFormation.tips') as string}</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {Array.isArray(t('guides.stealAPet.teamFormation.tipsList')) ? 
                        (t('guides.stealAPet.teamFormation.tipsList') as string[]).map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        )) : 
                        <li className="flex items-start">
                          <Zap className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {t('guides.stealAPet.teamFormation.defaultTip') as string}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guides.stealAPet.faq.title') as string}</h2>
              <div className="space-y-6">
                {Array.isArray(t('guides.stealAPet.faq.questions')) ? 
                  (t('guides.stealAPet.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )) : 
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.stealAPet.faq.defaultQuestion') as string}</h3>
                    <p className="text-gray-700">{t('guides.stealAPet.faq.defaultAnswer') as string}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealAPet.prerequisites.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.stealAPet.prerequisites.list')) ? 
                  (t('guides.stealAPet.prerequisites.list') as string[]).map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prereq}
                    </li>
                  )) : 
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {t('guides.stealAPet.prerequisites.default') as string}
                  </li>
                }
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="text-lg font-bold text-green-800">{t('guides.stealAPet.tips.title') as string}</h3>
              </div>
              <p className="text-green-700 text-sm">{t('guides.stealAPet.tips.description') as string}</p>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('guides.stealAPet.relatedGuides.title') as string}</h3>
              <div className="space-y-3">
                <Link href={`/${lang}/guides/steal-a-fish`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAPet.relatedGuides.fish') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-a-labubu`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAPet.relatedGuides.labubu') as string}
                </Link>
                <Link href={`/${lang}/guides/steal-an-anime`} className="block text-blue-600 hover:text-blue-700">
                  {t('guides.stealAPet.relatedGuides.anime') as string}
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('guides.stealAPet.cta.title') as string}</h3>
              <p className="text-green-100 mb-4">{t('guides.stealAPet.cta.description') as string}</p>
              <Link 
                href={`/${lang}/guides`} 
                className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                {t('guides.stealAPet.cta.button') as string}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 