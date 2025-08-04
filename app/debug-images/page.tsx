'use client'
import Image from 'next/image'
import { brainrots } from '@/data/brainrots'
import { getCharacterImageUrl } from '@/data/imageMapping'

export default function DebugImagesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">图片调试页面</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brainrots.slice(0, 6).map((brainrot) => (
          <div key={brainrot.id} className="border p-4 rounded">
            <h3 className="font-bold mb-2">{brainrot.name}</h3>
            
            <div className="space-y-2">
              <div>
                <strong>角色数据中的图片路径:</strong>
                <p className="text-green-600 break-all">{brainrot.image}</p>
              </div>
              
              <div>
                <strong>图片映射函数返回的路径:</strong>
                <p className="text-blue-600 break-all">{getCharacterImageUrl(brainrot.id, brainrot.rarity)}</p>
              </div>
              
              <div>
                <strong>最终使用的图片路径:</strong>
                <p className="text-purple-600 break-all">{brainrot.image || getCharacterImageUrl(brainrot.id, brainrot.rarity)}</p>
              </div>
              
              <div className="mt-4">
                <strong>图片显示:</strong>
                <div className="w-16 h-16 border mt-2">
                  <Image
                    src={brainrot.image || getCharacterImageUrl(brainrot.id, brainrot.rarity)}
                    alt={brainrot.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`图片加载失败: ${brainrot.name} - ${brainrot.image}`)
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 