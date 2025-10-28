import { ActionReducerMap } from '@ngrx/store';
import { storesReducer, StoresState } from './stores.reducer';
import { clientsReducer, ClientsState } from './clients.reducer';
import { cartsReducer, CartsState } from './carts.reducer';
import { productsReducer, ProductsState } from './products.reducer';

export interface AppState {
  stores: StoresState;
  clients: ClientsState;
  carts: CartsState;
  products: ProductsState;
}

export const reducers: ActionReducerMap<AppState> = {
  stores: storesReducer,
  clients: clientsReducer,
  carts: cartsReducer,
  products: productsReducer
};
