import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.page').then(m => m.LandingPage)
  },
  {
    path: 'hello-world',
    title: 'Hello World',
    loadComponent: () => import('./presentations/hello-world/hello-world.presentation').then(m => m.HelloWorldPresentation)
  },
  {
    path: 'typed-forms',
    title: 'Typed Forms',
    loadComponent: () => import('./presentations/typed-forms/typed-forms.presentation').then(m => m.TypedFormsPresentation)
  },
  {
    path: 'signal-forms',
    title: 'Signal Forms',
    loadComponent: () => import('./presentations/signal-forms/signal-forms.presentation').then(m => m.SignalFormsPresentation)
  },
  {
    path: 'signal-store',
    title: 'Signal Store',
    loadComponent: () => import('./presentations/signal-store/signal-store.presentation').then(m => m.SignalStorePresentation)
  },
  {
    path: 'deferrable-views',
    title: 'Deferrable Views',
    loadComponent: () => import('./presentations/deferrable-views/deferrable-views.presentation').then(m => m.DeferrableViewsPresentation)
  },
  {
    path: 'signal',
    title: 'Signal',
    loadComponent: () => import('./presentations/signal/signal.presentation').then(m => m.SignalPresentation)
  },
  {
    path: 'rxjs-intro',
    title: 'RxJS Intro',
    loadComponent: () => import('./presentations/rxjs-intro/rxjs-intro.presentation').then(m => m.RxjsIntroPresentation)
  },
  {
    path: 'rxjs-advanced',
    title: 'RxJS Advanced',
    loadComponent: () => import('./presentations/rxjs-advanced/rxjs-advanced.presentation').then(m => m.RxjsAdvancedPresentation)
  },
  {
    path: 'signal-intro',
    title: 'Signal Intro',
    loadComponent: () => import('./presentations/signal-intro/signal-intro.presentation').then(m => m.SignalIntroPresentation)
  },
  {
    path: 'signal-advanced',
    title: 'Signal Advanced',
    loadComponent: () => import('./presentations/signal-advanced/signal-advanced.presentation').then(m => m.SignalAdvancedPresentation)
  },
  {
    path: 'angular-evolution',
    title: 'Angular Evolution',
    loadComponent: () => import('./presentations/angular-evolution/angular-evolution.presentation').then(m => m.AngularEvolutionPresentation)
  },
  {
    path: 'testing-intro',
    title: 'Testing Intro',
    loadComponent: () => import('./presentations/testing-intro/testing-intro.presentation').then(m => m.TestingIntroPresentation)
  }
];
