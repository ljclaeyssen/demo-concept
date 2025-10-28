import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IntroSlide } from './slides/1-intro/intro.slide';
import { InstallationSlide } from './slides/2-installation/installation.slide';
import { BoilerplateNightmareSlide } from './slides/3-boilerplate-nightmare/boilerplate-nightmare.slide';
import { StateUpdatesSlide } from './slides/4-state-updates/state-updates.slide';
import { ComputedValuesSlide } from './slides/5-computed-values/computed-values.slide';
import { SideEffectsSlide } from './slides/6-side-effects/side-effects.slide';
import { TestingSlide } from './slides/7-testing/testing.slide';
import { ProviderSetupSlide } from './slides/8-provider-setup/provider-setup.slide';
import { CompositionSlide } from './slides/9-composition/composition.slide';
import { PerformanceSlide } from './slides/10-performance/performance.slide';
import { TypeScriptInferenceSlide } from './slides/11-typescript-inference/typescript-inference.slide';
import { VerdictSlide } from './slides/12-verdict/verdict.slide';
import { EslintSlide } from './slides/13-eslint/eslint.slide';
import { DemoContextSlide } from './slides/14-demo-context/demo-context.slide';
import { CodeDemoSlide } from './slides/15-code-demo/code-demo.slide';
import { NgrxDemoInteractiveSlide } from './slides/16-ngrx-demo-interactive/ngrx-demo-interactive.slide';
import { DemoInteractiveSlide } from './slides/17-demo-interactive/demo-interactive.slide';

register();

@Component({
  selector: 'app-signal-store-presentation',
  templateUrl: './signal-store.presentation.html',
  styleUrl: './signal-store.presentation.scss',
  imports: [IntroSlide, InstallationSlide, BoilerplateNightmareSlide, StateUpdatesSlide, ComputedValuesSlide, SideEffectsSlide, TestingSlide, ProviderSetupSlide, CompositionSlide, PerformanceSlide, TypeScriptInferenceSlide, VerdictSlide, EslintSlide, DemoContextSlide, CodeDemoSlide, NgrxDemoInteractiveSlide, DemoInteractiveSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalStorePresentation {}
