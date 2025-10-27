import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-typed-solution-slide',
  templateUrl: './typed-solution.slide.html',
  styleUrl: './typed-solution.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypedSolutionSlide {
  enumCode = signal(`enum UserProfileFormFields {
  NAME = 'name',
  EMAIL = 'email',
  AGE = 'age'
}`);

  classCode = signal(`export class UserProfileForm extends FormGroup {
  constructor() {
    super({
      [UserProfileFormFields.NAME]: new FormControl('', { nonNullable: true }),
      [UserProfileFormFields.EMAIL]: new FormControl('', { nonNullable: true }),
      [UserProfileFormFields.AGE]: new FormControl<number | null>(null)
    });
  }

  // Getters typés pour un accès facile
  get name(): FormControl<string> {
    return this.get(UserProfileFormFields.NAME) as FormControl<string>;
  }

  get email(): FormControl<string> {
    return this.get(UserProfileFormFields.EMAIL) as FormControl<string>;
  }

  get age(): FormControl<number | null> {
    return this.get(UserProfileFormFields.AGE) as FormControl<number | null>;
  }
}`);

  usageCode = signal(`export class UserProfileComponent {
  // ✅ Pas de lifecycle hook nécessaire !
  // ✅ Pas de FormBuilder à injecter !
  form = new UserProfileForm();
}

// ✅ getRawValue() est typé !
const data = this.form.getRawValue();
console.log(data.email); // ✅ Type-safe !

// ✅ Les getters sont typés
this.form.name.setValue('John'); // ✅ Type-safe

// ✅ patchValue est typé
this.form.patchValue({
  [UserProfileFormFields.NAME]: 'John',
  [UserProfileFormFields.EMAIL]: 'john@example.com'
}); // ✅ Erreurs TS si typo ou mauvais type !`);
}
