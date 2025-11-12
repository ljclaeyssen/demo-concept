import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-difference-slide',
  templateUrl: './basic-difference.slide.html',
  styleUrl: './basic-difference.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicDifferenceSlide {
  computedExample = signal(`// ✅ COMPUTED - Pour valeurs dérivées
firstName = signal('Jean');
lastName = signal('Dupont');

// Read-only, synchrone, memoïsé
fullName = computed(() =>
  \`\${this.firstName()} \${this.lastName()}\`
);

// Utilisable dans le template directement
// <div>{{ fullName() }}</div>`);

  effectExample = signal(`// ✅ EFFECT - Pour side effects
searchQuery = signal('');
searchResults = signal<Result[]>([]);

constructor() {
  // Exécute un appel API (side effect)
  effect(() => {
    const query = this.searchQuery();
    if (query) {
      this.searchService.search(query)
        .subscribe(results => {
          this.searchResults.set(results);
        });
    }
  });
}`);
}
