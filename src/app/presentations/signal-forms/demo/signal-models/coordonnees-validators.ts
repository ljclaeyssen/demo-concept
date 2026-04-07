import { SchemaPathTree, required, email, pattern } from '@angular/forms/signals';
import { Coordonnees } from './eligibilite.interfaces';

export function coordonneesValidators(f: SchemaPathTree<Coordonnees>) {
  required(f.adresse, { message: 'Adresse requise' });
  required(f.email, { message: 'Email requis' });
  email(f.email, { message: 'Email invalide' });
  required(f.telephone, { message: 'Téléphone requis' });
  pattern(f.telephone, /^\d{10}$/, { message: 'Format : 10 chiffres' });
}
