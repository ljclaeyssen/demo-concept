import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Client } from '../models/client.model';
import { MOCK_CLIENTS } from '../mocks/clients.mock';

@Injectable({ providedIn: 'root' })
export class ClientApiService {
  getClientsByStore(storeId: number): Observable<Client[]> {
    const clients = MOCK_CLIENTS.filter(c => c.storeId === storeId);
    return of(clients).pipe(delay(400));
  }
}
