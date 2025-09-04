import Image from "next/image"
import { useState } from "react"

interface GameScreenshotProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  priority?: boolean
  showPlaceholder?: boolean
}

export default function GameScreenshot({
  src,
  alt,
  fallbackSrc = "/images/placeholder-game.png",
  className = "",
  priority = false,
  showPlaceholder = true
}: GameScreenshotProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && showPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      <Image
        src={imageError ? fallbackSrc : src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-2xl mb-2">??</div>
            <div className="text-sm">Game Screenshot</div>
          </div>
        </div>
      )}
    </div>
  )
}
