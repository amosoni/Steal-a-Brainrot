const fs = require('fs')
const path = require('path')

// 生成更像游戏风格的图片
function generateGameStyleImages() {
  console.log('🎮 生成游戏风格的角色图片...\n')
  
  const characters = [
    { id: 'sigma-boy', name: 'Sigma Boy', rarity: 1, description: '年轻男性，西装革履，自信表情' },
    { id: 'alpha-male', name: 'Alpha Male', rarity: 1, description: '肌肉发达，领袖气质，站立姿势' },
    { id: 'chad', name: 'Chad', rarity: 1, description: '强壮男性，健身造型，自信微笑' },
    { id: 'gigachad', name: 'Gigachad', rarity: 2, description: '超级强壮，猩猩般肌肉，王者姿态' },
    { id: 'sigma-male', name: 'Sigma Male', rarity: 2, description: '神秘男性，墨镜，独立姿态' },
    { id: 'omega-male', name: 'Omega Male', rarity: 2, description: '终极男性，皇冠，统治姿态' },
    { id: 'ultra-chad', name: 'Ultra Chad', rarity: 3, description: '超强战士，火焰环绕，战斗姿态' },
    { id: 'mega-sigma', name: 'Mega Sigma', rarity: 3, description: '超级神秘，闪电环绕，能量姿态' },
    { id: 'super-alpha', name: 'Super Alpha', rarity: 3, description: '超级领袖，光环环绕，英雄姿态' },
    { id: 'legendary-chad', name: 'Legendary Chad', rarity: 4, description: '传奇战士，皇冠加冕，传奇姿态' },
    { id: 'mythic-sigma', name: 'Mythic Sigma', rarity: 4, description: '神话神秘，魔法环绕，神秘姿态' },
    { id: 'divine-alpha', name: 'Divine Alpha', rarity: 4, description: '神圣领袖，天使光环，神圣姿态' },
    { id: 'god-chad', name: 'God Chad', rarity: 5, description: '神级战士，神光环绕，神级姿态' },
    { id: 'celestial-sigma', name: 'Celestial Sigma', rarity: 5, description: '天界神秘，星空环绕，天界姿态' },
    { id: 'immortal-alpha', name: 'Immortal Alpha', rarity: 5, description: '不朽领袖，钻石护体，不朽姿态' },
    { id: 'ancient-chad', name: 'Ancient Chad', rarity: 6, description: '远古战士，古建筑背景，远古姿态' },
    { id: 'primordial-sigma', name: 'Primordial Sigma', rarity: 6, description: '原始神秘，火山背景，原始姿态' },
    { id: 'eternal-alpha', name: 'Eternal Alpha', rarity: 6, description: '永恒领袖，时钟背景，永恒姿态' },
    { id: 'supreme-chad', name: 'Supreme Chad', rarity: 7, description: '至高战士，宇宙背景，至高姿态' },
    { id: 'cosmic-sigma', name: 'Cosmic Sigma', rarity: 7, description: '宇宙神秘，星系背景，宇宙姿态' },
    { id: 'omnipotent-alpha', name: 'Omnipotent Alpha', rarity: 7, description: '全能领袖，能量场背景，全能姿态' }
  ]

  const rarityStyles = {
    1: { bg: '#6B7280', text: '#FFFFFF', accent: '#374151', name: 'Común', border: '#4B5563' },
    2: { bg: '#10B981', text: '#FFFFFF', accent: '#059669', name: 'Raro', border: '#047857' },
    3: { bg: '#3B82F6', text: '#FFFFFF', accent: '#2563EB', name: 'Épico', border: '#1D4ED8' },
    4: { bg: '#8B5CF6', text: '#FFFFFF', accent: '#7C3AED', name: 'Legendario', border: '#6D28D9' },
    5: { bg: '#F59E0B', text: '#FFFFFF', accent: '#D97706', name: 'Mítico', border: '#B45309' },
    6: { bg: '#EF4444', text: '#FFFFFF', accent: '#DC2626', name: 'Antiguo', border: '#B91C1C' },
    7: { bg: '#FCD34D', text: '#000000', accent: '#F59E0B', name: 'Divino', border: '#F59E0B' }
  }

  const imagesDir = path.join(__dirname, '../public/images/brainrots')
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }

  characters.forEach(character => {
    const style = rarityStyles[character.rarity]
    const svgContent = generateGameStyleSVG(character, style)
    const filePath = path.join(imagesDir, `${character.id}.svg`)
    
    fs.writeFileSync(filePath, svgContent)
    console.log(`✅ 生成: ${character.name} - ${style.name}`)
  })
}

