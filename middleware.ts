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

  // 重定向到默认语言
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next) 和API路由
    '/((?!_next|api|favicon.ico|robots.txt|sitemap).*)',
  ],
} 
 