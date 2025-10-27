import { FormGroup } from '@angular/forms';
import { RegistrationFormFields } from './registration-form.enums';
import { ContactForm } from './contact-form';
import { SituationForm } from './situation-form';

export class RegistrationForm extends FormGroup {
  constructor() {
    super({
      [RegistrationFormFields.CONTACT]: new ContactForm(),
      [RegistrationFormFields.SITUATION]: new SituationForm()
    });
  }

  get contact(): ContactForm {
    return this.get(RegistrationFormFields.CONTACT) as ContactForm;
  }

  get situation(): SituationForm {
    return this.get(RegistrationFormFields.SITUATION) as SituationForm;
  }
}
