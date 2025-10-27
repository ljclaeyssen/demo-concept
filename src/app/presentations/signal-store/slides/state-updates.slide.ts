import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-state-updates-slide',
  templateUrl: './state-updates.slide.html',
  styleUrl: './state-updates.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateUpdatesSlide {
  ngrxStoreCode = signal(`// ========================================
// 1. Dans le component (users.component.ts)
// ========================================
private store = inject(Store);

addUser(user: User) {
  this.store.dispatch(addUser({ user }));
}

updateUserName(id: string, name: string) {
  this.store.dispatch(updateUserName({ id, name }));
}

deleteUser(id: string) {
  this.store.dispatch(deleteUser({ id }));
}

// ========================================
// 2. Créer les actions (users.actions.ts)
// ========================================
export const addUser = createAction(
  '[Users] Add User',
  props<{ user: User }>()
);
export const updateUserName = createAction(
  '[Users] Update User Name',
  props<{ id: string; name: string }>()
);
export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ id: string }>()
);

// ========================================
// 3. Ajouter les reducers (users.reducer.ts)
// ========================================
export const usersReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  })),
  on(updateUserName, (state, { id, name }) => ({
    ...state,
    users: state.users.map(u =>
      u.id === id ? { ...u, name } : u
    )
  })),
  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id)
  }))
);

// ❌ 3 fichiers différents pour CHAQUE modification !`);

  signalStoreCode = signal(`// ========================================
// Dans le component (users.component.ts)
// ========================================
private usersStore = inject(UsersStore);

addUser(user: User) {
  this.usersStore.addUser(user);
}

updateUserName(id: string, name: string) {
  this.usersStore.updateUserName(id, name);
}

deleteUser(id: string) {
  this.usersStore.deleteUser(id);
}

// ========================================
// Dans le store (users.store.ts)
// ========================================
withMethods((store) => ({
  addUser(user: User) {
    patchState(store, {
      users: [...store.users(), user]
    });
  },
  updateUserName(id: string, name: string) {
    patchState(store, {
      users: store.users().map(u =>
        u.id === id ? { ...u, name } : u
      )
    });
  },
  deleteUser(id: string) {
    patchState(store, {
      users: store.users().filter(u => u.id !== id)
    });
  }
}))

// ✅ 1 seul fichier, logique au même endroit !`);
}
