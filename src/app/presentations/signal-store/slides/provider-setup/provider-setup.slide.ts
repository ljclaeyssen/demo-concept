import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-provider-setup-slide',
  templateUrl: './provider-setup.slide.html',
  styleUrl: './provider-setup.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderSetupSlide {
  ngrxStoreCode = signal(`// ========================================
// Setup NgRx Store dans app.config.ts
// ========================================
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuration du root store
    provideStore({
      users: usersReducer,
      products: productsReducer,
      cart: cartReducer
    }),

    // Configuration des effects
    provideEffects([
      UsersEffects,
      ProductsEffects,
      CartEffects
    ]),

    // Configuration des devtools
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    }),

    // ... autres providers
  ]
};

// ========================================
// Pour chaque feature, ajouter :
// ========================================
// 1. Le reducer dans provideStore
// 2. Les effects dans provideEffects
// 3. Créer les fichiers actions/reducer/effects/selectors

// ❌ Setup centralisé = fichier config qui grossit`);

  signalStoreCode = signal(`// ========================================
// Setup SignalStore
// ========================================
export const UsersStore = signalStore(
  { providedIn: 'root' },  // ← C'est tout !
  withState({
    users: [] as User[],
    loading: false,
    error: null as string | null
  }),
  withMethods(...),
  withComputed(...)
);

// ========================================
// C'est fini !
// ========================================
// Pas besoin de toucher app.config.ts
// Pas besoin de configuration centrale
// Chaque store se configure lui-même

// Pour ajouter un nouveau store :
export const ProductsStore = signalStore(
  { providedIn: 'root' },  // ← Juste ça
  withState({ products: [] as Product[] })
);

export const CartStore = signalStore(
  { providedIn: 'root' },  // ← Toujours ça
  withState({ items: [] as CartItem[] })
);

// ✅ Zéro configuration centrale, zéro boilerplate`);
}
