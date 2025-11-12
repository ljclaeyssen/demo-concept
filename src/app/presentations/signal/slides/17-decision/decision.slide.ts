import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-decision-slide',
  templateUrl: './decision.slide.html',
  styleUrl: './decision.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecisionSlide {
  signalsCode = signal(`// ✅ Utiliser Signals pour:

// État local de composant
count = signal(0);
isOpen = signal(false);

// Valeurs dérivées simples
fullName = computed(() =>
  \`\${firstName()} \${lastName()}\`
);

// State management simple
selectedItems = signal<Item[]>([]);
totalPrice = computed(() =>
  this.selectedItems().reduce((sum, item) => sum + item.price, 0)
);`);

  rxjsCode = signal(`// ✅ Utiliser RxJS pour:

// Opérations temporelles
toObservable(searchQuery).pipe(
  debounceTime(300),
  distinctUntilChanged()
);

// Combiner plusieurs streams async
combineLatest([user$, settings$, permissions$]).pipe(
  map(([user, settings, perms]) => ...)
);

// Gestion d'erreur avancée
data$.pipe(
  retry({ count: 3, delay: 1000 }),
  catchError(err => this.handleError(err))
);

// ⚠️ MAIS: Toujours convertir en Signal pour le template
results = toSignal(searchQuery$.pipe(...));

// ❌ JAMAIS d'observable dans le template !
// {{ data$ | async }} ← INTERDIT
// {{ data() }} ← OK`);
}
