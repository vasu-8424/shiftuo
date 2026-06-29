const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // 1. Remove all rounded corners and replace with rounded-none for absolute sharpness
  content = content.replace(/rounded-(sm|md|lg|xl|2xl|3xl|full|t-\w+|b-\w+|l-\w+|r-\w+|tl-\w+|tr-\w+|bl-\w+|br-\w+)/g, 'rounded-none');
  
  // 2. Remove gradients
  content = content.replace(/bg-gradient-to-[a-z]+/g, 'bg-black');
  
  // Remove from/to/via color classes entirely (since they are just solid black or white now)
  content = content.replace(/\bfrom-[a-z]+(?:-\d+)?\b/g, '');
  content = content.replace(/\bto-[a-z]+(?:-\d+)?\b/g, '');
  content = content.replace(/\bvia-[a-z]+(?:-\d+)?\b/g, '');

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

walkDir(path.join(__dirname, 'src'));
console.log('UI Refinement Complete!');
