import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IntroSlide } from './slides/intro/intro.slide';
import { BoilerplateNightmareSlide } from './slides/boilerplate-nightmare/boilerplate-nightmare.slide';
import { StateUpdatesSlide } from './slides/state-updates/state-updates.slide';
import { ComputedValuesSlide } from './slides/computed-values/computed-values.slide';
import { SideEffectsSlide } from './slides/side-effects/side-effects.slide';
import { TestingSlide } from './slides/testing/testing.slide';
import { ProviderSetupSlide } from './slides/provider-setup/provider-setup.slide';
import { CompositionSlide } from './slides/composition/composition.slide';
import { PerformanceSlide } from './slides/performance/performance.slide';
import { TypeScriptInferenceSlide } from './slides/typescript-inference/typescript-inference.slide';
import { VerdictSlide } from './slides/verdict/verdict.slide';
import { EslintSlide } from './slides/eslint/eslint.slide';
import { CodeDemoSlide } from './slides/code-demo/code-demo.slide';
import { DemoInteractiveSlide } from './slides/demo-interactive/demo-interactive.slide';

register();

@Component({
  selector: 'app-signal-store-presentation',
  templateUrl: './signal-store.presentation.html',
  styleUrl: './signal-store.presentation.scss',
  imports: [IntroSlide, BoilerplateNightmareSlide, StateUpdatesSlide, ComputedValuesSlide, SideEffectsSlide, TestingSlide, ProviderSetupSlide, CompositionSlide, PerformanceSlide, TypeScriptInferenceSlide, VerdictSlide, EslintSlide, CodeDemoSlide, DemoInteractiveSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalStorePresentation {}
