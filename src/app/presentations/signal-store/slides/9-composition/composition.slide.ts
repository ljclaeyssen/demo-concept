import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-composition-slide',
  templateUrl: './composition.slide.html',
  styleUrl: './composition.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompositionSlide {
  ngrxStoreCode = signal(`// ========================================
// NgRx Store : Zéro composition
// ========================================
// Impossible de réutiliser du comportement commun

// Pour chaque store, recréer :
// - Les actions de loading (start, success, failure)
// - Les reducers de loading
// - Les selectors de loading
// - Les effects

// users.actions.ts
export const loadUsers = createAction('[Users] Load');
export const loadUsersSuccess = createAction('[Users] Load Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[Users] Load Failure', props<{ error: string }>());

// products.actions.ts
export const loadProducts = createAction('[Products] Load');
export const loadProductsSuccess = createAction('[Products] Load Success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Products] Load Failure', props<{ error: string }>());

// cart.actions.ts
export const loadCart = createAction('[Cart] Load');
export const loadCartSuccess = createAction('[Cart] Load Success', props<{ items: CartItem[] }>());
export const loadCartFailure = createAction('[Cart] Load Failure', props<{ error: string }>());

// ... et répéter pour reducers + effects + selectors

// ❌ Copier/coller le même pattern partout`);

  signalStoreCode = signal(`// ========================================
// SignalStore : Composition avec features
// ========================================
// Créer des features réutilisables

// Créer une feature "loadable" réutilisable
function withLoadable() {
  return signalStoreFeature(
    withState({ loading: false, error: null as string | null }),
    withComputed((state) => ({
      isLoading: computed(() => state.loading())
    })),
    withMethods((store) => ({
      setLoading(loading: boolean) {
        patchState(store, { loading, error: null });
      },
      setError(error: string) {
        patchState(store, { loading: false, error });
      }
    }))
  );
}

// Utiliser partout !
export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState({ users: [] as User[] }),
  withLoadable()  // ← Réutilisé !
);

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState({ products: [] as Product[] }),
  withLoadable()  // ← Réutilisé !
);

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState({ items: [] as CartItem[] }),
  withLoadable()  // ← Réutilisé !
);

// ✅ Define once, use everywhere !`);
}
