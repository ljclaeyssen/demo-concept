import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-observer-pattern-slide',
  templateUrl: './observer-pattern.slide.html',
  styleUrl: './observer-pattern.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObserverPatternSlide {
  observerCode = signal(`// L'Observer : celui qui reçoit les données
const monObserver = {
  next: (valeur) => {
    console.log('Reçu :', valeur);
  },
  error: (erreur) => {
    console.error('Erreur :', erreur);
  },
  complete: () => {
    console.log('Flux terminé !');
  }
};`);

  subscribeCode = signal(`// S'abonner à un Observable
const subscription = monObservable$.subscribe(monObserver);

// Version simplifiée (juste next)
monObservable$.subscribe(valeur => {
  console.log('Reçu :', valeur);
});

// Version complète inline
monObservable$.subscribe({
  next: v => console.log(v),
  error: e => console.error(e),
  complete: () => console.log('Fini')
});`);
}
