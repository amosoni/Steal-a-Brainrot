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
  {
    id: "agarrini-la-palini",
    name: "Agarrini La Palini",
    rarity: 1,
    price: 50,
    profit: 5,
    image: "/images/Agarrini-La-Palini.webp",
    description: {
      en: "Common character with basic abilities",
      es: "Personaje común con habilidades básicas",
      zh: "普通角色，基础能力"
    }
  },
  {
    id: "avocadini-guffo",
    name: "Avocadini Guffo",
    rarity: 1,
    price: 75,
    profit: 8,
    image: "/images/Avocadini-Guffo.webp",
    description: {
      en: "Common character with basic abilities",
      es: "Personaje común con habilidades básicas",
      zh: "普通角色，基础能力"
    }
  },
  {
    id: "avocadorilla",
    name: "Avocadorilla",
    rarity: 1,
    price: 100,
    profit: 10,
    image: "/images/Avocadorilla.webp",
    description: {
      en: "Common character with basic abilities",
      es: "Personaje común con habilidades básicas",
      zh: "普通角色，基础能力"
    }
  },
  {
    id: "bandito-bobritto",
    name: "Bandito Bobritto",
    rarity: 1,
    price: 150,
    profit: 15,
    image: "/images/Bandito-Bobritto.webp",
    description: {
      en: "Common character with basic abilities",
      es: "Personaje común con habilidades básicas",
      zh: "普通角色，基础能力"
    }
  },
  {
    id: "bombardiro-crocodilo",
    name: "Bombardiro Crocodilo",
    rarity: 1,
    price: 200,
    profit: 20,
    image: "/images/Bombardiro-Crocodilo.webp",
    description: {
      en: "Common character with basic abilities",
      es: "Personaje común con habilidades básicas",
      zh: "普通角色，基础能力"
    }
  },
  {
    id: "brr-brr-patapim",
    name: "Brr Brr Patapim",
    rarity: 2,
    price: 300,
    profit: 30,
    image: "/images/Brr-Brr-Patapim.webp",
    description: {
      en: "Uncommon character with improved abilities",
      es: "Personaje poco común con habilidades mejoradas",
      zh: "不常见角色，能力提升"
    }
  },
  {
    id: "ballerina-cappuccina",
    name: "Ballerina Cappuccina",
    rarity: 2,
    price: 500,
    profit: 50,
    image: "/images/Ballerina-Cappuccina.webp",
    description: {
      en: "Uncommon character with improved abilities",
      es: "Personaje poco común con habilidades mejoradas",
      zh: "不常见角色，能力提升"
    }
  },
  {
    id: "tralalero-tralala",
    name: "Tralalero Tralala",
    rarity: 2,
    price: 800,
    profit: 80,
    image: "/images/Tralalero-Tralala.webp",
    description: {
      en: "Uncommon character with improved abilities",
      es: "Personaje poco común con habilidades mejoradas",
      zh: "不常见角色，能力提升"
    }
  },
  {
    id: "ti-ti-ti-shaur",
    name: "Ti Ti Ti Shaur",
    rarity: 3,
    price: 1000,
    profit: 100,
    image: "/images/Ti-ti-ti-shaur.webp",
    description: {
      en: "Rare character with special abilities",
      es: "Personaje raro con habilidades especiales",
      zh: "稀有角色，特殊能力"
    }
  },
  {
    id: "cappuccino-assassino",
    name: "Cappuccino Assassino",
    rarity: 3,
    price: 2000,
    profit: 200,
    image: "/images/Cappuccino-Assassino.webp",
    description: {
      en: "Rare character with special abilities",
      es: "Personaje raro con habilidades especiales",
      zh: "稀有角色，特殊能力"
    }
  },
  {
    id: "dragon-cannelloni",
    name: "Dragon Cannelloni",
    rarity: 3,
    price: 3000,
    profit: 300,
    image: "/images/Dragon-Cannelloni.webp",
    description: {
      en: "Rare character with special abilities",
      es: "Personaje raro con habilidades especiales",
      zh: "稀有角色，特殊能力"
    }
  },
  {
    id: "cocosini-mama",
    name: "Cocosini Mama",
    rarity: 4,
    price: 5000,
    profit: 500,
    image: "/images/Cocosini-Mama.webp",
    description: {
      en: "Epic character with powerful abilities",
      es: "Personaje épico con habilidades poderosas",
      zh: "史诗角色，强大能力"
    }
  },
  {
    id: "cavallo-virtuoso",
    name: "Cavallo Virtuoso",
    rarity: 4,
    price: 10000,
    profit: 1000,
    image: "/images/Cavallo-Virtuoso.webp",
    description: {
      en: "Epic character with powerful abilities",
      es: "Personaje épico con habilidades poderosas",
      zh: "史诗角色，强大能力"
    }
  },
  {
    id: "brainrot-god-lucky-block",
    name: "Brainrot God Lucky Block",
    rarity: 4,
    price: 15000,
    profit: 1500,
    image: "/images/Brainrot-god-Lucky-block.webp",
    description: {
      en: "Epic character with powerful abilities",
      es: "Personaje épico con habilidades poderosas",
      zh: "史诗角色，强大能力"
    }
  }
]


export const getBrainrotById = (id: string): Brainrot | undefined => {
  return brainrots.find(brainrot => brainrot.id === id)
}
