const fs = require('fs')
const path = require('path')

// 角色列表
const brainrots = [
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

// 基于稀有度的颜色映射
const rarityColors = {
  1: { bg: '#6B7280', text: '#FFFFFF', border: '#374151' }, // 灰色 - 普通
  2: { bg: '#10B981', text: '#FFFFFF', border: '#059669' },  // 绿色 - 稀有
  3: { bg: '#3B82F6', text: '#FFFFFF', border: '#2563EB' },  // 蓝色 - 史诗
  4: { bg: '#8B5CF6', text: '#FFFFFF', border: '#7C3AED' },  // 紫色 - 传说
  5: { bg: '#F59E0B', text: '#FFFFFF', border: '#D97706' },   // 橙色 - 神话
  6: { bg: '#EF4444', text: '#FFFFFF', border: '#DC2626' },   // 红色 - 远古
  7: { bg: '#FCD34D', text: '#000000', border: '#F59E0B' }    // 黄色 - 神级
}

// 生成SVG图片
function generateSVG(name, rarity) {
  const colors = rarityColors[rarity]
  const rarityText = getRarityText(rarity)
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="300" height="200" fill="${colors.bg}" stroke="${colors.border}" stroke-width="2"/>
  
  <!-- 装饰性圆圈 -->
  <circle cx="50" cy="50" r="15" fill="${colors.text}" opacity="0.3"/>
  <circle cx="250" cy="50" r="15" fill="${colors.text}" opacity="0.3"/>
  <circle cx="50" cy="150" r="15" fill="${colors.text}" opacity="0.3"/>
  <circle cx="250" cy="150" r="15" fill="${colors.text}" opacity="0.3"/>
  
  <!-- 角色名称 -->
  <text x="150" y="90" font-family="Arial, sans-serif" font-size="18" font-weight="bold" 
        text-anchor="middle" fill="${colors.text}">${name}</text>
  
  <!-- 稀有度 -->
  <text x="150" y="120" font-family="Arial, sans-serif" font-size="14" 
        text-anchor="middle" fill="${colors.text}">${rarityText}</text>
  
  <!-- 稀有度图标 -->
  <text x="150" y="150" font-family="Arial, sans-serif" font-size="24" 
        text-anchor="middle" fill="${colors.text}">⭐</text>
  
  <!-- 稀有度数字 -->
  <text x="150" y="175" font-family="Arial, sans-serif" font-size="12" 
        text-anchor="middle" fill="${colors.text}">Rarity ${rarity}</text>
</svg>`
}

// 获取稀有度文本
function getRarityText(rarity) {
  const rarityTexts = {
    1: 'Común',
    2: 'Raro', 
    3: 'Épico',
    4: 'Legendario',
    5: 'Mítico',
    6: 'Antiguo',
    7: 'Divino'
  }
  return rarityTexts[rarity] || 'Desconocido'
}

// 确保目录存在
const imagesDir = path.join(__dirname, '../public/images/brainrots')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

console.log('🎨 开始生成彩色SVG占位符图片...\n')

brainrots.forEach((brainrot) => {
  const svgContent = generateSVG(brainrot.name, brainrot.rarity)
  const filePath = path.join(imagesDir, `${brainrot.id}.svg`)
  
  fs.writeFileSync(filePath, svgContent)
  
  const colors = rarityColors[brainrot.rarity]
  console.log(`✅ 已生成: ${brainrot.name} (${brainrot.id}.svg) - Rarity ${brainrot.rarity} - Color ${colors.bg}`)
})

console.log('\n📊 生成完成！')
console.log('💡 现在每个角色都有独特的彩色SVG占位符图片')
console.log('💡 每个图片都有不同的颜色、文字和稀有度标识') 