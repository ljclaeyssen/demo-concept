import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducers } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers';
import { loggerMetaReducer } from './presentations/signal-store/demo/old-store-code/ngrx-store/logger.meta-reducer';
import { StoresEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/stores.effects';
import { ClientsEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/clients.effects';
import { CartsEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/carts.effects';
import { ProductsEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/products.effects';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    }),
    // NgRx Store - Global (demonstrates pervasive nature)
    provideStore(reducers, {
      metaReducers: [loggerMetaReducer]
    }),
    provideEffects([StoresEffects, ClientsEffects, CartsEffects, ProductsEffects])
  ]
};
