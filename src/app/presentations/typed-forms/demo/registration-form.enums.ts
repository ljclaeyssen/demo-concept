export enum ContactFormFields {
  GENDER = 'gender',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  MAIDEN_NAME = 'maidenName',
  ADDRESS = 'address',
  PHONE = 'phone',
  EMAIL = 'email'
}

export enum SituationFormFields {
  CONTRACT_TYPE = 'contractType',
  INCOME = 'income',
  HOUSING_STATUS = 'housingStatus',
  MARITAL_STATUS = 'maritalStatus'
}

export enum RegistrationFormFields {
  CONTACT = 'contact',
  SITUATION = 'situation'
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
  RETIRED = 'retired',
  DISABILITY = 'disability'
}

export enum HousingStatus {
  OWNER_WITH_LOAN = 'ownerWithLoan',
  OWNER_WITHOUT_LOAN = 'ownerWithoutLoan',
  TENANT = 'tenant',
  FREE_ACCOMMODATION = 'freeAccommodation'
}

export enum MaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
  PACS = 'pacs'
}
