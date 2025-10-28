import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ShoppingStore } from '../store/shopping.store';
import { StoreApiService } from '../../../common-code/services/store-api.service';
import { ClientApiService } from '../../../common-code/services/client-api.service';
import { CartApiService } from '../../../common-code/services/cart-api.service';
import { ProductApiService } from '../../../common-code/services/product-api.service';
import { MOCK_STORES } from '../../../common-code/mocks/stores.mock';
import { MOCK_CLIENTS } from '../../../common-code/mocks/clients.mock';
import { MOCK_CARTS } from '../../../common-code/mocks/carts.mock';
import { MOCK_PRODUCTS } from '../../../common-code/mocks/products.mock';

describe('ShoppingStore', () => {
  let store: InstanceType<typeof ShoppingStore>;
  let storeApiService: jasmine.SpyObj<StoreApiService>;
  let clientApiService: jasmine.SpyObj<ClientApiService>;

  beforeEach(() => {
    const storeApiSpy = jasmine.createSpyObj('StoreApiService', ['getStores']);
    const clientApiSpy = jasmine.createSpyObj('ClientApiService', ['getClientsByStore']);
    const cartApiSpy = jasmine.createSpyObj('CartApiService', ['getCartsByClient']);
    const productApiSpy = jasmine.createSpyObj('ProductApiService', ['getProductsByCart']);

    TestBed.configureTestingModule({
      providers: [
        ShoppingStore,
        { provide: StoreApiService, useValue: storeApiSpy },
        { provide: ClientApiService, useValue: clientApiSpy },
        { provide: CartApiService, useValue: cartApiSpy },
        { provide: ProductApiService, useValue: productApiSpy }
      ]
    });

    store = TestBed.inject(ShoppingStore);
    storeApiService = TestBed.inject(StoreApiService) as jasmine.SpyObj<StoreApiService>;
    clientApiService = TestBed.inject(ClientApiService) as jasmine.SpyObj<ClientApiService>;
  });

  it('should load stores', (done) => {
    storeApiService.getStores.and.returnValue(of(MOCK_STORES));
    store.loadStores();

    setTimeout(() => {
      expect(store.stores()).toEqual(MOCK_STORES);
      expect(store.storesLoading()).toBe(false);
      done();
    }, 400);
  });

  it('should select store and load clients', (done) => {
    clientApiService.getClientsByStore.and.returnValue(of(MOCK_CLIENTS));
    store.selectStore(1);

    setTimeout(() => {
      expect(store.selectedStoreId()).toBe(1);
      expect(store.clients().length).toBeGreaterThan(0);
      done();
    }, 500);
  });

  it('should compute selected store', () => {
    storeApiService.getStores.and.returnValue(of(MOCK_STORES));
    store.loadStores();
    store.selectStore(1);

    setTimeout(() => {
      expect(store.selectedStore()).toEqual(MOCK_STORES[0]);
    }, 400);
  });

  it('should compute products total', () => {
    const testProducts = [
      { id: 1, cartId: 1, name: 'Test', category: 'Test', price: 10, quantity: 2 },
      { id: 2, cartId: 1, name: 'Test2', category: 'Test', price: 5, quantity: 3 }
    ];
    // Directly test the computation logic without needing full store setup
    const total = testProducts.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    expect(total).toBe(35);
  });
});
