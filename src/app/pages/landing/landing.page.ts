import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface Presentation {
  title: string;
  description: string;
  route: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
  imports: [RouterLink, CardModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  presentations = signal<Presentation[]>([
    {
      title: 'Hello World',
      description: 'Apprenez à créer des présentations dans cette application. Ce tutoriel couvre le routage, les slides, la coloration syntaxique et les démos de composants interactifs.',
      route: '/hello-world',
      icon: '👋',
      color: '#667eea'
    }
    // Ajoutez plus de présentations ici au fur et à mesure que vous les créez
  ]);
}
