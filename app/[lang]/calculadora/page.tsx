'use client'
import { useState, useEffect } from 'react'
import { brainrots } from '@/data/brainrots'
import { Calculator, DollarSign, Target, TrendingUp, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { getCharacterImageUrl } from '@/data/imageMapping'

interface CalculadoraPageProps {
  params: Promise<{ lang: string }>
}

export default function CalculadoraPage({ params }: CalculadoraPageProps) {
  const [lang, setLang] = useState('zh')
  const [selectedBrainrots, setSelectedBrainrots] = useState<string[]>([])
  const [investment, setInvestment] = useState('')
  const [timeFrame, setTimeFrame] = useState('24')

  // 获取语言参数
  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)

  // 计算总收益（每小时）
  const calculateTotalHourlyProfit = () => {
    const selectedItems = brainrots.filter(b => selectedBrainrots.includes(b.id))
    return selectedItems.reduce((sum, item) => sum + item.profit, 0)
  }

  // 计算总投资
  const calculateTotalInvestment = () => {
    const selectedItems = brainrots.filter(b => selectedBrainrots.includes(b.id))
    return selectedItems.reduce((sum, item) => sum + item.price, 0)
  }

  // 计算指定时间内的总收益
  const calculateTotalProfit = () => {
    const hourlyProfit = calculateTotalHourlyProfit()
    const hours = parseInt(timeFrame)
    return hourlyProfit * hours
  }

  // 计算净收益（总收益 - 投资）
  const calculateNetProfit = () => {
    const totalProfit = calculateTotalProfit()
    const totalInvestment = calculateTotalInvestment()
    return totalProfit - totalInvestment
  }

  // 计算ROI
  const calculateROI = () => {
    const netProfit = calculateNetProfit()
    const totalInvestment = calculateTotalInvestment()
    return totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0
  }

  // 计算每小时ROI
  const calculateHourlyROI = () => {
    const hourlyProfit = calculateTotalHourlyProfit()
    const totalInvestment = calculateTotalInvestment()
    return totalInvestment > 0 ? (hourlyProfit / totalInvestment) * 100 : 0
  }

  const handleBrainrotToggle = (brainrotId: string) => {
    setSelectedBrainrots(prev => 
      prev.includes(brainrotId) 
        ? prev.filter(id => id !== brainrotId)
        : [...prev, brainrotId]
    )
  }

  const handleInvestmentChange = (value: string) => {
    // 只允许数字和逗号
    const cleaned = value.replace(/[^\d,]/g, '')
    setInvestment(cleaned)
  }

  const selectedItems = brainrots.filter(b => selectedBrainrots.includes(b.id))
  const totalHourlyProfit = calculateTotalHourlyProfit()
  const totalInvestment = calculateTotalInvestment()
  const totalProfit = calculateTotalProfit()
  const netProfit = calculateNetProfit()
  const roi = calculateROI()
  const hourlyROI = calculateHourlyROI()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← {t('common.backToHome')}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">💰 {t('calculator.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('calculator.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">{t('calculator.investment')}</h2>
              
              {/* Investment Amount */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('calculator.investment')} (Robux)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={investment}
                    onChange={(e) => handleInvestmentChange(e.target.value)}
                    placeholder={t('calculator.enterInvestmentAmount')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Time Frame */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('calculator.timeFrame')} (horas)
                </label>
                <select
                  value={timeFrame}
                  onChange={(e) => setTimeFrame(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1">1 {t('calculator.hour')}</option>
                  <option value="6">6 {t('calculator.hours')}</option>
                  <option value="12">12 {t('calculator.hours')}</option>
                  <option value="24">24 {t('calculator.hours')}</option>
                  <option value="48">48 {t('calculator.hours')}</option>
                  <option value="72">72 {t('calculator.hours')}</option>
                  <option value="168">1 {t('calculator.week')}</option>
                  <option value="720">1 {t('calculator.month')}</option>
                </select>
              </div>
            </div>

            {/* Brainrot Selection */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">{t('calculator.selectCharacters')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                {brainrots.map((brainrot) => {
                  const isSelected = selectedBrainrots.includes(brainrot.id);
                  return (
                    <label key={brainrot.id} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-blue-50 border-blue-300 shadow-sm' 
                        : 'hover:bg-gray-50 border-gray-200'
                    }`}>
                    <input
                      type="checkbox"
                      checked={selectedBrainrots.includes(brainrot.id)}
                      onChange={() => handleBrainrotToggle(brainrot.id)}
                      className="mr-3"
                    />
                    <div className="flex items-center flex-1">
                      <div className="w-12 h-12 mr-3 relative flex-shrink-0">
                        <Image
                          src={brainrot.image || getCharacterImageUrl(brainrot.id, brainrot.rarity)}
                          alt={brainrot.name}
                          width={48}
                          height={48}
                          className="rounded-full object-contain shadow-sm hover:shadow-md transition-shadow duration-200"
                          onError={(e) => {
                            // Fallback to a default icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-sm font-medium hidden">
                          {brainrot.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{brainrot.name}</div>
                        <div className="text-sm text-gray-600">
                          {t('calculator.price')}: <span className="font-medium">{brainrot.price.toLocaleString()}</span> | {t('calculator.profit')}: <span className="font-medium text-green-600">{brainrot.profit.toLocaleString()}</span>/h
                        </div>
                      </div>
                    </div>
                  </label>
                );
                })}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{selectedBrainrots.length}</div>
                <div className="text-gray-600">{t('calculator.selectCharacters')}</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {totalInvestment.toLocaleString()}
                </div>
                <div className="text-gray-600">{t('calculator.totalInvestment')}</div>
              </div>
            </div>

            {/* Profit Calculation */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">{t('calculator.results')}</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('calculator.hourlyProfit')}:</span>
                  <span className="text-lg font-semibold text-green-600">
                    {totalHourlyProfit.toLocaleString()} Robux/h
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('calculator.totalProfit')} ({timeFrame}h):</span>
                  <span className="text-lg font-semibold text-green-600">
                    {totalProfit.toLocaleString()} Robux
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('calculator.netProfit')}:</span>
                  <span className={`text-lg font-semibold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {netProfit.toLocaleString()} Robux
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('calculator.hourlyROI')}:</span>
                  <span className={`text-lg font-semibold ${hourlyROI >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {hourlyROI.toFixed(2)}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('calculator.roi')}:</span>
                  <span className={`text-lg font-semibold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {roi.toFixed(2)}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('calculator.timePeriod')}:</span>
                  <span className="text-lg font-semibold">{timeFrame} {t('calculator.hours')}</span>
                </div>
              </div>

              {/* ROI Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{t('calculator.roi')}</span>
                  <span>{roi.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-300 ${roi >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(Math.abs(roi), 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Selected Items */}
            {selectedItems.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-4">{t('calculator.selectCharacters')}</h3>
                <div className="space-y-2">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <div className="w-6 h-6 mr-2 relative">
                          <Image
                            src={item.image || getCharacterImageUrl(item.id, item.rarity)}
                            alt={item.name}
                            width={24}
                            height={24}
                            className="rounded object-cover"
                          />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <span className="text-green-600">+{item.profit.toLocaleString()}/h</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">{t('calculator.quickActions')}</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedBrainrots(brainrots.filter(b => b.rarity <= 2).map(b => b.id))}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {t('calculator.selectCommons')}
                </button>
                <button
                  onClick={() => setSelectedBrainrots(brainrots.filter(b => b.rarity >= 5).map(b => b.id))}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  {t('calculator.selectEpics')}
                </button>
                <button
                  onClick={() => setSelectedBrainrots([])}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  {t('calculator.clearSelection')}
                </button>
                <button
                  onClick={() => setSelectedBrainrots(brainrots.map(b => b.id))}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  {t('calculator.selectAll')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">💡 {t('calculator.investmentTips')}</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• {t('calculator.tip1')}</li>
          <li>• {t('calculator.tip2')}</li>
          <li>• {t('calculator.tip3')}</li>
          <li>• {t('calculator.tip4')}</li>
          <li>• {t('calculator.tip5')}</li>
        </ul>
      </div>
    </div>
  )
} 