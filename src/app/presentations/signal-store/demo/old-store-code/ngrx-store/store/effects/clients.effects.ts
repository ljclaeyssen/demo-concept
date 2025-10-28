import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
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
      switchMap(({ storeId }) =>
        this.clientApiService.getClientsByStore(storeId).pipe(
          map(clients => ClientsActions.loadClientsSuccess({ clients })),
          catchError(error => of(ClientsActions.loadClientsFailure({ error: error.message })))
        )
      )
    )
  );

  clearCartsOnClearClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.clearClients),
      map(() => CartsActions.clearCarts())
    )
  );
}
