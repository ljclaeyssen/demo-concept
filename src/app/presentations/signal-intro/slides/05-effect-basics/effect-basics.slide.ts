import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-effect-basics-slide',
  templateUrl: './effect-basics.slide.html',
  styleUrl: './effect-basics.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EffectBasicsSlide {
  basicCode = signal(`import { signal, effect } from '@angular/core';

@Component({...})
export class UserComponent {
  userId = signal(1);

  constructor() {
    // S'exécute quand userId change
    effect(() => {
      console.log('User ID changed:', this.userId());
    });
  }
}

// Quand userId.set(2) → log: 'User ID changed: 2'`);

  useCasesCode = signal(`// Cas d'usage typiques

// 1. Sauvegarder dans localStorage
effect(() => {
  localStorage.setItem('theme', this.theme());
});

// 2. Logger pour debug
effect(() => {
  console.log('Cart updated:', this.cart());
});

// 3. Synchroniser avec un service externe
effect(() => {
  this.analytics.track('filter_changed', {
    value: this.searchFilter()
  });
});`);

  warningCode = signal(`// ⚠️ ATTENTION : effect() ne doit PAS modifier des signals !

// ❌ MAUVAIS - crée une boucle infinie
effect(() => {
  this.count.set(this.count() + 1);  // BOOM 💥
});

// ✅ BON - side effects externes uniquement
effect(() => {
  document.title = \`(\${this.unreadCount()}) Messages\`;
});

// 💡 Pour modifier un signal basé sur un autre,
// utilisez computed() à la place`);
}
