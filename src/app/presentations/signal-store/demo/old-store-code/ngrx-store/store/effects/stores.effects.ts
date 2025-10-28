import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { tapResponse } from '@ngrx/operators';
import { StoreApiService } from '../../../../common-code/services/store-api.service';
import * as StoresActions from '../actions/stores.actions';

@Injectable()
export class StoresEffects {
  private actions$ = inject(Actions);
  private storeApiService = inject(StoreApiService);

  loadStores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.loadStores),
      tap(() => console.log('%c⚡ [NgRx EFFECT]', 'color: #f59e0b; font-weight: bold', 'StoresEffects.loadStores$')),
      switchMap(() =>
        this.storeApiService.getStores().pipe(
          tap(() => console.log('%c🌐 [API CALL]', 'color: #8b5cf6; font-weight: bold', 'GET /stores')),
          tapResponse({
            next: () => console.log('%c✅ [NgRx/operators]', 'color: #10b981', 'tapResponse: success'),
            error: (error) => console.error('%c❌ [NgRx/operators]', 'color: #ef4444', 'tapResponse:', error)
          }),
          map(stores => StoresActions.loadStoresSuccess({ stores })),
          catchError(error => of(StoresActions.loadStoresFailure({ error: error.message })))
        )
      )
    )
  );
}
