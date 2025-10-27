import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-routing-slide',
  templateUrl: './routing.slide.html',
  styleUrl: './routing.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutingSlide {
  routingCode = signal(`{
  path: 'my-presentation',
  loadComponent: () => import('./presentations/my-presentation/my-presentation')
    .then(m => m.MyPresentation)
}`);
}
