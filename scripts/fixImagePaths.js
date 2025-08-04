const fs = require('fs')
const path = require('path')

// 修复图片路径的函数
function fixImagePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // 替换所有 /images/ 为 /images/brainrots/
    const originalContent = content
    content = content.replace(/image: '\/images\//g, "image: '/images/brainrots/")
    content = content.replace(/image: "\/images\//g, 'image: "/images/brainrots/')
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ 已修复: ${filePath}`)
      return true
    } else {
      console.log(`⏭️  无需修复: ${filePath}`)
      return false
    }
  } catch (error) {
    console.error(`❌ 修复失败: ${filePath}`, error.message)
    return false
  }
}

// 要修复的文件列表
const filesToFix = [
  'data/brainrots.ts',
  'steal-brainrot-es/data/brainrots.ts'
]

console.log('🔧 开始修复图片路径...\n')

let fixedCount = 0
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath)
  if (fs.existsSync(fullPath)) {
    if (fixImagePaths(fullPath)) {
      fixedCount++
    }
  } else {
    console.log(`⚠️  文件不存在: ${filePath}`)
  }
})

console.log(`\n📊 修复完成: ${fixedCount} 个文件已更新`)
console.log('\n💡 现在所有角色的图片路径都已指向 /images/brainrots/ 目录') 