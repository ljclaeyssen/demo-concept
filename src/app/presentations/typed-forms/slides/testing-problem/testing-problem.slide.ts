import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-testing-problem-slide',
  templateUrl: './testing-problem.slide.html',
  styleUrl: './testing-problem.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingProblemSlide {
  testSetup = signal(`describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
`);

  testExample = signal(`  it('should disable maiden name when gender is male', () => {
    // ❌ On teste le component, pas la logique du formulaire !
    // ❌ Beaucoup de boilerplate
    // ❌ Tests lents (création du component)

    const genderControl = component.form.get('gender');
    const maidenNameControl = component.form.get('maidenName');

    genderControl?.setValue('male');
    fixture.detectChanges();

    expect(maidenNameControl?.disabled).toBe(true);
    expect(maidenNameControl?.hasValidator(Validators.required))
      .toBe(false);
  });

  it('should enable maiden name when gender is female', () => {
    const genderControl = component.form.get('gender');
    const maidenNameControl = component.form.get('maidenName');

    genderControl?.setValue('female');
    fixture.detectChanges();

    expect(maidenNameControl?.enabled).toBe(true);
    expect(maidenNameControl?.hasValidator(Validators.required))
      .toBe(true);
  });
});`);
}
