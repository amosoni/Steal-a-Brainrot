const fs = require('fs');
const path = require('path');

// Simple icon templates for different character types
const iconTemplates = {
  'sigma-boy': {
    emoji: '👔',
    color: '#6B7280',
    bgColor: '#374151'
  },
  'alpha-male': {
    emoji: '💪',
    color: '#DC2626',
    bgColor: '#991B1B'
  },
  'chad': {
    emoji: '🏋️',
    color: '#059669',
    bgColor: '#047857'
  },
  'gigachad': {
    emoji: '🔥',
    color: '#EA580C',
    bgColor: '#C2410C'
  },
  'sigma-male': {
    emoji: '🕶️',
    color: '#1F2937',
    bgColor: '#111827'
  },
  'omega-male': {
    emoji: '⚡',
    color: '#7C3AED',
    bgColor: '#5B21B6'
  },
  'ultra-chad': {
    emoji: '💎',
    color: '#0EA5E9',
    bgColor: '#0369A1'
  },
  'mega-sigma': {
    emoji: '🌌',
    color: '#8B5CF6',
    bgColor: '#6D28D9'
  },
  'super-alpha': {
    emoji: '👑',
    color: '#F59E0B',
    bgColor: '#D97706'
  },
  'legendary-chad': {
    emoji: '🏆',
    color: '#10B981',
    bgColor: '#059669'
  },
  'mythic-sigma': {
    emoji: '🌙',
    color: '#6366F1',
    bgColor: '#4F46E5'
  },
  'divine-alpha': {
    emoji: '✨',
    color: '#F97316',
    bgColor: '#EA580C'
  },
  'god-chad': {
    emoji: '⚔️',
    color: '#EF4444',
    bgColor: '#DC2626'
  },
  'celestial-sigma': {
    emoji: '⭐',
    color: '#FCD34D',
    bgColor: '#F59E0B'
  },
  'immortal-alpha': {
    emoji: '🦅',
    color: '#8B5CF6',
    bgColor: '#7C3AED'
  },
  'ancient-chad': {
    emoji: '🗿',
    color: '#6B7280',
    bgColor: '#4B5563'
  },
  'primordial-sigma': {
    emoji: '🌊',
    color: '#06B6D4',
    bgColor: '#0891B2'
  },
  'eternal-alpha': {
    emoji: '🌅',
    color: '#F59E0B',
    bgColor: '#D97706'
  },
  'supreme-chad': {
    emoji: '👑',
    color: '#FCD34D',
    bgColor: '#F59E0B'
  },
  'cosmic-sigma': {
    emoji: '🌌',
    color: '#8B5CF6',
    bgColor: '#7C3AED'
  },
  'omnipotent-alpha': {
    emoji: '⚡',
    color: '#FCD34D',
    bgColor: '#F59E0B'
  }
};

function generateOptimizedSVG(characterId, template) {
  const { emoji, color, bgColor } = template;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-${characterId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${bgColor};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow-${characterId}">
      <feDropShadow dx="1" dy="1" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background circle -->
  <circle cx="24" cy="24" r="22" fill="url(#bg-${characterId})" filter="url(#shadow-${characterId})"/>
  
  <!-- Border -->
  <circle cx="24" cy="24" r="20" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.3"/>
  
  <!-- Emoji icon -->
  <text x="24" y="30" font-family="Arial, sans-serif" font-size="20" 
        text-anchor="middle" fill="#FFFFFF" filter="url(#shadow-${characterId})">${emoji}</text>
</svg>`;
}

function generateAllOptimizedIcons() {
  const outputDir = path.join(__dirname, '../public/images/brainrots');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  Object.entries(iconTemplates).forEach(([characterId, template]) => {
    const svgContent = generateOptimizedSVG(characterId, template);
    const outputPath = path.join(outputDir, `${characterId}-optimized.svg`);
    
    fs.writeFileSync(outputPath, svgContent);
    console.log(`Generated optimized icon for ${characterId}`);
  });
  
  console.log('All optimized icons generated successfully!');
}

generateAllOptimizedIcons(); 