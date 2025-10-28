import { createReducer, on } from '@ngrx/store';
import { Client } from '../../../../common-code/models/client.model';
import * as ClientsActions from '../actions/clients.actions';

export interface ClientsState {
  clients: Client[];
  selectedClientId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ClientsState = {
  clients: [],
  selectedClientId: null,
  loading: false,
  error: null
};

export const clientsReducer = createReducer(
  initialState,
  on(ClientsActions.loadClients, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ClientsActions.loadClientsSuccess, (state, { clients }) => ({
    ...state,
    clients,
    loading: false
  })),
  on(ClientsActions.loadClientsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ClientsActions.selectClient, (state, { clientId }) => ({
    ...state,
    selectedClientId: clientId
  })),
  on(ClientsActions.clearClients, () => initialState)
);
