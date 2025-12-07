import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.page').then(m => m.LandingPage)
  },
  {
    path: 'hello-world',
    loadComponent: () => import('./presentations/hello-world/hello-world.presentation').then(m => m.HelloWorldPresentation)
  },
  {
    path: 'typed-forms',
    loadComponent: () => import('./presentations/typed-forms/typed-forms.presentation').then(m => m.TypedFormsPresentation)
  },
  {
    path: 'signal-store',
    loadComponent: () => import('./presentations/signal-store/signal-store.presentation').then(m => m.SignalStorePresentation)
  },
  {
    path: 'deferrable-views',
    loadComponent: () => import('./presentations/deferrable-views/deferrable-views.presentation').then(m => m.DeferrableViewsPresentation)
  },
  {
    path: 'signal',
    loadComponent: () => import('./presentations/signal/signal.presentation').then(m => m.SignalPresentation)
  },
  {
    path: 'rxjs-intro',
    loadComponent: () => import('./presentations/rxjs-intro/rxjs-intro.presentation').then(m => m.RxjsIntroPresentation)
  },
  {
    path: 'rxjs-advanced',
    loadComponent: () => import('./presentations/rxjs-advanced/rxjs-advanced.presentation').then(m => m.RxjsAdvancedPresentation)
  },
  {
    path: 'signal-intro',
    loadComponent: () => import('./presentations/signal-intro/signal-intro.presentation').then(m => m.SignalIntroPresentation)
  },
  {
    path: 'signal-advanced',
    loadComponent: () => import('./presentations/signal-advanced/signal-advanced.presentation').then(m => m.SignalAdvancedPresentation)
  },
  {
    path: 'angular-evolution',
    loadComponent: () => import('./presentations/angular-evolution/angular-evolution.presentation').then(m => m.AngularEvolutionPresentation)
  }
];
