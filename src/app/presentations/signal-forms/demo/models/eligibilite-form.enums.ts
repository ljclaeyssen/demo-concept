export enum InformationsFormFields {
  GENRE = 'genre',
  PRENOM = 'prenom',
  NOM = 'nom',
  NOM_JEUNE_FILLE = 'nomJeuneFille'
}

export enum CoordonneesFormFields {
  ADRESSE = 'adresse',
  EMAIL = 'email',
  TELEPHONE = 'telephone'
}

export enum ContratFormFields {
  TYPE_CONTRAT = 'typeContrat',
  DUREE = 'duree',
  MONTANT = 'montant',
  APPORT = 'apport',
  ASSURANCE = 'assurance',
  CODE_PROMO = 'codePromo',
  DATE_DEBUT = 'dateDebut',
  DATE_FIN = 'dateFin'
}

export enum EligibiliteFormFields {
  INFORMATIONS = 'informations',
  COORDONNEES = 'coordonnees',
  CONTRAT = 'contrat'
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export enum ContractType {
  CDI = 'cdi',
  CDD = 'cdd',
  STUDENT = 'student',
  RETIRED = 'retired'
}
