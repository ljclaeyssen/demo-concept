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
  }
];
