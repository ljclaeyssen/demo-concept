import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgrxDemoComponent } from '../../demo/components/ngrx-demo/ngrx-demo.component';

@Component({
  selector: 'app-ngrx-demo-interactive-slide',
  templateUrl: './ngrx-demo-interactive.slide.html',
  styleUrl: './ngrx-demo-interactive.slide.scss',
  imports: [NgrxDemoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxDemoInteractiveSlide {}
