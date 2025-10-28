import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-typescript-inference-slide',
  templateUrl: './typescript-inference.slide.html',
  styleUrl: './typescript-inference.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeScriptInferenceSlide {
  ngrxStoreCode = signal(`// ========================================
// NgRx Store : Typage manuel partout
// ========================================

// 1. Typer l'interface du state
export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// 2. Typer le state initial
const initialState: UsersState = {
  users: [],
  loading: false,
  error: null
};

// 3. Typer chaque selector
export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersState): User[] => state.users
);

export const selectLoading = createSelector(
  selectUsersState,
  (state: UsersState): boolean => state.loading
);

// 4. Typer dans le component
export class UsersComponent {
  private readonly store = inject(Store);
  users$: Observable<User[]> = this.store.select(selectUsers);
  loading$: Observable<boolean> = this.store.select(selectLoading);
}

// ❌ Typage manuel partout
// ❌ Risque d'incohérence
// ❌ Maintenance difficile`);

  signalStoreCode = signal(`// ========================================
// SignalStore : Inférence automatique
// ========================================
export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState({
    users: [] as User[],
    loading: false,
    error: null as string | null
  }),
  withComputed((store) => ({
    activeUsers: computed(() =>
      store.users().filter(u => u.isActive)
    )
  })),
  withMethods((store) => ({
    addUser(user: User) {
      patchState(store, { users: [...store.users(), user] });
    }
  }))
);

// Dans le component
export class UsersComponent {
  private readonly usersStore = inject(UsersStore);
  users = this.usersStore.users;  // ← Type inféré : Signal<User[]>
  loading = this.usersStore.loading;  // ← Type inféré : Signal<boolean>
  activeUsers = this.usersStore.activeUsers;  // ← Type inféré : Signal<User[]>
}

// ✅ TypeScript infère TOUT automatiquement
// ✅ Zéro typage manuel
// ✅ Impossible d'avoir une incohérence`);
}
