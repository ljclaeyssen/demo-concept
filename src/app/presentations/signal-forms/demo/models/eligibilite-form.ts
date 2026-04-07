import { FormGroup } from '@angular/forms';
import { EligibiliteFormFields } from './eligibilite-form.enums';
import { InformationsForm } from './informations-form';
import { CoordonneesForm } from './coordonnees-form';
import { ContratForm } from './contrat-form';

export class EligibiliteForm extends FormGroup {
  constructor() {
    super({
      [EligibiliteFormFields.INFORMATIONS]: new InformationsForm(),
      [EligibiliteFormFields.COORDONNEES]: new CoordonneesForm(),
      [EligibiliteFormFields.CONTRAT]: new ContratForm()
    });
  }

  get informations(): InformationsForm {
    return this.get(EligibiliteFormFields.INFORMATIONS) as InformationsForm;
  }

  get coordonnees(): CoordonneesForm {
    return this.get(EligibiliteFormFields.COORDONNEES) as CoordonneesForm;
  }

  get contrat(): ContratForm {
    return this.get(EligibiliteFormFields.CONTRAT) as ContratForm;
  }
}
