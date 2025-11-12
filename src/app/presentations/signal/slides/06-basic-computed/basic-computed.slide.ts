import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-computed-slide',
  templateUrl: './basic-computed.slide.html',
  styleUrl: './basic-computed.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComputedSlide {
  simpleCode = signal(`import { computed } from '@angular/core';

firstName = signal('Jean');
lastName = signal('Dupont');

// Computed dérivé de plusieurs signals
fullName = computed(() =>
  \`\${this.firstName()} \${this.lastName()}\`
);

// Le computed se met à jour automatiquement !
this.firstName.set('Marie'); // fullName() devient "Marie Dupont"`);

  complexCode = signal(`items = signal([
  { name: 'Pomme', price: 2.5, quantity: 3 },
  { name: 'Orange', price: 1.8, quantity: 5 }
]);

// Computed avec logique complexe
total = computed(() =>
  this.items().reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
  )
);

itemCount = computed(() => this.items().length);`);
}
