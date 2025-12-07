import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-combination-operators-slide',
  templateUrl: './combination-operators.slide.html',
  styleUrl: './combination-operators.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombinationOperatorsSlide {
  combineLatestCode = signal(`// combineLatest : émet quand N'IMPORTE QUEL source émet
// Attend au moins une valeur de chaque source
const user$ = this.userService.user$;
const settings$ = this.settingsService.settings$;

combineLatest([user$, settings$]).pipe(
  map(([user, settings]) => ({
    name: user.name,
    theme: settings.theme
  }))
).subscribe(data => console.log(data));

// 📌 Cas d'usage : formulaire avec plusieurs sources,
// affichage qui dépend de plusieurs états`);

  withLatestFromCode = signal(`// withLatestFrom : prend la dernière valeur d'une autre source
// Émet SEULEMENT quand la source principale émet
this.saveButton$.pipe(
  withLatestFrom(this.formValue$),
  map(([click, formValue]) => formValue)
).subscribe(data => this.save(data));

// 📌 Cas d'usage : action utilisateur + état actuel
// Le bouton déclenche, le formulaire fournit les données`);

  forkJoinCode = signal(`// forkJoin : attend que TOUTES les sources complètent
// Émet un tableau avec la dernière valeur de chaque source
forkJoin({
  user: this.http.get('/api/user'),
  orders: this.http.get('/api/orders'),
  settings: this.http.get('/api/settings')
}).subscribe(({ user, orders, settings }) => {
  // Toutes les requêtes sont terminées !
  this.initPage(user, orders, settings);
});

// 📌 Cas d'usage : charger plusieurs données au démarrage,
// attendre plusieurs appels HTTP parallèles`);

  mergeCode = signal(`// merge : fusionne plusieurs flux en un seul
// Émet les valeurs de toutes les sources
const clicks$ = fromEvent(btn1, 'click');
const touches$ = fromEvent(btn2, 'click');

merge(clicks$, touches$).subscribe(() => {
  console.log('Action déclenchée !');
});

// 📌 Cas d'usage : plusieurs sources d'événements similaires,
// unifier des actions différentes`);
}
