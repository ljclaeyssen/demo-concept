import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-19-slide',
  templateUrl: './angular-19.slide.html',
  styleUrl: './angular-19.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular19Slide {
  resourceCode = signal(`// Resource API : chargement déclaratif
const userId = signal(1);

// resource() avec Promise
userResource = resource({
  params: () => ({ id: this.userId() }),
  loader: async ({ params }) => {
    const res = await fetch(\`/api/users/\${params.id}\`);
    return res.json();
  }
});

// rxResource() avec Observable
userResource = rxResource({
  params: () => ({ id: this.userId() }),
  stream: ({ params }) =>
    this.http.get(\`/api/users/\${params.id}\`)
});

// Accès : .value(), .isLoading(), .error()`);

  linkedSignalCode = signal(`// linkedSignal : signal dérivé modifiable
const items = signal(['a', 'b', 'c']);

// Suit items[0] mais peut être modifié
const selected = linkedSignal(() => items()[0]);

console.log(selected()); // 'a'

selected.set('custom'); // OK !
console.log(selected()); // 'custom'

items.set(['x', 'y']); // Reset !
console.log(selected()); // 'x'`);

  standaloneDefaultCode = signal(`// Standalone par défaut !
// Plus besoin de standalone: true

@Component({
  // standalone: true est maintenant implicite !
  selector: 'app-my-component',
  imports: [CommonModule],
  template: \`...\`
})
export class MyComponent {}

// Pour un non-standalone (rare) :
@Component({
  standalone: false,  // Explicite
  ...
})`);
}
