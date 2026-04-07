import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CodeComparisonDialogComponent } from '../../demo/components/code-comparison-dialog/code-comparison-dialog.component';

@Component({
  selector: 'app-sf-full-example-slide',
  templateUrl: './full-example.slide.html',
  styleUrl: './full-example.slide.scss',
  imports: [Highlight, ButtonModule],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullExampleSlide {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  reactiveCode = signal(`// 3 classes + 6 enums + DestroyRef + subscriptions
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

// Chaque sous-form = classe + constructor + subscribe
// + setValidators + updateValueAndValidity
// + takeUntilDestroyed + DestroyRef
// + getters typés manuels

// ContratForm seul = ~80 lignes
// Total : ~200 lignes de code formulaire`);

  signalCode = signal(`// 1 fonction + 1 interface + 0 subscribe
export function createEligibiliteForm() {
  const model = signal<Eligibilite>({
    informations: {
      genre: '', prenom: '', nom: '',
      nomJeuneFille: '',
    },
    coordonnees: {
      adresse: '', email: '', telephone: '',
    },
    contrat: {
      typeContrat: '', duree: 12,
      montant: 0, apport: 0,
      assurance: false, codePromo: '',
    },
  });

  return form(model, f => {
    // Informations
    required(f.informations.genre);
    required(f.informations.prenom);
    required(f.informations.nom);
    hidden(f.informations.nomJeuneFille,
      ({valueOf}) => valueOf(f.informations.genre) === 'male');

    // Coordonnées
    required(f.coordonnees.adresse);
    required(f.coordonnees.email);
    email(f.coordonnees.email);
    pattern(f.coordonnees.telephone, /^\\\\d{10}$/);

    // Contrat
    required(f.contrat.typeContrat);
    min(f.contrat.montant, 1000);
    max(f.contrat.montant, 500000);
    min(f.contrat.duree, 6);
    validate(f.contrat.duree, ({value, valueOf}) => {
      const type = valueOf(f.contrat.typeContrat);
      const max = type === 'CDD' ? 60 : 360;
      return value() > max
        ? { kind: 'maxDuree', message: \`Max \${max} mois\` }
        : null;
    });
    validate(f.contrat.assurance, ({value, valueOf}) => {
      const ratio = valueOf(f.contrat.montant) > 0
        ? valueOf(f.contrat.apport) / valueOf(f.contrat.montant)
        : 0;
      return ratio <= 0.5 && !value()
        ? { kind: 'assuranceRequise', message: 'Obligatoire' }
        : null;
    });
    disabled(f.contrat.codePromo,
      ({valueOf}) => valueOf(f.contrat.montant) < 10000);
  });
}

// Total : ~55 lignes — même fonctionnalité`);

  openCodeComparison() {
    this.ref = this.dialogService.open(CodeComparisonDialogComponent, {
      width: '95vw',
      height: '90vh',
      modal: true,
      draggable: false,
      resizable: false,
      styleClass: 'code-comparison-dialog',
    });
  }
}
