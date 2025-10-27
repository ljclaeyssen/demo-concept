import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { WelcomeSlide } from './slides/welcome/welcome.slide';
import { RoutingSlide } from './slides/routing/routing.slide';
import { ComponentCreationSlide } from './slides/component-creation/component-creation.slide';
import { SlideComponentsSlide } from './slides/slide-components/slide-components.slide';
import { AddSlidesSlide } from './slides/add-slides/add-slides.slide';
import { DisplayCodeSlide } from './slides/display-code/display-code.slide';
import { ShowComponentCodeSlide } from './slides/show-component-code/show-component-code.slide';
import { LiveDemoSlide } from './slides/live-demo/live-demo.slide';
import { ConclusionSlide } from './slides/conclusion/conclusion.slide';

// Register Swiper web components
register();

@Component({
  selector: 'app-hello-world-presentation',
  templateUrl: './hello-world.presentation.html',
  styleUrl: './hello-world.presentation.scss',
  imports: [
    WelcomeSlide,
    RoutingSlide,
    ComponentCreationSlide,
    SlideComponentsSlide,
    AddSlidesSlide,
    DisplayCodeSlide,
    ShowComponentCodeSlide,
    LiveDemoSlide,
    ConclusionSlide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloWorldPresentation implements OnInit {
  ngOnInit(): void {
    // Initialize Swiper after view is ready
  }
}