function generateGameStyleSVG(character, style) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-${character.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${style.bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${style.accent};stop-opacity:1" />
    </linearGradient>
    <filter id="glow-${character.id}">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="shadow-${character.id}">
      <feDropShadow dx="2" dy="2" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>
  
  <!-- 背景 -->
  <rect width="300" height="200" fill="url(#bg-${character.id})" rx="20"/>
  
  <!-- 装饰性边框 -->
  <rect x="8" y="8" width="284" height="184" fill="none" stroke="${style.border}" stroke-width="3" rx="20" opacity="0.6"/>
  
  <!-- 角色图标区域 -->
  <circle cx="150" cy="85" r="45" fill="${style.text}" opacity="0.15"/>
  <circle cx="150" cy="85" r="40" fill="${style.text}" opacity="0.1"/>
  
  <!-- 角色图标 -->
  <g transform="translate(150, 85)">
    ${generateCharacterIcon(character, style)}
  </g>
  
  <!-- 角色名称 -->
  <text x="150" y="140" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
        text-anchor="middle" fill="${style.text}" filter="url(#shadow-${character.id})">${character.name}</text>
  
  <!-- 稀有度 -->
  <text x="150" y="160" font-family="Arial, sans-serif" font-size="12" 
        text-anchor="middle" fill="${style.text}">${style.name}</text>
  
  <!-- 稀有度图标 -->
  <text x="150" y="180" font-family="Arial, sans-serif" font-size="18" 
        text-anchor="middle" fill="${style.text}" filter="url(#glow-${character.id})">⭐</text>
  
  <!-- 装饰性元素 -->
  <circle cx="40" cy="40" r="6" fill="${style.text}" opacity="0.6"/>
  <circle cx="260" cy="40" r="6" fill="${style.text}" opacity="0.6"/>
  <circle cx="40" cy="160" r="6" fill="${style.text}" opacity="0.6"/>
  <circle cx="260" cy="160" r="6" fill="${style.text}" opacity="0.6"/>
</svg>`
}

function generateCharacterIcon(character, style) {
  // 根据角色类型生成不同的图标
  const iconMap = {
    'sigma-boy': `<circle cx="0" cy="0" r="15" fill="${style.text}" opacity="0.8"/>
                  <text x="0" y="5" font-family="Arial, sans-serif" font-size="20" 
                        text-anchor="middle" fill="${style.accent}">👔</text>`,
    'alpha-male': `<rect x="-12" y="-8" width="24" height="16" fill="${style.text}" opacity="0.8" rx="2"/>
                  <text x="0" y="5" font-family="Arial, sans-serif" font-size="16" 
                        text-anchor="middle" fill="${style.accent}">💪</text>`,
    'chad': `<circle cx="0" cy="0" r="18" fill="${style.text}" opacity="0.8"/>
             <text x="0" y="5" font-family="Arial, sans-serif" font-size="20" 
                   text-anchor="middle" fill="${style.accent}">🏋️</text>`,
    'gigachad': `<circle cx="0" cy="0" r="20" fill="${style.text}" opacity="0.8"/>
                 <text x="0" y="5" font-family="Arial, sans-serif" font-size="22" 
                       text-anchor="middle" fill="${style.accent}">🦍</text>`,
    'sigma-male': `<circle cx="0" cy="0" r="16" fill="${style.text}" opacity="0.8"/>
                   <text x="0" y="5" font-family="Arial, sans-serif" font-size="18" 
                         text-anchor="middle" fill="${style.accent}">🕶️</text>`,
    'omega-male': `<circle cx="0" cy="0" r="17" fill="${style.text}" opacity="0.8"/>
                   <text x="0" y="5" font-family="Arial, sans-serif" font-size="19" 
                         text-anchor="middle" fill="${style.accent}">👑</text>`,
    'ultra-chad': `<circle cx="0" cy="0" r="19" fill="${style.text}" opacity="0.8"/>
                   <text x="0" y="5" font-family="Arial, sans-serif" font-size="21" 
                         text-anchor="middle" fill="${style.accent}">🔥</text>`,
    'mega-sigma': `<circle cx="0" cy="0" r="18" fill="${style.text}" opacity="0.8"/>
                    <text x="0" y="5" font-family="Arial, sans-serif" font-size="20" 
                          text-anchor="middle" fill="${style.accent}">⚡</text>`,
    'super-alpha': `<circle cx="0" cy="0" r="18" fill="${style.text}" opacity="0.8"/>
                    <text x="0" y="5" font-family="Arial, sans-serif" font-size="20" 
                          text-anchor="middle" fill="${style.accent}">🦸</text>`,
    'legendary-chad': `<circle cx="0" cy="0" r="20" fill="${style.text}" opacity="0.8"/>
                       <text x="0" y="5" font-family="Arial, sans-serif" font-size="22" 
                             text-anchor="middle" fill="${style.accent}">👑</text>`,
    'mythic-sigma': `<circle cx="0" cy="0" r="19" fill="${style.text}" opacity="0.8"/>
                      <text x="0" y="5" font-family="Arial, sans-serif" font-size="21" 
                            text-anchor="middle" fill="${style.accent}">🔮</text>`,
    'divine-alpha': `<circle cx="0" cy="0" r="19" fill="${style.text}" opacity="0.8"/>
                     <text x="0" y="5" font-family="Arial, sans-serif" font-size="21" 
                           text-anchor="middle" fill="${style.accent}">✨</text>`,
    'god-chad': `<circle cx="0" cy="0" r="21" fill="${style.text}" opacity="0.8"/>
                 <text x="0" y="5" font-family="Arial, sans-serif" font-size="23" 
                       text-anchor="middle" fill="${style.accent}">👼</text>`,
    'celestial-sigma': `<circle cx="0" cy="0" r="20" fill="${style.text}" opacity="0.8"/>
                         <text x="0" y="5" font-family="Arial, sans-serif" font-size="22" 
                               text-anchor="middle" fill="${style.accent}">🌌</text>`,
    'immortal-alpha': `<circle cx="0" cy="0" r="20" fill="${style.text}" opacity="0.8"/>
                       <text x="0" y="5" font-family="Arial, sans-serif" font-size="22" 
                             text-anchor="middle" fill="${style.accent}">💎</text>`,
    'ancient-chad': `<circle cx="0" cy="0" r="20" fill="${style.text}" opacity="0.8"/>
                     <text x="0" y="5" font-family="Arial, sans-serif" font-size="22" 
                           text-anchor="middle" fill="${style.accent}">🏛️</text>`,
    'primordial-sigma': `<circle cx="0" cy="0" r="20" fill="${style.text}" opacity="0.8"/>
                         <text x="0" y="5" font-family="Arial, sans-serif" font-size="22" 
                               text-anchor="middle" fill="${style.accent}">🌋</text>`,
    'eternal-alpha': `<circle cx="0" cy="0" r="20" fill="${style.text}" opacity="0.8"/>
                      <text x="0" y="5" font-family="Arial, sans-serif" font-size="22" 
                            text-anchor="middle" fill="${style.accent}">⏰</text>`,
    'supreme-chad': `<circle cx="0" cy="0" r="22" fill="${style.text}" opacity="0.8"/>
                     <text x="0" y="5" font-family="Arial, sans-serif" font-size="24" 
                           text-anchor="middle" fill="${style.accent}">👑</text>`,
    'cosmic-sigma': `<circle cx="0" cy="0" r="21" fill="${style.text}" opacity="0.8"/>
                     <text x="0" y="5" font-family="Arial, sans-serif" font-size="23" 
                           text-anchor="middle" fill="${style.accent}">🌌</text>`,
    'omnipotent-alpha': `<circle cx="0" cy="0" r="22" fill="${style.text}" opacity="0.8"/>
                          <text x="0" y="5" font-family="Arial, sans-serif" font-size="24" 
                                text-anchor="middle" fill="${style.accent}">⚡</text>`
  }
  
  return iconMap[character.id] || `<circle cx="0" cy="0" r="15" fill="${style.text}" opacity="0.8"/>
                                    <text x="0" y="5" font-family="Arial, sans-serif" font-size="18" 
                                          text-anchor="middle" fill="${style.accent}">👤</text>`
}

// 运行脚本
generateGameStyleImages()

console.log('\n📊 完成！')
console.log('💡 现在每个角色都有更像游戏风格的图片')
console.log('💡 这些图片包含：')
console.log('   - 渐变背景和边框')
console.log('   - 发光效果和阴影')
console.log('   - 角色专属图标')
console.log('   - 稀有度标识') 