const fs = require('fs');
const path = require('path');

const colors = 'blue|emerald|sky|purple|cyan|pink|teal|indigo|green|rose|red|yellow|orange|amber|fuchsia|lime';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace from, to, via
  content = content.replace(new RegExp(`from-(${colors})-\\d+`, 'g'), 'from-black');
  content = content.replace(new RegExp(`to-(${colors})-\\d+`, 'g'), 'to-neutral-900');
  content = content.replace(new RegExp(`via-(${colors})-\\d+`, 'g'), 'via-neutral-800');
  
  // Replace bg
  content = content.replace(new RegExp(`bg-(${colors})-\\d+`, 'g'), 'bg-black');
  
  // Replace hover:bg
  content = content.replace(new RegExp(`hover:bg-(${colors})-\\d+`, 'g'), 'hover:bg-neutral-800');
  
  // Replace text
  content = content.replace(new RegExp(`text-(${colors})-\\d+`, 'g'), 'text-black');
  
  // Replace hover:text
  content = content.replace(new RegExp(`hover:text-(${colors})-\\d+`, 'g'), 'hover:text-neutral-800');
  
  // Replace border
  content = content.replace(new RegExp(`border-(${colors})-\\d+`, 'g'), 'border-black');
  
  // Replace shadow
  content = content.replace(new RegExp(`shadow-(${colors})-\\d+(/\\d+)?`, 'g'), 'shadow-black$2');
  
  // Some specific hex replacements
  content = content.replace(/#2563EB/g, '#000000');
  content = content.replace(/#0F172A/g, '#000000');
  
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

walkDir('d:\\\\shiftup\\\\shiftuo\\\\src');
console.log('Replaced colors successfully!');
