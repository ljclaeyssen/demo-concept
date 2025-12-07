import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-operators-intro-slide',
  templateUrl: './operators-intro.slide.html',
  styleUrl: './operators-intro.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorsIntroSlide {
  pipeCode = signal(`import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

const nombres$ = of(1, 2, 3, 4, 5);

nombres$.pipe(
  filter(n => n % 2 === 0),    // Garde 2, 4
  map(n => n * 10),            // Devient 20, 40
  tap(n => console.log(n))     // Debug: affiche
).subscribe(resultat => {
  console.log('Final:', resultat);
});
// Final: 20
// Final: 40`);

  commonOperatorsCode = signal(`// 🔄 Transformation
map(x => x * 2)           // Transformer chaque valeur
pluck('name')             // Extraire une propriété

// 🔍 Filtrage
filter(x => x > 10)       // Garder si condition vraie
take(5)                   // Prendre les 5 premiers
skip(2)                   // Ignorer les 2 premiers
distinctUntilChanged()    // Ignorer si identique au précédent

// 🐛 Debug
tap(x => console.log(x))  // Effet de bord sans modifier

// ⏱️ Timing
debounceTime(300)         // Attendre 300ms de pause
throttleTime(1000)        // Max 1 émission par seconde`);
}
