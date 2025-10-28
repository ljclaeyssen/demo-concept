import { createAction, props } from '@ngrx/store';
import { Client } from '../../../../common-code/models/client.model';

export const loadClients = createAction(
  '[Clients] Load Clients',
  props<{ storeId: number }>()
);

export const loadClientsSuccess = createAction(
  '[Clients] Load Clients Success',
  props<{ clients: Client[] }>()
);

export const loadClientsFailure = createAction(
  '[Clients] Load Clients Failure',
  props<{ error: string }>()
);

export const selectClient = createAction(
  '[Clients] Select Client',
  props<{ clientId: number | null }>()
);

export const clearClients = createAction('[Clients] Clear Clients');
