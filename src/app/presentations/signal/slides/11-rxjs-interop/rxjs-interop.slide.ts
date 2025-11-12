import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-rxjs-interop-slide',
  templateUrl: './rxjs-interop.slide.html',
  styleUrl: './rxjs-interop.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsInteropSlide {
  toSignalCode = signal(`import { toSignal } from '@angular/core/rxjs-interop';

@Component({...})
export class UserComponent {
  private http = inject(HttpClient);

  // Observable vers Signal
  user$ = this.http.get<User>('/user');
  user = toSignal(this.user$, { initialValue: null });

  // Utilisation dans le template
  // <div>{{ user()?.name }}</div>

  // Avec route params
  userId = toSignal(this.route.params.pipe(
    map(params => params['id'])
  ));
}`);

  toObservableCode = signal(`import { toObservable } from '@angular/core/rxjs-interop';

@Component({...})
export class SearchComponent {
  searchQuery = signal('');

  // Signal vers Observable
  searchQuery$ = toObservable(this.searchQuery);

  results$ = this.searchQuery$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(query => this.searchService.search(query))
  );

  // Reconvertir en signal si besoin
  results = toSignal(this.results$, { initialValue: [] });
}`);
}
