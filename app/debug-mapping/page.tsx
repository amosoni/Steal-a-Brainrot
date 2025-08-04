'use client'
import { brainrots } from '@/data/brainrots'
import { getCharacterImageUrl, characterImages } from '@/data/imageMapping'

export default function DebugMappingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">🔍 图片映射调试</h1>
          <p className="text-gray-600">详细检查每个角色的图片映射情况</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">映射表检查</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(characterImages).map(([id, path]) => (
              <div key={id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{id}</h3>
                <p className="text-sm text-blue-600 break-all">{path}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">角色映射检查</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brainrots.map((brainrot) => {
              const mappedUrl = getCharacterImageUrl(brainrot.id, brainrot.rarity)
              const hasSpecificMapping = characterImages[brainrot.id] !== undefined
              const originalUrl = brainrot.image
              
              return (
                <div key={brainrot.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">{brainrot.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>ID:</strong> {brainrot.id}
                    </div>
                    <div>
                      <strong>Rarity:</strong> {brainrot.rarity}
                    </div>
                    <div>
                      <strong>有特定映射:</strong> 
                      <span className={hasSpecificMapping ? 'text-green-600' : 'text-red-600'}>
                        {hasSpecificMapping ? '✅ 是' : '❌ 否'}
                      </span>
                    </div>
                    <div>
                      <strong>原始路径:</strong>
                      <p className="text-blue-600 break-all">{originalUrl}</p>
                    </div>
                    <div>
                      <strong>映射路径:</strong>
                      <p className="text-green-600 break-all">{mappedUrl}</p>
                    </div>
                    <div>
                      <strong>路径匹配:</strong>
                      <span className={originalUrl === mappedUrl ? 'text-green-600' : 'text-red-600'}>
                        {originalUrl === mappedUrl ? '✅ 匹配' : '❌ 不匹配'}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <p className="font-semibold">🔍 调试信息</p>
            <p className="text-sm mt-1">检查每个角色是否有特定的图片映射，以及路径是否正确匹配</p>
          </div>
        </div>
      </div>
    </div>
  )
} 