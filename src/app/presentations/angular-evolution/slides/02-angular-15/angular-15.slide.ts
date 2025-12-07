import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-15-slide',
  templateUrl: './angular-15.slide.html',
  styleUrl: './angular-15.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular15Slide {
  standaloneCode = signal(`// Avant : NgModule obligatoire
@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule, FormsModule],
  exports: [MyComponent]
})
export class MyModule {}

// Angular 15 : Standalone components !
@Component({
  standalone: true,  // Plus besoin de module
  imports: [CommonModule, FormsModule],
  template: \`...\`
})
export class MyComponent {}`);

  directiveCompositionCode = signal(`// Directive Composition API
// Combiner plusieurs directives sur un host
@Component({
  hostDirectives: [
    CdkDrag,
    {
      directive: CdkDropList,
      inputs: ['cdkDropListData: data']
    }
  ]
})
export class DraggableComponent {}`);

  routerCode = signal(`// Functional guards et resolvers
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  return auth.isLoggedIn() || inject(Router).createUrlTree(['/login']);
};

// Dans les routes
{
  path: 'admin',
  canActivate: [authGuard],  // Plus de classe !
  loadComponent: () => import('./admin.component')
}`);
}
