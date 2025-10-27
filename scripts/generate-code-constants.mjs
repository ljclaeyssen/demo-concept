import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

/**
 * Lit un fichier et retourne son contenu en tant que string TypeScript
 */
function readComponentFile(filePath) {
  const absolutePath = resolve(projectRoot, filePath);

  if (!existsSync(absolutePath)) {
    console.warn(`⚠️  Fichier non trouvé: ${filePath}`);
    return null;
  }

  try {
    const content = readFileSync(absolutePath, 'utf-8');
    // Échappe les backticks et backslashes pour l'insertion dans un template string
    const escaped = content
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');
    return escaped;
  } catch (error) {
    console.error(`❌ Erreur lors de la lecture de ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Génère un fichier TypeScript avec des constantes contenant le code source
 */
function generateCodeConstants() {
  console.log('🔨 Génération des constantes de code...');

  // Définir les fichiers à lire
  const filesToRead = [
    {
      name: 'demoButtonComponentTs',
      path: 'src/app/presentations/hello-world/demo-button.component.ts',
      description: 'Code TypeScript du composant DemoButton'
    },
    {
      name: 'demoButtonComponentHtml',
      path: 'src/app/presentations/hello-world/demo-button.component.html',
      description: 'Template HTML du composant DemoButton'
    },
    {
      name: 'demoButtonComponentScss',
      path: 'src/app/presentations/hello-world/demo-button.component.scss',
      description: 'Styles SCSS du composant DemoButton'
    }
  ];

  let output = `// Ce fichier est généré automatiquement par scripts/generate-code-constants.mjs
// Ne pas modifier manuellement !

`;

  for (const file of filesToRead) {
    const content = readComponentFile(file.path);

    if (content !== null) {
      output += `/**
 * ${file.description}
 * Source: ${file.path}
 */
export const ${file.name} = \`${content}\`;

`;
      console.log(`✅ ${file.name} généré`);
    }
  }

  // Écrire le fichier de sortie
  const outputPath = resolve(projectRoot, 'src/app/presentations/hello-world/generated-code.constants.ts');
  writeFileSync(outputPath, output, 'utf-8');

  console.log(`\n✨ Constantes générées dans: src/app/presentations/hello-world/generated-code.constants.ts`);
}

// Exécuter la génération
generateCodeConstants();
