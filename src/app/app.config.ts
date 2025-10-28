import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { providePrimeNG } from 'primeng/config';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { reducers } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers';
import { StoresEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/stores.effects';
import { ClientsEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/clients.effects';
import { CartsEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/carts.effects';
import { ProductsEffects } from './presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    }),
    provideStore(reducers),
    provideEffects([StoresEffects, ClientsEffects, CartsEffects, ProductsEffects])
  ]
};
