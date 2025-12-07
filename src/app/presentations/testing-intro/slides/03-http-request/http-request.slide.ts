import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { TestSwitchComponent } from '../../components/test-switch.component';

@Component({
  selector: 'app-http-request-slide',
  templateUrl: './http-request.slide.html',
  styleUrl: './http-request.slide.scss',
  imports: [Highlight, TestSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpRequestSlide {
  serviceCode = signal(`// user.service.ts
@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = '/api/users';

  getUsers(role?: string): Observable<User[]> {
    let params = new HttpParams();
    if (role) {
      params = params.set('role', role);
    }
    return this.http.get<User[]>(this.apiUrl, { params });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }
}`);

  karmaTestCode = signal(`// user.service.spec.ts
describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'il n'y a pas de requête en attente
  });

  it('should fetch users with role query param', () => {
    const mockUsers: User[] = [{ id: 1, name: 'John' }];

    service.getUsers('admin').subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('/api/users?role=admin');
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('role')).toBe('admin');
    req.flush(mockUsers); // Simule la réponse
  });
});`);

  vitestTestCode = signal(`// user.service.spec.ts
describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [provideHttpClientTesting()]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'il n'y a pas de requête en attente
  });

  it('should fetch users with role query param', () => {
    const mockUsers: User[] = [{ id: 1, name: 'John' }];

    service.getUsers('admin').subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('/api/users?role=admin');
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('role')).toBe('admin');
    req.flush(mockUsers); // Simule la réponse
  });
});`);
}
