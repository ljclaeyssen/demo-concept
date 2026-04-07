export interface Informations {
  genre: string;
  prenom: string;
  nom: string;
  nomJeuneFille: string;
}

export interface Coordonnees {
  adresse: string;
  email: string;
  telephone: string;
}

export interface Contrat {
  typeContrat: string;
  duree: number;
  montant: number;
  apport: number;
  assurance: boolean;
  codePromo: string;
}

export interface Eligibilite {
  informations: Informations;
  coordonnees: Coordonnees;
  contrat: Contrat;
}
