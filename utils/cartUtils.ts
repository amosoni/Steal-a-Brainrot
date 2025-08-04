// 购物车和收藏功能工具

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  rarity: number
}

export interface FavoriteItem {
  id: string
  name: string
  price: number
  rarity: number
  addedAt: Date
}

// 购物车功能
export class CartManager {
  private static CART_KEY = 'steal-brainrot-cart'
  static FAVORITES_KEY = 'steal-brainrot-favorites'

  // 获取购物车
  static getCart(): CartItem[] {
    if (typeof window === 'undefined') return []
    const cart = localStorage.getItem(this.CART_KEY)
    return cart ? JSON.parse(cart) : []
  }

  // 添加到购物车
  static addToCart(item: Omit<CartItem, 'quantity'>): void {
    if (typeof window === 'undefined') return
    
    const cart = this.getCart()
    const existingItem = cart.find(i => i.id === item.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...item, quantity: 1 })
    }
    
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart))
  }

  // 从购物车移除
  static removeFromCart(itemId: string): void {
    if (typeof window === 'undefined') return
    
    const cart = this.getCart().filter(item => item.id !== itemId)
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart))
  }

  // 更新购物车数量
  static updateQuantity(itemId: string, quantity: number): void {
    if (typeof window === 'undefined') return
    
    const cart = this.getCart()
    const item = cart.find(i => i.id === itemId)
    if (item) {
      item.quantity = Math.max(0, quantity)
      if (item.quantity === 0) {
        this.removeFromCart(itemId)
      } else {
        localStorage.setItem(this.CART_KEY, JSON.stringify(cart))
      }
    }
  }

  // 清空购物车
  static clearCart(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem(this.CART_KEY)
  }

  // 获取购物车总价
  static getCartTotal(): number {
    const cart = this.getCart()
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  // 获取购物车商品数量
  static getCartItemCount(): number {
    const cart = this.getCart()
    return cart.reduce((total, item) => total + item.quantity, 0)
  }
}

// 收藏功能
export class FavoritesManager {
  // 获取收藏列表
  static getFavorites(): FavoriteItem[] {
    if (typeof window === 'undefined') return []
    const favorites = localStorage.getItem(CartManager.FAVORITES_KEY)
    return favorites ? JSON.parse(favorites) : []
  }

  // 添加到收藏
  static addToFavorites(item: Omit<FavoriteItem, 'addedAt'>): void {
    if (typeof window === 'undefined') return
    
    const favorites = this.getFavorites()
    const existingItem = favorites.find(i => i.id === item.id)
    
    if (!existingItem) {
      favorites.push({ ...item, addedAt: new Date() })
      localStorage.setItem(CartManager.FAVORITES_KEY, JSON.stringify(favorites))
    }
  }

  // 从收藏移除
  static removeFromFavorites(itemId: string): void {
    if (typeof window === 'undefined') return
    
    const favorites = this.getFavorites().filter(item => item.id !== itemId)
    localStorage.setItem(CartManager.FAVORITES_KEY, JSON.stringify(favorites))
  }

  // 检查是否已收藏
  static isFavorite(itemId: string): boolean {
    const favorites = this.getFavorites()
    return favorites.some(item => item.id === itemId)
  }

  // 获取收藏数量
  static getFavoritesCount(): number {
    return this.getFavorites().length
  }
}

// 价格比较功能
export class PriceComparisonManager {
  // 模拟市场价格数据
  private static marketPrices: Record<string, { min: number; max: number; avg: number }> = {
    'sigma-boy': { min: 800, max: 1200, avg: 1000 },
    'alpha-male': { min: 1200, max: 1800, avg: 1500 },
    'chad': { min: 1600, max: 2400, avg: 2000 },
    'gigachad': { min: 4000, max: 6000, avg: 5000 },
    'sigma-male': { min: 6000, max: 9000, avg: 7500 },
    'omega-male': { min: 8000, max: 12000, avg: 10000 },
    'ultra-chad': { min: 20000, max: 30000, avg: 25000 },
    'mega-sigma': { min: 28000, max: 42000, avg: 35000 },
    'super-alpha': { min: 36000, max: 54000, avg: 45000 },
    'legendary-chad': { min: 80000, max: 120000, avg: 100000 },
    'mythic-sigma': { min: 120000, max: 180000, avg: 150000 },
    'divine-alpha': { min: 160000, max: 240000, avg: 200000 },
    'god-chad': { min: 400000, max: 600000, avg: 500000 },
    'celestial-sigma': { min: 600000, max: 900000, avg: 750000 },
    'immortal-alpha': { min: 800000, max: 1200000, avg: 1000000 },
    'ancient-chad': { min: 2000000, max: 3000000, avg: 2500000 },
    'primordial-sigma': { min: 2800000, max: 4200000, avg: 3500000 },
    'eternal-alpha': { min: 4000000, max: 6000000, avg: 5000000 },
    'supreme-chad': { min: 8000000, max: 12000000, avg: 10000000 },
    'cosmic-sigma': { min: 12000000, max: 18000000, avg: 15000000 },
    'omnipotent-alpha': { min: 20000000, max: 30000000, avg: 25000000 },
  }

  // 获取市场价格
  static getMarketPrices(itemId: string) {
    return this.marketPrices[itemId] || { min: 0, max: 0, avg: 0 }
  }

  // 获取价格建议
  static getPriceAdvice(itemId: string, currentPrice: number) {
    const market = this.getMarketPrices(itemId)
    const avgPrice = market.avg
    
    if (currentPrice < market.min) {
      return { type: 'bargain', message: '¡Precio excelente! Está por debajo del mercado' }
    } else if (currentPrice > market.max) {
      return { type: 'expensive', message: 'Precio alto, considera esperar' }
    } else if (currentPrice <= avgPrice) {
      return { type: 'good', message: 'Precio justo, buena oportunidad' }
    } else {
      return { type: 'fair', message: 'Precio aceptable' }
    }
  }
} 