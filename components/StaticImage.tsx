import Image from 'next/image';
// usePathname 当前未使用，但保留以备将来使用
// import { usePathname } from 'next/navigation';

interface StaticImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  unoptimized?: boolean;
}

export default function StaticImage({ src, alt, fill, width, height, className, unoptimized = true }: StaticImageProps) {
  // 移除语言前缀，确保图片路径正确
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  
  return (
    <Image
      src={cleanSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      unoptimized={unoptimized}
    />
  );
} 
 