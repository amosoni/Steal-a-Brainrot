const fs = require('fs');
const path = require('path');

// List of all character IDs that should have optimized icons
const characterIds = [
  'sigma-boy', 'alpha-male', 'chad', 'gigachad', 'sigma-male', 'omega-male',
  'ultra-chad', 'mega-sigma', 'super-alpha', 'legendary-chad', 'mythic-sigma',
  'divine-alpha', 'god-chad', 'celestial-sigma', 'immortal-alpha', 'ancient-chad',
  'primordial-sigma', 'eternal-alpha', 'supreme-chad', 'cosmic-sigma', 'omnipotent-alpha'
];

function testOptimizedIcons() {
  const iconsDir = path.join(__dirname, '../public/images/brainrots');
  const missingIcons = [];
  const existingIcons = [];

  console.log('Testing optimized icons...\n');

  characterIds.forEach(characterId => {
    const iconPath = path.join(iconsDir, `${characterId}-optimized.svg`);
    if (fs.existsSync(iconPath)) {
      const stats = fs.statSync(iconPath);
      existingIcons.push({
        id: characterId,
        size: stats.size,
        path: iconPath
      });
      console.log(`✅ ${characterId}-optimized.svg (${stats.size} bytes)`);
    } else {
      missingIcons.push(characterId);
      console.log(`❌ ${characterId}-optimized.svg - MISSING`);
    }
  });

  console.log('\n--- Summary ---');
  console.log(`Total icons: ${characterIds.length}`);
  console.log(`Existing: ${existingIcons.length}`);
  console.log(`Missing: ${missingIcons.length}`);

  if (missingIcons.length > 0) {
    console.log('\nMissing icons:');
    missingIcons.forEach(id => console.log(`  - ${id}-optimized.svg`));
  } else {
    console.log('\n🎉 All optimized icons are present!');
  }

  // Check file sizes to ensure they're reasonable
  const smallIcons = existingIcons.filter(icon => icon.size < 500);
  const largeIcons = existingIcons.filter(icon => icon.size > 2000);

  if (smallIcons.length > 0) {
    console.log('\n⚠️  Very small icons (might be empty):');
    smallIcons.forEach(icon => console.log(`  - ${icon.id}: ${icon.size} bytes`));
  }

  if (largeIcons.length > 0) {
    console.log('\n⚠️  Large icons (might not be optimized):');
    largeIcons.forEach(icon => console.log(`  - ${icon.id}: ${icon.size} bytes`));
  }

  console.log('\n✅ Icon optimization test completed!');
}

testOptimizedIcons(); 