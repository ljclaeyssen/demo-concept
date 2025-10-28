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
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ carts, selectedCartId }) => ({
    selectedCart: computed(() => carts().find(c => c.id === selectedCartId()) || null)
  })),
  withMethods((store, cartApiService = inject(CartApiService)) => ({
    loadCartsByClient: rxMethod<number | null>(
      pipe(
        tap(() => patchState(store, { carts: [], selectedCartId: null })),
        switchMap((clientId) => {
          if (clientId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return cartApiService.getCartsByClient(clientId).pipe(
            tapResponse({
              next: (carts) => patchState(store, { carts, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          );
        })
      )
    ),

    selectCart(cartId: number | null) {
      patchState(store, { selectedCartId: cartId });
    },

    reset() {
      patchState(store, { carts: [], selectedCartId: null });
    }
  }))
);
