import { NextRequest, NextResponse } from 'next/server'

// 支持的语言列表
const locales = ['es', 'en', 'zh']
const defaultLocale = 'es'

export function middleware(request: NextRequest) {
  // 获取路径名
  const pathname = request.nextUrl.pathname
  
  // 检查路径是否已经包含语言代码
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果路径没有语言代码，重定向到默认语言
  if (!pathnameHasLocale) {
    // 获取用户的首选语言
    const acceptLanguage = request.headers.get('accept-language') || ''
    let preferredLocale = defaultLocale
    
    // 根据Accept-Language头确定首选语言
    if (acceptLanguage.includes('zh') || acceptLanguage.includes('zh-CN') || acceptLanguage.includes('zh-TW')) {
      preferredLocale = 'zh'
    } else if (acceptLanguage.includes('en')) {
      preferredLocale = 'en'
    } else {
      preferredLocale = 'es'
    }
    
    // 重定向到首选语言
    const newUrl = new URL(`/${preferredLocale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  // 如果路径有语言代码，继续处理
  return NextResponse.next()
}

export const config = {
  matcher: [
    // 匹配所有路径，除了以下路径：
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - 已经包含语言代码的路径
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
} 
 