import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CartApiService } from '../../../../common-code/services/cart-api.service';
import * as CartsActions from '../actions/carts.actions';
import * as ClientsActions from '../actions/clients.actions';
import * as ProductsActions from '../actions/products.actions';

@Injectable()
export class CartsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private cartApiService = inject(CartApiService);

  loadCartsOnClientSelect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.selectClient),
      switchMap(({ clientId }) => {
        if (clientId === null) {
          return of(CartsActions.clearCarts());
        }
        return of(CartsActions.loadCarts({ clientId }));
      })
    )
  );

  loadCarts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.loadCarts),
      switchMap(({ clientId }) =>
        this.cartApiService.getCartsByClient(clientId).pipe(
          map(carts => CartsActions.loadCartsSuccess({ carts })),
          catchError(error => of(CartsActions.loadCartsFailure({ error: error.message })))
        )
      )
    )
  );

  clearProductsOnClearCarts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.clearCarts),
      map(() => ProductsActions.clearProducts())
    )
  );
}
