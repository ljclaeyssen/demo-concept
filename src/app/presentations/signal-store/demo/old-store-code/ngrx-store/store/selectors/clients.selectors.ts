import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientsState } from '../reducers/clients.reducer';

export const selectClientsState = createFeatureSelector<ClientsState>('clients');

export const selectAllClients = createSelector(
  selectClientsState,
  (state: ClientsState) => state.clients
);

export const selectSelectedClientId = createSelector(
  selectClientsState,
  (state: ClientsState) => state.selectedClientId
);

export const selectSelectedClient = createSelector(
  selectAllClients,
  selectSelectedClientId,
  (clients, selectedId) => clients.find(c => c.id === selectedId) || null
);

export const selectClientsLoading = createSelector(
  selectClientsState,
  (state: ClientsState) => state.loading
);

export const selectClientsError = createSelector(
  selectClientsState,
  (state: ClientsState) => state.error
);
