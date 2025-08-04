const fs = require('fs');
const path = require('path');

// 需要修复的文件列表
const filesToFix = [
  'app/[lang]/guides/steal-an-anime/page.tsx',
  'app/[lang]/guides/steal-a-pet/page.tsx',
  'app/[lang]/guides/steal-a-meme/page.tsx',
  'app/[lang]/guides/steal-a-labubu/page.tsx',
  'app/[lang]/guides/steal-a-car/page.tsx',
  'app/[lang]/guides/segundo-piso/page.tsx',
  'app/[lang]/guides/scripts/page.tsx',
  'app/[lang]/guides/rebirth/page.tsx',
  'app/[lang]/guides/modificado/page.tsx',
  'app/[lang]/guides/estrategias/page.tsx',
  'app/[lang]/guides/codigos/page.tsx'
];

function fixMapError(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 查找所有 t('...').map( 的模式
    const mapPattern = /t\(['"`]([^'"`]+)['"`]\)\.map\(/g;
    let match;
    let newContent = content;
    
    while ((match = mapPattern.exec(content)) !== null) {
      const fullMatch = match[0];
      const translationKey = match[1];
      
      // 创建修复后的代码
      const fixedCode = `Array.isArray(t('${translationKey}')) ? t('${translationKey}').map(`;
      
      console.log(`Fixing ${filePath}: ${translationKey}`);
      newContent = newContent.replace(fullMatch, fixedCode);
    }
    
    // 如果内容有变化，写回文件
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🔧 Fixing .map() errors on translation results...\n');
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      fixMapError(filePath);
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  });
  
  console.log('\n✅ All files processed!');
}

main(); 