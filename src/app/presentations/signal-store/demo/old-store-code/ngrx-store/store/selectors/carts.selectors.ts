import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartsState } from '../reducers/carts.reducer';

export const selectCartsState = createFeatureSelector<CartsState>('carts');

export const selectAllCarts = createSelector(
  selectCartsState,
  (state: CartsState) => state.carts
);

export const selectSelectedCartId = createSelector(
  selectCartsState,
  (state: CartsState) => state.selectedCartId
);

export const selectSelectedCart = createSelector(
  selectAllCarts,
  selectSelectedCartId,
  (carts, selectedId) => carts.find(c => c.id === selectedId) || null
);

export const selectCartsLoading = createSelector(
  selectCartsState,
  (state: CartsState) => state.loading
);

export const selectCartsError = createSelector(
  selectCartsState,
  (state: CartsState) => state.error
);
