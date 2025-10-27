import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.page').then(m => m.LandingPage)
  },
  {
    path: 'hello-world',
    loadComponent: () => import('./presentations/hello-world/hello-world.presentation').then(m => m.HelloWorldPresentation)
  }
];
