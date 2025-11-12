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

  componentCode = signal(`// Composant utilisant httpResource avec service legacy
@Component({...})
export class UserListComponent {
  private userService = inject(UserService);
  searchQuery = signal('');

  // Wrapper le service legacy dans httpResource
  usersResource = httpResource({
    url: computed(() => {
      const query = this.searchQuery();
      return query ? \`/api/users/search?q=\${query}\` : null;
    }),
    request: () => ({ query: this.searchQuery() })
  });

  // Ou utiliser rxResource si l'URL ne suffit pas
  // usersResource = rxResource({
  //   request: () => ({ query: this.searchQuery() }),
  //   loader: ({ request }) =>
  //     this.userService.searchUsers(request.query)
  // });
}`);

  migrationCode = signal(`// Pattern de migration progressive
@Component({...})
export class MixedComponent {
  private service = inject(LegacyService);

  // Ancien code - convertir avec toSignal
  oldData = toSignal(this.service.getOldData());

  // Nouveau code - avec httpResource
  newDataResource = httpResource({
    url: '/api/new-data',
    request: () => ({})
  });

  // ⚠️ Ne JAMAIS laisser d'observable dans le template !
  // ❌ {{ oldData$ | async }}
  // ✅ {{ oldData() }}
}`);
}
