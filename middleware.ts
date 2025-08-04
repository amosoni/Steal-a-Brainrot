import { NextRequest, NextResponse } from 'next/server'

const locales = ['es', 'en', 'zh']
const defaultLocale = 'es'

export function middleware(request: NextRequest) {
  // 检查路径是否已经包含语言代码
  const pathname = request.nextUrl.pathname
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
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
} 
 