import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, EMPTY } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Product } from '../../../common-code/models/product.model';
import { ProductApiService } from '../../../common-code/services/product-api.service';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products }) => ({
    total: computed(() => products().reduce((sum, p) => sum + (p.price * p.quantity), 0))
  })),
  withMethods((store, productApiService = inject(ProductApiService)) => ({
    loadProductsByCart: rxMethod<number | null>(
      pipe(
        tap(() => patchState(store, { products: [] })),
        switchMap((cartId) => {
          if (cartId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return productApiService.getProductsByCart(cartId).pipe(
            tapResponse({
              next: (products) => patchState(store, { products, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          );
        })
      )
    ),

    reset() {
      patchState(store, { products: [] });
    }
  }))
);
