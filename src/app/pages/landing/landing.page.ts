import { Component, ChangeDetectionStrategy, signal, computed, isDevMode } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Presentation {
  title: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  private allPresentations = signal<Presentation[]>([
    {
      title: 'Hello World',
      description: 'Apprenez à créer des présentations dans cette application. Ce tutoriel couvre le routage, les slides, la coloration syntaxique et les démos de composants interactifs.',
      route: '/hello-world',
      icon: '👋'
    },
    {
      title: 'Formulaires Typés',
      description: 'Découvrez comment créer des formulaires fortement typés en étendant FormGroup, pour un code plus maintenable et des erreurs détectées à la compilation.',
      route: '/typed-forms',
      icon: '📝'
    },
    {
      title: 'NgRx SignalStore',
      description: 'Comprenez pourquoi NgRx SignalStore remplace complètement le vieux NgRx Store : zéro boilerplate, signals natifs, et performance maximale.',
      route: '/signal-store',
      icon: '🚀'
    },
    {
      title: 'Deferrable Views (WIP)',
      description: 'Découvrez @defer pour lazy-loader vos composants au niveau template : réduisez drastiquement le bundle initial et optimisez les performances.',
      route: '/deferrable-views',
      icon: '⚡'
    },
    {
      title: 'Les Signaux Angular',
      description: 'Bonnes pratiques et patterns pour utiliser les Signals Angular : basics, interop RxJS, Resources API, et migration progressive de votre codebase.',
      route: '/signal',
      icon: '⚡'
    }
  ]);

  presentations = computed(() => {
    const all = this.allPresentations();
    // Filter out Hello World in production
    if (!isDevMode()) {
      return all.filter(p => p.route !== '/hello-world');
    }
    return all;
  });
}
