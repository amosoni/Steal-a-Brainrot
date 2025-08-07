import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Steal a Brainrot - La Guía Más Completa de Roblox',
  description: '🎮 La herramienta definitiva para Steal a Brainrot en Roblox. Base de datos completa de personajes, calculadora de ganancias, guías de estrategia y consejos expertos.',
  alternates: {
    canonical: 'https://www.stealabrainrot.live/es',
  },
}

export default function RootPage() {
  // 重定向到默认语言，但保留规范链接
  redirect('/es')
} 