import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-limitations-slide',
  templateUrl: './limitations.slide.html',
  styleUrl: './limitations.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LimitationsSlide {
  takeSkipCode = signal(`// ❌ Pas d'équivalent direct en Signals
users$.pipe(take(5))       // Prendre les 5 premières émissions
users$.pipe(skip(2))       // Ignorer les 2 premières

// ✅ Solution: utiliser toObservable()
toObservable(users).pipe(
  take(5)
).subscribe(...)`);

  withLatestFromCode = signal(`// ❌ Pas de withLatestFrom en Signals
search$.pipe(
  withLatestFrom(filters$),
  map(([query, filters]) => ...)
)

// ✅ Solution: computed() ou toObservable()
// Option 1: computed si synchrone
result = computed(() => ({
  query: this.searchQuery(),
  filters: this.filters()
}));

// Option 2: toObservable si async
toObservable(searchQuery).pipe(
  withLatestFrom(toObservable(filters)),
  switchMap(([query, filters]) => ...)
)`);
}
