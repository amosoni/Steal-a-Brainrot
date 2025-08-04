const fs = require('fs')
const path = require('path')
const https = require('https')

// 角色列表
const brainrots = [
  { id: 'sigma-boy', name: 'Sigma Boy' },
  { id: 'alpha-male', name: 'Alpha Male' },
  { id: 'chad', name: 'Chad' },
  { id: 'gigachad', name: 'Gigachad' },
  { id: 'sigma-male', name: 'Sigma Male' },
  { id: 'omega-male', name: 'Omega Male' },
  { id: 'ultra-chad', name: 'Ultra Chad' },
  { id: 'mega-sigma', name: 'Mega Sigma' },
  { id: 'super-alpha', name: 'Super Alpha' },
  { id: 'legendary-chad', name: 'Legendary Chad' },
  { id: 'mythic-sigma', name: 'Mythic Sigma' },
  { id: 'divine-alpha', name: 'Divine Alpha' },
  { id: 'god-chad', name: 'God Chad' },
  { id: 'celestial-sigma', name: 'Celestial Sigma' },
  { id: 'immortal-alpha', name: 'Immortal Alpha' },
  { id: 'ancient-chad', name: 'Ancient Chad' },
  { id: 'primordial-sigma', name: 'Primordial Sigma' },
  { id: 'eternal-alpha', name: 'Eternal Alpha' },
  { id: 'supreme-chad', name: 'Supreme Chad' },
  { id: 'cosmic-sigma', name: 'Cosmic Sigma' },
  { id: 'omnipotent-alpha', name: 'Omnipotent Alpha' }
]

// 确保目录存在
const imagesDir = path.join(__dirname, '../public/images/brainrots')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

// 下载图片函数
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename)
    
    // 强制重新下载，删除现有文件
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath)
      console.log(`🗑️ Deleted existing ${filename}`)
    }

    const file = fs.createWriteStream(filepath)
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          const stats = fs.statSync(filepath)
          console.log(`✅ Downloaded ${filename} (${stats.size} bytes)`)
          resolve()
        })
      } else {
        console.log(`❌ Failed to download ${filename}: ${response.statusCode}`)
        resolve() // 继续下一个
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${filename}: ${err.message}`)
      resolve() // 继续下一个
    })
  })
}

// 尝试不同的图片源
async function tryDownloadImage(brainrot) {
  const sources = [
    // 方案1: 使用DiceBear生成像素风格头像（游戏风格）
    `https://api.dicebear.com/7.x/pixel-art/png?seed=${brainrot.id}&backgroundColor=4F46E5&size=512&radius=50`,
    
    // 方案2: 使用Boring Avatars生成彩色几何头像
    `https://source.boringavatars.com/beam/512/${brainrot.id}?colors=4F46E5,7C3AED,EC4899,F59E0B&square=true`,
    
    // 方案3: 使用RoboHash生成机器人风格头像
    `https://robohash.org/${brainrot.id}?set=set4&size=512x512&bgset=bg1`,
    
    // 方案4: 使用UI Faces生成简单头像
    `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=512&h=512&fit=crop&crop=face`,
    
    // 方案5: 占位符图片（最后备选）
    `https://via.placeholder.com/512x512/4F46E5/FFFFFF?text=${encodeURIComponent(brainrot.name)}`,
  ]

  for (let i = 0; i < sources.length; i++) {
    try {
      await downloadImage(sources[i], `${brainrot.id}.png`)
      // 检查文件大小，如果太小说明是占位符，继续尝试下一个源
      const filepath = path.join(imagesDir, `${brainrot.id}.png`)
      if (fs.existsSync(filepath)) {
        const stats = fs.statSync(filepath)
        if (stats.size > 10000) { // 大于10KB认为是真实图片
          console.log(`✅ Successfully downloaded real image for ${brainrot.id}`)
          break
        } else {
          console.log(`⚠️ Small file size for ${brainrot.id}, trying next source...`)
        }
      }
    } catch (error) {
      console.log(`Source ${i + 1} failed for ${brainrot.id}`)
    }
  }
}

// 主函数
async function main() {
  console.log('🚀 Starting image download with game-style sources...')
  
  for (const brainrot of brainrots) {
    await tryDownloadImage(brainrot)
    // 添加延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  
  console.log('✅ Image download completed!')
}

// 运行脚本
if (require.main === module) {
  main().catch(console.error)
}

module.exports = { downloadImage, tryDownloadImage } 