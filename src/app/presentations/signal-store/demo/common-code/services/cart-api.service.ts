import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Cart } from '../models/cart.model';
import { MOCK_CARTS } from '../mocks/carts.mock';

@Injectable({ providedIn: 'root' })
export class CartApiService {
  getCartsByClient(clientId: number): Observable<Cart[]> {
    const carts = MOCK_CARTS.filter(c => c.clientId === clientId);
    return of(carts).pipe(delay(350));
  }
}
