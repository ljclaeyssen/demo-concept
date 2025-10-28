import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, EMPTY } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Cart } from '../../../common-code/models/cart.model';
import { CartApiService } from '../../../common-code/services/cart-api.service';

interface CartsState {
  carts: Cart[];
  selectedCartId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartsState = {
  carts: [],
  selectedCartId: null,
  loading: false,
  error: null
};

export const CartsStore = signalStore(
  withState(initialState),
  withComputed(({ carts, selectedCartId }) => ({
    selectedCart: computed(() => carts().find(c => c.id === selectedCartId()) || null)
  })),
  withMethods((store, cartApiService = inject(CartApiService)) => ({
    loadCartsByClient: rxMethod<number | null>(
      pipe(
        tap(() => {
          console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'CartsStore.loadCartsByClient()');
          patchState(store, { carts: [], selectedCartId: null });
        }),
        switchMap((clientId) => {
          if (clientId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return cartApiService.getCartsByClient(clientId).pipe(
            tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /carts')),
            tapResponse({
              next: (carts) => patchState(store, { carts, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          );
        })
      )
    ),

    selectCart(cartId: number | null) {
      console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'CartsStore.selectCart()');
      patchState(store, { selectedCartId: cartId });
    },

    reset() {
      console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'CartsStore.reset()');
      patchState(store, { carts: [], selectedCartId: null });
    }
  }))
);
