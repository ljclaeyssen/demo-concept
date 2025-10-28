import { createReducer, on } from '@ngrx/store';
import { Store } from '../../../../common-code/models/store.model';
import * as StoresActions from '../actions/stores.actions';

export interface StoresState {
  stores: Store[];
  selectedStoreId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: StoresState = {
  stores: [],
  selectedStoreId: null,
  loading: false,
  error: null
};

export const storesReducer = createReducer(
  initialState,
  on(StoresActions.loadStores, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StoresActions.loadStoresSuccess, (state, { stores }) => ({
    ...state,
    stores,
    loading: false
  })),
  on(StoresActions.loadStoresFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(StoresActions.selectStore, (state, { storeId }) => ({
    ...state,
    selectedStoreId: storeId
  }))
);
