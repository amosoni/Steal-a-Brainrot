import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Steal a Brainrot - La Guía Más Completa de Roblox",
    template: "%s | Steal a Brainrot"
  },
  description: "🎮 La herramienta definitiva para Steal a Brainrot en Roblox. Base de datos completa de personajes, calculadora de ganancias, guías de estrategia y consejos expertos. ¡Domina el juego con nuestra asistencia profesional!",
  keywords: [
    "Steal a Brainrot",
    "Roblox",
    "Brainrot",
    "Personajes Brainrot",
    "Calculadora de ganancias",
    "Base de datos de personajes",
    "Guía de juego",
    "Estrategias Brainrot",
    "Guía de Roblox",
    "Steal a Brainrot guide",
    "Brainrot characters",
    "Profit calculator",
    "Game strategy",
    "Roblox game guide",
    "Brainrot database",
    "Steal a Brainrot calculator",
    "Roblox game tips",
    "Brainrot strategies"
  ],
  authors: [{ name: "Steal a Brainrot Team" }],
  creator: "Steal a Brainrot Team",
  publisher: "Steal a Brainrot",
  category: "Gaming",
  classification: "Game Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
      metadataBase: new URL('https://www.stealabrainrot.live'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/es',
      'en': '/en',
      'zh': '/zh',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Steal a Brainrot - La Guía Más Completa de Roblox",
    description: "🎮 La herramienta definitiva para Steal a Brainrot en Roblox. Base de datos completa de personajes, calculadora de ganancias, guías de estrategia y consejos expertos.",
          url: 'https://www.stealabrainrot.live',
    siteName: 'Steal a Brainrot',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Steal a Brainrot - La Guía Más Completa de Roblox',
        type: 'image/jpeg',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Steal a Brainrot - La Guía Más Completa de Roblox",
    description: "🎮 La herramienta definitiva para Steal a Brainrot en Roblox. Base de datos completa de personajes, calculadora de ganancias, guías de estrategia y consejos expertos.",
    images: ['/og-image.jpg'],
    creator: '@stealabrainrot',
    site: '@stealabrainrot',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-12FSDQM646',
  },
  other: {
    'theme-color': '#3B82F6',
    'msapplication-TileColor': '#3B82F6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Steal a Brainrot',
    'ai-friendly': 'true',
    'content-type': 'game-guide',
    'language': 'es,en,zh',
    'target-audience': 'roblox-players,gamers',
    'content-quality': 'expert',
    'update-frequency': 'daily',
    'author': 'Steal a Brainrot Team',
    'viewport': 'width=device-width, initial-scale=1',
    'charset': 'utf-8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-12FSDQM646"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-12FSDQM646');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Steal a Brainrot",
              "description": "La guía más completa de Roblox Steal a Brainrot, incluyendo base de datos de personajes, calculadora de ganancias, guías de estrategia y otras herramientas útiles",
              "url": "https://www.stealabrainrot.live",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.stealabrainrot.live/brainrots?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://twitter.com/stealabrainrot",
                "https://discord.gg/stealabrainrot"
              ],
              "publisher": {
                "@type": "Organization",
                "name": "Steal a Brainrot Team",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.stealabrainrot.live/favicon.svg"
                }
              }
            })
          }}
        />
        
        {/* 游戏结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "Steal a Brainrot",
              "description": "Un juego divertido, caótico y único de ritmo rápido en Roblox donde los jugadores compiten por robar un valioso objeto llamado Brainrot",
              "genre": ["Action", "Adventure", "Multiplayer"],
              "gamePlatform": "Roblox",
              "applicationCategory": "Game",
              "operatingSystem": "Web Browser",
              "url": "https://www.roblox.com/games/steal-a-brainrot"
            })
          }}
        />
        
        {/* 工具应用结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Steal a Brainrot Guide",
              "description": "Herramienta de asistencia para Steal a Brainrot con base de datos de personajes, calculadora de ganancias y guías de estrategia",
              "applicationCategory": "Game Guide",
              "operatingSystem": "Web Browser",
              "url": "https://www.stealabrainrot.live",
              "featureList": [
                "Base de datos de personajes",
                "Calculadora de ganancias",
                "Guías de estrategia",
                "Actualizaciones del juego",
                "Herramientas de optimización"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cómo protejo mi Brainrot?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La mejor manera es mantenerse en movimiento, usar power-ups defensivamente y conocer el mapa. Un jugador que se mueve constantemente y es consciente de su entorno es mucho más difícil de atacar."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Hay códigos o recompensas en el juego?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Actualmente no hay códigos promocionales activos. Los desarrolladores pueden lanzar códigos durante eventos especiales, así que asegúrate de seguir los anuncios oficiales del juego."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo puedo mejorar en el juego?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "¡La práctica es clave! Enfócate en dominar el movimiento, aprender los diseños del mapa y entender cuándo usar power-ups."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué son los Rebirths?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los Rebirths son un mecanismo central para progresar en Steal a Brainrot. Al sacrificar tu progreso actual, obtienes mejoras permanentes."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">
          <div className="w-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
