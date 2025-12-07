import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { TestSwitchComponent } from '../../components/test-switch.component';

@Component({
  selector: 'app-form-validation-slide',
  templateUrl: './form-validation.slide.html',
  styleUrl: './form-validation.slide.scss',
  imports: [Highlight, TestSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormValidationSlide {
  componentCode = signal(`// login.component.ts
@Component({
  selector: 'app-login',
  template: \`
    <form [formGroup]="form">
      <input formControlName="email" />
      <input formControlName="password" type="password" />
      <button [disabled]="form.invalid">Login</button>
    </form>
  \`
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
}`);

  karmaTestCode = signal(`// login.component.spec.ts
describe('LoginComponent - Form', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have invalid form initially', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('should validate email format', () => {
    const email = component.form.get('email');

    email?.setValue('invalid');
    expect(email?.hasError('email')).toBeTrue();

    email?.setValue('valid@test.com');
    expect(email?.hasError('email')).toBeFalse();
  });

  it('should require password min 8 chars', () => {
    const password = component.form.get('password');

    password?.setValue('short');
    expect(password?.hasError('minlength')).toBeTrue();

    password?.setValue('longpassword');
    expect(password?.hasError('minlength')).toBeFalse();
  });

  it('should be valid with correct data', () => {
    component.form.patchValue({
      email: 'test@test.com',
      password: 'password123'
    });
    expect(component.form.valid).toBeTrue();
  });
});`);

  vitestTestCode = signal(`// login.component.spec.ts
describe('LoginComponent - Form', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have invalid form initially', () => {
    expect(component.form.valid).toBe(false);
  });

  it('should validate email format', () => {
    const email = component.form.get('email');

    email?.setValue('invalid');
    expect(email?.hasError('email')).toBe(true);

    email?.setValue('valid@test.com');
    expect(email?.hasError('email')).toBe(false);
  });

  it('should require password min 8 chars', () => {
    const password = component.form.get('password');

    password?.setValue('short');
    expect(password?.hasError('minlength')).toBe(true);

    password?.setValue('longpassword');
    expect(password?.hasError('minlength')).toBe(false);
  });

  it('should be valid with correct data', () => {
    component.form.patchValue({
      email: 'test@test.com',
      password: 'password123'
    });
    expect(component.form.valid).toBe(true);
  });
});`);
}
