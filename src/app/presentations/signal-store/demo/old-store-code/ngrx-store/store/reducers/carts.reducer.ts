import { createReducer, on } from '@ngrx/store';
import { Cart } from '../../../../common-code/models/cart.model';
import * as CartsActions from '../actions/carts.actions';

export interface CartsState {
  carts: Cart[];
  selectedCartId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CartsState = {
  carts: [],
  selectedCartId: null,
  loading: false,
  error: null
};

export const cartsReducer = createReducer(
  initialState,
  on(CartsActions.loadCarts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CartsActions.loadCartsSuccess, (state, { carts }) => ({
    ...state,
    carts,
    loading: false
  })),
  on(CartsActions.loadCartsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(CartsActions.selectCart, (state, { cartId }) => ({
    ...state,
    selectedCartId: cartId
  })),
  on(CartsActions.clearCarts, () => initialState)
);
