import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-16-slide',
  templateUrl: './angular-16.slide.html',
  styleUrl: './angular-16.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular16Slide {
  signalsCode = signal(`// SIGNALS : La révolution commence (Developer Preview)
import { signal, computed, effect } from '@angular/core';

// État réactif
const count = signal(0);

// Valeur dérivée
const doubled = computed(() => count() * 2);

// Side effects
effect(() => console.log('Count:', count()));

// Modification
count.set(5);
count.update(n => n + 1);`);

  requiredInputsCode = signal(`// Required Inputs
@Component({...})
export class UserCard {
  // Erreur à la compilation si non fourni !
  @Input({ required: true }) userId!: string;

  // Avec transform
  @Input({ transform: booleanAttribute }) disabled = false;
}`);

  takeUntilDestroyedCode = signal(`// takeUntilDestroyed() : fini le ngOnDestroy !
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({...})
export class MyComponent {
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.http.get('/api/data').pipe(
      takeUntilDestroyed() // Auto-unsubscribe !
    ).subscribe(data => ...);
  }

  // Ou dans une méthode :
  loadData() {
    this.http.get('/api/data').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}`);
}
