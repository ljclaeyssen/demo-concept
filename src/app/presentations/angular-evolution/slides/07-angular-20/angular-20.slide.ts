import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-20-slide',
  templateUrl: './angular-20.slide.html',
  styleUrl: './angular-20.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular20Slide {
  zonelessCode = signal(`// Zoneless STABLE ! 🎉
// Plus besoin de Zone.js
bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection()
  ]
});

// Avantages :
// - Bundle -15kb (pas de Zone.js)
// - Rendering jusqu'à 30% plus rapide
// - Change detection explicite
// - Debug simplifié`);

  signalsStableCode = signal(`// Signals : tout est STABLE !
import { signal, computed, effect, linkedSignal } from '@angular/core';

// Toutes les primitives sont stables :
const count = signal(0);
const doubled = computed(() => count() * 2);
effect(() => console.log(count()));

// linkedSignal aussi !
const selected = linkedSignal(() => items()[0]);

// input(), output(), model() : stables
// viewChild(), contentChild() : stables`);

  templateCode = signal(`// Nouvelles fonctionnalités template
@Component({
  template: \`
    <!-- Template literals -->
    <p>Hello \${{ '{' }}user.name{{ '}' }}</p>

    <!-- Exponentiation -->
    <p>{{ base ** exponent }}</p>

    <!-- Opérateur 'in' -->
    @if ('admin' in user.roles) {
      <admin-panel />
    }
  \`
})
export class MyComponent {}`);
}
