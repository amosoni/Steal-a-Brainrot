'use client'
import Image from 'next/image'

interface SEOImageProps {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function SEOImage({
  src,
  alt,
  title,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  loading = 'lazy',
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL
}: SEOImageProps) {
  // 生成SEO友好的alt文本
  const seoAlt = alt.includes('Steal a Brainrot') 
    ? alt 
    : `Steal a Brainrot ${alt}`

  // 生成SEO友好的title
  const seoTitle = title || alt

  // 生成blur placeholder
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U3RlYWwgYSBCcmFpbnJvdDwvdGV4dD48L3N2Zz4='

  if (fill) {
    return (
      <Image
        src={src}
        alt={seoAlt}
        title={seoTitle}
        fill
        className={className}
        priority={priority}
        loading={loading}
        sizes={sizes || '100vw'}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        // SEO优化属性
        itemProp="image"
        role="img"
        aria-label={seoAlt}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={seoAlt}
      title={seoTitle}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={loading}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL || defaultBlurDataURL}
      // SEO优化属性
      itemProp="image"
      role="img"
      aria-label={seoAlt}
    />
  )
}
