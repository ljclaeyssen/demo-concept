import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { TestSwitchComponent } from '../../components/test-switch.component';

@Component({
  selector: 'app-mock-service-slide',
  templateUrl: './mock-service.slide.html',
  styleUrl: './mock-service.slide.scss',
  imports: [Highlight, TestSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockServiceSlide {
  componentCode = signal(`// user-list.component.ts
@Component({
  selector: 'app-user-list',
  template: \`
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
    <p *ngIf="loading">Loading...</p>
    <p *ngIf="error" class="error">{{ error }}</p>
  \`
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);

  users: User[] = [];
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }
}`);

  karmaTestCode = signal(`// user-list.component.spec.ts
describe('UserListComponent - Mock Service', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    // Créer un spy pour le service
    userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should display users on success', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    userServiceSpy.getUsers.and.returnValue(of(mockUsers));

    fixture.detectChanges(); // Déclenche ngOnInit

    expect(component.users).toEqual(mockUsers);
    expect(component.loading).toBeFalse();
  });

  it('should display error on failure', () => {
    userServiceSpy.getUsers.and.returnValue(
      throwError(() => new Error('Network error'))
    );

    fixture.detectChanges();

    expect(component.error).toBe('Failed to load users');
  });
});`);

  vitestTestCode = signal(`// user-list.component.spec.ts
describe('UserListComponent - Mock Service', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceMock: { getUsers: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    // Créer un mock pour le service
    userServiceMock = {
      getUsers: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [
        { provide: UserService, useValue: userServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should display users on success', () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    userServiceMock.getUsers.mockReturnValue(of(mockUsers));

    fixture.detectChanges(); // Déclenche ngOnInit

    expect(component.users).toEqual(mockUsers);
    expect(component.loading).toBe(false);
  });

  it('should display error on failure', () => {
    userServiceMock.getUsers.mockReturnValue(
      throwError(() => new Error('Network error'))
    );

    fixture.detectChanges();

    expect(component.error).toBe('Failed to load users');
  });
});`);
}
