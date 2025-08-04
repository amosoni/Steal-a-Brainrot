const fs = require('fs')
const path = require('path')

// 检查图片文件是否存在
function checkImageExists(imagePath) {
  const fullPath = path.join(__dirname, '..', 'public', imagePath)
  return fs.existsSync(fullPath)
}

// 角色列表和对应的图片路径
const brainrotImages = [
  { id: 'sigma-boy', path: '/images/brainrots/sigma-boy.png' },
  { id: 'alpha-male', path: '/images/brainrots/alpha-male.png' },
  { id: 'chad', path: '/images/brainrots/chad.png' },
  { id: 'gigachad', path: '/images/brainrots/gigachad.png' },
  { id: 'sigma-male', path: '/images/brainrots/sigma-male.png' },
  { id: 'omega-male', path: '/images/brainrots/omega-male.png' },
  { id: 'ultra-chad', path: '/images/brainrots/ultra-chad.png' },
  { id: 'mega-sigma', path: '/images/brainrots/mega-sigma.png' },
  { id: 'super-alpha', path: '/images/brainrots/super-alpha.png' },
  { id: 'legendary-chad', path: '/images/brainrots/legendary-chad.png' },
  { id: 'mythic-sigma', path: '/images/brainrots/mythic-sigma.png' },
  { id: 'divine-alpha', path: '/images/brainrots/divine-alpha.png' },
  { id: 'god-chad', path: '/images/brainrots/god-chad.png' },
  { id: 'celestial-sigma', path: '/images/brainrots/celestial-sigma.png' },
  { id: 'immortal-alpha', path: '/images/brainrots/immortal-alpha.png' },
  { id: 'ancient-chad', path: '/images/brainrots/ancient-chad.png' },
  { id: 'primordial-sigma', path: '/images/brainrots/primordial-sigma.png' },
  { id: 'eternal-alpha', path: '/images/brainrots/eternal-alpha.png' },
  { id: 'supreme-chad', path: '/images/brainrots/supreme-chad.png' },
  { id: 'cosmic-sigma', path: '/images/brainrots/cosmic-sigma.png' },
  { id: 'omnipotent-alpha', path: '/images/brainrots/omnipotent-alpha.png' }
]

console.log('🔍 检查Brainrot图片文件...\n')

const existingImages = []
const missingImages = []

brainrotImages.forEach(({ id, path }) => {
  if (checkImageExists(path)) {
    existingImages.push({ id, path })
    console.log(`✅ ${id}: ${path}`)
  } else {
    missingImages.push({ id, path })
    console.log(`❌ ${id}: ${path} (缺失)`)
  }
})

console.log('\n📊 统计结果:')
console.log(`✅ 存在的图片: ${existingImages.length}`)
console.log(`❌ 缺失的图片: ${missingImages.length}`)
console.log(`📈 完整度: ${((existingImages.length / brainrotImages.length) * 100).toFixed(1)}%`)

if (missingImages.length > 0) {
  console.log('\n❌ 缺失的图片文件:')
  missingImages.forEach(({ id, path }) => {
    console.log(`  - ${id}: ${path}`)
  })
  
  console.log('\n💡 建议:')
  console.log('1. 检查 public/images/brainrots/ 目录是否存在')
  console.log('2. 确保所有图片文件都已正确放置')
  console.log('3. 检查文件名是否与映射表中的路径匹配')
  console.log('4. 如果图片缺失，可以使用占位符图片或从游戏内获取')
} else {
  console.log('\n🎉 所有图片文件都存在！')
}

// 检查默认图片
console.log('\n🔍 检查默认图片文件...')
const defaultImages = [
  '/images/brainrots/default-common.png',
  '/images/brainrots/default-rare.png',
  '/images/brainrots/default-epic.png',
  '/images/brainrots/default-legendary.png',
  '/images/brainrots/default-mythic.png',
  '/images/brainrots/default-ancient.png',
  '/images/brainrots/default-divine.png'
]

const missingDefaults = []
defaultImages.forEach(path => {
  if (!checkImageExists(path)) {
    missingDefaults.push(path)
    console.log(`❌ 默认图片缺失: ${path}`)
  }
})

if (missingDefaults.length > 0) {
  console.log('\n💡 默认图片建议:')
  console.log('由于默认图片缺失，系统将使用现有图片作为备用')
  console.log('这已经在 imageMapping.ts 中配置好了')
} 