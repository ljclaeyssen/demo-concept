import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-resources-http-slide',
  templateUrl: './resources-http.slide.html',
  styleUrl: './resources-http.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesHttpSlide {
  componentCode = signal(`@Component({
  selector: 'app-user-profile',
  template: \`
    @if (userResource.isLoading()) {
      <div class="loading">Chargement...</div>
    } @else if (userResource.error()) {
      <div class="error">
        Erreur: {{ userResource.error() }}
        <button (click)="userResource.reload()">Réessayer</button>
      </div>
    } @else if (userResource.hasValue()) {
      <div class="user-card">
        <h2>{{ userResource.value().name }}</h2>
        <p>{{ userResource.value().email }}</p>
      </div>
    }
  \`
})
export class UserProfileComponent {
  userId = input.required<string>();

  userResource = httpResource(() =>
    \`/api/users/\${this.userId()}\`
  );
}`);

  advancedCode = signal(`// Avec gestion d'erreur et rechargement
@Component({...})
export class AdvancedResourceComponent {
  searchQuery = signal('');

  resultsResource = httpResource(() => {
    const query = this.searchQuery();
    return query ? \`/api/search?q=\${query}\` : undefined;
  });

  // Recharger manuellement
  refresh() {
    this.resultsResource.reload();
  }

  // Avec options et defaultValue
  productsResource = httpResource(
    () => '/api/products',
    { defaultValue: [] }
  );
}`);
}
