import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-error-handling-slide',
  templateUrl: './error-handling.slide.html',
  styleUrl: './error-handling.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorHandlingSlide {
  catchErrorCode = signal(`// catchError : intercepte les erreurs et retourne un Observable
this.http.get('/api/user').pipe(
  catchError(error => {
    console.error('Erreur:', error);
    // Retourner une valeur par défaut
    return of({ name: 'Invité', isDefault: true });
  })
).subscribe(user => this.user = user);

// Ou relancer avec une erreur custom
catchError(error => {
  return throwError(() => new Error('Impossible de charger'));
})`);

  retryCode = signal(`// retry : réessaie N fois en cas d'erreur
this.http.get('/api/data').pipe(
  retry(3), // Réessaie 3 fois
  catchError(error => {
    this.notifyService.error('Échec après 3 tentatives');
    return of(null);
  })
).subscribe();

// retryWhen pour plus de contrôle (délai, conditions...)
this.http.get('/api/data').pipe(
  retry({
    count: 3,
    delay: 1000 // Attendre 1s entre chaque retry
  })
).subscribe();`);

  finalizeCode = signal(`// finalize : exécuté à la fin (succès ou erreur)
// Parfait pour le loading state !
this.loading = true;

this.http.get('/api/data').pipe(
  finalize(() => {
    this.loading = false; // Toujours exécuté !
  })
).subscribe({
  next: data => this.data = data,
  error: err => this.error = err.message
});`);

  completePatternCode = signal(`// Pattern complet : retry + catchError + finalize
fetchData(): Observable<Data> {
  this.loading = true;
  this.error = null;

  return this.http.get<Data>('/api/data').pipe(
    retry({ count: 2, delay: 500 }),
    catchError(error => {
      this.error = 'Impossible de charger les données';
      return of(null);
    }),
    finalize(() => this.loading = false)
  );
}`);
}
