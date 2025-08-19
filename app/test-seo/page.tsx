import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Test Page - Steal a Brainrot',
  description: 'Test page to verify SEO fixes and canonical URLs',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SEOTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🧪 SEO Test Page
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            SEO Configuration Test
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800">✅ Canonical URLs</h3>
              <p className="text-green-700">
                This page should have proper canonical URLs and hreflang tags.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800">🔍 Meta Tags</h3>
              <p className="text-blue-700">
                Check page source for proper meta tags and structured data.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800">🌐 Language Support</h3>
              <p className="text-purple-700">
                Verify that language switching works correctly.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">
            Test Instructions
          </h2>
          
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Check page source for canonical URL</li>
            <li>Verify hreflang tags are present</li>
            <li>Test language switcher functionality</li>
            <li>Check Google Search Console for indexing</li>
            <li>Verify no redirect loops exist</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 