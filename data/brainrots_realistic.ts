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
  // 普通角色 (1-2级) - 价格: 50-500 Robux, 收益: 5-50/h
  {
    id: 'agarrini-la-palini',
    name: 'Agarrini La Palini',
    rarity: 1,
    price: 100,
    profit: 10,
    image: '/images/Agarrini-La-Palini.webp',
    description: {
      en: 'Common character with basic abilities',
      es: 'Personaje común con habilidades básicas',
      zh: '普通角色，基础能力'
    }
  },
  {
    id: 'avocadini-guffo',
    name: 'Avocadini Guffo',
    rarity: 1,
    price: 150,
    profit: 15,
    image: '/images/Avocadini-Guffo.webp',
    description: {
      en: 'Common character with basic abilities',
      es: 'Personaje común con habilidades básicas',
      zh: '普通角色，基础能力'
    }
  },
  {
    id: 'avocadorilla',
    name: 'Avocadorilla',
    rarity: 1,
    price: 200,
    profit: 20,
    image: '/images/Avocadorilla.webp',
    description: {
      en: 'Common character with basic abilities',
      es: 'Personaje común con habilidades básicas',
      zh: '普通角色，基础能力'
    }
  },
  {
    id: 'bobrito-bandito',
    name: 'Bobrito Bandito',
    rarity: 2,
    price: 300,
    profit: 30,
    image: '/images/Bobrito-Bandito.webp',
    description: {
      en: 'Uncommon character with improved abilities',
      es: 'Personaje poco común con habilidades mejoradas',
      zh: '不常见角色，能力提升'
    }
  },
  {
    id: 'bombardilo-coccodilo',
    name: 'Bombardilo Coccodilo',
    rarity: 2,
    price: 400,
    profit: 40,
    image: '/images/Bombardilo-Coccodilo.webp',
    description: {
      en: 'Uncommon character with improved abilities',
      es: 'Personaje poco común con habilidades mejoradas',
      zh: '不常见角色，能力提升'
    }
  },
  {
    id: 'brr-brr-patapin',
    name: 'Brr Brr Patapin',
    rarity: 2,
    price: 500,
    profit: 50,
    image: '/images/Brr-Brr-Patapin.webp',
    description: {
      en: 'Uncommon character with improved abilities',
      es: 'Personaje poco común con habilidades mejoradas',
      zh: '不常见角色，能力提升'
    }
  },
  // 稀有角色 (3级) - 价格: 800-2000 Robux, 收益: 80-200/h
  {
    id: 'ballerina-cappuccina',
    name: 'Ballerina Cappuccina',
    rarity: 3,
    price: 800,
    profit: 80,
    image: '/images/Ballerina-Cappuccina.webp',
    description: {
      en: 'Rare character with special abilities',
      es: 'Personaje raro con habilidades especiales',
      zh: '稀有角色，特殊能力'
    }
  },
  {
    id: 'tung-tung-sahur',
    name: 'Tung Tung Sahur',
    rarity: 3,
    price: 1200,
    profit: 120,
    image: '/images/Tung-Tung-Sahur.webp',
    description: {
      en: 'Rare character with special abilities',
      es: 'Personaje raro con habilidades especiales',
      zh: '稀有角色，特殊能力'
    }
  },
  {
    id: 'tralalero-tralala',
    name: 'Tralalero Tralala',
    rarity: 3,
    price: 1500,
    profit: 150,
    image: '/images/Tralalero-Tralala.webp',
    description: {
      en: 'Rare character with special abilities',
      es: 'Personaje raro con habilidades especiales',
      zh: '稀有角色，特殊能力'
    }
  },
  {
    id: 'patapin-patapin',
    name: 'Patapin Patapin',
    rarity: 3,
    price: 2000,
    profit: 200,
    image: '/images/Patapin-Patapin.webp',
    description: {
      en: 'Rare character with special abilities',
      es: 'Personaje raro con habilidades especiales',
      zh: '稀有角色，特殊能力'
    }
  },
  // 史诗角色 (4级) - 价格: 3000-8000 Robux, 收益: 300-800/h
  {
    id: 'super-brainrot',
    name: 'Super Brainrot',
    rarity: 4,
    price: 3000,
    profit: 300,
    image: '/images/Super-Brainrot.webp',
    description: {
      en: 'Epic character with powerful abilities',
      es: 'Personaje épico con habilidades poderosas',
      zh: '史诗角色，强大能力'
    }
  },
  {
    id: 'mega-brainrot',
    name: 'Mega Brainrot',
    rarity: 4,
    price: 5000,
    profit: 500,
    image: '/images/Mega-Brainrot.webp',
    description: {
      en: 'Epic character with powerful abilities',
      es: 'Personaje épico con habilidades poderosas',
      zh: '史诗角色，强大能力'
    }
  },
  {
    id: 'ultimate-brainrot',
    name: 'Ultimate Brainrot',
    rarity: 4,
    price: 8000,
    profit: 800,
    image: '/images/Ultimate-Brainrot.webp',
    description: {
      en: 'Epic character with powerful abilities',
      es: 'Personaje épico con habilidades poderosas',
      zh: '史诗角色，强大能力'
    }
  }
]