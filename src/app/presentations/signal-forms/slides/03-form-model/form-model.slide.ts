import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-form-model-slide',
  templateUrl: './form-model.slide.html',
  styleUrl: './form-model.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormModelSlide {
  reactiveCode = signal(`interface AdresseControls {
  rue: FormControl<string>;
  codePostal: FormControl<string>;
  ville: FormControl<string>;
  pays: FormControl<string>;
}

export class AdresseFormGroup
  extends FormGroup<AdresseControls> {

  constructor(data?: Partial<Adresse>) {
    super({
      rue: new FormControl(data?.rue ?? '', {
        nonNullable: true,
      }),
      codePostal: new FormControl(data?.codePostal ?? '', {
        nonNullable: true,
      }),
      ville: new FormControl(data?.ville ?? '', {
        nonNullable: true,
      }),
      pays: new FormControl(data?.pays ?? 'FR', {
        nonNullable: true,
      }),
    });
  }

  get adresse(): Adresse {
    return this.getRawValue();
  }
}`);

  signalCode = signal(`interface Adresse {
  rue: string;
  codePostal: string;
  ville: string;
  pays: string;
}

export function createAdresseForm(
  data?: Partial<Adresse>
) {
  const model = signal<Adresse>({
    rue: data?.rue ?? '',
    codePostal: data?.codePostal ?? '',
    ville: data?.ville ?? '',
    pays: data?.pays ?? 'FR',
  });

  return form(model);
}`);
}
