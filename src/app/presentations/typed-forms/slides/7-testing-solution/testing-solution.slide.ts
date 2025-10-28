import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-testing-solution-slide',
  templateUrl: './testing-solution.slide.html',
  styleUrl: './testing-solution.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingSolutionSlide {
  basicTest = signal(`describe('UserForm', () => {
  // ✅ Pas de TestBed, pas de ComponentFixture !
  // ✅ Tests ultra-rapides
  // ✅ On teste directement la classe

  it('should create form with correct initial values', () => {
    const form = new UserForm();

    expect(form.gender.value).toBe('');
    expect(form.maidenName.value).toBe('');
    expect(form.maidenName.enabled).toBe(true);
  });
});`);

  adaptiveTest = signal(`describe('UserForm - adaptive logic', () => {
  it('should disable maiden name when gender is male', () => {
    const form = new UserForm();

    form.gender.setValue(Gender.MALE);

    expect(form.maidenName.disabled).toBe(true);
    expect(form.maidenName.hasValidator(Validators.required))
      .toBe(false);
  });

  it('should enable maiden name when gender is female', () => {
    const form = new UserForm();

    form.gender.setValue(Gender.FEMALE);

    expect(form.maidenName.enabled).toBe(true);
    expect(form.maidenName.hasValidator(Validators.required))
      .toBe(true);
  });
});`);

  typingTest = signal(`describe('UserForm - typing', () => {
  it('should have typed getRawValue', () => {
    const form = new UserForm();

    form.gender.setValue(Gender.FEMALE);
    form.firstName.setValue('Jane');
    form.lastName.setValue('Doe');
    form.maidenName.setValue('Smith');

    const data = form.getRawValue();

    // ✅ TypeScript sait que data a les bons types !
    expect(data.gender).toBe('female');
    expect(data.firstName).toBe('Jane');
    expect(data.lastName).toBe('Doe');
    expect(data.maidenName).toBe('Smith');
  });
});`);
}
