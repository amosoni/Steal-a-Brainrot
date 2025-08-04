'use client'
import { brainrots } from '@/data/brainrots'
import Image from 'next/image'

export default function TestGameImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">🎮 游戏图片测试</h1>
          <p className="text-gray-600">测试从游戏API获取的真实图片</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brainrots.map((brainrot) => (
            <div key={brainrot.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{brainrot.name}</h3>
              <p className="text-sm text-gray-600 mb-2">ID: {brainrot.id}</p>
              <p className="text-sm text-gray-600 mb-4">Rarity: {brainrot.rarity}</p>
              
              <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={brainrot.image}
                  alt={brainrot.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    console.error(`游戏图片加载失败: ${brainrot.name} - ${brainrot.image}`)
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              
              <div className="text-xs text-gray-500">
                <p>图片路径: {brainrot.image}</p>
                <p>价格: ${brainrot.price.toLocaleString()}</p>
                <p>收益: ${brainrot.profit.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="font-semibold">✅ 游戏图片测试完成</p>
            <p className="text-sm mt-1">这些图片是从游戏API获取的真实图片，每个角色都应该显示独特的游戏内图片</p>
          </div>
        </div>
      </div>
    </div>
  )
} 