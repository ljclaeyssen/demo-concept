import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-21-slide',
  templateUrl: './angular-21.slide.html',
  styleUrl: './angular-21.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular21Slide {
  zonelessDefaultCode = signal(`// Zoneless PAR DÉFAUT ! 🎉
// Les nouvelles apps sont zoneless automatiquement

// Plus besoin de :
// provideZonelessChangeDetection()

// Si vous avez besoin de Zone.js (legacy) :
bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection() // Opt-in maintenant
  ]
});`);

  signalFormsCode = signal(`// Signal Forms : nouvelle façon de faire des formulaires
import { SignalForm } from '@angular/forms/signals';

const form = new SignalForm({
  name: 'John',
  email: ''
});

// Accès réactif aux valeurs
console.log(form.value().name); // 'John'

// Validation intégrée basée sur schema
// Plus de ControlValueAccessor !
// Plus de patchValue() !
// Sync automatique avec le template`);

  vitestCode = signal(`// Vitest : nouveau framework de test par défaut
// Remplace Karma (deprecated)

// vitest.config.ts
export default defineConfig({
  test: {
    include: ['src/**/*.spec.ts'],
    globals: true
  }
});

// Features :
// - Fake timers intégrés
// - Snapshots
// - Tests parallèles
// - Hot reloading des tests
// - Compatible Jest API`);
}
