import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, EMPTY } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Client } from '../../../common-code/models/client.model';
import { ClientApiService } from '../../../common-code/services/client-api.service';

interface ClientsState {
  clients: Client[];
  selectedClientId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: ClientsState = {
  clients: [],
  selectedClientId: null,
  loading: false,
  error: null
};

export const ClientsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ clients, selectedClientId }) => ({
    selectedClient: computed(() => clients().find(c => c.id === selectedClientId()) || null)
  })),
  withMethods((store, clientApiService = inject(ClientApiService)) => ({
    loadClientsByStore: rxMethod<number | null>(
      pipe(
        tap(() => patchState(store, { clients: [], selectedClientId: null })),
        switchMap((storeId) => {
          if (storeId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return clientApiService.getClientsByStore(storeId).pipe(
            tapResponse({
              next: (clients) => patchState(store, { clients, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          );
        })
      )
    ),

    selectClient(clientId: number | null) {
      patchState(store, { selectedClientId: clientId });
    },

    reset() {
      patchState(store, { clients: [], selectedClientId: null });
    }
  }))
);
