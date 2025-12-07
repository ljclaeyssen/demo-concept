import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-signal-store-slide',
  templateUrl: './signal-store.slide.html',
  styleUrl: './signal-store.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalStoreSlide {
  storeServiceCode = signal(`interface AppState {
  user: User | null;
  cart: CartItem[];
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  // État privé avec signal
  private state = signal<AppState>({
    user: null,
    cart: [],
    loading: false
  });

  // Sélecteurs (lecture seule)
  user = computed(() => this.state().user);
  cart = computed(() => this.state().cart);
  loading = computed(() => this.state().loading);

  // Sélecteurs dérivés
  cartTotal = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );
  cartCount = computed(() => this.cart().length);
  isLoggedIn = computed(() => this.user() !== null);

  // Actions
  setUser(user: User | null) {
    this.state.update(s => ({ ...s, user }));
  }

  addToCart(item: CartItem) {
    this.state.update(s => ({
      ...s,
      cart: [...s.cart, item]
    }));
  }

  removeFromCart(id: string) {
    this.state.update(s => ({
      ...s,
      cart: s.cart.filter(item => item.id !== id)
    }));
  }

  setLoading(loading: boolean) {
    this.state.update(s => ({ ...s, loading }));
  }
}`);

  usageCode = signal(`@Component({
  template: \`
    <header>
      @if (store.isLoggedIn()) {
        <span>{{ store.user()?.name }}</span>
        <span class="badge">{{ store.cartCount() }}</span>
      }
    </header>

    <main>
      @if (store.loading()) {
        <app-spinner />
      }

      @for (item of store.cart(); track item.id) {
        <div class="cart-item">
          {{ item.name }} - {{ item.price }}€
          <button (click)="remove(item.id)">×</button>
        </div>
      }

      <p>Total: {{ store.cartTotal() }}€</p>
    </main>
  \`
})
export class CartComponent {
  store = inject(StoreService);

  remove(id: string) {
    this.store.removeFromCart(id);
  }
}`);
}
