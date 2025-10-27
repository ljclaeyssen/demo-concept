import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SituationFormFields } from './registration-form.enums';

export class SituationForm extends FormGroup {
  constructor() {
    super({
      [SituationFormFields.CONTRACT_TYPE]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [SituationFormFields.INCOME]: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.min(0)]
      }),
      [SituationFormFields.HOUSING_STATUS]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [SituationFormFields.MARITAL_STATUS]: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }

  get contractType() {
    return this.get(SituationFormFields.CONTRACT_TYPE) as FormControl<string>;
  }

  get income() {
    return this.get(SituationFormFields.INCOME) as FormControl<number | null>;
  }

  get housingStatus() {
    return this.get(SituationFormFields.HOUSING_STATUS) as FormControl<string>;
  }

  get maritalStatus() {
    return this.get(SituationFormFields.MARITAL_STATUS) as FormControl<string>;
  }
}
