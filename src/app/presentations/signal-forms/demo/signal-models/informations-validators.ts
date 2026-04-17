import { SchemaPathTree, required, hidden } from '@angular/forms/signals';
import { Informations } from './eligibilite.interfaces';

export function informationsValidators(f: SchemaPathTree<Informations>) {
  required(f.genre, { message: 'Genre requis' });
  required(f.prenom, { message: 'Prénom requis' });
  required(f.nom, { message: 'Nom requis' });

  hidden(f.nomJeuneFille, ({valueOf}) => valueOf(f.genre) === 'male');
  required(f.nomJeuneFille, {
    when: ({valueOf}) => valueOf(f.genre) === 'female',
    message: 'Nom de jeune fille requis'
  });
}
