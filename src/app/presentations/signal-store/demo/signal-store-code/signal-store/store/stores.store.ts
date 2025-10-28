import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, withHooks, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
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
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ stores, selectedStoreId }) => ({
    selectedStore: computed(() => stores().find(s => s.id === selectedStoreId()) || null)
  })),
  withMethods((store, storeApiService = inject(StoreApiService)) => ({
    loadStores: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          storeApiService.getStores().pipe(
            tapResponse({
              next: (stores) => patchState(store, { stores, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          )
        )
      )
    ),

    selectStore(storeId: number | null) {
      patchState(store, { selectedStoreId: storeId });
    }
  })),
  withHooks({
    onInit(store) {
      store.loadStores();
    }
  })
);
