'use client'

import { useEffect, useState } from 'react'

export default function TestRedirectsPage() {
  const [testResults, setTestResults] = useState<Array<{
    url: string
    status: 'testing' | 'success' | 'error'
    message: string
  }>>([])
  const [isClient, setIsClient] = useState(false)
  const [testProgress, setTestProgress] = useState({ current: 0, total: 0 })

  const testUrls = [
    'http://localhost:3000/',
    'http://localhost:3000/es/',
    'http://localhost:3000/en/',
    'http://localhost:3000/zh/',
    'https://stealabrainrot.live/',
    'https://stealabrainrot.live/es/',
    'https://www.stealabrainrot.live/',
    'https://www.stealabrainrot.live/es/',
    'https://www.stealabrainrot.live/en/',
    'https://www.stealabrainrot.live/zh/',
  ]

  useEffect(() => {
    setIsClient(true)
    
    const testRedirects = async () => {
      const results = []
      setTestProgress({ current: 0, total: testUrls.length })
      
      // 添加延迟确保页面完全加载
      await new Promise(resolve => setTimeout(resolve, 100))
      
      for (let i = 0; i < testUrls.length; i++) {
        const url = testUrls[i]
        setTestProgress({ current: i + 1, total: testUrls.length })
        results.push({
          url,
          status: 'testing' as const,
          message: 'Testing...'
        })
        setTestResults([...results])
        
        try {
          const response = await fetch(url, {
            method: 'HEAD',
            redirect: 'follow',
            mode: 'cors'
          })
          
          const finalUrl = response.url
          const isRedirect = finalUrl !== url
          const statusCode = response.status
          
          // 检查重定向类型
          let redirectType = ''
          if (isRedirect) {
            if (statusCode === 301) {
              redirectType = ' (301 Permanent)'
            } else if (statusCode === 302) {
              redirectType = ' (302 Temporary)'
            } else {
              redirectType = ` (${statusCode})`
            }
          }
          
          const newResult = {
            url,
            status: 'success' as const,
            message: isRedirect 
              ? `Redirects to: ${finalUrl}${redirectType}` 
              : `Direct access (${statusCode})`
          }
          
          results[results.length - 1] = newResult
          setTestResults([...results])
          
          console.log(`Test completed for ${url}:`, newResult)
        } catch (error) {
          // 检查是否是 CORS 错误
          const errorMessage = error instanceof Error ? error.message : 'Unknown error'
          const isCorsError = errorMessage.includes('CORS') || errorMessage.includes('Failed to fetch')
          
          const newResult = {
            url,
            status: 'error' as const,
            message: isCorsError 
              ? `CORS Error: Cannot test from localhost (expected for production URLs)`
              : `Error: ${errorMessage}`
          }
          
          results[results.length - 1] = newResult
          setTestResults([...results])
          
          console.log(`Test failed for ${url}:`, newResult)
        }
      }
    }

    testRedirects()
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Redirect Test Results
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Loading test results...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Redirect Test Results
          </h1>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Tests
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">URL Redirect Status</h2>
            {testProgress.total > 0 && (
              <div className="text-sm text-gray-600">
                Progress: {testProgress.current}/{testProgress.total}
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            {testResults.map((result, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-gray-600">
                    {result.url}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    result.status === 'testing' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : result.status === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {result.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{result.message}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Expected Behavior
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• <strong>Localhost URLs:</strong> Should work directly (no redirects)</li>
            <li>• <strong>Production URLs:</strong> May show CORS errors (expected from localhost)</li>
            <li>• <strong>Non-www URLs:</strong> Should redirect to www version (301 permanent)</li>
            <li>• <strong>Root URL:</strong> Should redirect to /es/ (302 temporary)</li>
            <li>• <strong>Language URLs:</strong> Should be accessible directly</li>
            <li>• <strong>SEO-friendly:</strong> 301 for domain, 302 for language</li>
          </ul>
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> CORS errors for production URLs are expected when testing from localhost. 
              To test production redirects, use browser dev tools or deploy to staging.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
