import { createAction, props } from '@ngrx/store';
import { Cart } from '../../../../common-code/models/cart.model';

export const loadCarts = createAction(
  '[Carts] Load Carts',
  props<{ clientId: number }>()
);

export const loadCartsSuccess = createAction(
  '[Carts] Load Carts Success',
  props<{ carts: Cart[] }>()
);

export const loadCartsFailure = createAction(
  '[Carts] Load Carts Failure',
  props<{ error: string }>()
);

export const selectCart = createAction(
  '[Carts] Select Cart',
  props<{ cartId: number | null }>()
);

export const clearCarts = createAction('[Carts] Clear Carts');
