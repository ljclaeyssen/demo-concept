import {Component, ChangeDetectionStrategy, signal, inject} from '@angular/core';
import {Highlight} from 'ngx-highlightjs';
import {Button} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {NgrxFlowDialogComponent} from '../../demo/components/ngrx-flow-dialog/ngrx-flow-dialog.component';
import {SignalstoreFlowDialogComponent} from '../../demo/components/signalstore-flow-dialog/signalstore-flow-dialog.component';

@Component({
  selector: 'app-side-effects-slide',
  templateUrl: './side-effects.slide.html',
  styleUrl: './side-effects.slide.scss',
  imports: [Highlight, Button],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideEffectsSlide {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  showNgrxFlow = signal(false);
  showSignalStoreFlow = signal(false);

  openNgrxFlow() {
    this.ref = this.dialogService.open(NgrxFlowDialogComponent, {
      width: '50vw',
      modal: true
    });
  }

  openSignalStoreFlow() {
    this.ref = this.dialogService.open(SignalstoreFlowDialogComponent, {
      width: '40vw',
      modal: true
    });
  }
  ngrxStoreCode = signal(`// ========================================
// 1. Créer les actions (users.actions.ts)
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

// ========================================
// 2. Créer l'effect (users.effects.ts)
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
          catchError(error =>
            of(loadUsersFailure({ error: error.message }))
          )
        )
      )
    )
  );
}

// ========================================
// 3. Gérer dans le reducer (users.reducer.ts)
// ========================================
export const usersReducer = createReducer(
  initialState,
  on(loadUsers, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

// ========================================
// 4. Dans le component (users.component.ts)
// ========================================
private store = inject(Store);

loadUsers() {
  this.store.dispatch(loadUsers());
}

// ❌ 3 actions + effect + reducer = cauchemar absolu !`);

  signalStoreCode = signal(`// ========================================
// Dans le store (users.store.ts)
// ========================================
export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState({
    users: [] as User[],
    loading: false,
    error: null as string | null
  }),
  withMethods((store, usersService = inject(UsersService)) => ({
    loadUsers: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          usersService.getUsers().pipe(
            tapResponse({
              next: (users) => patchState(store, { users, loading: false }),
              error: (error: Error) =>
                patchState(store, { error: error.message, loading: false })
            })
          )
        )
      )
    )
  }))
);

// ========================================
// Dans le component (users.component.ts)
// ========================================
private usersStore = inject(UsersStore);

loadUsers() {
  this.usersStore.loadUsers();
}

// ✅ Tout en un seul endroit, logique claire !`);
}
