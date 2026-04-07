import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { JsonPipe } from '@angular/common';
import { FormField, submit } from '@angular/forms/signals';
import { createEligibiliteForm } from '../../signal-models/create-eligibilite-form';

@Component({
  selector: 'app-sf-eligibilite-demo',
  templateUrl: './eligibilite-demo.component.html',
  styleUrl: './eligibilite-demo.component.scss',
  imports: [CardModule, ButtonModule, FormField, JsonPipe],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EligibiliteDemoComponent {
  private dialogService = inject(DialogService);

  f = createEligibiliteForm();

  prefill() {
    this.f.model.set({
      informations: {
        genre: 'male',
        prenom: 'Socket',
        nom: 'Le Teckel',
        nomJeuneFille: '',
      },
      coordonnees: {
        adresse: '42 rue du Signal',
        email: 'socket@teckel.fr',
        telephone: '0606060606',
      },
      contrat: {
        typeContrat: 'cdi',
        duree: 240,
        montant: 200000,
        apport: 40000,
        assurance: true,
        codePromo: '',
      },
    });
  }

  reset() {
    this.f.form().reset();
  }

  onSubmit() {
    submit(this.f.form, {
      action: async () => {
        console.log('Submitted:', this.f.model());
        alert('Formulaire soumis ! Voir la console.');
      },
    });
  }
}
