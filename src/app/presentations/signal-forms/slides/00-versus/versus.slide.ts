import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-versus-slide',
  templateUrl: './versus.slide.html',
  styleUrl: './versus.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersusSlide {
  reactiveCode = signal(`export class AdresseFormGroup extends FormGroup<AdresseControls> {

  constructor(data?: Partial<Adresse>) {
    super({
      rue: new FormControl(data?.rue ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      codePostal: new FormControl(data?.codePostal ?? '', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\\d{5}$/)],
      }),
      ville: new FormControl(data?.ville ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  get adresse(): Adresse {
    return this.getRawValue();
  }
}`);

  signalCode = signal(`export function createAdresseForm(data?: Partial<Adresse>) {
  const model = signal<Adresse>({
    rue: data?.rue ?? '',
    codePostal: data?.codePostal ?? '',
    ville: data?.ville ?? '',
  });

  return form(model, f => {
    required(f.rue, { message: 'Rue requise' });

    required(f.codePostal, { message: 'Code postal requis' });
    pattern(f.codePostal, /^\\d{5}$/, { message: 'Format invalide' });

    required(f.ville, { message: 'Ville requise' });
  });
}`);
}
