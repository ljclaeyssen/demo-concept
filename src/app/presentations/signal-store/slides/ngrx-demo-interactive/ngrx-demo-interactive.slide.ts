import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgrxDemoComponent } from '../../demo/components/ngrx-demo/ngrx-demo.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-ngrx-demo-interactive-slide',
  templateUrl: './ngrx-demo-interactive.slide.html',
  styleUrl: './ngrx-demo-interactive.slide.scss',
  imports: [NgrxDemoComponent, Button],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxDemoInteractiveSlide {
  showDemo = signal(false);

  openDemo() {
    console.clear();
    this.showDemo.set(true);
  }
}
