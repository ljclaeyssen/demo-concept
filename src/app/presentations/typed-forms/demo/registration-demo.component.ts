import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
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
    { label: 'Pension d\'invalidité', value: ContractType.DISABILITY }
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
