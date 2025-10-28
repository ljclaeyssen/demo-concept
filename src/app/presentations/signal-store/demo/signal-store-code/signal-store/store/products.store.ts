import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, EMPTY } from 'rxjs';
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
  withState(initialState),
  withComputed(({ products }) => ({
    total: computed(() => products().reduce((sum, p) => sum + (p.price * p.quantity), 0))
  })),
  withMethods((store, productApiService = inject(ProductApiService)) => ({
    loadProductsByCart: rxMethod<number | null>(
      pipe(
        tap(() => {
          console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'ProductsStore.loadProductsByCart()');
          patchState(store, { products: [] });
        }),
        switchMap((cartId) => {
          if (cartId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return productApiService.getProductsByCart(cartId).pipe(
            tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /products')),
            tap((products) => patchState(store, { products, loading: false })),
            catchError((error: Error) => {
              patchState(store, { error: error.message, loading: false });
              return EMPTY;
            })
          );
        })
      )
    ),

    reset() {
      console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'ProductsStore.reset()');
      patchState(store, { products: [] });
    }
  }))
);
