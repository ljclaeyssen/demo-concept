import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-computed-options-slide',
  templateUrl: './computed-options.slide.html',
  styleUrl: './computed-options.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComputedOptionsSlide {
  defaultBehaviorCode = signal(`// Comportement par défaut: comparaison par référence
user = signal({ name: 'Jean', age: 30 });

userDisplay = computed(() => {
  const u = this.user();
  return \`\${u.name} - \${u.age} ans\`;
});

// Chaque modification de user() déclenche un recalcul
// même si le résultat est identique !
this.user.update(u => ({ ...u, age: 30 })); // Recalcul ⚠️`);

  equalOptionCode = signal(`// Option equal: comparaison personnalisée
import { isEqual } from 'lodash-es';

user = signal({ name: 'Jean', age: 30 });

userDisplay = computed(() => {
  const u = this.user();
  return \`\${u.name} - \${u.age} ans\`;
}, {
  equal: (a, b) => a === b // Comparaison par valeur
});

// Pas de recalcul si le résultat est le même ✅
this.user.update(u => ({ ...u, age: 30 })); // Pas de recalcul`);

  deepEqualCode = signal(`// Deep equal pour objets complexes
items = signal([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
]);

itemNames = computed(() => {
  return this.items().map(i => i.name);
}, {
  equal: (a, b) => {
    // Comparaison profonde des arrays
    if (a.length !== b.length) return false;
    return a.every((val, i) => val === b[i]);
  }
});`);
}
