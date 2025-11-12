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
    } @else if (userResource.value(); as user) {
      <div class="user-card">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </div>
    }
  \`
})
export class UserProfileComponent {
  private http = inject(HttpClient);
  userId = input.required<string>();

  userResource = httpResource({
    url: computed(() => \`/api/users/\${this.userId()}\`),
    request: () => ({ id: this.userId() })
  });
}`);

  advancedCode = signal(`// Avec gestion d'erreur et cache
@Component({...})
export class AdvancedResourceComponent {
  private http = inject(HttpClient);
  searchQuery = signal('');

  resultsResource = httpResource({
    url: computed(() => {
      const query = this.searchQuery();
      return query ? \`/api/search?q=\${query}\` : null;
    }),
    request: () => ({ query: this.searchQuery() })
  });

  // Recharger manuellement
  refresh() {
    this.resultsResource.reload();
  }
}`);
}
