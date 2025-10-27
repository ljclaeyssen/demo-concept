import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IntroSlide } from './slides/intro.slide';
import { FormBuilderProblemSlide } from './slides/formbuilder-problem.slide';
import { AdaptiveCodeProblemSlide } from './slides/adaptive-code-problem.slide';
import { TestingProblemSlide } from './slides/testing-problem.slide';
import { TypedSolutionSlide } from './slides/typed-solution.slide';
import { AdaptiveSolutionSlide } from './slides/adaptive-solution.slide';
import { TestingSolutionSlide } from './slides/testing-solution.slide';
import { CompositionSlide } from './slides/composition.slide';
import { LiveDemoSlide } from './slides/live-demo.slide';

register();

@Component({
  selector: 'app-typed-forms-presentation',
  templateUrl: './typed-forms.presentation.html',
  styleUrl: './typed-forms.presentation.scss',
  imports: [IntroSlide, FormBuilderProblemSlide, AdaptiveCodeProblemSlide, TestingProblemSlide, TypedSolutionSlide, AdaptiveSolutionSlide, TestingSolutionSlide, CompositionSlide, LiveDemoSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypedFormsPresentation {}
