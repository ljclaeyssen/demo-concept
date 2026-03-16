import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { VersusSlide } from './slides/00-versus/versus.slide';
import { ContextSlide } from './slides/01-context/context.slide';
import { PhilosophySlide } from './slides/02-philosophy/philosophy.slide';
import { FormModelSlide } from './slides/03-form-model/form-model.slide';
import { ValidationSlide } from './slides/04-validation/validation.slide';
import { CrossFieldSlide } from './slides/05-cross-field/cross-field.slide';
import { ValueChangesSlide } from './slides/06-value-changes/value-changes.slide';
import { DerivedStateSlide } from './slides/07-derived-state/derived-state.slide';
import { AsyncValidationSlide } from './slides/08-async-validation/async-validation.slide';
import { CustomControlsSlide } from './slides/09-custom-controls/custom-controls.slide';
import { CompositionSlide } from './slides/10-composition/composition.slide';
import { TestingSlide } from './slides/11-testing/testing.slide';
import { FullExampleSlide } from './slides/12-full-example/full-example.slide';
import { NouveautesSlide } from './slides/13-nouveautes/nouveautes.slide';
import { VerdictSlide } from './slides/14-verdict/verdict.slide';

register();

@Component({
  selector: 'app-signal-forms-presentation',
  templateUrl: './signal-forms.presentation.html',
  styleUrl: './signal-forms.presentation.scss',
  imports: [VersusSlide, ContextSlide, PhilosophySlide, FormModelSlide, ValidationSlide, CrossFieldSlide, ValueChangesSlide, DerivedStateSlide, AsyncValidationSlide, CustomControlsSlide, CompositionSlide, TestingSlide, FullExampleSlide, NouveautesSlide, VerdictSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalFormsPresentation {}
