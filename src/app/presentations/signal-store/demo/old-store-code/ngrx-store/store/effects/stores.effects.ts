import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { StoreApiService } from '../../../../common-code/services/store-api.service';
import * as StoresActions from '../actions/stores.actions';

@Injectable()
export class StoresEffects {
  private actions$ = inject(Actions);
  private storeApiService = inject(StoreApiService);

  loadStores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.loadStores),
      switchMap(() =>
        this.storeApiService.getStores().pipe(
          map(stores => StoresActions.loadStoresSuccess({ stores })),
          catchError(error => of(StoresActions.loadStoresFailure({ error: error.message })))
        )
      )
    )
  );
}
