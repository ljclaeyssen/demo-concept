import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-why-signals-slide',
  templateUrl: './why-signals.slide.html',
  styleUrl: './why-signals.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhySignalsSlide {
  beforeCode = signal(`// Avant : variables classiques
@Component({...})
export class CounterComponent {
  count = 0;  // Simple variable

  increment() {
    this.count++;
    // Angular doit vérifier TOUT le composant
    // pour savoir si quelque chose a changé
  }
}

// Problème : Angular ne sait pas QUOI a changé
// → Il vérifie tout, tout le temps
// → Performance non optimale`);

  afterCode = signal(`// Après : avec Signals
@Component({...})
export class CounterComponent {
  count = signal(0);  // Signal !

  increment() {
    this.count.update(n => n + 1);
    // Angular sait EXACTEMENT ce qui a changé
    // → Met à jour uniquement ce qui est nécessaire
  }
}

// Avantage : Angular sait précisément
// quelles parties du template mettre à jour
// → Performance optimale`);

  analogyCode = signal(`// Analogie : Newsletter vs Notification push

// Variable classique = Vérifier sa boîte mail
// → On vérifie régulièrement si y'a du nouveau
// → Même si rien n'a changé

// Signal = Notification push sur le téléphone
// → On est prévenu uniquement quand y'a du nouveau
// → Pas de vérification inutile`);
}
