import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-display-code-slide',
  templateUrl: './display-code.slide.html',
  styleUrl: './display-code.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayCodeSlide {
  highlightCode = signal(`<pre><code [highlight]="myCode()" language="typescript"></code></pre>

// In your component:
myCode = signal(\`console.log('Hello World!');\`);`);
}
