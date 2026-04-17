import { SchemaPathTree, required, min, max, validate, disabled } from '@angular/forms/signals';
import { Contrat } from './eligibilite.interfaces';

export function contratValidators(f: SchemaPathTree<Contrat>) {
  required(f.typeContrat, { message: 'Type de contrat requis' });

  required(f.montant, { message: 'Montant requis' });
  min(f.montant, 1000, { message: 'Minimum 1 000 €' });
  max(f.montant, 500000, { message: 'Maximum 500 000 €' });

  required(f.duree, { message: 'Durée requise' });
  min(f.duree, 6, { message: 'Minimum 6 mois' });
  validate(f.duree, ({value, valueOf}) => {
    const type = valueOf(f.typeContrat);
    const mx = type === 'cdd' ? 60 : 360;
    return value() > mx
      ? { kind: 'maxDuree', message: `Max ${mx} mois` }
      : null;
  });

  min(f.apport, 0, { message: 'Apport positif' });

  validate(f.assurance, ({value, valueOf}) => {
    const montant = valueOf(f.montant);
    const apport = valueOf(f.apport);
    const ratio = montant > 0 ? apport / montant : 0;
    if (ratio <= 0.5 && !value()) {
      return { kind: 'assuranceRequise', message: 'Assurance obligatoire' };
    }
    return null;
  });

  disabled(f.codePromo, ({valueOf}) => valueOf(f.montant) < 10000);

  required(f.dateDebut, { message: 'Date de début requise' });
  required(f.dateFin, { message: 'Date de fin requise' });
  validate(f.dateFin, ({value, valueOf}) => {
    const debut = valueOf(f.dateDebut);
    const fin = value();
    if (debut && fin && fin <= debut) {
      return { kind: 'dateFinAvantDebut', message: 'Doit être après la date de début' };
    }
    return null;
  });
}
