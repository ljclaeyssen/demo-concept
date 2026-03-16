import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-nouveautes-slide',
  templateUrl: './nouveautes.slide.html',
  styleUrl: './nouveautes.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NouveautesSlide {
  formRootCode = signal(`// FormRoot — soumission déclarative
@Component({
  imports: [FormField, FormRoot],
  template: \`
    <form [formRoot]="adresseForm">
      <input [formField]="adresseForm.rue" />
      <button type="submit">Valider</button>
    </form>
  \`
})
export class AdresseComponent {
  adresseForm = createAdresseForm();

  async onSubmit() {
    // submit() retourne Promise<boolean>
    // preventDefault + novalidate automatiques
    const ok = await submit(this.adresseForm);
  }
}`);

  transformedValueCode = signal(`// transformedValue — parse / format
import { transformedValue }
  from '@angular/forms/signals';

@Component({ /* ... */ })
export class MoneyInput
  implements FormValueControl<number> {

  value = model(0);

  // Transforme number ↔ string pour l'UI
  raw = transformedValue(this.value, {
    parse: (str: string) => {
      const n = parseFloat(str);
      return isNaN(n)
        ? { error: 'Nombre invalide' }
        : { value: n };
    },
    format: (n: number) => n.toFixed(2),
  });

  // raw.parseErrors() → erreurs de parsing
}`);

  standardSchemaCode = signal(`// validateStandardSchema — Zod / Valibot
import { validateStandardSchema }
  from '@angular/forms/signals';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

const model = signal({ email: '', age: 0 });

return form(model, f => {
  // Branche la validation Zod directement
  validateStandardSchema(f, schema);
});

// Compatible Standard Schema (Zod, Valibot…)
// Erreurs automatiquement mappées
// aux champs correspondants`);
}
