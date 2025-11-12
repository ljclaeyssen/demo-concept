import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-why-signals-async-pipe-slide',
  templateUrl: './why-signals-async-pipe.slide.html',
  styleUrl: './why-signals-async-pipe.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhySignalsAsyncPipeSlide {
  asyncPipeCode = signal(`<!-- Avec async pipe -->
<div *ngIf="user$ | async as user">
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
</div>

<!-- Attention aux multiples souscriptions ! -->
<div>{{ (items$ | async)?.length }} items</div>
<div *ngFor="let item of items$ | async">
  {{ item.name }}
</div>`);

  signalsCode = signal(`<!-- Avec signals - pas de pipe async ! -->
@if (user()) {
  <h2>{{ user()!.name }}</h2>
  <p>{{ user()!.email }}</p>
}

<!-- Pas de problème de multiple souscription -->
<div>{{ items().length }} items</div>
@for (item of items(); track item.id) {
  <div>{{ item.name }}</div>
}`);
}
