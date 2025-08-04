const fs = require('fs')
const path = require('path')

// 检查图片文件是否有效
function checkImageFile(filePath) {
  try {
    const buffer = fs.readFileSync(filePath)
    
    // 检查PNG文件头
    const pngHeader = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
    const isPNG = buffer.slice(0, 8).equals(pngHeader)
    
    console.log(`📁 ${path.basename(filePath)}:`)
    console.log(`   Size: ${buffer.length} bytes`)
    console.log(`   PNG Header: ${isPNG ? '✅ Valid' : '❌ Invalid'}`)
    
    // 检查文件内容是否包含可读文本
    const textContent = buffer.toString('utf8', 0, Math.min(100, buffer.length))
    const hasText = /[a-zA-Z]/.test(textContent)
    console.log(`   Contains Text: ${hasText ? '⚠️ Yes' : '✅ No'}`)
    
    if (hasText) {
      console.log(`   Text Preview: ${textContent.substring(0, 50)}...`)
    }
    
    return isPNG && !hasText
  } catch (error) {
    console.log(`❌ Error reading ${path.basename(filePath)}: ${error.message}`)
    return false
  }
}

// 主函数
function main() {
  const imagesDir = path.join(__dirname, '../public/images/brainrots')
  
  if (!fs.existsSync(imagesDir)) {
    console.log('❌ Images directory does not exist')
    return
  }
  
  const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.png'))
  
  console.log('🔍 Checking image files...\n')
  
  let validCount = 0
  let totalCount = 0
  
  files.forEach(file => {
    const filePath = path.join(imagesDir, file)
    const isValid = checkImageFile(filePath)
    if (isValid) validCount++
    totalCount++
    console.log('')
  })
  
  console.log(`📊 Summary:`)
  console.log(`   Total files: ${totalCount}`)
  console.log(`   Valid images: ${validCount}`)
  console.log(`   Invalid files: ${totalCount - validCount}`)
  
  if (validCount === 0) {
    console.log('\n💡 All files appear to be invalid. They might be HTML responses or error pages.')
    console.log('💡 This suggests the download script received error responses instead of actual images.')
  }
}

// 运行脚本
if (require.main === module) {
  main()
} 