'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Star, TrendingUp, Users, Bell, CheckCircle, AlertCircle, Download, Clock } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface UpdatesPageProps {
  params: Promise<{ lang: string }>
}

export default function UpdatesPage({ params }: UpdatesPageProps) {
  const [lang, setLang] = useState('es')
  
  // 获取语言参数
  useEffect(() => {
    params.then((resolvedParams) => {
      setLang(resolvedParams.lang)
    })
  }, [params])

  const { t } = useTranslation(lang)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const [isChecking, setIsChecking] = useState(false)
  // autoRefresh 当前未使用，但保留以备将来使用
  // const [autoRefresh, setAutoRefresh] = useState(false)
  const [notifications, setNotifications] = useState<string[]>([])
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'checking'>('online')
  const [updateProgress, setUpdateProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  // 自动检查更新 - 当前未使用，但保留以备将来使用
  // useEffect(() => {
  //   if (autoRefresh) {
  //     const interval = setInterval(() => {
  //       checkForUpdates()
  //     }, 300000) // 每5分钟检查一次

  //     return () => clearInterval(interval)
  //   }
  // }, [autoRefresh])

  // 检查服务器状态
  useEffect(() => {
    checkServerStatus()
  }, [])

  // 检查服务器状态
  const checkServerStatus = async () => {
    setServerStatus('checking')
    try {
      const response = await fetch('/api/updates')
      const data = await response.json()
      setServerStatus(data.serverStatus)
    } catch {
      setServerStatus('offline')
    }
  }

  // 检查更新
  const checkForUpdates = async () => {
    setIsChecking(true)
    setUpdateProgress(0)
    
    try {
      // 模拟进度更新
      const progressInterval = setInterval(() => {
        setUpdateProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      const response = await fetch('/api/updates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'check_updates' })
      })
      
      const data = await response.json()
      
      clearInterval(progressInterval)
      setUpdateProgress(100)
      
      if (data.success && data.hasNewUpdates) {
        const newNotification = `Nueva actualización disponible - ${new Date().toLocaleTimeString()}`
        setNotifications(prev => [newNotification, ...prev.slice(0, 4)])
      }
      
      setLastUpdate(new Date())
      
      // 重置进度条
      setTimeout(() => setUpdateProgress(0), 1000)
    } catch (error) {
      console.error('Error checking updates:', error)
      const errorNotification = `Error al verificar actualizaciones - ${new Date().toLocaleTimeString()}`
      setNotifications(prev => [errorNotification, ...prev.slice(0, 4)])
      setUpdateProgress(0)
    } finally {
      setIsChecking(false)
    }
  }

  const handleManualCheck = () => {
    checkForUpdates()
  }

  // toggleAutoRefresh 当前未使用，但保留以备将来使用
  // const toggleAutoRefresh = () => {
  //   setAutoRefresh(!autoRefresh)
  // }

  const clearNotifications = () => {
    setNotifications([])
  }

  const downloadUpdate = async () => {
    setIsDownloading(true)
    setUpdateProgress(0)
    
    try {
      // 模拟下载进度
      const progressInterval = setInterval(() => {
        setUpdateProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 5
        })
      }, 100)

      // 模拟下载完成
      setTimeout(() => {
        clearInterval(progressInterval)
        setUpdateProgress(100)
        setIsDownloading(false)
        const downloadNotification = `Descarga completada - ${new Date().toLocaleTimeString()}`
        setNotifications(prev => [downloadNotification, ...prev.slice(0, 4)])
        setTimeout(() => setUpdateProgress(0), 1000)
      }, 3000)
    } catch (error) {
      console.error('Error downloading update:', error)
      setIsDownloading(false)
    }
  }

  // 模拟数据
  const categories = [
    { id: 'all', name: t('updates.all') as string },
    { id: 'characters', name: t('updates.characters') as string },
    { id: 'balance', name: t('updates.balance') as string },
    { id: 'interface', name: t('updates.interface') as string },
    { id: 'system', name: t('updates.system') as string },
    { id: 'gameplay', name: t('updates.gameplay') as string }
  ]

  const latestUpdates = [
    {
      id: 1,
      title: t('updates.newCharactersReleased') as string,
      description: t('updates.newCharactersDesc') as string,
      date: '2024-01-15',
      type: 'feature'
    },
    {
      id: 2,
      title: t('updates.balanceAdjustments') as string,
      description: t('updates.balanceAdjustmentsDesc') as string,
      date: '2024-01-14',
      type: 'balance'
    },
    {
      id: 3,
      title: t('updates.interfaceOptimization') as string,
      description: t('updates.interfaceOptimizationDesc') as string,
      date: '2024-01-13',
      type: 'interface'
    }
  ]

  const upcomingUpdates = [
    {
      id: 1,
      title: 'Nuevo Sistema de Recompensas',
      description: 'Sistema mejorado de recompensas con más opciones de personalización',
      date: '2024-02-01',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Optimización de Rendimiento',
      description: 'Mejoras significativas en el rendimiento del juego',
      date: '2024-01-25',
      priority: 'medium'
    }
  ]

  const updateHistory = [
    {
      version: 'v2.1.0',
      date: '2024-01-10',
      type: 'stable',
      changes: [
        'Nuevos personajes agregados',
        'Corrección de bugs menores',
        'Mejoras en la interfaz'
      ]
    },
    {
      version: 'v2.0.5',
      date: '2024-01-05',
      type: 'major',
      changes: [
        'Actualización importante del sistema',
        'Nuevas características de juego',
        'Optimizaciones de rendimiento'
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('updates.backToHome') as string}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔄 {t('updates.title') as string}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('updates.description') as string}
          </p>
        </div>

        {/* Server Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                serverStatus === 'online' ? 'bg-green-500' : 
                serverStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
              <span className="text-gray-600">
                {t('updates.serverStatus') as string}:
              </span>
              <span className={`font-semibold ${
                serverStatus === 'online' ? 'text-green-600' : 
                serverStatus === 'offline' ? 'text-red-600' : 'text-yellow-600'
              }`}>
                {serverStatus === 'online' ? t('updates.online') as string :
                 serverStatus === 'offline' ? t('updates.offline') as string : t('updates.checking') as string}
              </span>
            </div>
            <button
              onClick={checkServerStatus}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('updates.verifyStatus') as string}
            </button>
          </div>

          {/* Update Settings */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold">{t('updates.updateSettings') as string}</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{t('updates.lastCheck') as string}:</span>
                  <span className="font-medium">{lastUpdate.toLocaleString()}</span>
                </div>
                <button
                  onClick={handleManualCheck}
                  disabled={isChecking}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {isChecking ? t('updates.checking') as string : t('updates.checkNow') as string}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{t('updates.autoUpdate') as string}</span>
                </div>
                <button
                  onClick={downloadUpdate}
                  disabled={isDownloading}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  {isDownloading ? t('updates.downloading') as string : t('updates.downloadUpdate') as string}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{t('updates.notifications') as string}</span>
                </div>
                <button
                  onClick={clearNotifications}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {t('updates.clearNotifications') as string}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-yellow-800">{t('updates.notifications') as string}</h3>
              <button
                onClick={clearNotifications}
                className="text-yellow-600 hover:text-yellow-800"
              >
                ×
              </button>
            </div>
            <div className="space-y-2">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-yellow-700">
                  <AlertCircle className="w-4 h-4" />
                  <span>{notification}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">{t('updates.filterByCategory') as string}</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(`updates.${category.id}`) as string}
              </button>
            ))}
          </div>
        </div>

        {/* Latest Updates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold">{t('updates.latestUpdates') as string}</h2>
          <div className="mt-6 space-y-4">
            {latestUpdates.map((update) => (
              <div key={update.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{update.title}</h3>
                    <p className="text-gray-600 mt-1">{update.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>{update.date}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {update.type}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Updates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">{t('updates.upcomingUpdates') as string}</h2>
          <div className="space-y-4">
            {upcomingUpdates.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.priority === 'high' ? t('updates.highPriority') as string : t('updates.mediumPriority') as string}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">{t('updates.updateHistory') as string}</h2>
          <div className="space-y-4">
            {updateHistory.map((version, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{version.version}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      version.type === 'stable' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {version.type === 'stable' ? t('updates.stableVersion') as string : t('updates.majorUpdate') as string}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{version.date}</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {version.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">21</div>
                <div className="text-gray-600">{t('updates.totalCharacters') as string}</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-gray-600">{t('updates.rarityLevels') as string}</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">15</div>
                <div className="text-gray-600">{t('updates.recentUpdates') as string}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">💡 {t('updates.updateTips') as string}</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• {t('updates.followOfficialDiscord') as string}</li>
            <li>• {t('updates.restartAfterUpdates') as string}</li>
            <li>• {t('updates.newCharactersAvailable') as string}</li>
            <li>• {t('updates.backupImportantData') as string}</li>
            <li>• {t('updates.joinCommunity') as string}</li>
            <li>• {t('updates.enableAutoUpdate') as string}</li>
            <li>• {t('updates.checkServerStatus') as string}</li>
            <li>• {t('updates.autoUpdateCheck') as string}</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 