'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowLeft, Star, Trophy, Shield, Zap, Users, Clock, AlertTriangle, CheckCircle, MapPin, TrendingUp } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

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
    <>
      <SEOHead
        title={t('guides.segundoPiso.title') as string}
        description={t('guides.segundoPiso.subtitle') as string}
        keywords="Steal a Brainrot, 二楼, parkour, 跑酷, 游戏攻略, 游戏指南, 游戏技巧"
        url={`/${lang}/guides/second-floor`}
        lang={lang}
        type="article"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
          {/* Header with SEO */}
        <div className="text-center">
            <Link href={`/${lang}/guides`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
            {t('guides.backToGuides') as string}
          </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {t('guides.segundoPiso.title') as string}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {t('guides.segundoPiso.subtitle') as string}
            </p>
            
            {/* SEO Meta Information */}
            <div className="flex justify-center space-x-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{t('guides.segundoPiso.readingTime') as string}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{t('guides.segundoPiso.difficulty') as string}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>{t('guides.segundoPiso.rating') as string}</span>
              </div>
            </div>
        </div>

          {/* Quick Navigation */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('guides.segundoPiso.quickNav') as string}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#step1" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-semibold">1</div>
                <div className="text-sm text-gray-600">{t('guides.segundoPiso.step1.shortTitle') as string}</div>
              </a>
              <a href="#step2" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-green-600 font-semibold">2</div>
                <div className="text-sm text-gray-600">{t('guides.segundoPiso.step2.shortTitle') as string}</div>
              </a>
              <a href="#step3" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-yellow-600 font-semibold">3</div>
                <div className="text-sm text-gray-600">{t('guides.segundoPiso.step3.shortTitle') as string}</div>
              </a>
              <a href="#step4" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-red-600 font-semibold">4</div>
                <div className="text-sm text-gray-600">{t('guides.segundoPiso.step4.shortTitle') as string}</div>
              </a>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600" />
              {t('guides.segundoPiso.prerequisites.title') as string}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.prerequisites.requirements') as string}</h3>
                <ul className="space-y-2 text-gray-700">
                  {Array.isArray(t('guides.segundoPiso.prerequisites.list')) ? 
                    (t('guides.segundoPiso.prerequisites.list') as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    )) : 
                    <li>Requirements not available</li>
                  }
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.prerequisites.recommended') as string}</h3>
                <ul className="space-y-2 text-gray-700">
                  {Array.isArray(t('guides.segundoPiso.prerequisites.recommendedList')) ? 
                    (t('guides.segundoPiso.prerequisites.recommendedList') as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {item}
                      </li>
                    )) : 
                    <li>Recommendations not available</li>
                  }
                </ul>
              </div>
            </div>
          </div>

          {/* Step by Step Guide */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <MapPin className="w-8 h-8 mr-3 text-blue-600" />
              {t('guides.segundoPiso.stepByStep') as string}
            </h2>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div id="step1" className="border-l-4 border-blue-500 pl-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{t('guides.segundoPiso.step1.title') as string}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-lg">{t('guides.segundoPiso.step1.description') as string}</p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-2">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-800">{t('guides.segundoPiso.step1.tip') as string}</span>
                  </div>
                  <p className="text-blue-700">{t('guides.segundoPiso.step1.tipDetail') as string}</p>
              </div>
            </div>

            {/* Step 2 */}
              <div id="step2" className="border-l-4 border-green-500 pl-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{t('guides.segundoPiso.step2.title') as string}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-lg">{t('guides.segundoPiso.step2.description') as string}</p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">{t('guides.segundoPiso.step2.instructionsTitle') as string}</h4>
                  <ul className="space-y-2 text-green-700">
                {Array.isArray(t('guides.segundoPiso.step2.instructions')) ? 
                  (t('guides.segundoPiso.step2.instructions') as string[]).map((instruction: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {instruction}
                        </li>
                  )) : 
                  <li>Instructions not available</li>
                }
              </ul>
                </div>
            </div>

            {/* Step 3 */}
              <div id="step3" className="border-l-4 border-yellow-500 pl-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{t('guides.segundoPiso.step3.title') as string}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-lg">{t('guides.segundoPiso.step3.description') as string}</p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-yellow-800">{t('guides.segundoPiso.step3.warning') as string}</span>
                  </div>
                  <p className="text-yellow-700">{t('guides.segundoPiso.step3.warningDetail') as string}</p>
                </div>
            </div>

            {/* Step 4 */}
              <div id="step4" className="border-l-4 border-red-500 pl-8">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{t('guides.segundoPiso.step4.title') as string}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-lg">{t('guides.segundoPiso.step4.description') as string}</p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">{t('guides.segundoPiso.step4.instructionsTitle') as string}</h4>
                  <ul className="space-y-2 text-red-700">
                {Array.isArray(t('guides.segundoPiso.step4.instructions')) ? 
                  (t('guides.segundoPiso.step4.instructions') as string[]).map((instruction: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {instruction}
                        </li>
                  )) : 
                  <li>Instructions not available</li>
                }
              </ul>
                </div>
            </div>

            {/* Step 5 */}
              <div id="step5" className="border-l-4 border-purple-500 pl-8">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    5
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{t('guides.segundoPiso.step5.title') as string}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-lg">{t('guides.segundoPiso.step5.description') as string}</p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">{t('guides.segundoPiso.step5.reward') as string}</span>
                  </div>
                  <p className="text-green-700">{t('guides.segundoPiso.step5.rewardDetail') as string}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Tips */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
              {t('guides.segundoPiso.advancedTips.title') as string}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{t('guides.segundoPiso.advancedTips.timing.title') as string}</h3>
                <p className="text-blue-800 mb-4">{t('guides.segundoPiso.advancedTips.timing.description') as string}</p>
                <ul className="space-y-2 text-blue-700">
                  {Array.isArray(t('guides.segundoPiso.advancedTips.timing.tips')) ? 
                    (t('guides.segundoPiso.advancedTips.timing.tips') as string[]).map((tip: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {tip}
                      </li>
                    )) : 
                    <li>Tips not available</li>
                  }
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-900 mb-3">{t('guides.segundoPiso.advancedTips.strategy.title') as string}</h3>
                <p className="text-green-800 mb-4">{t('guides.segundoPiso.advancedTips.strategy.description') as string}</p>
                <ul className="space-y-2 text-green-700">
                  {Array.isArray(t('guides.segundoPiso.advancedTips.strategy.tips')) ? 
                    (t('guides.segundoPiso.advancedTips.strategy.tips') as string[]).map((tip: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {tip}
                      </li>
                    )) : 
                    <li>Tips not available</li>
                  }
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-900 mb-3">{t('guides.segundoPiso.advancedTips.equipment.title') as string}</h3>
                <p className="text-yellow-800 mb-4">{t('guides.segundoPiso.advancedTips.equipment.description') as string}</p>
                <ul className="space-y-2 text-yellow-700">
                  {Array.isArray(t('guides.segundoPiso.advancedTips.equipment.tips')) ? 
                    (t('guides.segundoPiso.advancedTips.equipment.tips') as string[]).map((tip: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {tip}
                      </li>
                    )) : 
                    <li>Tips not available</li>
                  }
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">{t('guides.segundoPiso.advancedTips.teamwork.title') as string}</h3>
                <p className="text-purple-800 mb-4">{t('guides.segundoPiso.advancedTips.teamwork.description') as string}</p>
                <ul className="space-y-2 text-purple-700">
                  {Array.isArray(t('guides.segundoPiso.advancedTips.teamwork.tips')) ? 
                    (t('guides.segundoPiso.advancedTips.teamwork.tips') as string[]).map((tip: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {tip}
                      </li>
                    )) : 
                    <li>Tips not available</li>
                  }
                </ul>
            </div>
          </div>
        </div>

          {/* Common Mistakes */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3 text-red-600" />
              {t('guides.segundoPiso.commonMistakes.title') as string}
            </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
              {Array.isArray(t('guides.segundoPiso.commonMistakes.list')) ? 
                (t('guides.segundoPiso.commonMistakes.list') as Array<{title: string, description: string, solution: string}>).map((mistake, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">{mistake.title}</h3>
                    <p className="text-red-800 mb-2">{mistake.description}</p>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <span className="font-semibold text-green-800">{t('guides.segundoPiso.commonMistakes.solution') as string}: </span>
                      <span className="text-green-700">{mistake.solution}</span>
                    </div>
                  </div>
                )) : 
                <div>Mistakes not available</div>
              }
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('guides.segundoPiso.faq.title') as string}</h2>
            
            <div className="space-y-6">
              {Array.isArray(t('guides.segundoPiso.faq.questions')) ? 
                (t('guides.segundoPiso.faq.questions') as Array<{question: string, answer: string}>).map((faq, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )) : 
                <div>FAQ not available</div>
              }
            </div>
          </div>

          {/* Related Guides */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('guides.segundoPiso.relatedGuides.title') as string}</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href={`/${lang}/guides/rebirth`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.relatedGuides.rebirth.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('guides.segundoPiso.relatedGuides.rebirth.description') as string}</p>
              </Link>
              
              <Link href={`/${lang}/guides/scripts`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.relatedGuides.scripts.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('guides.segundoPiso.relatedGuides.scripts.description') as string}</p>
              </Link>
              
              <Link href={`/${lang}/guides/secrets`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guides.segundoPiso.relatedGuides.secrets.title') as string}</h3>
                <p className="text-gray-600 text-sm">{t('guides.segundoPiso.relatedGuides.secrets.description') as string}</p>
              </Link>
          </div>
        </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">{t('guides.segundoPiso.cta.title') as string}</h2>
            <p className="text-xl mb-6">{t('guides.segundoPiso.cta.description') as string}</p>
            <div className="flex justify-center space-x-4">
              <Link href={`/${lang}/brainrots`} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t('guides.segundoPiso.cta.viewCharacters') as string}
              </Link>
              <Link href={`/${lang}/calculadora`} className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                {t('guides.segundoPiso.cta.calculator') as string}
          </Link>
        </div>
      </div>
    </div>
      </div>
    </>
  )
} 