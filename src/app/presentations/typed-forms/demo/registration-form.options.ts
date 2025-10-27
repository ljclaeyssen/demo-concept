import {
  Gender,
  ContractType,
  HousingStatus,
  MaritalStatus
} from './registration-form.enums';

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
  { label: 'Retraité', value: ContractType.RETIRED },
  { label: 'Pension d\'invalidité', value: ContractType.DISABILITY }
];

export const housingStatusOptions: SelectOption[] = [
  { label: 'Propriétaire avec crédit', value: HousingStatus.OWNER_WITH_LOAN },
  { label: 'Propriétaire sans crédit', value: HousingStatus.OWNER_WITHOUT_LOAN },
  { label: 'Locataire', value: HousingStatus.TENANT },
  { label: 'Logé à titre gratuit', value: HousingStatus.FREE_ACCOMMODATION }
];

export const maritalStatusOptions: SelectOption[] = [
  { label: 'Célibataire', value: MaritalStatus.SINGLE },
  { label: 'Marié(e)', value: MaritalStatus.MARRIED },
  { label: 'Divorcé(e)', value: MaritalStatus.DIVORCED },
  { label: 'Veuf(ve)', value: MaritalStatus.WIDOWED },
  { label: 'Pacsé(e)', value: MaritalStatus.PACS }
];
