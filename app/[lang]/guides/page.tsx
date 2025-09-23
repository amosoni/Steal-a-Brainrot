'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Target, TrendingUp, Users, Star } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import PageSEO from '@/components/PageSEO'

interface GuidesPageProps {
  params: Promise<{ lang: string }>
}

export default function GuidesPage({ params }: GuidesPageProps) {
  const [lang, setLang] = useState('es')
  const [selectedStrategy, setSelectedStrategy] = useState<string>('conservative')
  // 这些状态变量当前未使用，但保留以备将来使用
  // const [investmentAmount, setInvestmentAmount] = useState<number>(1000)
  // const [timeFrame, setTimeFrame] = useState<string>('1month')
  // const [experienceLevel, setExperienceLevel] = useState<string>('beginner')
  // const [showCalculator, setShowCalculator] = useState(false)
  // const [completedSteps, setCompletedSteps] = useState<number[]>([])
  // const [currentStep, setCurrentStep] = useState<number>(1)

  // 获取语言参数
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

  // 策略数据
  const strategies = {
    conservative: {
      name: t('guides.strategies.conservative.title') as string,
      description: t('guides.strategies.conservative.description') as string,
      characters: ['Sigma Boy', 'Alpha Male', 'Beta Female'],
      riskLevel: t('guides.low') as string,
      expectedReturn: '15-25%',
      color: 'green'
    },
    balanced: {
      name: t('guides.strategies.balanced.title') as string,
      description: t('guides.strategies.balanced.description') as string,
      characters: ['Sigma Boy', 'Chad', 'Gigachad', 'Epic Character'],
      riskLevel: t('guides.medium') as string,
      expectedReturn: '25-40%',
      color: 'blue'
    },
    aggressive: {
      name: t('guides.strategies.aggressive.title') as string,
      description: t('guides.strategies.aggressive.description') as string,
      characters: ['Legendary Character', 'Divine Character', 'Supreme Chad'],
      riskLevel: t('guides.high') as string,
      expectedReturn: '40-80%',
      color: 'purple'
    }
  }

  // 精选指南数据
  const featuredGuides = [
    {
      key: 'secondFloor',
      title: t('home.featuredGuides.secondFloor.title') as string,
      description: t('home.featuredGuides.secondFloor.description') as string,
      href: `/${lang}/guides/second-floor`
    },
    {
      key: 'rebirth',
      title: t('home.featuredGuides.rebirth.title') as string,
      description: t('home.featuredGuides.rebirth.description') as string,
      href: `/${lang}/guides/rebirth`
    },
    {
      key: 'scripts',
      title: t('home.featuredGuides.scripts.title') as string,
      description: t('home.featuredGuides.scripts.description') as string,
      href: `/${lang}/guides/scripts`
    },
    {
      key: 'secrets',
      title: t('home.featuredGuides.secrets.title') as string,
      description: t('home.featuredGuides.secrets.description') as string,
      href: `/${lang}/guides/secrets`
    },
    {
      key: 'codes',
      title: t('home.featuredGuides.codes.title') as string,
      description: t('home.featuredGuides.codes.description') as string,
      href: `/${lang}/guides/codes`
    },
    {
      key: 'modified',
      title: t('home.featuredGuides.modified.title') as string,
      description: t('home.featuredGuides.modified.description') as string,
      href: `/${lang}/guides/modified`
    },
    {
      key: 'scriptsNoKey',
      title: t('home.featuredGuides.scriptsNoKey.title') as string,
      description: t('home.featuredGuides.scriptsNoKey.description') as string,
      href: `/${lang}/guides/scripts-no-key`
    },
    {
      key: 'probabilities',
      title: t('home.featuredGuides.probabilities.title') as string,
      description: t('home.featuredGuides.probabilities.description') as string,
      href: `/${lang}/guides/probabilities`
    },
    {
      key: 'advancedStrategies',
      title: t('home.featuredGuides.advancedStrategies.title') as string,
      description: t('home.featuredGuides.advancedStrategies.description') as string,
      href: `/${lang}/guides/advanced-strategies`
    }
  ]

  // 计算预期收益 - 当前未使用，但保留以备将来使用
  // const calculateExpectedReturn = () => {
  //   const baseReturn = {
  //     conservative: 0.2,
  //     balanced: 0.35,
  //     aggressive: 0.6
  //   }
    
  //   const timeMultiplier = {
  //     '1week': 0.25,
  //     '1month': 1,
  //     '3months': 3,
  //     '6months': 6
  //   }
    
  //   // 这些变量当前未使用，但保留以备将来使用
  //   // const strategy = strategies[selectedStrategy as keyof typeof strategies]
  //   // const baseRate = baseReturn[selectedStrategy as keyof typeof baseReturn]
  //   // const multiplier = timeMultiplier[timeFrame as keyof typeof timeMultiplier]
    
  //   // return investmentAmount * baseRate * multiplier
  // }

  // 完成步骤 - 当前未使用，但保留以备将来使用
  // const completeStep = (stepNumber: number) => {
  //   if (!completedSteps.includes(stepNumber)) {
  //     setCompletedSteps([...completedSteps, stepNumber])
  //   }
  // }

  // 下一步 - 当前未使用，但保留以备将来使用
  // const nextStep = () => {
  //   if (currentStep < 5) {
  //     setCurrentStep(currentStep + 1)
  //   }
  // }

  // 上一步 - 当前未使用，但保留以备将来使用
  // const prevStep = () => {
  //   if (currentStep > 1) {
  //     setCurrentStep(currentStep - 1)
  //   }
  // }

  // const expectedReturn = calculateExpectedReturn()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageSEO
        title={t('guides.title') as string}
        description={t('guides.description') as string}
        keywords={[
          t('guides.title') as string,
          'Steal a Brainrot',
          'Roblox',
          'Guides',
          'Strategy',
          'Tips',
          'Tutorials'
        ].join(', ')}
        url={`/${lang}/guides`}
        lang={lang}
        type="guide"
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← {t('common.backToHome') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">📚 {t('guides.title') as string}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('guides.description') as string}
          </p>
        </div>

        {/* Featured Guides */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t('home.featuredGuides.title') as string}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.key}
                href={guide.href}
                className="block p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-100"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Guide */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">{t('guides.quickGuide') as string}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-semibold">{t('guides.step1') as string}</h3>
                <p className="text-gray-600">{t('guides.step1Desc') as string}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-semibold">{t('guides.step2') as string}</h3>
                <p className="text-gray-600">{t('guides.step2Desc') as string}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-semibold">{t('guides.step3') as string}</h3>
                <p className="text-gray-600">{t('guides.step3Desc') as string}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Strategies */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold">{t('guides.strategies.title') as string}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(strategies).map(([key, strategy]) => (
              <div
                key={key}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedStrategy === key
                    ? `border-${strategy.color}-500 bg-${strategy.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedStrategy(key)}
              >
                <h3 className="font-semibold text-lg mb-2">{strategy.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>{t('guides.risk') as string}</span>
                    <span className={`font-semibold text-${strategy.color}-600`}>{strategy.riskLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('guides.return') as string}</span>
                    <span className="font-semibold text-green-600">{strategy.expectedReturn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Tips */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-yellow-600 mr-3" />
            <h2 className="text-2xl font-bold">{t('guides.optimization.title') as string}</h2>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              {Array.isArray(t('guides.optimization.tips') as unknown) ? getArrayData('guides.optimization.tips').map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              )) : [
                t('guides.optimization.tips.0') as string,
                t('guides.optimization.tips.1') as string,
                t('guides.optimization.tips.2') as string,
                t('guides.optimization.tips.3') as string,
                t('guides.optimization.tips.4') as string
              ].map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Character Rarity Guide */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-yellow-600 mr-3" />
            <h2 className="text-2xl font-bold">{t('guides.rarity.title') as string}</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.common.title') as string}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.common.description') as string}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.rare.title') as string}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.rare.description') as string}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐⭐⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.epic.title') as string}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.epic.description') as string}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐⭐⭐⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.legendary.title') as string}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.legendary.description') as string}</p>
            </div>
          </div>
        </div>

        {/* Tips and Tricks */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">💡 {t('guides.tips.title') as string}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">{t('guides.tips.beginners.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.tips.beginners.tips') as unknown) ? getArrayData('guides.tips.beginners.tips').map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                )) : [
                  t('guides.tips.beginners.tips.0') as string,
                  t('guides.tips.beginners.tips.1') as string,
                  t('guides.tips.beginners.tips.2') as string,
                  t('guides.tips.beginners.tips.3') as string,
                  t('guides.tips.beginners.tips.4') as string
                ].map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">{t('guides.tips.advanced.title') as string}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.tips.advanced.tips') as unknown) ? getArrayData('guides.tips.advanced.tips').map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                )) : [
                  t('guides.tips.advanced.tips.0') as string,
                  t('guides.tips.advanced.tips.1') as string,
                  t('guides.tips.advanced.tips.2') as string,
                  t('guides.tips.advanced.tips.3') as string,
                  t('guides.tips.advanced.tips.4') as string
                ].map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">{t('guides.community.title') as string}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-semibold mb-2">{t('guides.community.discord.title') as string}</h3>
              <p className="text-sm text-gray-600">{t('guides.community.discord.description') as string}</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">{t('guides.community.youtube.title') as string}</h3>
              <p className="text-sm text-gray-600">{t('guides.community.youtube.description') as string}</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">{t('guides.community.reddit.title') as string}</h3>
              <p className="text-sm text-gray-600">{t('guides.community.reddit.description') as string}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 