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
  reactiveMaidenCode = signal(`private setupAdaptiveLogic() {
  this.genre.valueChanges.subscribe(genre => {
    if (genre === Gender.MALE) {
      this.nomJeuneFille.disable();
      this.nomJeuneFille.clearValidators();
    } else {
      this.nomJeuneFille.enable();
      if (genre === Gender.FEMALE) {
        this.nomJeuneFille.setValidators(
          [Validators.required]
        );
      } else {
        this.nomJeuneFille.clearValidators();
      }
    }
    this.nomJeuneFille.updateValueAndValidity();
  });
}`);

  signalMaidenCode = signal(`hidden(f.nomJeuneFille,
  ({valueOf}) => valueOf(f.genre) === 'male'
);

required(f.nomJeuneFille, {
  when: ({valueOf}) => valueOf(f.genre) === 'female',
  message: 'Nom de jeune fille requis'
});`);

  reactiveDatesCode = signal(`// group validator + subscribe pour revalider
super({ /* controls... */ }, {
  validators: [ContratForm.dateFinApresDebut]
});

this.dateDebut.valueChanges
  .pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe(() =>
    this.dateFin.updateValueAndValidity()
  );

private static dateFinApresDebut(
  g: AbstractControl
): ValidationErrors | null {
  const debut = (g as ContratForm).dateDebut.value;
  const fin = (g as ContratForm).dateFin.value;
  if (debut && fin && fin <= debut) {
    return { dateFinAvantDebut: true };
  }
  return null;
}`);

  signalDatesCode = signal(`validate(f.dateFin, ({value, valueOf}) => {
  const debut = valueOf(f.dateDebut);
  const fin = value();
  if (debut && fin && fin <= debut) {
    return {
      kind: 'dateFinAvantDebut',
      message: 'Doit être après la date de début'
    };
  }
  return null;
});`);
}
