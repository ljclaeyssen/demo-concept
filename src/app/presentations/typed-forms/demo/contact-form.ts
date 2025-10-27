import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormFields, Gender } from './registration-form.enums';

export class ContactForm extends FormGroup {
  constructor() {
    super({
      [ContactFormFields.GENDER]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContactFormFields.FIRST_NAME]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContactFormFields.LAST_NAME]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContactFormFields.MAIDEN_NAME]: new FormControl('', {
        nonNullable: true
      }),
      [ContactFormFields.ADDRESS]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContactFormFields.PHONE]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContactFormFields.EMAIL]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      })
    });

    this.setupAdaptiveLogic();
  }

  private setupAdaptiveLogic() {
    this.gender.valueChanges.subscribe(gender => {
      if (gender === Gender.MALE) {
        this.maidenName.disable();
        this.maidenName.clearValidators();
      } else {
        this.maidenName.enable();
      }
      this.maidenName.updateValueAndValidity();
    });
  }

  get gender() {
    return this.get(ContactFormFields.GENDER) as FormControl<string>;
  }

  get firstName() {
    return this.get(ContactFormFields.FIRST_NAME) as FormControl<string>;
  }

  get lastName() {
    return this.get(ContactFormFields.LAST_NAME) as FormControl<string>;
  }

  get maidenName() {
    return this.get(ContactFormFields.MAIDEN_NAME) as FormControl<string>;
  }

  get address() {
    return this.get(ContactFormFields.ADDRESS) as FormControl<string>;
  }

  get phone() {
    return this.get(ContactFormFields.PHONE) as FormControl<string>;
  }

  get email() {
    return this.get(ContactFormFields.EMAIL) as FormControl<string>;
  }
}
