export interface Brainrot {
  id: string
  name: string
  rarity: number
  price: number
  profit: number
  image: string
  description: {
    en: string
    es: string
    zh: string
  }
}

export const brainrots: Brainrot[] = [
  // Personajes Comunes (Rarity 1)
  {
    id: 'sigma-boy',
    name: 'Sigma Boy',
    rarity: 1,
    price: 1000,
    profit: 50,
    image: '/images/brainrots/sigma-boy-optimized.svg',
    description: {
      en: 'Basic Sigma Boy, perfect for beginners',
      es: 'Personaje Sigma básico, perfecto para jugadores principiantes',
      zh: '基础Sigma Boy，适合初学者'
    }
  },
  {
    id: 'alpha-male',
    name: 'Alpha Male',
    rarity: 1,
    price: 1500,
    profit: 75,
    image: '/images/brainrots/alpha-male-optimized.svg',
    description: {
      en: 'Classic Alpha male character',
      es: 'Clásico personaje Alpha masculino',
      zh: '经典Alpha男性角色'
    }
  },
  {
    id: 'chad',
    name: 'Chad',
    rarity: 1,
    price: 2000,
    profit: 100,
    image: '/images/brainrots/chad-optimized.svg',
    description: {
      en: 'Strong and muscular Chad character',
      es: 'Personaje Chad fuerte y musculoso',
      zh: '强壮和肌肉发达的Chad角色'
    }
  },

  // Personajes Raros (Rarity 2)
  {
    id: 'gigachad',
    name: 'Gigachad',
    rarity: 2,
    price: 5000,
    profit: 250,
    image: '/images/brainrots/gigachad-optimized.svg',
    description: {
      en: 'Enhanced version of Chad with more powerful attributes',
      es: 'Versión mejorada de Chad con atributos más poderosos',
      zh: '增强版Chad，属性更强大'
    }
  },
  {
    id: 'sigma-male',
    name: 'Sigma Male',
    rarity: 2,
    price: 7500,
    profit: 375,
    image: '/images/brainrots/sigma-male-optimized.svg',
    description: {
      en: 'Mysterious Sigma male, independent and powerful',
      es: 'Misterioso Sigma masculino, independiente y poderoso',
      zh: '神秘Sigma男性，独立且强大'
    }
  },
  {
    id: 'omega-male',
    name: 'Omega Male',
    rarity: 2,
    price: 10000,
    profit: 500,
    image: '/images/brainrots/omega-male-optimized.svg',
    description: {
      en: 'Final masculine character with immense power',
      es: 'Personaje masculino definitivo con poder inmenso',
      zh: '最终男性角色，拥有巨大力量'
    }
  },

  // Personajes Épicos (Rarity 3)
  {
    id: 'ultra-chad',
    name: 'Ultra Chad',
    rarity: 3,
    price: 25000,
    profit: 1250,
    image: '/images/brainrots/ultra-chad-optimized.svg',
    description: {
      en: 'Ultra powerful version of Chad, almost invincible',
      es: 'Versión ultra poderosa de Chad, casi invencible',
      zh: '超强Chad版本，几乎无敌'
    }
  },
  {
    id: 'mega-sigma',
    name: 'Mega Sigma',
    rarity: 3,
    price: 35000,
    profit: 1750,
    image: '/images/brainrots/mega-sigma-optimized.svg',
    description: {
      en: 'Super Sigma with mystical powers',
      es: 'Super Sigma con poderes místicos',
      zh: '超级Sigma，拥有神秘力量'
    }
  },
  {
    id: 'super-alpha',
    name: 'Super Alpha',
    rarity: 3,
    price: 45000,
    profit: 2250,
    image: '/images/brainrots/super-alpha-optimized.svg',
    description: {
      en: 'Super Alpha with exceptional leadership',
      es: 'Super Alpha con liderazgo excepcional',
      zh: '超级Alpha，拥有卓越领导力'
    }
  },

  // Personajes Legendarios (Rarity 4)
  {
    id: 'legendary-chad',
    name: 'Legendary Chad',
    rarity: 4,
    price: 100000,
    profit: 5000,
    image: '/images/brainrots/legendary-chad-optimized.svg',
    description: {
      en: 'Legendary Chad with mythical power',
      es: 'Chad legendario con poder mítico',
      zh: '传奇Chad，拥有神话力量'
    }
  },
  {
    id: 'mythic-sigma',
    name: 'Mythic Sigma',
    rarity: 4,
    price: 150000,
    profit: 7500,
    image: '/images/brainrots/mythic-sigma-optimized.svg',
    description: {
      en: 'Mythic Sigma that controls the power of destiny',
      es: 'Sigma mítico que controla el poder del destino',
      zh: '神话Sigma，掌控命运之力'
    }
  },
  {
    id: 'divine-alpha',
    name: 'Divine Alpha',
    rarity: 4,
    price: 200000,
    profit: 10000,
    image: '/images/brainrots/divine-alpha-optimized.svg',
    description: {
      en: 'Divine Alpha with divine leadership',
      es: 'Alpha divino con liderazgo de nivel divino',
      zh: '神圣Alpha，拥有神圣领导力'
    }
  },

  // Personajes Míticos (Rarity 5)
  {
    id: 'god-chad',
    name: 'God Chad',
    rarity: 5,
    price: 500000,
    profit: 25000,
    image: '/images/brainrots/god-chad-optimized.svg',
    description: {
      en: 'Divine Chad, existence transcending mortality',
      es: 'Chad divino, existencia que trasciende lo mortal',
      zh: '神圣Chad，超越生死的存在'
    }
  },
  {
    id: 'celestial-sigma',
    name: 'Celestial Sigma',
    rarity: 5,
    price: 750000,
    profit: 37500,
    image: '/images/brainrots/celestial-sigma-optimized.svg',
    description: {
      en: 'Celestial Sigma that controls multiple universes',
      es: 'Sigma celestial que controla las leyes del universo',
      zh: '神圣Sigma，掌控多个宇宙'
    }
  },
  {
    id: 'immortal-alpha',
    name: 'Immortal Alpha',
    rarity: 5,
    price: 1000000,
    profit: 50000,
    image: '/images/brainrots/immortal-alpha-optimized.svg',
    description: {
      en: 'Immortal Alpha, eternal leader and indestructible',
      es: 'Alpha inmortal, líder eterno e indestructible',
      zh: '不朽Alpha，永恒领导者且不可摧毁'
    }
  },

  // Personajes Ancestrales (Rarity 6)
  {
    id: 'ancient-chad',
    name: 'Ancient Chad',
    rarity: 6,
    price: 2500000,
    profit: 125000,
    image: '/images/brainrots/ancient-chad-optimized.svg',
    description: {
      en: 'Ancient Chad, existence from the beginning of time',
      es: 'Chad ancestral, existencia desde el inicio del tiempo',
      zh: '远古Chad，从宇宙起源开始的存在'
    }
  },
  {
    id: 'primordial-sigma',
    name: 'Primordial Sigma',
    rarity: 6,
    price: 3500000,
    profit: 175000,
    image: '/images/brainrots/primordial-sigma-optimized.svg',
    description: {
      en: 'Primordial Sigma, existence from the birth of the universe',
      es: 'Sigma primordial, existencia desde el nacimiento del universo',
      zh: '原始Sigma，从宇宙诞生开始的存在'
    }
  },
  {
    id: 'eternal-alpha',
    name: 'Eternal Alpha',
    rarity: 6,
    price: 5000000,
    profit: 250000,
    image: '/images/brainrots/eternal-alpha-optimized.svg',
    description: {
      en: 'Eternal Alpha, leader beyond time',
      es: 'Alpha eterno, líder más allá del tiempo',
      zh: '永恒Alpha，超越时间的领导者'
    }
  },

  // Personajes Divinos (Rarity 7)
  {
    id: 'supreme-chad',
    name: 'Supreme Chad',
    rarity: 7,
    price: 10000000,
    profit: 500000,
    image: '/images/brainrots/supreme-chad-optimized.svg',
    description: {
      en: 'Supreme Chad, existence transcending everything',
      es: 'Chad supremo, existencia que trasciende todo',
      zh: '至高Chad，超越一切的存在'
    }
  },
  {
    id: 'cosmic-sigma',
    name: 'Cosmic Sigma',
    rarity: 7,
    price: 15000000,
    profit: 750000,
    image: '/images/brainrots/cosmic-sigma-optimized.svg',
    description: {
      en: 'Cosmic Sigma that controls multiple universes',
      es: 'Sigma cósmico que controla múltiples universos',
      zh: '宇宙Sigma，掌控多个宇宙'
    }
  },
  {
    id: 'omnipotent-alpha',
    name: 'Omnipotent Alpha',
    rarity: 7,
    price: 25000000,
    profit: 1250000,
    image: '/images/brainrots/omnipotent-alpha-optimized.svg',
    description: {
      en: 'Omnipotent Alpha, definitive leader capable of everything',
      es: 'Alpha omnipotente, líder definitivo capaz de todo',
      zh: '全能Alpha，终极领导者，无所不能'
    }
  }
]

export const getBrainrotsByRarity = (rarity: number) => {
  return brainrots.filter(brainrot => brainrot.rarity === rarity)
}

export const getBrainrotById = (id: string) => {
  return brainrots.find(brainrot => brainrot.id === id)
}

export const getRarityText = (rarity: number) => {
  switch (rarity) {
    case 1: return 'Común'
    case 2: return 'Raro'
    case 3: return 'Épico'
    case 4: return 'Legendario'
    case 5: return 'Mítico'
    case 6: return 'Antiguo'
    case 7: return 'Divino'
    default: return 'Desconocido'
  }
} 