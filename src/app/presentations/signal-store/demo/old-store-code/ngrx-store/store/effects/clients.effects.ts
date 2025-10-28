import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { ClientApiService } from '../../../../common-code/services/client-api.service';
import * as ClientsActions from '../actions/clients.actions';
import * as CartsActions from '../actions/carts.actions';
import * as StoresActions from '../actions/stores.actions';

@Injectable()
export class ClientsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private clientApiService = inject(ClientApiService);

  loadClientsOnStoreSelect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.selectStore),
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'ClientsEffects.loadClientsOnStoreSelect$')),
      switchMap(({ storeId }) => {
        if (storeId === null) {
          return of(ClientsActions.clearClients());
        }
        return of(ClientsActions.loadClients({ storeId }));
      })
    )
  );

  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.loadClients),
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'ClientsEffects.loadClients$')),
      switchMap(({ storeId }) =>
        this.clientApiService.getClientsByStore(storeId).pipe(
          tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /clients')),
          tapResponse({
            next: () => console.log('%c✅ [NgRx/operators]', 'color: #10b981', 'tapResponse: success'),
            error: (error) => console.error('%c❌ [NgRx/operators]', 'color: #ef4444', 'tapResponse:', error)
          }),
          map(clients => ClientsActions.loadClientsSuccess({ clients })),
          catchError(error => of(ClientsActions.loadClientsFailure({ error: error.message })))
        )
      )
    )
  );

  clearCartsOnClearClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.clearClients),
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'ClientsEffects.clearCartsOnClearClients$')),
      map(() => CartsActions.clearCarts())
    )
  );
}
