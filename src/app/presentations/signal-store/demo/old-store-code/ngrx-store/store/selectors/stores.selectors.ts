import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoresState } from '../reducers/stores.reducer';

export const selectStoresState = createFeatureSelector<StoresState>('stores');

export const selectAllStores = createSelector(
  selectStoresState,
  (state: StoresState) => state.stores
);

export const selectSelectedStoreId = createSelector(
  selectStoresState,
  (state: StoresState) => state.selectedStoreId
);

export const selectSelectedStore = createSelector(
  selectAllStores,
  selectSelectedStoreId,
  (stores, selectedId) => stores.find(s => s.id === selectedId) || null
);

export const selectStoresLoading = createSelector(
  selectStoresState,
  (state: StoresState) => state.loading
);

export const selectStoresError = createSelector(
  selectStoresState,
  (state: StoresState) => state.error
);
