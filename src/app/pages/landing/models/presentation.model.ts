export enum PresentationType {
  PRO = 'pro',
  LOCAL = 'local',
  WIP = 'wip',
  SCHOOL = 'school'
}

export interface Presentation {
  title: string;
  description: string;
  route: string;
  icon: string;
  types: PresentationType[];
}

export interface FilterOption {
  label: string;
  value: PresentationType | 'all';
}
