import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-cross-field-slide',
  templateUrl: './cross-field.slide.html',
  styleUrl: './cross-field.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrossFieldSlide {
  reactiveCode = signal(`export class AdresseFormGroup
  extends FormGroup<AdresseControls> {

  constructor(data?: Partial<Adresse>) {
    super({ /* controls... */ }, {
      validators: [AdresseFormGroup.cpMatchPays]
    });

    // subscribe pour trigger la revalidation
    this.controls.pays.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() =>
        this.controls.codePostal
          .updateValueAndValidity()
      );
  }

  private static cpMatchPays(
    group: AbstractControl
  ): ValidationErrors | null {
    const g = group as AdresseFormGroup;
    const pays = g.controls.pays.value;
    const cp = g.controls.codePostal.value;

    if (pays === 'FR' && !/^\\d{5}$/.test(cp)) {
      return { cpFormatFR: true };
    }
    return null;
  }
}`);

  signalCode = signal(`export function createAdresseForm(
  data?: Partial<Adresse>
) {
  const model = signal<Adresse>({ /* ... */ });

  return form(model, f => {
    required(f.codePostal);
    required(f.pays);

    // Cross-field : valueOf() lit un autre champ
    validate(f.codePostal, ({ value, valueOf }) => {
      const pays = valueOf(f.pays);
      const cp = value();

      if (pays === 'FR' && !/^\\d{5}$/.test(cp)) {
        return {
          kind: 'cpFormatFR',
          message: 'Format FR : 5 chiffres'
        };
      }
      return null;
    });
  });
}`);
}
