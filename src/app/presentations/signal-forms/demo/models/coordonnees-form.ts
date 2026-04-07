import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoordonneesFormFields } from './eligibilite-form.enums';

export class CoordonneesForm extends FormGroup {
  constructor() {
    super({
      [CoordonneesFormFields.ADRESSE]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [CoordonneesFormFields.EMAIL]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      [CoordonneesFormFields.TELEPHONE]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d{10}$/)]
      })
    });
  }

  get adresse() { return this.get(CoordonneesFormFields.ADRESSE) as FormControl<string>; }
  get email() { return this.get(CoordonneesFormFields.EMAIL) as FormControl<string>; }
  get telephone() { return this.get(CoordonneesFormFields.TELEPHONE) as FormControl<string>; }
}
