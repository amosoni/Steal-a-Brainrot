// 图片获取工具函数

// 从Roblox游戏API获取图片
export const getRobloxImage = async (characterName: string) => {
  try {
    // 尝试从Roblox游戏API获取图片
    const gameId = '109983668079237' // Steal a Brainrot的游戏ID
    const response = await fetch(`https://thumbnails.roblox.com/v1/games/icons?gameIds=${gameId}&size=512x512&format=Png&isCircular=false`)
    
    if (response.ok) {
      const data = await response.json()
      return data.data[0]?.imageUrl || null
    }
  } catch (error) {
    console.error('Error fetching Roblox image:', error)
  }
  return null
}

// 从游戏内获取角色图片
export const getCharacterImage = async (characterId: string, characterName: string) => {
  try {
    // 方案1: 尝试从游戏内API获取
    const response = await fetch(`https://stealabrainrot.org/api/characters/${characterId}`)
    if (response.ok) {
      const data = await response.json()
      return data.imageUrl || null
    }
  } catch (error) {
    console.error('Error fetching character image:', error)
  }

  // 方案2: 使用占位符图片生成器
  return generatePlaceholderImage(characterName)
}

// 生成占位符图片
export const generatePlaceholderImage = (characterName: string) => {
  // 使用外部服务生成占位符图片
  const encodedName = encodeURIComponent(characterName)
  return `https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=${encodedName}`
}

// 使用AI生成图片（需要API密钥）
export const generateAIImage = async (characterName: string, rarity: number) => {
  try {
    // 这里可以集成OpenAI DALL-E或其他AI图片生成服务
    const prompt = `A pixelated character named ${characterName} in the style of Steal a Brainrot game, rarity level ${rarity}`
    
    // 示例API调用（需要配置API密钥）
    // const response = await fetch('https://api.openai.com/v1/images/generations', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     prompt,
    //     n: 1,
    //     size: '512x512'
    //   })
    // })
    
    // 暂时返回占位符
    return generatePlaceholderImage(characterName)
  } catch (error) {
    console.error('Error generating AI image:', error)
    return generatePlaceholderImage(characterName)
  }
}

// 获取角色图片URL - 改进版本
export const getBrainrotImageUrl = async (brainrot: { id: string, name: string, rarity: number }) => {
  // 优先级：本地图片 > 游戏API > AI生成 > 占位符
  let imageUrl = null
  
  // 首先尝试从本地图片映射获取
  const { getCharacterImageUrl } = await import('@/data/imageMapping')
  imageUrl = getCharacterImageUrl(brainrot.id, brainrot.rarity)
  
  // 验证本地图片是否存在
  if (imageUrl && imageUrl.startsWith('/')) {
    try {
      const response = await fetch(imageUrl)
      if (!response.ok) {
        imageUrl = null
      }
    } catch (error) {
      console.error('Error checking local image:', error)
      imageUrl = null
    }
  }
  
  if (!imageUrl) {
    // 尝试从游戏API获取
    imageUrl = await getCharacterImage(brainrot.id, brainrot.name)
  }
  
  if (!imageUrl) {
    // 尝试AI生成
    imageUrl = await generateAIImage(brainrot.name, brainrot.rarity)
  }
  
  // 最后的备用方案
  if (!imageUrl) {
    imageUrl = generatePlaceholderImage(brainrot.name)
  }
  
  return imageUrl
}

// 检查图片是否可用的工具函数
export const checkImageExists = async (imageUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(imageUrl, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    return false
  }
}

import { characterImages, getDefaultImageByRarity } from '../data/imageMapping'

// 获取角色图片URL，处理多语言路由问题
export const getCharacterImageUrl = (characterId: string, rarity?: number): string => {
  // 首先尝试从映射中获取
  const mappedImage = characterImages[characterId]
  if (mappedImage) {
    // 使用绝对路径避免多语言路由问题
    return mappedImage.startsWith('http') ? mappedImage : `http://localhost:3002${mappedImage}`
  }
  
  // 如果没有映射，使用默认图片
  const defaultImage = getDefaultImageByRarity(rarity || 1)
  return defaultImage.startsWith('http') ? defaultImage : `http://localhost:3002${defaultImage}`
}

// 获取备用图片URL
export const getFallbackImageUrl = (rarity: number): string => {
  const defaultImage = getDefaultImageByRarity(rarity)
  return defaultImage.startsWith('http') ? defaultImage : `http://localhost:3002${defaultImage}`
} 