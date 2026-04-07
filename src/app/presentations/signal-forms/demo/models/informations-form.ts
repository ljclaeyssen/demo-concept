import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InformationsFormFields, Gender } from './eligibilite-form.enums';

export class InformationsForm extends FormGroup {
  constructor() {
    super({
      [InformationsFormFields.GENRE]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [InformationsFormFields.PRENOM]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [InformationsFormFields.NOM]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [InformationsFormFields.NOM_JEUNE_FILLE]: new FormControl<string>({ value: '', disabled: true }, {
        nonNullable: true
      })
    });

    this.setupAdaptiveLogic();
  }

  private setupAdaptiveLogic() {
    this.genre.valueChanges.subscribe(genre => {
      if (genre === Gender.MALE) {
        this.nomJeuneFille.disable();
        this.nomJeuneFille.clearValidators();
      } else {
        this.nomJeuneFille.enable();
      }
      this.nomJeuneFille.updateValueAndValidity();
    });
  }

  get genre() { return this.get(InformationsFormFields.GENRE) as FormControl<string>; }
  get prenom() { return this.get(InformationsFormFields.PRENOM) as FormControl<string>; }
  get nom() { return this.get(InformationsFormFields.NOM) as FormControl<string>; }
  get nomJeuneFille() { return this.get(InformationsFormFields.NOM_JEUNE_FILLE) as FormControl<string>; }
}
