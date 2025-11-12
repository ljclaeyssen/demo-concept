import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-signal-slide',
  templateUrl: './basic-signal.slide.html',
  styleUrl: './basic-signal.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSignalSlide {
  declarationCode = signal(`import { signal } from '@angular/core';

// Signal simple
count = signal(0);

// Signal avec type explicite
user = signal<User | null>(null);

// Signal avec objet
settings = signal({ theme: 'dark', lang: 'fr' });`);

  usageCode = signal(`// Lire la valeur
console.log(this.count()); // 0

// Modifier avec set()
this.count.set(5);

// Modifier avec update() - basé sur la valeur actuelle
this.count.update(value => value + 1);`);

  templateCode = signal(`<!-- Dans le template -->
<div>Count: {{ count() }}</div>
<button (click)="count.update(v => v + 1)">
  Increment
</button>`);
}
