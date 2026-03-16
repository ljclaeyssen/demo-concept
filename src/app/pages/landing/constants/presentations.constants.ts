import { FilterOption, Presentation, PresentationType } from '../models/presentation.model';

export const PRESENTATIONS: Presentation[] = [
  {
    title: 'Hello World',
    description: 'Apprenez à créer des présentations dans cette application. Ce tutoriel couvre le routage, les slides, la coloration syntaxique et les démos de composants interactifs.',
    route: '/hello-world',
    icon: '👋',
    types: [PresentationType.LOCAL]
  },
  {
    title: 'Formulaires Typés',
    description: 'Découvrez comment créer des formulaires fortement typés en étendant FormGroup, pour un code plus maintenable et des erreurs détectées à la compilation.',
    route: '/typed-forms',
    icon: '📝',
    types: [PresentationType.PRO]
  },
  {
    title: 'Signal Forms',
    description: 'extends FormGroup vs Signal Forms (Angular 21) : validation, composition, custom controls, testing et stratégie de migration.',
    route: '/signal-forms',
    icon: '📡',
    types: [PresentationType.PRO]
  },
  {
    title: 'NgRx SignalStore',
    description: 'Comprenez pourquoi NgRx SignalStore remplace complètement le vieux NgRx Store : zéro boilerplate, signals natifs, et performance maximale.',
    route: '/signal-store',
    icon: '🚀',
    types: [PresentationType.PRO]
  },
  {
    title: 'Deferrable Views',
    description: 'Découvrez @defer pour lazy-loader vos composants au niveau template : réduisez drastiquement le bundle initial et optimisez les performances.',
    route: '/deferrable-views',
    icon: '⚡',
    types: [PresentationType.WIP]
  },
  {
    title: 'Les Signaux Angular',
    description: 'Bonnes pratiques et patterns pour utiliser les Signals Angular : basics, interop RxJS, Resources API, et migration progressive de votre codebase.',
    route: '/signal',
    icon: '⚡',
    types: [PresentationType.PRO]
  },
  {
    title: 'Introduction à RxJS',
    description: 'Découvrez la programmation réactive avec RxJS : Observables, opérateurs et intégration Angular. Parfait pour les débutants !',
    route: '/rxjs-intro',
    icon: '🌊',
    types: [PresentationType.SCHOOL]
  },
  {
    title: 'RxJS Avancé',
    description: 'Maîtrisez les Subjects, le state management avec BehaviorSubject, la combinaison de flux et la gestion des erreurs.',
    route: '/rxjs-advanced',
    icon: '🚀',
    types: [PresentationType.SCHOOL]
  },
  {
    title: 'Introduction aux Signals',
    description: 'Découvrez les Signals Angular : signal(), computed(), effect() et input()/output(). La nouvelle façon de gérer l\'état dans Angular.',
    route: '/signal-intro',
    icon: '⚡',
    types: [PresentationType.SCHOOL]
  },
  {
    title: 'Signals Avancé',
    description: 'Allez plus loin avec les Signals : interop RxJS, Resources API, options avancées et store maison.',
    route: '/signal-advanced',
    icon: '🚀',
    types: [PresentationType.SCHOOL]
  },
  {
    title: 'Évolution d\'Angular',
    description: 'De la v15 à la v19 : standalone, signals, @if/@for/@defer, zoneless... Tout ce qui a changé et pourquoi c\'est important.',
    route: '/angular-evolution',
    icon: '📈',
    types: [PresentationType.SCHOOL]
  },
  {
    title: 'Introduction aux Tests',
    description: 'Apprenez à tester vos services et composants Angular : méthodes, HTTP, formulaires, mocks. Karma vs Vitest.',
    route: '/testing-intro',
    icon: '🧪',
    types: [PresentationType.SCHOOL]
  }
];

export const FILTER_OPTIONS: FilterOption[] = [
  { label: 'Toutes', value: 'all' },
  { label: 'Pro', value: PresentationType.PRO },
  { label: 'Local', value: PresentationType.LOCAL },
  { label: 'WIP', value: PresentationType.WIP },
  { label: 'School', value: PresentationType.SCHOOL }
];
