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
function generateCodeConstants(presentationName, filesToRead) {
  console.log(`🔨 Génération des constantes de code pour ${presentationName}...`);

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
  const outputPath = resolve(projectRoot, `src/app/presentations/${presentationName}/generated-code.constants.ts`);
  writeFileSync(outputPath, output, 'utf-8');

  console.log(`✨ Constantes générées dans: src/app/presentations/${presentationName}/generated-code.constants.ts\n`);
}

// Hello World presentation
generateCodeConstants('hello-world', [
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
]);

// Typed Forms presentation
generateCodeConstants('typed-forms', [
  {
    name: 'registrationFormEnums',
    path: 'src/app/presentations/typed-forms/demo/registration-form.enums.ts',
    description: 'Enums pour le formulaire d\'inscription'
  },
  {
    name: 'contactFormTs',
    path: 'src/app/presentations/typed-forms/demo/contact-form.ts',
    description: 'Classe ContactForm'
  },
  {
    name: 'situationFormTs',
    path: 'src/app/presentations/typed-forms/demo/situation-form.ts',
    description: 'Classe SituationForm'
  },
  {
    name: 'registrationFormTs',
    path: 'src/app/presentations/typed-forms/demo/registration-form.ts',
    description: 'Classe RegistrationForm'
  },
  {
    name: 'registrationDemoComponentTs',
    path: 'src/app/presentations/typed-forms/demo/registration-demo.component.ts',
    description: 'Composant de démo RegistrationDemo'
  },
  {
    name: 'registrationDemoComponentHtml',
    path: 'src/app/presentations/typed-forms/demo/registration-demo.component.html',
    description: 'Template du composant RegistrationDemo'
  },
  {
    name: 'registrationDemoComponentScss',
    path: 'src/app/presentations/typed-forms/demo/registration-demo.component.scss',
    description: 'Styles du composant RegistrationDemo'
  }
]);
