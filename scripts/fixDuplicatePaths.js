const fs = require('fs')
const path = require('path')

// 修复重复路径的函数
function fixDuplicatePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // 替换重复的 /images/brainrots/brainrots/ 为 /images/brainrots/
    const originalContent = content
    content = content.replace(/\/images\/brainrots\/brainrots\//g, '/images/brainrots/')
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ 已修复重复路径: ${filePath}`)
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

console.log('🔧 开始修复重复的图片路径...\n')

let fixedCount = 0
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath)
  if (fs.existsSync(fullPath)) {
    if (fixDuplicatePaths(fullPath)) {
      fixedCount++
    }
  } else {
    console.log(`⚠️  文件不存在: ${filePath}`)
  }
})

console.log(`\n📊 修复完成: ${fixedCount} 个文件已更新`)
console.log('\n💡 现在所有图片路径都已正确指向 /images/brainrots/ 目录') 