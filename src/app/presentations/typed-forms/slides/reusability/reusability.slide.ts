import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-reusability-slide',
  templateUrl: './reusability.slide.html',
  styleUrl: './reusability.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReusabilitySlide {
  formBuilderProblem = signal(`// Formulaire d'inscription
export class SignupComponent {
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern(/^[0-9]{10}$/)]
  });
}

// Page de profil - COPIER/COLLER du code 😱
export class ProfileComponent {
  form = this.fb.group({
    firstName: ['', Validators.required],  // Même code...
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern(/^[0-9]{10}$/)]
  });
}

// Page de facturation - ENCORE du copier/coller 😱😱
export class BillingComponent {
  form = this.fb.group({
    firstName: ['', Validators.required],  // Toujours le même...
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern(/^[0-9]{10}$/)]
  });
}`);

  typedFormCode = signal(`// Définir UNE SEULE FOIS la classe
export class ContactForm extends FormGroup {
  constructor() {
    super({
      [ContactFormFields.FIRST_NAME]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContactFormFields.LAST_NAME]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [ContactFormFields.EMAIL]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      [ContactFormFields.PHONE]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.pattern(/^[0-9]{10}$/)]
      })
    });
  }

  get firstName() { return this.get(ContactFormFields.FIRST_NAME) as FormControl<string>; }
  get lastName() { return this.get(ContactFormFields.LAST_NAME) as FormControl<string>; }
  get email() { return this.get(ContactFormFields.EMAIL) as FormControl<string>; }
  get phone() { return this.get(ContactFormFields.PHONE) as FormControl<string>; }
}

// ========================================
// Réutiliser PARTOUT sans copier/coller ✨
// ========================================

export class SignupComponent {
  form = new ContactForm();  // C'est tout !
}

export class ProfileComponent {
  form = new ContactForm();  // Même formulaire, même logique
}

export class BillingComponent {
  form = new ContactForm();  // Zéro duplication !
}

// Bonus : si besoin de changer la validation du téléphone
// → On modifie UNE SEULE FOIS dans ContactForm
// → Tous les composants sont mis à jour automatiquement`);
}
