import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/product.model';
import { MOCK_PRODUCTS } from '../mocks/products.mock';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  getProductsByCart(cartId: number): Observable<Product[]> {
    const products = MOCK_PRODUCTS.filter(p => p.cartId === cartId);
    return of(products).pipe(delay(300));
  }
}
