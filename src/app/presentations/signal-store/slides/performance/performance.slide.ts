import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-performance-slide',
  templateUrl: './performance.slide.html',
  styleUrl: './performance.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceSlide {
  ngrxStoreCode = signal(`// ========================================
// NgRx Store : Zone.js re-check tout
// ========================================
@Component({
  selector: 'app-users-list',
  template: \`
    @for (user of users$ | async; track user.id) {
      <div>{{ user.name }}</div>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  private readonly store = inject(Store);
  users$ = this.store.select(selectUsers);
}

// Quand le state change :
// 1. Observable émet
// 2. async pipe déclenche markForCheck()
// 3. Zone.js re-vérifie TOUT le component
// 4. Même si 1 seul user a changé
// 5. Re-render de TOUTE la liste

// ❌ Change detection sur tout le component
// ❌ Pas de granularité fine
// ❌ Performance dégradée sur grosses listes`);

  signalStoreCode = signal(`// ========================================
// SignalStore : Signals fine-grained
// ========================================
@Component({
  selector: 'app-users-list',
  template: \`
    @for (user of users(); track user.id) {
      <div>{{ user.name }}</div>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  private readonly usersStore = inject(UsersStore);
  users = this.usersStore.users;
}

// Quand le state change :
// 1. Signal émet
// 2. Angular met à jour UNIQUEMENT les bindings qui utilisent ce signal
// 3. Pas de re-check du component entier
// 4. Updates ultra-ciblés

// ✅ Updates fine-grained automatiques
// ✅ Pas de Zone.js
// ✅ Performance maximale`);
}
