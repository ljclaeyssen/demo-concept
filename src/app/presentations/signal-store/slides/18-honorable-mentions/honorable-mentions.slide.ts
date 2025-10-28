import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-honorable-mentions-slide',
  templateUrl: './honorable-mentions.slide.html',
  styleUrl: './honorable-mentions.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HonorableMentionsSlide {
  elfCode = signal(`// ========================================
// Elf Store - Solution incroyable !
// ========================================
import { createStore, withProps } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';

const productsStore = createStore(
  { name: 'products' },
  withEntities<Product>(),
  withProps<{ loading: boolean }>({ loading: false })
);

// Template :
// {{ products$ | async }}  ← async pipe requise

// ✅ API élégante et puissante
// ✅ Excellent système de plugins
// ✅ Petite taille, très performant
// ❌ Basé sur RxJS/Observables
// ❌ async pipe dépréciée avec Zoneless Angular
// ❌ Ne profite pas des Signals Angular`);

  componentStoreCode = signal(`// ========================================
// @ngrx/component-store - Excellente solution !
// ========================================
import { ComponentStore } from '@ngrx/component-store';

@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {
  constructor() {
    super({ products: [], loading: false });
  }

  readonly products$ = this.select(state => state.products);

  readonly loadProducts = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() => this.api.getProducts().pipe(
        tap(products => this.patchState({ products }))
      ))
    )
  );
}

// Template :
// {{ products$ | async }}  ← async pipe requise

// ✅ Component-scoped par défaut
// ✅ Moins de boilerplate que NgRx Store
// ✅ Intégration native avec NgRx
// ❌ Basé sur RxJS/Observables
// ❌ async pipe dépréciée avec Zoneless Angular
// ❌ Ne profite pas des Signals Angular`);

  signalStoreCode = signal(`// ========================================
// @ngrx/signals - L'avenir avec les Signals
// ========================================
export const ProductsStore = signalStore(
  withState({ products: [] as Product[], loading: false }),
  withComputed(({ products }) => ({
    total: computed(() => products().length)
  })),
  withMethods((store, api = inject(ProductApi)) => ({
    loadProducts: rxMethod<void>(
      pipe(
        switchMap(() => api.getProducts().pipe(
          tap((products) => patchState(store, { products }))
        ))
      )
    )
  }))
);

// Template :
// {{ store.products() }}  ← Direct ! Pas d'async pipe !

// ✅ Exploite les Signals Angular natifs
// ✅ Réactivité automatique sans subscriptions
// ✅ Compatible Zoneless Angular par défaut
// ✅ Change detection optimisée
// ✅ Future-proof avec l'écosystème Angular`);
}
