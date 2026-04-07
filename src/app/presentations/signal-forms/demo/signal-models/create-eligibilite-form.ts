import { signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Eligibilite } from './eligibilite.interfaces';
import { informationsValidators } from './informations-validators';
import { coordonneesValidators } from './coordonnees-validators';
import { contratValidators } from './contrat-validators';

export function createEligibiliteForm() {
  const model = signal<Eligibilite>({
    informations: {
      genre: '',
      prenom: '',
      nom: '',
      nomJeuneFille: '',
    },
    coordonnees: {
      adresse: '',
      email: '',
      telephone: '',
    },
    contrat: {
      typeContrat: '',
      duree: 12,
      montant: 0,
      apport: 0,
      assurance: false,
      codePromo: '',
    },
  });

  const eligibiliteForm = form(model, f => {
    informationsValidators(f.informations);
    coordonneesValidators(f.coordonnees);
    contratValidators(f.contrat);
  });

  return { form: eligibiliteForm, model };
}
