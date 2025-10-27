// Ce fichier est généré automatiquement par scripts/generate-code-constants.mjs
// Ne pas modifier manuellement !

/**
 * Code TypeScript du composant DemoButton
 * Source: src/app/presentations/hello-world/components/demo-button/demo-button.component.ts
 */
export const demoButtonComponentTs = `import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrl: './demo-button.component.scss',
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoButtonComponent {
  count = signal(0);

  increment(): void {
    this.count.update(c => c + 1);
  }
}
`;

/**
 * Template HTML du composant DemoButton
 * Source: src/app/presentations/hello-world/components/demo-button/demo-button.component.html
 */
export const demoButtonComponentHtml = `<div class="demo-container">
  <p-button
    [label]="'Clicked ' + count() + ' times'"
    (onClick)="increment()"
    severity="success" />
</div>
`;

/**
 * Styles SCSS du composant DemoButton
 * Source: src/app/presentations/hello-world/components/demo-button/demo-button.component.scss
 */
export const demoButtonComponentScss = `.demo-container {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

