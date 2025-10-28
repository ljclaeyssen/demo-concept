import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { tapResponse } from '@ngrx/operators';
import { ProductApiService } from '../../../../common-code/services/product-api.service';
import * as ProductsActions from '../actions/products.actions';
import * as CartsActions from '../actions/carts.actions';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productApiService = inject(ProductApiService);

  loadProductsOnCartSelect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.selectCart),
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'ProductsEffects.loadProductsOnCartSelect$')),
      switchMap(({ cartId }) => {
        if (cartId === null) {
          return of(ProductsActions.clearProducts());
        }
        return of(ProductsActions.loadProducts({ cartId }));
      })
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'ProductsEffects.loadProducts$')),
      switchMap(({ cartId }) =>
        this.productApiService.getProductsByCart(cartId).pipe(
          tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /products')),
          tapResponse({
            next: () => console.log('%c✅ [NgRx/operators]', 'color: #10b981', 'tapResponse: success'),
            error: (error) => console.error('%c❌ [NgRx/operators]', 'color: #ef4444', 'tapResponse:', error)
          }),
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductsActions.loadProductsFailure({ error: error.message })))
        )
      )
    )
  );
}
