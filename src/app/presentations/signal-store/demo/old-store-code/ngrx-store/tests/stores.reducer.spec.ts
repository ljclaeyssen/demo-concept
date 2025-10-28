import { storesReducer, initialState } from '../store/reducers/stores.reducer';
import * as StoresActions from '../store/actions/stores.actions';
import { MOCK_STORES } from '../../../../common-code/mocks/stores.mock';

describe('Stores Reducer', () => {
  it('should return initial state', () => {
    const action = { type: 'Unknown' };
    const state = storesReducer(undefined, action as any);
    expect(state).toBe(initialState);
  });

  it('should set loading to true on loadStores', () => {
    const action = StoresActions.loadStores();
    const state = storesReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should load stores on success', () => {
    const action = StoresActions.loadStoresSuccess({ stores: MOCK_STORES });
    const state = storesReducer(initialState, action);
    expect(state.stores).toEqual(MOCK_STORES);
    expect(state.loading).toBe(false);
  });

  it('should set error on failure', () => {
    const error = 'Load failed';
    const action = StoresActions.loadStoresFailure({ error });
    const state = storesReducer(initialState, action);
    expect(state.error).toBe(error);
    expect(state.loading).toBe(false);
  });

  it('should select store', () => {
    const action = StoresActions.selectStore({ storeId: 1 });
    const state = storesReducer(initialState, action);
    expect(state.selectedStoreId).toBe(1);
  });
});
