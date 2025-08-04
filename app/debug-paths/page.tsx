'use client'
import { brainrots } from '@/data/brainrots'
import { getCharacterImageUrl } from '@/data/imageMapping'

export default function DebugPathsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">调试图片路径</h1>
      
      <div className="space-y-4">
        {brainrots.slice(0, 5).map((brainrot) => (
          <div key={brainrot.id} className="border p-4 rounded">
            <h3 className="font-bold">{brainrot.name}</h3>
            <p><strong>ID:</strong> {brainrot.id}</p>
            <p><strong>直接图片路径:</strong> {brainrot.image}</p>
            <p><strong>getCharacterImageUrl结果:</strong> {getCharacterImageUrl(brainrot.id, brainrot.rarity)}</p>
            <p><strong>最终使用的路径:</strong> {brainrot.image || getCharacterImageUrl(brainrot.id, brainrot.rarity)}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 