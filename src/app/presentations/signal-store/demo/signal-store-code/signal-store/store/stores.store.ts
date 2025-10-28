import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, withHooks, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, EMPTY } from 'rxjs';
import { Store } from '../../../common-code/models/store.model';
import { StoreApiService } from '../../../common-code/services/store-api.service';

interface StoresState {
  stores: Store[];
  selectedStoreId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: StoresState = {
  stores: [],
  selectedStoreId: null,
  loading: false,
  error: null
};

export const StoresStore = signalStore(
  withState(initialState),
  withComputed(({ stores, selectedStoreId }) => ({
    selectedStore: computed(() => stores().find(s => s.id === selectedStoreId()) || null)
  })),
  withMethods((store, storeApiService = inject(StoreApiService)) => ({
    loadStores: rxMethod<void>(
      pipe(
        tap(() => {
          console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'StoresStore.loadStores()');
          patchState(store, { loading: true, error: null });
        }),
        switchMap(() =>
          storeApiService.getStores().pipe(
            tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /stores')),
            tap((stores) => patchState(store, { stores, loading: false })),
            catchError((error: Error) => {
              patchState(store, { error: error.message, loading: false });
              return EMPTY;
            })
          )
        )
      )
    ),

    selectStore(storeId: number | null) {
      console.log('%c⚡ [Signal Store]', 'color: #10b981; font-weight: bold', 'StoresStore.selectStore()');
      patchState(store, { selectedStoreId: storeId });
    }
  })),
  withHooks({
    onInit(store) {
      store.loadStores();
    }
  })
);
