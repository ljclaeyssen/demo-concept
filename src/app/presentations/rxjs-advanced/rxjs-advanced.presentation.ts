import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { AdvancedTitleSlide } from './slides/01-title/title.slide';
import { SubjectsSlide } from './slides/02-subjects/subjects.slide';
import { StateManagementSlide } from './slides/03-state-management/state-management.slide';
import { CombinationOperatorsSlide } from './slides/04-combination-operators/combination-operators.slide';
import { ErrorHandlingSlide } from './slides/05-error-handling/error-handling.slide';
import { PracticalExampleSlide } from './slides/06-practical-example/practical-example.slide';
import { AdvancedConclusionSlide } from './slides/07-conclusion/conclusion.slide';

register();

@Component({
  selector: 'app-rxjs-advanced-presentation',
  templateUrl: './rxjs-advanced.presentation.html',
  styleUrl: './rxjs-advanced.presentation.scss',
  imports: [
    AdvancedTitleSlide,
    SubjectsSlide,
    StateManagementSlide,
    CombinationOperatorsSlide,
    ErrorHandlingSlide,
    PracticalExampleSlide,
    AdvancedConclusionSlide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsAdvancedPresentation {}
