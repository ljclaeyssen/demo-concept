import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-component-creation-slide',
  templateUrl: './component-creation.slide.html',
  styleUrl: './component-creation.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentCreationSlide {
  componentCode = signal(`import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

// Register Swiper web components
register();

@Component({
  selector: 'app-my-presentation',
  templateUrl: './my-presentation.html',
  styleUrl: './my-presentation.scss',
  imports: [
    // Import your slide components here
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyPresentation implements OnInit {
  ngOnInit(): void {
    // Swiper initialization happens automatically
  }
}`);

  templateCode = signal(`<div class="presentation-container">
  <h1 class="presentation-title">My Presentation Title</h1>

  <swiper-container
    class="presentation-swiper"
    navigation="true"
    pagination="true"
    keyboard="true"
    mousewheel="true">

    <swiper-slide>
      <app-my-first-slide />
    </swiper-slide>

    <swiper-slide>
      <app-my-second-slide />
    </swiper-slide>
  </swiper-container>
</div>`);
}
