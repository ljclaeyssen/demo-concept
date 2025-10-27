import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-adaptive-solution-slide',
  templateUrl: './adaptive-solution.slide.html',
  styleUrl: './adaptive-solution.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdaptiveSolutionSlide {
  enumCode = signal(`enum UserFormFields {
  GENDER = 'gender',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  MAIDEN_NAME = 'maidenName'
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}`);

  classCode = signal(`export class UserForm extends FormGroup {
  constructor() {
    super({
      [UserFormFields.GENDER]: new FormControl('', { nonNullable: true }),
      [UserFormFields.FIRST_NAME]: new FormControl('', { nonNullable: true }),
      [UserFormFields.LAST_NAME]: new FormControl('', { nonNullable: true }),
      [UserFormFields.MAIDEN_NAME]: new FormControl('', { nonNullable: true })
    });

    this.setupAdaptiveLogic();
  }

  private setupAdaptiveLogic() {
    // ✅ Code métier encapsulé dans la classe !
    // ✅ Pas besoin de takeUntilDestroyed : garbage collecté avec le form
    this.gender.valueChanges.subscribe(gender => {
      if (gender === Gender.MALE) {
        this.maidenName.disable();
        this.maidenName.clearValidators();
      } else {
        this.maidenName.enable();
        this.maidenName.setValidators([Validators.required]);
      }
      this.maidenName.updateValueAndValidity();
    });
  }

  get gender() { return this.get(UserFormFields.GENDER) as FormControl<string>; }
  get maidenName() { return this.get(UserFormFields.MAIDEN_NAME) as FormControl<string>; }
}`);

  componentCode = signal(`export class UserFormComponent {
  // ✅ Component ultra-simple !
  // ✅ Toute la logique est dans le formulaire
  // ✅ Pas de lifecycle hook
  // ✅ Pas de gestion de subscriptions
  form = new UserForm();
}`);
}
