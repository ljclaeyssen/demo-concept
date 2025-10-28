import { createAction, props } from '@ngrx/store';
import { Store } from '../../../../common-code/models/store.model';

export const loadStores = createAction('[Stores] Load Stores');

export const loadStoresSuccess = createAction(
  '[Stores] Load Stores Success',
  props<{ stores: Store[] }>()
);

export const loadStoresFailure = createAction(
  '[Stores] Load Stores Failure',
  props<{ error: string }>()
);

export const selectStore = createAction(
  '[Stores] Select Store',
  props<{ storeId: number | null }>()
);
