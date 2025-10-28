import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
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
  presentations = signal<Presentation[]>([
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
    }
  ]);
}
