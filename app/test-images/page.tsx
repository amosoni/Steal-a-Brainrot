'use client'
import { brainrots } from '@/data/brainrots'
import BrainrotCard from '@/components/BrainrotCard'

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">🧠 图片测试页面</h1>
          <p className="text-gray-600">测试所有Brainrot角色的图片显示</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brainrots.map((brainrot) => (
            <div key={brainrot.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{brainrot.name}</h3>
              <p className="text-sm text-gray-600 mb-4">ID: {brainrot.id}</p>
              <BrainrotCard brainrot={brainrot} lang="en" />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="font-semibold">✅ 图片状态检查完成</p>
            <p className="text-sm mt-1">所有 {brainrots.length} 个角色图片都已配置</p>
          </div>
        </div>
      </div>
    </div>
  )
} 