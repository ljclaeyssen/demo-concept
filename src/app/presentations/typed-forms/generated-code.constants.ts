// Ce fichier est généré automatiquement par scripts/generate-code-constants.mjs
// Ne pas modifier manuellement !

/**
 * Enums pour le formulaire d'inscription
 * Source: src/app/presentations/typed-forms/demo/registration-form.enums.ts
 */
export const registrationFormEnums = `export enum ContactFormFields {
  GENDER = 'gender',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  MAIDEN_NAME = 'maidenName',
  ADDRESS = 'address',
  PHONE = 'phone',
  EMAIL = 'email'
}

export enum SituationFormFields {
  CONTRACT_TYPE = 'contractType',
  INCOME = 'income',
  HOUSING_STATUS = 'housingStatus',
  MARITAL_STATUS = 'maritalStatus'
}

export enum RegistrationFormFields {
  CONTACT = 'contact',
  SITUATION = 'situation'
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export enum ContractType {
  CDI = 'cdi',
  CDD = 'cdd',
  STUDENT = 'student',
  RETIRED = 'retired',
  DISABILITY = 'disability'
}

export enum HousingStatus {
  OWNER_WITH_LOAN = 'ownerWithLoan',
  OWNER_WITHOUT_LOAN = 'ownerWithoutLoan',
  TENANT = 'tenant',
  FREE_ACCOMMODATION = 'freeAccommodation'
}

export enum MaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
  PACS = 'pacs'
}
`;

/**
 * Classe ContactForm
 * Source: src/app/presentations/typed-forms/demo/contact-form.ts
 */
export const contactFormTs = `import { FormControl, FormGroup, Validators } from '@angular/forms';
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
`;

/**
 * Classe SituationForm
 * Source: src/app/presentations/typed-forms/demo/situation-form.ts
 */
export const situationFormTs = `import { FormControl, FormGroup, Validators } from '@angular/forms';
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
`;

/**
 * Classe RegistrationForm
 * Source: src/app/presentations/typed-forms/demo/registration-form.ts
 */
export const registrationFormTs = `import { FormGroup } from '@angular/forms';
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
`;

/**
 * Composant de démo RegistrationDemo
 * Source: src/app/presentations/typed-forms/demo/registration-demo.component.ts
 */
export const registrationDemoComponentTs = `import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RegistrationForm } from './registration-form';
import {
  Gender,
  ContractType,
  HousingStatus,
  MaritalStatus
} from './registration-form.enums';

interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-registration-demo',
  templateUrl: './registration-demo.component.html',
  styleUrl: './registration-demo.component.scss',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    CardModule,
    FloatLabelModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    ButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationDemoComponent {
  form = new RegistrationForm();
  submittedData = signal<any>(null);

  genderOptions: SelectOption[] = [
    { label: 'Homme', value: Gender.MALE },
    { label: 'Femme', value: Gender.FEMALE },
    { label: 'Autre', value: Gender.OTHER }
  ];

  contractTypeOptions: SelectOption[] = [
    { label: 'CDI', value: ContractType.CDI },
    { label: 'CDD', value: ContractType.CDD },
    { label: 'Étudiant', value: ContractType.STUDENT },
    { label: 'Retraité', value: ContractType.RETIRED },
    { label: 'Pension d\\'invalidité', value: ContractType.DISABILITY }
  ];

  housingStatusOptions: SelectOption[] = [
    { label: 'Propriétaire avec crédit', value: HousingStatus.OWNER_WITH_LOAN },
    { label: 'Propriétaire sans crédit', value: HousingStatus.OWNER_WITHOUT_LOAN },
    { label: 'Locataire', value: HousingStatus.TENANT },
    { label: 'Logé à titre gratuit', value: HousingStatus.FREE_ACCOMMODATION }
  ];

  maritalStatusOptions: SelectOption[] = [
    { label: 'Célibataire', value: MaritalStatus.SINGLE },
    { label: 'Marié(e)', value: MaritalStatus.MARRIED },
    { label: 'Divorcé(e)', value: MaritalStatus.DIVORCED },
    { label: 'Veuf(ve)', value: MaritalStatus.WIDOWED },
    { label: 'Pacsé(e)', value: MaritalStatus.PACS }
  ];

  onSubmit() {
    if (this.form.valid) {
      this.submittedData.set(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }

  reset() {
    this.form.reset();
    this.submittedData.set(null);
  }
}
`;

