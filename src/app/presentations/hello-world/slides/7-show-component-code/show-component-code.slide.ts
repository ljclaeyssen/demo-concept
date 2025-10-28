import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { demoButtonComponentTs } from '../../generated-code.constants';

@Component({
  selector: 'app-show-component-code-slide',
  templateUrl: './show-component-code.slide.html',
  styleUrl: './show-component-code.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowComponentCodeSlide {
  scriptExample = signal(`// scripts/generate-code-constants.mjs
import { readFileSync, writeFileSync } from 'fs';

function readComponentFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  return content.replace(/\\\\/g, '\\\\\\\\')
    .replace(/\`/g, '\\\\\`')
    .replace(/\\$/g, '\\\\$');
}

// Génère un fichier TypeScript avec les constantes
const files = [
  { name: 'demoButtonTs', path: 'src/app/.../demo-button.component.ts' }
];
const output = files.map(f =>
  \`export const \${f.name} = \\\`\${readComponentFile(f.path)}\\\`;\`
).join('\\\\n');
writeFileSync('generated-code.constants.ts', output);`);

  packageJsonScript = signal(`// package.json
"scripts": {
  "start": "npm run generate:code && ng serve",
  "build": "npm run generate:code && ng build",
  "generate:code": "node scripts/generate-code-constants.mjs"
}`);

  usageExample = signal(`// Dans votre slide component
import { demoButtonComponentTs } from '../../generated-code.constants';

export class MySlide {
  // Le code est automatiquement synchronisé !
  demoCode = signal(demoButtonComponentTs);
}

// Dans le template
<pre><code [highlight]="demoCode()" language="typescript"></code></pre>`);

  // Code réel du composant, automatiquement généré !
  fullExample = signal(demoButtonComponentTs);
}
