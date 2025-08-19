'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
}

// 扩展的PerformanceEntry类型
interface LayoutShiftEntry extends PerformanceEntry {
  value: number
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number
  startTime: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  })

  useEffect(() => {
    // 只在开发环境中显示性能监控
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    // 监听性能指标
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            break
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'first-input':
            const firstInputEntry = entry as FirstInputEntry
            setMetrics(prev => ({ 
              ...prev, 
              fid: firstInputEntry.processingStart - firstInputEntry.startTime 
            }))
            break
          case 'layout-shift':
            const layoutShiftEntry = entry as LayoutShiftEntry
            setMetrics(prev => ({ 
              ...prev, 
              cls: prev.cls ? prev.cls + layoutShiftEntry.value : layoutShiftEntry.value 
            }))
            break
        }
      }
    })

    // 观察性能指标
    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

    // 获取TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
      }))
    }

    // 清理函数
    return () => {
      observer.disconnect()
    }
  }, [])

  // 只在开发环境中显示
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const getMetricColor = (value: number | null, threshold: number) => {
    if (value === null) return 'text-gray-500'
    return value <= threshold ? 'text-green-600' : value <= threshold * 1.5 ? 'text-yellow-600' : 'text-red-600'
  }

  const getMetricStatus = (value: number | null, threshold: number) => {
    if (value === null) return 'N/A'
    return value <= threshold ? '✅' : value <= threshold * 1.5 ? '⚠️' : '❌'
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 z-50 max-w-xs">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Performance Monitor</h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">FCP:</span>
          <span className={getMetricColor(metrics.fcp, 1800)}>
            {getMetricStatus(metrics.fcp, 1800)} {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">LCP:</span>
          <span className={getMetricColor(metrics.lcp, 2500)}>
            {getMetricStatus(metrics.lcp, 2500)} {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">FID:</span>
          <span className={getMetricColor(metrics.fid, 100)}>
            {getMetricStatus(metrics.fid, 100)} {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">CLS:</span>
          <span className={getMetricColor(metrics.cls, 0.1)}>
            {getMetricStatus(metrics.cls, 0.1)} {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">TTFB:</span>
          <span className={getMetricColor(metrics.ttfb, 800)}>
            {getMetricStatus(metrics.ttfb, 800)} {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <div>✅ Good</div>
          <div>⚠️ Needs Improvement</div>
          <div>❌ Poor</div>
        </div>
      </div>
    </div>
  )
} 