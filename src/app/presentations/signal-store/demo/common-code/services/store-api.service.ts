import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Store } from '../models/store.model';
import { MOCK_STORES } from '../mocks/stores.mock';

@Injectable({ providedIn: 'root' })
export class StoreApiService {
  getStores(): Observable<Store[]> {
    return of(MOCK_STORES).pipe(delay(300));
  }
}
