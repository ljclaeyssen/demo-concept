import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../../common-code/models/product.model';
import * as ProductsActions from '../actions/products.actions';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductsActions.clearProducts, () => initialState)
);
