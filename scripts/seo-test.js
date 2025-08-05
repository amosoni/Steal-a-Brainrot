#!/usr/bin/env node

/**
 * SEO测试脚本
 * 基于图片中的SEO经验分享进行优化验证
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// SEO测试配置
const SEO_TESTS = {
  // 基础SEO检查
  basic: {
    title: '检查页面标题',
    description: '检查页面描述',
    keywords: '检查关键词',
    canonical: '检查规范链接',
    robots: '检查robots标签'
  },
  
  // AI友好度检查
  aiFriendly: {
    'ai-friendly': '检查AI友好度标记',
    'content-quality': '检查内容质量标记',
    'target-audience': '检查目标受众标记',
    'update-frequency': '检查更新频率标记'
  },
  
  // 社交媒体优化
  social: {
    'og:title': '检查Open Graph标题',
    'og:description': '检查Open Graph描述',
    'og:image': '检查Open Graph图片',
    'twitter:card': '检查Twitter Card类型',
    'twitter:title': '检查Twitter标题',
    'twitter:description': '检查Twitter描述'
  },
  
  // 结构化数据
  structured: {
    'application/ld+json': '检查结构化数据'
  }
};

// 测试URL列表
const TEST_URLS = [
  'https://www.stealabrainrot.live/',
  'https://www.stealabrainrot.live/es',
  'https://www.stealabrainrot.live/en',
  'https://www.stealabrainrot.live/zh',
  'https://www.stealabrainrot.live/es/guides',
  'https://www.stealabrainrot.live/es/brainrots'
];

/**
 * 获取页面HTML内容
 */
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

/**
 * 检查meta标签
 */
function checkMetaTags(html, testName) {
  const results = {};
  
  for (const [tag, description] of Object.entries(SEO_TESTS[testName])) {
    const regex = new RegExp(`<meta[^>]*${tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^>]*>`, 'i');
    const match = html.match(regex);
    results[tag] = {
      found: !!match,
      description,
      value: match ? match[0] : null
    };
  }
  
  return results;
}

/**
 * 检查结构化数据
 */
function checkStructuredData(html) {
  const regex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  const matches = html.match(regex);
  
  return {
    found: !!matches,
    count: matches ? matches.length : 0,
    data: matches || []
  };
}

/**
 * 检查robots.txt
 */
async function checkRobotsTxt() {
  try {
    const robotsContent = await fetchPage('https://www.stealabrainrot.live/robots.txt');
    const aiCrawlers = [
      'ChatGPT-User',
      'OpenAI',
      'GPTBot',
      'Google-Extended',
      'PerplexityBot',
      'Applebot'
    ];
    
    const results = {};
    for (const crawler of aiCrawlers) {
      results[crawler] = robotsContent.includes(crawler);
    }
    
    return {
      accessible: true,
      aiCrawlers: results,
      content: robotsContent.substring(0, 500) + '...'
    };
  } catch (error) {
    return {
      accessible: false,
      error: error.message
    };
  }
}

/**
 * 检查sitemap
 */
async function checkSitemap() {
  try {
    const sitemapContent = await fetchPage('https://www.stealabrainrot.live/sitemap.xml');
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    
    return {
      accessible: true,
      urlCount,
      hasHreflang: sitemapContent.includes('hreflang'),
      content: sitemapContent.substring(0, 500) + '...'
    };
  } catch (error) {
    return {
      accessible: false,
      error: error.message
    };
  }
}

/**
 * 主测试函数
 */
async function runSEOTests() {
  console.log('🚀 开始SEO测试...\n');
  
  // 测试robots.txt
  console.log('📋 检查robots.txt...');
  const robotsResult = await checkRobotsTxt();
  console.log(`   - 可访问: ${robotsResult.accessible ? '✅' : '❌'}`);
  if (robotsResult.aiCrawlers) {
    console.log('   - AI爬虫支持:');
    for (const [crawler, supported] of Object.entries(robotsResult.aiCrawlers)) {
      console.log(`     ${crawler}: ${supported ? '✅' : '❌'}`);
    }
  }
  
  // 测试sitemap
  console.log('\n📋 检查sitemap.xml...');
  const sitemapResult = await checkSitemap();
  console.log(`   - 可访问: ${sitemapResult.accessible ? '✅' : '❌'}`);
  if (sitemapResult.accessible) {
    console.log(`   - URL数量: ${sitemapResult.urlCount}`);
    console.log(`   - 多语言支持: ${sitemapResult.hasHreflang ? '✅' : '❌'}`);
  }
  
  // 测试页面SEO
  console.log('\n📋 检查页面SEO...');
  for (const url of TEST_URLS.slice(0, 2)) { // 只测试前两个URL
    try {
      console.log(`\n   测试: ${url}`);
      const html = await fetchPage(url);
      
      // 基础SEO检查
      const basicResults = checkMetaTags(html, 'basic');
      console.log('   基础SEO:');
      for (const [tag, result] of Object.entries(basicResults)) {
        console.log(`     ${result.description}: ${result.found ? '✅' : '❌'}`);
      }
      
      // AI友好度检查
      const aiResults = checkMetaTags(html, 'aiFriendly');
      console.log('   AI友好度:');
      for (const [tag, result] of Object.entries(aiResults)) {
        console.log(`     ${result.description}: ${result.found ? '✅' : '❌'}`);
      }
      
      // 社交媒体优化
      const socialResults = checkMetaTags(html, 'social');
      console.log('   社交媒体:');
      for (const [tag, result] of Object.entries(socialResults)) {
        console.log(`     ${result.description}: ${result.found ? '✅' : '❌'}`);
      }
      
      // 结构化数据
      const structuredResults = checkStructuredData(html);
      console.log(`   结构化数据: ${structuredResults.found ? '✅' : '❌'} (${structuredResults.count}个)`);
      
    } catch (error) {
      console.log(`   ❌ 错误: ${error.message}`);
    }
  }
  
  console.log('\n✅ SEO测试完成！');
  console.log('\n💡 基于图片中的SEO经验分享，我们的优化包括:');
  console.log('   - AI友好的robots.txt配置');
  console.log('   - 增强的sitemap.xml');
  console.log('   - 完整的Open Graph和Twitter Card');
  console.log('   - 结构化数据支持');
  console.log('   - 多语言SEO优化');
  console.log('   - 内容质量指标');
}

// 运行测试
if (require.main === module) {
  runSEOTests().catch(console.error);
}

module.exports = {
  runSEOTests,
  checkMetaTags,
  checkStructuredData,
  checkRobotsTxt,
  checkSitemap
}; 