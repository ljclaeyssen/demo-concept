import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-boilerplate-nightmare-slide',
  templateUrl: './boilerplate-nightmare.slide.html',
  styleUrl: './boilerplate-nightmare.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoilerplateNightmareSlide {
  ngrxStoreCode = signal(`// ========================================
// ACTIONS (users.actions.ts)
// ========================================
export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: string }>()
);
export const addUser = createAction(
  '[Users] Add User',
  props<{ user: User }>()
);

// ========================================
// REDUCER (users.reducer.ts)
// ========================================
export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  }))
);

// ========================================
// SELECTORS (users.selectors.ts)
// ========================================
export const selectUsersState = createFeatureSelector<UsersState>('users');
export const selectUsers = createSelector(
  selectUsersState,
  state => state.users
);
export const selectLoading = createSelector(
  selectUsersState,
  state => state.loading
);
export const selectError = createSelector(
  selectUsersState,
  state => state.error
);

// ========================================
// EFFECTS (users.effects.ts)
// ========================================
@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error: error.message })))
        )
      )
    )
  );
}

// ========================================
// MODULE SETUP (app.config.ts)
// ========================================
provideStore({ users: usersReducer }),
provideEffects([UsersEffects])

// Total : 4 fichiers, ~100 lignes de code`);

  signalStoreCode = signal(`// ========================================
// TOUT EN UN SEUL FICHIER (users.store.ts)
// ========================================
export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState({
    users: [] as User[],
    loading: false,
    error: null as string | null
  }),
  withMethods((store, usersService = inject(UsersService)) => ({
    async loadUsers() {
      patchState(store, { loading: true });
      try {
        const users = await firstValueFrom(usersService.getUsers());
        patchState(store, { users, loading: false });
      } catch (error) {
        patchState(store, {
          error: error.message,
          loading: false
        });
      }
    },
    addUser(user: User) {
      patchState(store, { users: [...store.users(), user] });
    }
  }))
);

// Total : 1 fichier, ~25 lignes de code`);
}
