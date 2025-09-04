'use client'
import { useParams } from 'next/navigation'
import { getBrainrotById } from '@/data/brainrots'
import { Star, TrendingUp, DollarSign, Eye, ArrowLeft, Heart, Share2, ShoppingCart, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { CartManager, FavoritesManager } from '@/utils/cartUtils'
import CartModal from '@/components/CartModal'
import PriceComparisonModal from '@/components/PriceComparisonModal'

export default function BrainrotDetailPage() {
  const params = useParams()
  const brainrot = getBrainrotById(params.id as string)
  const [isLiked, setIsLiked] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isPriceComparisonOpen, setIsPriceComparisonOpen] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState('')

  if (!brainrot) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">😕</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Personaje no encontrado</h3>
          <p className="text-gray-600 mb-6">
            El personaje que buscas no existe en nuestra base de datos.
          </p>
          <Link 
            href="/brainrots"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver a Brainrots
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
      case 1: return 'Común'
      case 2: return 'Raro'
      case 3: return 'Épico'
      case 4: return 'Legendario'
      case 5: return 'Mítico'
      case 6: return 'Antiguo'
      case 7: return 'Divino'
      default: return 'Desconocido'
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
    try {
      CartManager.addToCart({
        id: brainrot.id,
        name: brainrot.name,
        price: brainrot.price,
        rarity: brainrot.rarity
      })
      setShowSuccessMessage('¡Agregado al carrito!')
      setTimeout(() => setShowSuccessMessage(''), 3000)
    } catch (error) {
      console.error('Error adding to cart:', error)
      setShowSuccessMessage('Error al agregar al carrito')
    }
  }

  const handleAddToFavorites = () => {
    try {
      FavoritesManager.addToFavorites({
        id: brainrot.id,
        name: brainrot.name,
        price: brainrot.price,
        rarity: brainrot.rarity
      })
      setShowSuccessMessage('¡Agregado a favoritos!')
      setTimeout(() => setShowSuccessMessage(''), 3000)
    } catch (error) {
      console.error('Error adding to favorites:', error)
      setShowSuccessMessage('Error al agregar a favoritos')
    }
  }

  const handleComparePrices = () => {
    setIsPriceComparisonOpen(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/brainrots" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a Brainrots
          </Link>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-colors ${
                isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
            {showSuccessMessage}
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8">
            <div className="flex items-start space-x-6">
              {/* Image */}
              <div className="bg-gray-200 rounded-lg h-32 w-32 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-500 text-4xl">🧠</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{brainrot.name}</h1>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${getRarityBgColor(brainrot.rarity)} ${getRarityColor(brainrot.rarity)}`}>
                    <Star className="w-4 h-4 inline mr-1" />
                    {getRarityText(brainrot.rarity)}
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{brainrot.description.en}</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Estadísticas</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">{brainrot.price.toLocaleString()}</div>
                <div className="text-gray-600">Precio</div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{brainrot.profit.toLocaleString()}</div>
                <div className="text-gray-600">Ganancia</div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">{roi}%</div>
                <div className="text-gray-600">ROI</div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6 text-center">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-600">{brainrot.rarity}/7</div>
                <div className="text-gray-600">Rareza</div>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="p-8 border-t">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Análisis Detallado</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Personaje</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ID:</span>
                    <span className="font-medium">{brainrot.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nombre:</span>
                    <span className="font-medium">{brainrot.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rareza:</span>
                    <span className={`font-medium ${getRarityColor(brainrot.rarity)}`}>
                      {getRarityText(brainrot.rarity)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio de Compra:</span>
                    <span className="font-medium text-green-600">${brainrot.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ganancia por Venta:</span>
                    <span className="font-medium text-blue-600">${brainrot.profit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Retorno de Inversión:</span>
                    <span className="font-medium text-purple-600">{roi}%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recomendaciones</h3>
                <div className="space-y-3">
                  {brainrot.rarity >= 6 && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="font-semibold text-yellow-800">¡Personaje Único!</div>
                      <div className="text-yellow-700 text-sm">Este personaje es extremadamente raro y valioso.</div>
                    </div>
                  )}
                  {parseFloat(roi) > 50 && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <div className="font-semibold text-green-800">Excelente ROI</div>
                      <div className="text-green-700 text-sm">Este personaje ofrece un retorno de inversión muy alto.</div>
                    </div>
                  )}
                  {brainrot.price < 10000 && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <div className="font-semibold text-blue-800">Precio Accesible</div>
                      <div className="text-blue-700 text-sm">Perfecto para jugadores principiantes.</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-8 border-t bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBuyNow}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Comprar Ahora</span>
              </button>
              <button 
                onClick={handleAddToFavorites}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Agregar a Favoritos</span>
              </button>
              <button 
                onClick={handleComparePrices}
                className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Comparar Precios</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Brainrots */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personajes Similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Placeholder for related brainrots */}
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-sm">Personajes similares próximamente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <PriceComparisonModal 
        isOpen={isPriceComparisonOpen} 
        onClose={() => setIsPriceComparisonOpen(false)}
        itemId={brainrot.id}
        itemName={brainrot.name}
        currentPrice={brainrot.price}
      />
    </div>
  )
} 