/**
 * Template du composant RegistrationDemo
 * Source: src/app/presentations/typed-forms/demo/registration-demo.component.html
 */
export const registrationDemoComponentHtml = `<div class="demo-container">
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <div class="form-sections">
      <!-- Contact Section -->
      <p-card header="Informations de contact" [formGroup]="form.contact">
        <div class="form-grid">
          <p-floatlabel>
            <p-select
              [formControl]="form.contact.gender"
              [options]="genderOptions"
              optionLabel="label"
              optionValue="value"
              inputId="gender"
              styleClass="w-full" />
            <label for="gender">Genre *</label>
          </p-floatlabel>

          <p-floatlabel>
            <input
              pInputText
              [formControl]="form.contact.firstName"
              id="firstName"
              class="w-full" />
            <label for="firstName">Prénom *</label>
          </p-floatlabel>

          <p-floatlabel>
            <input
              pInputText
              [formControl]="form.contact.lastName"
              id="lastName"
              class="w-full" />
            <label for="lastName">Nom *</label>
          </p-floatlabel>

          <p-floatlabel>
            <input
              pInputText
              [formControl]="form.contact.maidenName"
              id="maidenName"
              class="w-full" />
            <label for="maidenName">Nom de jeune fille</label>
          </p-floatlabel>

          <p-floatlabel class="full-width">
            <input
              pInputText
              [formControl]="form.contact.address"
              id="address"
              class="w-full" />
            <label for="address">Adresse *</label>
          </p-floatlabel>

          <p-floatlabel>
            <input
              pInputText
              [formControl]="form.contact.phone"
              id="phone"
              class="w-full" />
            <label for="phone">Téléphone *</label>
          </p-floatlabel>

          <p-floatlabel>
            <input
              pInputText
              type="email"
              [formControl]="form.contact.email"
              id="email"
              class="w-full" />
            <label for="email">Email *</label>
          </p-floatlabel>
        </div>
      </p-card>

      <!-- Situation Section -->
      <p-card header="Situation" [formGroup]="form.situation">
        <div class="form-grid">
          <p-floatlabel>
            <p-select
              [formControl]="form.situation.contractType"
              [options]="contractTypeOptions"
              optionLabel="label"
              optionValue="value"
              inputId="contractType"
              styleClass="w-full" />
            <label for="contractType">Type de contrat *</label>
          </p-floatlabel>

          <p-floatlabel>
            <p-inputnumber
              [formControl]="form.situation.income"
              inputId="income"
              mode="currency"
              currency="EUR"
              locale="fr-FR"
              styleClass="w-full" />
            <label for="income">Revenu mensuel *</label>
          </p-floatlabel>

          <p-floatlabel>
            <p-select
              [formControl]="form.situation.housingStatus"
              [options]="housingStatusOptions"
              optionLabel="label"
              optionValue="value"
              inputId="housingStatus"
              styleClass="w-full" />
            <label for="housingStatus">Statut immobilier *</label>
          </p-floatlabel>

          <p-floatlabel>
            <p-select
              [formControl]="form.situation.maritalStatus"
              [options]="maritalStatusOptions"
              optionLabel="label"
              optionValue="value"
              inputId="maritalStatus"
              styleClass="w-full" />
            <label for="maritalStatus">Situation matrimoniale *</label>
          </p-floatlabel>
        </div>
      </p-card>
    </div>

    <div class="actions">
      <p-button label="Réinitialiser" severity="secondary" type="button" (onClick)="reset()" />
      <p-button label="Valider" type="submit" [disabled]="form.invalid" />
    </div>
  </form>

  @if (submittedData()) {
    <p-card header="Données soumises" styleClass="result-card">
      <pre>{{ submittedData() | json }}</pre>
    </p-card>
  }
</div>
`;

/**
 * Styles du composant RegistrationDemo
 * Source: src/app/presentations/typed-forms/demo/registration-demo.component.scss
 */
export const registrationDemoComponentScss = `.demo-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .form-sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    p-floatlabel {
      display: block;
    }

    .full-width {
      grid-column: 1 / -1;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .result-card {
    margin-top: 2rem;

    pre {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      overflow: auto;
    }
  }
}
`;

