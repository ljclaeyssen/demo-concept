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
  model = signal<Adresse>({ rue: '', cp: '', ville: '' });

  adresseForm = form(this.model, (f) => {
    required(f.rue);
    required(f.ville);
  }, {
    submission: {
      action: async () => {
        await this.api.save(this.model());
      },
    },
  });
  // preventDefault + novalidate automatiques
  // touched sur tous les champs avant action
}`);

  transformedValueCode = signal(`// linkedSignal — transformation d'affichage
import { linkedSignal, model }
  from '@angular/core';
import { FormValueControl }
  from '@angular/forms/signals';

@Component({ /* ... */ })
export class MoneyInput
  implements FormValueControl<number> {

  value = model(0);

  // Transforme number → string pour l'UI
  displayValue = linkedSignal(
    () => this.value().toFixed(2)
  );

  updateModel() {
    const n = parseFloat(
      this.displayValue().replace(/,/g, '')
    );
    if (!isNaN(n)) this.value.set(n);
  }
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
