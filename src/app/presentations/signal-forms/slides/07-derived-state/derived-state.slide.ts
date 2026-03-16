import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-derived-state-slide',
  templateUrl: './derived-state.slide.html',
  styleUrl: './derived-state.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DerivedStateSlide {
  reactiveCode = signal(`readonly mensualite$ = this.valueChanges.pipe(
  startWith(this.getRawValue()),
  map(v => {
    const capital = (v.montant ?? 0) - (v.apport ?? 0);
    const n = v.duree ?? 12;
    const r = 0.035 / 12;
    return capital * r / (1 - Math.pow(1 + r, -n));
  }),
  shareReplay(1),
);

// Template :
// {{ form.mensualite$ | async | number:'1.2-2' }}`);

  signalCode = signal(`const mensualite = computed(() => {
  const v = model();
  const capital = v.montant - v.apport;
  const n = v.duree || 12;
  const r = 0.035 / 12;
  return capital * r / (1 - Math.pow(1 + r, -n));
});

// Template :
// {{ mensualite() | number:'1.2-2' }}`);
}
