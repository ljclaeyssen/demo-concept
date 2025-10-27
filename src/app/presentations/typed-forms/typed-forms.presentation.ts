import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {IntroSlide} from './slides/intro/intro.slide';
import {FormBuilderProblemSlide} from './slides/formbuilder-problem/formbuilder-problem.slide';
import {AdaptiveCodeProblemSlide} from './slides/adaptive-code-problem/adaptive-code-problem.slide';
import {TestingProblemSlide} from './slides/testing-problem/testing-problem.slide';
import {TypedSolutionSlide} from './slides/typed-solution/typed-solution.slide';
import {AdaptiveSolutionSlide} from './slides/adaptive-solution/adaptive-solution.slide';
import {TestingSolutionSlide} from './slides/testing-solution/testing-solution.slide';
import {CompositionSlide} from './slides/composition/composition.slide';
import {RefactoringSlide} from './slides/refactoring/refactoring.slide';
import {ReusabilitySlide} from './slides/reusability/reusability.slide';
import {ErrorDiscoverySlide} from './slides/error-discovery/error-discovery.slide';
import {MaintenanceSlide} from './slides/maintenance/maintenance.slide';
import {VerdictSlide} from './slides/verdict/verdict.slide';
import {EslintSlide} from './slides/eslint/eslint.slide';
import {LiveDemoSlide} from './slides/live-demo/live-demo.slide';

register();

@Component({
  selector: 'app-typed-forms-presentation',
  templateUrl: './typed-forms.presentation.html',
  styleUrl: './typed-forms.presentation.scss',
  imports: [IntroSlide, FormBuilderProblemSlide, AdaptiveCodeProblemSlide, TestingProblemSlide, TypedSolutionSlide, AdaptiveSolutionSlide, TestingSolutionSlide, CompositionSlide, RefactoringSlide, ReusabilitySlide, ErrorDiscoverySlide, MaintenanceSlide, VerdictSlide, EslintSlide, LiveDemoSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypedFormsPresentation {}
