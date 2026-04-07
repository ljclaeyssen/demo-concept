import { Gender, ContractType } from './eligibilite-form.enums';

interface SelectOption {
  label: string;
  value: string;
}

export const genderOptions: SelectOption[] = [
  { label: 'Homme', value: Gender.MALE },
  { label: 'Femme', value: Gender.FEMALE },
  { label: 'Autre', value: Gender.OTHER }
];

export const contractTypeOptions: SelectOption[] = [
  { label: 'CDI', value: ContractType.CDI },
  { label: 'CDD', value: ContractType.CDD },
  { label: 'Étudiant', value: ContractType.STUDENT },
  { label: 'Retraité', value: ContractType.RETIRED }
];
