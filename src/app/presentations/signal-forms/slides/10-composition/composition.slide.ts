import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-composition-slide',
  templateUrl: './composition.slide.html',
  styleUrl: './composition.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompositionSlide {
  reactiveCode = signal(`interface DossierControls {
  civilite: CiviliteFormGroup;
  adresse: AdresseFormGroup;
  eligibilite: EligibiliteFormGroup;
}

export class DossierFormGroup
  extends FormGroup<DossierControls> {

  constructor() {
    super({
      civilite: new CiviliteFormGroup(),
      adresse: new AdresseFormGroup(),
      eligibilite: new EligibiliteFormGroup(),
    });

    // cross-group : co-emprunteur -> montant max
    this.controls.civilite.controls
      .coEmprunteur.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(has => {
        const max = has ? 1000000 : 500000;
        this.controls.eligibilite.controls
          .montant.setValidators([
            Validators.required,
            Validators.min(1000),
            Validators.max(max),
          ]);
        this.controls.eligibilite.controls
          .montant.updateValueAndValidity();
      });
  }
}`);

  signalCode = signal(`interface Dossier {
  civilite: Civilite;
  adresse: Adresse;
  eligibilite: Eligibilite;
}

export function createDossierForm() {
  const model = signal<Dossier>({
    civilite: DEFAULT_CIVILITE,
    adresse: DEFAULT_ADRESSE,
    eligibilite: DEFAULT_ELIGIBILITE,
  });

  return form(model, f => {
    // sous-schemas réutilisables
    civiliteValidators(f.civilite);
    adresseValidators(f.adresse);
    eligibiliteValidators(f.eligibilite);

    // cross-group via valueOf()
    validate(f.eligibilite.montant,
      ({ value, valueOf }) => {
      const has = valueOf(f.civilite.coEmprunteur);
      const max = has ? 1000000 : 500000;
      return value() > max
        ? {
            kind: 'montantMax',
            message: \`Max \${max}€\`
          }
        : null;
    });
  });
}`);
}
