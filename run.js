#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const arg = process.argv[2];

// Default file if no argument
let file = arg || '1';

// If argument is just a number, map it to a file
if (!isNaN(file)) {
  const dayDir = path.join(__dirname, 'src', 'day1');
  const files = fs.readdirSync(dayDir)
    .filter(f => f.endsWith('.ts'))
    .sort();
  
  const index = parseInt(file) - 1;
  if (index < 0 || index >= files.length) {
    console.error(`Error: File index ${file} not found. Available files: ${files.map((f, i) => `${i + 1}=${f}`).join(', ')}`);
    process.exit(1);
  }
  
  // Remove .ts extension and build path
  file = `day1/${files[index].replace('.ts', '')}`;
} else if (!arg.includes('day1/')) {
  // If user doesn't include path, assume it's in day1/
  file = `day1/${file}`;
}

const srcFile = path.join(__dirname, 'src', `${file}.ts`);
const distFile = path.join(__dirname, 'dist', `${file}.js`);

if (!fs.existsSync(srcFile)) {
  console.error(`Error: File not found: ${srcFile}`);
  process.exit(1);
}

try {
  console.log(`Compiling ${file}.ts...`);
  execSync('npx tsc', { stdio: 'inherit' });
  
  console.log(`\nRunning ${file}.js...\n`);
  execSync(`node "${distFile}"`, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}

