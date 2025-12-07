import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-observable-basics-slide',
  templateUrl: './observable-basics.slide.html',
  styleUrl: './observable-basics.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableBasicsSlide {
  createCode = signal(`import { Observable } from 'rxjs';

// Créer un Observable manuellement
const monObservable$ = new Observable(subscriber => {
  subscriber.next('Première valeur');   // Émettre une valeur
  subscriber.next('Deuxième valeur');
  subscriber.complete();                 // Terminer le flux
});

// Convention : $ à la fin du nom = Observable`);

  helpersCode = signal(`import { of, from, interval } from 'rxjs';

// of() : émet les valeurs une par une, puis complete
const nombres$ = of(1, 2, 3);

// from() : convertit un tableau/Promise en Observable
const fruits$ = from(['🍎', '🍊', '🍋']);

// interval() : émet un nombre toutes les X ms
const timer$ = interval(1000); // 0, 1, 2, 3...`);

  httpCode = signal(`import { HttpClient } from '@angular/common/http';

// Angular HttpClient retourne des Observables
const users$ = this.http.get<User[]>('/api/users');

// C'est un Observable "froid" :
// La requête n'est PAS envoyée tant qu'on ne subscribe pas !`);
}
