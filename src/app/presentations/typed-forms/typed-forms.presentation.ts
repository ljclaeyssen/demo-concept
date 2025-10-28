import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {IntroSlide} from './slides/1-intro/intro.slide';
import {FormBuilderProblemSlide} from './slides/2-formbuilder-problem/formbuilder-problem.slide';
import {AdaptiveCodeProblemSlide} from './slides/3-adaptive-code-problem/adaptive-code-problem.slide';
import {TestingProblemSlide} from './slides/4-testing-problem/testing-problem.slide';
import {TypedSolutionSlide} from './slides/5-typed-solution/typed-solution.slide';
import {AdaptiveSolutionSlide} from './slides/6-adaptive-solution/adaptive-solution.slide';
import {TestingSolutionSlide} from './slides/7-testing-solution/testing-solution.slide';
import {CompositionSlide} from './slides/8-composition/composition.slide';
import {RefactoringSlide} from './slides/9-refactoring/refactoring.slide';
import {ReusabilitySlide} from './slides/10-reusability/reusability.slide';
import {ErrorDiscoverySlide} from './slides/11-error-discovery/error-discovery.slide';
import {MaintenanceSlide} from './slides/12-maintenance/maintenance.slide';
import {VerdictSlide} from './slides/13-verdict/verdict.slide';
import {EslintSlide} from './slides/14-eslint/eslint.slide';
import {LiveDemoSlide} from './slides/15-live-demo/live-demo.slide';

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
