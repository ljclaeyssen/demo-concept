import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { AppState } from '../../old-store-code/ngrx-store/store/reducers';
import { selectAllStores, selectSelectedStoreId, selectSelectedStore, selectStoresLoading } from '../../old-store-code/ngrx-store/store/selectors/stores.selectors';
import { selectAllClients, selectSelectedClientId, selectSelectedClient, selectClientsLoading } from '../../old-store-code/ngrx-store/store/selectors/clients.selectors';
import { selectAllCarts, selectSelectedCartId, selectSelectedCart, selectCartsLoading } from '../../old-store-code/ngrx-store/store/selectors/carts.selectors';
import { selectAllProducts, selectProductsTotal, selectProductsLoading } from '../../old-store-code/ngrx-store/store/selectors/products.selectors';
import * as StoresActions from '../../old-store-code/ngrx-store/store/actions/stores.actions';
import * as ClientsActions from '../../old-store-code/ngrx-store/store/actions/clients.actions';
import * as CartsActions from '../../old-store-code/ngrx-store/store/actions/carts.actions';
import * as ProductsActions from '../../old-store-code/ngrx-store/store/actions/products.actions';
import { Store as StoreModel } from '../../common-code/models/store.model';
import { Client } from '../../common-code/models/client.model';
import { Cart } from '../../common-code/models/cart.model';
import { Product } from '../../common-code/models/product.model';

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './ngrx-demo.component.html',
  styleUrl: './ngrx-demo.component.scss',
  imports: [Select, FormsModule, AsyncPipe, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxDemoComponent implements OnInit {
  private readonly store = inject(Store<AppState>);

  // Observables from selectors
  stores$: Observable<StoreModel[]> = this.store.select(selectAllStores);
  selectedStoreId$: Observable<number | null> = this.store.select(selectSelectedStoreId);
  selectedStore$: Observable<StoreModel | null> = this.store.select(selectSelectedStore);
  storesLoading$: Observable<boolean> = this.store.select(selectStoresLoading);

  clients$: Observable<Client[]> = this.store.select(selectAllClients);
  selectedClientId$: Observable<number | null> = this.store.select(selectSelectedClientId);
  selectedClient$: Observable<Client | null> = this.store.select(selectSelectedClient);
  clientsLoading$: Observable<boolean> = this.store.select(selectClientsLoading);

  carts$: Observable<Cart[]> = this.store.select(selectAllCarts);
  selectedCartId$: Observable<number | null> = this.store.select(selectSelectedCartId);
  selectedCart$: Observable<Cart | null> = this.store.select(selectSelectedCart);
  cartsLoading$: Observable<boolean> = this.store.select(selectCartsLoading);

  products$: Observable<Product[]> = this.store.select(selectAllProducts);
  productsTotal$: Observable<number> = this.store.select(selectProductsTotal);
  productsLoading$: Observable<boolean> = this.store.select(selectProductsLoading);

  // For template bindings (needed for two-way binding with p-select)
  selectedStoreIdValue: number | null = null;
  selectedClientIdValue: number | null = null;
  selectedCartIdValue: number | null = null;

  ngOnInit() {
    // Dispatch initial load action
    this.store.dispatch(StoresActions.loadStores());

    // Subscribe to selected IDs for two-way binding
    this.selectedStoreId$.subscribe(id => this.selectedStoreIdValue = id);
    this.selectedClientId$.subscribe(id => this.selectedClientIdValue = id);
    this.selectedCartId$.subscribe(id => this.selectedCartIdValue = id);
  }

  onStoreChange(storeId: number | null) {
    this.store.dispatch(StoresActions.selectStore({ storeId }));
    if (storeId !== null) {
      this.store.dispatch(ClientsActions.loadClients({ storeId }));
    }
  }

  onClientChange(clientId: number | null) {
    this.store.dispatch(ClientsActions.selectClient({ clientId }));
    if (clientId !== null) {
      this.store.dispatch(CartsActions.loadCarts({ clientId }));
    }
  }

  onCartChange(cartId: number | null) {
    this.store.dispatch(CartsActions.selectCart({ cartId }));
    if (cartId !== null) {
      this.store.dispatch(ProductsActions.loadProducts({ cartId }));
    }
  }
}
