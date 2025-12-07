import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-practical-example-slide',
  templateUrl: './practical-example.slide.html',
  styleUrl: './practical-example.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticalExampleSlide {
  storeServiceCode = signal(`interface AppState {
  user: User | null;
  cart: CartItem[];
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  private state = new BehaviorSubject<AppState>({
    user: null,
    cart: [],
    loading: false
  });

  // Sélecteurs
  user$ = this.state.pipe(map(s => s.user));
  cart$ = this.state.pipe(map(s => s.cart));
  loading$ = this.state.pipe(map(s => s.loading));
  cartTotal$ = this.cart$.pipe(
    map(items => items.reduce((sum, i) => sum + i.price, 0))
  );

  // Actions
  setUser(user: User) {
    this.updateState({ user });
  }

  addToCart(item: CartItem) {
    const cart = [...this.state.getValue().cart, item];
    this.updateState({ cart });
  }

  private updateState(partial: Partial<AppState>) {
    this.state.next({ ...this.state.getValue(), ...partial });
  }
}`);

  usageCode = signal(`@Component({
  template: \`
    <header>
      @if (user$ | async; as user) {
        <span>{{ user.name }}</span>
        <span class="badge">{{ cartCount$ | async }}</span>
      }
    </header>

    <main>
      @if (loading$ | async) {
        <app-spinner />
      }
      <app-product-list (addToCart)="addToCart($event)" />
    </main>
  \`
})
export class AppComponent {
  private store = inject(StoreService);

  user$ = this.store.user$;
  cartCount$ = this.store.cart$.pipe(map(c => c.length));
  loading$ = this.store.loading$;

  addToCart(item: CartItem) {
    this.store.addToCart(item);
  }
}`);
}
