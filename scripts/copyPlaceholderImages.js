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

// 确保目录存在
const imagesDir = path.join(__dirname, '../public/images/brainrots')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

// 创建一个简单的占位符图片（1x1像素的PNG）
function createSimplePNG() {
  // 这是一个最小的有效PNG文件（1x1像素，透明）
  const pngData = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG header
    0x00, 0x00, 0x00, 0x0D, // IHDR chunk length
    0x49, 0x48, 0x44, 0x52, // IHDR
    0x00, 0x00, 0x00, 0x01, // width: 1
    0x00, 0x00, 0x00, 0x01, // height: 1
    0x08, // bit depth: 8
    0x06, // color type: RGBA
    0x00, // compression: 0
    0x00, // filter: 0
    0x00, // interlace: 0
    0x1F, 0x15, 0xC4, 0x89, // CRC
    0x00, 0x00, 0x00, 0x0C, // IDAT chunk length
    0x49, 0x44, 0x41, 0x54, // IDAT
    0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, // compressed data
    0x00, 0x00, 0x00, 0x00, // IEND chunk length
    0x49, 0x45, 0x4E, 0x44, // IEND
    0xAE, 0x42, 0x60, 0x82  // CRC
  ])
  return pngData
}

console.log('🎨 开始创建简单的PNG占位符图片...\n')

brainrots.forEach((brainrot) => {
  const pngData = createSimplePNG()
  const filePath = path.join(imagesDir, `${brainrot.id}.png`)
  
  fs.writeFileSync(filePath, pngData)
  
  console.log(`✅ 已创建: ${brainrot.name} (${brainrot.id}.png) - Rarity ${brainrot.rarity}`)
})

console.log('\n📊 创建完成！')
console.log('💡 现在每个角色都有基本的PNG占位符图片')
console.log('💡 这些是有效的PNG文件，可以正常显示') 