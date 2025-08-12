'use client'
import { getBrainrotById } from '@/data/brainrots'
import { Star, TrendingUp, DollarSign, Eye, ArrowLeft, Heart, ShoppingCart, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface BrainrotDetailPageProps {
  params: Promise<{ lang: string; id: string }>
}

interface Brainrot {
  id: string
  name: string
  price: number
  profit: number
  rarity: number
  description: {
    en: string
    es: string
    zh: string
  }
}

export default function BrainrotDetailPage({ params }: BrainrotDetailPageProps) {
  const [lang, setLang] = useState('en')
  // id 当前未使用，但保留以备将来使用
  // const [id, setId] = useState('')
  const [brainrot, setBrainrot] = useState<Brainrot | null>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState('')

  // 获取参数
  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
      // setId(resolvedParams.id) // 当前未使用
      const brainrotData = getBrainrotById(resolvedParams.id)
      setBrainrot(brainrotData || null)
    })
  }, [params])

  const { t } = useTranslation(lang)

  if (!brainrot) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">😕</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t('brainrots.characterNotFound') as string}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('brainrots.characterNotFoundDesc') as string}
          </p>
          <Link 
            href={`/${lang}/brainrots`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('brainrots.backToBrainrots') as string}
          </Link>
        </div>
      </div>
    )
  }

  const getRarityColor = (rarity: number) => {
    switch (rarity) {
      case 1: return 'text-gray-500'
      case 2: return 'text-green-500'
      case 3: return 'text-blue-500'
      case 4: return 'text-purple-500'
      case 5: return 'text-orange-500'
      case 6: return 'text-red-500'
      case 7: return 'text-yellow-500'
      default: return 'text-gray-500'
    }
  }

  const getRarityText = (rarity: number) => {
    switch (rarity) {
      case 1: return t('brainrots.common')
      case 2: return t('brainrots.rare')
      case 3: return t('brainrots.epic')
      case 4: return t('brainrots.legendary')
      case 5: return t('brainrots.mythic')
      case 6: return t('brainrots.ancient')
      case 7: return t('brainrots.divine')
      default: return t('brainrots.common')
    }
  }

  const getRarityBgColor = (rarity: number) => {
    switch (rarity) {
      case 1: return 'bg-gray-100'
      case 2: return 'bg-green-100'
      case 3: return 'bg-blue-100'
      case 4: return 'bg-purple-100'
      case 5: return 'bg-orange-100'
      case 6: return 'bg-red-100'
      case 7: return 'bg-yellow-100'
      default: return 'bg-gray-100'
    }
  }

  const roi = ((brainrot.profit / brainrot.price) * 100).toFixed(1)

  // 功能按钮处理函数
  const handleBuyNow = () => {
    console.log('Buy Now clicked!', brainrot)
    setShowSuccessMessage(t('brainrots.addedToCart') as string)
    setTimeout(() => setShowSuccessMessage(''), 3000)
  }

  const handleAddToFavorites = () => {
    console.log('Add to Favorites clicked!', brainrot)
    setIsLiked(true)
    setShowSuccessMessage(t('brainrots.addedToFavorites') as string)
    setTimeout(() => setShowSuccessMessage(''), 3000)
  }

  const handleComparePrices = () => {
    console.log('Compare Prices clicked!', brainrot)
    setShowSuccessMessage(t('brainrots.comparisonFeatureComingSoon') as string)
    setTimeout(() => setShowSuccessMessage(''), 3000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {showSuccessMessage}
        </div>
      )}

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href={`/${lang}/brainrots`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('brainrots.backToBrainrots') as string}
        </Link>
      </div>

      {/* Character Details */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-4xl">🧠</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{brainrot.name}</h1>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRarityBgColor(brainrot.rarity)} ${getRarityColor(brainrot.rarity)}`}>
                <Star className="w-4 h-4 mr-1" />
                {getRarityText(brainrot.rarity) as string}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="md:w-1/2 p-8">
            <div className="space-y-6">
              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  {t('brainrots.price') as string}
                </span>
                <div className="flex items-center text-green-600 font-semibold text-xl">
                  <DollarSign className="w-5 h-5 mr-1" />
                  {brainrot.price.toLocaleString()}
                </div>
              </div>

              {/* Profit */}
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  {t('brainrots.profit') as string}
                </span>
                <div className="flex items-center text-blue-600 font-semibold text-xl">
                  <TrendingUp className="w-5 h-5 mr-1" />
                  {brainrot.profit.toLocaleString()}
                </div>
              </div>

              {/* ROI */}
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{t('brainrots.roi') as string}</span>
                <div className="flex items-center text-purple-600 font-semibold text-xl">
                  <Eye className="w-5 h-5 mr-1" />
                  {roi}%
                </div>
              </div>

              {/* Description */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t('brainrots.description') as string}
                </h3>
                <p className="text-gray-600">{brainrot.description[lang as keyof typeof brainrot.description] || brainrot.description.en}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-6">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {t('brainrots.buyNow') as string}
                </button>
                <button
                  onClick={handleAddToFavorites}
                  className={`px-4 py-3 rounded-lg transition-colors flex items-center ${
                    isLiked 
                      ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleComparePrices}
                  className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
                >
                  <BarChart3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 