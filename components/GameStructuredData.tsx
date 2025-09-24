'use client'

interface GameStructuredDataProps {
  gameName: string
  gameDescription: string
  gameUrl: string
  gameImage: string
  gameGenre: string[]
  gamePlatform: string
  language: string
}

export default function GameStructuredData({
  gameName,
  gameDescription,
  gameUrl,
  gameImage,
  gameGenre,
  gamePlatform,
  language
}: GameStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": gameName,
    "description": gameDescription,
    "url": gameUrl,
    "image": gameImage,
    "genre": gameGenre,
    "gamePlatform": gamePlatform,
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "inLanguage": language,
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Roblox Corporation",
      "url": "https://www.roblox.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "playMode": "MultiPlayer",
    "gameLocation": "Online",
    "gameItem": {
      "@type": "Thing",
      "name": "Brainrot",
      "description": "A valuable collectible item in the game"
    },
    "characterAttribute": {
      "@type": "Thing",
      "name": "Characters",
      "description": "Over 100 unique characters to collect"
    },
    "gameFeature": [
      "Multiplayer",
      "Real-time gameplay",
      "Character collection",
      "Power-ups",
      "Leaderboards"
    ],
    "screenshot": [
      {
        "@type": "ImageObject",
        "url": "https://www.stealabrainrot.live/api/images/Steal-a-Brainrot1.webp",
        "caption": "Steal a Brainrot gameplay screenshot"
      },
      {
        "@type": "ImageObject", 
        "url": "https://www.stealabrainrot.live/api/images/Steal-a-Brainrot2.webp",
        "caption": "Steal a Brainrot character interface"
      }
    ],
    "trailer": {
      "@type": "VideoObject",
      "name": "Steal a Brainrot Trailer",
      "description": "Gameplay trailer for Steal a Brainrot",
      "thumbnailUrl": "https://www.stealabrainrot.live/api/images/Steal-a-Brainrot1.webp",
      "uploadDate": "2024-01-01",
      "duration": "PT30S"
    },
    "mainEntity": {
      "@type": "WebPage",
      "name": `${gameName} - Complete Guide`,
      "description": `Complete guide and tools for ${gameName}`,
      "url": gameUrl,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Steal a Brainrot Guide",
        "url": "https://www.stealabrainrot.live"
      }
    },
    "potentialAction": [
      {
        "@type": "PlayAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": gameUrl,
          "actionPlatform": ["https://schema.org/DesktopWebPlatform"]
        }
      },
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.stealabrainrot.live/{lang}/brainrots?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ],
    "sameAs": [
      "https://www.roblox.com/games/109983668079237/Steal-a-Brainrot",
      "https://twitter.com/stealabrainrot",
      "https://discord.gg/stealabrainrot"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}
