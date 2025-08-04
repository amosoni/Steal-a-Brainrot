const fs = require('fs');
const path = require('path');

// 确保目录存在
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 创建简单的SVG占位符
const createSVGPlaceholder = (name, color) => {
  return `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="${color}"/>
    <text x="200" y="150" font-family="Arial" font-size="24" fill="white" text-anchor="middle">${name}</text>
  </svg>`;
};

// 创建占位符文件
const placeholders = [
  { name: 'Steal-a-Brainrot1.webp', color: '#3B82F6', text: 'Game Screenshot 1' },
  { name: 'Steal-a-Brainrot2.webp', color: '#10B981', text: 'Game Screenshot 2' },
  { name: 'Steal-a-Brainrot3.webp', color: '#8B5CF6', text: 'Game Screenshot 3' },
  { name: 'Steal-a-Brainrot4.webp', color: '#F59E0B', text: 'Game Screenshot 4' }
];

placeholders.forEach(({ name, color, text }) => {
  const svgContent = createSVGPlaceholder(text, color);
  const filePath = path.join(imagesDir, name.replace('.webp', '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created ${filePath}`);
});

console.log('Simple SVG placeholders created successfully!'); 