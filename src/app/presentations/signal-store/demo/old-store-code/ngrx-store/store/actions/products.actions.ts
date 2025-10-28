import { createAction, props } from '@ngrx/store';
import { Product } from '../../../../common-code/models/product.model';

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ cartId: number }>()
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

export const clearProducts = createAction('[Products] Clear Products');
