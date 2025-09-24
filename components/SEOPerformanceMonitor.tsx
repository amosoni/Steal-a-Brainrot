'use client'
import { useEffect } from 'react'

interface SEOPerformanceMonitorProps {
  pageName: string
  lang: string
}

export default function SEOPerformanceMonitor({ pageName, lang }: SEOPerformanceMonitorProps) {
  useEffect(() => {
    // 监控Core Web Vitals
    const reportWebVitals = (metric: any) => {
      // 发送到Google Analytics或其他分析工具
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: pageName,
          value: Math.round(metric.value),
          non_interaction: true,
        })
      }
    }

    // 监控LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          reportWebVitals({
            name: 'LCP',
            value: entry.startTime,
          })
        }
      }
    })

    observer.observe({ entryTypes: ['largest-contentful-paint'] })

    // 监控FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEventTiming
        reportWebVitals({
          name: 'FID',
          value: fidEntry.processingStart - fidEntry.startTime,
        })
      }
    })

    fidObserver.observe({ entryTypes: ['first-input'] })

    // 监控CLS (Cumulative Layout Shift)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      reportWebVitals({
        name: 'CLS',
        value: clsValue,
      })
    })

    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // 监控页面加载时间
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      reportWebVitals({
        name: 'Load Time',
        value: loadTime,
      })
    })

    return () => {
      observer.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [pageName])

  return null
}
