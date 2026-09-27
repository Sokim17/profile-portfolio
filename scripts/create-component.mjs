#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import process from 'process';

function toPascalCase(value) {
  return value
    .trim()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

function parseArgs(argv) {
  let componentName = '';
  let targetPath = 'app/components';

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--name' || arg === '-n') {
      componentName = argv[index + 1] ?? '';
      index += 1;
    } else if (arg === '--path' || arg === '-p') {
      targetPath = argv[index + 1] ?? 'app/components';
      index += 1;
    } else if (arg.startsWith('--')) {
      throw new Error(`Unknown option: ${arg}`);
    } else if (!componentName) {
      componentName = arg;
    } else {
      throw new Error(`Unexpected argument: ${arg}`);
    }
  }

  if (!componentName) {
    throw new Error('Please provide a component name. Example: npm run create:component -- HeroSection');
  }

  return {
    componentName: toPascalCase(componentName),
    targetPath,
  };
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

function main() {
  const { componentName, targetPath } = parseArgs(process.argv.slice(2));
  const rootDir = process.cwd();
  const resolvedBaseDir = path.isAbsolute(targetPath)
    ? targetPath
    : path.resolve(rootDir, targetPath);
  const componentDir = path.join(resolvedBaseDir, componentName);
  const componentClass = toKebabCase(componentName);
  const files = {
    tsx: path.join(componentDir, `${componentName}.tsx`),
    css: path.join(componentDir, `${componentName}.css`),
    types: path.join(componentDir, `${componentName}.types.tsx`),
  };

  const existingFiles = Object.values(files).filter((filePath) => fs.existsSync(filePath));
  if (existingFiles.length > 0) {
    throw new Error(`Component files already exist: ${existingFiles.join(', ')}`);
  }

  fs.mkdirSync(componentDir, { recursive: true });

  writeFile(
    files.tsx,
    `import './${componentName}.css';\nimport type { ${componentName}Props } from './${componentName}.types';\n\nexport default function ${componentName}({}: ${componentName}Props) {\n  return (\n    <section className="${componentClass}">\n      <h2>${componentName}</h2>\n    </section>\n  );\n}\n`,
  );

  writeFile(
    files.css,
    `.${componentClass} {\n  /* Add styles here */\n}\n`,
  );

  writeFile(
    files.types,
    `import type { ReactNode } from 'react';\n\nexport interface ${componentName}Props {\n  children?: ReactNode;\n}\n`,
  );

  const relativeDir = path.relative(rootDir, componentDir) || '.';
  console.log(`Created component ${componentName} in ${relativeDir}`);
  console.log('Files created:');
  console.log(`- ${path.relative(rootDir, files.tsx)}`);
  console.log(`- ${path.relative(rootDir, files.css)}`);
  console.log(`- ${path.relative(rootDir, files.types)}`);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
