import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, startWith } from 'rxjs';
import { ContratFormFields, ContractType } from './eligibilite-form.enums';

export class ContratForm extends FormGroup {
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    super({
      [ContratFormFields.TYPE_CONTRAT]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContratFormFields.DUREE]: new FormControl<number>(12, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(6)]
      }),
      [ContratFormFields.MONTANT]: new FormControl<number>(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1000), Validators.max(500000)]
      }),
      [ContratFormFields.APPORT]: new FormControl<number>(0, {
        nonNullable: true,
        validators: [Validators.min(0)]
      }),
      [ContratFormFields.ASSURANCE]: new FormControl<boolean>(false, {
        nonNullable: true
      }),
      [ContratFormFields.CODE_PROMO]: new FormControl<string>({ value: '', disabled: true }, {
        nonNullable: true
      })
    });

    this.setupReactions();
  }

  private setupReactions() {
    this.typeContrat.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(type => {
        if (type === ContractType.CDD) {
          this.duree.setValidators([Validators.required, Validators.min(6), Validators.max(60)]);
        } else {
          this.duree.setValidators([Validators.required, Validators.min(6), Validators.max(360)]);
        }
        this.duree.updateValueAndValidity();
      });

    this.montant.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(montant => {
        if (montant < 10000) {
          this.codePromo.disable();
        } else {
          this.codePromo.enable();
        }
      });

    combineLatest([
      this.montant.valueChanges.pipe(startWith(this.montant.value)),
      this.apport.valueChanges.pipe(startWith(this.apport.value))
    ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([montant, apport]) => {
        const ratio = montant > 0 ? apport / montant : 0;
        if (ratio <= 0.5) {
          this.assurance.setValidators(Validators.requiredTrue);
        } else {
          this.assurance.clearValidators();
        }
        this.assurance.updateValueAndValidity();
      });
  }

  get typeContrat() { return this.get(ContratFormFields.TYPE_CONTRAT) as FormControl<string>; }
  get duree() { return this.get(ContratFormFields.DUREE) as FormControl<number>; }
  get montant() { return this.get(ContratFormFields.MONTANT) as FormControl<number>; }
  get apport() { return this.get(ContratFormFields.APPORT) as FormControl<number>; }
  get assurance() { return this.get(ContratFormFields.ASSURANCE) as FormControl<boolean>; }
  get codePromo() { return this.get(ContratFormFields.CODE_PROMO) as FormControl<string>; }
}
