import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-interaction-effect-slide',
  templateUrl: './interaction-effect.slide.html',
  styleUrl: './interaction-effect.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractionEffectSlide {
  exampleCode = signal(`@Component({...})
export class AnalyticsComponent {
  private analytics = inject(AnalyticsService);

  // Inputs en signal
  pageId = input.required<string>();
  userId = input.required<string>();

  constructor() {
    // Track automatiquement quand pageId ou userId change
    effect(() => {
      this.analytics.track('page_view', {
        page: this.pageId(),
        user: this.userId()
      });
    });
  }
}`);

  localStorageCode = signal(`@Component({...})
export class SettingsComponent {
  theme = signal<'light' | 'dark'>('light');
  language = signal<'fr' | 'en'>('fr');

  constructor() {
    // Sauvegarde automatique dans localStorage
    effect(() => {
      localStorage.setItem('theme', this.theme());
    });

    effect(() => {
      localStorage.setItem('language', this.language());
    });

    // Restaure au démarrage
    this.theme.set(
      localStorage.getItem('theme') as 'light' | 'dark' ?? 'light'
    );
  }
}`);
}
