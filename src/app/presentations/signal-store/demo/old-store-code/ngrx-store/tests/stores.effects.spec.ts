import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { StoresEffects } from '../store/effects/stores.effects';
import { StoreApiService } from '../../../../common-code/services/store-api.service';
import * as StoresActions from '../store/actions/stores.actions';
import { MOCK_STORES } from '../../../../common-code/mocks/stores.mock';

describe('StoresEffects', () => {
  let actions$: Observable<any>;
  let effects: StoresEffects;
  let storeApiService: jasmine.SpyObj<StoreApiService>;

  beforeEach(() => {
    const storeApiServiceSpy = jasmine.createSpyObj('StoreApiService', ['getStores']);

    TestBed.configureTestingModule({
      providers: [
        StoresEffects,
        provideMockActions(() => actions$),
        { provide: StoreApiService, useValue: storeApiServiceSpy }
      ]
    });

    effects = TestBed.inject(StoresEffects);
    storeApiService = TestBed.inject(StoreApiService) as jasmine.SpyObj<StoreApiService>;
  });

  it('should dispatch loadStoresSuccess on success', (done) => {
    storeApiService.getStores.and.returnValue(of(MOCK_STORES));
    actions$ = of(StoresActions.loadStores());

    effects.loadStores$.subscribe(action => {
      expect(action).toEqual(StoresActions.loadStoresSuccess({ stores: MOCK_STORES }));
      done();
    });
  });

  it('should dispatch loadStoresFailure on error', (done) => {
    const error = new Error('API Error');
    storeApiService.getStores.and.returnValue(throwError(() => error));
    actions$ = of(StoresActions.loadStores());

    effects.loadStores$.subscribe(action => {
      expect(action).toEqual(StoresActions.loadStoresFailure({ error: error.message }));
      done();
    });
  });
});
