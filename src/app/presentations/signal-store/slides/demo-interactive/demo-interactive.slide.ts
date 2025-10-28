import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { StoresStore } from '../../demo/signal-store-code/signal-store/store/stores.store';
import { ClientsStore } from '../../demo/signal-store-code/signal-store/store/clients.store';
import { CartsStore } from '../../demo/signal-store-code/signal-store/store/carts.store';
import { ProductsStore } from '../../demo/signal-store-code/signal-store/store/products.store';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-demo-interactive-slide',
  templateUrl: './demo-interactive.slide.html',
  styleUrl: './demo-interactive.slide.scss',
  imports: [Select, FormsModule, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoInteractiveSlide {
  // Inject 4 separate stores - composition in action!
  private readonly storesStore = inject(StoresStore);
  private readonly clientsStore = inject(ClientsStore);
  private readonly cartsStore = inject(CartsStore);
  private readonly productsStore = inject(ProductsStore);

  // Expose stores state
  stores = this.storesStore.stores;
  selectedStoreId = this.storesStore.selectedStoreId;
  selectedStore = this.storesStore.selectedStore;
  storesLoading = this.storesStore.loading;

  clients = this.clientsStore.clients;
  selectedClientId = this.clientsStore.selectedClientId;
  selectedClient = this.clientsStore.selectedClient;
  clientsLoading = this.clientsStore.loading;

  carts = this.cartsStore.carts;
  selectedCartId = this.cartsStore.selectedCartId;
  selectedCart = this.cartsStore.selectedCart;
  cartsLoading = this.cartsStore.loading;

  products = this.productsStore.products;
  productsTotal = this.productsStore.total;
  productsLoading = this.productsStore.loading;

  // Orchestrate actions across stores
  onStoreChange(storeId: number | null) {
    this.storesStore.selectStore(storeId);
    this.clientsStore.reset();
    this.cartsStore.reset();
    this.productsStore.reset();
    if (storeId !== null) {
      this.clientsStore.loadClientsByStore(storeId);
    }
  }

  onClientChange(clientId: number | null) {
    this.clientsStore.selectClient(clientId);
    this.cartsStore.reset();
    this.productsStore.reset();
    if (clientId !== null) {
      this.cartsStore.loadCartsByClient(clientId);
    }
  }

  onCartChange(cartId: number | null) {
    this.cartsStore.selectCart(cartId);
    this.productsStore.reset();
    if (cartId !== null) {
      this.productsStore.loadProductsByCart(cartId);
    }
  }
}
