import { StoresState } from '../store/reducers/stores.reducer';
import { selectAllStores, selectSelectedStore, selectStoresLoading } from '../store/selectors/stores.selectors';
import { MOCK_STORES } from '../../../../common-code/mocks/stores.mock';

describe('Stores Selectors', () => {
  const initialState: StoresState = {
    stores: MOCK_STORES,
    selectedStoreId: 1,
    loading: false,
    error: null
  };

  it('should select all stores', () => {
    const result = selectAllStores.projector(initialState);
    expect(result).toEqual(MOCK_STORES);
  });

  it('should select selected store', () => {
    const result = selectSelectedStore.projector(MOCK_STORES, 1);
    expect(result).toEqual(MOCK_STORES[0]);
  });

  it('should return null when no store selected', () => {
    const result = selectSelectedStore.projector(MOCK_STORES, null);
    expect(result).toBeNull();
  });

  it('should select loading state', () => {
    const result = selectStoresLoading.projector(initialState);
    expect(result).toBe(false);
  });
});
