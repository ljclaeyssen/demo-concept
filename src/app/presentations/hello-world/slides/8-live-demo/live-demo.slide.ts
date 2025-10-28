import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { DemoButtonComponent } from '../../components/demo-button/demo-button.component';

@Component({
  selector: 'app-live-demo-slide',
  templateUrl: './live-demo.slide.html',
  styleUrl: './live-demo.slide.scss',
  imports: [Highlight, DemoButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveDemoSlide {
  step1Import = signal(`// Step 1: Import the component in your slide
import { DemoButtonComponent } from '../../components/demo-button/demo-button.component';`);

  step2AddToImports = signal(`// Step 2: Add it to the slide's imports
@Component({
  selector: 'app-live-demo-slide',
  templateUrl: './live-demo.slide.html',
  styleUrl: './live-demo.slide.scss',
  imports: [Highlight, DemoButtonComponent], // ← Add here
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveDemoSlide {}`);

  step3UseInTemplate = signal(`<!-- Step 3: Use it in your slide template -->
<div class="demo-section">
  <h3>Live Demo:</h3>
  <app-demo-button />
</div>`);

  styling = signal(`.demo-section {
  margin-top: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #667eea;

  h3 {
    margin-top: 0;
    color: #667eea;
  }
}`);
}
