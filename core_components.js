// ===== src/app/page.js - 主页 =====
import Link from 'next/link'
import { Calculator, Database, TrendingUp, BookOpen } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      title: 'Brainrot数据库',
      description: '查看所有角色信息、稀有度和收益数据',
      icon: Database,
      href: '/brainrots',
      color: 'bg-blue-500'
    },
    {
      title: '收益计算器',
      description: '计算最优配置，规划投资策略',
      icon: Calculator,
      href: '/calculator',
      color: 'bg-green-500'
    },
    {
      title: '游戏更新',
      description: '最新更新动态和新角色预告',
      icon: TrendingUp,
      href: '/updates',
      color: 'bg-purple-500'
    },
    {
      title: '攻略指南',
      description: '新手教程和高级策略分享',
      icon: BookOpen,
      href: '/guides',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Steal a Brainrot
          <span className="block text-blue-600">助手工具</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          最全面的Roblox Steal a Brainrot游戏指南，包含角色数据库、收益计算器、攻略指南等实用工具
        </p>
        <Link 
          href="/brainrots"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          开始探索
        </Link>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Link key={index} href={feature.href}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center group">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          )
        })}
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 rounded-lg p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Brainrot角色</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
            <div className="text-gray-600">转生等级</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
            <div className="text-gray-600">稀有度等级</div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ===== src/components/Header.js - 导航栏 =====
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: '首页', href: '/' },
    { name: 'Brainrot', href: '/brainrots' },
    { name: '计算器', href: '/calculator' },
    { name: '更新', href: '/updates' },
    { name: '攻略', href: '/guides' }
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SaB Helper
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

// ===== src/data/brainrots.js - 角色数据 =====
export const rarityColors = {
  'Common': 'bg-gray-500',
  'Rare': 'bg-blue-500', 
  'Epic': 'bg-purple-500',
  'Legendary': 'bg-orange-500',
  'Mythic': 'bg-red-500',
  'Secret': 'bg-gray-900',
  'Brainrot God': 'bg-gradient-to-r from-purple-500 to-pink-500'
}

export const brainrots = [
  {
    id: 1,
    name: 'Noobini Pizzanini',
    rarity: 'Common',
    incomePerSecond: 1,
    cost: 100,
    description: '最基础的Brainrot，适合新手起步使用',
    obtainMethod: '从红色传送带购买',
    image: '/images/brainrots/noobini-pizzanini.png',
    traits: [],
    mutations: ['Golden', 'Diamond', 'Rainbow'],
    spawnRate: 'Very High',
    category: 'Starter'
  },
  {
    id: 2,
    name: 'Sigma Boy',
    rarity: 'Legendary',
    incomePerSecond: 15000,
    cost: 2500000,
    description: '传说级的Sigma主题Brainrot，收益极高',
    obtainMethod: '特殊活动或从其他玩家偷取',
    image: '/images/brainrots/sigma-boy.png',
    traits: ['Alpha', 'Grindset'],
    mutations: ['Golden', 'Diamond', 'Rainbow', 'Candy'],
    spawnRate: 'Very Rare',
    category: 'Meme'
  },
  {
    id: 3,
    name: 'Bombardino Crocodilo',
    rarity: 'Mythic',
    incomePerSecond: 45000,
    cost: 7500000,
    description: '神话级鳄鱼Brainrot，可用于特殊仪式',
    obtainMethod: '从传送带购买或偷取',
    image: '/images/brainrots/bombardino-crocodilo.png',
    traits: ['Ritual Component'],
    mutations: ['Golden', 'Diamond', 'Rainbow', 'Candy', 'Lava'],
    spawnRate: 'Extremely Rare',
    category: 'Animal',
    ritualInfo: '三个可召唤Los Crocodillitos'
  },
  {
    id: 4,
    name: 'Los Crocodillitos',
    rarity: 'Brainrot God',
    incomePerSecond: 55000,
    cost: 12500000,
    description: '三只小鳄鱼坐飞机的终极形态',
    obtainMethod: '通过Bombardino Crocodilo仪式获得',
    image: '/images/brainrots/los-crocodillitos.png',
    traits: ['Ritual Reward', 'Airplane'],
    mutations: ['Golden', 'Diamond', 'Rainbow', 'Candy', 'Lava'],
    spawnRate: 'Ritual Only',
    category: 'Ritual'
  },
  {
    id: 5,
    name: 'Dragon Cannelloni',
    rarity: 'Secret',
    incomePerSecond: 500000,
    cost: 50000000,
    description: '秘密级龙形意面Brainrot，极其稀有',
    obtainMethod: '秘密方法获得',
    image: '/images/brainrots/dragon-cannelloni.png',
    traits: ['Dragon', 'Pasta', 'Secret'],
    mutations: ['Golden', 'Diamond', 'Rainbow', 'Candy', 'Lava'],
    spawnRate: 'Secret',
    category: 'Food'
  }
]

