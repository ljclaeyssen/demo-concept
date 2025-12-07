import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-18-slide',
  templateUrl: './angular-18.slide.html',
  styleUrl: './angular-18.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular18Slide {
  zonelessCode = signal(`// Zoneless Angular (Experimental)
// Plus besoin de Zone.js !
bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection()
  ]
});

// Avantages :
// - Bundle plus léger (-15kb)
// - Meilleure performance
// - Moins de "magie"
// - Debug plus simple`);

  routeRedirectCode = signal(`// RedirectCommand dans les guards
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);

  if (!auth.isLoggedIn()) {
    // Nouveau : retourner un RedirectCommand
    return new RedirectCommand(
      inject(Router).parseUrl('/login'),
      { skipLocationChange: true }
    );
  }
  return true;
};`);

  formsCode = signal(`// Forms : events observable
const form = new FormGroup({...});

// Nouveau : écouter tous les événements
form.events.subscribe(event => {
  if (event instanceof TouchedChangeEvent) {
    console.log('Form touched:', event.touched);
  }
  if (event instanceof ValueChangeEvent) {
    console.log('Value changed:', event.value);
  }
});`);
}
