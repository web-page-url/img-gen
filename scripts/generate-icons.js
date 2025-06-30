const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const inputPath = path.join(__dirname, '../public/Sticker-magic-2.jpeg');
  const publicDir = path.join(__dirname, '../public');

  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.error('❌ Input image not found:', inputPath);
    process.exit(1);
  }

  try {
    console.log('🎨 Generating icons from Sticker-magic-2.jpeg...');

    // Generate different sized icons
    const iconSizes = [
      { name: 'favicon.png', size: 32 },
      { name: 'icon-192.png', size: 192 },
      { name: 'icon-512.png', size: 512 },
      { name: 'apple-icon-180.png', size: 180 },
    ];

    for (const icon of iconSizes) {
      const outputPath = path.join(publicDir, icon.name);
      
      await sharp(inputPath)
        .resize(icon.size, icon.size, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 100 })
        .toFile(outputPath);
      
      console.log(`✅ Generated ${icon.name} (${icon.size}x${icon.size})`);
    }

    // Generate favicon.ico specifically
    const faviconPath = path.join(publicDir, 'favicon.ico');
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 100 })
      .toFile(faviconPath);
    
    console.log('✅ Generated favicon.ico (32x32)');
    console.log('🎉 All icons generated successfully!');

  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons(); 