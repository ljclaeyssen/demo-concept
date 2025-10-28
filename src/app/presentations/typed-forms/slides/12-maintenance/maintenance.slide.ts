import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-maintenance-slide',
  templateUrl: './maintenance.slide.html',
  styleUrl: './maintenance.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceSlide {
  formBuilderSteps = signal(`// Tâche : Ajouter un champ "middleName" au formulaire

// 1️⃣ Modifier la création du form (component.ts)
this.form = this.fb.group({
  firstName: ['', Validators.required],
  middleName: [''],  // ← Nouveau champ
  lastName: ['', Validators.required]
});

// 2️⃣ Ajouter dans le template (component.html)
<input formControlName="middleName" />

// 3️⃣ Modifier les interfaces de données (models.ts)
interface UserData {
  firstName: string;
  middleName?: string;  // ← Nouveau champ
  lastName: string;
}

// 4️⃣ Modifier les appels API (service.ts)
updateUser(data: UserData) {
  return this.http.post('/api/user', {
    firstName: data.firstName,
    middleName: data.middleName,  // ← À ne pas oublier !
    lastName: data.lastName
  });
}

// 5️⃣ Mettre à jour les tests (component.spec.ts)
it('should save middle name', () => {
  component.form.patchValue({
    firstName: 'John',
    middleName: 'Michael',  // ← Nouveau test
    lastName: 'Doe'
  });
});

// ⚠️ 5+ fichiers à modifier manuellement
// ⚠️ Risque d'oublier un endroit = bug en prod`);

  typedFormSteps = signal(`// Tâche : Ajouter un champ "middleName" au formulaire

// 1️⃣ Ajouter l'enum (user-form.enums.ts)
export enum UserFormFields {
  FIRST_NAME = 'firstName',
  MIDDLE_NAME = 'middleName',  // ← Nouveau champ
  LAST_NAME = 'lastName'
}

// 2️⃣ Ajouter dans la classe (user-form.ts)
export class UserForm extends FormGroup {
  constructor() {
    super({
      [UserFormFields.FIRST_NAME]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [UserFormFields.MIDDLE_NAME]: new FormControl<string>('', {
        nonNullable: true
      }),  // ← Nouveau champ avec getter auto-généré
      [UserFormFields.LAST_NAME]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }

  get middleName() {
    return this.get(UserFormFields.MIDDLE_NAME) as FormControl<string>;
  }
}

// 3️⃣ Ajouter dans le template (component.html)
<input [formControl]="form.middleName" />

// ✅ C'est tout ! TypeScript détecte automatiquement :
//    - L'interface UserData est mise à jour (getRawValue())
//    - Les tests cassés sont signalés
//    - Les appels API incomplets sont en erreur
// ✅ Impossible d'oublier un endroit`);

  comparison = signal(`📊 Comparaison Maintenance

FormBuilder:
- 5+ fichiers à modifier manuellement
- Risque d'oublier des endroits
- Tests manuels nécessaires
- Bugs découverts en prod
- Temps : ~30 minutes

Classes typées:
- 2 fichiers à modifier
- TypeScript détecte les oublis
- Tests compilent ou cassent
- Bugs impossibles
- Temps : ~5 minutes

💡 Gain : 6x plus rapide et sans risque !`);
}
