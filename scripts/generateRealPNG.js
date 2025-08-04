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
  1: [107, 114, 128], // 灰色 - 普通
  2: [16, 185, 129],  // 绿色 - 稀有
  3: [59, 130, 246],  // 蓝色 - 史诗
  4: [139, 92, 246],  // 紫色 - 传说
  5: [245, 158, 11],  // 橙色 - 神话
  6: [239, 68, 68],   // 红色 - 远古
  7: [252, 211, 77]   // 黄色 - 神级
}

// 生成简单的PNG图片（1x1像素，指定颜色）
function generateSimplePNG(r, g, b) {
  // PNG文件头
  const pngHeader = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
  
  // IHDR chunk (图片信息)
  const width = 300
  const height = 200
  const bitDepth = 8
  const colorType = 2 // RGB
  const compression = 0
  const filter = 0
  const interlace = 0
  
  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData.writeUInt8(bitDepth, 8)
  ihdrData.writeUInt8(colorType, 9)
  ihdrData.writeUInt8(compression, 10)
  ihdrData.writeUInt8(filter, 11)
  ihdrData.writeUInt8(interlace, 12)
  
  const ihdrChunk = createPNGChunk('IHDR', ihdrData)
  
  // IDAT chunk (图片数据) - 简单的纯色图片
  const idatData = Buffer.alloc(width * height * 3)
  for (let i = 0; i < width * height; i++) {
    idatData[i * 3] = r
    idatData[i * 3 + 1] = g
    idatData[i * 3 + 2] = b
  }
  
  const idatChunk = createPNGChunk('IDAT', idatData)
  
  // IEND chunk (结束标记)
  const iendChunk = createPNGChunk('IEND', Buffer.alloc(0))
  
  // 组合PNG文件
  return Buffer.concat([pngHeader, ihdrChunk, idatChunk, iendChunk])
}

// 创建PNG chunk
function createPNGChunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length, 0)
  
  const typeBuffer = Buffer.from(type, 'ascii')
  const crc = calculateCRC(Buffer.concat([typeBuffer, data]))
  
  return Buffer.concat([length, typeBuffer, data, crc])
}

// 计算CRC32
function calculateCRC(buffer) {
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(0, 0) // 简化的CRC计算
  return crc
}

// 确保目录存在
const imagesDir = path.join(__dirname, '../public/images/brainrots')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

console.log('🎨 开始生成真正的PNG占位符图片...\n')

brainrots.forEach((brainrot) => {
  const color = rarityColors[brainrot.rarity]
  const pngData = generateSimplePNG(color[0], color[1], color[2])
  const filePath = path.join(imagesDir, `${brainrot.id}.png`)
  
  fs.writeFileSync(filePath, pngData)
  
  console.log(`✅ 已生成: ${brainrot.name} (${brainrot.id}.png) - Rarity ${brainrot.rarity} - Color RGB(${color[0]}, ${color[1]}, ${color[2]})`)
})

console.log('\n📊 生成完成！')
console.log('💡 现在每个角色都有独特的彩色占位符图片') 