import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SyntaxSwitchComponent } from '../../components/syntax-switch.component';

@Component({
  selector: 'app-why-rxjs-example-slide',
  templateUrl: './why-rxjs-example.slide.html',
  styleUrl: './why-rxjs-example.slide.scss',
  imports: [SyntaxSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhyRxjsExampleSlide {
  // Sans RxJS - Old
  withoutRxjsOldCode = signal(`// ❌ Sans RxJS : galère totale
@Component({
  template: \`
    <input (ngModelChange)="onSearch($event)" />
    <div *ngFor="let r of results">{{ r.name }}</div>
  \`
})
export class SearchComponent {
  results = [];
  private timeout: any;
  private lastRequest: Subscription | null = null;

  constructor(private http: HttpClient) {}

  onSearch(term: string) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.lastRequest) {
        this.lastRequest.unsubscribe();
      }
      if (term.length < 2) {
        this.results = [];
        return;
      }
      this.lastRequest = this.http.get(\`/search?q=\${term}\`)
        .subscribe(data => this.results = data);
    }, 300);
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
    this.lastRequest?.unsubscribe();
  }
}`);

  // Sans RxJS - New
  withoutRxjsNewCode = signal(`// ❌ Sans RxJS : galère totale
@Component({
  template: \`
    <input (ngModelChange)="onSearch($event)" />
    @for (r of results; track r.id) {
      <div>{{ r.name }}</div>
    }
  \`
})
export class SearchComponent {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  results = [];
  private timeout: any;
  private lastRequest: Subscription | null = null;

  constructor() {
    this.destroyRef.onDestroy(() => {
      clearTimeout(this.timeout);
      this.lastRequest?.unsubscribe();
    });
  }

  onSearch(term: string) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.lastRequest) {
        this.lastRequest.unsubscribe();
      }
      if (term.length < 2) {
        this.results = [];
        return;
      }
      this.lastRequest = this.http.get(\`/search?q=\${term}\`)
        .subscribe(data => this.results = data);
    }, 300);
  }
}`);

  // Avec RxJS - Old
  withRxjsOldCode = signal(`// ✅ Avec RxJS : simple et élégant
@Component({
  template: \`
    <input [formControl]="searchControl" />
    <div *ngFor="let r of results$ | async">{{ r.name }}</div>
  \`
})
export class SearchComponent {
  searchControl = new FormControl('');

  constructor(private http: HttpClient) {}

  results$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),           // ⏱️ Attend 300ms
    distinctUntilChanged(),      // 🔄 Ignore si identique
    filter(term => term.length >= 2), // ✂️ Min 2 car.
    switchMap(term =>            // 🔀 Annule le précédent
      this.http.get(\`/search?q=\${term}\`)
    )
  );
  // C'est tout ! async pipe gère le cleanup ✨
}`);

  // Avec RxJS - New
  withRxjsNewCode = signal(`// ✅ Avec RxJS : simple et élégant
@Component({
  template: \`
    <input [formControl]="searchControl" />
    @for (r of results$ | async; track r.id) {
      <div>{{ r.name }}</div>
    }
  \`
})
export class SearchComponent {
  private http = inject(HttpClient);
  searchControl = new FormControl('');

  results$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),           // ⏱️ Attend 300ms
    distinctUntilChanged(),      // 🔄 Ignore si identique
    filter(term => term.length >= 2), // ✂️ Min 2 car.
    switchMap(term =>            // 🔀 Annule le précédent
      this.http.get(\`/search?q=\${term}\`)
    )
  );
  // C'est tout ! async pipe gère le cleanup ✨
}`);
}
