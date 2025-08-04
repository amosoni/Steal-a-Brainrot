'use client'
import { brainrots } from '@/data/brainrots'
import { getCharacterImageUrl } from '@/data/imageMapping'
import Image from 'next/image'

export default function TestMappingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">🔍 图片映射测试</h1>
          <p className="text-gray-600">验证每个角色的图片映射是否正确</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brainrots.map((brainrot) => {
            const mappedUrl = getCharacterImageUrl(brainrot.id, brainrot.rarity)
            const originalUrl = brainrot.image
            
            return (
              <div key={brainrot.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">{brainrot.name}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">原始图片路径:</h4>
                    <p className="text-sm text-blue-600 break-all">{originalUrl}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">映射后路径:</h4>
                    <p className="text-sm text-green-600 break-all">{mappedUrl}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">图片预览:</h4>
                    <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={mappedUrl}
                        alt={brainrot.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          console.error(`图片加载失败: ${brainrot.name} - ${mappedUrl}`)
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    <p>ID: {brainrot.id}</p>
                    <p>Rarity: {brainrot.rarity}</p>
                    <p>Price: ${brainrot.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            <p className="font-semibold">📊 映射测试完成</p>
            <p className="text-sm mt-1">检查每个角色的图片是否正确映射和显示</p>
          </div>
        </div>
      </div>
    </div>
  )
} 