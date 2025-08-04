'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Calendar, Star, TrendingUp, Users, Zap, Shield, Gamepad2, Bell, CheckCircle, AlertCircle, Wifi, WifiOff, Download, Clock } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface UpdatesPageProps {
  params: Promise<{ lang: string }>
}

export default function UpdatesPage({ params }: UpdatesPageProps) {
  const [lang, setLang] = useState('zh')
  
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
  const [autoRefresh, setAutoRefresh] = useState(false)
  const [notifications, setNotifications] = useState<string[]>([])
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'checking'>('online')
  const [updateProgress, setUpdateProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  // 自动检查更新
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        checkForUpdates()
      }, 300000) // 每5分钟检查一次

      return () => clearInterval(interval)
    }
  }, [autoRefresh])

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
    } catch (error) {
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

  // 手动检查更新
  const handleManualCheck = () => {
    checkForUpdates()
  }

  // 切换自动刷新
  const toggleAutoRefresh = () => {
    setAutoRefresh(!autoRefresh)
  }

  // 清除通知
  const clearNotifications = () => {
    setNotifications([])
  }

  // 模拟下载更新
  const downloadUpdate = async () => {
    setIsDownloading(true)
    setUpdateProgress(0)
    
    try {
      // 模拟下载进度
      const downloadInterval = setInterval(() => {
        setUpdateProgress(prev => {
          if (prev >= 100) {
            clearInterval(downloadInterval)
            setIsDownloading(false)
            const downloadNotification = `Actualización descargada exitosamente - ${new Date().toLocaleTimeString()}`
            setNotifications(prev => [downloadNotification, ...prev.slice(0, 4)])
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 500)
    } catch (error) {
      setIsDownloading(false)
      setUpdateProgress(0)
      const errorNotification = `Error al descargar actualización - ${new Date().toLocaleTimeString()}`
      setNotifications(prev => [errorNotification, ...prev.slice(0, 4)])
    }
  }

  const updates = [
    {
      id: 1,
      title: t('updates.newCharactersReleased'),
      description: t('updates.newCharactersAdded'),
      category: 'characters',
      date: '1 de Agosto, 2024',
      type: 'feature',
      color: 'blue',
      icon: <Star className="w-5 h-5" />
    },
    {
      id: 2,
      title: t('updates.balanceAdjustments'),
      description: t('updates.balanceAdjustments'),
      category: 'balance',
      date: '1 de Agosto, 2024',
      type: 'balance',
      color: 'green',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 3,
      title: t('updates.interfaceOptimization'),
      description: t('updates.interfaceOptimization'),
      category: 'ui',
      date: '1 de Agosto, 2024',
      type: 'improvement',
      color: 'purple',
      icon: <Zap className="w-5 h-5" />
    }
  ]

  const upcoming = [
    {
      id: 1,
      title: t('updates.newRarityLevels'),
      description: t('updates.newRarityLevels'),
      category: 'characters',
      date: t('updates.nextWeek'),
      priority: 'high',
      icon: <Star className="w-5 h-5" />
    },
    {
      id: 2,
      title: t('updates.rebirthSystemOptimization'),
      description: t('updates.rebirthSystemOptimization'),
      category: 'system',
      date: t('updates.twoWeeks'),
      priority: 'medium',
      icon: <RefreshCw className="w-5 h-5" />
    },
    {
      id: 3,
      title: t('updates.newGameMode'),
      description: t('updates.cooperativeMode'),
      category: 'gameplay',
      date: t('updates.oneMonth'),
      priority: 'high',
      icon: <Users className="w-5 h-5" />
    }
  ]

  const history = [
    {
      version: 'v2.1.0',
      date: '15 de Julio, 2024',
      type: 'stable',
      changes: [
        t('updates.bugFixes'),
        t('updates.performanceOptimization'),
        t('updates.epicCharactersAdded')
      ]
    },
    {
      version: 'v2.0.0',
      date: '30 de Junio, 2024',
      type: 'major',
      changes: [
        t('updates.completeInterfaceRedesign'),
        t('updates.rebirthSystemAdded'),
        t('updates.rarityLevelSystem'),
        t('updates.newCharactersAdded')
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas', color: 'gray' },
    { id: 'characters', name: 'Personajes', color: 'blue' },
    { id: 'balance', name: 'Balance', color: 'green' },
    { id: 'ui', name: 'Interfaz', color: 'purple' },
    { id: 'system', name: 'Sistema', color: 'orange' },
    { id: 'gameplay', name: 'Jugabilidad', color: 'red' }
  ]

  const filteredUpdates = selectedCategory === 'all' 
    ? updates 
    : updates.filter(update => update.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href={`/${lang}`} className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            {t('updates.backToHome')}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔄 {t('updates.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('updates.description')}
          </p>
        </div>

        {/* Server Status */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {serverStatus === 'online' ? (
                <Wifi className="w-5 h-5 text-green-500" />
              ) : serverStatus === 'offline' ? (
                <WifiOff className="w-5 h-5 text-red-500" />
              ) : (
                <RefreshCw className="w-5 h-5 text-yellow-500 animate-spin" />
              )}
              <span className="font-medium">
                {t('updates.serverStatus')}: 
                <span className={`ml-1 ${
                  serverStatus === 'online' ? 'text-green-600' :
                  serverStatus === 'offline' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {serverStatus === 'online' ? t('updates.online') :
                   serverStatus === 'offline' ? t('updates.offline') : t('updates.checking')}
                </span>
              </span>
            </div>
            <button
              onClick={checkServerStatus}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              {t('updates.verifyStatus')}
            </button>
          </div>
        </div>

        {/* Auto Update Controls */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{t('updates.updateSettings')}</h2>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">
                {t('updates.lastCheck')}: {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
          </div>
          
          {/* Progress Bar */}
          {(isChecking || isDownloading) && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {isChecking ? t('updates.checkingUpdates') : t('updates.downloading')}
                </span>
                <span className="text-sm text-gray-500">{Math.round(updateProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${updateProgress}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button
              onClick={handleManualCheck}
              disabled={isChecking || isDownloading}
              className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isChecking ? 'animate-spin' : ''}`} />
              {isChecking ? t('updates.checking') : t('updates.checkNow')}
            </button>
            
            <button
              onClick={toggleAutoRefresh}
              className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                autoRefresh 
                  ? 'bg-green-500 text-white hover:bg-green-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Bell className="w-4 h-4 mr-2" />
              {autoRefresh ? `${t('updates.autoUpdate')} ON` : `${t('updates.autoUpdate')} OFF`}
            </button>
            
            <button
              onClick={downloadUpdate}
              disabled={isChecking || isDownloading}
              className="flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-spin' : ''}`} />
              {isDownloading ? t('updates.downloading') : t('updates.downloadUpdate')}
            </button>
            
            <button
              onClick={clearNotifications}
              className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              {t('updates.clearNotifications')}
            </button>
          </div>
        </div>

        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-yellow-800">{t('updates.notifications')}</h3>
              <button
                onClick={clearNotifications}
                className="text-yellow-600 hover:text-yellow-800"
              >
                ×
              </button>
            </div>
            <div className="space-y-2">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center text-yellow-700">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {notification}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">{t('updates.filterByCategory')}</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(`updates.${category.id}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Latest Updates */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{t('updates.latestUpdates')}</h2>
              <span className="text-sm text-gray-500">1 de Agosto, 2024</span>
            </div>
            <div className="space-y-4">
              {filteredUpdates.map(update => (
                <div key={update.id} className={`border-l-4 border-${update.color}-500 pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors`}>
                  <div className="flex items-start">
                    <div className={`text-${update.color}-500 mr-3 mt-1`}>
                      {update.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{update.title}</h3>
                      <p className="text-gray-600 mt-1">{update.description}</p>
                      <div className="flex items-center mt-2">
                        <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{update.date}</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                          update.type === 'feature' ? 'bg-blue-100 text-blue-800' :
                          update.type === 'balance' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {update.type === 'feature' ? 'Nueva Función' :
                           update.type === 'balance' ? 'Balance' : 'Mejora'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Updates */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">{t('updates.upcomingUpdates')}</h2>
            <div className="space-y-4">
              {upcoming.map(item => (
                <div key={item.id} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    <div className="flex items-center mt-2">
                      <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Update History */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">{t('updates.updateHistory')}</h2>
            <div className="space-y-6">
              {history.map((version, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{version.version}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                      version.type === 'stable' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {version.type === 'stable' ? t('updates.stableVersion') : t('updates.majorUpdate')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{version.date}</p>
                  <ul className="text-gray-600 mt-3 space-y-1">
                    {version.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">21</div>
              <div className="text-gray-600">{t('updates.totalCharacters')}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">7</div>
              <div className="text-gray-600">{t('updates.rarityLevels')}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">{t('updates.recentUpdates')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">💡 {t('updates.updateTips')}</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• {t('updates.followOfficialDiscord')}</li>
          <li>• {t('updates.restartAfterUpdates')}</li>
          <li>• {t('updates.newCharactersAvailable')}</li>
          <li>• {t('updates.backupImportantData')}</li>
          <li>• {t('updates.joinCommunity')}</li>
          <li>• {t('updates.enableAutoUpdate')}</li>
          <li>• {t('updates.checkServerStatus')}</li>
          <li>• {t('updates.autoUpdateCheck')}</li>
        </ul>
      </div>
    </div>
  )
} 