// ===== src/components/BrainrotCard.js - 角色卡片 =====
import Image from 'next/image'
import Link from 'next/link'
import { rarityColors } from '@/data/brainrots'
import { Star, DollarSign } from 'lucide-react'

export default function BrainrotCard({ brainrot, showDetails = false }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative h-48">
        <Image
          src={brainrot.image}
          alt={brainrot.name}
          fill
          className="object-cover"
          onError={(e) => {
            e.target.src = '/images/placeholder-brainrot.png'
          }}
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-xs font-medium ${rarityColors[brainrot.rarity]}`}>
          {brainrot.rarity}
        </div>
        {brainrot.traits.length > 0 && (
          <div className="absolute top-2 left-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{brainrot.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{brainrot.description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">收益/秒:</span>
            <span className="text-green-600 font-semibold flex items-center">
              <DollarSign className="w-4 h-4" />
              {brainrot.incomePerSecond.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">价格:</span>
            <span className="text-red-600 font-semibold flex items-center">
              <DollarSign className="w-4 h-4" />
              {brainrot.cost.toLocaleString()}
            </span>
          </div>
          
          {showDetails && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-2">
                <strong>获取方式:</strong> {brainrot.obtainMethod}
              </div>
              {brainrot.traits.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {brainrot.traits.map((trait, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {trait}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        
        <Link 
          href={`/brainrots/${brainrot.id}`}
          className="mt-4 block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
        >
          查看详情
        </Link>
      </div>
    </div>
  )
}

// ===== src/app/brainrots/page.js - 角色列表页 =====
'use client'
import { useState, useMemo } from 'react'
import { brainrots, rarityColors } from '@/data/brainrots'
import BrainrotCard from '@/components/BrainrotCard'
import { Search, Filter } from 'lucide-react'

export default function BrainrotsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRarity, setSelectedRarity] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const rarities = ['All', ...Object.keys(rarityColors)]
  const categories = ['All', 'Starter', 'Meme', 'Animal', 'Food', 'Ritual']

  const filteredBrainrots = useMemo(() => {
    return brainrots.filter(brainrot => {
      const matchesSearch = brainrot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brainrot.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRarity = selectedRarity === 'All' || brainrot.rarity === selectedRarity
      const matchesCategory = selectedCategory === 'All' || brainrot.category === selectedCategory
      
      return matchesSearch && matchesRarity && matchesCategory
    })
  }, [searchTerm, selectedRarity, selectedCategory])

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Brainrot数据库</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          浏览所有可用的Brainrot角色，查看详细信息、收益数据和获取方式
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索Brainrot..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {rarities.map(rarity => (
              <option key={rarity} value={rarity}>{rarity}</option>
            ))}
          </select>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-gray-600">
        找到 {filteredBrainrots.length} 个Brainrot
      </div>

      {/* Brainrot Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBrainrots.map(brainrot => (
          <BrainrotCard key={brainrot.id} brainrot={brainrot} />
        ))}
      </div>

      {filteredBrainrots.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">没有找到匹配的Brainrot</div>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedRarity('All')
              setSelectedCategory('All')
            }}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            清除筛选
          </button>
        </div>
      )}
    </div>
  )
}