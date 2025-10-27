import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-add-slides-slide',
  templateUrl: './add-slides.slide.html',
  styleUrl: './add-slides.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSlidesSlide {
  slideCode = signal(`<!-- In my-presentation.html -->
<swiper-slide>
  <app-intro-slide />
</swiper-slide>

<swiper-slide>
  <app-concepts-slide />
</swiper-slide>

<swiper-slide>
  <app-demo-slide />
</swiper-slide>`);

  importsCode = signal(`// In my-presentation.ts
import { IntroSlide } from './slides/intro.slide';
import { ConceptsSlide } from './slides/concepts.slide';
import { DemoSlide } from './slides/demo.slide';

@Component({
  // ...
  imports: [
    IntroSlide,
    ConceptsSlide,
    DemoSlide
  ]
})`);
}
