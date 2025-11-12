import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-interaction-input-slide',
  templateUrl: './interaction-input.slide.html',
  styleUrl: './interaction-input.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractionInputSlide {
  beforeCode = signal(`// ❌ Avant - Multiple setters compliqués
@Component({...})
export class UserCardComponent {
  @Input() set firstName(value: string) {
    this._firstName = value;
    this.updateFullName();
  }

  @Input() set lastName(value: string) {
    this._lastName = value;
    this.updateFullName();
  }

  private _firstName = '';
  private _lastName = '';
  fullName = '';

  private updateFullName() {
    this.fullName = \`\${this._firstName} \${this._lastName}\`;
  }
}`);

  afterCode = signal(`// ✅ Après - Computed automatique
@Component({...})
export class UserCardComponent {
  firstName = input.required<string>();
  lastName = input.required<string>();

  // Se met à jour automatiquement !
  fullName = computed(() =>
    \`\${this.firstName()} \${this.lastName()}\`
  );
}`);
}
