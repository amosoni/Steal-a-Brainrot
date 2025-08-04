const fs = require('fs')
const path = require('path')

// 更新brainrots.ts文件中的图片路径
function updateImagePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // 将.png替换为.svg
    const updatedContent = content.replace(/\.png/g, '.svg')
    
    fs.writeFileSync(filePath, updatedContent)
    
    console.log(`✅ 已更新: ${path.basename(filePath)}`)
    return true
  } catch (error) {
    console.log(`❌ 更新失败: ${path.basename(filePath)} - ${error.message}`)
    return false
  }
}

// 主函数
function main() {
  const files = [
    path.join(__dirname, '../data/brainrots.ts'),
    path.join(__dirname, '../steal-brainrot-es/data/brainrots.ts')
  ]
  
  console.log('🔄 开始更新图片路径从PNG到SVG...\n')
  
  let successCount = 0
  files.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (updateImagePaths(filePath)) {
        successCount++
      }
    } else {
      console.log(`⚠️ 文件不存在: ${path.basename(filePath)}`)
    }
  })
  
  console.log(`\n📊 更新完成！成功更新 ${successCount} 个文件`)
  console.log('💡 现在所有图片路径都指向SVG文件')
}

// 运行脚本
if (require.main === module) {
  main()
} 