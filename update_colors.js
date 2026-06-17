const fs = require('fs');
const path = require('path');

function replaceColorsInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace text colors
    content = content.replace(/text-gray-900/g, 'text-[#e9eae4]');
    content = content.replace(/text-gray-800/g, 'text-[#e9eae4]');
    content = content.replace(/text-gray-700/g, 'text-[#e9eae4]');
    content = content.replace(/text-gray-600/g, 'text-gray-300');
    content = content.replace(/text-gray-500/g, 'text-gray-400');
    
    // Replace background colors
    content = content.replace(/bg-white\/70/g, 'bg-[#1d1d1d]/80');
    content = content.replace(/bg-white/g, 'bg-[#2a2a2a]');
    content = content.replace(/bg-gray-50\/50/g, 'bg-[#242424]/50');
    content = content.replace(/bg-gray-50/g, 'bg-[#242424]');
    content = content.replace(/bg-gray-100\/50/g, 'bg-[#242424]/50');
    content = content.replace(/bg-gray-100/g, 'bg-[#242424]');
    content = content.replace(/bg-\[#EAE6E1\]/g, 'bg-[#1d1d1d]');
    content = content.replace(/bg-\[#e9eae4\]/g, 'bg-[#1d1d1d]');
    content = content.replace(/bg-\[#FDFBF7\]/g, 'bg-[#2a2a2a]');
    content = content.replace(/bg-blue-50\/50/g, 'bg-[#2a2a2a]');

    // Border colors
    content = content.replace(/border-gray-100/g, 'border-black');
    content = content.replace(/border-gray-200\/50/g, 'border-black/50');
    content = content.replace(/border-gray-200/g, 'border-black');
    content = content.replace(/border-gray-300/g, 'border-black');
    content = content.replace(/border-blue-100/g, 'border-black');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceColorsInFile(fullPath);
        }
    }
}

walkDir(path.join(__dirname, 'src'));
