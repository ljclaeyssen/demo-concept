import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-testing-slide',
  templateUrl: './testing.slide.html',
  styleUrl: './testing.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingSlide {
  ngrxStoreCode = signal(`// ========================================
// Tester le store NgRx tout seul
// ========================================
// ❌ IMPOSSIBLE sans mocker tout l'écosystème !

// Il faut tester via un component ou mocker :
// - Le store
// - Les reducers
// - Les effects
// - Les actions

import { provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

describe('Users Store', () => {
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            users: { users: [], loading: false, error: null }
          }
        })
      ]
    });
    store = TestBed.inject(MockStore);
  });

  it('should update state', () => {
    // ❌ On ne peut pas vraiment tester le store,
    // juste mocker son comportement
    store.setState({
      users: {
        users: [{ id: '1', name: 'John' }],
        loading: false,
        error: null
      }
    });

    // On teste le mock, pas le vrai store...
  });
});

// ❌ Besoin de TestBed + mocks même pour un test unitaire`);

  signalStoreCode = signal(`// ========================================
// Tester le SignalStore tout seul
// ========================================
// ✅ C'est juste une classe, on l'instancie direct !

import { TestBed } from '@angular/core/testing';

describe('Users Store', () => {
  let store: InstanceType<typeof UsersStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(UsersStore);
  });

  it('should add user', () => {
    const user = { id: '1', name: 'John' };

    store.addUser(user);

    expect(store.users()).toContain(user);
  });

  it('should update loading state', () => {
    patchState(store, { loading: true });

    expect(store.loading()).toBe(true);
  });

  it('should compute active users', () => {
    patchState(store, {
      users: [
        { id: '1', name: 'John', isActive: true },
        { id: '2', name: 'Jane', isActive: false }
      ]
    });

    expect(store.activeUsers().length).toBe(1);
  });
});

// ✅ Test unitaire pur, zéro mock, zéro setup !`);
}
