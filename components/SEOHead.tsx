import Head from 'next/head'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  lang?: string
  type?: string
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = '', 
  image = '/og-image.jpg', 
  url = '', 
  lang = 'es',
  type = 'website'
}: SEOHeadProps) {
  const fullUrl = url ? `https://www.stealabrainrot.live${url}` : 'https://www.stealabrainrot.live'
  const fullImage = image.startsWith('http') ? image : `https://www.stealabrainrot.live${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="language" content={lang} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Steal a Brainrot Guide" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Steal a Brainrot Guide" />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : lang === 'zh' ? 'zh_CN' : 'en_US'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="es" href={`https://www.stealabrainrot.live/es${url}`} />
      <link rel="alternate" hrefLang="en" href={`https://www.stealabrainrot.live/en${url}`} />
      <link rel="alternate" hrefLang="zh" href={`https://www.stealabrainrot.live/zh${url}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://www.stealabrainrot.live/es${url}`} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": title,
            "description": description,
            "image": fullImage,
            "url": fullUrl,
            "inLanguage": lang === 'es' ? 'es' : lang === 'zh' ? 'zh' : 'en',
            "author": {
              "@type": "Organization",
              "name": "Steal a Brainrot Guide"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Steal a Brainrot Guide",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.stealabrainrot.live/logo.png"
              }
            },
            "mainEntity": {
              "@type": "HowTo",
              "name": title,
              "description": description,
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Preparation",
                  "text": "Prepare yourself and locate the main building on the Downtown map."
                },
                {
                  "@type": "HowToStep",
                  "name": "First Jump",
                  "text": "Execute the critical first jump from the main building roof to the first platform."
                },
                {
                  "@type": "HowToStep",
                  "name": "Movement Sequence",
                  "text": "Follow the specific movement sequence to reach the second floor."
                },
                {
                  "@type": "HowToStep",
                  "name": "Final Jump",
                  "text": "Calculate the distance and timing perfectly for the final jump."
                },
                {
                  "@type": "HowToStep",
                  "name": "Success",
                  "text": "Congratulations! You've reached the second floor and gained access to exclusive rewards."
                }
              ]
            }
          })
        }}
      />
    </Head>
  )
} 