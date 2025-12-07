import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-state-management-slide',
  templateUrl: './state-management.slide.html',
  styleUrl: './state-management.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateManagementSlide {
  serviceCode = signal(`@Injectable({ providedIn: 'root' })
export class UserService {
  // État privé avec BehaviorSubject
  private userSubject = new BehaviorSubject<User | null>(null);

  // Observable public (lecture seule)
  user$ = this.userSubject.asObservable();

  // Dérivés avec pipe
  isLoggedIn$ = this.user$.pipe(map(u => u !== null));
  userName$ = this.user$.pipe(map(u => u?.name ?? 'Invité'));

  login(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }
}`);

  componentCode = signal(`@Component({
  template: \`
    @if (isLoggedIn$ | async) {
      <p>Bienvenue {{ userName$ | async }} !</p>
      <button (click)="logout()">Déconnexion</button>
    } @else {
      <button (click)="login()">Connexion</button>
    }
  \`
})
export class HeaderComponent {
  private userService = inject(UserService);

  isLoggedIn$ = this.userService.isLoggedIn$;
  userName$ = this.userService.userName$;

  login() {
    this.userService.login({ id: 1, name: 'Alice' });
  }

  logout() {
    this.userService.logout();
  }
}`);

  cartServiceCode = signal(`@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();
  itemCount$ = this.cart$.pipe(map(items => items.length));
  total$ = this.cart$.pipe(
    map(items => items.reduce((sum, i) => sum + i.price, 0))
  );

  addItem(item: CartItem) {
    const current = this.cartSubject.getValue();
    this.cartSubject.next([...current, item]);
  }

  removeItem(id: string) {
    const current = this.cartSubject.getValue();
    this.cartSubject.next(current.filter(i => i.id !== id));
  }
}`);
}
