'use client'
import { useState } from 'react'
import { X, TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react'
import { PriceComparisonManager } from '@/utils/cartUtils'

interface PriceComparisonModalProps {
  isOpen: boolean
  onClose: () => void
  itemId: string
  itemName: string
  currentPrice: number
}

export default function PriceComparisonModal({ 
  isOpen, 
  onClose, 
  itemId, 
  itemName, 
  currentPrice 
}: PriceComparisonModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const marketPrices = PriceComparisonManager.getMarketPrices(itemId)
  const priceAdvice = PriceComparisonManager.getPriceAdvice(itemId, currentPrice)

  const getAdviceColor = (type: string) => {
    switch (type) {
      case 'bargain': return 'text-green-600 bg-green-50 border-green-200'
      case 'expensive': return 'text-red-600 bg-red-50 border-red-200'
      case 'good': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'fair': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getAdviceIcon = (type: string) => {
    switch (type) {
      case 'bargain': return <TrendingDown className="w-5 h-5" />
      case 'expensive': return <TrendingUp className="w-5 h-5" />
      case 'good': return <DollarSign className="w-5 h-5" />
      case 'fair': return <BarChart3 className="w-5 h-5" />
      default: return <BarChart3 className="w-5 h-5" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Comparación de Precios</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{itemName}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">
                ${currentPrice.toLocaleString()}
              </span>
              <span className="text-gray-500">precio actual</span>
            </div>
          </div>

          {/* Price Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingDown className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Precio Mínimo</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                ${marketPrices.min.toLocaleString()}
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">Precio Promedio</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                ${marketPrices.avg.toLocaleString()}
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-900">Precio Máximo</span>
              </div>
              <div className="text-2xl font-bold text-red-600">
                ${marketPrices.max.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Price Advice */}
          <div className={`border rounded-lg p-4 ${getAdviceColor(priceAdvice.type)}`}>
            <div className="flex items-center space-x-3">
              {getAdviceIcon(priceAdvice.type)}
              <div>
                <h4 className="font-semibold mb-1">Recomendación</h4>
                <p className="text-sm">{priceAdvice.message}</p>
              </div>
            </div>
          </div>

          {/* Price Range Chart */}
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Rango de Precios del Mercado</h4>
            <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
                style={{ 
                  width: `${((currentPrice - marketPrices.min) / (marketPrices.max - marketPrices.min)) * 100}%`,
                  maxWidth: '100%',
                  minWidth: '0%'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold text-white drop-shadow">
                  Tu precio: ${currentPrice.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>${marketPrices.min.toLocaleString()}</span>
              <span>${marketPrices.avg.toLocaleString()}</span>
              <span>${marketPrices.max.toLocaleString()}</span>
            </div>
          </div>

          {/* Market Statistics */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Ahorro Potencial</h4>
              <div className="text-lg font-bold text-green-600">
                ${Math.max(0, marketPrices.avg - currentPrice).toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">
                {currentPrice <= marketPrices.avg ? 'Por debajo del promedio' : 'Por encima del promedio'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Posición en el Mercado</h4>
              <div className="text-lg font-bold text-purple-600">
                {Math.round(((currentPrice - marketPrices.min) / (marketPrices.max - marketPrices.min)) * 100)}%
              </div>
              <p className="text-sm text-gray-600">
                {currentPrice <= marketPrices.avg ? 'Buena posición' : 'Precio elevado'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                // 这里可以添加更多功能
                alert('¡Funciones adicionales próximamente!')
              }}
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Configurar Alertas
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 