import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-signal-basics-slide',
  templateUrl: './signal-basics.slide.html',
  styleUrl: './signal-basics.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalBasicsSlide {
  createCode = signal(`import { signal } from '@angular/core';

// Créer un signal avec une valeur initiale
const count = signal(0);           // Signal<number>
const name = signal('Alice');      // Signal<string>
const user = signal({ id: 1 });    // Signal<{id: number}>
const items = signal<string[]>([]); // Signal<string[]>`);

  readCode = signal(`// Lire la valeur : appeler le signal comme une fonction
console.log(count());  // 0
console.log(name());   // 'Alice'

// Dans le template : pareil !
// {{ count() }}
// {{ name() }}`);

  setCode = signal(`// set() : remplacer complètement la valeur
count.set(5);
console.log(count());  // 5

name.set('Bob');
console.log(name());   // 'Bob'

// ⚠️ set() remplace, ne modifie pas`);

  updateCode = signal(`// update() : modifier basé sur la valeur actuelle
count.update(n => n + 1);  // 0 → 1
count.update(n => n + 1);  // 1 → 2
count.update(n => n * 2);  // 2 → 4

// Pour les tableaux/objets
items.update(arr => [...arr, 'nouveau']);

// 💡 Toujours utiliser update() quand on a besoin
// de la valeur actuelle pour calculer la nouvelle`);
}
