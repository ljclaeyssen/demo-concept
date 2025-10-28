import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { tapResponse } from '@ngrx/operators';
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
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'CartsEffects.loadCartsOnClientSelect$')),
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
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'CartsEffects.loadCarts$')),
      switchMap(({ clientId }) =>
        this.cartApiService.getCartsByClient(clientId).pipe(
          tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /carts')),
          tapResponse({
            next: () => console.log('%c✅ [NgRx/operators]', 'color: #10b981', 'tapResponse: success'),
            error: (error) => console.error('%c❌ [NgRx/operators]', 'color: #ef4444', 'tapResponse:', error)
          }),
          map(carts => CartsActions.loadCartsSuccess({ carts })),
          catchError(error => of(CartsActions.loadCartsFailure({ error: error.message })))
        )
      )
    )
  );

  clearProductsOnClearCarts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.clearCarts),
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'CartsEffects.clearProductsOnClearCarts$')),
      map(() => ProductsActions.clearProducts())
    )
  );
}
