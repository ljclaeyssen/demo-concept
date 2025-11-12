import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-rxjs-operators-slide',
  templateUrl: './rxjs-operators.slide.html',
  styleUrl: './rxjs-operators.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsOperatorsSlide {
  exampleCode = signal(`import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({...})
export class ProductSearchComponent {
  private productService = inject(ProductService);

  // Signal de base
  searchQuery = signal('');

  // Utiliser RxJS pour des opérations complexes
  products = toSignal(
    toObservable(this.searchQuery).pipe(
      debounceTime(300),              // Attendre 300ms
      distinctUntilChanged(),         // Ignorer si même valeur
      switchMap(query =>              // Appel API
        query
          ? this.productService.search(query)
          : of([])
      )
    ),
    { initialValue: [] }
  );
}`);

  patternCode = signal(`// Pattern recommandé pour des cas complexes
@Component({...})
export class AdvancedComponent {
  // 1. Signal d'entrée
  filter = signal({ category: 'all', minPrice: 0 });

  // 2. Observable avec opérateurs RxJS
  private items$ = toObservable(this.filter).pipe(
    debounceTime(500),
    switchMap(filter => this.api.getItems(filter)),
    catchError(() => of([])),
    shareReplay(1)
  );

  // 3. Reconvertir en signal pour le template
  items = toSignal(this.items$, { initialValue: [] });
}`);
}
