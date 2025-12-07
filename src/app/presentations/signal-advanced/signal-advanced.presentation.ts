import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { SignalAdvancedTitleSlide } from './slides/01-title/title.slide';
import { SignalStoreSlide } from './slides/02-signal-store/signal-store.slide';
import { SignalAdvancedConclusionSlide } from './slides/03-conclusion/conclusion.slide';

// Reuse slides from the existing signal presentation
import { ComputedOptionsSlide } from '../signal/slides/07-computed-options/computed-options.slide';
import { InteractionEffectSlide } from '../signal/slides/10-interaction-effect/interaction-effect.slide';
import { RxjsInteropSlide } from '../signal/slides/11-rxjs-interop/rxjs-interop.slide';
import { RxjsOperatorsSlide } from '../signal/slides/12-rxjs-operators/rxjs-operators.slide';
import { ResourcesIntroSlide } from '../signal/slides/13-resources-intro/resources-intro.slide';

register();

@Component({
  selector: 'app-signal-advanced-presentation',
  templateUrl: './signal-advanced.presentation.html',
  styleUrl: './signal-advanced.presentation.scss',
  imports: [
    SignalAdvancedTitleSlide,
    ComputedOptionsSlide,
    InteractionEffectSlide,
    RxjsInteropSlide,
    RxjsOperatorsSlide,
    ResourcesIntroSlide,
    SignalStoreSlide,
    SignalAdvancedConclusionSlide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalAdvancedPresentation {}
