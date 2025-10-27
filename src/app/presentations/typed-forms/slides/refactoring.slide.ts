import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-refactoring-slide',
  templateUrl: './refactoring.slide.html',
  styleUrl: './refactoring.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefactoringSlide {
  formBuilderCode = signal(`// Avec FormBuilder - recherche manuelle de toutes les strings
this.form = this.fb.group({
  firstName: [''],
  lastName: ['']
});

// Dans le template
<input formControlName="firstName">

// Dans le component
const name = this.form.get('firstName')?.value;

// Dans les validators
firstName: ['', Validators.required]

// Dans les tests
expect(component.form.get('firstName')?.value).toBe('John');

// ========================================
// Renommer "firstName" en "givenName"
// ========================================
// ❌ Impossible d'utiliser "Renommer symbole" (Shift+F6)
// ❌ Chercher/remplacer "firstName" = risque de casser autre chose
// ❌ Peut oublier des endroits (template, tests, validators...)
// ❌ Erreurs découvertes à l'exécution seulement

this.form = this.fb.group({
  givenName: [''],  // Oublié de renommer dans le template !
  lastName: ['']
});`);

  typedFormCode = signal(`// Avec classes typées - enum pour tous les champs
enum UserFormFields {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName'
}

export class UserForm extends FormGroup {
  constructor() {
    super({
      [UserFormFields.FIRST_NAME]: new FormControl<string>(''),
      [UserFormFields.LAST_NAME]: new FormControl<string>('')
    });
  }

  get firstName() {
    return this.get(UserFormFields.FIRST_NAME) as FormControl<string>;
  }
}

// ========================================
// Renommer "FIRST_NAME" en "GIVEN_NAME"
// ========================================
// ✅ Shift+F6 sur l'enum renomme PARTOUT automatiquement
// ✅ TypeScript détecte immédiatement les références cassées
// ✅ Impossible d'oublier un endroit
// ✅ Erreurs à la compilation

enum UserFormFields {
  GIVEN_NAME = 'givenName',  // Shift+F6 ici...
  LAST_NAME = 'lastName'
}

// ... et tous les usages sont mis à jour automatiquement !`);
}
