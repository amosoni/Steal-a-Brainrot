import { NextRequest, NextResponse } from 'next/server'

const locales = ['es', 'en', 'zh']
const defaultLocale = 'es'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 跳过API路由和静态文件
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 检查路径是否已经包含语言代码
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // 重定向到默认语言，使用301永久重定向
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl, 301)
  }

  // 关键：如果已经有语言前缀，必须返回 NextResponse.next()
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|robots.txt|sitemap).*)',
  ],
} 
 