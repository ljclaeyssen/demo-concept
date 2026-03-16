import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-validation-slide',
  templateUrl: './validation.slide.html',
  styleUrl: './validation.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationSlide {
  reactiveCode = signal(`export class AdresseFormGroup
  extends FormGroup<AdresseControls> {

  constructor(data?: Partial<Adresse>) {
    super({
      rue: new FormControl(data?.rue ?? '', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(200),
        ],
      }),
      codePostal: new FormControl(data?.codePostal ?? '', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(/^\\d{5}$/),
        ],
      }),
      ville: new FormControl(data?.ville ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      pays: new FormControl(data?.pays ?? 'FR', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}`);

  signalCode = signal(`export function createAdresseForm(
  data?: Partial<Adresse>
) {
  const model = signal<Adresse>({
    rue: data?.rue ?? '',
    codePostal: data?.codePostal ?? '',
    ville: data?.ville ?? '',
    pays: data?.pays ?? 'FR',
  });

  return form(model, f => {
    required(f.rue, { message: 'Rue requise' });
    maxLength(f.rue, 200);

    required(f.codePostal, { message: 'CP requis' });
    pattern(f.codePostal, /^\\d{5}$/,
      { message: 'Code postal invalide' });

    required(f.ville, { message: 'Ville requise' });
    required(f.pays);
  });
}`);
}
