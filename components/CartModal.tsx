'use client'
import { useState, useEffect } from 'react'
import { X, Trash2, Plus, Minus, ShoppingCart, DollarSign } from 'lucide-react'
import { CartManager, CartItem } from '@/utils/cartUtils'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (isOpen) {
      const items = CartManager.getCart()
      setCartItems(items)
      setTotal(CartManager.getCartTotal())
    }
  }, [isOpen])

  const updateQuantity = (itemId: string, newQuantity: number) => {
    CartManager.updateQuantity(itemId, newQuantity)
    const items = CartManager.getCart()
    setCartItems(items)
    setTotal(CartManager.getCartTotal())
  }

  const removeItem = (itemId: string) => {
    CartManager.removeFromCart(itemId)
    const items = CartManager.getCart()
    setCartItems(items)
    setTotal(CartManager.getCartTotal())
  }

  const clearCart = () => {
    CartManager.clearCart()
    setCartItems([])
    setTotal(0)
  }

  const handleCheckout = () => {
    // 这里可以添加结账逻辑
    alert('¡Función de compra próximamente!')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Carrito de Compras</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Carrito vacío</h3>
              <p className="text-gray-600">Agrega algunos personajes a tu carrito</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Precio: ${item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-green-600">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                ${total.toLocaleString()}
              </span>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={clearCart}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Vaciar Carrito
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-4 h-4" />
                <span>Comprar Ahora</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 