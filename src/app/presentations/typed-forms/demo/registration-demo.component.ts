import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RegistrationForm } from './registration-form';
import {
  genderOptions,
  contractTypeOptions,
  housingStatusOptions,
  maritalStatusOptions
} from './registration-form.options';
import {
  Gender,
  ContractType,
  HousingStatus,
  MaritalStatus
} from './registration-form.enums';

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
    ButtonModule,
    DialogModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationDemoComponent {
  form = new RegistrationForm();
  showDialog = signal(false);
  submittedData = signal<any>(null);

  genderOptions = genderOptions;
  contractTypeOptions = contractTypeOptions;
  housingStatusOptions = housingStatusOptions;
  maritalStatusOptions = maritalStatusOptions;

  onSubmit() {
    if (this.form.valid) {
      this.submittedData.set(this.form.getRawValue());
      this.showDialog.set(true);
    } else {
      this.form.markAllAsTouched();
    }
  }

  reset() {
    this.form.reset();
    this.submittedData.set(null);
  }

  prefill() {
    this.form.patchValue({
      contact: {
        gender: Gender.MALE,
        firstName: 'Socket',
        lastName: 'Le Teckel',
        address: 'chez moi',
        phone: '0606060606',
        email: 'socket@teckel.fr'
      },
      situation: {
        contractType: ContractType.CDI,
        income: 50,
        housingStatus: HousingStatus.FREE_ACCOMMODATION,
        maritalStatus: MaritalStatus.SINGLE
      }
    });
  }
}
