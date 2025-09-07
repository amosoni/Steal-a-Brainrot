'use client';

import { useEffect } from 'react';

export default function TestGAPage() {
  useEffect(() => {
    // 检查 Google Analytics 是否已加载
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('✅ Google Analytics 已加载');
      
      // 发送测试事件
      window.gtag('event', 'page_view', {
        page_title: 'Google Analytics 测试页面',
        page_location: window.location.href,
      });
      
      console.log('✅ 测试事件已发送');
    } else {
      console.log('❌ Google Analytics 未加载');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Google Analytics 测试页面
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">配置信息</h2>
          <div className="space-y-2">
            <p><strong>GA ID:</strong> G-12FSDQM646</p>
            <p><strong>页面标题:</strong> {typeof window !== 'undefined' ? document.title : 'Loading...'}</p>
            <p><strong>页面URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Loading...'}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">测试步骤</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>打开浏览器开发者工具 (F12)</li>
            <li>查看 Console 标签页</li>
            <li>应该看到 "✅ Google Analytics 已加载" 和 "✅ 测试事件已发送" 消息</li>
            <li>在 Network 标签页中搜索 "gtag" 或 "analytics" 来确认请求已发送</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">验证方法</h2>
          <div className="space-y-2">
            <p>1. <strong>Google Search Console:</strong> 使用 Google Analytics 方法验证网站所有权</p>
            <p>2. <strong>Google Analytics:</strong> 检查实时报告是否显示访问数据</p>
            <p>3. <strong>浏览器检查:</strong> 确认 gtag 脚本已正确加载</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 提示</h3>
          <p className="text-blue-800">
            如果 Google Analytics 验证仍然失败，请确保：
          </p>
          <ul className="list-disc list-inside mt-2 text-blue-800 space-y-1">
            <li>网站已部署到生产环境</li>
            <li>使用正确的 Google Analytics ID</li>
            <li>脚本在 &lt;head&gt; 部分正确加载</li>
            <li>没有其他 Google Analytics 配置冲突</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// 声明全局 gtag 函数
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
