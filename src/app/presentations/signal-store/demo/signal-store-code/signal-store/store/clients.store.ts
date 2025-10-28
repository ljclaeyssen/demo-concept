import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, EMPTY } from 'rxjs';
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
  withState(initialState),
  withComputed(({ clients, selectedClientId }) => ({
    selectedClient: computed(() => clients().find(c => c.id === selectedClientId()) || null)
  })),
  withMethods((store, clientApiService = inject(ClientApiService)) => ({
    loadClientsByStore: rxMethod<number | null>(
      pipe(
        tap(() => {
          console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'ClientsStore.loadClientsByStore()');
          patchState(store, { clients: [], selectedClientId: null });
        }),
        switchMap((storeId) => {
          if (storeId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return clientApiService.getClientsByStore(storeId).pipe(
            tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /clients')),
            tap((clients) => patchState(store, { clients, loading: false })),
            catchError((error: Error) => {
              patchState(store, { error: error.message, loading: false });
              return EMPTY;
            })
          );
        })
      )
    ),

    selectClient(clientId: number | null) {
      console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'ClientsStore.selectClient()');
      patchState(store, { selectedClientId: clientId });
    },

    reset() {
      console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'ClientsStore.reset()');
      patchState(store, { clients: [], selectedClientId: null });
    }
  }))
);
