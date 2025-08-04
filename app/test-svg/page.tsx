'use client'
import Image from 'next/image'

export default function TestSVGPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">SVG图片测试</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Sigma Boy</h2>
          <Image
            src="/images/brainrots/sigma-boy.svg"
            alt="Sigma Boy"
            width={200}
            height={200}
            className="border"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Alpha Male</h2>
          <Image
            src="/images/brainrots/alpha-male.svg"
            alt="Alpha Male"
            width={200}
            height={200}
            className="border"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Chad</h2>
          <Image
            src="/images/brainrots/chad.svg"
            alt="Chad"
            width={200}
            height={200}
            className="border"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Gigachad</h2>
          <Image
            src="/images/brainrots/gigachad.svg"
            alt="Gigachad"
            width={200}
            height={200}
            className="border"
          />
        </div>
      </div>
    </div>
  )
} 