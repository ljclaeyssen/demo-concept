import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-computed-basics-slide',
  templateUrl: './computed-basics.slide.html',
  styleUrl: './computed-basics.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComputedBasicsSlide {
  basicCode = signal(`import { signal, computed } from '@angular/core';

// Signals sources
const firstName = signal('Jean');
const lastName = signal('Dupont');

// Signal dérivé : se recalcule automatiquement
const fullName = computed(() => {
  return \`\${firstName()} \${lastName()}\`;
});

console.log(fullName());  // 'Jean Dupont'

firstName.set('Marie');
console.log(fullName());  // 'Marie Dupont' ✨ automatique !`);

  examplesCode = signal(`// Exemples pratiques
const items = signal([
  { name: 'Pomme', price: 2 },
  { name: 'Banane', price: 1.5 }
]);

// Total calculé automatiquement
const total = computed(() =>
  items().reduce((sum, item) => sum + item.price, 0)
);

// Nombre d'items
const itemCount = computed(() => items().length);

// Filtre
const searchTerm = signal('');
const filteredItems = computed(() =>
  items().filter(i =>
    i.name.toLowerCase().includes(searchTerm().toLowerCase())
  )
);`);

  templateCode = signal(`@Component({
  template: \`
    <input [(ngModel)]="searchTerm" placeholder="Rechercher...">

    <p>{{ itemCount() }} articles - Total: {{ total() }}€</p>

    <ul>
      @for (item of filteredItems(); track item.name) {
        <li>{{ item.name }} - {{ item.price }}€</li>
      }
    </ul>
  \`
})
export class CartComponent {
  items = signal([...]);
  searchTerm = signal('');

  total = computed(() => ...);
  itemCount = computed(() => ...);
  filteredItems = computed(() => ...);
}`);
}
