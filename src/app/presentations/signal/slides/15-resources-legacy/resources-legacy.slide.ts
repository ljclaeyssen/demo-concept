import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-resources-legacy-slide',
  templateUrl: './resources-legacy.slide.html',
  styleUrl: './resources-legacy.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesLegacySlide {
  serviceCode = signal(`// Service existant avec HttpClient
@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  getUser(id: string): Observable<User> {
    return this.http.get<User>(\`/api/users/\${id}\`);
  }

  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(\`/api/users/search?q=\${query}\`);
  }
}`);

  componentCode = signal(`// Composant utilisant httpResource ou rxResource
@Component({...})
export class UserListComponent {
  private userService = inject(UserService);
  searchQuery = signal('');

  // Option 1: httpResource pour requêtes simples
  usersResourceHttp = httpResource(() => {
    const query = this.searchQuery();
    return query ? \`/api/users/search?q=\${query}\` : undefined;
  });

  // Option 2: rxResource avec service legacy
  usersResource = rxResource({
    request: () => ({ query: this.searchQuery() }),
    loader: ({ request }) =>
      this.userService.searchUsers(request.query)
  });
}`);

  migrationCode = signal(`// Pattern de migration progressive
@Component({...})
export class MixedComponent {
  private service = inject(LegacyService);

  // Ancien code - convertir avec toSignal
  oldData = toSignal(this.service.getOldData());

  // Nouveau code - avec httpResource
  newDataResource = httpResource(() => '/api/new-data');

  // Ou avec rxResource pour réutiliser le service
  legacyResource = rxResource({
    request: () => ({}),
    loader: () => this.service.getLegacyData()
  });

  // ⚠️ Ne JAMAIS laisser d'observable dans le template !
  // ❌ {{ oldData$ | async }}
  // ✅ {{ oldData() }}
}`);
}
