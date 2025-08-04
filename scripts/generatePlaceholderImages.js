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
  1: '#6B7280', // 灰色 - 普通
  2: '#10B981', // 绿色 - 稀有
  3: '#3B82F6', // 蓝色 - 史诗
  4: '#8B5CF6', // 紫色 - 传说
  5: '#F59E0B', // 橙色 - 神话
  6: '#EF4444', // 红色 - 远古
  7: '#FCD34D'  // 黄色 - 神级
}

// 生成SVG占位符图片
function generateSVG(name, rarity) {
  const color = rarityColors[rarity]
  const textColor = '#FFFFFF'
  
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="${color}"/>
    <text x="150" y="100" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${name}</text>
    <text x="150" y="130" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">Rarity: ${rarity}</text>
    <circle cx="50" cy="50" r="20" fill="${textColor}" opacity="0.2"/>
    <circle cx="250" cy="50" r="20" fill="${textColor}" opacity="0.2"/>
    <circle cx="50" cy="150" r="20" fill="${textColor}" opacity="0.2"/>
    <circle cx="250" cy="150" r="20" fill="${textColor}" opacity="0.2"/>
  </svg>`
}

// 确保目录存在
const imagesDir = path.join(__dirname, '../public/images/brainrots')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

console.log('🎨 开始生成占位符图片...\n')

brainrots.forEach((brainrot, index) => {
  const svgContent = generateSVG(brainrot.name, brainrot.rarity)
  const filePath = path.join(imagesDir, `${brainrot.id}.png`)
  
  // 注意：这里我们生成SVG，但保存为PNG文件名
  // 在实际应用中，您可能需要使用图像处理库来转换SVG为PNG
  // 或者直接使用SVG文件
  
  // 为了演示，我们创建一个简单的文本文件来标记
  const markerPath = path.join(imagesDir, `${brainrot.id}.svg`)
  fs.writeFileSync(markerPath, svgContent, 'utf8')
  
  console.log(`✅ 已生成: ${brainrot.name} (${brainrot.id}.svg) - Rarity ${brainrot.rarity}`)
})

console.log('\n📊 生成完成！')
console.log('💡 注意：这些是SVG文件，您可能需要将它们转换为PNG格式')
console.log('💡 或者修改代码以直接使用SVG文件作为图片源') 