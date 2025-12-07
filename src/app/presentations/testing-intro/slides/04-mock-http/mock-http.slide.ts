import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { TestSwitchComponent } from '../../components/test-switch.component';

@Component({
  selector: 'app-mock-http-slide',
  templateUrl: './mock-http.slide.html',
  styleUrl: './mock-http.slide.scss',
  imports: [Highlight, TestSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockHttpSlide {
  serviceCode = signal(`// user.service.ts
@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  createUser(user: CreateUserDto): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`/api/users/\${id}\`);
  }
}`);

  karmaTestCode = signal(`// user.service.spec.ts
describe('UserService - Mock HTTP', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create a user', () => {
    const newUser = { name: 'John', email: 'john@test.com' };
    const mockResponse = { id: 1, ...newUser };

    service.createUser(newUser).subscribe(user => {
      expect(user.id).toBe(1);
      expect(user.name).toBe('John');
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newUser);
    req.flush(mockResponse);
  });

  it('should handle 404 error', () => {
    service.deleteUser(999).subscribe({
      error: (err) => {
        expect(err.status).toBe(404);
      }
    });

    const req = httpMock.expectOne('/api/users/999');
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
  });
});`);

  vitestTestCode = signal(`// user.service.spec.ts
describe('UserService - Mock HTTP', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [provideHttpClientTesting()]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create a user', () => {
    const newUser = { name: 'John', email: 'john@test.com' };
    const mockResponse = { id: 1, ...newUser };

    service.createUser(newUser).subscribe(user => {
      expect(user.id).toBe(1);
      expect(user.name).toBe('John');
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newUser);
    req.flush(mockResponse);
  });

  it('should handle 404 error', () => {
    service.deleteUser(999).subscribe({
      error: (err) => {
        expect(err.status).toBe(404);
      }
    });

    const req = httpMock.expectOne('/api/users/999');
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
  });
});`);
}
