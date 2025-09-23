'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const supported = new Set(['es', 'en', 'zh'])

export default function SetHtmlLang() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    const segments = pathname.split('/')
    const maybeLocale = segments[1]
    const lang = supported.has(maybeLocale) ? maybeLocale : 'es'
    if (document?.documentElement?.lang !== lang) {
      document.documentElement.lang = lang
    }
  }, [pathname])

  return null
}


