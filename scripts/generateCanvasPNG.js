const fs = require('fs')
const path = require('path')
const { createCanvas } = require('canvas')

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

// 生成PNG图片
function generatePNG(name, rarity) {
  const canvas = createCanvas(300, 200)
  const ctx = canvas.getContext('2d')
  
  // 设置背景色
  ctx.fillStyle = rarityColors[rarity]
  ctx.fillRect(0, 0, 300, 200)
  
  // 添加文字
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 24px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(name, 150, 100)
  
  // 添加稀有度指示器
  ctx.fillStyle = '#000000'
  ctx.font = 'bold 16px Arial'
  ctx.fillText(`Rarity: ${rarity}`, 150, 130)
  
  // 添加装饰性圆圈
  ctx.fillStyle = '#FFFFFF'
  ctx.globalAlpha = 0.2
  ctx.beginPath()
  ctx.arc(50, 50, 20, 0, 2 * Math.PI)
  ctx.fill()
  ctx.arc(250, 50, 20, 0, 2 * Math.PI)
  ctx.fill()
  ctx.arc(50, 150, 20, 0, 2 * Math.PI)
  ctx.fill()
  ctx.arc(250, 150, 20, 0, 2 * Math.PI)
  ctx.fill()
  
  return canvas.toBuffer('image/png')
}

// 确保目录存在
const imagesDir = path.join(__dirname, '../public/images/brainrots')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

console.log('🎨 开始生成Canvas PNG占位符图片...\n')

brainrots.forEach((brainrot) => {
  const pngBuffer = generatePNG(brainrot.name, brainrot.rarity)
  const filePath = path.join(imagesDir, `${brainrot.id}.png`)
  
  fs.writeFileSync(filePath, pngBuffer)
  
  console.log(`✅ 已生成: ${brainrot.name} (${brainrot.id}.png) - Rarity ${brainrot.rarity} - Color ${rarityColors[brainrot.rarity]}`)
})

console.log('\n📊 生成完成！')
console.log('💡 现在每个角色都有独特的彩色占位符图片') 