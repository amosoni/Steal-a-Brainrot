// 角色图片映射
export const characterImages: Record<string, string> = {
  // 普通角色 (Rarity 1)
  'sigma-boy': '/images/brainrots/sigma-boy-optimized.svg',
  'alpha-male': '/images/brainrots/alpha-male-optimized.svg',
  'chad': '/images/brainrots/chad-optimized.svg',
  
  // 稀有角色 (Rarity 2)
  'gigachad': '/images/brainrots/gigachad-optimized.svg',
  'sigma-male': '/images/brainrots/sigma-male-optimized.svg',
  'omega-male': '/images/brainrots/omega-male-optimized.svg',
  
  // 史诗角色 (Rarity 3)
  'ultra-chad': '/images/brainrots/ultra-chad-optimized.svg',
  'mega-sigma': '/images/brainrots/mega-sigma-optimized.svg',
  'super-alpha': '/images/brainrots/super-alpha-optimized.svg',
  
  // 传说角色 (Rarity 4)
  'legendary-chad': '/images/brainrots/legendary-chad-optimized.svg',
  'mythic-sigma': '/images/brainrots/mythic-sigma-optimized.svg',
  'divine-alpha': '/images/brainrots/divine-alpha-optimized.svg',
  
  // 神话角色 (Rarity 5)
  'god-chad': '/images/brainrots/god-chad-optimized.svg',
  'celestial-sigma': '/images/brainrots/celestial-sigma-optimized.svg',
  'immortal-alpha': '/images/brainrots/immortal-alpha-optimized.svg',
  
  // 远古角色 (Rarity 6)
  'ancient-chad': '/images/brainrots/ancient-chad-optimized.svg',
  'primordial-sigma': '/images/brainrots/primordial-sigma-optimized.svg',
  'eternal-alpha': '/images/brainrots/eternal-alpha-optimized.svg',
  
  // 神级角色 (Rarity 7)
  'supreme-chad': '/images/brainrots/supreme-chad-optimized.svg',
  'cosmic-sigma': '/images/brainrots/cosmic-sigma-optimized.svg',
  'omnipotent-alpha': '/images/brainrots/omnipotent-alpha-optimized.svg',
}

// 根据稀有度获取默认图片 - 使用现有图片作为默认
export const getDefaultImageByRarity = (rarity: number): string => {
  const rarityImages = {
    1: '/images/brainrots/chad-optimized.svg', // 使用chad作为普通默认
    2: '/images/brainrots/gigachad-optimized.svg', // 使用gigachad作为稀有默认
    3: '/images/brainrots/ultra-chad-optimized.svg', // 使用ultra-chad作为史诗默认
    4: '/images/brainrots/legendary-chad-optimized.svg', // 使用legendary-chad作为传说默认
    5: '/images/brainrots/celestial-sigma-optimized.svg', // 使用celestial-sigma作为神话默认
    6: '/images/brainrots/ancient-chad-optimized.svg', // 使用ancient-chad作为远古默认
    7: '/images/brainrots/cosmic-sigma-optimized.svg', // 使用cosmic-sigma作为神级默认
  }
  return rarityImages[rarity as keyof typeof rarityImages] || '/images/brainrots/chad-optimized.svg'
}

// 获取角色图片URL
export const getCharacterImageUrl = (characterId: string, rarity: number): string => {
  // 首先尝试获取特定角色的图片
  const specificImage = characterImages[characterId]
  if (specificImage) {
    return specificImage
  }
  
  // 如果没有特定图片，返回基于稀有度的默认图片
  return getDefaultImageByRarity(rarity)
} 