'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Target, TrendingUp, Users, Star, Calculator, CheckCircle, AlertCircle, ArrowRight, Zap, Shield, Gamepad2, Clock, DollarSign, BarChart3 } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface GuidesPageProps {
  params: Promise<{ lang: string }>
}

export default function GuidesPage({ params }: GuidesPageProps) {
  const [lang, setLang] = useState('es')
  const [selectedStrategy, setSelectedStrategy] = useState<string>('conservative')
  const [investmentAmount, setInvestmentAmount] = useState<number>(1000)
  const [timeFrame, setTimeFrame] = useState<string>('1month')
  const [experienceLevel, setExperienceLevel] = useState<string>('beginner')
  const [showCalculator, setShowCalculator] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [currentStep, setCurrentStep] = useState<number>(1)

  // 获取语言参数
  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)
  
  // 调试信息
  console.log('Current lang:', lang)
  console.log('Translation test:', t('guides.title'))
  console.log('Translation test 2:', t('guides.description'))

  // 策略数据
  const strategies = {
    conservative: {
      name: t('guides.strategies.conservative.title'),
      description: t('guides.strategies.conservative.description'),
      characters: ['Sigma Boy', 'Alpha Male', 'Beta Female'],
      riskLevel: t('guides.low'),
      expectedReturn: '15-25%',
      color: 'green'
    },
    balanced: {
      name: t('guides.strategies.balanced.title'),
      description: t('guides.strategies.balanced.description'),
      characters: ['Sigma Boy', 'Chad', 'Gigachad', 'Epic Character'],
      riskLevel: t('guides.medium'),
      expectedReturn: '25-40%',
      color: 'blue'
    },
    aggressive: {
      name: t('guides.strategies.aggressive.title'),
      description: t('guides.strategies.aggressive.description'),
      characters: ['Legendary Character', 'Divine Character', 'Supreme Chad'],
      riskLevel: t('guides.high'),
      expectedReturn: '40-80%',
      color: 'purple'
    }
  }

  // 计算预期收益
  const calculateExpectedReturn = () => {
    const baseReturn = {
      conservative: 0.2,
      balanced: 0.35,
      aggressive: 0.6
    }
    
    const timeMultiplier = {
      '1week': 0.25,
      '1month': 1,
      '3months': 3,
      '6months': 6
    }
    
    const strategy = strategies[selectedStrategy as keyof typeof strategies]
    const baseRate = baseReturn[selectedStrategy as keyof typeof baseReturn]
    const multiplier = timeMultiplier[timeFrame as keyof typeof timeMultiplier]
    
    return investmentAmount * baseRate * multiplier
  }

  // 完成步骤
  const completeStep = (stepNumber: number) => {
    if (!completedSteps.includes(stepNumber)) {
      setCompletedSteps([...completedSteps, stepNumber])
    }
  }

  // 下一步
  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  // 上一步
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const expectedReturn = calculateExpectedReturn()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← {t('common.backToHome')}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">📚 {t('guides.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('guides.description')}
          </p>
        </div>

        {/* Quick Guide */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold">{t('guides.quickGuide')}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-semibold">{t('guides.step1')}</h3>
                <p className="text-gray-600">{t('guides.step1Desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-semibold">{t('guides.step2')}</h3>
                <p className="text-gray-600">{t('guides.step2Desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-semibold">{t('guides.step3')}</h3>
                <p className="text-gray-600">{t('guides.step3Desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Strategies */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold">{t('guides.strategies.title')}</h2>
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
                    <span>{t('guides.risk')}</span>
                    <span className={`font-semibold text-${strategy.color}-600`}>{strategy.riskLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('guides.return')}</span>
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
            <h2 className="text-2xl font-bold">{t('guides.optimization.title')}</h2>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              {Array.isArray(t('guides.optimization.tips')) ? t('guides.optimization.tips').map((tip: string, index: number) => (
                <li key={index}>• {tip}</li>
              )) : [
                "Regularly review character price changes",
                "Pay attention to new character release timing", 
                "Use the rebirth system to increase profits",
                "Diversify investments to reduce risk",
                "Set reasonable investment goals"
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
            <h2 className="text-2xl font-bold">{t('guides.rarity.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.common.title')}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.common.description')}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.rare.title')}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.rare.description')}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐⭐⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.epic.title')}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.epic.description')}</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⭐⭐⭐⭐</div>
              <h3 className="font-semibold">{t('guides.rarity.legendary.title')}</h3>
              <p className="text-sm text-gray-600">{t('guides.rarity.legendary.description')}</p>
            </div>
          </div>
        </div>

        {/* Tips and Tricks */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">💡 {t('guides.tips.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">{t('guides.tips.beginners.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.tips.beginners.tips')) ? t('guides.tips.beginners.tips').map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                )) : [
                  "Start with small investments",
                  "Learn to use calculator tools",
                  "Follow community discussions",
                  "Don't rush for rare characters",
                  "Establish a solid profit base"
                ].map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">{t('guides.tips.advanced.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                {Array.isArray(t('guides.tips.advanced.tips')) ? t('guides.tips.advanced.tips').map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                )) : [
                  "Study market trends",
                  "Optimize character combinations",
                  "Take advantage of rebirth moments",
                  "Pay attention to update advances",
                  "Build an investment portfolio"
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
            <h2 className="text-2xl font-bold">{t('guides.community.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-semibold mb-2">{t('guides.community.discord.title')}</h3>
              <p className="text-sm text-gray-600">{t('guides.community.discord.description')}</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">{t('guides.community.youtube.title')}</h3>
              <p className="text-sm text-gray-600">{t('guides.community.youtube.description')}</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">{t('guides.community.reddit.title')}</h3>
              <p className="text-sm text-gray-600">{t('guides.community.reddit.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 