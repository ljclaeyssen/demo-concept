import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-slide-components-slide',
  templateUrl: './slide-components.slide.html',
  styleUrl: './slide-components.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponentsSlide {
  folderStructure = signal(`src/app/presentations/my-presentation/
├── slides/
│   ├── intro.slide.ts
│   ├── intro.slide.html
│   ├── intro.slide.scss
│   ├── concepts.slide.ts
│   ├── concepts.slide.html
│   ├── concepts.slide.scss
│   └── ... (more slides)
├── my-presentation.ts
├── my-presentation.html
└── my-presentation.scss`);

  slideComponentCode = signal(`import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-intro-slide',
  templateUrl: './intro.slide.html',
  styleUrl: './intro.slide.scss',
  imports: [Highlight], // Import dependencies needed in this slide
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroSlide {
  // Add your slide logic and data here
  myCode = signal(\`console.log('Hello!');\`);
}`);

  slideTemplateCode = signal(`<div class="slide-content">
  <h2>My Slide Title</h2>
  <p>Slide content...</p>
  <pre><code [highlight]="myCode()" language="typescript"></code></pre>
</div>`);
}
