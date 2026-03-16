import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-async-validation-slide',
  templateUrl: './async-validation.slide.html',
  styleUrl: './async-validation.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncValidationSlide {
  reactiveCode = signal(`// Dans la classe FormGroup
private promoService = inject(PromoService);

constructor() {
  super({
    codePromo: new FormControl('', {
      nonNullable: true,
      asyncValidators: [this.checkPromo()],
      updateOn: 'blur',
    }),
  });
}

private checkPromo(): AsyncValidatorFn {
  return (ctrl: AbstractControl) => {
    if (!ctrl.value) return of(null);

    return this.promoService.check(ctrl.value).pipe(
      map(valid =>
        valid ? null : { promoInvalide: true }
      ),
      catchError(() => of(null)),
      first(),
    );
  };
}`);

  signalCode = signal(`// Dans le schema
validateHttp(f.codePromo, {
  request: ({ value }) =>
    value()
      ? \`/api/promo/check?code=\${value()}\`
      : undefined,
  onSuccess: (result) =>
    result.valid
      ? undefined
      : customError({
          kind: 'promoInvalide',
          message: 'Code promo invalide'
        }),
  onError: () => undefined,
});

// validateHttp gère :
// - debounce automatique
// - cancellation
// - lifecycle`);
}
