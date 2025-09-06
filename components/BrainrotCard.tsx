import Image from "next/image"
import { Star, TrendingUp, DollarSign, Eye, Heart } from "lucide-react"
import { useState } from "react"

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
  showDetails: boolean
  lang: string
}

export default function BrainrotCard({ brainrot, showDetails, lang }: BrainrotCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  const getRarityColor = (rarity: number) => {
    switch (rarity) {
      case 1: return "text-gray-300"
      case 2: return "text-green-300"
      case 3: return "text-blue-300"
      case 4: return "text-purple-300"
      case 5: return "text-orange-300"
      case 6: return "text-red-300"
      case 7: return "text-yellow-300"
      default: return "text-gray-300"
    }
  }

  const getRarityText = (rarity: number) => {
    switch (rarity) {
      case 1: return "Common"
      case 2: return "Rare"
      case 3: return "Epic"
      case 4: return "Legendary"
      case 5: return "Mythic"
      case 6: return "Ancient"
      case 7: return "Divine"
      default: return "Common"
    }
  }

  const getCardBackground = (rarity: number) => {
    switch (rarity) {
      case 1: return "bg-gradient-to-br from-gray-600 to-gray-700"
      case 2: return "bg-gradient-to-br from-green-600 to-green-700"
      case 3: return "bg-gradient-to-br from-blue-600 to-blue-700"
      case 4: return "bg-gradient-to-br from-purple-600 to-purple-700"
      case 5: return "bg-gradient-to-br from-orange-600 to-orange-700"
      case 6: return "bg-gradient-to-br from-red-600 to-red-700"
      case 7: return "bg-gradient-to-br from-yellow-600 to-yellow-700"
      default: return "bg-gradient-to-br from-gray-600 to-gray-700"
    }
  }

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleCardClick = () => {
    window.location.href = `/${lang}/brainrots/${brainrot.id}`
  }

  return (
    <div className={`${getCardBackground(brainrot.rarity)} rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-4 group cursor-pointer transform hover:-translate-y-2 border border-white/20`} onClick={handleCardClick}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-white truncate pr-2 group-hover:text-yellow-300 transition-colors">
          {brainrot.name}
        </h3>
        <button
          onClick={handleLike}
          className={`p-2 rounded-full transition-all duration-200 ${
            isLiked 
              ? "text-red-400 bg-red-900/30 scale-110" 
              : "text-gray-300 hover:text-red-400 hover:bg-red-900/30"
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="flex justify-center mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-black/30 ${getRarityColor(brainrot.rarity)}`}>
          <Star className="w-3 h-3 inline mr-1" />
          {getRarityText(brainrot.rarity)}
        </span>
      </div>

      <div className="relative rounded-xl h-24 mb-4 overflow-hidden bg-black/20 group-hover:scale-105 transition-transform duration-300">
        <Image
          src={brainrot.image}
          alt={brainrot.name}
          width={96}
          height={96}
          className="object-contain w-full h-full p-2"
          unoptimized
        />
        <div className="absolute top-1 right-1 bg-black/80 text-white text-xs px-2 py-1 rounded font-semibold">
          {((brainrot.profit / brainrot.price) * 100).toFixed(1)}%
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Price</span>
          <span className="text-green-300 font-bold">${brainrot.price.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Profit</span>
          <span className="text-blue-300 font-bold">{brainrot.profit.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">ROI</span>
          <span className="text-purple-300 font-bold">{((brainrot.profit / brainrot.price) * 100).toFixed(1)}%</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-2 px-4 rounded-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
        View Details
      </button>
    </div>
  )
}
