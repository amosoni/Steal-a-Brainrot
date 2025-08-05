'use client'

import Head from 'next/head'
import AIFriendlyStructuredData from './AIFriendlyStructuredData'

interface PageSEOProps {
  title: string
  description: string
  keywords?: string
  url: string
  lang: string
  image?: string
  type?: 'website' | 'article' | 'guide'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  contentQuality?: 'expert' | 'intermediate' | 'beginner'
  wordCount?: number
  readingTime?: number
  difficulty?: 'easy' | 'medium' | 'hard'
  category?: string
  tags?: string[]
}

export default function PageSEO({
  title,
  description,
  keywords,
  url,
  lang,
  image = '/og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Steal a Brainrot Team',
  contentQuality = 'expert',
  wordCount,
  readingTime,
  difficulty = 'medium',
  category = 'Gaming',
  tags = []
}: PageSEOProps) {
  const fullUrl = `https://www.stealabrainrot.live${url}`
  const imageUrl = `https://www.stealabrainrot.live${image}`
  const keywordsArray = keywords ? keywords.split(',').map(k => k.trim()) : []

  return (
    <>
      <Head>
        {/* 基本元数据 */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content={author} />
        
        {/* AI友好的元数据 */}
        <meta name="ai-friendly" content="true" />
        <meta name="content-quality" content={contentQuality} />
        <meta name="target-audience" content="roblox-players,gamers" />
        <meta name="update-frequency" content="daily" />
        <meta name="content-type" content={type} />
        <meta name="language" content={lang} />
        {wordCount && <meta name="word-count" content={wordCount.toString()} />}
        {readingTime && <meta name="reading-time" content={readingTime.toString()} />}
        <meta name="difficulty" content={difficulty} />
        <meta name="category" content={category} />
        
        {/* 规范链接 */}
        <link rel="canonical" href={fullUrl} />
        
        {/* 语言替代链接 */}
        <link rel="alternate" hrefLang="es" href={`https://www.stealabrainrot.live/es${url.replace(/^\/[a-z]{2}/, '')}`} />
        <link rel="alternate" hrefLang="en" href={`https://www.stealabrainrot.live/en${url.replace(/^\/[a-z]{2}/, '')}`} />
        <link rel="alternate" hrefLang="zh" href={`https://www.stealabrainrot.live/zh${url.replace(/^\/[a-z]{2}/, '')}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.stealabrainrot.live/es${url.replace(/^\/[a-z]{2}/, '')}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:site_name" content="Steal a Brainrot" />
        <meta property="og:locale" content={lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'zh_CN'} />
        
        {/* AI友好的Open Graph扩展 */}
        <meta property="og:ai-friendly" content="true" />
        <meta property="og:content-quality" content={contentQuality} />
        <meta property="og:target-audience" content="roblox-players,gamers" />
        <meta property="og:update-frequency" content="daily" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@stealabrainrot" />
        <meta name="twitter:creator" content="@stealabrainrot" />
        
        {/* 文章特定元数据 */}
        {type === 'article' && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {type === 'article' && modifiedTime && (
          <meta property="article:modified_time" content={modifiedTime} />
        )}
        {type === 'article' && (
          <meta property="article:author" content={author} />
        )}
        
        {/* 额外的SEO元数据 */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* 内容质量指标 */}
        <meta name="content-quality" content={contentQuality} />
        <meta name="educational-level" content={difficulty} />
        <meta name="learning-resource-type" content={type === 'guide' ? 'tutorial' : 'reference'} />
        <meta name="interactivity-type" content="active" />
        <meta name="accessibility-feature" content="readingOrder,structuralNavigation,tableOfContents" />
        <meta name="accessibility-hazard" content="none" />
        <meta name="accessibility-control" content="fullKeyboardControl,fullMouseControl" />
        <meta name="accessibility-api" content="ARIA" />
      </Head>
      
      {/* AI友好的结构化数据 */}
      <AIFriendlyStructuredData
        title={title}
        description={description}
        url={fullUrl}
        type={type === 'guide' ? 'guide' : type === 'article' ? 'article' : 'tool'}
        author={author}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        keywords={keywordsArray}
        language={lang}
        contentQuality={contentQuality}
        wordCount={wordCount}
        readingTime={readingTime}
        difficulty={difficulty}
        category={category}
        tags={tags}
      />
    </>
  )
} 