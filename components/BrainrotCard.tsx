import { Star, TrendingUp, DollarSign, Eye, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCharacterImageUrl } from '@/data/imageMapping'
import DefaultBrainrotImage from './DefaultBrainrotImage'

interface Brainrot {
  id: string
  name: string
  rarity: number
  price: number
  profit: number
  image: string
  description: string
}

interface BrainrotCardProps {
  brainrot: Brainrot
  showDetails?: boolean
  lang?: string
}

export default function BrainrotCard({ brainrot, showDetails = false, lang = 'es' }: BrainrotCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [useDefaultImage, setUseDefaultImage] = useState(false) // 默认尝试加载实际图片

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
      case 1: return lang === 'en' ? 'Common' : 'Común'
      case 2: return lang === 'en' ? 'Rare' : 'Raro'
      case 3: return lang === 'en' ? 'Epic' : 'Épico'
      case 4: return lang === 'en' ? 'Legendary' : 'Legendario'
      case 5: return lang === 'en' ? 'Mythic' : 'Mítico'
      case 6: return lang === 'en' ? 'Ancient' : 'Antiguo'
      case 7: return lang === 'en' ? 'Divine' : 'Divino'
      default: return lang === 'en' ? 'Unknown' : 'Desconocido'
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

  const handleImageError = () => {
    setImageError(true)
    setUseDefaultImage(true)
  }

  // 获取图片URL - 优先使用角色数据中的图片路径
  const imageUrl = brainrot.image || getCharacterImageUrl(brainrot.id, brainrot.rarity)
  
  // 简化图片显示逻辑 - 只有在图片加载错误时才显示默认图片
  const shouldShowDefaultImage = imageError

  if (showDetails) {
    // List view with more details
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <div className="flex items-start space-x-4">
          {/* Image */}
          <div className="relative bg-gray-200 rounded-lg h-24 w-24 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {shouldShowDefaultImage ? (
              <DefaultBrainrotImage name={brainrot.name} rarity={brainrot.rarity} size="sm" />
            ) : (
              <Image
                src={imageUrl}
                alt={brainrot.name}
                width={96}
                height={96}
                className="object-cover"
                onError={handleImageError}
              />
            )}
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
                  <div className="text-sm text-gray-600">{lang === 'en' ? 'Price' : lang === 'zh' ? '价格' : 'Precio'}</div>
                  <div className="font-semibold text-green-600">{brainrot.price.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">{lang === 'en' ? 'Profit' : lang === 'zh' ? '利润' : 'Ganancia'}</div>
                  <div className="font-semibold text-blue-600">{brainrot.profit.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 text-purple-600 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">ROI</div>
                  <div className="font-semibold text-purple-600">{((brainrot.profit / brainrot.price) * 100).toFixed(1)}%</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-600 text-sm">
              {showFullDescription ? (
                <div>
                  {brainrot.description}
                  <button
                    onClick={() => setShowFullDescription(false)}
                    className="text-blue-600 hover:text-blue-700 ml-2"
                  >
                    {lang === 'en' ? 'Show less' : 'Ver menos'}
                  </button>
                </div>
              ) : (
                <div>
                  {brainrot.description.length > 100 ? (
                    <>
                      {brainrot.description.substring(0, 100)}...
                      <button
                        onClick={() => setShowFullDescription(true)}
                        className="text-blue-600 hover:text-blue-700 ml-2"
                      >
                        {lang === 'en' ? 'Show more' : 'Ver más'}
                      </button>
                    </>
                  ) : (
                    brainrot.description
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            {lang === 'en' ? 'Compare' : 'Comparar'}
          </button>
          <Link href={`/${lang}/brainrots/${brainrot.id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {lang === 'en' ? 'View Details' : 'Ver Detalles'}
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
        {shouldShowDefaultImage ? (
          <DefaultBrainrotImage name={brainrot.name} rarity={brainrot.rarity} size="lg" />
        ) : (
          <Image
            src={imageUrl}
            alt={brainrot.name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
            onError={handleImageError}
          />
        )}
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{lang === 'en' ? 'Price:' : 'Precio:'}</span>
          <div className="flex items-center text-green-600 font-semibold">
            <DollarSign className="w-4 h-4 mr-1" />
            {brainrot.price.toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{lang === 'en' ? 'Profit:' : 'Ganancia:'}</span>
          <div className="flex items-center text-blue-600 font-semibold">
            <TrendingUp className="w-4 h-4 mr-1" />
            {brainrot.profit.toLocaleString()}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">ROI:</span>
          <div className="flex items-center text-purple-600 font-semibold">
            <Eye className="w-4 h-4 mr-1" />
            {((brainrot.profit / brainrot.price) * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Action Button */}
      <Link href={`/${lang}/brainrots/${brainrot.id}`} className="block">
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors group-hover:shadow-md">
          {lang === 'en' ? 'View Details' : lang === 'zh' ? '查看详情' : 'Ver Detalles'}
        </button>
      </Link>
    </div>
  )
} 