import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {SelectModule} from 'primeng/select';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {RegistrationForm} from '../../models/registration-form';
import {
  genderOptions,
  contractTypeOptions,
  housingStatusOptions,
  maritalStatusOptions
} from '../../models/registration-form.options';
import {
  Gender,
  ContractType,
  HousingStatus,
  MaritalStatus
} from '../../models/registration-form.enums';
import {SubmissionResultDialogComponent} from '../submission-result-dialog/submission-result-dialog.component';

@Component({
  selector: 'app-registration-demo',
  templateUrl: './registration-demo.component.html',
  styleUrl: './registration-demo.component.scss',
  imports: [
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    ButtonModule
  ],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationDemoComponent {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  form = new RegistrationForm();

  genderOptions = genderOptions;
  contractTypeOptions = contractTypeOptions;
  housingStatusOptions = housingStatusOptions;
  maritalStatusOptions = maritalStatusOptions;

  onSubmit() {
    if (this.form.valid) {
      this.ref = this.dialogService.open(SubmissionResultDialogComponent, {
        data: this.form.getRawValue(),
        width: '50vw',
        modal: true,
        draggable: false,
        resizable: false
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  reset() {
    this.form.reset();
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
