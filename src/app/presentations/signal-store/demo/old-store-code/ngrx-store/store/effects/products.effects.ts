import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
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
      switchMap(({ cartId }) =>
        this.productApiService.getProductsByCart(cartId).pipe(
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductsActions.loadProductsFailure({ error: error.message })))
        )
      )
    )
  );
}
