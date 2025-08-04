import { Star } from 'lucide-react'

interface DefaultBrainrotImageProps {
  name: string
  rarity: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function DefaultBrainrotImage({ name, rarity, size = 'md', className = '' }: DefaultBrainrotImageProps) {
  const getRarityColor = (rarity: number) => {
    switch (rarity) {
      case 1: return 'bg-gray-500'
      case 2: return 'bg-green-500'
      case 3: return 'bg-blue-500'
      case 4: return 'bg-purple-500'
      case 5: return 'bg-orange-500'
      case 6: return 'bg-red-500'
      case 7: return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getRarityText = (rarity: number) => {
    switch (rarity) {
      case 1: return 'C'
      case 2: return 'R'
      case 3: return 'E'
      case 4: return 'L'
      case 5: return 'M'
      case 6: return 'A'
      case 7: return 'D'
      default: return '?'
    }
  }

  const sizeClasses = {
    sm: 'w-16 h-16 text-xs',
    md: 'w-24 h-24 text-sm',
    lg: 'w-32 h-32 text-base'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Background */}
      <div className={`w-full h-full rounded-lg ${getRarityColor(rarity)} flex items-center justify-center relative overflow-hidden`}>
        {/* Brain icon */}
        <div className="text-white text-2xl mb-1">🧠</div>
        
        {/* Rarity badge */}
        <div className="absolute top-1 right-1 bg-white bg-opacity-90 rounded-full w-5 h-5 flex items-center justify-center">
          <Star className="w-3 h-3 text-yellow-500" />
        </div>
        
        {/* Rarity indicator */}
        <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white rounded px-1 text-xs font-bold">
          {getRarityText(rarity)}
        </div>
      </div>
      
      {/* Character icon based on name */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-3xl">
          {name.includes('Chad') ? '💪' : 
           name.includes('Sigma') ? '👔' : 
           name.includes('Alpha') ? '👑' : 
           name.includes('Omega') ? '⚡' : 
           name.includes('Ultra') ? '🔥' : 
           name.includes('Mega') ? '⚡' : 
           name.includes('God') ? '👑' : 
           name.includes('Legendary') ? '⭐' : 
           '🧠'}
        </div>
      </div>
    </div>
  )
} 