import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-22-slide',
  templateUrl: './angular-22.slide.html',
  styleUrl: './angular-22.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular22Slide {
  debouncedCode = signal(`// debounced() : debounce natif sur un signal
import { signal, debounced } from '@angular/core';

const query = signal('');
const debouncedQuery = debounced(() => query(), 300);

// Retourne un Resource<T>
console.log(debouncedQuery.value()); // stable après 300ms

// Timer custom avec fonction :
const smart = debounced(() => query(), (value, prev) => {
  // Adapter le délai selon le contexte
  return new Promise(r => setTimeout(r, value.length < 3 ? 500 : 200));
});`);

  selectorlessCode = signal(`// Selectorless Components : plus de selector !
// Avant (v21)
@Component({
  selector: 'app-user-card',
  template: \`<div>{{ name() }}</div>\`
})
export class UserCard { }

// Template parent :
// <app-user-card />

// Après (v22)
@Component({
  template: \`<div>{{ name() }}</div>\`
})
export class UserCard { }

// Template parent : import direct de la classe
// <UserCard />`);

  onpushDefaultCode = signal(`// OnPush par défaut pour les nouveaux composants
// Avant (v21) : Default = ChangeDetectionStrategy.Default
@Component({
  template: \`...\`
  // Pas de changeDetection = check tout l'arbre
})
export class MyComponent { }

// Après (v22) : Default = OnPush
@Component({
  template: \`...\`
  // OnPush automatique, optimal avec Signals
})
export class MyComponent { }

// Pour l'ancien comportement :
@Component({
  changeDetection: ChangeDetectionStrategy.Eager
})`);
}
