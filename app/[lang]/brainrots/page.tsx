'use client'
import { useState } from 'react'
import { brainrots, getRarityText } from '@/data/brainrots'
import BrainrotCard from '@/components/BrainrotCard'
import { Filter, Search, SortAsc, SortDesc, Grid, List, Info, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '../../../hooks/useTranslation'
import { use } from 'react'

export default function BrainrotsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params)
  const { t } = useTranslation(resolvedParams.lang)
  
  const [selectedRarity, setSelectedRarity] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'profit' | 'rarity'>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)

  const filteredBrainrots = brainrots.filter(brainrot => {
    const matchesRarity = selectedRarity === null || brainrot.rarity === selectedRarity
    const matchesSearch = brainrot.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesRarity && matchesSearch
  })

  const sortedBrainrots = [...filteredBrainrots].sort((a, b) => {
    let aValue: string | number
    let bValue: string | number

    switch (sortBy) {
      case 'name':
        aValue = a.name.toLowerCase()
        bValue = b.name.toLowerCase()
        break
      case 'price':
        aValue = a.price
        bValue = b.price
        break
      case 'profit':
        aValue = a.profit
        bValue = b.profit
        break
      case 'rarity':
        aValue = a.rarity
        bValue = b.rarity
        break
      default:
        aValue = a.name.toLowerCase()
        bValue = b.name.toLowerCase()
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  const totalPages = Math.ceil(sortedBrainrots.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentBrainrots = sortedBrainrots.slice(startIndex, endIndex)

  const rarityOptions = [
    { value: null, label: t('brainrots.allRarities') },
    { value: 1, label: t('brainrots.common') },
    { value: 2, label: t('brainrots.rare') },
    { value: 3, label: t('brainrots.epic') },
    { value: 4, label: t('brainrots.legendary') },
    { value: 5, label: t('brainrots.mythic') },
    { value: 6, label: t('brainrots.ancient') },
    { value: 7, label: t('brainrots.divine') }
  ]

  const sortOptions = [
    { value: 'name', label: t('brainrots.sortByName') },
    { value: 'price', label: t('brainrots.sortByPrice') },
    { value: 'profit', label: t('brainrots.sortByProfit') },
    { value: 'rarity', label: t('brainrots.sortByRarity') }
  ]

  const rarityStats = rarityOptions.slice(1).map(option => ({
    rarity: option.value as number,
    label: option.label,
    count: brainrots.filter(b => b.rarity === option.value).length
  }))

  const totalValue = brainrots.reduce((sum, b) => sum + b.price, 0)
  const totalProfit = brainrots.reduce((sum, b) => sum + b.profit, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${resolvedParams.lang}`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('common.backToHome') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🧠 {t('brainrots.title') as string}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('brainrots.description') as string}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">{brainrots.length}</div>
            <div className="text-blue-100">{t('brainrots.totalCharacters') as string}</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="text-2xl font-bold">{totalValue.toLocaleString()}</div>
                      <div className="text-green-100">{t('brainrots.totalValue') as string}</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="text-2xl font-bold">{totalProfit.toLocaleString()}</div>
          <div className="text-purple-100">{t('brainrots.totalProfit') as string}</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
          <div className="text-2xl font-bold">{brainrots.filter(b => b.rarity >= 6).length}</div>
          <div className="text-yellow-100">{t('brainrots.uniqueCharacters') as string}</div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('brainrots.searchPlaceholder') as string}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Rarity Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedRarity || ''}
                onChange={(e) => setSelectedRarity(e.target.value ? Number(e.target.value) : null)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {rarityOptions.map((option) => (
                  <option key={option.value} value={option.value || ''}>
                    {option.label as string}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "price" | "profit" | "rarity")}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label as string}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
              </button>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 border rounded-lg ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'border-gray-300 hover:bg-gray-50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 border rounded-lg ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'border-gray-300 hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {t('brainrots.showingResults') as string} {filteredBrainrots.length} {(t('brainrots.totalCharacters') as string).toLowerCase()}
            {selectedRarity && ` (${getRarityText(selectedRarity)})`}
            {searchTerm && ` (${t('brainrots.searchPlaceholder') as string}: "${searchTerm}")`}
          </div>
        </div>

        {/* Brainrots Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {currentBrainrots.map((brainrot) => (
            <BrainrotCard key={brainrot.id} brainrot={brainrot} showDetails={viewMode === 'list'} lang={resolvedParams.lang} />
          ))}
        </div>

        {/* No Results */}
        {filteredBrainrots.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('brainrots.noResults') as string}</h3>
            <p className="text-gray-600">
              {t('brainrots.tryAdjusting') as string}
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              {t('brainrots.previous') as string}
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === page 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              {t('brainrots.next') as string}
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 