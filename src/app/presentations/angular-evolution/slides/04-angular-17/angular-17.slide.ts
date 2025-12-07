import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-angular-17-slide',
  templateUrl: './angular-17.slide.html',
  styleUrl: './angular-17.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular17Slide {
  controlFlowCode = signal(`// Nouveau Control Flow (built-in)
// Avant : *ngIf, *ngFor, *ngSwitch

// Maintenant :
@if (user) {
  <p>Bonjour {{ user.name }}</p>
} @else {
  <p>Non connecté</p>
}

@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
} @empty {
  <li>Aucun élément</li>
}

@switch (status) {
  @case ('loading') { <spinner /> }
  @case ('error') { <error-msg /> }
  @default { <content /> }
}`);

  deferCode = signal(`// @defer : Lazy loading au niveau template !
@defer (on viewport) {
  <app-heavy-component />
} @loading (minimum 200ms) {
  <p>Chargement...</p>
} @placeholder {
  <p>Scroll pour charger</p>
} @error {
  <p>Erreur de chargement</p>
}

// Triggers disponibles :
// on viewport, on idle, on hover,
// on interaction, on timer(5s),
// when condition`);

  newFeaturesCode = signal(`// Nouvelles syntaxes
// input() au lieu de @Input()
name = input<string>();
id = input.required<number>();

// output() au lieu de @Output()
clicked = output<void>();

// model() pour two-way binding
value = model<string>('');

// viewChild / contentChild signal-based
myDiv = viewChild<ElementRef>('myDiv');`);
}
