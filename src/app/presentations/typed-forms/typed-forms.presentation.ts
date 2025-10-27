import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IntroSlide } from './slides/intro.slide';
import { FormBuilderProblemSlide } from './slides/formbuilder-problem.slide';
import { AdaptiveCodeProblemSlide } from './slides/adaptive-code-problem.slide';

register();

@Component({
  selector: 'app-typed-forms-presentation',
  templateUrl: './typed-forms.presentation.html',
  styleUrl: './typed-forms.presentation.scss',
  imports: [IntroSlide, FormBuilderProblemSlide, AdaptiveCodeProblemSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypedFormsPresentation {}
