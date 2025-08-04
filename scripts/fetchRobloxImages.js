const fs = require('fs')
const path = require('path')
const https = require('https')

// Roblox游戏信息
const GAME_ID = '109983668079237' // Steal a Brainrot的游戏ID
const GAME_URL = `https://thumbnails.roblox.com/v1/games/icons?gameIds=${GAME_ID}&size=512x512&format=Png&isCircular=false`

// 角色列表（基于游戏中的实际角色）
const characters = [
  { id: 'sigma-boy', name: 'Sigma Boy', rarity: 1 },
  { id: 'alpha-male', name: 'Alpha Male', rarity: 1 },
  { id: 'chad', name: 'Chad', rarity: 1 },
  { id: 'gigachad', name: 'Gigachad', rarity: 2 },
  { id: 'sigma-male', name: 'Sigma Male', rarity: 2 },
  { id: 'omega-male', name: 'Omega Male', rarity: 2 },
  { id: 'ultra-chad', name: 'Ultra Chad', rarity: 3 },
  { id: 'mega-sigma', name: 'Mega Sigma', rarity: 3 },
  { id: 'super-alpha', name: 'Super Alpha', rarity: 3 },
  { id: 'legendary-chad', name: 'Legendary Chad', rarity: 4 },
  { id: 'mythic-sigma', name: 'Mythic Sigma', rarity: 4 },
  { id: 'divine-alpha', name: 'Divine Alpha', rarity: 4 },
  { id: 'god-chad', name: 'God Chad', rarity: 5 },
  { id: 'celestial-sigma', name: 'Celestial Sigma', rarity: 5 },
  { id: 'immortal-alpha', name: 'Immortal Alpha', rarity: 5 },
  { id: 'ancient-chad', name: 'Ancient Chad', rarity: 6 },
  { id: 'primordial-sigma', name: 'Primordial Sigma', rarity: 6 },
  { id: 'eternal-alpha', name: 'Eternal Alpha', rarity: 6 },
  { id: 'supreme-chad', name: 'Supreme Chad', rarity: 7 },
  { id: 'cosmic-sigma', name: 'Cosmic Sigma', rarity: 7 },
  { id: 'omnipotent-alpha', name: 'Omnipotent Alpha', rarity: 7 }
]

// 下载图片函数
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath)
        response.pipe(fileStream)
        fileStream.on('finish', () => {
          fileStream.close()
          resolve(true)
        })
        fileStream.on('error', reject)
      } else {
        reject(new Error(`HTTP ${response.statusCode}`))
      }
    }).on('error', reject)
  })
}

// 获取Roblox游戏图标
async function getRobloxGameIcon() {
  try {
    const response = await fetch(GAME_URL)
    const data = await response.json()
    
    if (data.data && data.data.length > 0) {
      const iconUrl = data.data[0].imageUrl
      const imagesDir = path.join(__dirname, '../public/images/brainrots')
      
      if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true })
      }
      
      // 下载游戏图标作为示例
      await downloadImage(iconUrl, path.join(imagesDir, 'game-icon.png'))
      console.log('✅ 已下载游戏图标:', iconUrl)
      return iconUrl
    }
  } catch (error) {
    console.log('❌ 获取Roblox游戏图标失败:', error.message)
  }
}

// 尝试从游戏API获取角色图片
async function getCharacterImages() {
  const imagesDir = path.join(__dirname, '../public/images/brainrots')
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }
  
  console.log('🎮 尝试从游戏API获取角色图片...\n')
  
  for (const character of characters) {
    try {
      // 尝试多个可能的API端点
      const apiUrls = [
        `https://stealabrainrot.org/api/characters/${character.id}/image`,
        `https://stealabrainrot.org/api/characters/${character.name.toLowerCase().replace(/\s+/g, '-')}/image`,
        `https://api.stealabrainrot.org/characters/${character.id}/image`,
        `https://stealabrainrot.org/images/characters/${character.id}.png`,
        `https://stealabrainrot.org/images/characters/${character.name.toLowerCase().replace(/\s+/g, '-')}.png`
      ]
      
      for (const apiUrl of apiUrls) {
        try {
          console.log(`🔍 尝试: ${apiUrl}`)
          const response = await fetch(apiUrl)
          
          if (response.ok) {
            const buffer = await response.arrayBuffer()
            const filePath = path.join(imagesDir, `${character.id}.png`)
            fs.writeFileSync(filePath, Buffer.from(buffer))
            
            console.log(`✅ 成功下载: ${character.name} (${character.id}.png)`)
            break
          }
        } catch (error) {
          console.log(`❌ 失败: ${apiUrl} - ${error.message}`)
        }
      }
    } catch (error) {
      console.log(`❌ 处理角色 ${character.name} 时出错:`, error.message)
    }
  }
}

