import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { SyntaxSwitchComponent } from '../../components/syntax-switch.component';

@Component({
  selector: 'app-subscription-slide',
  templateUrl: './subscription.slide.html',
  styleUrl: './subscription.slide.scss',
  imports: [Highlight, SyntaxSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionSlide {
  subscriptionCode = signal(`// La subscription = le lien actif entre Observable et Observer
const subscription = interval(1000).subscribe(n => {
  console.log('Tick:', n);
});

// IMPORTANT : Se désabonner pour éviter les fuites mémoire !
subscription.unsubscribe();`);

  oldComponentCode = signal(`import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: '<p>Timer: {{ count }}</p>'
})
export class TimerComponent implements OnInit, OnDestroy {
  count = 0;
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = interval(1000).subscribe(n => {
      this.count = n;
    });
  }

  ngOnDestroy() {
    // ⚠️ OBLIGATOIRE sinon fuite mémoire !
    this.subscription.unsubscribe();
  }
}`);

  newComponentCode = signal(`import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: \`<p>Timer: {{ count }}</p>\`
})
export class TimerComponent {
  count = 0;

  constructor() {
    // ✨ takeUntilDestroyed() gère le unsubscribe !
    interval(1000).pipe(
      takeUntilDestroyed()
    ).subscribe(n => {
      this.count = n;
    });
  }
}`);
}
