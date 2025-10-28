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
// Setup SignalStore - Global (root)
// ========================================
export const UsersStore = signalStore(
  { providedIn: 'root' },  // ← Pour singleton global
  withState({
    users: [] as User[],
    loading: false,
    error: null as string | null
  }),
  withMethods(...),
  withComputed(...)
);

// ========================================
// Setup SignalStore - Lazy Loading
// ========================================
export const ProductsStore = signalStore(
  // Pas de providedIn ici !
  withState({ products: [] as Product[] }),
  withMethods(...),
  withComputed(...)
);

// Dans votre route lazy-loaded :
{
  path: 'products',
  loadComponent: () => import('./products/products.component')
    .then(m => m.ProductsComponent),
  providers: [ProductsStore]  // ← Provider au niveau route
}

// Ou dans un composant :
@Component({
  selector: 'app-products',
  providers: [ProductsStore]  // ← Provider au niveau composant
})
export class ProductsComponent {
  store = inject(ProductsStore);
}

// ✅ Zéro configuration centrale, flexible (root ou lazy)`);
}
