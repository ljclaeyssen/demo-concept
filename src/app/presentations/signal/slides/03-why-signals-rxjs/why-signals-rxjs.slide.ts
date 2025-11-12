import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-why-signals-rxjs-slide',
  templateUrl: './why-signals-rxjs.slide.html',
  styleUrl: './why-signals-rxjs.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhySignalsRxjsSlide {
  rxjsCode = signal(`// Avec RxJS - verbeux et complexe
private searchQuery$ = new BehaviorSubject<string>('');
filteredItems$ = combineLatest([
  this.items$,
  this.searchQuery$
]).pipe(
  map(([items, query]) =>
    items.filter(item => item.name.includes(query))
  )
);

onSearch(query: string) {
  this.searchQuery$.next(query);
}`);

  signalsCode = signal(`// Avec Signals - simple et lisible
searchQuery = signal('');
filteredItems = computed(() =>
  this.items()
    .filter(item => item.name.includes(this.searchQuery()))
);

onSearch(query: string) {
  this.searchQuery.set(query);
}`);
}
