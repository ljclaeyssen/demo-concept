import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-composition-slide',
  templateUrl: './composition.slide.html',
  styleUrl: './composition.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompositionSlide {
  subFormsCode = signal(`// Sous-formulaire Contact
export class ContactForm extends FormGroup {
  constructor() {
    super({
      [ContactFormFields.GENDER]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      [ContactFormFields.FIRST_NAME]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      [ContactFormFields.LAST_NAME]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      [ContactFormFields.MAIDEN_NAME]: new FormControl<string>('', { nonNullable: true }),
      [ContactFormFields.ADDRESS]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      [ContactFormFields.PHONE]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      [ContactFormFields.EMAIL]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
    });
    this.setupAdaptiveLogic(); // Logique nom de jeune fille
  }

  get gender() { return this.get(ContactFormFields.GENDER) as FormControl<string>; }
  get maidenName() { return this.get(ContactFormFields.MAIDEN_NAME) as FormControl<string>; }
}

// Sous-formulaire Situation
export class SituationForm extends FormGroup {
  constructor() {
    super({
      [SituationFormFields.CONTRACT_TYPE]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      [SituationFormFields.INCOME]: new FormControl<number | null>(null, { validators: [Validators.required] }),
      [SituationFormFields.HOUSING_STATUS]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      [SituationFormFields.MARITAL_STATUS]: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
    });
  }
}`);

  compositionCode = signal(`// FormGroup principal qui compose les 2 sous-formulaires
export class RegistrationForm extends FormGroup {
  constructor() {
    super({
      [RegistrationFormFields.CONTACT]: new ContactForm(),
      [RegistrationFormFields.SITUATION]: new SituationForm()
    });
  }

  // Getters typés pour accéder aux sous-formulaires
  get contact(): ContactForm {
    return this.get(RegistrationFormFields.CONTACT) as ContactForm;
  }

  get situation(): SituationForm {
    return this.get(RegistrationFormFields.SITUATION) as SituationForm;
  }
}`);

  usageCode = signal(`export class RegistrationComponent {
  form = new RegistrationForm();

  submit() {
    const data = this.form.getRawValue();

    // ✅ Accès typé aux sous-formulaires
    console.log(data.contact.firstName);
    console.log(data.situation.income);

    // ✅ Accès direct via les getters
    this.form.contact.firstName.setValue('John');
    this.form.situation.contractType.setValue(ContractType.CDI);

    // ✅ Validation au niveau du sous-formulaire
    if (this.form.contact.invalid) {
      console.log('Contact invalide');
    }

    // ✅ Validation globale
    if (this.form.invalid) {
      console.log('Formulaire complet invalide');
    }
  }
}`);
}
