import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-resources-intro-slide',
  templateUrl: './resources-intro.slide.html',
  styleUrl: './resources-intro.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesIntroSlide {
  resourceCode = signal(`import { resource } from '@angular/core';

// Resource simple avec loader asynchrone
userResource = resource({
  loader: async () => {
    const response = await fetch('/api/user');
    return response.json();
  }
});

// Accès aux données et statut
user = this.userResource.value;       // Signal<User | undefined>
isLoading = this.userResource.isLoading;  // Signal<boolean>
error = this.userResource.error;          // Signal<Error | undefined>`);

  rxResourceCode = signal(`import { rxResource } from '@angular/core/rxjs-interop';

// RxResource avec Observable (utilise 'stream')
productsResource = rxResource({
  stream: () => this.http.get<Product[]>('/api/products')
});

// Avec paramètres réactifs
userId = signal('123');

userDetailsResource = rxResource({
  params: () => ({ id: this.userId() }),
  stream: ({ params }) =>
    this.http.get<User>(\`/api/users/\${params.id}\`)
});`);
}
