import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-why-not-service-var-slide',
  templateUrl: './why-not-service-var.slide.html',
  styleUrl: './why-not-service-var.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhyNotServiceVarSlide {
  serviceVarCode = signal(`// CartService
@Injectable({ providedIn: 'root' })
export class CartService {
  cart: Item[] = [];  // Simple variable

  addItem(item: Item) {
    this.cart.push(item);
  }
}`);

  componentCode = signal(`// CartIconComponent
export class CartIconComponent {
  private cartService = inject(CartService);

  // ❌ Problème : cette valeur ne se met pas à jour !
  itemCount = this.cartService.cart.length;

  // 🤔 Comment savoir quand cart change ?
  // → Polling ? setInterval() ?
  // → Appeler une méthode refresh() partout ?
}`);

  observableServiceCode = signal(`// CartService avec Observable
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<Item[]>([]);
  cart$ = this.cartSubject.asObservable();

  addItem(item: Item) {
    const current = this.cartSubject.value;
    this.cartSubject.next([...current, item]);
  }
}`);

  observableComponentCode = signal(`// CartIconComponent
export class CartIconComponent {
  private cartService = inject(CartService);

  // ✅ Notifié automatiquement à chaque changement !
  itemCount$ = this.cartService.cart$.pipe(
    map(items => items.length)
  );
}

// Template : {{ itemCount$ | async }}`);
}
