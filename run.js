#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const file = process.argv[2] || 'day1/day1';
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

