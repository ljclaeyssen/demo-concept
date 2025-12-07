import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { EvolutionTitleSlide } from './slides/01-title/title.slide';
import { Angular15Slide } from './slides/02-angular-15/angular-15.slide';
import { Angular16Slide } from './slides/03-angular-16/angular-16.slide';
import { Angular17Slide } from './slides/04-angular-17/angular-17.slide';
import { Angular18Slide } from './slides/05-angular-18/angular-18.slide';
import { Angular19Slide } from './slides/06-angular-19/angular-19.slide';
import { Angular20Slide } from './slides/07-angular-20/angular-20.slide';
import { Angular21Slide } from './slides/08-angular-21/angular-21.slide';

register();

@Component({
  selector: 'app-angular-evolution-presentation',
  templateUrl: './angular-evolution.presentation.html',
  styleUrl: './angular-evolution.presentation.scss',
  imports: [
    EvolutionTitleSlide,
    Angular15Slide,
    Angular16Slide,
    Angular17Slide,
    Angular18Slide,
    Angular19Slide,
    Angular20Slide,
    Angular21Slide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularEvolutionPresentation {}
