import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

interface CodeTab {
  key: string;
  label: string;
  typedForm: { content: string; language: string };
  signalForm: { content: string; language: string };
}

@Component({
  selector: 'app-sf-code-comparison-dialog',
  templateUrl: './code-comparison-dialog.component.html',
  styleUrl: './code-comparison-dialog.component.scss',
  imports: [Highlight, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComparisonDialogComponent {
  private ref = inject(DynamicDialogRef);

  selectedTab = signal<string>('enums');

  tabs: CodeTab[] = [
    {
      key: 'enums',
      label: 'Enums / Interface',
      typedForm: {
        language: 'typescript',
        content: `enum InformationsFormFields {
  GENRE = 'genre',
  PRENOM = 'prenom',
  NOM = 'nom',
  NOM_JEUNE_FILLE = 'nomJeuneFille'
}

enum CoordonneesFormFields {
  ADRESSE = 'adresse',
  EMAIL = 'email',
  TELEPHONE = 'telephone'
}

enum ContratFormFields {
  TYPE_CONTRAT = 'typeContrat',
  DUREE = 'duree',
  MONTANT = 'montant',
  APPORT = 'apport',
  ASSURANCE = 'assurance',
  CODE_PROMO = 'codePromo'
}

enum EligibiliteFormFields {
  INFORMATIONS = 'informations',
  COORDONNEES = 'coordonnees',
  CONTRAT = 'contrat'
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

enum ContractType {
  CDI = 'cdi',
  CDD = 'cdd',
  STUDENT = 'student',
  RETIRED = 'retired'
}`
      },
      signalForm: {
        language: 'typescript',
        content: `interface Informations {
  genre: string;
  prenom: string;
  nom: string;
  nomJeuneFille: string;
}

interface Coordonnees {
  adresse: string;
  email: string;
  telephone: string;
}

interface Contrat {
  typeContrat: string;
  duree: number;
  montant: number;
  apport: number;
  assurance: boolean;
  codePromo: string;
}

interface Eligibilite {
  informations: Informations;
  coordonnees: Coordonnees;
  contrat: Contrat;
}`
      }
    },
    {
      key: 'informations',
      label: 'Informations',
      typedForm: {
        language: 'typescript',
        content: `export class InformationsForm extends FormGroup {
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
      [InformationsFormFields.NOM_JEUNE_FILLE]: new FormControl<string>(
        { value: '', disabled: true },
        { nonNullable: true }
      )
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

  get genre() {
    return this.get(InformationsFormFields.GENRE) as FormControl<string>;
  }
  get prenom() {
    return this.get(InformationsFormFields.PRENOM) as FormControl<string>;
  }
  get nom() {
    return this.get(InformationsFormFields.NOM) as FormControl<string>;
  }
  get nomJeuneFille() {
    return this.get(InformationsFormFields.NOM_JEUNE_FILLE) as FormControl<string>;
  }
}`
      },
      signalForm: {
        language: 'typescript',
        content: `import { signal } from '@angular/core';
import {
  form, FormField, required, hidden,
  SchemaPathTree
} from '@angular/forms/signals';

interface Informations {
  genre: string;
  prenom: string;
  nom: string;
  nomJeuneFille: string;
}

// Fonction de validators réutilisable
export function informationsValidators(
  f: SchemaPathTree<Informations>
) {
  required(f.genre, { message: 'Genre requis' });
  required(f.prenom, { message: 'Prénom requis' });
  required(f.nom, { message: 'Nom requis' });

  // Logique adaptative : nom de jeune fille
  // hidden si genre === 'male'
  hidden(f.nomJeuneFille,
    ({valueOf}) => valueOf(f.genre) === 'male'
  );

  // Pas de subscribe, pas de cleanup
  // Pas de updateValueAndValidity
  // Réactivité automatique via valueOf()
}

// Usage standalone :
const model = signal<Informations>({
  genre: '', prenom: '', nom: '',
  nomJeuneFille: '',
});
const informationsForm = form(model,
  informationsValidators
);`
      }
    },
    {
      key: 'coordonnees',
      label: 'Coordonnées',
      typedForm: {
        language: 'typescript',
        content: `export class CoordonneesForm extends FormGroup {
  constructor() {
    super({
      [CoordonneesFormFields.ADRESSE]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [CoordonneesFormFields.EMAIL]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      [CoordonneesFormFields.TELEPHONE]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\\d{10}$/)]
      })
    });
  }

  get adresse() {
    return this.get(CoordonneesFormFields.ADRESSE) as FormControl<string>;
  }
  get email() {
    return this.get(CoordonneesFormFields.EMAIL) as FormControl<string>;
  }
  get telephone() {
    return this.get(CoordonneesFormFields.TELEPHONE) as FormControl<string>;
  }
}`
      },
      signalForm: {
        language: 'typescript',
        content: `import { signal } from '@angular/core';
import {
  form, FormField, required, email, pattern,
  SchemaPathTree
} from '@angular/forms/signals';

interface Coordonnees {
  adresse: string;
  email: string;
  telephone: string;
}

// Fonction de validators réutilisable
export function coordonneesValidators(
  f: SchemaPathTree<Coordonnees>
) {
  required(f.adresse,
    { message: 'Adresse requise' });

  required(f.email,
    { message: 'Email requis' });
  email(f.email,
    { message: 'Email invalide' });

  required(f.telephone,
    { message: 'Téléphone requis' });
  pattern(f.telephone, /^\\d{10}$/,
    { message: 'Format : 10 chiffres' });
}

// Usage standalone :
const model = signal<Coordonnees>({
  adresse: '', email: '', telephone: '',
});
const coordonneesForm = form(model,
  coordonneesValidators
);`
      }
    },
    {
      key: 'contrat',
      label: 'Contrat',
      typedForm: {
        language: 'typescript',
        content: `export class ContratForm extends FormGroup {
  private destroyRef = inject(DestroyRef);

  constructor() {
    super({
      [ContratFormFields.TYPE_CONTRAT]: new FormControl<string>('', {
        nonNullable: true, validators: [Validators.required]
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
        nonNullable: true, validators: [Validators.min(0)]
      }),
      [ContratFormFields.ASSURANCE]: new FormControl<boolean>(false, {
        nonNullable: true
      }),
      [ContratFormFields.CODE_PROMO]: new FormControl<string>(
        { value: '', disabled: true },
        { nonNullable: true }
      )
    });
    this.setupReactions();
  }

  private setupReactions() {
    // CDD → durée max 60
    this.typeContrat.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(type => {
        const max = type === ContractType.CDD ? 60 : 360;
        this.duree.setValidators([
          Validators.required, Validators.min(6), Validators.max(max)
        ]);
        this.duree.updateValueAndValidity();
      });

    // montant < 10000 → disable codePromo
    this.montant.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(m => m < 10000
        ? this.codePromo.disable()
        : this.codePromo.enable()
      );

    // apport <= 50% → assurance obligatoire
    this.montant.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateAssuranceValidators());

    this.apport.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateAssuranceValidators());
  }

  private updateAssuranceValidators() {
    const ratio = this.montant.value > 0
      ? this.apport.value / this.montant.value : 0;
    ratio > 0.5
      ? this.assurance.clearValidators()
      : this.assurance.setValidators(Validators.requiredTrue);
    this.assurance.updateValueAndValidity();
  }

  get typeContrat() { /* ... */ }
  get duree() { /* ... */ }
  get montant() { /* ... */ }
  get apport() { /* ... */ }
  get assurance() { /* ... */ }
  get codePromo() { /* ... */ }
}`
      },
      signalForm: {
        language: 'typescript',
        content: `import { signal } from '@angular/core';
import {
  form, FormField, required, min, max,
  validate, disabled, SchemaPathTree
} from '@angular/forms/signals';

interface Contrat {
  typeContrat: string;
  duree: number;
  montant: number;
  apport: number;
  assurance: boolean;
  codePromo: string;
}

// Fonction de validators réutilisable
export function contratValidators(
  f: SchemaPathTree<Contrat>
) {
  required(f.typeContrat);
  required(f.montant);
  min(f.montant, 1000);
  max(f.montant, 500000);

  // Durée : max dépend du type de contrat
  required(f.duree);
  min(f.duree, 6);
  validate(f.duree, ({value, valueOf}) => {
    const type = valueOf(f.typeContrat);
    const mx = type === 'CDD' ? 60 : 360;
    return value() > mx
      ? { kind: 'maxDuree',
          message: \`Max \${mx} mois\` }
      : null;
  });

  min(f.apport, 0);

  // Assurance obligatoire si apport <= 50%
  validate(f.assurance, ({value, valueOf}) => {
    const montant = valueOf(f.montant);
    const apport = valueOf(f.apport);
    const ratio = montant > 0
      ? apport / montant : 0;
    if (ratio <= 0.5 && !value()) {
      return {
        kind: 'assuranceRequise',
        message: 'Assurance obligatoire'
      };
    }
    return null;
  });

  // Code promo disabled si montant < 10000
  disabled(f.codePromo,
    ({valueOf}) => valueOf(f.montant) < 10000
  );
}

// Usage standalone :
const model = signal<Contrat>({
  typeContrat: '', duree: 12,
  montant: 0, apport: 0,
  assurance: false, codePromo: '',
});
const contratForm = form(model,
  contratValidators
);

// 0 subscribe, 0 setValidators
// 0 updateValueAndValidity, 0 DestroyRef`
      }
    },
    {
      key: 'composition',
      label: 'Composition',
      typedForm: {
        language: 'typescript',
        content: `export class EligibiliteForm extends FormGroup {
  constructor() {
    super({
      [EligibiliteFormFields.INFORMATIONS]:
        new InformationsForm(),
      [EligibiliteFormFields.COORDONNEES]:
        new CoordonneesForm(),
      [EligibiliteFormFields.CONTRAT]:
        new ContratForm()
    });
  }

  get informations(): InformationsForm {
    return this.get(
      EligibiliteFormFields.INFORMATIONS
    ) as InformationsForm;
  }

  get coordonnees(): CoordonneesForm {
    return this.get(
      EligibiliteFormFields.COORDONNEES
    ) as CoordonneesForm;
  }

  get contrat(): ContratForm {
    return this.get(
      EligibiliteFormFields.CONTRAT
    ) as ContratForm;
  }
}

// Usage dans le component :
export class EligibiliteComponent {
  form = new EligibiliteForm();

  submit() {
    const data = this.form.getRawValue();
    console.log(data.informations.prenom);
    console.log(data.contrat.montant);
  }
}`
      },
      signalForm: {
        language: 'typescript',
        content: `import { signal, Component } from '@angular/core';
import {
  form, FormField, submit
} from '@angular/forms/signals';
import { informationsValidators }
  from './informations-validators';
import { coordonneesValidators }
  from './coordonnees-validators';
import { contratValidators }
  from './contrat-validators';

interface Eligibilite {
  informations: Informations;
  coordonnees: Coordonnees;
  contrat: Contrat;
}

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

  const eligibiliteForm = form(model, f => {
    // Sous-schemas réutilisables
    informationsValidators(f.informations);
    coordonneesValidators(f.coordonnees);
    contratValidators(f.contrat);
  });

  return { form: eligibiliteForm, model };
}

// ============================================
// Usage dans le component :
// ============================================
@Component({
  imports: [FormField],
  template: \`
    <form novalidate>
      <input [formField]="f.form
        .informations.prenom" />
      <input [formField]="f.form
        .coordonnees.email" />
      <input type="number" [formField]="f.form
        .contrat.montant" />

      <button type="submit"
        [disabled]="f.form().invalid()"
        (click)="onSubmit()">
        Valider
      </button>
    </form>
  \`
})
export class EligibiliteComponent {
  f = createEligibiliteForm();

  onSubmit() {
    submit(this.f.form, {
      action: async () => {
        const data = this.f.model();
        console.log(data.informations.prenom);
        console.log(data.contrat.montant);
        // await this.api.save(data);
      },
    });
  }
}`
      }
    }
  ];

  currentTab = computed(() => this.tabs.find(t => t.key === this.selectedTab())!);

  selectTab(key: string) {
    this.selectedTab.set(key);
  }

  close() {
    this.ref.close();
  }
}
