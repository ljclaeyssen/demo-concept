import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-value-changes-slide',
  templateUrl: './value-changes.slide.html',
  styleUrl: './value-changes.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueChangesSlide {
  reactiveDisable = signal(`// Disable conditionnel
this.controls.montant.valueChanges
  .pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe(montant => {
    montant < 10000
      ? this.controls.codePromo.disable()
      : this.controls.codePromo.enable();
  });`);

  signalDisable = signal(`// Disable conditionnel
disabled(f.codePromo,
  () => f.montant().value() < 10000
);`);

  reactiveRevalidation = signal(`// Revalidation cross-field
this.controls.typeContrat.valueChanges
  .pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe(type => {
    const duree = this.controls.duree;
    if (type === 'CDD') {
      duree.setValidators([
        Validators.required,
        Validators.min(6),
        Validators.max(60),
      ]);
    } else {
      duree.setValidators([
        Validators.required,
        Validators.min(6),
        Validators.max(360),
      ]);
    }
    duree.updateValueAndValidity();
  });`);

  signalRevalidation = signal(`// Revalidation cross-field
validate(f.duree, ({ value, valueOf }) => {
  const type = valueOf(f.typeContrat);
  const max = type === 'CDD' ? 60 : 360;
  return value() > max
    ? {
        kind: 'maxDuree',
        message: \`Max \${max} mois\`
      }
    : null;
});`);
}
