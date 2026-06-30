const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-black/g, 'bg-[#FDFBF7]');
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-[#F5F2EB]');
  content = content.replace(/bg-\[#0f0f0f\]/g, 'bg-[#F5F2EB]');
  content = content.replace(/bg-\[#050505\]/g, 'bg-[#FDFBF7]');
  content = content.replace(/bg-neutral-950/g, 'bg-[#F5F2EB]');
  content = content.replace(/bg-neutral-900/g, 'bg-[#EAE4D9]');
  content = content.replace(/bg-neutral-800/g, 'bg-[#D2C4B1]');
  content = content.replace(/bg-white(?!\/)/g, 'bg-[#2C241B]');
  content = content.replace(/bg-white\//g, 'bg-[#2C241B]/');
  content = content.replace(/hover:bg-white(?!\/)/g, 'hover:bg-[#2C241B]');
  content = content.replace(/hover:bg-white\//g, 'hover:bg-[#2C241B]/');
  content = content.replace(/hover:bg-neutral-800/g, 'hover:bg-[#D2C4B1]');
  content = content.replace(/hover:bg-neutral-200/g, 'hover:bg-[#4A3F35]');
  
  // Text
  content = content.replace(/text-white(?!\/)/g, 'text-[#2C241B]');
  content = content.replace(/text-white\//g, 'text-[#2C241B]/');
  content = content.replace(/text-black(?!\/)/g, 'text-[#FDFBF7]');
  content = content.replace(/text-neutral-400/g, 'text-[#7A6C5D]');
  content = content.replace(/text-neutral-500/g, 'text-[#8C7A6B]');
  content = content.replace(/text-neutral-200/g, 'text-[#4A3F35]');
  content = content.replace(/text-neutral-300/g, 'text-[#635547]');
  content = content.replace(/hover:text-white(?!\/)/g, 'hover:text-[#2C241B]');
  content = content.replace(/hover:text-neutral-800/g, 'hover:text-[#D2C4B1]');
  
  // Borders
  content = content.replace(/border-neutral-800/g, 'border-[#E8E0D5]');
  content = content.replace(/border-white(?!\/)/g, 'border-[#2C241B]');
  content = content.replace(/border-white\//g, 'border-[#2C241B]/');
  content = content.replace(/border-black/g, 'border-[#FDFBF7]');
  
  // Gradients
  content = content.replace(/from-black/g, 'from-[#FDFBF7]');
  content = content.replace(/to-neutral-900/g, 'to-[#EAE4D9]');
  content = content.replace(/via-neutral-800/g, 'via-[#E8E0D5]');
  content = content.replace(/to-black/g, 'to-[#FDFBF7]');
  
  // Font
  content = content.replace(/font-cursive/g, 'font-sans');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir('d:\\shiftup\\shiftuo\\src');
console.log('Applied beige theme and removed cursive fonts successfully!');
