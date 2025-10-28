import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-error-discovery-slide',
  templateUrl: './error-discovery.slide.html',
  styleUrl: './error-discovery.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDiscoverySlide {
  formBuilderBugs = signal(`// Bug #1 : Typo dans le nom du champ
this.form = this.fb.group({
  firstName: ['']
});

// Dans le component - typo qui passe la compilation ✅
const name = this.form.get('fistName')?.value;  // 💥 Undefined en prod
// TypeScript dit : "Tout va bien !" 😱

// ========================================

// Bug #2 : Mauvais type de valeur
this.form = this.fb.group({
  age: [0]
});

// On met une string au lieu d'un number - compilation OK ✅
this.form.patchValue({ age: '25' });  // 💥 Type incorrect en prod
// TypeScript dit : "Pas de problème !" 😱

// ========================================

// Bug #3 : Champ supprimé mais code oublié
this.form = this.fb.group({
  // middleName: [''],  <- Commenté/supprimé
  firstName: ['']
});

// Code mort qui compile ✅
const middle = this.form.get('middleName')?.value;  // 💥 Undefined
console.log(middle.toUpperCase());  // 💥💥 Crash en prod !
// TypeScript dit : "RAS !" 😱`);

  solution = signal(`// Avec classes typées : TypeScript détecte TOUT ✅
enum UserFormFields {
  FIRST_NAME = 'firstName',
  AGE = 'age'
}

export class UserForm extends FormGroup {
  constructor() {
    super({
      [UserFormFields.FIRST_NAME]: new FormControl<string>(''),
      [UserFormFields.AGE]: new FormControl<number>(0)
    });
  }

  get firstName() {
    return this.get(UserFormFields.FIRST_NAME) as FormControl<string>;
  }
}

// Typo ? ❌ Erreur de compilation immédiate
const name = form.get(UserFormFields.FIST_NAME);  // ❌ N'existe pas !

// Mauvais type ? ❌ Erreur de compilation
form.patchValue({ age: '25' });  // ❌ Type 'string' incompatible !

// Champ supprimé ? ❌ Tous les usages en erreur
const middle = form.middleName;  // ❌ Propriété inexistante !`);
}
