import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-full-example-slide',
  templateUrl: './full-example.slide.html',
  styleUrl: './full-example.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullExampleSlide {
  reactiveCode = signal(`export class EligibiliteFormGroup
  extends FormGroup<EligibiliteControls> {

  private destroyRef = inject(DestroyRef);

  readonly mensualite$ = this.valueChanges.pipe(
    startWith(this.getRawValue()),
    map(v => this.calculMensualite(v)),
    shareReplay(1),
  );

  constructor() {
    super({
      typeContrat: new FormControl<TypeContrat>('CDI', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      montant: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.required,
          Validators.min(1000), Validators.max(500000)],
      }),
      duree: new FormControl(12, {
        nonNullable: true,
        validators: [Validators.required,
          Validators.min(6), Validators.max(360)],
      }),
      apport: new FormControl(0, {
        nonNullable: true, validators: [Validators.min(0)],
      }),
      assurance: new FormControl(false, {
        nonNullable: true,
      }),
      codePromo: new FormControl('', {
        nonNullable: true,
      }),
    });
    this.setupReactions();
  }

  private setupReactions(): void {
    // CDD -> durée max 60
    this.controls.typeContrat.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(type => {
        const duree = this.controls.duree;
        const max = type === 'CDD' ? 60 : 360;
        duree.setValidators([Validators.required,
          Validators.min(6), Validators.max(max)]);
        duree.updateValueAndValidity();
      });

    // apport > 50% -> assurance optionnelle
    this.controls.apport.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(apport => {
        const ratio = this.controls.montant.value > 0
          ? apport / this.controls.montant.value : 0;
        ratio > 0.5
          ? this.controls.assurance.clearValidators()
          : this.controls.assurance
              .setValidators(Validators.requiredTrue);
        this.controls.assurance
          .updateValueAndValidity();
      });

    // codePromo disabled si montant < 10000
    this.controls.montant.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(m => m < 10000
        ? this.controls.codePromo.disable()
        : this.controls.codePromo.enable());
  }

  private calculMensualite(v: typeof this.value) {
    const capital = (v.montant ?? 0) - (v.apport ?? 0);
    const n = v.duree ?? 12;
    const r = 0.035 / 12;
    return capital * r / (1 - Math.pow(1 + r, -n));
  }
}`);

  signalCode = signal(`export function createEligibiliteForm(
  revenus: Signal<number>
) {
  const model = signal<Eligibilite>({
    typeContrat: 'CDI', montant: 0,
    duree: 12, apport: 0,
    assurance: false, codePromo: '',
  });

  const f = form(model, f => {
    required(f.typeContrat);
    required(f.montant);
    min(f.montant, 1000);
    max(f.montant, 500000);

    required(f.duree);
    min(f.duree, 6);
    validate(f.duree, ({ value, valueOf }) => {
      const type = valueOf(f.typeContrat);
      const max = type === 'CDD' ? 60 : 360;
      return value() > max
        ? { kind: 'maxDuree',
            message: \`Max \${max} mois\` }
        : null;
    });

    min(f.apport, 0);

    validate(f.assurance, ({ value, valueOf }) => {
      const montant = valueOf(f.montant);
      const apport = valueOf(f.apport);
      const ratio = montant > 0 ? apport / montant : 0;
      if (ratio <= 0.5 && !value()) {
        return { kind: 'assuranceRequise',
          message: 'Assurance obligatoire' };
      }
      return null;
    });

    disabled(f.codePromo,
      () => f.montant().value() < 10000);
  });

  const mensualite = computed(() => {
    const v = model();
    const capital = v.montant - v.apport;
    const n = v.duree || 12;
    const r = 0.035 / 12;
    return capital * r / (1 - Math.pow(1 + r, -n));
  });

  return { form: f, model, mensualite };
}`);
}
