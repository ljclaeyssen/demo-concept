import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-computed-values-slide',
  templateUrl: './computed-values.slide.html',
  styleUrl: './computed-values.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComputedValuesSlide {
  ngrxStoreCode = signal(`// ========================================
// 1. Créer les selectors (users.selectors.ts)
// ========================================
export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectAllUsers = createSelector(
  selectUsersState,
  state => state.users
);

export const selectActiveUsers = createSelector(
  selectAllUsers,
  users => users.filter(u => u.isActive)
);

export const selectUserCount = createSelector(
  selectAllUsers,
  users => users.length
);

export const selectActiveUserCount = createSelector(
  selectActiveUsers,
  users => users.length
);

export const selectUserById = (id: string) => createSelector(
  selectAllUsers,
  users => users.find(u => u.id === id)
);

// ========================================
// 2. Dans le component (users.component.ts)
// ========================================
import {
  selectActiveUsers,
  selectUserCount,
  selectActiveUserCount,
  selectUserById
} from './users.selectors';

activeUsers$ = this.store.select(selectActiveUsers);
userCount$ = this.store.select(selectUserCount);
activeUserCount$ = this.store.select(selectActiveUserCount);

getUser(id: string) {
  return this.store.select(selectUserById(id));
}

// ❌ Fichier séparé + imports + observables partout !`);

  signalStoreCode = signal(`// ========================================
// Dans le store (users.store.ts)
// ========================================
export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState({
    users: [] as User[]
  }),
  withComputed((store) => ({
    activeUsers: computed(() =>
      store.users().filter(u => u.isActive)
    ),
    userCount: computed(() =>
      store.users().length
    ),
    activeUserCount: computed(() =>
      store.activeUsers().length
    ),
    getUserById: (id: string) => computed(() =>
      store.users().find(u => u.id === id)
    )
  }))
);

// ========================================
// Dans le component (users.component.ts)
// ========================================
private usersStore = inject(UsersStore);

// Accès direct aux computed signals
activeUsers = this.usersStore.activeUsers;
userCount = this.usersStore.userCount;
activeUserCount = this.usersStore.activeUserCount;

getUser(id: string) {
  return this.usersStore.getUserById(id);
}

// ✅ Tout au même endroit, signals natifs !`);
}
