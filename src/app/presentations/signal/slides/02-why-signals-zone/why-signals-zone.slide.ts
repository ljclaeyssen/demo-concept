import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-why-signals-zone-slide',
  templateUrl: './why-signals-zone.slide.html',
  styleUrl: './why-signals-zone.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhySignalsZoneSlide {
  beforeTemplate = signal(`<!-- Avant: Zone.js + Change Detection globale -->
<div class="user-profile">
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
</div>

<div class="stats">
  <span>Compteur: {{ counter }}</span>
</div>

<!-- Chaque modification déclenche CD sur TOUT le composant -->
<button (click)="counter = counter + 1">+1</button>`);

  afterTemplate = signal(`<!-- Après: Signals + Change Detection fine-grained -->
<div class="user-profile">
  <h2>{{ user().name }}</h2>
  <p>{{ user().email }}</p>
</div>

<div class="stats">
  <span>Compteur: {{ counter() }}</span>
</div>

<!-- Seuls les bindings utilisant counter() sont re-rendus -->
<button (click)="counter.update(v => v + 1)">+1</button>`);
}
