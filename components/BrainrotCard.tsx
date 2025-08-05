import { Star, TrendingUp, DollarSign, Eye, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'

interface Brainrot {
  id: string
  name: string
  rarity: number
  price: number
  profit: number
  image: string
  description: {
    en: string
    es: string
    zh: string
  }
}

interface BrainrotCardProps {
  brainrot: Brainrot
  showDetails?: boolean
  lang?: string
}

export default function BrainrotCard({ brainrot, showDetails = false, lang = 'es' }: BrainrotCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const { t } = useTranslation(lang)
  
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
      case 1: return t('brainrots.common') as string
      case 2: return t('brainrots.rare') as string
      case 3: return t('brainrots.epic') as string
      case 4: return t('brainrots.legendary') as string
      case 5: return t('brainrots.mythic') as string
      case 6: return t('brainrots.ancient') as string
      case 7: return t('brainrots.divine') as string
      default: return t('brainrots.common') as string
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

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  // 获取当前语言的描述
  const getDescription = () => {
    const currentLang = lang || 'en'
    return brainrot.description[currentLang as keyof typeof brainrot.description] || brainrot.description.en
  }

  if (showDetails) {
    // List view with more details
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <div className="flex items-start space-x-4">
          {/* Image */}
          <div className="relative bg-gray-200 rounded-lg h-24 w-24 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded-full text-gray-600 text-2xl font-bold">
              {brainrot.name.charAt(0)}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">{brainrot.name}</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-full transition-colors ${
                    isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRarityBgColor(brainrot.rarity)} ${getRarityColor(brainrot.rarity)}`}>
                  <Star className="w-4 h-4 inline mr-1" />
                  {getRarityText(brainrot.rarity)}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">{t('brainrots.price') as string}</div>
                  <div className="font-semibold text-green-600">{brainrot.price.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">{t('brainrots.profit') as string}</div>
                  <div className="font-semibold text-blue-600">{brainrot.profit.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 text-purple-600 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">{t('brainrots.roi') as string}</div>
                  <div className="font-semibold text-purple-600">{((brainrot.profit / brainrot.price) * 100).toFixed(1)}%</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-600 text-sm">
              {showFullDescription ? (
                <div>
                  {getDescription()}
                  <button
                    onClick={() => setShowFullDescription(false)}
                    className="text-blue-600 hover:text-blue-700 ml-2"
                  >
                    {t('common.showLess') as string}
                  </button>
                </div>
              ) : (
                <div>
                  {getDescription().length > 100 ? (
                    <>
                      {getDescription().substring(0, 100)}...
                      <button
                        onClick={() => setShowFullDescription(true)}
                        className="text-blue-600 hover:text-blue-700 ml-2"
                      >
                        {t('common.showMore') as string}
                      </button>
                    </>
                  ) : (
                    getDescription()
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            {t('brainrots.compare') as string}
          </button>
          <Link href={`/${lang}/brainrots/${brainrot.id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {t('brainrots.viewDetails') as string}
            </button>
          </Link>
        </div>
      </div>
    )
  }

  // Grid view (original design)
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{brainrot.name}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleLike}
            className={`p-1 rounded-full transition-colors ${
              isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <div className={`flex items-center ${getRarityColor(brainrot.rarity)}`}>
            <Star className="w-5 h-5 mr-1" />
            <span className="text-sm font-medium">{getRarityText(brainrot.rarity)}</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center group-hover:bg-gray-300 transition-colors overflow-hidden">
        <div className="w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full text-gray-600 text-3xl font-bold">
          {brainrot.name.charAt(0)}
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{t('brainrots.price') as string}</span>
          <div className="flex items-center text-green-600 font-semibold">
            <DollarSign className="w-4 h-4 mr-1" />
            {brainrot.price.toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{t('brainrots.profit') as string}</span>
          <div className="flex items-center text-blue-600 font-semibold">
            <TrendingUp className="w-4 h-4 mr-1" />
            {brainrot.profit.toLocaleString()}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">{t('brainrots.roi') as string}</span>
          <div className="flex items-center text-purple-600 font-semibold">
            <Eye className="w-4 h-4 mr-1" />
            {((brainrot.profit / brainrot.price) * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Action Button */}
      <Link href={`/${lang}/brainrots/${brainrot.id}`} className="block">
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors group-hover:shadow-md">
          {t('brainrots.viewDetails') as string}
        </button>
      </Link>
    </div>
  )
} 