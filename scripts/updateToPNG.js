const fs = require('fs')
const path = require('path')

// 更新图片路径为PNG的函数
function updateToPNG(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // 替换所有 .svg 为 .png
    const originalContent = content
    content = content.replace(/\.svg'/g, ".png'")
    content = content.replace(/\.svg"/g, '.png"')
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ 已更新: ${filePath}`)
      return true
    } else {
      console.log(`⏭️  无需更新: ${filePath}`)
      return false
    }
  } catch (error) {
    console.error(`❌ 更新失败: ${filePath}`, error.message)
    return false
  }
}

// 要更新的文件列表
const filesToUpdate = [
  'data/brainrots.ts',
  'steal-brainrot-es/data/brainrots.ts'
]

console.log('🔄 开始更新图片路径为PNG...\n')

let updatedCount = 0
filesToUpdate.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath)
  if (fs.existsSync(fullPath)) {
    if (updateToPNG(fullPath)) {
      updatedCount++
    }
  } else {
    console.log(`⚠️  文件不存在: ${filePath}`)
  }
})

console.log(`\n📊 更新完成: ${updatedCount} 个文件已更新`)
console.log('\n�� 现在所有图片路径都指向PNG文件') 