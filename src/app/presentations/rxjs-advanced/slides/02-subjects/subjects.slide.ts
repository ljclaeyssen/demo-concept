import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-subjects-slide',
  templateUrl: './subjects.slide.html',
  styleUrl: './subjects.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsSlide {
  subjectCode = signal(`import { Subject } from 'rxjs';

// Subject = Observable + Observer
// On peut émettre ET s'abonner
const subject = new Subject<string>();

// S'abonner
subject.subscribe(v => console.log('A:', v));
subject.subscribe(v => console.log('B:', v));

// Émettre des valeurs
subject.next('Hello');  // A: Hello, B: Hello
subject.next('World');  // A: World, B: World`);

  behaviorSubjectCode = signal(`import { BehaviorSubject } from 'rxjs';

// BehaviorSubject = Subject avec valeur initiale
// Les nouveaux abonnés reçoivent la dernière valeur
const user$ = new BehaviorSubject<string>('Invité');

user$.subscribe(v => console.log('A:', v)); // A: Invité

user$.next('Alice');  // A: Alice

user$.subscribe(v => console.log('B:', v)); // B: Alice
// B reçoit immédiatement la dernière valeur !

// Accéder à la valeur actuelle sans subscribe
console.log(user$.getValue()); // Alice`);

  replaySubjectCode = signal(`import { ReplaySubject } from 'rxjs';

// ReplaySubject = rejoue les N dernières valeurs
const messages$ = new ReplaySubject<string>(2);

messages$.next('Message 1');
messages$.next('Message 2');
messages$.next('Message 3');

// Nouvel abonné reçoit les 2 derniers
messages$.subscribe(v => console.log(v));
// Message 2
// Message 3`);
}
