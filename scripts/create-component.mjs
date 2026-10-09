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
  const componentListName = toKebabCase(componentName);

  const files = {
    tsx: path.join(componentDir, `${componentName}.tsx`),
    css: path.join(componentDir, `${componentName}.css`),
    types: path.join(componentDir, `${componentName}.types.tsx`),
    list: path.join(componentDir, `${componentListName}-lists.tsx`),
    test: path.join(componentDir, `${componentName}.test.tsx`),
  };

  const existingFiles = Object.values(files).filter((filePath) => fs.existsSync(filePath));
  if (existingFiles.length > 0) {
    throw new Error(`Component files already exist: ${existingFiles.join(', ')}`);
  }

  fs.mkdirSync(componentDir, { recursive: true });

  writeFile(
    files.tsx,
    `import './${componentName}.css';
import type { ${componentName}Item, ${componentName}Props } from './${componentName}.types';

const items: ${componentName}Item[] = [
  // Add your ${componentName.toLowerCase()} items here.
  // {
  //   title: 'Example item',
  //   description: 'Add details here.',
  // },
];

export default function ${componentName}({ items: providedItems }: ${componentName}Props) {
  const itemList = providedItems ?? items;

  return (
    <section className="${componentClass}" aria-labelledby="${componentClass}-title">
      <div className="${componentClass}__header">
        <h2 id="${componentClass}-title">${componentName}</h2>
      </div>

      {itemList.length > 0 ? (
        <div className="${componentClass}__list">
          {itemList.map((item, index) => (
            <article className="${componentClass}__item" key={\`\${item.title}-\${index}\`}>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      ) : (
        <p className="${componentClass}__empty">Add your ${componentName.toLowerCase()} content here.</p>
      )}
    </section>
  );
}
`,
  );

  writeFile(
    files.css,
    `.${componentClass} {
  display: block;
}

.${componentClass}__header {
  margin-bottom: 1.5rem;
}

.${componentClass}__list {
  display: grid;
  gap: 1rem;
}

.${componentClass}__item {
  padding: 1rem 0;
  border-bottom: 1px solid #dededb;
}

.${componentClass}__empty {
  color: #6d6d6d;
}
`,
  );

  writeFile(
    files.types,
    `export type ${componentName}Item = {
  title: string;
  description?: string;
};

export type ${componentName}Props = {
  items?: ${componentName}Item[];
};
`,
  );

  writeFile(
    files.list,
    `import type { ${componentName}Item } from './${componentName}.types';

export const ${componentListName}Items: ${componentName}Item[] = [
  // Add your data here.
];
`,
  );

  writeFile(
    files.test,
    `import { render, screen } from '@testing-library/react';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  it('renders the section title', () => {
    render(
      <${componentName}
        items={[
          {
            title: 'Example item',
            description: 'Example description',
          },
        ]}
      />
    );

    expect(screen.getByRole('heading', { name: '${componentName}' })).toBeInTheDocument();
    expect(screen.getByText('Example item')).toBeInTheDocument();
    expect(screen.getByText('Example description')).toBeInTheDocument();
  });

  it('renders the empty state when no items are provided', () => {
    render(<${componentName} items={[]} />);

    expect(screen.getByText('Add your ${componentName.toLowerCase()} content here.')).toBeInTheDocument();
  });
});
`,
  );

  const relativeDir = path.relative(rootDir, componentDir) || '.';
  console.log(`Created component ${componentName} in ${relativeDir}`);
  console.log('Files created:');
  console.log(`- ${path.relative(rootDir, files.tsx)}`);
  console.log(`- ${path.relative(rootDir, files.css)}`);
  console.log(`- ${path.relative(rootDir, files.types)}`);
  console.log(`- ${path.relative(rootDir, files.list)}`);
  console.log(`- ${path.relative(rootDir, files.test)}`);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
