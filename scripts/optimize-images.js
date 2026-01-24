#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses JPG/PNG images in public/images directory
 * Reduces file size by 60-80% with minimal quality loss
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85; // JPG quality (0-100)
const PNG_QUALITY = 90; // PNG quality (0-100)

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

/**
 * Recursively find all image files in a directory
 */
function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImages(filePath, fileList);
    } else {
      const ext = path.extname(file);
      if (SUPPORTED_FORMATS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Optimize a single image
 */
async function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    const originalSize = fs.statSync(imagePath).size;
    
    // Read metadata first to check orientation
    const inputMetadata = await sharp(imagePath).metadata();
    const hasOrientation = inputMetadata.orientation && inputMetadata.orientation > 1;
    
    let sharpInstance = sharp(imagePath);
    
    // Auto-rotate based on EXIF orientation data
    // This will physically rotate the image and remove the EXIF orientation tag
    // Using rotate() without parameters auto-rotates based on EXIF
    sharpInstance = sharpInstance.rotate();
    
    // Get image metadata after rotation
    const metadata = await sharpInstance.metadata();
    const { width, height } = metadata;
    
    // Resize if image is too large (max 2000px on longest side)
    const maxDimension = 2000;
    if (width > maxDimension || height > maxDimension) {
      if (width > height) {
        sharpInstance = sharpInstance.resize(maxDimension, null, {
          withoutEnlargement: true,
        });
      } else {
        sharpInstance = sharpInstance.resize(null, maxDimension, {
          withoutEnlargement: true,
        });
      }
    }
    
    // Optimize based on format
    if (ext === '.png') {
      sharpInstance = sharpInstance.png({
        quality: PNG_QUALITY,
        compressionLevel: 9,
        adaptiveFiltering: true,
      });
    } else {
      // JPG/JPEG
      sharpInstance = sharpInstance.jpeg({
        quality: QUALITY,
        mozjpeg: true, // Better compression
        progressive: true, // Progressive JPEG
      });
    }
    
    // Create temporary file path
    const tempPath = imagePath + '.tmp';
    
    // Write optimized image
    await sharpInstance.toFile(tempPath);
    
    // Check if optimization actually reduced size OR if we rotated the image
    const newSize = fs.statSync(tempPath).size;
    
    // Always replace if we rotated the image (even if file size increased slightly)
    if (newSize < originalSize || hasOrientation) {
      // Replace original with optimized version
      fs.renameSync(tempPath, imagePath);
      const savings = newSize < originalSize 
        ? ((originalSize - newSize) / originalSize * 100).toFixed(1)
        : '0.0';
      return {
        success: true,
        originalSize,
        newSize,
        savings: parseFloat(savings),
        rotated: hasOrientation,
      };
    } else {
      // Optimization didn't help, remove temp file
      fs.unlinkSync(tempPath);
      return {
        success: false,
        originalSize,
        newSize: originalSize,
        savings: 0,
        reason: 'Optimized version was larger',
      };
    }
  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting image optimization...\n');
  console.log(`📁 Scanning: ${IMAGES_DIR}\n`);

  const images = findImages(IMAGES_DIR);
  console.log(`Found ${images.length} images to optimize\n`);

  if (images.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let optimizedCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < images.length; i++) {
    const imagePath = images[i];
    const relativePath = path.relative(IMAGES_DIR, imagePath);
    
    process.stdout.write(`[${i + 1}/${images.length}] Optimizing ${relativePath}... `);
    
    const result = await optimizeImage(imagePath);
    
    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      optimizedCount++;
      console.log(`✅ Saved ${result.savings}% (${(result.originalSize / 1024 / 1024).toFixed(2)}MB → ${(result.newSize / 1024 / 1024).toFixed(2)}MB)`);
    } else {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.originalSize;
      skippedCount++;
      console.log(`⏭️  Skipped (${result.reason || result.error || 'no improvement'})`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Optimization Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Optimized: ${optimizedCount} images`);
  console.log(`⏭️  Skipped: ${skippedCount} images`);
  console.log(`📦 Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 New size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Total savings: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB (${(((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(1)}%)`);
  console.log('='.repeat(60));
}

// Run the script
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});




