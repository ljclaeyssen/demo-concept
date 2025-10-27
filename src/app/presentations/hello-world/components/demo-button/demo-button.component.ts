import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrl: './demo-button.component.scss',
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoButtonComponent {
  count = signal(0);

  increment(): void {
    this.count.update(c => c + 1);
  }
}