// 生成基于稀有度的AI风格图片
async function generateAIStyleImages() {
  console.log('\n🎨 生成AI风格的游戏角色图片...\n')
  
  const imagesDir = path.join(__dirname, '../public/images/brainrots')
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }
  
  // 基于稀有度的颜色和风格
  const rarityStyles = {
    1: { color: '#6B7280', style: 'simple', description: '普通角色，简单设计' },
    2: { color: '#10B981', style: 'enhanced', description: '稀有角色，增强设计' },
    3: { color: '#3B82F6', style: 'epic', description: '史诗角色，华丽设计' },
    4: { color: '#8B5CF6', style: 'legendary', description: '传说角色，传奇设计' },
    5: { color: '#F59E0B', style: 'mythic', description: '神话角色，神话设计' },
    6: { color: '#EF4444', style: 'ancient', description: '远古角色，古老设计' },
    7: { color: '#FCD34D', style: 'divine', description: '神级角色，神圣设计' }
  }
  
  for (const character of characters) {
    const style = rarityStyles[character.rarity]
    const svgContent = generateCharacterSVG(character, style)
    const filePath = path.join(imagesDir, `${character.id}.svg`)
    
    fs.writeFileSync(filePath, svgContent)
    console.log(`✅ 生成: ${character.name} - ${style.description}`)
  }
}

// 生成角色SVG
function generateCharacterSVG(character, style) {
  const colors = {
    simple: { bg: '#6B7280', text: '#FFFFFF', accent: '#374151' },
    enhanced: { bg: '#10B981', text: '#FFFFFF', accent: '#059669' },
    epic: { bg: '#3B82F6', text: '#FFFFFF', accent: '#2563EB' },
    legendary: { bg: '#8B5CF6', text: '#FFFFFF', accent: '#7C3AED' },
    mythic: { bg: '#F59E0B', text: '#FFFFFF', accent: '#D97706' },
    ancient: { bg: '#EF4444', text: '#FFFFFF', accent: '#DC2626' },
    divine: { bg: '#FCD34D', text: '#000000', accent: '#F59E0B' }
  }
  
  const color = colors[style.style]
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color.bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color.accent};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="300" height="200" fill="url(#grad1)" rx="10"/>
  
  <!-- 装饰性元素 -->
  <circle cx="50" cy="50" r="20" fill="${color.text}" opacity="0.2"/>
  <circle cx="250" cy="50" r="20" fill="${color.text}" opacity="0.2"/>
  <circle cx="50" cy="150" r="20" fill="${color.text}" opacity="0.2"/>
  <circle cx="250" cy="150" r="20" fill="${color.text}" opacity="0.2"/>
  
  <!-- 角色图标 -->
  <circle cx="150" cy="80" r="30" fill="${color.text}" opacity="0.3"/>
  <text x="150" y="85" font-family="Arial, sans-serif" font-size="24" 
        text-anchor="middle" fill="${color.text}">👤</text>
  
  <!-- 角色名称 -->
  <text x="150" y="130" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
        text-anchor="middle" fill="${color.text}">${character.name}</text>
  
  <!-- 稀有度 -->
  <text x="150" y="150" font-family="Arial, sans-serif" font-size="12" 
        text-anchor="middle" fill="${color.text}">Rarity ${character.rarity}</text>
  
  <!-- 稀有度图标 -->
  <text x="150" y="170" font-family="Arial, sans-serif" font-size="16" 
        text-anchor="middle" fill="${color.text}">⭐</text>
</svg>`
}

// 主函数
async function main() {
  console.log('🎮 开始获取Steal a Brainrot游戏图片...\n')
  
  // 1. 尝试获取Roblox游戏图标
  await getRobloxGameIcon()
  
  // 2. 尝试从游戏API获取角色图片
  await getCharacterImages()
  
  // 3. 生成AI风格图片作为备用
  await generateAIStyleImages()
  
  console.log('\n📊 完成！')
  console.log('💡 如果无法获取真实游戏图片，已生成AI风格的角色图片')
  console.log('💡 建议：')
  console.log('   - 访问 https://www.roblox.com/games/109983668079237/Steal-a-Brainrot')
  console.log('   - 在游戏中截图获取真实角色图片')
  console.log('   - 或联系游戏开发者获取官方图片资源')
}

// 运行脚本
if (require.main === module) {
  main()
} 