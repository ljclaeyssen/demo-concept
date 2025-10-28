import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { DemoInteractiveContentComponent } from './demo-interactive-content.component';

@Component({
  selector: 'app-demo-interactive-slide',
  templateUrl: './demo-interactive.slide.html',
  styleUrl: './demo-interactive.slide.scss',
  imports: [Button, DemoInteractiveContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoInteractiveSlide {
  showDemo = signal(false);

  openDemo() {
    console.clear();
    this.showDemo.set(true);
  }
}
